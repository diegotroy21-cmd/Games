// Track model + procedural "director". The track is a linked list (tree at T-junctions) of pieces.
// Each piece has a local frame: origin + heading (multiples of 90 deg). Local coords are
// u = metres along the running direction, v = lateral metres (+v is the runner's right), y = height.
// A piece that ends in a turn owns the square corner tile (size W) at its far end; the piece after
// the turn has its origin at the tile centre, so its content starts at u = W/2.
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { mulberry32, headingForward, headingRight, headingAngle, lerp, clamp } from './util.js';

const W = CONFIG.trackWidth;
const LW = CONFIG.laneWidth;

export const KINDS = ['temple', 'jungle', 'cliff', 'bridge', 'ruins'];

// Deterministic speed and difficulty curves keyed by distance run, shared by generator and player.
export function speedAtDistance(d) {
  return CONFIG.startSpeed + (CONFIG.maxSpeed - CONFIG.startSpeed) * (1 - Math.exp(-Math.max(0, d) / CONFIG.speedRampDistance));
}
export function difficultyAtDistance(d) { return 1 - Math.exp(-Math.max(0, d) / 2200); }

// Obstacle catalogue. action: what evades it. severity: what a hit does.
//   jump  -> cleared when the runner's feet are above `height` (gaps: cleared when airborne over them)
//   slide -> cleared while sliding
//   dodge -> cannot be cleared, only avoided by changing lane
export const OBSTACLE_TYPES = {
  root:    { action: 'jump',  severity: 'stumble', height: 0.55, depth: 0.9,  label: 'root' },
  log:     { action: 'jump',  severity: 'stumble', height: 0.85, depth: 1.3,  label: 'fallen log' },
  boulder: { action: 'jump',  severity: 'stumble', height: 0.8,  depth: 1.4,  label: 'boulder' },
  spikes:  { action: 'jump',  severity: 'kill',    height: 0.6,  depth: 1.0,  label: 'spike trap' },
  fire:    { action: 'jump',  severity: 'kill',    height: 0.9,  depth: 1.7,  label: 'fire trench' },
  brazier: { action: 'jump',  severity: 'kill',    height: 0.9,  depth: 1.2,  label: 'burning brazier' },
  gap:     { action: 'jump',  severity: 'fall',    height: 0,    depth: 4.0,  label: 'gap' },
  branch:  { action: 'slide', severity: 'stumble', height: 1.25, depth: 0.8,  label: 'low branch' },
  lintel:  { action: 'slide', severity: 'kill',    height: 1.3,  depth: 1.0,  label: 'stone lintel' },
  pillar:  { action: 'dodge', severity: 'kill',    height: 3.2,  depth: 1.2,  label: 'pillar' },
  statue:  { action: 'dodge', severity: 'kill',    height: 2.6,  depth: 1.3,  label: 'statue' },
  rubble:  { action: 'dodge', severity: 'kill',    height: 2.2,  depth: 1.6,  label: 'rubble' },
  trunk:   { action: 'dodge', severity: 'kill',    height: 4.0,  depth: 1.4,  label: 'tree trunk' },
};

export const POWERUP_TYPES = ['magnet', 'shield', 'boost'];

let nextId = 1;

function makeObstacle(type, u, lanes, extra = {}) {
  const def = OBSTACLE_TYPES[type];
  const sorted = lanes.slice().sort((a, b) => a - b);
  return {
    id: nextId++, type, u, lanes: sorted,
    action: def.action, severity: def.severity, height: def.height, depth: extra.depth || def.depth,
    vMin: sorted[0] * LW - LW * 0.5, vMax: sorted[sorted.length - 1] * LW + LW * 0.5,
    hit: false, destroyed: false, ...extra,
  };
}

export class Track {
  constructor(seed = 1) {
    this.onPieceAdded = null;   // (piece) => void, set by the game to build visuals/collectibles
    this.onPieceRemoved = null; // (piece) => void
    this.reset(seed);
  }

