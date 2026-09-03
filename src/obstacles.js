// Obstacle props for Relic Rush.
//
// buildObstacle() returns an Object3D in piece-local coordinates (x = lateral v, y = up, z = -u) that is
// already positioned at x = (vMin + vMax) / 2, z = -u, so the game can drop it straight into the piece
// group. Every obstacle is merged into at most three meshes:
//   * a lit vertex-coloured mesh (shared MeshStandardMaterial with wind sway for foliage),
//   * an additive "glow" mesh for embers, eyes and light halos (HDR vertex colours so bloom picks them up;
//     this replaces dynamic lights, which would force shader recompiles),
//   * a flame mesh using the shared animated flame shader.
// Silhouettes are built to be read at speed: LOW things you jump (roots, logs, boulders, spike plates,
// fire trenches, braziers), OVERHEAD things you slide under (branches, lintels: open below, solid above),
// TALL things you dodge (pillars, idols, rubble, tree trunks).
//
// smashObstacle() turns the lit mesh into flying debris: every primitive that went into the mesh becomes
// a chunk with its own velocity and spin, tumbling forward and sinking into the floor over about a second.
// The animation is driven from the mesh's onBeforeRender hook with a wall clock, so it needs no update call.
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { MeshBuilder, unitGeo } from './meshbuilder.js';
import { createFlameMaterial, applyWindSway } from './fx-materials.js';

const LW = CONFIG.laneWidth;
const EDGE_X = 3.4;           // posts / trunks that frame the path stand here
const PI = Math.PI, TAU = PI * 2;

// ---- palette ----------------------------------------------------------------------------------
const C = {
  bark: 0x6b4a2c, barkDark: 0x4e3520, barkLight: 0x8a6238, wood: 0xc9a06a, heart: 0x9c7343,
  plank: 0x8b6b48, plankDark: 0x66503a, rope: 0xb99a64,
  stone: 0x8c8677, stoneDark: 0x6c665a, stoneLight: 0xa39d8b, stoneWarm: 0x9a8f78, groove: 0x4f4a40,
  rock: 0x807b70, rockDark: 0x615d55,
  moss: 0x6f9d3a, mossDark: 0x4f7a2a, leaf: 0x4f8f2f, leafLight: 0x7cb342, leafDark: 0x35702a, leafDeep: 0x2e5f28,
  litter: 0x9a7438, litterRed: 0xa6552e,
  iron: 0x4a4c52, ironDark: 0x33353a, ironLight: 0x9ea2aa, steel: 0xd0d4dc, rust: 0x7a4a2a,
  gold: 0xd4aa4a, goldDark: 0xa27c2c, teal: 0x2f8f8a, ochre: 0xb44a2c, bone: 0xe8dfc6,
  soot: 0x1c1410, coal: 0x2a1a12,
};
// HDR colours for the additive glow mesh (values > 1 bloom at medium/high quality).
const HDR = {
  ember: new THREE.Color(2.6, 0.9, 0.18), emberDim: new THREE.Color(1.4, 0.35, 0.06),
  fire: new THREE.Color(1.7, 0.62, 0.12), fireGround: new THREE.Color(1.2, 0.45, 0.08),
  eye: new THREE.Color(3.2, 1.3, 0.25), eyeHalo: new THREE.Color(1.6, 0.55, 0.12), gem: new THREE.Color(2.4, 0.35, 0.25),
};

// ---- shared materials / geometries -------------------------------------------------------------
let litMat = null, glowMat = null, flameMat = null, flameGeo = null, discGeoCache = null;
function ensureShared() {
  if (litMat) return;
  litMat = applyWindSway(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0.02, flatShading: true }));
  glowMat = new THREE.MeshBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, side: THREE.DoubleSide, fog: false, toneMapped: false });
  flameMat = createFlameMaterial();
}
// Open cone with a few height segments (the flame shader bends it), base on y=0, tip at y=1.
function getFlameGeo() {
  if (!flameGeo) { flameGeo = new THREE.ConeGeometry(1, 1, 7, 3, true).toNonIndexed(); flameGeo.translate(0, 0.5, 0); }
  return flameGeo;
}
// Flat disc in the XZ plane with an inner ring, so a radial vertex-colour falloff looks smooth.
function getDiscGeo() {
  if (discGeoCache) return discGeoCache;
  const segs = 14, inner = 0.42, pos = [];
  const ring = (r, j) => { const a = (j / segs) * TAU; return [Math.cos(a) * r, 0, -Math.sin(a) * r]; };
  for (let j = 0; j < segs; j++) {
    const a0 = ring(inner, j), a1 = ring(inner, j + 1), b0 = ring(1, j), b1 = ring(1, j + 1);
    pos.push(0, 0, 0, ...a0, ...a1, ...a0, ...b0, ...b1, ...a0, ...b1, ...a1);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(pos.map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
  discGeoCache = g;
  return g;
}

// Sweeps a ring along a polyline with per-point radii -> non-indexed geometry (position/normal/uv).
// Used for everything organic: roots, logs, limbs, buttresses, vines.
const _t = new THREE.Vector3(), _n = new THREE.Vector3(), _b = new THREE.Vector3(), _v = new THREE.Vector3();
function tubeGeo(pts, radii, segs, caps = false) {
  const n = pts.length;
  const rings = new Float32Array(n * segs * 3);
  for (let i = 0; i < n; i++) {
    const a = pts[Math.max(i - 1, 0)], c = pts[Math.min(i + 1, n - 1)];
    _t.set(c[0] - a[0], c[1] - a[1], c[2] - a[2]).normalize();
    if (i === 0) {
      _v.set(Math.abs(_t.y) < 0.9 ? 0 : 1, Math.abs(_t.y) < 0.9 ? 1 : 0, 0);
      _n.crossVectors(_t, _v).normalize();
    } else {
      _n.addScaledVector(_t, -_n.dot(_t));               // parallel transport of the ring frame
      if (_n.lengthSq() < 1e-6) _n.set(1, 0, 0).addScaledVector(_t, -_t.x);
      _n.normalize();
    }
    _b.crossVectors(_t, _n);
    const p = pts[i], r = radii[i];
    for (let j = 0; j < segs; j++) {
      const ang = (j / segs) * TAU, cs = Math.cos(ang), sn = Math.sin(ang), k = (i * segs + j) * 3;
      rings[k] = p[0] + (_n.x * cs + _b.x * sn) * r;
      rings[k + 1] = p[1] + (_n.y * cs + _b.y * sn) * r;
      rings[k + 2] = p[2] + (_n.z * cs + _b.z * sn) * r;
    }
  }
  const triCount = (n - 1) * segs * 2 + (caps ? segs * 2 : 0);
  const pos = new Float32Array(triCount * 9);
  let o = 0;
  const push = (k) => { pos[o++] = rings[k]; pos[o++] = rings[k + 1]; pos[o++] = rings[k + 2]; };
  const pushP = (p) => { pos[o++] = p[0]; pos[o++] = p[1]; pos[o++] = p[2]; };
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < segs; j++) {
      const j1 = (j + 1) % segs;
      const a = (i * segs + j) * 3, b = (i * segs + j1) * 3, c = ((i + 1) * segs + j1) * 3, d = ((i + 1) * segs + j) * 3;
      push(a); push(b); push(c);
      push(a); push(c); push(d);
    }
  }
  if (caps) {
    for (let j = 0; j < segs; j++) {
      const j1 = (j + 1) % segs;
      pushP(pts[0]); push(j1 * 3); push(j * 3);                                         // bottom cap
      pushP(pts[n - 1]); push(((n - 1) * segs + j) * 3); push(((n - 1) * segs + j1) * 3); // top cap
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(pos.length), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(triCount * 6), 2));
  g.computeVertexNormals();
  return g;
}

