// Game state machine and orchestration of all subsystems.
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { Emitter, damp, clamp, mulberry32, isMobile } from './util.js';
import { Track } from './track.js';
import { Player } from './player.js';
import { FollowCamera } from './camera.js';
import { createCharacter } from './character.js';
import { createMonkeys } from './monkeys.js';
import { createEnvironment, buildPiece, disposePiece, createWarmupGroup } from './scenery.js';
import { buildObstacle, smashObstacle } from './obstacles.js';
import { createCollectibles } from './collectibles.js';
import { createParticles } from './particles.js';
import { createAudio } from './audio.js';
import { createHUD } from './hud.js';
import { createEffects } from './effects.js';
import { loadSave, writeSave, UPGRADES, upgradeCost } from './save.js';
import { tickMaterials } from './fx-materials.js';

const POWER_KEYS = ['shield', 'magnet', 'boost'];

export class Game {
  constructor({ renderer, scene, camera, input, quality }) {
    this.renderer = renderer; this.scene = scene; this.camera = camera; this.input = input;
    this.quality = quality;
    this.events = new Emitter();
    this.save = loadSave();
    this.state = 'menu';
    this.time = 0;
    this.runSeed = 1;
    this.run = this._freshRun();
    this.power = { shield: 0, magnet: 0, boost: 0 }; // remaining seconds
    this.threat = 0.35; // monkeys lurk in the background on the title screen
    this.slowmo = 1;

    // Track + player
    this.track = new Track(this.runSeed);
    this.track.onPieceAdded = (p) => this._onPieceAdded(p);
    this.track.onPieceRemoved = (p) => this._onPieceRemoved(p);
    this.pieceGroups = new Map();

    // Subsystems
    this.env = createEnvironment(scene, renderer, quality);
    this.collectibles = createCollectibles(scene, this.track);
    this.particles = createParticles(scene, renderer);
    this.audio = createAudio(this.save.settings);
    this.character = createCharacter();
    scene.add(this.character.group);
    this.monkeys = createMonkeys(scene);
    this.effects = createEffects(renderer, scene, camera, quality);
    this.followCam = new FollowCamera(camera);
    this.player = new Player(this.track, this.events);
    this.hud = createHUD(this);

    // Now that callbacks exist, (re)build the initial track so visuals are created.
    this.track.reset(this.runSeed);
    this.player.reset(this.track.root);
    this._anchor = new THREE.Vector3();
    this._headingAngle = 0;
    // Per-frame context objects are allocated once and mutated (no garbage in the hot loop).
    this._ctxCollect = {}; this._ctxCam = {}; this._ctxChar = {}; this._ctxEnv = {}; this._ctxAudio = {};
    this._ctxMonkeys = { sample: (dist, out) => this.track.sampleBehind(this.player.piece, this.player.u, this.player.lateral, dist, out) };
    this.followCam.reset(0, this.player.updateWorld());

    this._bindEvents();
    this._bindInput();
    this._warmupShaders();
  }

  // Compile every shader once at boot so the first waterfall, flame or pickup never stalls a frame.
  _warmupShaders() {
    const group = new THREE.Group();
    group.add(createWarmupGroup(), this.collectibles.warmupGroup());
    this.scene.add(group);
    try { this.renderer.compile(this.scene, this.camera); } catch { /* compile is best-effort */ }
    this.scene.remove(group);
  }

  _freshRun() { return { score: 0, distance: 0, coins: 0, multiplier: 1, best: false, deathType: null, time: 0 }; }

  // ---- track visuals -------------------------------------------------------------------------
  _onPieceAdded(piece) {
    const rng = mulberry32(piece.seed);
    const group = buildPiece(piece, { rng, quality: this.quality });
    group.position.copy(piece.origin);
    group.rotation.y = piece.angle;
    for (const o of piece.obstacles) {
      const obj = buildObstacle(o, piece, { rng, quality: this.quality });
      if (obj) { obj.position.set(0, 0, 0); group.add(obj); o.visual = obj; }
    }
    piece.visual = group;
    this.scene.add(group);
    if (this.collectibles) this.collectibles.addPiece(piece);
  }
  _onPieceRemoved(piece) {
    if (piece.visual) { this.scene.remove(piece.visual); disposePiece(piece.visual); piece.visual = null; }
    if (this.collectibles) this.collectibles.removePiece(piece);
  }