  reset(seed = 1) {
    if (this.pieces) for (const p of Array.from(this.pieces)) this._remove(p);
    this.seed = seed;
    this.rng = mulberry32(seed * 7919 + 13);
    this.pieces = new Set();
    this.root = null;
    this.stats = { generated: 0 };
    const first = this._generatePiece(null, { origin: new THREE.Vector3(0, 0, 0), heading: 0, startDistance: 0, contentStart: 0 }, { safe: true });
    this.root = first;
    this.ensureAhead(first, 0, Infinity);
    return first;
  }

  // ---- geometry helpers -------------------------------------------------------------------------
  worldPosition(piece, u, v, y = 0, out = new THREE.Vector3()) {
    out.copy(piece.origin);
    out.addScaledVector(piece.fwd, u);
    out.addScaledVector(piece.right, v);
    out.y += y;
    return out;
  }

  // Walks backwards `dist` metres from (piece,u) and returns { piece, u, v, pos, fwd } (used by chasers).
  sampleBehind(piece, u, v, dist, out = {}) {
    let p = piece, uu = u - dist;
    let guard = 0;
    while (uu < p.contentStart && p.prev && guard++ < 16) {
      // Enter the previous piece through its corner tile centre (or directly for straight joins).
      const prev = p.prev;
      const rem = p.contentStart - uu;
      uu = (prev.end === 'straight' ? prev.length : prev.length - W * 0.5) - rem;
      p = prev;
    }
    uu = Math.max(uu, p.contentStart - W * 0.5);
    out.piece = p; out.u = uu; out.v = v;
    out.pos = this.worldPosition(p, uu, v, 0, out.pos || new THREE.Vector3());
    out.fwd = p.fwd;
    return out;
  }

  // ---- streaming -------------------------------------------------------------------------------
  // Guarantees CONFIG.aheadDistance metres of track exist beyond (piece,u) along every branch.
  // Generates at most `budget` pieces per call to spread work across frames.
  ensureAhead(piece, u, budget = 2) {
    let made = 0;
    const need = CONFIG.aheadDistance;
    const visit = (p, remaining) => {
      if (remaining <= 0 || made >= budget) return;
      const dirs = p.end === 'straight' ? ['straight'] : p.end === 'tee' ? ['left', 'right'] : [p.end];
      for (const d of dirs) {
        let child = p.next[d];
        if (!child) {
          if (made >= budget) return;
          child = this._generateAfter(p, d);
          made++;
        }
        visit(child, remaining - child.length);
      }
    };
    visit(piece, need - (piece.length - u));
    return made;
  }

  // Called by the player when moving from `from` into `to`. Prunes abandoned branches and old pieces.
  advance(from, to) {
    for (const key of Object.keys(from.next)) {
      const sib = from.next[key];
      if (sib && sib !== to) { this._removeSubtree(sib); from.next[key] = null; }
    }
    // Drop the piece that is now more than CONFIG.behindPieces behind.
    let p = to;
    for (let i = 0; i < CONFIG.behindPieces && p.prev; i++) p = p.prev;
    if (p.prev) {
      const old = p.prev;
      p.prev = null;
      this._removeChain(old);
    }
  }

  _removeChain(p) { // remove p and all its ancestors
    let cur = p;
    while (cur) { const prev = cur.prev; this._remove(cur); cur = prev; }
  }
  _removeSubtree(p) {
    for (const key of Object.keys(p.next)) { const c = p.next[key]; if (c) this._removeSubtree(c); }
    this._remove(p);
  }
  _remove(p) {
    if (!this.pieces.has(p)) return;
    this.pieces.delete(p);
    if (this.onPieceRemoved) this.onPieceRemoved(p);
  }