// ---- chunk-aware builder -----------------------------------------------------------------------
// Records the vertex range of every primitive so smashObstacle() can animate them as separate chunks.
// opts.chunk groups several primitives into one chunk; otherwise every primitive is its own chunk.
class PropBuilder extends MeshBuilder {
  constructor() { super(); this.ranges = []; this.vertexCount = 0; this.autoChunk = 0; this.chunkKeys = new Map(); this._src = null; }
  add(geo, opts = {}) {
    super.add(geo, opts);
    const part = this.parts[this.parts.length - 1];
    const count = part.attributes.position.count;
    const key = opts.chunk !== undefined ? 'k' + opts.chunk : 'a' + this.autoChunk++;
    let chunk = this.chunkKeys.get(key);
    if (chunk === undefined) { chunk = this.chunkKeys.size; this.chunkKeys.set(key, chunk); }
    this.ranges.push({ start: this.vertexCount, count, chunk });
    this.vertexCount += count;
    this._src = geo;
    return this;
  }
  // Repaints the last primitive with a per-vertex colour function of its untransformed position.
  paintLast(fn) {
    const part = this.parts[this.parts.length - 1], src = this._src.attributes.position, col = part.attributes.color.array;
    for (let i = 0; i < src.count; i++) { const c = fn(src.getX(i), src.getY(i), src.getZ(i), i); col[i * 3] = c[0]; col[i * 3 + 1] = c[1]; col[i * 3 + 2] = c[2]; }
    return this;
  }
  // Organic tube along `pts` (arrays of [x,y,z]) with per-point radii.
  tube(pts, radii, segs, opts = {}) {
    const g = tubeGeo(pts, radii, segs, !!opts.caps);
    this.add(g, opts);
    g.dispose();
    return this;
  }
  // Straight bone between two points (tapered, capped).
  bone(p0, p1, r0, r1, opts = {}) { return this.tube([p0, p1], [r0, r1], opts.seg || 7, { caps: true, ...opts }); }
  // Cylinder (top radius = taper x bottom radius) and sphere whose real size comes from opts.scale.
  // The base-class cylinder()/sphere() helpers override scale, so these are used whenever x/z differ.
  cyl(taper, seg, opts = {}) { return this.add(unitGeo('cyl', taper, 1, seg), opts); }
  blob(opts = {}) { return this.add(unitGeo('sphere', opts.ws || 8, opts.hs || 6), opts); }
  // Additive halo disc: horizontal by default, or a vertical fan facing ±z.
  halo(x, y, z, sx, sz, color, vertical = false) {
    this.add(getDiscGeo(), { position: [x, y, z], rotation: vertical ? [PI / 2, 0, 0] : [0, 0, 0], scale: [sx, 1, sz], color: 0xffffff, chunk: 'halo' });
    const cr = color.r, cg = color.g, cb = color.b;
    return this.paintLast((px, py, pz) => { const r = Math.min(1, Math.hypot(px, pz)); const w = (1 - r) * (1 - r); return [cr * w, cg * w, cb * w]; });
  }
  // Builds the mesh and attaches chunk metadata (sorted by chunk, with chunk centroids) for smashing.
  toMesh(material, shadows = true) {
    const ranges = this.ranges.slice().sort((a, b) => a.chunk - b.chunk);
    const g = this.build();
    if (!g) return null;
    const chunkCount = this.chunkKeys.size;
    const centroids = new Float32Array(chunkCount * 3), weights = new Float32Array(chunkCount);
    const p = g.attributes.position.array;
    for (const r of ranges) {
      for (let i = r.start, e = r.start + r.count; i < e; i++) {
        centroids[r.chunk * 3] += p[i * 3]; centroids[r.chunk * 3 + 1] += p[i * 3 + 1]; centroids[r.chunk * 3 + 2] += p[i * 3 + 2];
      }
      weights[r.chunk] += r.count;
    }
    for (let c = 0; c < chunkCount; c++) { const w = weights[c] || 1; centroids[c * 3] /= w; centroids[c * 3 + 1] /= w; centroids[c * 3 + 2] /= w; }
    const flat = new Int32Array(ranges.length * 3);
    ranges.forEach((r, i) => { flat[i * 3] = r.start; flat[i * 3 + 1] = r.count; flat[i * 3 + 2] = r.chunk; });
    const m = new THREE.Mesh(g, material);
    m.castShadow = shadows; m.receiveShadow = shadows;
    m.userData.chunks = { ranges: flat, centroids, count: chunkCount };
    return m;
  }
}

// ---- small helpers -----------------------------------------------------------------------------
const rr = (rng, a, b) => a + (b - a) * rng();
const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)];
const ROCKS = ['dodeca', 'ico'];
const LEAF_GREENS = [C.leaf, C.leafLight, C.leafDark, C.leafDeep];
const STONES = [C.stone, C.stoneDark, C.stoneLight, C.stoneWarm];

// Squashed foliage blob (icosahedron) with wind sway.
function leafBlob(b, rng, x, y, z, r, opts = {}) {
  b.add(unitGeo('ico', opts.detail ?? 0), {
    position: [x, y, z], rotation: [rr(rng, 0, PI), rr(rng, 0, PI), rr(rng, 0, PI)],
    scale: [r * rr(rng, 0.9, 1.2), r * rr(rng, 0.55, 0.75), r * rr(rng, 0.9, 1.2)],
    color: opts.color ?? pick(rng, LEAF_GREENS), jitter: 0.22, sway: opts.sway ?? 0.45, chunk: opts.chunk,
  });
}
// Flat leaf frond (thin box) with wind sway.
function frond(b, rng, x, y, z, len, opts = {}) {
  b.box(len, 0.02, len * 0.38, {
    position: [x, y, z], rotation: [rr(rng, -0.5, 0.5), rr(rng, 0, TAU), rr(rng, -0.6, 0.6)],
    color: opts.color ?? pick(rng, LEAF_GREENS), jitter: 0.2, sway: opts.sway ?? 0.7, chunk: opts.chunk,
  });
}
function mossPatch(b, rng, x, y, z, r, opts = {}) {
  b.blob({ position: [x, y, z], rotation: [0, rr(rng, 0, PI), 0], scale: [r * rr(rng, 0.9, 1.4), r * 0.32, r * rr(rng, 0.8, 1.2)], color: rng() < 0.5 ? C.moss : C.mossDark, jitter: 0.2, ws: 6, hs: 4, chunk: opts.chunk });
}
function grassTuft(b, rng, x, z, h = 0.22) {
  for (let i = 0; i < 3; i++) b.cone(0.035, h * rr(rng, 0.7, 1.2), 4, { position: [x + rr(rng, -0.06, 0.06), h * 0.45, z + rr(rng, -0.06, 0.06)], rotation: [rr(rng, -0.35, 0.35), 0, rr(rng, -0.35, 0.35)], color: pick(rng, [C.leafLight, C.leaf, C.moss]), sway: 0.9, chunk: 'grass' });
}
function litter(b, rng, x, z, n, spread) {
  for (let i = 0; i < n; i++) b.box(rr(rng, 0.14, 0.24), 0.012, rr(rng, 0.09, 0.15), { position: [x + rr(rng, -spread, spread), 0.012, z + rr(rng, -0.6, 0.6)], rotation: [0, rr(rng, 0, PI), 0], color: pick(rng, [C.litter, C.litterRed, C.mossDark, C.barkLight]), jitter: 0.25, chunk: 'litter' });
}
// A flame cone in the flame mesh (base at y, tip at y + h).
function flame(fb, x, y, z, r, h, rot = 0) { fb.add(getFlameGeo(), { position: [x, y, z], rotation: [0, rot, 0], scale: [r, h, r], color: 0xffffff }); }
// Bright ember chunks in the glow mesh.
function embers(gb, rng, x, y, z, n, sx, sz) {
  for (let i = 0; i < n; i++) gb.add(unitGeo('ico', 0), { position: [x + rr(rng, -sx, sx), y + rr(rng, 0, 0.08), z + rr(rng, -sz, sz)], rotation: [rr(rng, 0, PI), rr(rng, 0, PI), 0], scale: rr(rng, 0.045, 0.1), color: rng() < 0.6 ? HDR.ember : HDR.emberDim, chunk: 'ember' });
}
// Which side of the path is solid enough to host a tree trunk (-1 = left, +1 = right).
function solidSide(piece, rng) {
  const solid = (s) => s === 'jungle' || s === 'wall' || s === 'cliffwall';
  const L = piece.side && piece.side.left, R = piece.side && piece.side.right;
  if (solid(L) && !solid(R)) return -1;
  if (solid(R) && !solid(L)) return 1;
  return rng() < 0.5 ? -1 : 1;
}

// ---- LOW obstacles: jump -----------------------------------------------------------------------
// Gnarled root arcs twisting across the lanes with knots, rootlets, moss and leaf litter.
function buildRoot(b, rng, o, w, cx, z, Q) {
  const arcs = Math.round(w / LW) * (Q ? 3 : 2), segs = Q === 2 ? 7 : 6, pts = Q ? 8 : 6;
  const x0 = cx - w / 2 - 0.2, x1 = cx + w / 2 + 0.2;
  for (let i = 0; i < arcs; i++) {
    const half = rr(rng, 0.5, 0.95), xc = rr(rng, x0 + half * 0.6, x1 - half * 0.6);
    const xa = Math.max(x0, xc - half), xb = Math.min(x1, xc + half);
    const h = rr(rng, 0.3, 0.42), r = rr(rng, 0.09, 0.14), zc = z + rr(rng, -0.22, 0.22), dz = rr(rng, -0.25, 0.25), ph = rr(rng, 0, TAU);
    const path = [], radii = [];
    for (let k = 0; k < pts; k++) {
      const t = k / (pts - 1), s = Math.sin(t * PI);
      path.push([xa + (xb - xa) * t, -0.14 + (h + 0.14) * Math.pow(s, 0.8) + (k > 0 && k < pts - 1 ? rr(rng, -0.03, 0.03) : 0), zc + dz * (t - 0.5) * 2 + 0.11 * Math.sin(t * TAU + ph)]);
      radii.push(r * (0.72 + 0.5 * s) * rr(rng, 0.88, 1.12));
    }
    const color = pick(rng, [C.bark, C.bark, C.barkLight, C.barkDark]);
    b.tube(path, radii, segs, { color, jitter: 0.28, chunk: 'arc' + i });
    // knots and rootlets diving back into the ground
    const kIdx = 1 + Math.floor(rng() * (pts - 2)), kp = path[kIdx];
    b.sphere(radii[kIdx] * 1.25, { position: [kp[0], kp[1], kp[2]], color: C.barkDark, jitter: 0.2, ws: 6, hs: 4, chunk: 'arc' + i });
    if (Q) {
      const rIdx = 1 + Math.floor(rng() * (pts - 2)), rp = path[rIdx], ang = rr(rng, 0, TAU);
      const p1 = [rp[0] + Math.cos(ang) * 0.22, rp[1] * 0.45, rp[2] + Math.sin(ang) * 0.22], p2 = [p1[0] + Math.cos(ang) * 0.18, -0.08, p1[2] + Math.sin(ang) * 0.18];
      b.tube([rp, p1, p2], [radii[rIdx] * 0.55, 0.045, 0.02], 5, { color: C.barkDark, jitter: 0.2, chunk: 'arc' + i });
    }
    // moss on the crown of the arc
    const top = path[Math.floor(pts / 2)];
    if (rng() < 0.7) mossPatch(b, rng, top[0], top[1] + radii[Math.floor(pts / 2)] * 0.75, top[2], 0.16, { chunk: 'arc' + i });
  }
  litter(b, rng, cx, z, Q ? Math.round(w * 2.5) : Math.round(w), w / 2);
  if (Q) for (let i = 0; i < Math.round(w / LW) + 1; i++) grassTuft(b, rng, rr(rng, x0 + 0.2, x1 - 0.2), z + rr(rng, -0.45, 0.45));
}