  // ---- events ----------------------------------------------------------------------------------
  _bindEvents() {
    const ev = this.events, p = this.player;
    ev.on('jump', () => { this.audio.play('jump'); this.character.setState('jump'); this.particles.emit('dust', p.worldPos, { count: 6 }); });
    ev.on('land', () => { this.audio.play('land'); this.particles.emit('dust', p.worldPos, { count: 8 }); this.followCam.addShake(0.12); });
    ev.on('slide', () => { this.audio.play('slide'); this.character.setState('slide'); this.particles.emit('slide', p.worldPos, { count: 10 }); });
    ev.on('fastfall', () => { this.audio.play('whoosh'); });
    ev.on('lanechange', (dir) => { this.audio.play('step', { pitch: 1.2 }); });
    ev.on('turn', (dir) => { this.audio.play('turn'); this.particles.emit('dust', p.worldPos, { count: 10 }); this.character.setState('turn', dir); });
    ev.on('stumble', (o) => {
      this.audio.play('stumble'); this.followCam.addShake(0.45); this.effects.flash(0xff8844, 0.25);
      this.character.setState('stumble'); this.particles.emit('dust', p.worldPos, { count: 14 });
      this.threat = 1;
    });
    ev.on('smash', (o) => { this.audio.play('smash'); this.followCam.addShake(0.35); if (o.visual) { smashObstacle(o.visual); this.particles.emit('smash', p.worldPos, { count: 20 }); } });
    ev.on('shieldbreak', (o) => {
      this.audio.play('shieldbreak'); this.followCam.addShake(0.4); this.effects.flash(0x66ccff, 0.35);
      this.power.shield = 0; if (o.visual) smashObstacle(o.visual);
      this.particles.emit('shieldpop', p.worldPos, { count: 30 }); this.hud.toast('Shield absorbed the hit!');
    });
    ev.on('die', (info) => this._onDeath(info));
    ev.on('piece', (piece) => { this.audio.setBiome(piece.kind); });
  }

  _bindInput() {
    this.input.on('action', (a) => {
      if (this.state === 'running') this.player.handleAction(a);
    });
    this.input.on('tap', () => { if (this.state === 'menu' || this.state === 'dead') this._tapToStart(); });
    this.input.on('confirm', () => { if (this.state === 'menu' || this.state === 'dead') this._tapToStart(); });
    this.input.on('pause', () => this.togglePause());
    this.input.on('escape', () => { if (this.state === 'running' || this.state === 'paused') this.togglePause(); else if (this.state === 'shop') this.closeShop(); });
    this.input.on('mute', () => this.toggleSound());
    document.addEventListener('visibilitychange', () => { if (document.hidden && this.state === 'running') this.togglePause(); });
  }

  _tapToStart() {
    if (this.hud.blocksTap && this.hud.blocksTap()) return;
    this.startRun();
  }

  // ---- lifecycle -------------------------------------------------------------------------------
  startRun() {
    if (this.state === 'running') return;
    this.audio.unlock();
    const forced = new URLSearchParams(location.search).get('seed');
    this.runSeed = forced ? Number(forced) : (Math.random() * 1e9) | 0;
    this.run = this._freshRun();
    this.power = { shield: 0, magnet: 0, boost: 0 };
    this.threat = 1;
    this.slowmo = 1;
    this.collectibles.reset();
    this.particles.reset();
    this.track.reset(this.runSeed);
    this.player.reset(this.track.root);
    this.character.reset();
    this.character.setState('run');
    this.monkeys.reset();
    this._headingAngle = 0;
    this.followCam.reset(0, this._computeAnchor());
    this.followCam.angle = 0;
    this.state = 'running';
    if (this.save.upgrades.head > 0) this.activatePower('boost', true);
    this.audio.startMusic();
    this.audio.play('start');
    this.audio.play('monkeys');
    this.input.clear();
    this.events.emit('start');
    this.hud.hideMenus();
  }

