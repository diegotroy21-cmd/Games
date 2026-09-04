// Demonic monkey pack that hunts the runner.
//
// Four low-poly creatures - hunched dark fur, long clawed arms, curled tails, horns, bony spine
// spikes, gaping toothed jaws and glowing red eyes - gallop along the track behind the runner.
// Their distance follows ctx.threat: far and mostly out of view when it is low, snapping at the
// heels when it spikes. On a non-fall death they lunge onto the runner and pile on; on a fall
// they skid to a halt at the edge and peer down. On the title screen they lurk, crouched.
//
// Rendering: every monkey has 17 bones, and all four share ONE skeleton, ONE skinned body mesh
// (vertex colours, flat shaded) and ONE additive skinned mesh for the eyes, so the whole pack costs
// two draw calls (plus the shadow pass). Animation is procedural: bones are posed each frame from a
// gallop phase, the closing distance and a few timers. The update loop allocates nothing.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { CONFIG } from './config.js';
import { unitGeo } from './meshbuilder.js';
import { TAU, clamp, damp, dampAngle, lerp, smoothstep, wrapAngle, mulberry32 } from './util.js';

const W = CONFIG.trackWidth;
const MAX_V = W * 0.5 - 0.6;               // widest lateral offset that keeps a body over the floor
const DIST_NEAR = 3.6, DIST_FAR = 14;     // metres behind the runner at threat 1 / threat 0

// Threat -> distance. Eased so the pack stays in frame for a while after a stumble and at the
// start of a run, then drops out of view quickly as the threat fades.
function distForThreat(t) { return DIST_NEAR + (DIST_FAR - DIST_NEAR) * Math.pow(1 - clamp(t, 0, 1), 1.7); }

// Attack/reach envelope: ramps up over `a`, holds, fades out between `b` and `c` (0 outside).
function envelope(t, a, b, c) { return t < 0 || t > c ? 0 : smoothstep(0, a, t) * (1 - smoothstep(b, c, t)); }

// ---- rig layout --------------------------------------------------------------------------------
const B = { root: 0, chest: 1, head: 2, jaw: 3, armL: 4, foreL: 5, armR: 6, foreR: 7, legL: 8, shinL: 9, legR: 10, shinR: 11, tail0: 12 };
const BONE_COUNT = 17;
const BONE_PARENT = [-1, 0, 1, 2, 1, 4, 1, 6, 0, 8, 0, 10, 0, 12, 13, 14, 15];
// Rest offsets from the parent (monkey faces -Z, +X is its right). Limbs hang straight down; the
// hunched, crouched stance comes entirely from the animation.
const REST = [
  [0, 0.60, 0.10],                        // root (pelvis)
  [0, 0.30, -0.55],                       // chest
  [0, 0.14, -0.30],                       // head
  [0, -0.08, -0.06],                      // jaw
  [-0.34, -0.04, -0.02], [0, -0.46, 0],   // left upper arm, forearm
  [0.34, -0.04, -0.02], [0, -0.46, 0],    // right upper arm, forearm
  [-0.22, -0.06, 0.06], [0, -0.34, 0],    // left thigh, shin
  [0.22, -0.06, 0.06], [0, -0.34, 0],     // right thigh, shin
  [0, 0.06, 0.28], [0, 0, 0.26], [0, 0, 0.26], [0, 0, 0.26], [0, 0, 0.26], // tail chain
];

// Pack formation and per-creature look. lane: lateral offset (m), back: extra distance behind the
// leader (m), seat: [right, up, back] position around the fallen runner for the pile-on.
const PACK = [
  { lane: -1.45, back: 0.00, size: 1.00, fur: 0x2c1418, mane: 0x55202a, belly: 0x5a3838, seat: [0.00, 0.62, 0.05], horns: 1.00 },
  { lane: 1.50, back: 0.35, size: 0.94, fur: 0x1e1a24, mane: 0x3c2c46, belly: 0x4e3e4c, seat: [0.78, 0.22, 0.25], horns: 0.80 },
  { lane: 0.15, back: 1.35, size: 1.06, fur: 0x241a12, mane: 0x4c3018, belly: 0x5c4030, seat: [-0.78, 0.22, 0.30], horns: 1.25 },
  { lane: -0.90, back: 2.30, size: 0.90, fur: 0x1c1216, mane: 0x3e1c1c, belly: 0x4a3030, seat: [0.10, 0.28, 0.95], horns: 0.65 },
];
const BONE = 0xe2d8bc, THROAT = 0x8c1218, CLAW = 0xd8ccb0;

// Scratch objects (module level so the per-frame code never allocates).
const _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler();
const _s = new THREE.Vector3(), _p = new THREE.Vector3(), _c = new THREE.Color();
const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _v3 = new THREE.Vector3();