// Fallen bark log: lumpy tube with cut ends, bark ridges, stubby branches, moss and bracket fungi.
function buildLog(b, rng, o, w, cx, z, Q) {
  const L = w + 0.9, R = 0.4, n = Q ? 9 : 6, segs = Q === 2 ? 9 : 7;
  const path = [], radii = [];
  const yc = 0.4;
  for (let k = 0; k < n; k++) {
    const t = k / (n - 1);
    path.push([cx - L / 2 + L * t, yc + 0.025 * Math.sin(t * PI * 2.3), z + 0.04 * Math.sin(t * PI * 1.7 + 1)]);
    radii.push(R * (1 - 0.14 * t) * (k === 0 || k === n - 1 ? 0.96 : rr(rng, 0.9, 1.1)));
  }
  b.tube(path, radii, segs, { color: C.bark, jitter: 0.25, caps: true, chunk: 'log' });
  // cut faces: pale sapwood disc with a darker heartwood core
  for (const end of [0, n - 1]) {
    const p = path[end], sgn = end === 0 ? -1 : 1, r = radii[end];
    b.cyl(1, 12, { position: [p[0] + sgn * 0.03, p[1], p[2]], rotation: [0, 0, PI / 2], scale: [r * 0.84, 0.05, r * 0.84], color: C.wood, jitter: 0.12, chunk: 'log' });
    b.cyl(1, 10, { position: [p[0] + sgn * 0.055, p[1], p[2]], rotation: [0, 0, PI / 2], scale: [r * 0.4, 0.05, r * 0.4], color: C.heart, jitter: 0.12, chunk: 'log' });
  }
  // bark ridges hugging the surface
  const ridges = Q ? 9 : 5;
  for (let i = 0; i < ridges; i++) {
    const th = rr(rng, -2.4, 2.4), x = cx + rr(rng, -L / 2 + 0.6, L / 2 - 0.6), len = rr(rng, 0.5, 1.3);
    b.box(len, 0.05, 0.09, { position: [x, yc + Math.cos(th) * R * 0.97, z + Math.sin(th) * R * 0.97], rotation: [th, rr(rng, -0.08, 0.08), 0], color: C.barkDark, jitter: 0.2, chunk: 'log' });
  }
  // stubby branches
  const stubs = Q ? 4 : 3;
  for (let i = 0; i < stubs; i++) {
    const th = rr(rng, -1.6, 1.6), x = cx + rr(rng, -L / 2 + 0.7, L / 2 - 0.7);
    const dy = Math.cos(th), dz = Math.sin(th), dx = rr(rng, -0.4, 0.4);
    const p0 = [x, yc + dy * R * 0.8, z + dz * R * 0.8];
    const p1 = [p0[0] + dx * 0.3, p0[1] + dy * 0.34 + 0.06, p0[2] + dz * 0.34];
    const p2 = [p1[0] + dx * 0.25 + rr(rng, -0.1, 0.1), p1[1] + dy * 0.24 + 0.1, p1[2] + dz * 0.24 + rr(rng, -0.1, 0.1)];
    b.tube([p0, p1, p2], [0.13, 0.09, 0.055], 6, { color: C.barkDark, jitter: 0.2, caps: true, chunk: 'stub' + i });
    if (Q) b.cyl(1, 6, { position: [p2[0], p2[1] + 0.005, p2[2]], scale: [0.05, 0.03, 0.05], color: C.wood, chunk: 'stub' + i });
  }
  // moss and fungi
  for (let i = 0; i < (Q ? 6 : 3); i++) {
    const th = rr(rng, -0.8, 0.8), x = cx + rr(rng, -L / 2 + 0.5, L / 2 - 0.5);
    mossPatch(b, rng, x, yc + Math.cos(th) * R * 0.95, z + Math.sin(th) * R * 0.95, 0.2, { chunk: 'log' });
  }
  if (Q) for (let i = 0; i < 2; i++) {
    const side = rng() < 0.5 ? 1 : -1, x = cx + rr(rng, -L / 2 + 0.8, L / 2 - 0.8);
    b.cyl(1, 7, { position: [x, yc + 0.05, z + side * R * 0.95], rotation: [side * 0.15, 0, 0], scale: [0.13, 0.04, 0.11], color: 0xd08a4a, jitter: 0.15, chunk: 'log' });
  }
  litter(b, rng, cx, z, Q ? 6 : 3, L / 2 - 0.3);
}

// Broken plank pile (bridge variant of the log): splintered boards, snapped ends sticking up, rope.
function buildPlanks(b, rng, o, w, cx, z, Q) {
  const n = Q ? 10 : 7;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1), len = rr(rng, 1.3, 2.4), y = 0.045 + t * 0.55;
    b.box(len, 0.07, rr(rng, 0.22, 0.3), {
      position: [cx + rr(rng, -w / 2 + 0.7, w / 2 - 0.7), y, z + rr(rng, -0.35, 0.35)],
      rotation: [rr(rng, -0.12, 0.12), rr(rng, -0.45, 0.45), rr(rng, -0.2, 0.2) * (1 + t)],
      color: rng() < 0.6 ? C.plank : C.plankDark, jitter: 0.25, chunk: 'plank' + i,
    });
  }
  // snapped boards standing up
  for (let i = 0; i < 3; i++) {
    const x = cx + rr(rng, -w / 2 + 0.5, w / 2 - 0.5), tilt = rr(rng, 0.9, 1.25) * (rng() < 0.5 ? 1 : -1);
    b.box(0.7, 0.06, 0.24, { position: [x, 0.42, z + rr(rng, -0.3, 0.3)], rotation: [0, rr(rng, -0.3, 0.3), tilt], color: C.plankDark, jitter: 0.25, chunk: 'snap' + i });
    b.cone(0.06, 0.16, 4, { position: [x + Math.cos(tilt) * 0.35 * Math.sign(tilt), 0.42 + Math.abs(Math.sin(tilt)) * 0.36, z], rotation: [0, 0, tilt - PI / 2 * Math.sign(tilt)], color: C.plank, chunk: 'snap' + i });
  }
  // splinters and a rope coil
  for (let i = 0; i < (Q ? 8 : 4); i++) b.box(rr(rng, 0.12, 0.3), 0.025, 0.04, { position: [cx + rr(rng, -w / 2 + 0.3, w / 2 - 0.3), 0.02, z + rr(rng, -0.6, 0.6)], rotation: [0, rr(rng, 0, PI), 0], color: C.wood, jitter: 0.2, chunk: 'splinter' });
  b.add(unitGeo('torus', 0.25, 5, 10), { position: [cx + rr(rng, -w / 3, w / 3), 0.5, z + rr(rng, -0.2, 0.2)], rotation: [PI / 2 + rr(rng, -0.4, 0.4), 0, rr(rng, 0, PI)], scale: 0.2, color: C.rope, jitter: 0.15, chunk: 'rope' });
}

// Mossy rock cluster: one big boulder per lane plus satellites, moss caps and pebbles.
function buildBoulder(b, rng, o, w, cx, z, Q) {
  const lanes = Math.round(w / LW);
  for (let li = 0; li < lanes; li++) {
    const x = cx - w / 2 + LW * (li + 0.5) + rr(rng, -0.15, 0.15), zz = z + rr(rng, -0.12, 0.12);
    const kind = pick(rng, ROCKS), rot = [rr(rng, 0, PI), rr(rng, 0, PI), rr(rng, 0, PI)];
    const sx = rr(rng, 0.78, 0.92), sy = rr(rng, 0.5, 0.58), sz = rr(rng, 0.62, 0.78);
    b.add(unitGeo(kind), { position: [x, 0.36, zz], rotation: rot, scale: [sx, sy, sz], color: C.rock, jitter: 0.22, chunk: 'rock' + li });
    // moss cap: the same shape squashed and lifted so it reads as a green crown
    b.add(unitGeo(kind), { position: [x, 0.36 + sy * 0.42, zz], rotation: rot, scale: [sx * 0.86, sy * 0.4, sz * 0.86], color: C.moss, jitter: 0.25, chunk: 'rock' + li });
    // satellites
    const sats = Q ? 3 : 2;
    for (let i = 0; i < sats; i++) {
      const a = rr(rng, 0, TAU), d = rr(rng, 0.62, 0.85), s = rr(rng, 0.18, 0.34);
      b.add(unitGeo(pick(rng, ROCKS)), { position: [x + Math.cos(a) * d, s * 0.55, zz + Math.sin(a) * d * 0.7], rotation: [rr(rng, 0, PI), rr(rng, 0, PI), 0], scale: [s * 1.2, s * 0.8, s], color: rng() < 0.5 ? C.rock : C.rockDark, jitter: 0.22, chunk: 'sat' + li + i });
    }
    if (Q) for (let i = 0; i < 4; i++) {
      const a = rr(rng, 0, TAU), d = rr(rng, 0.7, 1.0);
      b.add(unitGeo('ico', 0), { position: [x + Math.cos(a) * d, 0.05, zz + Math.sin(a) * d * 0.7], scale: rr(rng, 0.05, 0.09), color: C.rockDark, jitter: 0.2, chunk: 'pebble' });
    }
    if (Q) { grassTuft(b, rng, x + rr(rng, -0.8, 0.8), zz + rr(rng, 0.4, 0.7)); grassTuft(b, rng, x + rr(rng, -0.8, 0.8), zz - rr(rng, 0.4, 0.7)); }
  }
}