  _onDeath(info) {
    this.run.deathType = info.type;
    this.state = 'dying';
    this.followCam.addShake(info.type === 'fall' ? 0.3 : 0.9);
    this.character.setState(info.type === 'fall' ? 'fall' : info.type === 'burn' ? 'burn' : info.type === 'caught' ? 'caught' : 'hit');
    this.audio.play(info.type === 'fall' ? 'fall' : info.type === 'burn' ? 'burn' : 'hit');
    this.audio.play('monkeys');
    if (info.type !== 'fall') { this.monkeys.pounce(); this.effects.flash(info.type === 'burn' ? 0xff5500 : 0xffffff, 0.5); this.particles.emit(info.type === 'burn' ? 'ember' : 'smash', this.player.worldPos, { count: 30 }); }
    this.threat = 1;
    this.slowmo = 0.55;
    this.audio.stopMusic(1.2);
    this.events.emit('death', info);
    setTimeout(() => this._finishRun(), 1500);
  }

  _finishRun() {
    if (this.state !== 'dying') return;
    this.state = 'dead';
    const s = this.save;
    s.runs++;
    s.coins += this.run.coins;
    s.totalCoins += this.run.coins;
    this.run.score = Math.floor(this.run.score);
    if (this.run.score > s.best) { s.best = this.run.score; this.run.best = true; }
    if (this.run.distance > s.bestDistance) s.bestDistance = Math.floor(this.run.distance);
    writeSave(s);
    this.events.emit('gameover', this.run);
    this.hud.showGameOver(this.run);
  }

  // Leave a run (from the pause screen) and return to the title screen with a fresh preview track.
  quitToMenu() {
    if (this.state === 'menu') return;
    this.state = 'menu';
    this.audio.setPaused(false);
    this.audio.stopMusic(0.5);
    this.collectibles.reset();
    this.particles.reset();
    this.power = { shield: 0, magnet: 0, boost: 0 };
    this.threat = 0.35;
    this.track.reset((Math.random() * 1e9) | 0);
    this.player.reset(this.track.root);
    this.character.reset();
    this.monkeys.reset();
    this._headingAngle = 0;
    this.followCam.reset(0, this._computeAnchor());
    this.run = this._freshRun();
    this.hud.showMenu('menu');
    this.events.emit('menu');
  }
  showMenu() { this.quitToMenu(); }

  togglePause() {
    if (this.state === 'running') { this.state = 'paused'; this.audio.setPaused(true); this.hud.showPause(); this.events.emit('pause'); }
    else if (this.state === 'paused') { this.state = 'running'; this.audio.setPaused(false); this.hud.hideMenus(); this.input.clear(); this.events.emit('resume'); }
  }
  toggleSound() { const s = this.save.settings; s.sound = !s.sound; s.music = s.sound; this.audio.setEnabled(s.sound, s.music); writeSave(this.save); this.events.emit('settings'); }
  // Quality can be changed live from the pause/settings screens; 'auto' resolves in main.js.
  setQuality(q) {
    this.save.settings.quality = q; writeSave(this.save);
    const resolved = q === 'auto' ? (this.resolveAutoQuality ? this.resolveAutoQuality() : 'high') : q;
    if (resolved !== this.quality) {
      this.quality = resolved;
      this.effects.setQuality(resolved);
      this.env.setQuality(resolved);
      this.renderer.shadowMap.enabled = resolved !== 'low';
      this.scene.traverse((o) => { if (o.material) { const ms = Array.isArray(o.material) ? o.material : [o.material]; for (const m of ms) m.needsUpdate = true; } });
      this.events.emit('quality', resolved);
    }
    this.events.emit('settings');
  }

  openShop() { if (this.state === 'menu' || this.state === 'dead') { this._shopReturn = this.state; this.state = 'shop'; this.hud.showShop(); } }
  closeShop() { if (this.state === 'shop') { this.state = this._shopReturn || 'menu'; this.hud.showMenu(this.state === 'dead' ? 'dead' : 'menu'); } }
  buyUpgrade(key) {
    const lv = this.save.upgrades[key] || 0;
    const u = UPGRADES[key];
    if (lv >= u.max) return false;
    const cost = upgradeCost(key, lv);
    if (this.save.coins < cost) { this.audio.play('deny'); return false; }
    this.save.coins -= cost; this.save.upgrades[key] = lv + 1; writeSave(this.save);
    this.audio.play('buy'); this.events.emit('upgrade', key);
    return true;
  }