  // ---- generation ------------------------------------------------------------------------------
  _generateAfter(parent, dir) {
    const cursor = { origin: new THREE.Vector3(), heading: parent.heading, startDistance: 0, contentStart: 0 };
    if (parent.end === 'straight') {
      cursor.origin.copy(parent.origin).addScaledVector(parent.fwd, parent.length);
      cursor.startDistance = parent.startDistance + parent.length;
    } else {
      cursor.origin.copy(parent.origin).addScaledVector(parent.fwd, parent.length - W * 0.5); // tile centre
      cursor.heading = parent.heading + (dir === 'left' ? 1 : -1);
      cursor.startDistance = parent.startDistance + parent.length - W * 0.5;
      cursor.contentStart = W * 0.5;
    }
    const piece = this._generatePiece(parent, cursor, { branch: dir });
    parent.next[dir] = piece;
    return piece;
  }

  _generatePiece(parent, cursor, opts = {}) {
    const rng = this.rng;
    const heading = ((cursor.heading % 4) + 4) % 4;
    const D = difficultyAtDistance(cursor.startDistance);
    const afterTurn = cursor.contentStart > 0;

    // --- kind selection (runs of the same biome, bridges short) ---
    let kind, kindRun;
    if (!parent) { kind = 'temple'; kindRun = 0; }
    else {
      kind = parent.kind; kindRun = parent.kindRun + 1;
      const maxRun = kind === 'bridge' ? 2 : 3;
      if (kindRun >= maxRun || (kindRun >= 2 && rng.chance(0.35))) {
        const nextKinds = {
          temple: ['ruins', 'jungle', 'jungle', 'cliff'],
          jungle: ['cliff', 'temple', 'bridge', 'ruins'],
          cliff: ['bridge', 'jungle', 'ruins', 'temple'],
          bridge: ['jungle', 'cliff', 'ruins'],
          ruins: ['temple', 'jungle', 'cliff', 'bridge'],
        }[kind];
        let nk = rng.pick(nextKinds);
        if (nk === 'bridge' && (afterTurn || D < 0.08)) nk = 'jungle';
        kind = nk; kindRun = 0;
      }
    }

    // --- length and ending ---
    let length;
    if (opts.safe) length = 64;
    else if (kind === 'bridge') length = rng.range(22, 34);
    else length = lerp(rng.range(34, 58), rng.range(26, 46), D);
    if (afterTurn) length = Math.max(length, 30);

    let end = 'straight';
    const sinceTee = parent ? (parent.end === 'tee' ? 0 : parent.sinceTee + 1) : 3;
    if (!opts.safe && kind !== 'bridge') {
      const pTurn = 0.42 + 0.33 * D;
      if (rng.chance(pTurn)) {
        if (sinceTee >= 3 && rng.chance(0.3)) end = 'tee';
        else end = rng.chance(0.5) ? 'left' : 'right';
        length = Math.round(length);
      }
    }
    length = Math.round(length);

    const piece = {
      id: nextId++, kind, kindRun, sinceTee, branch: opts.branch || null, safe: !!opts.safe,
      origin: cursor.origin.clone(), heading, angle: headingAngle(heading),
      fwd: headingForward(heading), right: headingRight(heading),
      startDistance: cursor.startDistance, length, contentStart: cursor.contentStart,
      end, tileStart: end === 'straight' ? Infinity : length - W,
      obstacles: [], coins: [], powerups: [],
      seed: Math.floor(rng() * 1e9), difficulty: D,
      side: pickSides(kind, rng), prev: parent, next: {}, visual: null, coinSlots: null,
    };

    piece.obstacleTail = Infinity;
    if (!opts.safe) this._placeObstacles(piece, rng);
    this._placeCoins(piece, rng);
    this._placePowerups(piece, rng, parent);

    this.pieces.add(piece);
    this.stats.generated++;
    if (this.onPieceAdded) this.onPieceAdded(piece);
    return piece;
  }