// Iron spike trap: a stone plate with slots, and rows of iron spikes with bright tips.
function buildSpikes(b, rng, o, w, cx, z, Q) {
  const pw = w - 0.12, pd = o.depth;
  b.box(pw, 0.16, pd, { position: [cx, 0.08, z], color: C.stoneDark, jitter: 0.14, chunk: 'plate' });
  b.box(pw - 0.16, 0.03, pd - 0.16, { position: [cx, 0.17, z], color: C.stone, jitter: 0.1, chunk: 'plate' });
  const rows = [-0.24, 0.24];
  for (const rz of rows) b.box(pw - 0.4, 0.02, 0.08, { position: [cx, 0.19, z + rz], color: C.soot, chunk: 'plate' });
  const perLane = 3, lanes = Math.round(w / LW), spikeSeg = Q ? 6 : 5;
  for (let li = 0; li < lanes; li++) {
    for (let i = 0; i < perLane; i++) {
      for (let ri = 0; ri < rows.length; ri++) {
        const x = cx - w / 2 + LW * li + LW * (i + 0.5) / perLane + (ri ? 0.12 : -0.12), zz = z + rows[ri];
        const h = rr(rng, 0.42, 0.55), lean = [rr(rng, -0.08, 0.08), 0, rr(rng, -0.08, 0.08)];
        const ck = 'spike' + li + i + ri;
        b.cyl(1, 6, { position: [x, 0.21, zz], scale: [0.1, 0.06, 0.1], color: C.rust, jitter: 0.15, chunk: ck });
        b.cone(0.1, h, spikeSeg, { position: [x, 0.21 + h / 2, zz], rotation: lean, color: C.iron, jitter: 0.12, chunk: ck });
        b.cone(0.045, 0.22, spikeSeg, { position: [x + lean[2] * -h * 0.55, 0.21 + h - 0.06, zz + lean[0] * h * 0.55], rotation: lean, color: C.steel, chunk: ck });
      }
    }
  }
  if (Q) for (let i = 0; i < lanes * 2; i++) b.box(rr(rng, 0.1, 0.2), 0.012, rr(rng, 0.1, 0.16), { position: [cx + rr(rng, -w / 2 + 0.2, w / 2 - 0.2), 0.195, z + rr(rng, -0.35, 0.35)], rotation: [0, rr(rng, 0, PI), 0], color: C.bone, jitter: 0.2, chunk: 'plate' });
}

// Stone-lined fire trench: curb blocks, a sooty pit, embers, a wall of flames and warm halos.
function buildFire(b, gb, fb, rng, o, w, cx, z, Q) {
  const L = w + 0.4, D = o.depth;
  // curbs as rows of blocks
  for (const side of [-1, 1]) {
    const zz = z + side * (D / 2 - 0.16);
    let x = cx - L / 2;
    while (x < cx + L / 2 - 0.05) {
      const bw = Math.min(rr(rng, 0.7, 1.15), cx + L / 2 - x);
      b.box(bw - 0.04, rr(rng, 0.24, 0.3), 0.32, { position: [x + bw / 2, 0.13, zz + rr(rng, -0.015, 0.015)], color: pick(rng, STONES), jitter: 0.16, chunk: 'curb' });
      x += bw;
    }
  }
  for (const side of [-1, 1]) b.box(0.32, 0.27, D - 0.32, { position: [cx + side * (L / 2 - 0.16), 0.135, z], color: C.stoneDark, jitter: 0.16, chunk: 'curb' });
  // pit floor and charred rubble
  b.box(L - 0.5, 0.08, D - 0.5, { position: [cx, -0.01, z], color: C.soot, chunk: 'pit' });
  for (let i = 0; i < (Q ? Math.round(w * 1.5) : Math.round(w * 0.7)); i++) b.add(unitGeo('ico', 0), { position: [cx + rr(rng, -L / 2 + 0.5, L / 2 - 0.5), 0.06, z + rr(rng, -D / 2 + 0.4, D / 2 - 0.4)], rotation: [rr(rng, 0, PI), rr(rng, 0, PI), 0], scale: rr(rng, 0.08, 0.16), color: C.coal, jitter: 0.3, chunk: 'pit' });
  // moss on the curbs
  if (Q) for (let i = 0; i < 3; i++) mossPatch(b, rng, cx + rr(rng, -L / 2 + 0.4, L / 2 - 0.4), 0.28, z + (rng() < 0.5 ? 1 : -1) * (D / 2 - 0.16), 0.14, { chunk: 'curb' });
  // embers + halos
  embers(gb, rng, cx, 0.05, z, Q ? Math.round(w * 2.5) : Math.round(w * 1.2), L / 2 - 0.5, D / 2 - 0.45);
  gb.halo(cx, 0.035, z, L * 0.72, D * 1.25, HDR.fireGround);
  gb.halo(cx, 0.75, z + 0.05, L * 0.62, 1.5, HDR.fire, true);
  // flames: a main row across the trench plus a smaller staggered row at high quality
  const count = Math.max(2, Math.round(w / 0.75));
  for (let i = 0; i < count; i++) {
    const x = cx - w / 2 + 0.4 + (w - 0.8) * (count > 1 ? i / (count - 1) : 0.5);
    flame(fb, x + rr(rng, -0.08, 0.08), 0.04, z + rr(rng, -0.18, 0.18), rr(rng, 0.42, 0.55), rr(rng, 0.95, 1.2), rr(rng, 0, PI));
  }
  if (Q) for (let i = 0; i < count - 1; i++) {
    const x = cx - w / 2 + 0.75 + (w - 1.5) * (count > 2 ? i / (count - 2) : 0.5);
    flame(fb, x, 0.04, z + rr(rng, -0.35, 0.35), rr(rng, 0.28, 0.38), rr(rng, 0.6, 0.85), rr(rng, 0, PI));
  }
}

// Iron brazier on a tripod, one per lane: legs, rings, bowl, coals, flames, halos.
function buildBrazier(b, gb, fb, rng, o, w, cx, z, Q) {
  const lanes = Math.round(w / LW);
  for (let li = 0; li < lanes; li++) {
    const x = cx - w / 2 + LW * (li + 0.5), ck = 'brazier' + li;
    const legTop = 0.62, spin = rr(rng, 0, TAU);
    for (let i = 0; i < 3; i++) {
      const a = spin + i * TAU / 3, cxl = Math.cos(a), czl = Math.sin(a);
      b.bone([x + cxl * 0.42, 0.02, z + czl * 0.42], [x + cxl * 0.2, legTop, z + czl * 0.2], 0.035, 0.03, { seg: 5, color: C.ironDark, jitter: 0.12, chunk: ck });
      b.cyl(1, 6, { position: [x + cxl * 0.42, 0.025, z + czl * 0.42], scale: [0.08, 0.05, 0.08], color: C.ironDark, chunk: ck });
    }
    b.add(unitGeo('torus', 0.09, 5, 12), { position: [x, 0.3, z], scale: 0.33, rotation: [PI / 2, 0, 0], color: C.iron, jitter: 0.1, chunk: ck });
    b.add(unitGeo('torus', 0.09, 5, 12), { position: [x, legTop, z], scale: 0.28, rotation: [PI / 2, 0, 0], color: C.iron, jitter: 0.1, chunk: ck });
    // bowl with rim and dark interior
    b.cyl(0.55, Q ? 10 : 8, { position: [x, 0.66, z], scale: [0.42, 0.26, 0.42], color: C.iron, jitter: 0.14, chunk: ck });
    b.add(unitGeo('torus', 0.08, 5, Q ? 14 : 10), { position: [x, 0.79, z], scale: 0.42, rotation: [PI / 2, 0, 0], color: C.ironLight, jitter: 0.1, chunk: ck });
    b.cyl(1, 10, { position: [x, 0.77, z], scale: [0.36, 0.04, 0.36], color: C.soot, chunk: ck });
    // rivets
    if (Q) for (let i = 0; i < 6; i++) { const a = i * TAU / 6; b.sphere(0.028, { position: [x + Math.cos(a) * 0.4, 0.7, z + Math.sin(a) * 0.4], color: C.ironLight, ws: 5, hs: 3, chunk: ck }); }
    // coals, flames and glow
    embers(gb, rng, x, 0.79, z, Q ? 7 : 4, 0.22, 0.22);
    flame(fb, x, 0.78, z, 0.34, rr(rng, 0.62, 0.72), rr(rng, 0, PI));
    flame(fb, x + rr(rng, -0.12, 0.12), 0.78, z + rr(rng, -0.1, 0.1), 0.24, rr(rng, 0.45, 0.55), rr(rng, 0, PI));
    if (Q) flame(fb, x + rr(rng, -0.12, 0.12), 0.78, z + rr(rng, -0.1, 0.1), 0.2, 0.42, rr(rng, 0, PI));
    gb.halo(x, 0.035, z, 1.5, 1.4, HDR.fireGround);
    gb.halo(x, 1.0, z + 0.02, 1.3, 1.2, HDR.fire, true);
  }
}