  // ---- power-ups -------------------------------------------------------------------------------
  powerDuration(type) {
    const lv = this.save.upgrades[type] || 0;
    const base = type === 'shield' ? CONFIG.shieldDuration : type === 'magnet' ? CONFIG.magnetDuration : CONFIG.boostDuration;
    return base + UPGRADES[type].bonus(lv);
  }
  activatePower(type, silent = false) {
    this.power[type] = this.powerDuration(type);
    if (!silent) { this.audio.play('powerup', { type }); this.effects.flash(type === 'shield' ? 0x55bbff : type === 'magnet' ? 0xff66aa : 0xffcc33, 0.3); this.particles.emit('burst', this.player.worldPos, { count: 30, type }); }
    this.hud.toast(type === 'shield' ? 'Shield!' : type === 'magnet' ? 'Coin Magnet!' : 'Boost!');
    this.events.emit('power', type);
  }

  get multiplier() {
    const m = 1 + Math.floor(this.run.distance / CONFIG.multiplierEvery);
    return Math.min(CONFIG.maxMultiplier, m) * (this.power.boost > 0 ? 2 : 1);
  }

  // ---- per-frame -------------------------------------------------------------------------------
  _computeAnchor() {
    const p = this.player;
    return this.track.worldPosition(p.piece, p.u, p.lateral * 0.55, 0, this._anchor);
  }