  _placeObstacles(piece, rng) {
    const D = piece.difficulty;
    const speed0 = speedAtDistance(piece.startDistance);
    const react0 = lerp(1.05, 0.58, D);
    // Give the player time after a corner (the camera is still swinging round) and across straight
    // joins (the previous piece's last obstacle may sit right at its end).
    let uMin;
    if (piece.contentStart > 0) uMin = piece.contentStart + Math.max(7, speed0 * 0.85);
    else {
      const tail = piece.prev ? piece.prev.obstacleTail : Infinity; // metres from the last obstacle to the join
      uMin = Math.max(4, speed0 * react0 - tail);
    }
    // Keep hazards clear of the corner: a late dodge swipe must never land inside the turn window.
    const uMax = (piece.end === 'straight' ? piece.length - 3 : piece.tileStart - 5 - speed0 * 0.25);
    let u = uMin + rng.range(0, 5);
    let last = null;
    const density = lerp(0.55, 1.0, D); // chance a slot gets an obstacle
    while (u < uMax) {
      const speed = speedAtDistance(piece.startDistance + u);
      const react = lerp(1.0, 0.45, D); // seconds of clear running between hazard events
      if (rng.chance(density)) {
        const tpl = pickTemplate(piece.kind, D, rng, last);
        const depth = tpl.place(piece, u, rng, D, speed);
        last = tpl.name;
        u += depth + speed * react + rng.range(0, speed * 0.45);
      } else {
        u += speed * 0.5;
      }
    }
    piece.obstacles.sort((a, b) => a.u - b.u);
    const lastObs = piece.obstacles[piece.obstacles.length - 1];
    piece.obstacleTail = lastObs ? piece.length - (lastObs.u + lastObs.depth * 0.5) : Infinity;
  }

  _placeCoins(piece, rng) {
    const D = piece.difficulty;
    const start = piece.contentStart + (piece.contentStart > 0 ? 3 : 2);
    const stop = piece.end === 'straight' ? piece.length - 1 : piece.tileStart - 1.5;
    const obs = piece.obstacles;
    // Free intervals along u between obstacle events (with breathing room).
    const blocks = obs.map((o) => [o.u - o.depth * 0.5 - 1.2, o.u + o.depth * 0.5 + 1.2]);
    const free = [];
    let cur = start;
    for (const [a, b] of blocks) { if (a - cur >= 6) free.push([cur, a]); cur = Math.max(cur, b); }
    if (stop - cur >= 6) free.push([cur, stop]);

    const coinY = 0.95;
    const addCoin = (u, v, y = coinY) => { piece.coins.push({ u, v, y, taken: false }); };

    // Patterns in free stretches.
    for (const [a, b] of free) {
      if (rng.chance(0.2 - 0.05 * D)) continue; // occasionally leave a stretch empty
      const len = b - a;
      const pattern = rng.pick(len > 20 ? ['line', 'wave', 'double', 'line', 'zig'] : ['line', 'line', 'double']);
      const spacing = 1.6;
      const n = Math.floor(Math.min(len, 24) / spacing);
      const startU = a + (len - n * spacing) * 0.5 + spacing * 0.5;
      let lane = rng.pick([-1, 0, 1]);
      if (pattern === 'line') for (let i = 0; i < n; i++) addCoin(startU + i * spacing, lane * LW);
      else if (pattern === 'double') { const l2 = lane === 0 ? rng.sign() : 0; for (let i = 0; i < n; i++) { addCoin(startU + i * spacing, lane * LW); addCoin(startU + i * spacing, l2 * LW); } }
      else if (pattern === 'wave') for (let i = 0; i < n; i++) { const t = i / Math.max(1, n - 1); addCoin(startU + i * spacing, Math.sin(t * Math.PI * 2) * LW); }
      else if (pattern === 'zig') { for (let i = 0; i < n; i++) { if (i % 5 === 0) lane = clamp(lane + rng.sign(), -1, 1); addCoin(startU + i * spacing, lane * LW); } }
    }

    // Arcs over jumpable obstacles and low lines under slide obstacles guide the player's reaction.
    for (const o of obs) {
      if (o.action === 'jump' && rng.chance(0.75)) {
        const lane = o.lanes[Math.floor(rng() * o.lanes.length)];
        const halfLen = Math.max(2.4, o.depth * 0.5 + 2.2);
        const k = 7;
        for (let i = 0; i <= k; i++) {
          const t = i / k;
          const uu = o.u - halfLen + t * halfLen * 2;
          const h = coinY + Math.sin(t * Math.PI) * (CONFIG.jumpHeight * 0.85);
          addCoin(uu, lane * LW, h);
        }
      } else if (o.action === 'slide' && rng.chance(0.7)) {
        const lane = o.lanes[Math.floor(rng() * o.lanes.length)];
        for (let i = -2; i <= 2; i++) addCoin(o.u + i * 1.2, lane * LW, 0.45);
      } else if (o.action === 'dodge' && rng.chance(0.6)) {
        const freeLanes = [-1, 0, 1].filter((l) => !o.lanes.includes(l));
        if (freeLanes.length) {
          const lane = rng.pick(freeLanes);
          for (let i = -2; i <= 2; i++) addCoin(o.u + i * 1.4, lane * LW);
        }
      }
    }
    piece.coins.sort((a, b) => a.u - b.u);
  }

