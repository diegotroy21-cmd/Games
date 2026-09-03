// The adventurer: a low-poly explorer assembled from primitives on a jointed skeleton, with fully
// code-driven animation and the shield / boost / magnet effects.
//
// Rendering: every body part is baked (vertex colours, MeshBuilder) into ONE SkinnedMesh whose bones
// are rigid segments (hips, spine, head, upper/lower arms, upper/lower legs, feet), so the whole body
// is a single draw call; the golden idol (emissive, separate material) and the hat (can fly off) are
// small extra meshes parented to bones. Effects are a handful of additive meshes under the group.
//
// Animation: each frame a target pose (13 joint rotations + hips position) is computed from key poses
// and procedural cycles, overlays are added (lean, turn twist, stumble, landing), and the displayed
// pose is exponentially damped toward it with a rate that ramps up after every state change.
//
// Conventions: the model faces local -Z, feet at y = 0. Positive rotation.x on a limb swings its
// hanging end forward (toward -Z); positive rotation.x on the torso leans it backward.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CONFIG } from './config.js';
import { damp, clamp, lerp, smoothstep, mulberry32 } from './util.js';
import { MeshBuilder, unitGeo } from './meshbuilder.js';
import { createGlowMaterial, untrackMaterial } from './fx-materials.js';

// ---- palette -----------------------------------------------------------------------------------
const C = {
  skin: 0xe6ad7e, skinDark: 0xd39a6c, hair: 0x3a2418, eye: 0x1c1410, mouth: 0x9c5a48,
  shirt: 0xe9d7a8, shirtShade: 0xd0b97f, scarf: 0xd43a2c, trousers: 0x6b5a3b, belt: 0x4a2f1b,
  buckle: 0xe2b448, leather: 0x8b5a2b, leatherDark: 0x6a4120, boot: 0x3e2a1a, bootTrim: 0x5e4029,
  sole: 0x241710, hat: 0x503523, hatBand: 0x2a1a11, rope: 0xc4a76a, gold: 0xffe08a, goldDark: 0xc08a2a,
  gem: 0x2fd68a,
};

// ---- skeleton layout ----------------------------------------------------------------------------
const J = { hips: 0, spine: 1, head: 2, shL: 3, shR: 4, elL: 5, elR: 6, hipL: 7, hipR: 8, kneeL: 9, kneeR: 10, ankL: 11, ankR: 12 };
const NJ = 13;
const POS = NJ * 3;      // slots for the hips position (x, y, z)
const NP = POS + 3;      // total floats per pose
const HIP_Y = 0.92;      // standing hips height
const UPPER_ARM = 0.30, FOREARM = 0.27, THIGH = 0.42, SHIN = 0.41;
const JUMP_V0 = 4 * CONFIG.jumpHeight / CONFIG.jumpDuration;
const SQ2 = Math.SQRT2;

// Build a pose array from a sparse spec: { joint: angle | [x, y, z], pos: [x, y, z] }.
function makePose(spec = {}) {
  const p = new Float32Array(NP);
  p[POS + 1] = HIP_Y;
  for (const k in spec) {
    const v = spec[k];
    if (k === 'pos') { p[POS] = v[0]; p[POS + 1] = v[1]; p[POS + 2] = v[2]; continue; }
    const j = J[k] * 3;
    if (typeof v === 'number') p[j] = v; else { p[j] = v[0]; p[j + 1] = v[1]; p[j + 2] = v[2]; }
  }
  return p;
}
const poseCopy = (dst, src) => { dst.set(src); };
const poseMix = (dst, src, w) => { for (let i = 0; i < NP; i++) dst[i] += (src[i] - dst[i]) * w; };
const poseBlend3 = (dst, a, wa, b, wb, c, wc) => { for (let i = 0; i < NP; i++) dst[i] = a[i] * wa + b[i] * wb + c[i] * wc; };
const addJ = (p, j, x, y = 0, z = 0) => { p[j * 3] += x; p[j * 3 + 1] += y; p[j * 3 + 2] += z; };
const setJ = (p, j, x, y = 0, z = 0) => { p[j * 3] = x; p[j * 3 + 1] = y; p[j * 3 + 2] = z; };

