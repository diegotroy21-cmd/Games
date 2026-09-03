// Game state machine and orchestration of all subsystems.
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { Emitter, damp, clamp, mulberry32, isMobile } from './util.js';
import { Track } from './track.js';
import { Player } from './player.js';
import { FollowCamera } from './camera.js';
import { createCharacter } from './character.js';
import { createMonkeys } from './monkeys.js';
import { createEnvironment, buildPiece, disposePiece } from './scenery.js';
import { buildObstacle, smashObstacle } from './obstacles.js';
import { createCollectibles } from './collectibles.js';
import { createParticles } from './particles.js';
import { createAudio } from './audio.js';
import { createHUD } from './hud.js';
import { createEffects } from './effects.js';
import { loadSave, writeSave, UPGRADES, upgradeCost } from './save.js';
import { tickMaterials } from './fx-materials.js';

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
    this.threat = 1;
    this.slowmo = 1;

    // Track + player
    this.track = new Track(this.runSeed);
    this.track.onPieceAdded = (p) => this._onPieceAdded(p);
    this.track.onPieceRemoved = (p) => this._onPieceRemoved(p);
    this.pieceGroups = new Map();

    // Subsystems
    this.env = createEnvironment(scene, renderer, quality);
    this.collectibles = createCollectibles(scene, this.track);
    this.particles = createParticles(scene);
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
    this.followCam.reset(0, this.player.updateWorld());

    this._bindEvents();
    this._bindInput();
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
      this.hud.toast('Stumbled! They\'re right behind you!');
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

  togglePause() {
    if (this.state === 'running') { this.state = 'paused'; this.audio.setPaused(true); this.hud.showPause(); this.events.emit('pause'); }
    else if (this.state === 'paused') { this.state = 'running'; this.audio.setPaused(false); this.hud.hideMenus(); this.input.clear(); this.events.emit('resume'); }
  }
  toggleSound() { const s = this.save.settings; s.sound = !s.sound; s.music = s.sound; this.audio.setEnabled(s.sound, s.music); writeSave(this.save); this.events.emit('settings'); }
  setQuality(q) { this.save.settings.quality = q; writeSave(this.save); this.events.emit('settings'); }

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
      for (const k of Object.keys(this.power)) if (this.power[k] > 0) { this.power[k] -= dt; if (this.power[k] <= 0) { this.power[k] = 0; this.events.emit('powerend', k); if (running) this.hud.toast(''); } }
      p.shield = this.power.shield > 0;
      p.boost = this.power.boost > 0;
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
        const res = this.collectibles.update(dt, {
          playerPos: p.worldPos, playerY: p.y, hitboxHeight: p.hitboxHeight,
          magnet: this.power.magnet > 0 || this.power.boost > 0, magnetRadius: CONFIG.magnetRadius + (this.power.boost > 0 ? 4 : 0),
          fwd: p.piece.fwd, speed: p.speed, time: this.time,
        });
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
    this.followCam.update(dt, {
      anchor, playerPos: p.worldPos, targetAngle, speed01: p.speed01, boost: this.power.boost > 0,
      dead: !p.alive, deathType: p.deathType, playerY: p.y,
    });

    // Character placement + animation
    const g = this.character.group;
    g.position.copy(p.worldPos);
    g.rotation.y = this._headingAngle + (p.alive ? -p.lateralVel * 0.045 : 0);
    this.character.update(dt, {
      state: p.state, speed: p.speed, speed01: p.speed01, y: p.y, vy: p.vy, lateralVel: p.lateralVel,
      turnLean: p.turnLean, stumble01: p.stumbleTimer / CONFIG.stumbleWindow, shield: p.shield, boost: p.boost,
      magnet: this.power.magnet > 0, dead: !p.alive, deathType: p.deathType, deadTime: p.deadTime, time: this.time,
    });
    if (p.alive && p.state === 'run' && p.onGround) {
      // footsteps paced by speed
      const cadence = 0.62 / Math.max(0.3, p.speed / CONFIG.startSpeed);
      if (this.time - p.lastFootstep > cadence * 0.5) { p.lastFootstep = this.time; this.audio.footstep(p.piece.kind); if (this.quality !== 'low') this.particles.emit('dust', p.worldPos, { count: 1, small: true }); }
    }

    // Monkeys
    this.monkeys.update(dt, {
      sample: (dist, out) => this.track.sampleBehind(p.piece, p.u, p.lateral, dist, out),
      playerPos: p.worldPos, playerAngle: this._headingAngle, threat: this.threat, dead: !p.alive, deathType: p.deathType,
      speed01: p.speed01, time: this.time, running: running || dying, deadTime: p.deadTime,
    });

    // Environment, particles, effects, audio, HUD
    tickMaterials(this.time, 1 + p.speed01 * 0.5);
    this.env.update(dt, { playerPos: p.worldPos, camera: this.camera, time: this.time, speed01: p.speed01, piece: p.piece });
    this.particles.update(dt, this.camera);
    this.effects.setSpeed(p.alive ? clamp(p.speed01 * 0.8 + (this.power.boost > 0 ? 0.5 : 0), 0, 1) : 0);
    this.audio.update(dt, { speed01: p.speed01, threat: this.threat, running, boost: this.power.boost > 0, piece: p.piece, playerPos: p.worldPos });
    this.hud.update(dt);
  }

  render(dt) { this.effects.render(dt); }
  resize() { this.effects.resize(); }
}

function wrapAngleDelta(a, b) { let d = (b - a) % (Math.PI * 2); if (d > Math.PI) d -= Math.PI * 2; if (d < -Math.PI) d += Math.PI * 2; return d; }