  _placePowerups(piece, rng, parent) {
    // Distance since the last power-up is carried on the pieces so spacing is consistent across branches.
    const since = parent ? parent.powerupGap + parent.length : 0;
    piece.powerupGap = since;
    const target = lerp(330, 520, rng());
    if (piece.safe || since < target || piece.kind === 'bridge' && rng.chance(0.5)) return;
    // Find a free spot (not overlapping obstacles) in the piece.
    const candidates = [];
    const a = piece.contentStart + 6, b = (piece.end === 'straight' ? piece.length - 4 : piece.tileStart - 4);
    for (let u = a; u < b; u += 2) {
      const blocked = piece.obstacles.some((o) => Math.abs(o.u - u) < o.depth * 0.5 + 3.5);
      if (!blocked) candidates.push(u);
    }
    if (!candidates.length) return;
    const u = rng.pick(candidates);
    const roll = rng();
    const type = roll < 0.4 ? 'magnet' : roll < 0.75 ? 'shield' : 'boost';
    const lane = rng.pick([-1, 0, 1]);
    piece.powerups.push({ id: nextId++, type, u, v: lane * LW, y: 1.05, taken: false });
    // remove coins that overlap the power-up spot
    piece.coins = piece.coins.filter((c) => !(Math.abs(c.u - u) < 1.2 && Math.abs(c.v - lane * LW) < 1));
    piece.powerupGap = -piece.length + (piece.length - u); // so the next piece counts from here
  }
}

function pickSides(kind, rng) {
  const pickSide = () => {
    switch (kind) {
      case 'temple': return rng.pick(['wall', 'wall', 'wall', 'jungle']);
      case 'jungle': return rng.pick(['jungle', 'jungle', 'cliffwall', 'open']);
      case 'cliff': return rng.pick(['drop', 'drop', 'cliffwall']);
      case 'bridge': return 'drop';
      case 'ruins': return rng.pick(['wall', 'jungle', 'open', 'drop']);
      default: return 'jungle';
    }
  };
  let left = pickSide(), right = pickSide();
  if (kind === 'cliff' && left === right) right = left === 'drop' ? 'cliffwall' : 'drop';
  return { left, right };
}