// ---- key poses ----------------------------------------------------------------------------------
const P = {
  idle: makePose({ spine: -0.02, head: 0.02, shL: [0.08, 0, -0.14], elL: [0.35, 0, 0.1], shR: [0.5, 0, 0.55], elR: 2.05, hipL: [0, 0, 0.03], hipR: [0, 0, -0.03], kneeL: -0.04, kneeR: -0.04 }),
  crouch: makePose({ hips: -0.3, pos: [0, HIP_Y - 0.2, 0], spine: -0.3, head: 0.25, shL: [-0.9, 0, -0.3], elL: 0.6, shR: [0.2, 0, 0.5], elR: 2.0, hipL: 0.9, hipR: 0.9, kneeL: -1.4, kneeR: -1.4, ankL: 0.3, ankR: 0.3 }),
  rise: makePose({ hips: -0.1, pos: [0, HIP_Y + 0.02, 0], spine: 0.05, head: 0.05, shL: [1.7, 0, -0.5], elL: 0.5, shR: [0.9, 0, 0.6], elR: 1.9, hipL: 1.0, kneeL: -1.3, ankL: -0.2, hipR: -0.55, kneeR: -0.35, ankR: -0.5 }),
  tuck: makePose({ hips: -0.35, spine: -0.35, head: 0.35, shL: [0.9, 0, -0.5], elL: 1.2, shR: [0.7, 0, 0.6], elR: 2.0, hipL: 1.55, hipR: 1.55, kneeL: -2.2, kneeR: -2.2, ankL: -0.3, ankR: -0.3 }),
  fall: makePose({ hips: 0.05, spine: 0.05, head: -0.05, shL: [0.6, 0, -1.1], elL: 0.6, shR: [0.6, 0, 0.9], elR: 1.8, hipL: 0.45, hipR: 0.35, kneeL: -0.5, kneeR: -0.5, ankL: -0.25, ankR: -0.25 }),
  slide: makePose({ hips: 1.4, pos: [0, 0.34, 0.12], spine: -0.55, head: -0.55, shL: [2.3, 0, -0.5], elL: 0.4, shR: [0.95, 0, 0.35], elR: 2.1, hipR: [-0.2, 0, -0.05], kneeR: -0.1, ankR: -0.3, hipL: [0.4, 0, 0.12], kneeL: -1.3, ankL: 0.1 }),
  hitA: makePose({ hips: 0.35, pos: [0, HIP_Y - 0.05, 0.05], spine: 0.35, head: 0.5, shL: [1.5, 0, -0.5], elL: 0.4, shR: [1.5, 0, 0.5], elR: 0.6, hipL: 0.3, hipR: -0.2, kneeL: -0.5, kneeR: -0.5 }),
  hitB: makePose({ hips: 1.5, pos: [0, 0.28, 0.35], spine: 0.1, head: 0.4, shL: [0.6, 0, -1.3], elL: 0.5, shR: [0.6, 0, 1.2], elR: 0.8, hipL: 0.6, hipR: 0.45, kneeL: -1.1, kneeR: -0.9, ankL: -0.2, ankR: -0.2 }),
  hitC: makePose({ hips: 1.55, pos: [0, 0.22, 0.4], spine: 0.05, head: -0.25, shL: [0.4, 0, -1.4], elL: 0.3, shR: [0.5, 0, 1.0], elR: 1.4, hipL: 0.25, hipR: 0.15, kneeL: -0.45, kneeR: -0.3, ankL: -0.3, ankR: -0.3 }),
  caughtA: makePose({ hips: 0.15, pos: [0, HIP_Y + 0.03, 0], spine: 0.15, head: 0.45, shL: [2.5, 0, -0.6], elL: 0.7, shR: [2.4, 0, 0.7], elR: 0.9, hipL: 0.1, hipR: -0.1, kneeL: -0.15, kneeR: -0.15, ankL: -0.4, ankR: -0.4 }),
  caughtB: makePose({ hips: -0.9, pos: [0, 0.42, 0.05], spine: -0.9, head: -0.6, shL: [2.6, 0, -0.5], elL: 2.2, shR: [2.5, 0, 0.6], elR: 2.3, hipL: 0.4, hipR: 0.45, kneeL: -1.1, kneeR: -1.1, ankL: -0.5, ankR: -0.5 }),
  burnB: makePose({ hips: -1.4, pos: [0, 0.3, -0.25], spine: 0.15, head: -0.1, shL: [2.2, 0, -0.7], elL: 0.5, shR: [2.0, 0, 0.8], elR: 1.0, hipL: 0.35, hipR: 0.15, kneeL: -0.7, kneeR: -0.7, ankL: -0.4, ankR: -0.4 }),
};

// ---- geometry helpers ---------------------------------------------------------------------------
const taperCache = new Map();
// Unit box whose top face is scaled by (kx, kz): a tapered block for torsos, heads and pelvises.
function taperBoxGeo(kx, kz) {
  const key = kx.toFixed(3) + ',' + kz.toFixed(3);
  let g = taperCache.get(key);
  if (g) return g;
  g = unitGeo('box').clone();
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) if (pos.getY(i) > 0) pos.setXYZ(i, pos.getX(i) * kx, pos.getY(i), pos.getZ(i) * kz);
  g.computeVertexNormals();
  taperCache.set(key, g);
  return g;
}
// Tapered block: bottom footprint (wBot x dBot), top footprint (wTop x dTop), height h, centred at position.
function taperBox(b, wBot, wTop, h, dBot, dTop, opts) {
  b.add(taperBoxGeo(wTop / wBot, dTop / dBot), { ...opts, scale: [wBot, h, dBot] });
}
// Cylinder segment along -Y from y0 down to y1 (bone-local), radii r0 at the top, r1 at the bottom.
function seg(b, r0, r1, y0, y1, color, n = 8, x = 0, z = 0) {
  b.cylinder(r0, r1, y0 - y1, n, { position: [x, (y0 + y1) * 0.5, z], color });
}

function buildBoneGeometry(builders, bones) {
  const parts = [];
  for (let i = 0; i < NJ; i++) {
    const g = builders[i].build();
    if (!g) continue;
    const n = g.attributes.position.count;
    const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
    for (let k = 0; k < n; k++) { si[k * 4] = i; sw[k * 4] = 1; }
    g.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
    g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
    g.applyMatrix4(bones[i].matrixWorld); // bone-local -> bind pose (mesh space)
    parts.push(g);
  }
  const merged = mergeGeometries(parts, false);
  for (const p of parts) p.dispose();
  merged.computeBoundingSphere();
  return merged;
}