// ---- geometry ----------------------------------------------------------------------------------
// Adds a transformed, coloured, rigidly skinned copy of a unit geometry to `list`.
function part(list, geo, boneIndex, rng, { position = [0, 0, 0], rotation = [0, 0, 0], scale = 1, color = 0xffffff, jitter = 0 } = {}) {
  const g = geo.clone();
  _q.setFromEuler(_e.set(rotation[0], rotation[1], rotation[2]));
  if (typeof scale === 'number') _s.setScalar(scale); else _s.set(scale[0], scale[1], scale[2]);
  _p.set(position[0], position[1], position[2]);
  g.applyMatrix4(_m4.compose(_p, _q, _s));
  const n = g.attributes.position.count;
  const colors = new Float32Array(n * 3), si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
  _c.set(color);
  let j = 1;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0) j = jitter ? 1 + (rng() - 0.5) * jitter : 1; // per-face shade variation
    colors[i * 3] = _c.r * j; colors[i * 3 + 1] = _c.g * j; colors[i * 3 + 2] = _c.b * j;
    si[i * 4] = boneIndex; sw[i * 4] = 1;
  }
  g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  g.setAttribute('skinIndex', new THREE.BufferAttribute(si, 4));
  g.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
  list.push(g);
  return g;
}

// Builds one monkey's body/eye parts in its rest pose. `bw` holds rest-pose bone positions.
function buildMonkeyParts(body, eyes, base, bw, look, rng) {
  const bone = (i) => base + i;
  const sph = unitGeo('sphere', 5, 4), ico = unitGeo('ico', 0), box = unitGeo('box');
  const cyl5 = unitGeo('cyl', 1, 1, 5, 1, false), cone4 = unitGeo('cone', 4), cone3 = unitGeo('cone', 3);
  const tailSeg = unitGeo('cyl', 0.75, 1, 4, 1, true);
  const fur = look.fur, mane = look.mane, belly = look.belly;
  const P = bw[B.root], C = bw[B.chest], H = bw[B.head], J = bw[B.jaw];

  // Torso: small low hips, a big high chest and a hump - the hunched silhouette.
  part(body, sph, bone(B.root), rng, { position: [P.x, P.y + 0.02, P.z], scale: [0.30, 0.27, 0.36], color: fur, jitter: 0.25 });
  part(body, sph, bone(B.chest), rng, { position: [0, 0.77, -0.2], rotation: [0.5, 0, 0], scale: [0.31, 0.29, 0.5], color: fur, jitter: 0.25 });
  part(body, sph, bone(B.chest), rng, { position: [C.x, C.y, C.z - 0.02], scale: [0.42, 0.34, 0.38], color: fur, jitter: 0.25 });
  part(body, sph, bone(B.chest), rng, { position: [C.x, C.y + 0.14, C.z + 0.12], scale: [0.3, 0.2, 0.32], color: mane, jitter: 0.3 });
  part(body, sph, bone(B.chest), rng, { position: [C.x, C.y - 0.2, C.z], scale: [0.3, 0.18, 0.3], color: belly, jitter: 0.2 });
  // Mane tufts sweeping up and back over the shoulders.
  for (let i = 0; i < 6; i++) {
    const t = i / 5, x = (t - 0.5) * 0.5;
    part(body, cone4, bone(B.chest), rng, {
      position: [C.x + x, C.y + 0.22 + Math.cos((t - 0.5) * 3) * 0.06, C.z + 0.02 + Math.abs(x) * 0.2],
      rotation: [-0.55 - rng() * 0.3, 0, (t - 0.5) * 1.3], scale: [0.09, 0.28 + rng() * 0.1, 0.09], color: mane, jitter: 0.35,
    });
  }
  // Bony spikes along the spine, swept back.
  for (let i = 0; i < 4; i++) {
    const t = i / 3, b = i < 2 ? B.chest : B.root;
    part(body, cone3, bone(b), rng, {
      position: [0, lerp(C.y + 0.28, P.y + 0.26, t), lerp(C.z + 0.2, P.z + 0.06, t)],
      rotation: [0.55, 0, 0], scale: [0.05, 0.2 - t * 0.05, 0.05], color: BONE, jitter: 0.15,
    });
  }
  // Neck.
  part(body, cyl5, bone(B.chest), rng, { position: [0, (C.y + H.y) / 2, (C.z + H.z) / 2], rotation: [-1.13, 0, 0], scale: [0.13, 0.36, 0.13], color: fur, jitter: 0.2 });

  // Head: skull, heavy brow, muzzle, red maw and a hinged lower jaw with teeth.
  part(body, sph, bone(B.head), rng, { position: [H.x, H.y + 0.02, H.z - 0.02], scale: [0.25, 0.23, 0.27], color: fur, jitter: 0.25 });
  part(body, box, bone(B.head), rng, { position: [H.x, H.y + 0.1, H.z - 0.2], rotation: [0.35, 0, 0], scale: [0.36, 0.08, 0.13], color: fur, jitter: 0.2 });
  part(body, box, bone(B.head), rng, { position: [H.x, H.y - 0.06, H.z - 0.27], scale: [0.22, 0.12, 0.22], color: belly, jitter: 0.2 });
  part(body, box, bone(B.head), rng, { position: [J.x, J.y + 0.02, J.z - 0.1], scale: [0.16, 0.1, 0.16], color: THROAT });
  part(body, box, bone(B.jaw), rng, { position: [J.x, J.y - 0.02, J.z - 0.16], scale: [0.2, 0.07, 0.22], color: belly, jitter: 0.2 });
  // Upper fangs + a small tooth, lower teeth.
  for (const [x, s] of [[-0.085, 0.11], [0.085, 0.11], [0, 0.07]])
    part(body, cone3, bone(B.head), rng, { position: [H.x + x, H.y - 0.13, H.z - 0.36], rotation: [Math.PI, 0, 0], scale: [0.028, s, 0.028], color: BONE });
  for (const x of [-0.065, 0, 0.065])
    part(body, cone3, bone(B.jaw), rng, { position: [J.x + x, J.y + 0.03, J.z - 0.25], scale: [0.022, 0.07, 0.022], color: BONE });
  // Horns: two-segment curved spikes, size varies per creature.
  const hs = look.horns;
  for (const side of [-1, 1]) {
    const c1 = new THREE.Vector3(H.x + side * 0.13, H.y + 0.19, H.z - 0.05);
    const r1 = new THREE.Euler(-0.35, 0, -side * 0.5), r2 = new THREE.Euler(-0.95, 0, -side * 1.0);
    const h1 = 0.22 * hs, h2 = 0.18 * hs;
    part(body, cone4, bone(B.head), rng, { position: [c1.x, c1.y, c1.z], rotation: [r1.x, r1.y, r1.z], scale: [0.07 * hs, h1, 0.07 * hs], color: BONE, jitter: 0.15 });
    const tip = new THREE.Vector3(0, h1 * 0.45, 0).applyEuler(r1).add(c1);
    const c2 = new THREE.Vector3(0, h2 * 0.4, 0).applyEuler(r2).add(tip);
    part(body, cone4, bone(B.head), rng, { position: [c2.x, c2.y, c2.z], rotation: [r2.x, r2.y, r2.z], scale: [0.045 * hs, h2, 0.045 * hs], color: BONE, jitter: 0.15 });
    // Ears.
    part(body, cone4, bone(B.head), rng, { position: [H.x + side * 0.23, H.y + 0.05, H.z], rotation: [-0.3, 0, -side * 1.25], scale: [0.06, 0.15, 0.06], color: fur, jitter: 0.2 });
  }
  // Eyes: bright core (bloom) inside a faint halo, both additive.
  for (const side of [-1, 1]) {
    const pos = [H.x + side * 0.1, H.y + 0.06, H.z - 0.24];
    part(eyes, ico, bone(B.head), rng, { position: pos, scale: 0.05, color: new THREE.Color(4.0, 0.42, 0.18) });
    part(eyes, ico, bone(B.head), rng, { position: pos, scale: 0.095, color: new THREE.Color(0.55, 0.05, 0.02) });
  }

  // Long arms: upper arm, elbow, thickening forearm, hand and three claws.
  for (const side of [-1, 1]) {
    const arm = side < 0 ? B.armL : B.armR, fore = side < 0 ? B.foreL : B.foreR;
    const S = bw[arm], E = bw[fore];
    part(body, cyl5, bone(arm), rng, { position: [S.x, S.y - 0.23, S.z], scale: [0.08, 0.46, 0.08], color: fur, jitter: 0.25 });
    part(body, sph, bone(fore), rng, { position: [E.x, E.y, E.z], scale: 0.075, color: fur, jitter: 0.2 });
    part(body, cyl5, bone(fore), rng, { position: [E.x, E.y - 0.23, E.z], scale: [0.065, 0.46, 0.065], color: fur, jitter: 0.25 });
    part(body, box, bone(fore), rng, { position: [E.x, E.y - 0.47, E.z - 0.05], scale: [0.15, 0.06, 0.18], color: fur, jitter: 0.2 });
    for (const x of [-0.05, 0, 0.05])
      part(body, cone3, bone(fore), rng, { position: [E.x + x, E.y - 0.47, E.z - 0.19], rotation: [-Math.PI / 2, 0, 0], scale: [0.02, 0.13, 0.02], color: CLAW });
  }
  // Legs: thigh, knee, shin, foot and two toe claws.
  for (const side of [-1, 1]) {
    const leg = side < 0 ? B.legL : B.legR, shin = side < 0 ? B.shinL : B.shinR;
    const Hp = bw[leg], K = bw[shin];
    part(body, cyl5, bone(leg), rng, { position: [Hp.x, Hp.y - 0.17, Hp.z], scale: [0.105, 0.34, 0.105], color: fur, jitter: 0.25 });
    part(body, sph, bone(shin), rng, { position: [K.x, K.y, K.z], scale: 0.075, color: fur, jitter: 0.2 });
    part(body, cyl5, bone(shin), rng, { position: [K.x, K.y - 0.17, K.z], scale: [0.06, 0.34, 0.06], color: fur, jitter: 0.25 });
    part(body, box, bone(shin), rng, { position: [K.x, K.y - 0.35, K.z - 0.05], scale: [0.12, 0.06, 0.22], color: fur, jitter: 0.2 });
    for (const x of [-0.035, 0.035])
      part(body, cone3, bone(shin), rng, { position: [K.x + x, K.y - 0.35, K.z - 0.19], rotation: [-Math.PI / 2, 0, 0], scale: [0.02, 0.1, 0.02], color: CLAW });
  }
  // Tail: tapering chain with a tufted tip.
  for (let k = 0; k < 5; k++) {
    const T = bw[B.tail0 + k], r = 0.06 - k * 0.009;
    part(body, tailSeg, bone(B.tail0 + k), rng, { position: [T.x, T.y, T.z + 0.13], rotation: [Math.PI / 2, 0, 0], scale: [r, 0.27, r], color: fur, jitter: 0.25 });
  }
  const T4 = bw[B.tail0 + 4];
  part(body, cone4, bone(B.tail0 + 4), rng, { position: [T4.x, T4.y, T4.z + 0.33], rotation: [Math.PI / 2, 0, 0], scale: [0.045, 0.16, 0.045], color: mane, jitter: 0.3 });
}