// ---- OVERHEAD obstacles: slide -----------------------------------------------------------------
// Low tree limb (underside at 1.25 m) growing from a trunk at the path edge, leafy on top, open below.
function buildBranch(b, rng, o, piece, w, cx, z, Q) {
  const side = solidSide(piece, rng);
  const tx = side * (EDGE_X + 0.4), segs = Q === 2 ? 9 : 7;
  // trunk with a slight lean toward the path and a root flare
  const trunk = [[tx + side * 0.1, -0.3, z + 0.15], [tx, 0.6, z + 0.1], [tx - side * 0.05, 1.7, z], [tx - side * 0.1, 3.0, z - 0.05], [tx - side * 0.05, 4.4, z - 0.05], [tx, 5.6, z]];
  b.tube(trunk, [0.78, 0.55, 0.48, 0.42, 0.38, 0.3], segs, { color: C.bark, jitter: 0.25, caps: true, chunk: 'trunk' });
  for (let i = 0; i < 4; i++) {
    const a = rr(rng, 0, TAU), r0 = [tx + Math.cos(a) * 0.35, 0.55, z + Math.sin(a) * 0.35], r1 = [tx + Math.cos(a) * 0.9, 0.05, z + Math.sin(a) * 0.9], r2 = [tx + Math.cos(a) * 1.2, -0.2, z + Math.sin(a) * 1.2];
    b.tube([r0, r1, r2], [0.2, 0.12, 0.06], 5, { color: C.barkDark, jitter: 0.2, chunk: 'trunk' });
  }
  if (Q) { for (let i = 0; i < 3; i++) b.sphere(rr(rng, 0.1, 0.16), { position: [tx - side * 0.42, rr(rng, 0.8, 3.6), z + rr(rng, -0.3, 0.3)], color: C.barkDark, ws: 6, hs: 4, chunk: 'trunk' }); }
  mossPatch(b, rng, tx - side * 0.3, 2.4, z + 0.2, 0.3, { chunk: 'trunk' });
  // the limb: underside stays at ~1.25 m all the way across
  const xa = tx - side * 0.2, xb = -side * (w / 2 + 0.6), n = Q ? 9 : 7, path = [], radii = [];
  for (let k = 0; k < n; k++) {
    const t = k / (n - 1), r = 0.3 - 0.15 * t;
    path.push([xa + (xb - xa) * t, 1.25 + r + 0.035 * Math.sin(t * 7 + 1) + (k === 0 ? 0.25 : 0), z + 0.12 * Math.sin(t * 5.2) * (1 - t * 0.4)]);
    radii.push(r * rr(rng, 0.92, 1.08));
  }
  b.tube(path, radii, segs - 2, { color: C.bark, jitter: 0.25, caps: true, chunk: 'limb' });
  // twigs and foliage along the limb
  const twigs = Q ? 6 : 4;
  for (let i = 0; i < twigs; i++) {
    const t = (i + 0.5) / twigs, idx = Math.min(n - 1, Math.round(t * (n - 1))), p = path[idx];
    const dz = rr(rng, -0.6, 0.6), dx = rr(rng, -0.4, 0.4), len = rr(rng, 0.45, 0.75);
    const tip = [p[0] + dx * len, p[1] + len * 0.9, p[2] + dz * len];
    b.tube([[p[0], p[1] + radii[idx] * 0.6, p[2]], [p[0] + dx * len * 0.5, p[1] + len * 0.5, p[2] + dz * len * 0.5], tip], [0.07, 0.05, 0.025], 5, { color: C.barkDark, jitter: 0.2, chunk: 'twig' + i });
    const blobs = Q ? 3 : 2;
    for (let k = 0; k < blobs; k++) leafBlob(b, rng, tip[0] + rr(rng, -0.3, 0.3), tip[1] + rr(rng, -0.1, 0.2), tip[2] + rr(rng, -0.3, 0.3), rr(rng, 0.3, 0.45), { chunk: 'twig' + i, sway: 0.5 });
    for (let k = 0; k < (Q ? 3 : 1); k++) frond(b, rng, tip[0] + rr(rng, -0.4, 0.4), tip[1] + rr(rng, -0.25, 0.1), tip[2] + rr(rng, -0.4, 0.4), rr(rng, 0.4, 0.6), { chunk: 'twig' + i });
  }
  for (let k = 1; k < n - 1; k += 2) { const p = path[k]; mossPatch(b, rng, p[0], p[1] + radii[k] * 0.8, p[2], 0.18, { chunk: 'limb' }); }
  // hanging vines: thin, swaying, never lower than slide height
  const vines = Q ? 5 : 3;
  for (let i = 0; i < vines; i++) {
    const t = rr(rng, 0.15, 0.95), idx = Math.round(t * (n - 1)), p = path[idx], len = rr(rng, 0.18, 0.3);
    const vx = p[0] + rr(rng, -0.2, 0.2), vz = p[2] + rr(rng, -0.15, 0.15);
    b.cyl(1, 4, { position: [vx, 1.25 - len / 2 + 0.05, vz], scale: [0.02, len, 0.02], color: C.leafDeep, sway: (y01) => (1 - y01) * 1.2, chunk: 'vine' + i });
    b.box(0.12, 0.01, 0.06, { position: [vx, 1.25 - len + 0.05, vz], rotation: [0, rr(rng, 0, PI), rr(rng, -0.4, 0.4)], color: C.leafLight, sway: 1.2, chunk: 'vine' + i });
  }
  // upper canopy so the trunk does not end in mid-air
  for (let i = 0; i < (Q ? 4 : 2); i++) leafBlob(b, rng, tx + rr(rng, -0.9, 0.9), 5.3 + rr(rng, -0.3, 0.5), z + rr(rng, -0.9, 0.9), rr(rng, 0.9, 1.3), { chunk: 'canopy', sway: 0.3, detail: Q ? 1 : 0 });
}

// Carved stone lintel: posts at the path edges, a beam at 1.3 m with dentils and glyphs, a solid block wall above.
function buildLintel(b, rng, o, w, cx, z, Q) {
  const beamY = o.height, half = EDGE_X + 0.35;
  for (const s of [-1, 1]) {
    const x = s * EDGE_X, ck = 'post' + s;
    b.box(0.92, 0.2, 1.1, { position: [x, 0.1, z], color: C.stoneDark, jitter: 0.12, chunk: ck });
    b.box(0.7, beamY - 0.35, 0.86, { position: [x, 0.2 + (beamY - 0.35) / 2, z], color: C.stone, jitter: 0.14, chunk: ck });
    b.box(0.82, 0.15, 0.98, { position: [x, beamY - 0.075, z], color: C.stoneLight, jitter: 0.1, chunk: ck });
    for (let i = 0; i < 2; i++) b.box(0.02, 0.5, 0.9, { position: [x + (i ? 0.36 : -0.36), 0.7, z], color: C.groove, chunk: ck });
    if (Q) mossPatch(b, rng, x + rr(rng, -0.2, 0.2), 0.2, z + 0.5, 0.18, { chunk: ck });
  }
  // beam
  b.box(half * 2, 0.55, 1.0, { position: [0, beamY + 0.275, z], color: C.stoneWarm, jitter: 0.12, chunk: 'beam' });
  b.box(half * 2 + 0.3, 0.12, 1.12, { position: [0, beamY + 0.61, z], color: C.stoneLight, jitter: 0.1, chunk: 'beam' });
  for (const face of [1, -1]) {
    const fz = z + face * 0.5;
    b.box(half * 2 - 0.4, 0.05, 0.03, { position: [0, beamY + 0.46, fz], color: C.groove, chunk: 'beam' });
    const dentils = 9;
    for (let i = 0; i < dentils; i++) b.box(0.2, 0.13, 0.06, { position: [-half + 0.6 + (half * 2 - 1.2) * i / (dentils - 1), beamY + 0.08, fz + face * 0.02], color: C.stoneLight, jitter: 0.1, chunk: 'beam' });
    const glyphs = Q ? 7 : 5;
    for (let i = 0; i < glyphs; i++) {
      const gx = -half + 0.9 + (half * 2 - 1.8) * i / (glyphs - 1);
      if (i === Math.floor(glyphs / 2)) b.cyl(1, 12, { position: [gx, beamY + 0.3, fz + face * 0.02], rotation: [PI / 2, 0, 0], scale: [0.2, 0.06, 0.2], color: C.gold, jitter: 0.1, chunk: 'beam' });
      else b.box(0.16, 0.16, 0.04, { position: [gx, beamY + 0.3, fz + face * 0.01], rotation: [0, 0, i % 2 ? PI / 4 : 0], color: i % 2 ? C.goldDark : C.groove, chunk: 'beam' });
    }
  }
  // wall of blocks above the beam (top row ruined)
  const rowH = 0.42, rows = 4, wallTop = beamY + 0.67;
  for (let r = 0; r < rows; r++) {
    const y = wallTop + rowH * (r + 0.5);
    let x = -half + (r % 2 ? 0.35 : 0);
    if (r % 2) b.box(0.7, rowH - 0.03, 0.9, { position: [-half + 0.35 - 0.35, y, z], color: pick(rng, STONES), jitter: 0.16, chunk: 'wall' + r });
    while (x < half - 0.05) {
      const bw = Math.min(rr(rng, 0.8, 1.25), half - x);
      const missing = r === rows - 1 && rng() < 0.35;
      if (!missing) b.box(bw - 0.04, rowH - 0.03 - (r === rows - 1 ? rr(rng, 0, 0.18) : 0), 0.9, { position: [x + bw / 2, y - (r === rows - 1 ? 0.05 : 0), z + rr(rng, -0.025, 0.025)], color: pick(rng, STONES), jitter: 0.16, chunk: 'wall' + r });
      x += bw;
    }
  }
  // moss / vines draped over the beam and wall
  for (let i = 0; i < (Q ? 5 : 3); i++) mossPatch(b, rng, rr(rng, -half + 0.5, half - 0.5), beamY + 0.68, z + rr(rng, -0.3, 0.3), 0.22, { chunk: 'beam' });
  for (let i = 0; i < (Q ? 4 : 2); i++) {
    const vx = rr(rng, -half + 0.6, half - 0.6), len = rr(rng, 0.5, 1.0), top = wallTop + rowH * rows - 0.2;
    b.cyl(1, 4, { position: [vx, top - len / 2, z + 0.5], scale: [0.03, len, 0.03], color: C.leafDeep, sway: (y01) => (1 - y01) * 0.8, chunk: 'vine' + i });
    for (let k = 0; k < 3; k++) b.box(0.14, 0.01, 0.08, { position: [vx + rr(rng, -0.08, 0.08), top - len * (k + 1) / 3.2, z + 0.52], rotation: [0, rr(rng, 0, PI), rr(rng, -0.5, 0.5)], color: pick(rng, LEAF_GREENS), sway: 0.9, chunk: 'vine' + i });
  }
}