// ---- body parts (bone-local coordinates, y down along each limb) ----------------------------------
function buildBody(bones) {
  const B = [];
  for (let i = 0; i < NJ; i++) B.push(new MeshBuilder());

  // Hips: pelvis, belt + buckle, satchel on the left hip.
  {
    const b = B[J.hips];
    taperBox(b, 0.30, 0.36, 0.24, 0.20, 0.24, { position: [0, -0.06, 0], color: C.trousers });
    b.box(0.38, 0.06, 0.26, { position: [0, 0.075, 0], color: C.belt });
    b.box(0.07, 0.05, 0.02, { position: [0, 0.075, -0.135], color: C.buckle });
    b.box(0.19, 0.17, 0.09, { position: [-0.235, -0.04, 0.05], rotation: [0, 0.15, 0.08], color: C.leather, jitter: 0.08 });
    b.box(0.2, 0.06, 0.1, { position: [-0.235, 0.03, 0.045], rotation: [0, 0.15, 0.08], color: C.leatherDark });
    b.box(0.04, 0.04, 0.015, { position: [-0.24, -0.06, -0.005], rotation: [0, 0.15, 0], color: C.buckle });
  }
  // Spine: torso block, shoulders, satchel strap, collar, scarf, rope coil on the back.
  {
    const b = B[J.spine];
    taperBox(b, 0.34, 0.44, 0.42, 0.22, 0.26, { position: [0, 0.17, 0], color: C.shirt });
    b.sphere(0.085, { position: [-0.27, 0.35, 0], color: C.shirtShade, ws: 6, hs: 4 });
    b.sphere(0.085, { position: [0.27, 0.35, 0], color: C.shirtShade, ws: 6, hs: 4 });
    b.box(0.07, 0.58, 0.29, { position: [0.02, 0.19, 0], rotation: [0, 0, -0.6], color: C.leather });
    b.box(0.21, 0.05, 0.21, { position: [0, 0.395, 0], color: C.shirtShade });
    b.box(0.13, 0.13, 0.05, { position: [0, 0.32, -0.135], rotation: [0.15, 0, Math.PI / 4], color: C.scarf });
    b.box(0.09, 0.06, 0.05, { position: [-0.03, 0.245, -0.145], rotation: [0.25, 0.1, 0.3], color: C.scarf });
    b.add(unitGeo('torus', 0.22, 5, 10), { position: [0.11, 0.18, 0.15], rotation: [Math.PI / 2, 0, 0], scale: 0.075, color: C.rope, jitter: 0.1 });
  }
  // Head: neck, tapered head block, hair, face features, ears (the hat is a separate mesh).
  {
    const b = B[J.head];
    seg(b, 0.06, 0.065, 0.06, -0.05, C.skinDark, 6);
    taperBox(b, 0.23, 0.27, 0.26, 0.24, 0.27, { position: [0, 0.16, 0], color: C.skin });
    b.box(0.28, 0.13, 0.13, { position: [0, 0.235, 0.085], color: C.hair });
    b.box(0.29, 0.06, 0.28, { position: [0, 0.275, 0], color: C.hair });
    b.box(0.035, 0.04, 0.02, { position: [-0.055, 0.185, -0.135], color: C.eye });
    b.box(0.035, 0.04, 0.02, { position: [0.055, 0.185, -0.135], color: C.eye });
    b.box(0.06, 0.016, 0.012, { position: [-0.055, 0.222, -0.137], rotation: [0, 0, 0.12], color: C.hair });
    b.box(0.06, 0.016, 0.012, { position: [0.055, 0.222, -0.137], rotation: [0, 0, -0.12], color: C.hair });
    b.box(0.038, 0.05, 0.04, { position: [0, 0.155, -0.15], color: C.skinDark });
    b.box(0.07, 0.014, 0.012, { position: [0, 0.105, -0.138], color: C.mouth });
    b.box(0.02, 0.05, 0.04, { position: [-0.145, 0.165, 0.01], color: C.skinDark });
    b.box(0.02, 0.05, 0.04, { position: [0.145, 0.165, 0.01], color: C.skinDark });
  }
  // Arms: rolled sleeve + cuff on the upper arm, bare forearm, fist, leather wrist strap.
  for (const side of [-1, 1]) {
    const up = B[side < 0 ? J.shL : J.shR], lo = B[side < 0 ? J.elL : J.elR];
    seg(up, 0.07, 0.064, 0.02, -0.16, C.shirt);
    seg(up, 0.078, 0.078, -0.155, -0.2, C.shirtShade);
    seg(up, 0.054, 0.05, -0.19, -UPPER_ARM - 0.02, C.skin);
    lo.sphere(0.056, { color: C.skin, ws: 6, hs: 4 });
    seg(lo, 0.052, 0.046, -0.02, -FOREARM + 0.02, C.skin);
    seg(lo, 0.052, 0.052, -0.19, -0.225, C.leather);
    lo.box(0.085, 0.1, 0.075, { position: [0, -FOREARM - 0.03, -0.005], color: C.skinDark });
  }
  // Legs: thigh, shin with boot shaft, boot with toe cap and sole.
  for (const side of [-1, 1]) {
    const th = B[side < 0 ? J.hipL : J.hipR], sh = B[side < 0 ? J.kneeL : J.kneeR], ft = B[side < 0 ? J.ankL : J.ankR];
    th.sphere(0.09, { color: C.trousers, ws: 6, hs: 4 });
    seg(th, 0.088, 0.072, -0.02, -THIGH, C.trousers);
    sh.sphere(0.072, { color: C.trousers, ws: 6, hs: 4 });
    seg(sh, 0.07, 0.06, -0.02, -0.22, C.trousers);
    seg(sh, 0.085, 0.085, -0.2, -0.235, C.bootTrim);
    seg(sh, 0.078, 0.072, -0.23, -SHIN - 0.01, C.boot);
    ft.box(0.13, 0.085, 0.2, { position: [0, -0.028, -0.03], color: C.boot });
    ft.box(0.135, 0.07, 0.1, { position: [0, -0.036, -0.16], color: C.bootTrim });
    ft.box(0.14, 0.02, 0.28, { position: [0, -0.06, -0.06], color: C.sole });
  }
  return buildBoneGeometry(B, bones);
}

// Fedora: built with the brim centre at the origin so it can tumble convincingly when knocked off.
function buildHat() {
  const b = new MeshBuilder();
  b.add(unitGeo('cyl', 1, 1, 10, 1, false), { position: [0, 0, 0.01], rotation: [-0.1, 0, 0], scale: [0.235, 0.025, 0.26], color: C.hat, jitter: 0.06 });
  b.cylinder(0.125, 0.16, 0.16, 8, { position: [0, 0.09, 0], color: C.hat });
  b.cylinder(0.168, 0.168, 0.045, 8, { position: [0, 0.035, 0], color: C.hatBand });
  b.box(0.12, 0.03, 0.17, { position: [0, 0.165, 0], color: C.hatBand });
  return b.build();
}

// The stolen idol: a squat golden totem with an emerald stare.
function buildIdol() {
  const b = new MeshBuilder();
  b.box(0.11, 0.03, 0.09, { position: [0, 0.015, 0], color: C.goldDark });
  b.cylinder(0.045, 0.06, 0.1, 6, { position: [0, 0.08, 0], color: C.gold });
  b.box(0.14, 0.03, 0.03, { position: [0, 0.105, -0.01], color: C.gold });
  b.sphere(0.045, { position: [0, 0.165, 0], color: C.gold, ws: 6, hs: 4 });
  b.cone(0.05, 0.05, 6, { position: [0, 0.235, 0], color: C.goldDark });
  b.box(0.018, 0.018, 0.01, { position: [-0.017, 0.17, -0.043], color: C.gem });
  b.box(0.018, 0.018, 0.01, { position: [0.017, 0.17, -0.043], color: C.gem });
  return b.build();
}

