// Runner controller: lane changes, turns at corners, jumping, sliding, collisions, stumbles and deaths.
// Position is kept in track-local coordinates (piece, u, lateral, y); the game converts to world space.
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { clamp, damp, lerp } from './util.js';
import { speedAtDistance } from './track.js';

const W = CONFIG.trackWidth;
const LW = CONFIG.laneWidth;
const GRAVITY = 8 * CONFIG.jumpHeight / (CONFIG.jumpDuration * CONFIG.jumpDuration);
const JUMP_V0 = 4 * CONFIG.jumpHeight / CONFIG.jumpDuration;

export class Player {
  constructor(track, events) {
    this.track = track;
    this.events = events;
    this.worldPos = new THREE.Vector3();
    this.reset(track.root);
  }

  reset(piece) {
    this.piece = piece;
    this.u = 4;
    this.lane = 0;
    this.lateral = 0;
    this.lateralVel = 0;
    this.y = 0;
    this.vy = 0;
    this.state = 'run';          // run | jump | slide | fall | dead
    this.deathType = null;       // hit | fall | burn | caught
    this.deathSide = 0;
    this.deadTime = 0;
    this.alive = true;
    this.speed = 0;
    this.targetSpeed = CONFIG.startSpeed;
    this.distance = 0;
    this.slideTimer = 0;
    this.fastFall = false;
    this.bufferedJump = 0;
    this.bufferedSlide = false;
    this.queuedTurn = null;
    this.turnLean = 0;           // -1 left, +1 right (decays)
    this.turnTimer = 0;
    this.stumbleTimer = 0;
    this.slowTimer = 0;
    this.shield = false;
    this.boost = false;
    this.time = 0;
    this.runTime = 0;
    this.lastFootstep = 0;
    this.updateWorld();
  }

  get inTurnWindow() { return this.piece.end !== 'straight' && this.u >= this.piece.tileStart - CONFIG.turnEarlyWindow; }
  get inTile() { return this.piece.end !== 'straight' && this.u >= this.piece.tileStart; }
  get onGround() { return this.y <= 0.0001 && this.state !== 'jump' && this.state !== 'fall'; }
  get hitboxHeight() { return this.state === 'slide' ? CONFIG.slideHeight : CONFIG.playerHeight; }
  get speed01() { return clamp((this.speed - CONFIG.startSpeed) / (CONFIG.maxSpeed - CONFIG.startSpeed), 0, 1.3); }

  updateWorld() { this.track.worldPosition(this.piece, this.u, this.lateral, this.y, this.worldPos); return this.worldPos; }

  // ---- input -----------------------------------------------------------------------------------
  handleAction(action) {
    if (!this.alive) return;
    switch (action) {
      case 'left': case 'right': this._sideways(action === 'left' ? -1 : 1); break;
      case 'up': this._jump(); break;
      case 'down': this._slide(); break;
    }
  }

  _sideways(dir) {
    const dirName = dir < 0 ? 'left' : 'right';
    const piece = this.piece;
    if (this.inTurnWindow) {
      const allowed = piece.end === 'tee' || piece.end === dirName;
      if (allowed) {
        if (this.inTile) this._turn(dirName);
        else this.queuedTurn = dirName;
        return;
      }
      if (this.inTile) {
        // Wrong way at a corner: the runner sprints off the edge.
        this.deathSide = dir;
        this._die('fall');
        return;
      }
    }
    const newLane = clamp(this.lane + dir, -1, 1);
    if (newLane !== this.lane) { this.lane = newLane; this.events.emit('lanechange', dir); }
    else this.events.emit('bump', dir); // already at the edge: small nudge animation
  }

  _jump() {
    if (this.state === 'jump' || this.state === 'fall') { this.bufferedJump = 0.14; return; }
    this.state = 'jump';
    this.vy = JUMP_V0;
    this.fastFall = false;
    this.slideTimer = 0;
    this.bufferedSlide = false;
    this.events.emit('jump');
  }

  _slide() {
    if (this.state === 'jump') { this.fastFall = true; this.bufferedSlide = true; this.events.emit('fastfall'); return; }
    if (this.state === 'fall') return;
    this.state = 'slide';
    this.slideTimer = CONFIG.slideDuration;
    this.events.emit('slide');
  }

  _turn(dirName) {
    const piece = this.piece;
    const next = piece.next[dirName] || this.track._generateAfter(piece, dirName);
    const uC = piece.length - W * 0.5;
    const du = this.u - uC;
    const v = this.lateral;
    let nu, nv;
    if (dirName === 'left') { nu = -v; nv = du; } else { nu = v; nv = -du; }
    this.track.advance(piece, next);
    this.piece = next;
    this.u = nu;
    this.lateral = nv;
    this.lane = clamp(Math.round(nv / LW), -1, 1);
    this.queuedTurn = null;
    this.turnLean = dirName === 'left' ? -1 : 1;
    this.turnTimer = 0.4;
    this.events.emit('turn', dirName);
    this.events.emit('piece', next);
  }