// ---- TALL obstacles: dodge ---------------------------------------------------------------------
// Carved column: stepped plinth, drum shaft with flutes and a painted band, flared capital and abacus.
function buildPillar(b, rng, o, w, cx, z, Q) {
  const H = o.height, seg = Q ? 10 : 8;
  b.box(1.1, 0.25, 1.1, { position: [cx, 0.125, z], color: C.stoneDark, jitter: 0.12, chunk: 'base' });
  b.box(0.9, 0.15, 0.9, { position: [cx, 0.325, z], color: C.stone, jitter: 0.12, chunk: 'base' });
  b.cyl(1, seg, { position: [cx, 0.46, z], scale: [0.52, 0.12, 0.52], color: C.stoneLight, jitter: 0.1, chunk: 'base' });
  const shaftY0 = 0.52, shaftY1 = H - 0.5, drums = 3, dh = (shaftY1 - shaftY0) / drums;
  for (let i = 0; i < drums; i++) {
    const y = shaftY0 + dh * (i + 0.5), r = 0.42 - 0.02 * i;
    b.cyl(1, seg, { position: [cx + rr(rng, -0.02, 0.02), y, z + rr(rng, -0.02, 0.02)], rotation: [0, rr(rng, 0, 0.3), 0], scale: [r, dh, r], color: i % 2 ? C.stone : C.stoneWarm, jitter: 0.14, chunk: 'drum' + i });
  }
  // fluting ridges
  const flutes = Q ? 8 : 6;
  for (let i = 0; i < flutes; i++) {
    const a = i * TAU / flutes, r = 0.41;
    b.box(0.07, shaftY1 - shaftY0 - 0.3, 0.09, { position: [cx + Math.cos(a) * r, (shaftY0 + shaftY1) / 2, z + Math.sin(a) * r], rotation: [0, -a, 0], color: C.stoneLight, jitter: 0.1, chunk: 'drum' + (i % drums) });
  }
  // painted band with gold studs
  const bandY = shaftY0 + (shaftY1 - shaftY0) * 0.55;
  b.cyl(1, seg, { position: [cx, bandY, z], scale: [0.45, 0.2, 0.45], color: C.ochre, jitter: 0.1, chunk: 'drum1' });
  for (let i = 0; i < 6; i++) { const a = i * TAU / 6; b.box(0.09, 0.09, 0.06, { position: [cx + Math.cos(a) * 0.46, bandY, z + Math.sin(a) * 0.46], rotation: [0, -a, 0], color: C.gold, chunk: 'drum1' }); }
  // capital
  b.cyl(0.62, seg, { position: [cx, H - 0.36, z], scale: [0.62, 0.32, 0.62], color: C.stoneLight, jitter: 0.12, chunk: 'cap' });
  b.box(1.2, 0.2, 1.2, { position: [cx, H - 0.1, z], color: C.stoneWarm, jitter: 0.12, chunk: 'cap' });
  for (const s of [-1, 1]) b.box(0.16, 0.16, 0.04, { position: [cx + s * 0.35, H - 0.1, z + 0.6], color: C.goldDark, chunk: 'cap' });
  // weathering: moss and fallen chips
  mossPatch(b, rng, cx + rr(rng, -0.3, 0.3), 0.26, z + 0.45, 0.2, { chunk: 'base' });
  if (Q) { mossPatch(b, rng, cx - 0.3, H - 0.12, z - 0.2, 0.22, { chunk: 'cap' }); for (let i = 0; i < 3; i++) { const a = rr(rng, 0, TAU); b.add(unitGeo('dodeca'), { position: [cx + Math.cos(a) * rr(rng, 0.65, 0.85), 0.07, z + Math.sin(a) * rr(rng, 0.6, 0.9)], rotation: [rr(rng, 0, PI), rr(rng, 0, PI), 0], scale: rr(rng, 0.07, 0.13), color: C.stone, jitter: 0.2, chunk: 'chip' }); } }
}

// Monkey-god idol: crouched stone figure on a plinth, fanged grin, feather crown, eyes that glow.
function buildStatue(b, gb, rng, o, w, cx, z, Q) {
  const S = 'stone';
  // plinth
  b.box(1.3, 0.34, 1.3, { position: [cx, 0.17, z], color: C.stoneDark, jitter: 0.12, chunk: 'plinth' });
  b.box(1.05, 0.2, 1.05, { position: [cx, 0.44, z], color: C.stone, jitter: 0.12, chunk: 'plinth' });
  for (let i = -1; i <= 1; i++) b.box(0.16, 0.16, 0.04, { position: [cx + i * 0.36, 0.2, z + 0.66], rotation: [0, 0, i ? PI / 4 : 0], color: i ? C.goldDark : C.gold, chunk: 'plinth' });
  const body = (geo, opts) => b.add(geo, { color: C.stoneWarm, jitter: 0.12, chunk: opts.chunk || 'body', ...opts });
  // legs and feet (crouched)
  for (const s of [-1, 1]) {
    b.box(0.28, 0.14, 0.5, { position: [cx + s * 0.38, 0.61, z + 0.32], color: C.stoneWarm, jitter: 0.1, chunk: 'leg' + s });
    b.bone([cx + s * 0.3, 0.95, z - 0.05], [cx + s * 0.4, 0.86, z + 0.36], 0.16, 0.14, { color: C.stoneWarm, jitter: 0.1, chunk: 'leg' + s });
    b.bone([cx + s * 0.4, 0.86, z + 0.36], [cx + s * 0.38, 0.62, z + 0.36], 0.13, 0.12, { color: C.stoneWarm, jitter: 0.1, chunk: 'leg' + s });
    b.sphere(0.19, { position: [cx + s * 0.4, 0.86, z + 0.38], color: C.stoneWarm, jitter: 0.1, chunk: 'leg' + s });
  }
  // torso, belly, shoulders
  body(unitGeo('sphere', 9, 7), { position: [cx, 1.25, z], scale: [0.5, 0.55, 0.42] });
  body(unitGeo('sphere', 8, 6), { position: [cx, 1.05, z + 0.12], scale: [0.42, 0.36, 0.34], color: C.stoneLight });
  for (const s of [-1, 1]) {
    b.sphere(0.2, { position: [cx + s * 0.5, 1.55, z - 0.02], color: C.stoneWarm, jitter: 0.1, chunk: 'arm' + s });
    b.bone([cx + s * 0.52, 1.55, z], [cx + s * 0.62, 1.15, z + 0.28], 0.13, 0.11, { color: C.stoneWarm, jitter: 0.1, chunk: 'arm' + s });
    b.bone([cx + s * 0.62, 1.15, z + 0.28], [cx + s * 0.5, 0.92, z + 0.5], 0.11, 0.09, { color: C.stoneWarm, jitter: 0.1, chunk: 'arm' + s });
    b.sphere(0.15, { position: [cx + s * 0.48, 0.9, z + 0.52], color: C.stoneWarm, jitter: 0.1, chunk: 'arm' + s });
    for (let f = 0; f < 3; f++) b.box(0.06, 0.05, 0.16, { position: [cx + s * (0.4 + f * 0.07), 0.86, z + 0.64], color: C.stoneLight, chunk: 'arm' + s });
  }
  // necklace
  b.add(unitGeo('torus', 0.09, 5, 12), { position: [cx, 1.5, z + 0.18], rotation: [1.25, 0, 0], scale: 0.36, color: C.gold, jitter: 0.1, chunk: 'body' });
  b.box(0.14, 0.18, 0.05, { position: [cx, 1.34, z + 0.4], color: C.gold, chunk: 'body' });
  // head
  b.cyl(1, 7, { position: [cx, 1.76, z], scale: [0.16, 0.22, 0.16], color: C.stoneWarm, jitter: 0.1, chunk: 'head' });
  body(unitGeo('sphere', 10, 8), { position: [cx, 2.05, z + 0.02], scale: [0.42, 0.38, 0.4], chunk: 'head' });
  b.box(0.66, 0.13, 0.28, { position: [cx, 2.19, z + 0.28], rotation: [-0.3, 0, 0], color: C.stoneDark, jitter: 0.1, chunk: 'head' });
  body(unitGeo('sphere', 8, 6), { position: [cx, 1.95, z + 0.32], scale: [0.27, 0.17, 0.22], color: C.stoneLight, chunk: 'head' });
  b.box(0.36, 0.1, 0.12, { position: [cx, 1.89, z + 0.44], color: C.soot, chunk: 'head' });
  for (const s of [-1, 1]) {
    b.cone(0.03, 0.11, 4, { position: [cx + s * 0.12, 1.86, z + 0.48], rotation: [PI, 0, 0], color: C.bone, chunk: 'head' });
    b.cone(0.022, 0.07, 4, { position: [cx + s * 0.05, 1.885, z + 0.49], color: C.bone, chunk: 'head' });
    b.sphere(0.1, { position: [cx + s * 0.16, 2.12, z + 0.33], color: C.soot, ws: 7, hs: 5, chunk: 'head' });
    b.cyl(1, 8, { position: [cx + s * 0.44, 2.08, z], rotation: [0, 0, PI / 2], scale: [0.14, 0.06, 0.14], color: C.stoneWarm, jitter: 0.1, chunk: 'head' });
    // glowing eyes: HDR core plus a soft halo facing the runner
    gb.sphere(0.065, { position: [cx + s * 0.16, 2.12, z + 0.37], color: HDR.eye, ws: 7, hs: 5, chunk: 'eye' });
    gb.halo(cx + s * 0.16, 2.12, z + 0.43, 0.26, 0.26, HDR.eyeHalo, true);
  }
  // feather crown
  b.cyl(0.95, 10, { position: [cx, 2.33, z], scale: [0.44, 0.12, 0.44], color: C.gold, jitter: 0.1, chunk: 'crown' });
  const plumes = Q ? 7 : 5;
  for (let i = 0; i < plumes; i++) {
    const t = (i / (plumes - 1) - 0.5), a = t * 1.5, len = 0.36 + 0.14 * (1 - Math.abs(t) * 2);
    b.cone(0.055, len, 4, { position: [cx + Math.sin(a) * 0.36, 2.38 + Math.cos(a) * len * 0.5, z - 0.05 - Math.abs(t) * 0.05], rotation: [0, 0, -a], color: i % 2 ? C.teal : C.gold, jitter: 0.1, chunk: 'crown' });
  }
  gb.sphere(0.06, { position: [cx, 2.36, z + 0.45], color: HDR.gem, ws: 7, hs: 5, chunk: 'gem' });
  b.cyl(1, 8, { position: [cx, 2.36, z + 0.44], rotation: [PI / 2, 0, 0], scale: [0.11, 0.05, 0.11], color: C.goldDark, chunk: 'crown' });
  // weathering
  mossPatch(b, rng, cx - 0.42, 1.68, z - 0.05, 0.18, { chunk: 'arm-1' });
  mossPatch(b, rng, cx + rr(rng, -0.4, 0.4), 0.55, z - 0.45, 0.2, { chunk: 'plinth' });
  if (Q) for (let i = 0; i < 3; i++) b.box(rr(rng, 0.1, 0.18), 0.012, rr(rng, 0.08, 0.14), { position: [cx + rr(rng, -0.6, 0.6), 0.55, z + rr(rng, -0.55, 0.55)], rotation: [0, rr(rng, 0, PI), 0], color: pick(rng, [C.litter, C.mossDark]), chunk: 'plinth' });
  void S;
}