// Boost streaks: N crossed quads trailing behind the runner, animated in the vertex shader.
function buildStreaks(n) {
  const rnd = mulberry32(1234);
  const pos = [], aT = [], aSeed = [], idx = [];
  const quad = (a, b, c, d, s) => {
    const base = pos.length / 3;
    pos.push(...a, ...b, ...c, ...d); aT.push(0, 0, 1, 1); aSeed.push(s, s, s, s);
    idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
  };
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rnd() * 0.5, r = 0.28 + rnd() * 0.35;
    const x = Math.cos(a) * r, y = 0.25 + rnd() * 1.25, L = 1.3 + rnd() * 1.6, w = 0.035 + rnd() * 0.045, s = rnd();
    quad([x - w, y, 0], [x + w, y, 0], [x + w, y, L], [x - w, y, L], s);
    quad([x, y - w, 0], [x, y + w, 0], [x, y + w, L], [x, y - w, L], s);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('aT', new THREE.Float32BufferAttribute(aT, 1));
  g.setAttribute('aSeed', new THREE.Float32BufferAttribute(aSeed, 1));
  g.setIndex(idx);
  return g;
}
function streakMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uAlpha: { value: 0 }, uLen: { value: 1 }, uColor: { value: new THREE.Color(0xffd66a) }, uColor2: { value: new THREE.Color(0xff7a1a) } },
    vertexShader: `
      attribute float aT; attribute float aSeed;
      uniform float uTime; uniform float uLen;
      varying float vT; varying float vF;
      void main(){
        vT = aT;
        vec3 p = position;
        float stretch = uLen * (0.75 + 0.25 * sin(uTime * 9.0 + aSeed * 7.0));
        p.z *= stretch;
        p.x += sin(uTime * 16.0 + aSeed * 20.0 + aT * 5.0) * 0.07 * aT;
        p.y += cos(uTime * 13.0 + aSeed * 17.0 + aT * 4.0) * 0.05 * aT;
        vF = 0.7 + 0.3 * sin(uTime * 22.0 + aSeed * 40.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
      }`,
    fragmentShader: `
      uniform float uAlpha; uniform vec3 uColor; uniform vec3 uColor2;
      varying float vT; varying float vF;
      void main(){
        float a = pow(max(0.001, 1.0 - vT), 1.6) * uAlpha * vF;
        gl_FragColor = vec4(mix(uColor * 1.6, uColor2, vT) * a, a);
      }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
  });
}

// Magnet sparks: a few small diamonds orbiting the runner, moved entirely in the vertex shader.
function buildSparks(n) {
  const base = new THREE.OctahedronGeometry(0.045, 0);
  const parts = [];
  for (let i = 0; i < n; i++) {
    const g = base.clone();
    const seed = new Float32Array(g.attributes.position.count).fill(i / n);
    g.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
    parts.push(g);
  }
  const merged = mergeGeometries(parts, false);
  for (const p of parts) p.dispose();
  base.dispose();
  return merged;
}
function sparkMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uAlpha: { value: 0 }, uColor: { value: new THREE.Color(0xff5ae0) } },
    vertexShader: `
      attribute float aSeed;
      uniform float uTime;
      varying float vA;
      void main(){
        float ang = uTime * 2.6 + aSeed * 6.2831;
        float r = 0.74 + 0.12 * sin(uTime * 3.0 + aSeed * 9.0);
        float h = 0.12 + 0.6 * (0.5 + 0.5 * sin(uTime * 1.7 + aSeed * 12.0));
        vec3 c = vec3(cos(ang) * r, h, sin(ang) * r);
        vA = 0.6 + 0.4 * sin(uTime * 11.0 + aSeed * 30.0);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position + c, 1.0);
      }`,
    fragmentShader: `
      uniform float uAlpha; uniform vec3 uColor;
      varying float vA;
      void main(){ float a = uAlpha * vA; gl_FragColor = vec4(uColor * (1.0 + vA) * a, a); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false,
  });
}