  update(rawDt) {
    const running = this.state === 'running';
    const dying = this.state === 'dying';
    const dt = rawDt * (dying ? this.slowmo : 1);
    this.time += dt;

    if (running || dying) {
      const p = this.player;
      // power-up timers
      for (const k of POWER_KEYS) if (this.power[k] > 0) { this.power[k] -= dt; if (this.power[k] <= 0) { this.power[k] = 0; this.events.emit('powerend', k); if (running) this.hud.toast(''); } }
      p.shield = this.power.shield > 0;
      p.boost = this.power.boost > 0;
      p.boostFactor = Math.min(1, this.power.boost); // speed eases back to normal over the last second
      p.update(dt);

      if (running) {
        this.run.distance = p.distance;
        this.run.time += dt;
        this.run.multiplier = this.multiplier;
        this.run.score += p.speed * dt * CONFIG.distanceScorePerMetre * this.run.multiplier;
        // threat decays; the monkeys hang close at the start and after stumbles
        const decay = p.stumbleTimer > 0 ? 0 : 0.28;
        this.threat = Math.max(0, this.threat - decay * dt);
        if (p.runTime < 5) this.threat = Math.max(this.threat, 1 - p.runTime / 5);

        // collectibles
        const cc = this._ctxCollect;
        cc.playerPos = p.worldPos; cc.playerY = p.y; cc.hitboxHeight = p.hitboxHeight;
        cc.magnet = this.power.magnet > 0 || this.power.boost > 0; cc.magnetRadius = CONFIG.magnetRadius + (this.power.boost > 0 ? 4 : 0);
        cc.fwd = p.piece.fwd; cc.speed = p.speed; cc.time = this.time;
        const res = this.collectibles.update(dt, cc);
        if (res.coins > 0) {
          const value = 1;
          this.run.coins += res.coins * value;
          this.run.score += res.coins * (CONFIG.coinScore + UPGRADES.coin.bonus(this.save.upgrades.coin)) * this.run.multiplier;
          this.audio.play('coin', { count: res.coins });
          for (const pos of res.coinPositions) this.particles.emit('sparkle', pos, { count: 5 });
          this.events.emit('coin', res.coins);
        }
        for (const t of res.powerups) this.activatePower(t);
      }
    }

    // Heading & anchor for camera and character
    const p = this.player;
    const targetAngle = p.piece.angle;
    this._headingAngle = damp(this._headingAngle, this._headingAngle + wrapAngleDelta(this._headingAngle, targetAngle), 1 / CONFIG.turnHeadingTime * 1.4, dt);
    const anchor = this._computeAnchor();
    if (this.state === 'menu') this.followCam.updateMenu(dt, p.worldPos, this.time);
    else {
      const c = this._ctxCam;
      c.anchor = anchor; c.playerPos = p.worldPos; c.targetAngle = targetAngle; c.speed01 = p.speed01; c.boost = this.power.boost > 0;
      c.dead = !p.alive; c.deathType = p.deathType; c.playerY = p.y;
      this.followCam.update(dt, c);
    }

    // Character placement + animation
    const g = this.character.group;
    g.position.copy(p.worldPos);
    g.rotation.y = this._headingAngle + (p.alive ? -p.lateralVel * 0.045 : 0);
    const idle = this.state === 'menu';
    const ch = this._ctxChar;
    ch.state = idle ? 'idle' : p.state; ch.speed = idle ? 0 : p.speed; ch.speed01 = p.speed01; ch.y = p.y; ch.vy = p.vy; ch.lateralVel = p.lateralVel;
    ch.turnLean = p.turnLean; ch.stumble01 = p.stumbleTimer / CONFIG.stumbleWindow; ch.shield = p.shield; ch.boost = p.boost;
    ch.magnet = this.power.magnet > 0; ch.dead = !p.alive; ch.deathType = p.deathType; ch.deadTime = p.deadTime; ch.time = this.time;
    this.character.update(dt, ch);
    if (p.alive && p.state === 'run' && p.onGround) {
      // footsteps paced by speed
      const cadence = 0.62 / Math.max(0.3, p.speed / CONFIG.startSpeed);
      if (this.time - p.lastFootstep > cadence * 0.5) { p.lastFootstep = this.time; this.audio.footstep(p.piece.kind); if (this.quality !== 'low') this.particles.emit('dust', p.worldPos, { count: 1, small: true }); }
    }

    // Ambient biome particles around the runner (leaves, mist, embers)
    if (this.quality !== 'low' && (running || dying)) {
      this._ambientTimer = (this._ambientTimer || 0) - dt;
      if (this._ambientTimer <= 0) {
        const k = p.piece.kind;
        this._ambientTimer = 0.35;
        const ahead = this._ambientPos || (this._ambientPos = new THREE.Vector3());
        ahead.copy(p.worldPos).addScaledVector(p.piece.fwd, 14);
        if (k === 'jungle') this.particles.emit('leaf', ahead, { count: 2 });
        else if (k === 'cliff' || k === 'bridge') { ahead.addScaledVector(p.piece.right, (Math.random() < 0.5 ? -1 : 1) * 9); ahead.y -= 2; this.particles.emit('mist', ahead, { count: 2 }); }
        else if (k === 'temple' || k === 'ruins') { ahead.addScaledVector(p.piece.right, (Math.random() - 0.5) * 6); ahead.y += 1.5; this.particles.emit('ember', ahead, { count: 1 }); }
      }
    }

    // Monkeys
    const mk = this._ctxMonkeys;
    mk.playerPos = p.worldPos; mk.playerAngle = this._headingAngle; mk.threat = this.threat; mk.dead = !p.alive; mk.deathType = p.deathType;
    mk.speed01 = p.speed01; mk.time = this.time; mk.running = running || dying; mk.deadTime = p.deadTime;
    this.monkeys.update(dt, mk);

    // Environment, particles, effects, audio, HUD
    tickMaterials(this.time, 1 + p.speed01 * 0.5);
    const ev = this._ctxEnv;
    ev.playerPos = p.worldPos; ev.camera = this.camera; ev.time = this.time; ev.speed01 = p.speed01; ev.piece = p.piece;
    this.env.update(dt, ev);
    this.particles.update(dt, this.camera);
    this.effects.setSpeed(p.alive ? clamp(p.speed01 * 0.8 + (this.power.boost > 0 ? 0.5 : 0), 0, 1) : 0);
    const au = this._ctxAudio;
    au.speed01 = p.speed01; au.threat = this.threat; au.running = running; au.boost = this.power.boost > 0; au.piece = p.piece; au.playerPos = p.worldPos;
    this.audio.update(dt, au);
    this.hud.update(dt);
  }

  render(dt) { this.effects.render(dt); }
  resize() { this.effects.resize(); }
}

function wrapAngleDelta(a, b) { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; }