// Collapsed masonry: a heap of tumbled blocks, drums and a leaning slab that fills its lanes solidly.
function buildRubble(b, rng, o, w, cx, z, Q) {
  const H = o.height, hw = w / 2, hd = o.depth / 2;
  let ci = 0;
  const block = (x, y, zz, sx, sy, sz, rotAmt, color) => {
    b.box(sx, sy, sz, { position: [x, y, zz], rotation: [rr(rng, -rotAmt, rotAmt), rr(rng, 0, PI), rr(rng, -rotAmt, rotAmt)], color: color || pick(rng, STONES), jitter: 0.2, chunk: 'blk' + ci++ });
  };
  // base layer covering the whole width
  const baseN = Math.round(w * (Q ? 3 : 2.2));
  for (let i = 0; i < baseN; i++) {
    const s = rr(rng, 0.5, 0.85);
    block(cx + rr(rng, -hw + 0.3, hw - 0.3), s * 0.3, z + rr(rng, -hd + 0.3, hd - 0.3), s * rr(rng, 0.9, 1.5), s * 0.7, s * rr(rng, 0.9, 1.4), 0.3);
  }
  // middle layer: a solid band across the lanes at chest height
  const midN = Math.round(w * 1.6);
  for (let i = 0; i < midN; i++) {
    const x = cx - hw + 0.45 + (w - 0.9) * (midN > 1 ? i / (midN - 1) : 0.5) + rr(rng, -0.15, 0.15), s = rr(rng, 0.55, 0.8);
    block(x, rr(rng, 0.85, 1.25), z + rr(rng, -0.3, 0.3), s * 1.25, s * 0.85, s * rr(rng, 0.9, 1.3), 0.25);
  }
  // upper blocks rising to the hitbox height in the middle
  const topN = Math.max(2, Math.round(w * 0.9));
  for (let i = 0; i < topN; i++) {
    const t = topN > 1 ? i / (topN - 1) : 0.5, x = cx + (t - 0.5) * (w - 1.4), peak = 1 - Math.abs(t - 0.5) * 1.2;
    block(x, H - 0.55 - (1 - peak) * 0.5, z + rr(rng, -0.25, 0.25), rr(rng, 0.55, 0.75), rr(rng, 0.5, 0.7), rr(rng, 0.55, 0.75), 0.35);
  }
  block(cx + rr(rng, -0.2, 0.2), H - 0.25, z, 0.5, 0.5, 0.5, 0.5);
  // column drums and a leaning slab
  for (let i = 0; i < 2; i++) b.cyl(1, 9, { position: [cx + rr(rng, -hw + 0.5, hw - 0.5), rr(rng, 0.35, 1.5), z + rr(rng, -0.4, 0.4)], rotation: [rr(rng, 0.8, 1.6), rr(rng, 0, PI), rr(rng, -0.3, 0.3)], scale: [0.33, 0.55, 0.33], color: C.stoneLight, jitter: 0.15, chunk: 'drum' + i });
  b.box(1.4, 0.22, 1.0, { position: [cx + rr(rng, -0.4, 0.4), 1.55, z + hd - 0.2], rotation: [-rr(rng, 0.5, 0.75), rr(rng, -0.25, 0.25), rr(rng, -0.15, 0.15)], color: C.stoneWarm, jitter: 0.15, chunk: 'slab' });
  // carved fragments and weathering
  b.box(0.18, 0.18, 0.05, { position: [cx + rr(rng, -0.5, 0.5), rr(rng, 0.8, 1.3), z + hd - 0.05], rotation: [0, 0, rr(rng, 0, PI)], color: C.gold, chunk: 'blk0' });
  for (let i = 0; i < (Q ? 5 : 3); i++) mossPatch(b, rng, cx + rr(rng, -hw + 0.4, hw - 0.4), rr(rng, 0.5, 1.5), z + rr(rng, -hd + 0.2, hd - 0.2), 0.2, { chunk: 'blk' + Math.floor(rng() * ci) });
  if (Q) for (let i = 0; i < 3; i++) grassTuft(b, rng, cx + rr(rng, -hw, hw), z + (rng() < 0.5 ? hd + 0.15 : -hd - 0.15));
  for (let i = 0; i < (Q ? 8 : 4); i++) b.add(unitGeo('ico', 0), { position: [cx + rr(rng, -hw - 0.2, hw + 0.2), 0.06, z + (rng() < 0.5 ? 1 : -1) * rr(rng, hd, hd + 0.5)], rotation: [rr(rng, 0, PI), 0, rr(rng, 0, PI)], scale: rr(rng, 0.06, 0.13), color: C.stoneDark, jitter: 0.2, chunk: 'pebble' });
}