// ---- module ------------------------------------------------------------------------------------
export function createMonkeys(scene) {
  const group = new THREE.Group();
  group.name = 'monkeys';
  scene.add(group);

  const bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0, flatShading: true });
  const eyeMat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false, fog: false });

  // Build the rigs (all at the origin, rest pose) and the merged geometry, then bind.
  const bones = [], bodyParts = [], eyeParts = [], pack = [];
  for (let k = 0; k < PACK.length; k++) {
    const look = PACK[k];
    const rng = mulberry32(7919 * (k + 1));
    const root = new THREE.Group();
    group.add(root);
    const mb = [], bw = [];
    for (let i = 0; i < BONE_COUNT; i++) {
      const b = new THREE.Bone();
      b.position.fromArray(REST[i]);
      if (BONE_PARENT[i] < 0) root.add(b); else mb[BONE_PARENT[i]].add(b);
      bw[i] = new THREE.Vector3().fromArray(REST[i]);
      if (BONE_PARENT[i] >= 0) bw[i].add(bw[BONE_PARENT[i]]);
      mb.push(b);
    }
    mb[B.head].rotation.order = 'YXZ';
    bones.push(...mb);
    buildMonkeyParts(bodyParts, eyeParts, k * BONE_COUNT, bw, look, rng);
    pack.push({
      k, look, root, bones: mb, rng, size: look.size,
      seat: look.seat, lane: look.lane, back: look.back,
      mode: 'idle', modeT: 0,
      phase: rng() * TAU, phase0: rng() * TAU, cadence: 0.92 + rng() * 0.16, wobble: rng() * TAU,
      dist: distForThreat(1) + look.back, v: look.lane, heading: 0, roll: 0, bob: 0,
      sample: { pos: new THREE.Vector3() },
      pos: new THREE.Vector3(), prevSample: new THREE.Vector3(), jumpOff: new THREE.Vector3(), hasPrev: false,
      prevPos: new THREE.Vector3(), speedEst: 0,
      screechT: 99, screechNext: 2 + rng() * 4, reachT: 99, reachNext: 1 + rng() * 2, reachSide: k % 2 ? 1 : -1, lunge: 0,
      leapFrom: new THREE.Vector3(), leapDur: 0.4, leapDelay: 0.04 + k * 0.1, arc: 1,
      fwdDir: new THREE.Vector3(0, 0, -1), skidV: 0, skidV0: 1, skidA: 1,
      lookYaw: 0, lookPitch: 0,
    });
  }
  group.updateMatrixWorld(true);
  const skeleton = new THREE.Skeleton(bones);
  const identity = new THREE.Matrix4();
  const bodyGeo = mergeGeometries(bodyParts, false);
  const eyeGeo = mergeGeometries(eyeParts, false);
  for (const g of bodyParts) g.dispose();
  for (const g of eyeParts) g.dispose();
  const body = new THREE.SkinnedMesh(bodyGeo, bodyMat);
  body.castShadow = true; body.receiveShadow = true; body.frustumCulled = false;
  body.bind(skeleton, identity);
  group.add(body);
  const eyes = new THREE.SkinnedMesh(eyeGeo, eyeMat);
  eyes.frustumCulled = false; eyes.renderOrder = 5;
  eyes.bind(skeleton, identity);
  group.add(eyes);
  for (const m of pack) m.root.scale.setScalar(m.size);

  // Shared state
  let wasDead = false, pounceRequested = false, threatFloor = 0;
  const edge = new THREE.Vector3();   // where the runner left the track on a fall
  const pose = { t: 0, phase: 0, run: 1, crouch: 0, screech: 0, reach: 0, reachSide: 1, brace: 0, leap: 0, pile: 0, peer: 0, jaw: 0, pitch: 0, bobExtra: 0, lookYaw: 0, lookPitch: 0, breathe: 0 };

  // ---- posing ----------------------------------------------------------------------------------
  // Writes every bone rotation for one monkey from the pose parameters (blends of gallop, crouch,
  // screech, reach, skid brace, leap and pile-on).
  function applyPose(m, P) {
    const b = m.bones, ph = P.phase, run = P.run, t = P.t, s = Math.sin(ph), c = Math.cos(ph);
    const bob = run * (0.03 + 0.2 * Math.max(0, s)) - P.crouch * 0.16 + P.bobExtra - P.pile * 0.1;
    m.root.position.set(m.pos.x, m.pos.y + bob * m.size, m.pos.z);
    m.root.rotation.set(0, m.heading, 0);
    // Body pitch: nose up at take-off, down on landing; extra pitch for screeches, skids, peering.
    const pitch = run * (0.16 * s - 0.04) + P.pitch + P.screech * 0.25 + P.brace * 0.45 - P.peer * 0.25 - P.crouch * 0.06;
    b[B.root].rotation.set(pitch, 0, m.roll);
    b[B.chest].rotation.set(run * 0.06 * c + P.reach * 0.15 + P.breathe, 0, 0);
    b[B.chest].position.y = REST[B.chest][1] + P.breathe * 0.12;
    // Head and jaw.
    b[B.head].rotation.set(-0.12 + run * 0.08 * s + P.screech * 0.9 - P.peer * 0.6 - P.pile * 0.35 + P.lookPitch, P.lookYaw, 0);
    b[B.jaw].rotation.x = -(0.12 + P.screech * 0.65 + P.jaw + run * 0.12 * Math.max(0, -s));
    // Forelimbs (rotary gallop: the left side leads).
    for (let side = -1; side <= 1; side += 2) {
      const arm = side < 0 ? B.armL : B.armR, fore = side < 0 ? B.foreL : B.foreR;
      const pp = ph + (side < 0 ? 0.4 : 0), off = side < 0 ? 0 : 1.9;
      let upper = run * (0.85 * Math.sin(pp + 0.35) + 0.4) + (1 - run) * 0.72;
      let lower = run * (0.3 + 0.85 * Math.max(0, Math.sin(pp - 0.9))) + (1 - run) * -0.12;
      if (side === P.reachSide) { upper = lerp(upper, 2.15, P.reach); lower = lerp(lower, 0.1, P.reach); }
      upper = lerp(upper, 1.7, P.screech * 0.55); lower = lerp(lower, 0.4, P.screech * 0.55);
      upper = lerp(upper, 1.15, P.brace); lower = lerp(lower, -0.25, P.brace);
      upper = lerp(upper, 2.45, P.leap); lower = lerp(lower, 0.05, P.leap);
      upper = lerp(upper, 1.55 + 0.65 * Math.sin(t * 13 + off + m.phase0), P.pile);
      lower = lerp(lower, 0.75 + 0.6 * Math.sin(t * 13 + off + 1.3 + m.phase0), P.pile);
      b[arm].rotation.set(upper, 0, -side * (0.12 + P.leap * 0.35 + P.screech * 0.4));
      b[fore].rotation.set(lower, 0, 0);
    }
    // Hindlimbs.
    for (let side = -1; side <= 1; side += 2) {
      const leg = side < 0 ? B.legL : B.legR, shin = side < 0 ? B.shinL : B.shinR;
      const pp = ph + (side < 0 ? 0.25 : 0);
      let thigh = run * (0.75 - 0.75 * Math.sin(pp - 0.3)) + (1 - run) * 1.15;
      let lower = run * -(0.95 + 0.7 * Math.max(0, Math.sin(pp + 1.9))) + (1 - run) * -1.95;
      thigh = lerp(thigh, 1.35, P.brace); lower = lerp(lower, -2.05, P.brace);
      thigh = lerp(thigh, -0.35, P.leap); lower = lerp(lower, -0.8, P.leap);
      thigh = lerp(thigh, 1.25 + 0.15 * Math.sin(t * 9 + side), P.pile); lower = lerp(lower, -2.0, P.pile);
      b[leg].rotation.set(thigh, 0, -side * 0.08);
      b[shin].rotation.set(lower, 0, 0);
    }
    // Tail: curled up over the back, whipping with the stride, thrashing when excited.
    const excite = 0.5 + P.pile * 1.5 + P.peer * 0.8 + P.screech;
    for (let k = 0; k < 5; k++) {
      const base = k === 0 ? -0.95 : -0.42;
      const whip = run * 0.28 * Math.sin(ph - k * 0.85) + 0.1 * Math.sin(t * 3.1 + k * 0.9 + m.phase0);
      const wag = 0.2 * Math.sin(t * (2.2 + P.pile * 6 + P.peer * 2) + k * 0.7 + m.phase0) * excite;
      b[B.tail0 + k].rotation.set(base + whip + P.leap * 0.55 + P.brace * -0.2, wag, 0);
    }
  }

  // Resets the pose parameters to the plain gallop.
  function clearPose(P, t) {
    P.t = t; P.run = 1; P.crouch = 0; P.screech = 0; P.reach = 0; P.brace = 0; P.leap = 0; P.pile = 0; P.peer = 0;
    P.jaw = 0; P.pitch = 0; P.bobExtra = 0; P.lookYaw = 0; P.lookPitch = 0; P.breathe = 0;
  }

  // Occasional screech: head thrown back, jaw wide, arms flared.
  function tickScreech(m, dt, rate, minGap, maxGap) {
    m.screechNext -= dt * rate;
    if (m.screechNext <= 0) { m.screechT = 0; m.screechNext = minGap + m.rng() * (maxGap - minGap); if (api.onScreech) api.onScreech(m.k); }
    m.screechT += dt;
    return envelope(m.screechT, 0.12, 0.38, 0.7);
  }

  // Turns the head toward the runner (yaw/pitch in the monkey's frame).
  function lookAt(m, target, P, amount) {
    _v2.subVectors(target, m.pos);
    const fx = -Math.sin(m.heading), fz = -Math.cos(m.heading);
    const fwd = _v2.x * fx + _v2.z * fz, right = _v2.x * fz * -1 + _v2.z * fx; // right = (cos h, 0, -sin h)
    const yaw = Math.atan2(right, Math.max(0.3, fwd));
    P.lookYaw = clamp(-yaw * amount, -0.75, 0.75);
    P.lookPitch = clamp(Math.atan2(_v2.y - 0.6, Math.max(0.5, Math.hypot(_v2.x, _v2.z))) * amount * 0.6, -0.5, 0.5);
  }

  // World-space seat around the fallen runner for the pile-on.
  function seatTarget(m, ctx, out) {
    const a = ctx.playerAngle, fx = -Math.sin(a), fz = -Math.cos(a), rx = Math.cos(a), rz = -Math.sin(a);
    const s = m.seat;
    return out.set(ctx.playerPos.x + rx * s[0] - fx * s[2], ctx.playerPos.y + s[1], ctx.playerPos.z + rz * s[0] - fz * s[2]);
  }

  // Runs along the track behind the runner at the threat distance (also used while charging).
  function chase(m, dt, ctx, threat, t, charging) {
    let target;
    if (charging) target = 1.3 + m.back * 0.3;
    else target = distForThreat(threat) + m.back + Math.sin(t * 0.6 + m.wobble) * 0.45 * (1 - threat * 0.5) - m.lunge * 0.9;
    const closeRate = charging ? 24 : 11; // m/s cap while closing in
    if (target < m.dist) m.dist = Math.max(target, damp(m.dist, target, 4.5, dt), m.dist - closeRate * dt);
    else m.dist = damp(m.dist, target, 1.1, dt);
    ctx.sample(m.dist, m.sample);
    const smp = m.sample;
    const tv = clamp(smp.v * 0.45 + m.lane + Math.sin(t * 0.9 + m.wobble * 2) * 0.25, -MAX_V, MAX_V);
    m.v = damp(m.v, tv, 3.5, dt);
    _v1.copy(smp.pos).addScaledVector(smp.piece.right, m.v - smp.v);
    // The track sampler is discontinuous at corners; absorb any jump into an offset that decays,
    // so the creature surges through the corner instead of teleporting.
    if (m.hasPrev) {
      const est = (CONFIG.startSpeed + (CONFIG.maxSpeed - CONFIG.startSpeed) * ctx.speed01 + closeRate) * dt * 1.5 + 1.0;
      _v2.subVectors(_v1, m.prevSample);
      if (_v2.lengthSq() > est * est) m.jumpOff.sub(_v2);
    }
    m.prevSample.copy(_v1); m.hasPrev = true;
    m.jumpOff.multiplyScalar(Math.exp(-7 * dt));
    m.pos.copy(_v1).add(m.jumpOff);
    // Face the direction of travel; lean into turns.
    const th = Math.atan2(-smp.fwd.x, -smp.fwd.z);
    const prevH = m.heading;
    m.heading = dampAngle(m.heading, th, 9, dt);
    const yawRate = wrapAngle(m.heading - prevH) / Math.max(dt, 1e-4);
    m.roll = damp(m.roll, clamp(yawRate * 0.07, -0.35, 0.35), 8, dt);
    // Gallop cadence follows the runner's speed.
    const freq = (2.3 + clamp(ctx.speed01, 0, 1.3) * 1.2) * m.cadence * (charging ? 1.3 : 1);
    m.phase += dt * TAU * freq;
  }

  function enterDeath(ctx) {
    edge.copy(ctx.playerPos);
    for (const m of pack) {
      const v0 = Math.max(4, m.speedEst);
      if (ctx.deathType === 'fall') {
        // Skid to a stop short of the edge, staggered so they do not stack up.
        m.fwdDir.set(-Math.sin(m.heading), 0, -Math.cos(m.heading));
        _v1.subVectors(edge, m.pos);
        const stop = Math.max(0.35, _v1.dot(m.fwdDir) - (0.9 + m.k * 0.55));
        m.skidV0 = m.skidV = v0; m.skidA = v0 * v0 / (2 * stop);
        m.mode = 'skid';
      } else m.mode = 'charge';
      m.modeT = 0;
    }
  }

  const api = {
    group, pack, body, eyes,
    onScreech: null, // optional hook (k) -> void, e.g. to play a screech sound

    reset() {
      wasDead = false; pounceRequested = false; threatFloor = 0;
      for (const m of pack) {
        m.mode = 'chase'; m.modeT = 0;
        m.dist = distForThreat(1) + m.back; m.v = m.lane; m.heading = 0; m.roll = 0;
        m.hasPrev = false; m.jumpOff.set(0, 0, 0); m.speedEst = 0; m.lunge = 0;
        m.screechT = 99; m.screechNext = 1.5 + m.rng() * 4; m.reachT = 99; m.reachNext = 0.8 + m.rng() * 1.5;
      }
    },

    pounce() {
      pounceRequested = true;
      for (const m of pack) if (m.mode === 'chase' || m.mode === 'idle') { m.mode = 'charge'; m.modeT = 0; }
    },

    // Raises the threat floor (decays at 0.25/s): lets other systems pull the pack in.
    setThreat(x) { threatFloor = Math.max(threatFloor, clamp(x, 0, 1)); },

    stats() { return { triangles: bodyGeo.attributes.position.count / 3 + eyeGeo.attributes.position.count / 3, bones: bones.length }; },

    dispose() {
      scene.remove(group);
      bodyGeo.dispose(); eyeGeo.dispose(); bodyMat.dispose(); eyeMat.dispose();
      if (skeleton.boneTexture) skeleton.boneTexture.dispose();
    },

    update(dt, ctx) {
      const t = ctx.time;
      threatFloor = Math.max(0, threatFloor - dt * 0.25);
      const threat = clamp(Math.max(ctx.threat || 0, threatFloor), 0, 1);
      if (ctx.dead && !wasDead) enterDeath(ctx);
      wasDead = !!ctx.dead;
      if (!ctx.dead) {
        pounceRequested = false;
        const menu = !ctx.running;
        for (const m of pack) if (m.mode !== (menu ? 'idle' : 'chase')) { m.mode = menu ? 'idle' : 'chase'; m.modeT = 0; m.hasPrev = false; }
      } else if (pounceRequested) {
        for (const m of pack) if (m.mode === 'chase' || m.mode === 'idle') { m.mode = 'charge'; m.modeT = 0; }
      }
      eyeMat.opacity = 0.88 + 0.12 * Math.sin(t * 6.3);

      for (const m of pack) {
        const P = pose;
        clearPose(P, t);
        m.prevPos.copy(m.pos);
        m.modeT += dt;
        switch (m.mode) {
          case 'chase': {
            chase(m, dt, ctx, threat, t, false);
            // Menace: reach for the runner when close, in pulses with alternating arms.
            const close = smoothstep(4.8, 2.7, m.dist);
            m.reachNext -= dt * (close > 0.2 ? 1 : 0.2);
            if (m.reachNext <= 0) { m.reachT = 0; m.reachNext = 1.3 + m.rng() * 2; m.reachSide = -m.reachSide; }
            m.reachT += dt;
            P.reach = envelope(m.reachT, 0.15, 0.4, 0.75) * close;
            m.lunge = P.reach;
            P.reachSide = m.reachSide;
            P.screech = tickScreech(m, dt, 1, 3, 8);
            P.jaw = 0.1 * close;
            lookAt(m, ctx.playerPos, P, 0.6);
            break;
          }
          case 'charge': {
            chase(m, dt, ctx, 1, t, true);
            P.jaw = 0.4; P.reach = 0.3; P.reachSide = m.reachSide;
            lookAt(m, ctx.playerPos, P, 0.8);
            if (m.modeT >= m.leapDelay && (m.dist < 4.5 || m.modeT > 0.8)) {
              m.leapFrom.copy(m.pos);
              const d = seatTarget(m, ctx, _v1).distanceTo(m.pos);
              m.leapDur = clamp(0.2 + d * 0.06, 0.28, 0.6);
              m.arc = 0.6 + d * 0.12;
              m.mode = 'leap'; m.modeT = 0;
            }
            break;
          }
          case 'leap': {
            const u = clamp(m.modeT / m.leapDur, 0, 1), e = u * u * (3 - 2 * u);
            seatTarget(m, ctx, _v1);
            m.pos.lerpVectors(m.leapFrom, _v1, e);
            m.pos.y += m.arc * 4 * u * (1 - u);
            _v2.subVectors(_v1, m.leapFrom);
            m.heading = dampAngle(m.heading, Math.atan2(-_v2.x, -_v2.z), 14, dt);
            m.roll = damp(m.roll, 0, 8, dt);
            P.leap = smoothstep(0, 0.2, u); P.run = 1 - P.leap;
            P.pitch = lerp(0.4, -0.55, u); P.jaw = 0.55;
            if (u >= 1) { m.mode = 'pile'; m.modeT = 0; }
            break;
          }
          case 'pile': {
            seatTarget(m, ctx, _v1);
            m.pos.lerp(_v1, 1 - Math.exp(-12 * dt));
            _v2.subVectors(ctx.playerPos, m.pos);
            const flat = Math.hypot(_v2.x, _v2.z);
            const want = flat > 0.25 ? Math.atan2(-_v2.x, -_v2.z) : ctx.playerAngle + Math.PI;
            m.heading = dampAngle(m.heading, want + 0.25 * Math.sin(t * 5 + m.phase0), 10, dt);
            m.roll = damp(m.roll, 0.15 * Math.sin(t * 7 + m.phase0), 8, dt);
            P.run = 0; P.pile = smoothstep(0, 0.25, m.modeT);
            P.pitch = 0.3 + 0.1 * Math.sin(t * 11 + m.phase0);
            P.bobExtra = 0.05 * Math.abs(Math.sin(t * 7 + m.phase0));
            P.jaw = 0.25 + 0.35 * Math.max(0, Math.sin(t * 11 + m.phase0));
            P.screech = tickScreech(m, dt, 1.5, 2, 5);
            P.lookYaw = 0.4 * Math.sin(t * 9 + m.phase0);
            break;
          }
          case 'skid': {
            m.skidV = Math.max(0, m.skidV - m.skidA * dt);
            m.pos.addScaledVector(m.fwdDir, m.skidV * dt);
            const skid = 1 - m.skidV / m.skidV0;
            m.phase += dt * TAU * 3 * (1 - skid);
            m.roll = damp(m.roll, 0, 8, dt);
            P.run = 1 - skid; P.brace = skid; P.pitch = 0.25 * skid; P.jaw = 0.5 * skid;
            lookAt(m, ctx.playerPos, P, 0.8);
            if (m.skidV <= 0.01) { m.mode = 'edge'; m.modeT = 0; }
            break;
          }
          case 'edge': {
            P.run = 0; P.crouch = 1;
            const settle = smoothstep(0, 0.6, m.modeT);
            P.brace = 1 - settle; P.peer = settle;
            P.bobExtra = 0.02 * Math.sin(t * 2.2 + m.phase0);
            P.jaw = 0.25;
            P.screech = tickScreech(m, dt, 1.2, 2.5, 6);
            lookAt(m, ctx.playerPos, P, 0.9 * settle);
            m.heading = dampAngle(m.heading, m.heading + 0.3 * Math.sin(t * 1.3 + m.phase0) * settle * dt, 1, dt);
            break;
          }
          default: { // idle: lurking behind the runner on the title screen
            const target = 2.6 + m.back * 0.55;
            m.dist = damp(m.dist, target, 3, dt);
            ctx.sample(m.dist, m.sample);
            const smp = m.sample;
            m.v = damp(m.v, m.lane, 3, dt);
            m.pos.copy(smp.pos).addScaledVector(smp.piece.right, m.v - smp.v);
            m.heading = dampAngle(m.heading, Math.atan2(-smp.fwd.x, -smp.fwd.z), 9, dt);
            m.roll = damp(m.roll, 0, 8, dt);
            P.run = 0; P.crouch = 1;
            P.breathe = 0.05 * Math.sin(t * 1.4 + m.phase0);
            P.bobExtra = 0.012 * Math.sin(t * 1.4 + m.phase0);
            P.screech = tickScreech(m, dt, 0.6, 4, 10);
            P.jaw = 0.06;
            P.lookYaw = 0.35 * Math.sin(t * 0.55 + m.phase0);
            P.lookPitch = 0.1 + 0.08 * Math.sin(t * 0.8 + m.phase0);
            break;
          }
        }
        // Ground speed estimate (used to seed the skid on a fall).
        if (dt > 1e-4) m.speedEst = damp(m.speedEst, m.pos.distanceTo(m.prevPos) / dt, 5, dt);
        applyPose(m, P);
      }
    },
  };
  api.reset();
  for (const m of pack) m.mode = 'idle';
  return api;
}