// ---- obstacle templates ------------------------------------------------------------------------
const lanesAll = [-1, 0, 1];
const randomLane = (rng) => rng.pick(lanesAll);
const randomLanes = (rng, n) => { const l = lanesAll.slice(); for (let i = l.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [l[i], l[j]] = [l[j], l[i]]; } return l.slice(0, n); };
// splits a set of lanes into contiguous groups
const groups = (lanes) => { const s = lanes.slice().sort((a, b) => a - b); const out = []; let cur = [s[0]]; for (let i = 1; i < s.length; i++) { if (s[i] === s[i - 1] + 1) cur.push(s[i]); else { out.push(cur); cur = [s[i]]; } } out.push(cur); return out; };

const TEMPLATES = [
  { name: 'root', minD: 0, kinds: ['jungle', 'cliff', 'ruins', 'temple'], w: 3,
    place: (p, u, rng) => { const n = rng.pick([1, 2, 3, 3]); for (const g of groups(randomLanes(rng, n))) p.obstacles.push(makeObstacle('root', u, g)); return OBSTACLE_TYPES.root.depth; } },
  { name: 'log', minD: 0.03, kinds: ['jungle', 'cliff', 'ruins'], w: 2,
    place: (p, u) => { p.obstacles.push(makeObstacle('log', u, lanesAll)); return OBSTACLE_TYPES.log.depth; } },
  { name: 'boulder', minD: 0.05, kinds: ['jungle', 'cliff', 'ruins', 'temple'], w: 2,
    place: (p, u, rng) => { const n = rng.pick([1, 1, 2]); for (const g of groups(randomLanes(rng, n))) p.obstacles.push(makeObstacle('boulder', u, g)); return OBSTACLE_TYPES.boulder.depth; } },
  { name: 'branch', minD: 0.04, kinds: ['jungle', 'cliff'], w: 2,
    place: (p, u) => { p.obstacles.push(makeObstacle('branch', u, lanesAll)); return OBSTACLE_TYPES.branch.depth; } },
  { name: 'lintel', minD: 0.12, kinds: ['temple', 'ruins'], w: 2,
    place: (p, u) => { p.obstacles.push(makeObstacle('lintel', u, lanesAll)); return OBSTACLE_TYPES.lintel.depth; } },
  { name: 'pillar', minD: 0.08, kinds: ['temple', 'ruins', 'cliff'], w: 3,
    place: (p, u, rng) => { p.obstacles.push(makeObstacle('pillar', u, [randomLane(rng)])); return OBSTACLE_TYPES.pillar.depth; } },
  { name: 'trunk', minD: 0.08, kinds: ['jungle'], w: 3,
    place: (p, u, rng) => { p.obstacles.push(makeObstacle('trunk', u, [randomLane(rng)])); return OBSTACLE_TYPES.trunk.depth; } },
  { name: 'statue', minD: 0.15, kinds: ['temple', 'ruins'], w: 2,
    place: (p, u, rng) => { p.obstacles.push(makeObstacle('statue', u, [randomLane(rng)])); return OBSTACLE_TYPES.statue.depth; } },
  { name: 'fire', minD: 0.12, kinds: ['temple', 'ruins'], w: 2.5,
    place: (p, u) => { p.obstacles.push(makeObstacle('fire', u, lanesAll)); return OBSTACLE_TYPES.fire.depth; } },
  { name: 'brazier', minD: 0.1, kinds: ['temple', 'ruins', 'cliff'], w: 2,
    place: (p, u, rng) => { const n = rng.pick([1, 1, 2]); for (const g of groups(randomLanes(rng, n))) p.obstacles.push(makeObstacle('brazier', u, g)); return OBSTACLE_TYPES.brazier.depth; } },
  { name: 'gap', minD: 0.1, kinds: ['temple', 'ruins', 'cliff', 'jungle'], w: 2.5,
    place: (p, u, rng, D) => { const depth = lerp(3.4, 5.2, D) + rng.range(-0.3, 0.3); p.obstacles.push(makeObstacle('gap', u, lanesAll, { depth })); return depth; } },
  { name: 'bridgegap', minD: 0, kinds: ['bridge'], w: 6,
    place: (p, u, rng, D) => { const depth = lerp(3.2, 5.0, D); p.obstacles.push(makeObstacle('gap', u, lanesAll, { depth, bridge: true })); return depth; } },
  { name: 'bridgeplank', minD: 0.2, kinds: ['bridge'], w: 2,
    place: (p, u, rng) => { p.obstacles.push(makeObstacle('log', u, lanesAll, { plank: true })); return OBSTACLE_TYPES.log.depth; } },
  { name: 'rubble', minD: 0.25, kinds: ['temple', 'ruins', 'cliff'], w: 2.5,
    place: (p, u, rng) => { const open = randomLane(rng); const lanes = lanesAll.filter((l) => l !== open); for (const g of groups(lanes)) p.obstacles.push(makeObstacle('rubble', u, g)); return OBSTACLE_TYPES.rubble.depth; } },
  { name: 'spikes', minD: 0.35, kinds: ['temple', 'ruins'], w: 2,
    place: (p, u, rng) => { const n = rng.pick([1, 2, 2]); for (const g of groups(randomLanes(rng, n))) p.obstacles.push(makeObstacle('spikes', u, g)); return OBSTACLE_TYPES.spikes.depth; } },
  // Combos: a dodge lane plus a jump/slide across the others -> two-step reads.
  { name: 'pillar+root', minD: 0.4, kinds: ['temple', 'ruins', 'cliff', 'jungle'], w: 2.5,
    place: (p, u, rng) => { const l = randomLane(rng); const t = p.kind === 'jungle' ? 'trunk' : 'pillar'; p.obstacles.push(makeObstacle(t, u, [l])); for (const g of groups(lanesAll.filter((x) => x !== l))) p.obstacles.push(makeObstacle('root', u, g)); return OBSTACLE_TYPES.pillar.depth; } },
  { name: 'pillar+bar', minD: 0.5, kinds: ['temple', 'ruins', 'jungle'], w: 2.5,
    place: (p, u, rng) => { const l = randomLane(rng); const t = p.kind === 'jungle' ? 'trunk' : 'pillar'; const bar = p.kind === 'jungle' ? 'branch' : 'lintel'; p.obstacles.push(makeObstacle(t, u, [l])); for (const g of groups(lanesAll.filter((x) => x !== l))) p.obstacles.push(makeObstacle(bar, u, g)); return OBSTACLE_TYPES.pillar.depth; } },
  { name: 'zigzag', minD: 0.3, kinds: ['temple', 'ruins', 'cliff', 'jungle'], w: 2.5,
    place: (p, u, rng, D, speed) => { const t = p.kind === 'jungle' ? 'trunk' : 'pillar'; const n = D > 0.6 ? 3 : 2; const step = speed * lerp(0.6, 0.45, D); let lane = randomLane(rng); for (let i = 0; i < n; i++) { p.obstacles.push(makeObstacle(t, u + i * step, [lane])); lane = clamp(lane + (lane === 0 ? rng.sign() : -Math.sign(lane)), -1, 1); } return (n - 1) * step + OBSTACLE_TYPES.pillar.depth; } },
  { name: 'fire+gap', minD: 0.55, kinds: ['temple', 'ruins'], w: 1.5,
    place: (p, u, rng, D, speed) => { p.obstacles.push(makeObstacle('fire', u, lanesAll)); const step = speed * 0.9; p.obstacles.push(makeObstacle('gap', u + step, lanesAll, { depth: 3.6 })); return step + 3.6; } },
];

function pickTemplate(kind, D, rng, lastName) {
  const pool = TEMPLATES.filter((t) => t.kinds.includes(kind) && D >= t.minD && t.name !== lastName);
  if (!pool.length) return TEMPLATES[0];
  let total = 0;
  for (const t of pool) total += t.w;
  let r = rng() * total;
  for (const t of pool) { r -= t.w; if (r <= 0) return t; }
  return pool[pool.length - 1];
}