// Giant jungle tree: flared buttressed trunk with bark ridges, moss, vines and a canopy far above head height.
function buildTrunk(b, rng, o, w, cx, z, Q) {
  const segs = Q === 2 ? 10 : 8;
  const path = [], radii = [], ys = [-0.3, 0.25, 0.9, 1.8, 2.8, 3.8, 4.8, 5.7], rs = [0.9, 0.62, 0.5, 0.46, 0.43, 0.4, 0.37, 0.3];
  for (let i = 0; i < ys.length; i++) { path.push([cx + rr(rng, -0.05, 0.05), ys[i], z + rr(rng, -0.05, 0.05)]); radii.push(rs[i] * rr(rng, 0.95, 1.05)); }
  b.tube(path, radii, segs, { color: C.bark, jitter: 0.22, caps: true, chunk: 'trunk' });
  // buttress roots, spread mostly fore/aft so they stay inside the lane
  const roots = Q ? 6 : 4;
  for (let i = 0; i < roots; i++) {
    const a = (i / roots) * TAU + rr(rng, -0.25, 0.25), ca = Math.cos(a) * 0.75, sa = Math.sin(a);
    b.tube([[cx + ca * 0.4, 1.15, z + sa * 0.4], [cx + ca * 0.85, 0.35, z + sa * 0.9], [cx + ca * 1.15, -0.02, z + sa * 1.25], [cx + ca * 1.3, -0.25, z + sa * 1.45]], [0.14, 0.24, 0.2, 0.1], 6, { color: i % 2 ? C.bark : C.barkLight, jitter: 0.22, chunk: 'root' + i });
  }
  // bark ridges and knots
  for (let i = 0; i < (Q ? 9 : 6); i++) {
    const a = rr(rng, 0, TAU), y = rr(rng, 1.2, 4.6), len = rr(rng, 1.0, 2.2), r = 0.45 - (y / 6) * 0.1;
    b.box(0.08, len, 0.1, { position: [cx + Math.cos(a) * r, y, z + Math.sin(a) * r], rotation: [0, -a, rr(rng, -0.06, 0.06)], color: C.barkDark, jitter: 0.2, chunk: 'trunk' });
  }
  for (let i = 0; i < 3; i++) { const a = rr(rng, 0, TAU); b.sphere(rr(rng, 0.1, 0.16), { position: [cx + Math.cos(a) * 0.42, rr(rng, 1.4, 3.6), z + Math.sin(a) * 0.42], color: C.barkDark, ws: 6, hs: 4, chunk: 'trunk' }); }
  // moss creeping up one side
  for (let i = 0; i < (Q ? 5 : 3); i++) { const a = rr(rng, 0.5, 2.0); mossPatch(b, rng, cx + Math.cos(a) * 0.46, rr(rng, 0.3, 2.2), z + Math.sin(a) * 0.46, 0.24, { chunk: 'trunk' }); }
  mossPatch(b, rng, cx + 0.5, 0.15, z + 0.9, 0.3, { chunk: 'root0' });
  // canopy branches and foliage (underside above 4.3 m)
  const branches = Q ? 4 : 3;
  for (let i = 0; i < branches; i++) {
    const a = (i / branches) * TAU + rr(rng, -0.4, 0.4), y0 = rr(rng, 4.2, 5.0);
    const tip = [cx + Math.cos(a) * 1.6, y0 + 0.9, z + Math.sin(a) * 1.6];
    b.tube([[cx, y0, z], [cx + Math.cos(a) * 0.8, y0 + 0.45, z + Math.sin(a) * 0.8], tip], [0.17, 0.11, 0.05], 5, { color: C.barkDark, jitter: 0.2, chunk: 'branch' + i });
    for (let k = 0; k < (Q ? 3 : 2); k++) leafBlob(b, rng, tip[0] + rr(rng, -0.5, 0.5), tip[1] + rr(rng, -0.2, 0.4), tip[2] + rr(rng, -0.5, 0.5), rr(rng, 0.8, 1.15), { chunk: 'branch' + i, sway: 0.35, detail: Q ? 1 : 0 });
  }
  for (let k = 0; k < (Q ? 5 : 3); k++) leafBlob(b, rng, cx + rr(rng, -0.8, 0.8), 5.6 + rr(rng, -0.2, 0.8), z + rr(rng, -0.8, 0.8), rr(rng, 1.0, 1.4), { chunk: 'crown', sway: 0.3, detail: Q ? 1 : 0 });
  // hanging vines from the canopy (tips stay above jump height)
  for (let i = 0; i < (Q ? 4 : 2); i++) {
    const a = rr(rng, 0, TAU), d = rr(rng, 0.7, 1.4), len = rr(rng, 0.6, 1.1), top = 4.5;
    const vx = cx + Math.cos(a) * d, vz = z + Math.sin(a) * d;
    b.cyl(1, 4, { position: [vx, top - len / 2, vz], scale: [0.03, len, 0.03], color: C.leafDeep, sway: (y01) => (1 - y01) * 1.0, chunk: 'vine' + i });
    for (let k = 0; k < 3; k++) b.box(0.16, 0.01, 0.09, { position: [vx + rr(rng, -0.1, 0.1), top - len * (k + 1) / 3.1, vz + rr(rng, -0.1, 0.1)], rotation: [0, rr(rng, 0, PI), rr(rng, -0.5, 0.5)], color: pick(rng, LEAF_GREENS), sway: 1.0, chunk: 'vine' + i });
  }
  if (Q) { grassTuft(b, rng, cx + rr(rng, -0.8, 0.8), z + rr(rng, 1.2, 1.6)); litter(b, rng, cx, z, 5, 0.9); }
}

// ---- public API --------------------------------------------------------------------------------
export function buildObstacle(o, piece, { rng, quality } = {}) {
  if (o.type === 'gap') return null; // the floor builder cuts gaps out
  ensureShared();
  rng = rng || Math.random;
  const Q = quality === 'high' ? 2 : quality === 'medium' ? 1 : 0;
  const w = o.lanes.length * LW, cx = (o.vMin + o.vMax) * 0.5, z = -o.u;
  const b = new PropBuilder(), gb = new PropBuilder(), fb = new MeshBuilder();

  switch (o.type) {
    case 'root': buildRoot(b, rng, o, w, cx, z, Q); break;
    case 'log': if (o.plank) buildPlanks(b, rng, o, w, cx, z, Q); else buildLog(b, rng, o, w, cx, z, Q); break;
    case 'boulder': buildBoulder(b, rng, o, w, cx, z, Q); break;
    case 'spikes': buildSpikes(b, rng, o, w, cx, z, Q); break;
    case 'fire': buildFire(b, gb, fb, rng, o, w, cx, z, Q); break;
    case 'brazier': buildBrazier(b, gb, fb, rng, o, w, cx, z, Q); break;
    case 'branch': buildBranch(b, rng, o, piece, w, cx, z, Q); break;
    case 'lintel': buildLintel(b, rng, o, w, cx, z, Q); break;
    case 'pillar': buildPillar(b, rng, o, w, cx, z, Q); break;
    case 'statue': buildStatue(b, gb, rng, o, w, cx, z, Q); break;
    case 'rubble': buildRubble(b, rng, o, w, cx, z, Q); break;
    case 'trunk': buildTrunk(b, rng, o, w, cx, z, Q); break;
    default: b.box(w, o.height, o.depth, { position: [cx, o.height / 2, z], color: 0xff00ff, chunk: 'x' });
  }

  const g = new THREE.Group();
  g.name = 'obstacle:' + o.type;
  g.userData.obstacle = { type: o.type, cx, z, height: o.height, action: o.action };
  const lit = b.toMesh(litMat, true);
  if (lit) g.add(lit);
  const glow = gb.toMesh(glowMat, false);
  if (glow) { glow.userData.glow = true; g.add(glow); }
  const flames = fb.build();
  if (flames) { const fm = new THREE.Mesh(flames, flameMat); fm.castShadow = false; fm.receiveShadow = false; fm.userData.flame = true; g.add(fm); }
  return g;
}

// ---- smash effect -------------------------------------------------------------------------------
// Chunks tumble away from the runner (forward and outward, higher chunks flying farther so tall
// obstacles topple), spin, drop under gravity and finally shrink and sink through the floor.
const SMASH_DURATION = 1.05, GRAVITY = 14;
const _sq = new THREE.Quaternion(), _sv = new THREE.Vector3(), _sa = new THREE.Vector3();

export function smashObstacle(obj) {
  if (!obj || obj.userData.smashed) return;
  obj.userData.smashed = true;
  const info = obj.userData.obstacle || { cx: 0, z: 0, action: 'jump' };
  const t0 = performance.now();
  obj.traverse((child) => {
    if (!child.isMesh) return;
    if (child.userData.chunks && !child.userData.glow) startShatter(child, info, t0);
    else child.visible = false; // flames and glow vanish; the game's particle burst covers the hit
  });
}

function startShatter(mesh, info, t0) {
  const { ranges, centroids, count } = mesh.userData.chunks;
  const pos = mesh.geometry.attributes.position;
  const vel = new Float32Array(count * 3), axis = new Float32Array(count * 3), spin = new Float32Array(count);
  const tall = info.action === 'dodge';
  for (let c = 0; c < count; c++) {
    const cx = centroids[c * 3] - info.cx, cy = centroids[c * 3 + 1];
    const out = Math.sign(cx || (Math.random() - 0.5));
    vel[c * 3] = cx * 2.2 + out * (0.6 + Math.random() * 1.8);
    vel[c * 3 + 1] = 1.2 + Math.random() * 2.8 + (tall ? Math.min(cy, 3) * 0.5 : 0);
    vel[c * 3 + 2] = -(2.5 + Math.random() * 3.5 + Math.min(cy, 4) * (tall ? 2.2 : 1.2));
    _sa.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
    axis[c * 3] = _sa.x; axis[c * 3 + 1] = _sa.y; axis[c * 3 + 2] = _sa.z;
    spin[c] = 3 + Math.random() * 7;
  }
  mesh.userData.smash = { t0, orig: pos.array.slice(), vel, axis, spin, ranges, centroids };
  mesh.frustumCulled = false;   // chunks leave the original bounding sphere
  mesh.castShadow = false;
  mesh.onBeforeRender = shatterTick;
}

function shatterTick() {
  const s = this.userData.smash;
  const t = (performance.now() - s.t0) * 0.001;
  if (t >= SMASH_DURATION) { this.visible = false; delete this.onBeforeRender; return; }
  const pos = this.geometry.attributes.position, arr = pos.array, orig = s.orig, ranges = s.ranges, cen = s.centroids;
  const fall = -0.5 * GRAVITY * t * t;
  const sinkT = Math.max(0, t - 0.35), sink = -sinkT * sinkT * 5.5;
  const k = Math.min(1, Math.max(0, (t - 0.4) / (SMASH_DURATION - 0.4))), shrink = 1 - k * k * 0.85;
  let current = -1, ox = 0, oy = 0, oz = 0, cx = 0, cy = 0, cz = 0;
  for (let i = 0, n = ranges.length; i < n; i += 3) {
    const start = ranges[i], count = ranges[i + 1], c = ranges[i + 2];
    if (c !== current) {
      current = c;
      cx = cen[c * 3]; cy = cen[c * 3 + 1]; cz = cen[c * 3 + 2];
      ox = cx + s.vel[c * 3] * t; oy = cy + s.vel[c * 3 + 1] * t + fall + sink; oz = cz + s.vel[c * 3 + 2] * t;
      _sq.setFromAxisAngle(_sa.set(s.axis[c * 3], s.axis[c * 3 + 1], s.axis[c * 3 + 2]), s.spin[c] * t);
    }
    for (let v = start * 3, e = (start + count) * 3; v < e; v += 3) {
      _sv.set(orig[v] - cx, orig[v + 1] - cy, orig[v + 2] - cz).applyQuaternion(_sq).multiplyScalar(shrink);
      arr[v] = _sv.x + ox; arr[v + 1] = _sv.y + oy; arr[v + 2] = _sv.z + oz;
    }
  }
  pos.needsUpdate = true;
}