// ---- the character ------------------------------------------------------------------------------
export function createCharacter() {
  const group = new THREE.Group();
  const rig = new THREE.Group();
  group.add(rig);

  // Skeleton (bind pose: standing straight, arms hanging).
  const bone = (x, y, z, parent) => { const b = new THREE.Bone(); b.position.set(x, y, z); if (parent) parent.add(b); return b; };
  const bones = new Array(NJ);
  const hips = bones[J.hips] = bone(0, HIP_Y, 0, null);
  const spine = bones[J.spine] = bone(0, 0.10, 0, hips);
  const head = bones[J.head] = bone(0, 0.42, 0, spine);
  bones[J.shL] = bone(-0.27, 0.35, 0, spine);
  bones[J.shR] = bone(0.27, 0.35, 0, spine);
  bones[J.elL] = bone(0, -UPPER_ARM, 0, bones[J.shL]);
  bones[J.elR] = bone(0, -UPPER_ARM, 0, bones[J.shR]);
  bones[J.hipL] = bone(-0.13, -0.02, 0, hips);
  bones[J.hipR] = bone(0.13, -0.02, 0, hips);
  bones[J.kneeL] = bone(0, -THIGH, 0, bones[J.hipL]);
  bones[J.kneeR] = bone(0, -THIGH, 0, bones[J.hipR]);
  bones[J.ankL] = bone(0, -SHIN, 0, bones[J.kneeL]);
  bones[J.ankR] = bone(0, -SHIN, 0, bones[J.kneeR]);
  hips.updateMatrixWorld(true);

  const bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.8, metalness: 0.0 });
  const bodyGeo = buildBody(bones);
  const body = new THREE.SkinnedMesh(bodyGeo, bodyMat);
  body.add(hips);
  body.updateMatrixWorld(true);
  body.bind(new THREE.Skeleton(bones));
  body.castShadow = true;
  body.receiveShadow = true;
  body.frustumCulled = false; // always on screen; skinned bounds are not worth recomputing
  rig.add(body);

  // Hat on the head bone (brim origin), can be knocked off.
  const hatGeo = buildHat();
  const hat = new THREE.Mesh(hatGeo, bodyMat);
  hat.castShadow = true;
  const HAT_POS = new THREE.Vector3(0, 0.285, -0.01);
  head.add(hat);
  hat.position.copy(HAT_POS);

  // Idol in the right fist.
  const goldMat = new THREE.MeshStandardMaterial({ vertexColors: true, color: 0xffd45a, emissive: 0xff9a1a, emissiveIntensity: 1.1, metalness: 0.6, roughness: 0.35, flatShading: true });
  const idolGeo = buildIdol();
  const idol = new THREE.Mesh(idolGeo, goldMat);
  idol.castShadow = true;
  idol.position.set(0, -FOREARM - 0.02, -0.03);
  idol.rotation.set(Math.PI - 0.55, 0, 0); // stands upright when the forearm is raised
  bones[J.elR].add(idol);

  // ---- effects (under the group so they ignore body pitch) ----
  const shieldGeo = new THREE.IcosahedronGeometry(1, 2);
  const shieldMat = createGlowMaterial(0x6fd0ff, 2.2, 1.7);
  const shield = new THREE.Mesh(shieldGeo, shieldMat);
  shield.position.y = 0.95; shield.visible = false;
  group.add(shield);

  const auraMat = createGlowMaterial(0xffc24a, 2.6, 1.3);
  const aura = new THREE.Mesh(shieldGeo, auraMat);
  aura.position.y = 0.9; aura.scale.set(0.62, 1.05, 0.62); aura.visible = false;
  group.add(aura);
  const streakGeo = buildStreaks(12);
  const streakMat = streakMaterial();
  const streaks = new THREE.Mesh(streakGeo, streakMat);
  streaks.visible = false; streaks.frustumCulled = false;
  group.add(streaks);

  const ringGeo = new THREE.TorusGeometry(0.72, 0.045, 6, 28);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xff4fd8, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
  const rippleMat = ringMat.clone();
  const ring = new THREE.Mesh(ringGeo, ringMat);
  ring.rotation.x = Math.PI / 2; ring.position.y = 0.04; ring.visible = false;
  const ripple = new THREE.Mesh(ringGeo, rippleMat);
  ripple.rotation.x = Math.PI / 2; ripple.position.y = 0.05; ripple.visible = false;
  group.add(ring, ripple);
  const sparkGeo = buildSparks(6);
  const sparkMat = sparkMaterial();
  const sparks = new THREE.Mesh(sparkGeo, sparkMat);
  sparks.visible = false; sparks.frustumCulled = false;
  group.add(sparks);

  // ---- animation state ----
  const T = new Float32Array(NP);  // target pose
  const Cur = new Float32Array(NP); // displayed (damped) pose
  poseCopy(Cur, P.idle);
  let anim = 'idle';       // one-shot animation from setState
  let animT = 0;           // seconds since the last setState (except turn)
  let lambdaEnter = 10;    // damping rate right after a state change (ramps up to LAMBDA_MAX)
  const LAMBDA_MAX = 48;
  let phase = 0;           // run-cycle phase
  let time = 0;
  let prevState = 'idle';
  let landT = 99, popT = 99, stumbleT = 99, turnT = 99, turnDir = 0, jumpT = 99, slideT = 99;
  let leanD = 0, latD = 0, tumbleX = 0, tumbleY = 0;
  let deathAnim = null, deathT = 0;
  let shieldW = 0, boostW = 0, magnetW = 0;
  let hatLoose = false;
  const hatVel = new THREE.Vector3();
  let hatSpin = 0;
  const _m = new THREE.Matrix4();

  function setAnim(name, enterLambda) { anim = name; animT = 0; lambdaEnter = enterLambda; }

  // Run cycle + idle blend. `w` = speed01 (0..1), `ws` = how much running vs standing.
  function poseRun(ctx) {
    const w = clamp(ctx.speed01, 0, 1);
    const ws = smoothstep(0.4, 3.5, ctx.speed);
    const s = Math.sin(phase), c = Math.cos(phase), c2 = Math.cos(phase * 2);
    const At = 0.72 + 0.35 * w, K = 1.35 + 0.45 * w;
    const lean = 0.10 + 0.30 * clamp(ctx.speed01, 0, 1.2);
    setJ(T, J.hips, -lean, -0.14 * s, -0.06 * c);
    T[POS] = 0;
    T[POS + 1] = HIP_Y - 0.85 * (1 - Math.cos(lean)) - 0.015 + 0.04 * c2;
    T[POS + 2] = -0.5 * Math.sin(lean);
    setJ(T, J.spine, -0.04 - 0.08 * w, 0.22 * s, 0.05 * c);
    setJ(T, J.head, lean * 0.75 - 0.05 + 0.03 * c2, -0.12 * s, 0);
    setJ(T, J.hipL, At * s, 0, 0.02);
    setJ(T, J.hipR, -At * s, 0, -0.02);
    const kl = 0.5 + 0.5 * Math.cos(phase + 0.4), kr = 1 - kl;
    setJ(T, J.kneeL, -(K * kl * kl + 0.12));
    setJ(T, J.kneeR, -(K * kr * kr + 0.12));
    setJ(T, J.ankL, 0.22 * s);
    setJ(T, J.ankR, -0.22 * s);
    const Aa = 0.9 * (0.6 + 0.4 * w);
    setJ(T, J.shL, -Aa * s + 0.25, 0, -0.22);
    setJ(T, J.elL, 1.5 - 0.3 * s, 0, 0);
    setJ(T, J.shR, 0.55 + 0.1 * s, 0, 0.45);
    setJ(T, J.elR, 2.0 + 0.1 * s, 0.15, 0);
    if (ws < 1) { poseMix(T, P.idle, 1 - ws); addIdleMotion(1 - ws); }
  }
  function addIdleMotion(k) {
    const t = time;
    addJ(T, J.spine, 0.025 * Math.sin(t * 2.2) * k, 0, 0);
    addJ(T, J.head, 0.04 * Math.sin(t * 1.1) * k, (0.25 * Math.sin(t * 0.6) + 0.1 * Math.sin(t * 1.7)) * k, 0);
    addJ(T, J.hips, 0, 0, 0.02 * Math.sin(t * 0.8) * k);
    T[POS] += 0.02 * Math.sin(t * 0.8) * k;
    addJ(T, J.shL, 0.05 * Math.sin(t * 2.2) * k, 0, 0);
    addJ(T, J.shR, 0.06 * Math.sin(t * 1.5) * k, 0, 0);
    addJ(T, J.elR, 0.08 * Math.sin(t * 1.5 + 1) * k, 0, 0);
  }

  function poseJump(ctx) {
    if (jumpT < 0.07) { poseCopy(T, P.crouch); return; }
    const vy01 = clamp(ctx.vy / JUMP_V0, -1.6, 1);
    const wT = smoothstep(1.0, 0.3, Math.abs(vy01));
    const wR = vy01 > 0 ? 1 - wT : 0, wF = vy01 < 0 ? 1 - wT : 0;
    poseBlend3(T, P.rise, wR, P.tuck, wT, P.fall, wF);
    // Fast fall: brace harder, arms overhead.
    const slam = smoothstep(1.05, 1.5, -vy01);
    if (slam > 0) { addJ(T, J.spine, -0.45 * slam); addJ(T, J.shL, 1.2 * slam, 0, 0.4 * slam); addJ(T, J.shR, 0.8 * slam); addJ(T, J.head, 0.3 * slam); }
  }

  function poseSlide() {
    poseCopy(T, P.slide);
    const t = slideT;
    addJ(T, J.hips, 0.08 * Math.sin(t * 9), 0, 0.04 * Math.sin(t * 7));
    addJ(T, J.shL, 0.15 * Math.sin(t * 11), 0, 0);
    T[POS + 1] += 0.02 * Math.sin(t * 9);
  }

  function poseDeath(type) {
    const t = deathT;
    if (type === 'fall') {
      setJ(T, J.hips, 0, 0, 0.2 * Math.sin(t * 5)); T[POS] = 0; T[POS + 1] = HIP_Y; T[POS + 2] = 0;
      setJ(T, J.spine, 0.2 * Math.sin(t * 7), 0.3 * Math.sin(t * 5), 0);
      setJ(T, J.head, 0.4 * Math.sin(t * 9), 0.2 * Math.sin(t * 6), 0);
      setJ(T, J.shL, 2.2 + 0.7 * Math.sin(t * 14), 0, -0.9 - 0.4 * Math.cos(t * 11));
      setJ(T, J.elL, 0.7 + 0.5 * Math.sin(t * 13));
      setJ(T, J.shR, 2.0 + 0.7 * Math.sin(t * 14 + 2), 0, 0.9 + 0.4 * Math.cos(t * 12));
      setJ(T, J.elR, 0.8 + 0.5 * Math.sin(t * 12));
      setJ(T, J.hipL, 0.6 * Math.sin(t * 11)); setJ(T, J.hipR, -0.6 * Math.sin(t * 11));
      setJ(T, J.kneeL, -0.9 - 0.6 * Math.sin(t * 13)); setJ(T, J.kneeR, -0.9 + 0.6 * Math.sin(t * 13));
      setJ(T, J.ankL, -0.3); setJ(T, J.ankR, -0.3);
    } else if (type === 'burn') {
      // Flail and hop, then collapse face down.
      setJ(T, J.hips, -0.1 + 0.1 * Math.sin(t * 9), 0.25 * Math.sin(t * 7), 0.1 * Math.sin(t * 11));
      T[POS] = 0; T[POS + 1] = HIP_Y - 0.05 + 0.1 * Math.abs(Math.sin(t * 13)); T[POS + 2] = 0;
      setJ(T, J.spine, -0.15 + 0.1 * Math.sin(t * 8), 0.2 * Math.sin(t * 6), 0);
      setJ(T, J.head, 0.3 + 0.2 * Math.sin(t * 15), 0.3 * Math.sin(t * 10), 0);
      setJ(T, J.shL, 2.2 + 0.5 * Math.sin(t * 19), 0, -0.6 - 0.3 * Math.sin(t * 14));
      setJ(T, J.elL, 0.8 + 0.4 * Math.sin(t * 17));
      setJ(T, J.shR, 2.1 + 0.5 * Math.sin(t * 19 + 2), 0, 0.7 + 0.3 * Math.sin(t * 13));
      setJ(T, J.elR, 0.9 + 0.4 * Math.sin(t * 16));
      const hl = Math.abs(Math.sin(t * 13)), hr = Math.abs(Math.cos(t * 13));
      setJ(T, J.hipL, 0.5 * hl); setJ(T, J.hipR, 0.5 * hr);
      setJ(T, J.kneeL, -0.9 * hl); setJ(T, J.kneeR, -0.9 * hr);
      setJ(T, J.ankL, -0.3 * hl); setJ(T, J.ankR, -0.3 * hr);
      const wB = smoothstep(0.7, 1.3, t);
      if (wB > 0) {
        poseMix(T, P.burnB, wB);
        const sh = Math.exp(-(t - 1.3) * 1.2) * wB;
        addJ(T, J.spine, 0.03 * Math.sin(t * 27) * sh); addJ(T, J.head, 0.05 * Math.sin(t * 19) * sh);
      }
    } else if (type === 'caught') {
      if (t < 0.22) poseCopy(T, P.caughtA);
      else { poseCopy(T, P.caughtA); poseMix(T, P.caughtB, smoothstep(0.22, 0.75, t)); }
      const tr = smoothstep(0.6, 1.0, t);
      addJ(T, J.spine, 0.03 * Math.sin(t * 28) * tr); addJ(T, J.head, 0, 0.06 * Math.sin(t * 20) * tr, 0);
      T[POS + 1] += 0.01 * Math.sin(t * 25) * tr;
    } else {
      // hit: recoil, thrown onto the back, settle with a bounce.
      poseCopy(T, P.hitA);
      if (t > 0.12) poseMix(T, P.hitB, smoothstep(0.12, 0.5, t));
      if (t > 0.5) poseMix(T, P.hitC, smoothstep(0.5, 0.95, t));
      if (t > 0.5 && t < 0.8) T[POS + 1] += 0.1 * Math.sin(Math.PI * (t - 0.5) / 0.3);
    }
  }

  // Overlays for the living runner: landing squash, slide pop-up, stumble, turn twist, leans.
  function addOverlays(ctx) {
    if (landT < 0.32) {
      const e = Math.sin(Math.PI * landT / 0.32);
      addJ(T, J.hips, -0.3 * e); T[POS + 1] -= 0.2 * e;
      addJ(T, J.spine, -0.25 * e); addJ(T, J.head, 0.3 * e);
      addJ(T, J.shL, 0.3 * e, 0, -0.7 * e); addJ(T, J.shR, 0, 0, 0.5 * e);
      addJ(T, J.hipL, 0.5 * e); addJ(T, J.hipR, 0.5 * e); addJ(T, J.kneeL, -1.0 * e); addJ(T, J.kneeR, -1.0 * e);
      addJ(T, J.ankL, 0.3 * e); addJ(T, J.ankR, 0.3 * e);
    }
    if (popT < 0.3) {
      const e = Math.sin(Math.PI * popT / 0.3);
      T[POS + 1] += 0.1 * e; addJ(T, J.shL, 0.6 * e, 0, -0.3 * e); addJ(T, J.spine, 0.1 * e);
    }
    if (stumbleT < 1.0) {
      const t = stumbleT;
      const e1 = Math.sin(Math.PI * clamp(t / 0.5, 0, 1));
      const e2 = Math.exp(-2.5 * t) * Math.sin(24 * t);
      addJ(T, J.hips, -0.6 * e1, 0.25 * e1, 0); T[POS + 2] -= 0.3 * e1; T[POS + 1] -= 0.13 * e1;
      addJ(T, J.spine, -0.25 * e1); addJ(T, J.head, 0.45 * e1 + 0.1 * e2);
      addJ(T, J.shL, 1.8 * e1 + 0.5 * e2, 0, -0.7 * e1); addJ(T, J.elL, -0.9 * e1);
      addJ(T, J.shR, 0.9 * e1, 0, 0.5 * e1 + 0.3 * e2); addJ(T, J.elR, -0.3 * e1);
      addJ(T, J.hipL, 0.5 * e1); addJ(T, J.kneeR, -0.5 * e1);
    }
    if (turnT < 0.5) {
      const e = Math.sin(Math.PI * turnT / 0.5) * turnDir;
      addJ(T, J.spine, 0, -0.5 * e, 0); addJ(T, J.head, 0, -0.45 * e, 0); addJ(T, J.hips, 0, -0.25 * e, 0);
      if (turnDir > 0) addJ(T, J.shL, 0, 0, -0.8 * Math.abs(e)); else addJ(T, J.shR, 0, 0, 0.6 * Math.abs(e));
    }
    // Lean into corners and lane changes (damped drivers).
    addJ(T, J.hips, 0, 0, -0.33 * leanD - 0.028 * latD);
    addJ(T, J.head, 0, 0, 0.12 * leanD + 0.01 * latD);
    // Nervous glance over the shoulder shortly after a stumble.
    const s = ctx.stumble01;
    if (s > 0) { const lb = smoothstep(0.55, 0.7, s) * smoothstep(0.95, 0.85, s); addJ(T, J.head, 0, 0.9 * lb, 0); addJ(T, J.spine, 0, 0.25 * lb, 0); }
  }

  function dropHat() {
    if (hatLoose) return;
    hatLoose = true;
    hat.updateWorldMatrix(true, false);
    group.attach(hat);
    hatVel.set(0.6, 3.2, 1.8);
    hatSpin = -9;
  }
  function restoreHat() {
    hatLoose = false;
    head.add(hat);
    hat.position.copy(HAT_POS);
    hat.rotation.set(0, 0, 0);
  }
  function updateHat(dt) {
    if (!hatLoose) return;
    hat.position.addScaledVector(hatVel, dt);
    hatVel.y -= 9.8 * dt;
    hat.rotation.x += hatSpin * dt;
    hat.rotation.z += hatSpin * 0.3 * dt;
    if (hat.position.y < 0.02 && hatVel.y < 0) {
      hat.position.y = 0.02;
      hatVel.y = Math.abs(hatVel.y) > 0.8 ? -hatVel.y * 0.3 : 0;
      hatVel.x *= 0.4; hatVel.z *= 0.4; hatSpin *= 0.3;
    }
    if (hat.position.y <= 0.021 && hatVel.y === 0) {
      hat.rotation.x = damp(hat.rotation.x, Math.round(hat.rotation.x / Math.PI) * Math.PI, 8, dt);
      hat.rotation.z = damp(hat.rotation.z, Math.round(hat.rotation.z / Math.PI) * Math.PI, 8, dt);
    }
  }

  function updateEffects(dt, ctx) {
    const t = ctx.time;
    // Shield bubble
    shieldW = damp(shieldW, ctx.shield ? 1 : 0, ctx.shield ? 9 : 16, dt);
    shield.visible = shieldW > 0.02;
    if (shield.visible) {
      const sc = (0.5 + 0.5 * shieldW) * 1.15 * (1 + 0.03 * Math.sin(t * 4));
      shield.scale.setScalar(sc);
      shield.rotation.y = t * 0.6; shield.rotation.x = Math.sin(t * 0.7) * 0.3;
      shieldMat.uniforms.uInt.value = 1.7 * shieldW;
    }
    // Boost aura + trailing streaks
    boostW = damp(boostW, ctx.boost ? 1 : 0, ctx.boost ? 8 : 10, dt);
    aura.visible = streaks.visible = boostW > 0.02;
    if (aura.visible) {
      auraMat.uniforms.uInt.value = 1.3 * boostW;
      streakMat.uniforms.uAlpha.value = boostW * (ctx.dead ? 0.3 : 1);
      streakMat.uniforms.uLen.value = 0.7 + 0.6 * clamp(ctx.speed01, 0, 1.3);
      streakMat.uniforms.uTime.value = t;
    }
    // Magnet ring, expanding ripple and orbiting sparks
    magnetW = damp(magnetW, ctx.magnet ? 1 : 0, 10, dt);
    ring.visible = ripple.visible = sparks.visible = magnetW > 0.02;
    if (ring.visible) {
      ring.scale.setScalar((0.85 + 0.1 * Math.sin(t * 7)) * (0.3 + 0.7 * magnetW));
      ringMat.opacity = 0.85 * magnetW;
      const ph = (t * 1.4) % 1;
      ripple.scale.setScalar(0.5 + 1.1 * ph);
      rippleMat.opacity = Math.pow(1 - ph, 1.5) * 0.7 * magnetW;
      sparkMat.uniforms.uAlpha.value = magnetW;
      sparkMat.uniforms.uTime.value = t;
    }
    // Idol glint
    goldMat.emissiveIntensity = 1.0 + 0.3 * Math.sin(t * 5) + 0.4 * boostW;
  }

  function applyPose(dt) {
    for (let j = 0; j < NJ; j++) {
      const b = bones[j], i = j * 3;
      b.rotation.set(Cur[i], Cur[i + 1], Cur[i + 2]);
    }
    hips.rotation.x += tumbleX;
    hips.rotation.y += tumbleY;
    hips.position.set(Cur[POS], Cur[POS + 1], Cur[POS + 2]);
  }

  const api = {
    group, height: 1.8,

    setState(name, arg) {
      switch (name) {
        case 'run': setAnim('run', 10); break;
        case 'jump': jumpT = 0; setAnim('jump', 22); break;
        case 'slide': slideT = 0; setAnim('slide', 20); break;
        case 'turn': turnT = 0; turnDir = arg === 'left' ? -1 : 1; break;
        case 'stumble': stumbleT = 0; break;
        case 'fall': case 'hit': case 'burn': case 'caught':
          deathAnim = name; deathT = 0; tumbleX = tumbleY = 0;
          setAnim(name, name === 'hit' ? 14 : 10);
          break;
      }
    },

    reset() {
      setAnim('run', 10);
      phase = 0; landT = popT = stumbleT = turnT = jumpT = slideT = 99;
      leanD = latD = tumbleX = tumbleY = 0;
      deathAnim = null; deathT = 0;
      prevState = 'run';
      poseCopy(Cur, P.idle);
      bodyMat.color.setScalar(1); bodyMat.emissive.setRGB(0, 0, 0); bodyMat.emissiveIntensity = 1;
      restoreHat();
      rig.rotation.set(0, 0, 0); rig.position.set(0, 0, 0);
      applyPose(0);
    },

    update(dt, ctx) {
      time += dt; animT += dt;
      landT += dt; popT += dt; stumbleT += dt; turnT += dt; jumpT += dt; slideT += dt;
      const s = ctx.state;

      // Transitions that the game does not announce explicitly.
      if (!ctx.dead) {
        if (prevState === 'jump' && s !== 'jump') { landT = 0; setAnim(s === 'slide' ? 'slide' : 'run', 26); }
        else if (prevState === 'slide' && s === 'run') { popT = 0; setAnim('run', 18); }
      }
      if (ctx.dead && !deathAnim) api.setState(ctx.deathType === 'fall' ? 'fall' : ctx.deathType || 'hit');
      prevState = s;

      // Continuous drivers (damped so the lean is smooth even though turnLean snaps).
      leanD = damp(leanD, ctx.dead ? 0 : ctx.turnLean, 12, dt);
      latD = damp(latD, ctx.dead ? 0 : clamp(ctx.lateralVel, -14, 14), 20, dt);
      const cadence = clamp(1.7 * ctx.speed / CONFIG.startSpeed, 0, 4.2);
      phase += dt * cadence * Math.PI * 2;
      if (phase > 1e4) phase -= 1e4;

      // Target pose
      if (ctx.dead) {
        deathT += dt;
        poseDeath(deathAnim);
        if (deathAnim === 'fall') { tumbleX -= dt * (3.5 + 2 * smoothstep(0, 1, deathT)); tumbleY += dt * 1.2; }
        if (deathAnim === 'hit' && deathT > 0.12) dropHat();
        if (deathAnim === 'burn') {
          const dark = smoothstep(0.2, 1.4, deathT);
          bodyMat.color.setScalar(1 - 0.85 * dark);
          const glow = (1 - dark) * (0.5 + 0.5 * Math.abs(Math.sin(deathT * 25))) * 0.9 + 0.12 * (1 - smoothstep(1.4, 3.5, deathT));
          bodyMat.emissive.setRGB(1, 0.35, 0.05); bodyMat.emissiveIntensity = glow;
        }
      } else if (s === 'jump') poseJump(ctx);
      else if (s === 'slide') poseSlide();
      else if (s === 'idle') { poseCopy(T, P.idle); addIdleMotion(1); }
      else poseRun(ctx);
      if (!ctx.dead && s !== 'idle') addOverlays(ctx);

      // Exponential damping toward the target; the rate ramps up after each state change so
      // transitions ease in but steady cycles are followed crisply.
      const lambda = lerp(lambdaEnter, LAMBDA_MAX, smoothstep(0, 0.3, animT));
      const k = 1 - Math.exp(-lambda * dt);
      for (let i = 0; i < NP; i++) Cur[i] += (T[i] - Cur[i]) * k;
      applyPose(dt);
      updateHat(dt);
      updateEffects(dt, ctx);
    },

    dispose() {
      group.removeFromParent();
      bodyGeo.dispose(); hatGeo.dispose(); idolGeo.dispose(); shieldGeo.dispose(); streakGeo.dispose(); ringGeo.dispose(); sparkGeo.dispose();
      bodyMat.dispose(); goldMat.dispose(); streakMat.dispose(); ringMat.dispose(); rippleMat.dispose(); sparkMat.dispose();
      untrackMaterial(shieldMat); untrackMaterial(auraMat); shieldMat.dispose(); auraMat.dispose();
    },
  };
  api.reset();
  return api;
}