  // ---- simulation ------------------------------------------------------------------------------
  update(dt) {
    this.time += dt;
    if (!this.alive) { this._updateDead(dt); this.updateWorld(); return; }
    this.runTime += dt;

    // Speed
    const base = speedAtDistance(this.distance);
    this.targetSpeed = base * (this.boost ? CONFIG.boostSpeedMul : 1) * (this.slowTimer > 0 ? CONFIG.stumbleSlowdown : 1);
    this.speed = damp(this.speed, this.targetSpeed, this.slowTimer > 0 ? 14 : 3.5, dt);
    if (this.slowTimer > 0) this.slowTimer -= dt;
    if (this.stumbleTimer > 0) this.stumbleTimer -= dt;
    if (this.turnTimer > 0) { this.turnTimer -= dt; if (this.turnTimer <= 0) this.turnLean = 0; }

    // Forward motion
    const step = this.speed * dt;
    this.u += step;
    this.distance += step;

    // Lateral tween toward the lane centre
    const targetLat = this.lane * LW;
    const prevLat = this.lateral;
    this.lateral = damp(this.lateral, targetLat, 22, dt);
    this.lateralVel = (this.lateral - prevLat) / Math.max(dt, 1e-4);

    // Vertical
    if (this.state === 'jump') {
      const g = GRAVITY * (this.fastFall ? CONFIG.fastFallGravityMul : 1);
      this.vy -= g * dt;
      this.y += this.vy * dt;
      if (this.y <= 0) {
        this.y = 0; this.vy = 0;
        this.state = this.bufferedSlide ? 'slide' : 'run';
        if (this.bufferedSlide) { this.slideTimer = CONFIG.slideDuration; this.bufferedSlide = false; this.events.emit('slide'); }
        this.fastFall = false;
        this.events.emit('land');
        if (this.bufferedJump > 0) { this.bufferedJump = 0; this._jump(); }
      }
    } else if (this.state === 'slide') {
      this.slideTimer -= dt;
      if (this.slideTimer <= 0) this.state = 'run';
    }
    if (this.bufferedJump > 0) this.bufferedJump -= dt;

    // Boost assists: auto-jump gaps, auto-turn corners.
    if (this.boost) {
      if (this.state !== 'jump') {
        const look = this.speed * 0.34;
        for (const o of this.piece.obstacles) {
          if (o.type === 'gap' && o.u - o.depth * 0.5 > this.u && o.u - o.depth * 0.5 - this.u < look) { this._jump(); break; }
        }
      }
      if (this.inTile && !this.queuedTurn) {
        const p = this.piece;
        const dir = p.end === 'tee' ? (this.lane <= 0 ? 'left' : 'right') : p.end;
        this._turn(dir);
      }
    }

    // Piece transitions and corners
    const piece = this.piece;
    if (piece.end === 'straight') {
      if (this.u >= piece.length) {
        const next = piece.next.straight || this.track._generateAfter(piece, 'straight');
        this.track.advance(piece, next);
        this.u -= piece.length;
        this.piece = next;
        this.events.emit('piece', next);
      }
    } else {
      if (this.queuedTurn && this.u >= piece.tileStart + 1.2) this._turn(this.queuedTurn);
      else if (this.u >= piece.length - CONFIG.turnWallMargin) { this.deathSide = 0; this._die('hit'); }
    }

    if (this.alive) this._collide();
    this.track.ensureAhead(this.piece, this.u, 2);
    this.updateWorld();
  }

  _collide() {
    const r = CONFIG.playerRadius;
    const u = this.u, lat = this.lateral;
    for (const o of this.piece.obstacles) {
      if (o.hit || o.destroyed) continue;
      const half = o.depth * 0.5;
      if (o.type === 'gap') {
        // Fall only when the feet are on the ground strictly inside the gap.
        if (this.y <= 0.001 && this.state !== 'jump' && u > o.u - half + 0.25 && u < o.u + half - 0.25) {
          if (this.boost) { this._jump(); continue; }
          o.hit = true;
          this._die('fall');
          return;
        }
        continue;
      }
      if (Math.abs(o.u - u) > half + r) continue;
      if (!(lat + r > o.vMin + 0.2 && lat - r < o.vMax - 0.2)) continue;
      let cleared = false;
      if (o.action === 'jump') cleared = this.y > o.height - 0.08;
      else if (o.action === 'slide') cleared = this.state === 'slide';
      if (cleared) continue;
      o.hit = true;
      if (this.boost) { o.destroyed = true; this.events.emit('smash', o); continue; }
      if (this.shield) { o.destroyed = true; this.shield = false; this.events.emit('shieldbreak', o); continue; }
      if (o.severity === 'stumble') { this._stumble(o); if (!this.alive) return; continue; }
      const type = (o.type === 'fire' || o.type === 'brazier') ? 'burn' : 'hit';
      this._die(type, o);
      return;
    }
  }

  _stumble(o) {
    if (this.stumbleTimer > 0) { this._die('caught', o); return; }
    this.stumbleTimer = CONFIG.stumbleWindow;
    this.slowTimer = CONFIG.stumbleSlowTime;
    this.speed *= 0.75;
    if (this.state === 'slide') this.state = 'run';
    this.events.emit('stumble', o);
  }

  _die(type, obstacle = null) {
    if (!this.alive) return;
    this.alive = false;
    this.state = type === 'fall' ? 'fall' : 'dead';
    this.deathType = type;
    this.deadTime = 0;
    this.queuedTurn = null;
    this.events.emit('die', { type, obstacle, side: this.deathSide });
  }

  _updateDead(dt) {
    this.deadTime += dt;
    if (this.deathType === 'fall') {
      // Keep some forward drift, veer sideways if the runner ran off an edge, and drop.
      const drift = Math.max(0, this.speed * (1 - this.deadTime * 1.6));
      this.u += drift * dt;
      this.lateral += this.deathSide * 6 * dt;
      this.vy -= GRAVITY * 0.9 * dt;
      this.y += this.vy * dt;
      this.speed = drift;
    } else {
      this.speed = Math.max(0, this.speed - 60 * dt);
      if (this.deathType === 'hit' && this.deadTime < 0.25) this.u -= 3.5 * dt; // bounce back off the wall
    }
  }
}
