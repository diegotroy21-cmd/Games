import * as THREE from 'three';

export const TAU = Math.PI * 2;
export const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
// Frame-rate independent exponential smoothing.
export const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));
export const wrapAngle = (a) => { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; };
export const dampAngle = (a, b, lambda, dt) => a + wrapAngle(b - a) * (1 - Math.exp(-lambda * dt));

// Deterministic PRNG (mulberry32) so a run can be reproduced from a seed.
export function mulberry32(seed) {
  let s = seed >>> 0;
  const fn = () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  fn.range = (a, b) => a + (b - a) * fn();
  fn.int = (a, b) => Math.floor(fn.range(a, b + 1)); // inclusive
  fn.pick = (arr) => arr[Math.floor(fn() * arr.length)];
  fn.chance = (p) => fn() < p;
  fn.sign = () => (fn() < 0.5 ? -1 : 1);
  return fn;
}

// Heading is an integer 0..3; angle = heading * PI/2 about +Y. Heading 0 runs toward -Z.
export function headingAngle(h) { return ((h % 4) + 4) % 4 * Math.PI * 0.5; }
export function headingForward(h, out = new THREE.Vector3()) {
  const a = headingAngle(h);
  return out.set(-Math.sin(a), 0, -Math.cos(a));
}
export function headingRight(h, out = new THREE.Vector3()) {
  const a = headingAngle(h);
  return out.set(Math.cos(a), 0, -Math.sin(a));
}

export function hash2(x, y) { // cheap deterministic 0..1 noise for placement jitter
  let h = Math.imul(x | 0, 374761393) + Math.imul(y | 0, 668265263);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

export function formatScore(n) { return Math.floor(n).toLocaleString('en-US'); }

// Tiny event emitter used by the game state machine.
export class Emitter {
  constructor() { this.map = new Map(); }
  on(name, fn) { (this.map.get(name) || this.map.set(name, []).get(name)).push(fn); return () => this.off(name, fn); }
  off(name, fn) { const l = this.map.get(name); if (l) { const i = l.indexOf(fn); if (i >= 0) l.splice(i, 1); } }
  emit(name, payload) { const l = this.map.get(name); if (l) for (const fn of l.slice()) fn(payload); }
}

export const isMobile = () => /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && window.innerWidth < 1100);
