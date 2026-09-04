// World scenery: sky, lighting, distant backdrop, and the per-piece environment builders for the five
// biomes (temple, jungle, cliff, bridge, ruins). Everything is procedural low-poly geometry merged into
// a few vertex-coloured meshes per piece via MeshBuilder; flames, water and waterfalls use the shared
// animated shader materials from fx-materials.js. Piece-local frame: x = lateral, z = -u, y up.
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { MeshBuilder, unitGeo, standardVertexMaterial } from './meshbuilder.js';
import { applyWindSway, setFxFog, createFlameMaterial, createWaterMaterial, createWaterfallMaterial } from './fx-materials.js';
import { clamp, lerp } from './util.js';

const W = CONFIG.trackWidth;
const HW = W * 0.5;

// ---- palette -----------------------------------------------------------------------------------
const C = {
  stone: 0x9b9382, stoneLight: 0xb3aa95, stoneDark: 0x716a5a, stoneMoss: 0x7d8f5a, carved: 0x857c68,
  dirt: 0x7d613e, dirtLight: 0x9c7f57, sand: 0xc2b28a,
  grass: 0x4e7c36, grassLight: 0x6a9b3d, grassDark: 0x3a6229,
  bark: 0x5c4028, barkDark: 0x3e2b1b, leaf: 0x3f8b38, leafLight: 0x67ad41, leafDark: 0x2c6a2b, palm: 0x4f9a3a,
  rock: 0x8a8274, rockDark: 0x6b655b, rockLight: 0xa8a092,
  wood: 0x8b6236, woodDark: 0x5e4124, rope: 0xb8a070, iron: 0x3b3a38,
  gold: 0xd9a63a, abyss: 0x080a0a, vine: 0x3d7a33, mist: 0xdff4ff,
  flower: [0xff5e7a, 0xffc94a, 0xd35cff, 0xffffff, 0xff8c3a],
};

const FOG_COLOR = 0xc7d7c2;
const FOG_NEAR = 38, FOG_FAR = 150;

// ---- shared materials & geometries -------------------------------------------------------------
const worldMat = applyWindSway(standardVertexMaterial());
let flameMat = null, waterMat = null, fallMat = null, glowMat = null, abyssMat = null, mistMat = null;
let flameGeo = null, glowGeo = null, mistGeo = null;
function ensureShared() {
  if (flameMat) return;
  flameMat = createFlameMaterial();
  waterMat = createWaterMaterial({ color: 0x2c7f86, deep: 0x0d3a44, foam: 0xd6f3f5 });
  fallMat = createWaterfallMaterial();
  glowMat = new THREE.MeshBasicMaterial({ map: radialTexture(), color: 0xff9a3a, transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, depthWrite: false, fog: false, toneMapped: false, side: THREE.DoubleSide });
  abyssMat = new THREE.MeshBasicMaterial({ color: C.abyss });
  mistMat = new THREE.MeshBasicMaterial({ map: radialTexture(), color: 0xcfeaf5, transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false });
  flameGeo = new THREE.ConeGeometry(0.34, 1.15, 7, 3, true);
  flameGeo.translate(0, 0.575, 0); // base at y = 0 so the shader's height wobble scales from the base
  glowGeo = new THREE.PlaneGeometry(1.5, 1.5);
  mistGeo = new THREE.CircleGeometry(1, 10);
}

// Soft radial gradient used by glows and mist (procedural, no asset).
let _radial = null;
function radialTexture() {
  if (_radial) return _radial;
  const size = 64;
  const canvas = document.createElement('canvas'); canvas.width = size; canvas.height = size;
  const g = canvas.getContext('2d');
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, 'rgba(255,255,255,1)'); grad.addColorStop(0.35, 'rgba(255,255,255,0.55)'); grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad; g.fillRect(0, 0, size, size);
  _radial = new THREE.CanvasTexture(canvas);
  _radial.colorSpace = THREE.SRGBColorSpace;
  return _radial;
}

// =================================================================================================
// Environment: sky, lights, backdrop
// =================================================================================================
export function createEnvironment(scene, renderer, quality) {
  ensureShared();
  scene.background = new THREE.Color(FOG_COLOR);
  scene.fog = new THREE.Fog(FOG_COLOR, FOG_NEAR, FOG_FAR);
  setFxFog(FOG_COLOR, FOG_NEAR, FOG_FAR);

  // Sky dome: gradient with a warm sun glow, follows the camera.
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      uTop: { value: new THREE.Color(0x4f8fd6) },
      uMid: { value: new THREE.Color(0x9ec9e2) },
      uHorizon: { value: new THREE.Color(FOG_COLOR) },
      uSun: { value: new THREE.Vector3(0.45, 0.55, 0.3).normalize() },
      uSunColor: { value: new THREE.Color(0xfff0c8) },
    },
    vertexShader: `varying vec3 vDir; void main(){ vDir = normalize(position); vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_Position.z = gl_Position.w * 0.9999; }`,
    fragmentShader: `
      uniform vec3 uTop, uMid, uHorizon, uSun, uSunColor; varying vec3 vDir;
      void main(){
        float h = vDir.y;
        vec3 c = mix(uHorizon, uMid, smoothstep(-0.02, 0.18, h));
        c = mix(c, uTop, smoothstep(0.15, 0.7, h));
        float s = max(0.001, dot(normalize(vDir), uSun));
        c += uSunColor * (pow(s, 180.0) * 1.2 + pow(s, 8.0) * 0.18);
        gl_FragColor = vec4(c, 1.0);
      }`,
    side: THREE.BackSide, depthWrite: false, fog: false,
  });
  const sky = new THREE.Mesh(new THREE.SphereGeometry(360, 28, 14), skyMat);
  sky.frustumCulled = false;
  sky.renderOrder = -10;
  scene.add(sky);

  const hemi = new THREE.HemisphereLight(0xd6e9ff, 0x556a3a, 1.15);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffe4b8, 2.5);
  sun.castShadow = quality !== 'low';
  const shadowSize = quality === 'high' ? 2048 : 1024;
  sun.shadow.mapSize.set(shadowSize, shadowSize);
  sun.shadow.camera.near = 5; sun.shadow.camera.far = 220;
  const ext = 46;
  sun.shadow.camera.left = -ext; sun.shadow.camera.right = ext; sun.shadow.camera.top = ext; sun.shadow.camera.bottom = -ext;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.03;
  scene.add(sun); scene.add(sun.target);
  const sunOffset = new THREE.Vector3(48, 75, 32);

  // Distant backdrop: rings of misty mountains and jungle canopy silhouettes plus a far pyramid.
  const backdrop = buildBackdrop();
  scene.add(backdrop);
  // Valley floor far below everything, so the edge of the side decoration never shows raw sky.
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(700, 700), new THREE.MeshBasicMaterial({ color: 0x3f5d36 }));
  ground.rotation.x = -Math.PI / 2; ground.position.y = -14; ground.renderOrder = -5;
  scene.add(ground);
  // Soft fill from the camera side keeps the runner readable in shadowed corridors (constant light count).
  const fill = new THREE.DirectionalLight(0xfff1dc, 0.55);
  scene.add(fill); scene.add(fill.target);

  const tmp = new THREE.Vector3();
  return {
    update(dt, ctx) {
      sky.position.copy(ctx.camera.position);
      backdrop.position.set(ctx.playerPos.x, 0, ctx.playerPos.z);
      ground.position.x = ctx.playerPos.x; ground.position.z = ctx.playerPos.z;
      fill.position.copy(ctx.camera.position); fill.position.y += 12;
      fill.target.position.copy(ctx.playerPos); fill.target.updateMatrixWorld();
      sun.position.copy(ctx.playerPos).add(sunOffset);
      // keep the shadow frustum ahead of the runner where the action is
      tmp.copy(ctx.playerPos).addScaledVector(ctx.piece ? ctx.piece.fwd : sunOffset, 14);
      sun.target.position.copy(tmp);
      sun.target.updateMatrixWorld();
    },
    setQuality(q) {
      sun.castShadow = q !== 'low';
      const size = q === 'high' ? 2048 : 1024;
      if (sun.shadow.mapSize.x !== size) { sun.shadow.mapSize.set(size, size); if (sun.shadow.map) { sun.shadow.map.dispose(); sun.shadow.map = null; } }
    },
    dispose() { scene.remove(sky, hemi, sun, sun.target, backdrop, ground, fill, fill.target); sky.geometry.dispose(); skyMat.dispose(); ground.geometry.dispose(); ground.material.dispose(); },
  };
}

function buildBackdrop() {
  const b = new MeshBuilder();
  const rng = mulberryLocal(4242);
  // outer mountains
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * Math.PI * 2 + rng() * 0.2;
    const r = 190 + rng() * 60;
    const h = 45 + rng() * 60;
    const w = 40 + rng() * 40;
    b.cone(w, h, 6, { position: [Math.cos(a) * r, h * 0.5 - 8, Math.sin(a) * r], rotation: [0, rng() * 6, 0], color: rng() < 0.5 ? 0x8fa6ad : 0x9bb1b6, jitter: 0.08 });
  }
  // inner jungle canopy ring
  for (let i = 0; i < 70; i++) {
    const a = (i / 70) * Math.PI * 2 + rng() * 0.1;
    const r = 105 + rng() * 45;
    const h = 12 + rng() * 16;
    b.cone(6 + rng() * 8, h, 5, { position: [Math.cos(a) * r, h * 0.5 - 4, Math.sin(a) * r], color: rng() < 0.5 ? 0x6f9078 : 0x7c9c83, jitter: 0.12 });
  }
  // far stepped pyramid
  const px = 120, pz = -150;
  for (let t = 0; t < 6; t++) { const s = 42 - t * 6; b.box(s, 6, s, { position: [px, 3 + t * 6 - 4, pz], color: 0x8e9a90, jitter: 0.08 }); }
  b.box(4, 8, 4, { position: [px, 40, pz], color: 0x9aa59a });
  const geo = b.build();
  // Unfogged: these sit beyond the fog distance, so they are pre-tinted as misty silhouettes that stay
  // a little darker than the horizon instead of vanishing into it.
  const mat = new THREE.MeshBasicMaterial({ vertexColors: true, fog: false });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  return mesh;
}

function mulberryLocal(seed) { let s = seed >>> 0; return () => { s = (s + 0x6d2b79f5) >>> 0; let t = s; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

// =================================================================================================
// Piece builders
// =================================================================================================
export function buildPiece(piece, ctx) {
  ensureShared();
  const rng = ctx.rng;
  const quality = ctx.quality || 'high';
  const density = quality === 'low' ? 0.55 : quality === 'medium' ? 0.8 : 1;
  const group = new THREE.Group();
  const b = new MeshBuilder();       // static merged geometry (world material with sway)
  const extras = [];                 // separate meshes: flames, glows, water, waterfalls, mist

  const kind = piece.kind;
  const floorEnd = piece.end === 'straight' ? piece.length : piece.tileStart;
  const floorStart = piece.contentStart;
  const gaps = piece.obstacles.filter((o) => o.type === 'gap').map((o) => [o.u - o.depth * 0.5, o.u + o.depth * 0.5])
    .map(([a, c]) => [Math.max(a, floorStart), Math.min(c, floorEnd)]).filter(([a, c]) => c - a > 0.05);

  // Side extents. Sides start at the content start (the previous piece's corner tile owns the region
  // beside the tile). Along a corner, the "edge" elements (walls, rock faces, path lips) run up to the tile
  // while wide "field" decoration (ground strips, trees, water) stops FIELD_W before the open side of a
  // turn: that inside-corner square is decorated by the next piece as the start of its own side.
  const FIELD_W = 16;
  const sideStart = { left: floorStart, right: floorStart };

  const env = { b, extras, rng, density, kind, piece, quality, FIELD_W };

  // ---- floor -----------------------------------------------------------------------------------
  const stretches = [];
  let cur = floorStart;
  for (const [a, c] of gaps) { if (a - cur > 0.05) stretches.push([cur, a]); cur = Math.max(cur, c); }
  if (floorEnd - cur > 0.05) stretches.push([cur, floorEnd]);
  for (const [a, c] of stretches) buildFloor(env, a, c);
  for (const [a, c] of gaps) buildGapEdges(env, a, c);
  if (kind !== 'bridge' && !(piece.side.left === 'drop' && piece.side.right === 'drop')) {
    // dark abyss under the path shows through gaps
    b.box(W + 4, 1, piece.length + W, { position: [0, -8, -(piece.length * 0.5)], color: C.abyss });
  } else {
    // the river runs on under the bridge so gaps show dark water, not sky
    const water = new THREE.Mesh(new THREE.PlaneGeometry(W + 4.4, piece.length + W), waterMat);
    water.rotation.x = -Math.PI / 2; water.position.set(0, -11, -(piece.length * 0.5)); water.renderOrder = 1;
    extras.push(water);
  }

  // ---- corner tile -----------------------------------------------------------------------------
  if (piece.end !== 'straight') buildCornerTile(env);

  // ---- sides -----------------------------------------------------------------------------------
  for (const sideName of ['left', 'right']) {
    const sign = sideName === 'left' ? -1 : 1;
    const treat = piece.side[sideName];
    const u0 = sideStart[sideName];
    let u1 = piece.length;       // edge elements run alongside the corner tile (its walls close it)
    let u1f = piece.length;      // field decoration
    if (piece.end !== 'straight') {
      const opens = piece.end === 'tee' ? ['left', 'right'] : [piece.end];
      if (opens.includes(sideName)) { u1 = piece.tileStart; u1f = piece.tileStart - FIELD_W; }
      else u1f = piece.tileStart; // closed side: field stops at the tile, the tile wall takes over
    }
    switch (treat) {
      case 'wall': buildTempleWall(env, sign, u0, u1, u1f); break;
      case 'cliffwall': buildRockFace(env, sign, u0, u1, u1f); break;
      case 'jungle': buildJungleSide(env, sign, u0, u1, u1f); break;
      case 'open': buildOpenSide(env, sign, u0, u1, u1f); break;
      case 'drop': buildChasmSide(env, sign, u0, u1, u1f, (piece.sideWidth && piece.sideWidth[sideName]) || 58); break;
    }
  }

  // ---- kind-specific dressing on the path itself ---------------------------------------------
  if (kind === 'bridge') buildBridgeRails(env, floorStart, floorEnd, gaps);
  if (kind === 'ruins') buildRuinsDressing(env, floorStart, floorEnd);
  if (piece.safe) buildStartGate(env);

  const mesh = b.toMesh(worldMat);
  if (mesh) { mesh.frustumCulled = true; group.add(mesh); }
  for (const e of extras) group.add(e);
  group.userData.piece = piece.id;
  return group;
}

export function disposePiece(group) {
  group.traverse((o) => {
    if (o.geometry && !o.userData.sharedGeo) o.geometry.dispose();
    if (o.material && o.userData.ownMaterial) o.material.dispose();
  });
}

// ---- floors --------------------------------------------------------------------------------------
function buildFloor(env, a, c) {
  const { b, rng, kind } = env;
  const len = c - a;
  if (kind === 'temple' || kind === 'ruins' || kind === 'cliff') {
    // stone slabs, 2 m x 2 m, jittered tone, a few mossy or sunken ones
    const base = kind === 'cliff' ? C.rock : C.stone;
    b.box(W, 0.6, len, { position: [0, -0.32, -(a + c) * 0.5], color: C.stoneDark });
    const rows = Math.max(1, Math.round(len / 2));
    const slab = len / rows;
    for (let r = 0; r < rows; r++) {
      const z = -(a + (r + 0.5) * slab);
      for (let l = -1; l <= 1; l++) {
        const roll = rng();
        const col = roll < 0.12 ? C.stoneMoss : roll < 0.3 ? C.stoneDark : roll < 0.55 ? C.stoneLight : base;
        const sink = rng() < 0.15 ? -0.05 : 0;
        b.box(1.9, 0.12, slab - 0.1, { position: [l * 2, -0.06 + sink, z], color: col, jitter: 0.08, rotation: [0, 0, 0] });
      }
    }
    if (kind === 'ruins') for (let i = 0; i < len / 6; i++) b.box(0.4 + rng() * 0.5, 0.15, 0.3 + rng() * 0.4, { position: [(rng() - 0.5) * 5, 0.05, -(a + rng() * len)], rotation: [0, rng() * 3, 0], color: C.stoneMoss, jitter: 0.2 });
  } else if (kind === 'jungle') {
    b.box(W, 0.6, len, { position: [0, -0.31, -(a + c) * 0.5], color: C.dirt, jitter: 0.06 });
    b.box(W - 1.2, 0.04, len, { position: [0, -0.005, -(a + c) * 0.5], color: C.dirtLight, jitter: 0.1 });
    // pebbles and grass tufts on the path shoulders
    for (let i = 0; i < len * 0.6 * env.density; i++) {
      const z = -(a + rng() * len);
      const side = rng() < 0.5 ? -1 : 1;
      if (rng() < 0.5) b.add(unitGeo('dodeca'), { position: [side * (2.4 + rng() * 0.5), 0.05, z], scale: 0.08 + rng() * 0.1, color: C.rock, jitter: 0.2 });
      else b.cone(0.12, 0.3, 4, { position: [side * (2.5 + rng() * 0.4), 0.12, z], color: C.grassLight, jitter: 0.2, sway: 1 });
    }
  } else if (kind === 'bridge') {
    // planks across the walkway
    const step = 0.62;
    for (let z = a + step * 0.5; z < c; z += step) {
      const broken = rng() < 0.05;
      b.box(W + 0.6, 0.12, 0.5, { position: [0, -0.06, -z], rotation: [0, 0, broken ? (rng() - 0.5) * 0.08 : 0], color: rng() < 0.3 ? C.woodDark : C.wood, jitter: 0.15 });
    }
    // support beams under the planks
    for (const x of [-2.6, 0, 2.6]) b.box(0.25, 0.25, len, { position: [x, -0.24, -(a + c) * 0.5], color: C.woodDark });
  }
}

function buildGapEdges(env, a, c) {
  const { b, rng, kind } = env;
  if (kind === 'bridge') {
    // splintered plank ends
    for (const z of [a, c]) for (let l = -2; l <= 2; l++) b.box(0.5, 0.1, 0.3 + rng() * 0.3, { position: [l * 1.2 + (rng() - 0.5) * 0.4, -0.05, -z + (z === a ? -0.1 : 0.1)], rotation: [(rng() - 0.5) * 0.6, 0, 0], color: C.woodDark, jitter: 0.2 });
    return;
  }
  for (const z of [a, c]) {
    for (let x = -HW + 0.4; x <= HW - 0.4; x += 0.8) {
      b.box(0.7, 0.35, 0.5, { position: [x + (rng() - 0.5) * 0.2, -0.28, -z + (z === a ? -0.15 : 0.15)], rotation: [(rng() - 0.5) * 0.5, (rng() - 0.5) * 0.3, (rng() - 0.5) * 0.3], color: C.stoneDark, jitter: 0.2 });
    }
  }
}

// ---- corner tile ------------------------------------------------------------------------------
function buildCornerTile(env) {
  const { b, rng, piece, kind } = env;
  const t0 = piece.tileStart, t1 = piece.length;
  const zc = -(t0 + HW);
  // tile floor (always stone: an ancient junction)
  b.box(W, 0.6, W, { position: [0, -0.32, zc], color: C.stoneDark });
  for (let r = 0; r < 3; r++) for (let l = -1; l <= 1; l++) b.box(1.9, 0.12, 1.9, { position: [l * 2, -0.06, -(t0 + 1 + r * 2)], color: rng() < 0.3 ? C.stoneLight : C.stone, jitter: 0.08 });
  b.add(unitGeo('cyl', 1, 1, 12), { position: [0, 0.02, zc], scale: [1.4, 0.06, 1.4], color: C.carved });

  // far wall with a carved guardian face: the "turn now" landmark
  const wallColor = kind === 'jungle' ? 0x9fa882 : C.stoneLight; // kept light so the relief reads even in shadow
  b.box(W + 3, 6.5, 1.6, { position: [0, 3.2, -(t1 + 0.8)], color: wallColor, jitter: 0.06 });
  b.box(W + 3.6, 0.6, 2.0, { position: [0, 6.6, -(t1 + 0.8)], color: C.stoneDark });
  b.box(W + 3.6, 0.4, 2.0, { position: [0, 0.2, -(t1 + 0.8)], color: C.stoneDark });
  // The runner approaches from +z, so relief details sit in front of the wall face (larger z).
  const fz = -(t1 - 0.25);
  b.add(unitGeo('cyl', 1, 1, 16), { position: [0, 3.0, fz], rotation: [Math.PI / 2, 0, 0], scale: [1.7, 0.5, 1.7], color: 0x6f6653, jitter: 0.05 });
  b.add(unitGeo('cyl', 1, 1, 16), { position: [0, 3.0, fz - 0.1], rotation: [Math.PI / 2, 0, 0], scale: [2.1, 0.3, 2.1], color: 0x4a4338, jitter: 0.05 }); // dark ring behind the face
  b.box(0.55, 0.45, 0.3, { position: [-0.55, 3.35, fz + 0.2], color: 0x1a1512 });
  b.box(0.55, 0.45, 0.3, { position: [0.55, 3.35, fz + 0.2], color: 0x1a1512 });
  b.box(1.4, 0.35, 0.3, { position: [0, 2.35, fz + 0.2], color: 0x1a1512 });
  for (let i = -2; i <= 2; i++) b.box(0.22, 0.32, 0.2, { position: [i * 0.28, 2.42, fz + 0.32], color: C.stoneLight });
  b.box(0.5, 0.6, 0.3, { position: [-1.2, 3.9, fz + 0.3], rotation: [0, 0, 0.4], color: C.carved });
  b.box(0.5, 0.6, 0.3, { position: [1.2, 3.9, fz + 0.3], rotation: [0, 0, -0.4], color: C.carved });
  // glyph bands on the wall above the face
  for (let i = -3; i <= 3; i++) b.box(0.5, 0.5, 0.15, { position: [i * 1.1, 5.4, -t1 + 0.08], color: i % 2 ? C.stoneDark : C.carved });
  // torches flanking the face (visible from far away)
  addTorch(env, -2.6, 2.4, t1 - 0.12, 0, 1.6);
  addTorch(env, 2.6, 2.4, t1 - 0.12, 0, 1.6);

  // closed side wall for single turns; T-junctions stay open on both sides
  if (piece.end !== 'tee') {
    const closed = piece.end === 'left' ? 1 : -1;
    const x = closed * (HW + 0.8);
    b.box(1.6, 6.5, W + 1.6, { position: [x, 3.2, zc - 0.8], color: wallColor, jitter: 0.08 });
    b.box(2.0, 0.6, W + 2, { position: [x, 6.6, zc - 0.8], color: C.stoneDark });
    b.add(unitGeo('cyl', 0.45, 0.5, 9), { position: [closed * (HW + 0.3), 3, zc], scale: [1, 6, 1], color: C.stoneLight });
  } else {
    // a small idol on a plinth in the middle of the far wall marks the fork
    b.box(1.2, 0.8, 1.0, { position: [0, 0.4, -(t1 - 1.2)], color: C.stoneDark });
    b.add(unitGeo('sphere', 8, 6), { position: [0, 1.35, -(t1 - 1.2)], scale: [0.45, 0.5, 0.45], color: C.gold });
  }
}

// ---- side treatments ---------------------------------------------------------------------------
function buildTempleWall(env, sign, u0, u1, u1f = u1) {
  const { b, rng, density, FIELD_W } = env;
  if (u1 - u0 < 0.5) return;
  const len = u1 - u0, zc = -(u0 + u1) * 0.5;
  // ground pad behind the wall so corners never show void
  if (u1f - u0 > 0.5) b.box(FIELD_W, 0.6, u1f - u0, { position: [sign * (HW + FIELD_W * 0.5 + 1), -0.35, -(u0 + u1f) * 0.5], color: C.grassDark, jitter: 0.06 });
  const x = sign * (HW + 0.85);
  const h = 6 + rng() * 1.5;
  b.box(1.7, h, len, { position: [x, h * 0.5 - 0.2, zc], color: C.stone, jitter: 0.06 });
  b.box(2.1, 0.5, len, { position: [x, h - 0.1, zc], color: C.stoneDark });
  b.box(2.1, 0.5, len, { position: [x, 0.05, zc], color: C.stoneDark });
  // pillars and carved panels
  for (let u = u0 + 2.5; u < u1 - 1; u += 5.5) {
    const z = -u;
    b.add(unitGeo('cyl', 0.42, 0.5, 9), { position: [sign * (HW + 0.35), h * 0.5 - 0.2, z], scale: [1, h, 1], color: C.stoneLight, jitter: 0.05 });
    b.box(1.2, 0.5, 1.2, { position: [sign * (HW + 0.35), h - 0.4, z], color: C.stoneDark });
    b.box(1.2, 0.4, 1.2, { position: [sign * (HW + 0.35), 0.2, z], color: C.stoneDark });
    if (rng() < 0.6) {
      const pz = z + 2.75;
      b.box(0.2, 1.4, 1.6, { position: [sign * (HW + 0.05), 3.2, pz], color: C.carved, jitter: 0.05 });
      for (let i = 0; i < 3; i++) b.box(0.28, 0.25, 0.3, { position: [sign * (HW + 0.02), 2.7 + i * 0.5, pz + (i % 2 ? 0.4 : -0.4)], color: C.stoneDark });
    }
  }
  // moss at the base and hanging vines from the top
  for (let i = 0; i < len * 0.25 * density; i++) {
    const z = -(u0 + rng() * len);
    b.box(0.25, 0.3 + rng() * 0.7, 0.8 + rng() * 1.2, { position: [sign * (HW + 0.02), 0.2, z], color: C.stoneMoss, jitter: 0.25 });
  }
  for (let i = 0; i < len * 0.18 * density; i++) {
    const z = -(u0 + rng() * len);
    const vl = 1.5 + rng() * 3;
    b.add(unitGeo('cyl', 0.05, 0.03, 4), { position: [sign * (HW + 0.05), h - 0.3 - vl * 0.5, z], scale: [1, vl, 1], color: C.vine, jitter: 0.2, sway: (y01) => (1 - y01) * 0.9 });
    b.add(unitGeo('ico', 0), { position: [sign * (HW + 0.05), h - 0.3 - vl, z], scale: 0.18, color: C.leaf, sway: 0.9 });
  }
  // torches every ~12 m
  for (let u = u0 + 6 + rng() * 4; u < u1 - 2; u += 11 + rng() * 5) addTorch(env, sign * (HW + 0.02), 2.6, u, sign);
}

function buildRockFace(env, sign, u0, u1, u1f = u1) {
  const { b, rng, density, FIELD_W } = env;
  if (u1 - u0 < 0.5) return;
  const len = u1 - u0;
  const x0 = sign * (HW + 0.6);
  if (u1f - u0 > 0.5) b.box(FIELD_W, 0.6, u1f - u0, { position: [sign * (HW + FIELD_W * 0.5 + 2), -0.35, -(u0 + u1f) * 0.5], color: C.rockDark, jitter: 0.06 });
  // base wall then stacked irregular blocks
  b.box(2.5, 9, len, { position: [sign * (HW + 1.6), 4.2, -(u0 + u1) * 0.5], color: C.rockDark, jitter: 0.08 });
  for (let u = u0; u < u1; u += 2.6) {
    let y = 0;
    const cols = 3 + Math.floor(rng() * 2);
    for (let i = 0; i < cols; i++) {
      const bh = 1.4 + rng() * 2.2, bw = 1.2 + rng() * 1.6, bd = 2.2 + rng() * 1.2;
      b.box(bw, bh, bd, { position: [x0 + sign * (bw * 0.5 - 0.3 + rng() * 0.4), y + bh * 0.5, -(u + 1.3) + (rng() - 0.5) * 0.6], rotation: [(rng() - 0.5) * 0.15, (rng() - 0.5) * 0.25, (rng() - 0.5) * 0.15], color: rng() < 0.25 ? C.rockLight : rng() < 0.5 ? C.rock : C.rockDark, jitter: 0.12 });
      y += bh * 0.9;
    }
    if (rng() < 0.4 * density) b.box(1.0, 0.25, 1.4, { position: [x0 + sign * 0.6, y * (0.4 + rng() * 0.4), -(u + 1.3)], color: C.stoneMoss, jitter: 0.2 });
  }
  for (let i = 0; i < len * 0.2 * density; i++) addFern(env, sign * (HW + 0.3 + rng() * 0.3), -(u0 + rng() * len), 0.5 + rng() * 0.3);
}

function buildJungleSide(env, sign, u0, u1, u1f = u1) {
  const { b, rng, density, FIELD_W } = env;
  if (u1 - u0 < 0.5) return;
  // path edge strip (edge) and the wide jungle floor (field)
  b.box(1.0, 0.25, u1 - u0, { position: [sign * (HW + 0.4), -0.05, -(u0 + u1) * 0.5], color: C.grassDark, jitter: 0.1 });
  u1 = Math.min(u1, u1f);
  if (u1 - u0 < 0.5) return;
  const len = u1 - u0, zc = -(u0 + u1) * 0.5;
  b.box(FIELD_W, 0.6, len, { position: [sign * (HW + FIELD_W * 0.5), -0.32, zc], color: C.grass, jitter: 0.06 });
  // trees in two staggered rows
  for (let u = u0 + 1.5; u < u1; u += 4.2 / density) {
    const z = -(u + rng() * 2);
    addTree(env, sign * (HW + 2.2 + rng() * 2.5), z, rng);
    if (rng() < 0.7) addTree(env, sign * (HW + 6 + rng() * 6), z + (rng() - 0.5) * 3, rng, true);
  }
  // ferns, bushes, flowers and roots along the edge
  for (let i = 0; i < len * 0.5 * density; i++) {
    const z = -(u0 + rng() * len);
    const r = rng();
    if (r < 0.45) addFern(env, sign * (HW + 0.6 + rng() * 1.5), z, 0.6 + rng() * 0.5);
    else if (r < 0.7) addBush(env, sign * (HW + 1.2 + rng() * 2), z, 0.5 + rng() * 0.5);
    else if (r < 0.9) b.add(unitGeo('sphere', 5, 4), { position: [sign * (HW + 0.7 + rng() * 1.2), 0.25, z], scale: 0.09, color: C.flower[Math.floor(rng() * C.flower.length)], sway: 0.6 });
    else addRootArc(env, sign * (HW + 0.9), z, sign, rng);
  }
  if (rng() < 0.5) { const z = -(u0 + rng() * len); b.add(unitGeo('cyl', 0.35, 0.4, 7), { position: [sign * (HW + 2.5), 0.3, z], rotation: [0, rng() * 3, Math.PI / 2], scale: [1, 4, 1], color: C.barkDark, jitter: 0.15 }); }
}

function buildOpenSide(env, sign, u0, u1, u1f = u1) {
  const { b, rng, density, FIELD_W } = env;
  if (u1 - u0 < 0.5) return;
  b.box(1.2, 0.3, u1 - u0, { position: [sign * (HW + 0.5), -0.06, -(u0 + u1) * 0.5], color: C.stoneMoss, jitter: 0.12 });
  u1 = Math.min(u1, u1f);
  if (u1 - u0 < 0.5) return;
  const len = u1 - u0, zc = -(u0 + u1) * 0.5;
  b.box(FIELD_W, 0.6, len, { position: [sign * (HW + FIELD_W * 0.5), -0.34, zc], color: C.grassDark, jitter: 0.08 });
  for (let i = 0; i < len * 0.22 * density; i++) {
    const z = -(u0 + rng() * len), x = sign * (HW + 1.5 + rng() * 6);
    const r = rng();
    if (r < 0.35) b.add(unitGeo('dodeca'), { position: [x, 0.25, z], scale: 0.3 + rng() * 0.5, rotation: [rng(), rng(), 0], color: C.rock, jitter: 0.2 });
    else if (r < 0.6) addBrokenColumn(env, x, z, rng);
    else if (r < 0.8) addBush(env, x, z, 0.5 + rng() * 0.6);
    else addFern(env, x, z, 0.6);
  }
  for (let u = u0 + 4; u < u1; u += 9 / density) addTree(env, sign * (HW + 7 + rng() * 6), -(u + rng() * 3), rng, true);
}

function buildChasmSide(env, sign, u0, u1, u1f = u1, width = 58) {
  const { b, rng, density, extras, piece } = env;
  if (u1 - u0 < 0.5) return;
  // canyon geometry scales with the free width beside the path: far cliff face at fx, river in between
  const fx = sign * (HW + Math.max(14, width - 22));
  const wx0 = HW + 2, wx1 = Math.abs(fx) + 10;
  // path lip and the cliff dropping away (edge)
  {
    const len = u1 - u0, zc = -(u0 + u1) * 0.5;
    b.box(0.9, 0.5, len, { position: [sign * (HW + 0.25), -0.15, zc], color: C.rockDark, jitter: 0.1 });
    b.box(3.0, 16, len, { position: [sign * (HW + 2.0), -8.2, zc], color: C.rockDark, jitter: 0.1 });
    for (let u = u0; u < u1; u += 3) b.box(0.6 + rng() * 0.6, 0.3 + rng() * 0.4, 1.2 + rng() * 1.5, { position: [sign * (HW + 0.9 + rng() * 0.5), -0.6 - rng() * 3, -(u + 1.5)], rotation: [0, rng(), 0], color: C.rock, jitter: 0.15 });
  }
  u1 = Math.min(u1, u1f);
  if (u1 - u0 < 0.5) return;
  const len = u1 - u0, zc = -(u0 + u1) * 0.5;
  // river far below
  const water = new THREE.Mesh(new THREE.PlaneGeometry(wx1 - wx0, len + 12), waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.set(sign * (wx0 + wx1) * 0.5, -11, zc);
  water.renderOrder = 1;
  extras.push(water);
  // far cliff with waterfalls
  b.box(14, 30, len + 12, { position: [fx + sign * 6, 3, zc], color: C.rockDark, jitter: 0.1 });
  for (let u = u0 - 4; u < u1 + 4; u += 3.5) {
    const bh = 2 + rng() * 5, bw = 2 + rng() * 3;
    b.box(bw, bh, 3.6, { position: [fx - sign * (rng() * 1.5), -8 + rng() * 22, -(u + 1.7)], rotation: [0, 0, (rng() - 0.5) * 0.2], color: rng() < 0.5 ? C.rock : C.rockLight, jitter: 0.12 });
  }
  for (let u = u0; u < u1; u += 7) { const th = 5 + rng() * 6; b.add(unitGeo('cyl', 0.2, 0.3, 5), { position: [fx - sign * 1, 18 + th * 0.5, -(u + rng() * 5)], scale: [1, th, 1], color: C.bark }); b.cone(2 + rng() * 1.5, 3 + rng() * 2, 6, { position: [fx - sign * 1, 18 + th + 1, -(u + rng() * 5)], color: C.leafDark, jitter: 0.2, sway: 0.5 }); }
  const falls = piece.kind === 'bridge' ? 1 : (rng() < 0.7 ? 1 : 2);
  for (let i = 0; i < falls; i++) {
    const z = -(u0 + 4 + rng() * Math.max(1, len - 8));
    const fw = 3 + rng() * 3;
    const sheet = new THREE.Mesh(new THREE.PlaneGeometry(fw, 24, 1, 1), fallMat);
    sheet.position.set(fx - sign * 2.3, 1, z);
    sheet.rotation.y = sign < 0 ? Math.PI / 2 : -Math.PI / 2;
    sheet.renderOrder = 2;
    extras.push(sheet);
    // splash foam and a mist disc at the base
    const mist = new THREE.Mesh(mistGeo, mistMat);
    mist.rotation.x = -Math.PI / 2; mist.position.set(fx - sign * 4, -10.7, z); mist.scale.set(fw * 1.2, fw * 1.2, 1);
    mist.userData.sharedGeo = true; mist.renderOrder = 3;
    extras.push(mist);
    b.box(fw * 0.8, 0.6, 1.2, { position: [fx - sign * 2.8, 12.9, z], color: C.rockLight, jitter: 0.1 }); // ledge the fall pours over
  }
  for (let i = 0; i < len * 0.12 * density; i++) addFern(env, sign * (HW + 0.3 + rng() * 0.4), -(u0 + rng() * len), 0.45);
}

// ---- dressing ------------------------------------------------------------------------------------
function buildBridgeRails(env, a, c, gaps) {
  const { b, rng } = env;
  const len = c - a, zc = -(a + c) * 0.5;
  for (const sign of [-1, 1]) {
    const x = sign * (HW + 0.35);
    for (const y of [0.55, 1.05]) b.add(unitGeo('cyl', 0.045, 0.045, 5), { position: [x, y, zc], rotation: [Math.PI / 2, 0, 0], scale: [1, len, 1], color: C.rope });
    for (let u = a + 0.3; u < c; u += 5.5) {
      b.add(unitGeo('cyl', 0.1, 0.13, 6), { position: [x, 0.65, -u], scale: [1, 1.5, 1], color: C.woodDark, jitter: 0.1 });
    }
    for (let u = a + 1; u < c; u += 1.6) b.add(unitGeo('cyl', 0.03, 0.03, 4), { position: [x, 0.8, -u], scale: [1, 0.5, 1], color: C.rope, sway: 0.15 });
  }
  // ropes hang under the missing plank sections
  for (const [g0, g1] of gaps) b.add(unitGeo('cyl', 0.05, 0.05, 5), { position: [0, -0.5, -(g0 + g1) * 0.5], rotation: [Math.PI / 2, 0, 0], scale: [1, g1 - g0 + 1, 1], color: C.rope });
}

function buildRuinsDressing(env, a, c) {
  const { b, rng, density } = env;
  for (let u = a + 3; u < c - 3; u += 9 / density) {
    const sign = rng() < 0.5 ? -1 : 1;
    if (rng() < 0.5) addBrokenColumn(env, sign * (HW + 1.0), -(u + rng() * 3), rng, 0.6);
    else b.box(0.6, 0.5, 0.7, { position: [sign * (HW + 0.9), 0.25, -(u + rng() * 3)], rotation: [0, rng(), 0.2 * (rng() - 0.5)], color: C.stoneMoss, jitter: 0.2 });
  }
}

function buildStartGate(env) {
  const { b } = env;
  // temple gateway the runner has just burst out of
  const z = 5;
  b.box(W + 8, 8, 2, { position: [0, 3.8, z], color: C.stone, jitter: 0.06 });
  b.box(W + 9, 0.8, 2.6, { position: [0, 8.2, z], color: C.stoneDark });
  b.box(W - 1, 4.5, 2.4, { position: [0, 2.25, z], color: 0x0c0f0e });
  for (const s of [-1, 1]) b.add(unitGeo('cyl', 0.55, 0.65, 10), { position: [s * (HW - 0.2), 2.5, z - 1.4], scale: [1, 5, 1], color: C.stoneLight });
  addTorch(env, -HW + 1.4, 3.2, -z + 1.5, 0);
  addTorch(env, HW - 1.4, 3.2, -z + 1.5, 0);
}

// ---- props --------------------------------------------------------------------------------------
function addTree(env, x, z, rng, far = false) {
  const { b } = env;
  const palm = rng() < 0.3;
  const h = far ? 6 + rng() * 6 : 5 + rng() * 4;
  if (palm) {
    b.add(unitGeo('cyl', 0.18, 0.3, 6), { position: [x, h * 0.5, z], rotation: [0, 0, (rng() - 0.5) * 0.15], scale: [1, h, 1], color: C.bark, jitter: 0.1 });
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + rng() * 0.5;
      b.box(0.5, 0.08, 2.6, { position: [x + Math.cos(a) * 1.1, h + 0.2 - 0.3, z + Math.sin(a) * 1.1], rotation: [0.35, -a + Math.PI / 2, 0], color: C.palm, jitter: 0.15, sway: 1.0 });
    }
    b.add(unitGeo('sphere', 6, 4), { position: [x, h, z], scale: 0.45, color: C.leafDark });
  } else {
    const tr = 0.28 + rng() * 0.2;
    b.add(unitGeo('cyl', tr * 0.7, tr, 7), { position: [x, h * 0.5, z], scale: [1, h, 1], color: C.bark, jitter: 0.1 });
    // root flare
    for (let i = 0; i < 3; i++) { const a = rng() * Math.PI * 2; b.box(0.25, 0.35, 0.9, { position: [x + Math.cos(a) * 0.45, 0.15, z + Math.sin(a) * 0.45], rotation: [0, -a, 0], color: C.barkDark }); }
    const layers = 2 + Math.floor(rng() * 2);
    for (let i = 0; i < layers; i++) {
      const r = (2.2 - i * 0.5) * (0.8 + rng() * 0.4), ch = 2.0 + rng() * 1.2;
      const col = i === layers - 1 ? C.leafLight : rng() < 0.5 ? C.leaf : C.leafDark;
      b.cone(r, ch, 7, { position: [x + (rng() - 0.5) * 0.4, h - 0.6 + i * 1.5, z + (rng() - 0.5) * 0.4], rotation: [0, rng() * 3, 0], color: col, jitter: 0.15, sway: 0.7 + i * 0.15 });
    }
  }
}

function addFern(env, x, z, s) {
  const { b, rng } = env;
  const n = 4 + Math.floor(rng() * 3);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rng() * 0.6;
    b.box(0.16 * s, 0.05, 1.1 * s, { position: [x + Math.cos(a) * 0.35 * s, 0.35 * s, z + Math.sin(a) * 0.35 * s], rotation: [-0.7, -a + Math.PI / 2, 0], color: rng() < 0.5 ? C.leaf : C.leafLight, jitter: 0.2, sway: 1.0 });
  }
}

function addBush(env, x, z, s) {
  const { b, rng } = env;
  b.add(unitGeo('ico', 0), { position: [x, s * 0.7, z], scale: [s * 1.1, s * 0.8, s], rotation: [0, rng() * 3, 0], color: rng() < 0.5 ? C.leafDark : C.leaf, jitter: 0.18, sway: 0.4 });
  if (rng() < 0.4) b.add(unitGeo('sphere', 5, 4), { position: [x + 0.3, s * 1.2, z], scale: 0.1, color: C.flower[Math.floor(rng() * C.flower.length)] });
}

function addRootArc(env, x, z, sign, rng) {
  const { b } = env;
  // a root arching over the shoulder of the path
  for (let i = 0; i < 4; i++) {
    const t = i / 3;
    b.add(unitGeo('cyl', 0.1, 0.13, 5), { position: [x + sign * t * 1.2, 0.15 + Math.sin(t * Math.PI) * 0.35, z], rotation: [0, 0, Math.PI / 2 - sign * (0.6 - t * 1.2)], scale: [1, 0.55, 1], color: C.barkDark, jitter: 0.1 });
  }
}

function addBrokenColumn(env, x, z, rng, hScale = 1) {
  const { b } = env;
  const h = (1 + rng() * 2.5) * hScale;
  b.add(unitGeo('cyl', 0.42, 0.5, 8), { position: [x, h * 0.5, z], rotation: [(rng() - 0.5) * 0.1, 0, (rng() - 0.5) * 0.1], scale: [1, h, 1], color: C.stoneLight, jitter: 0.1 });
  b.box(1.2, 0.35, 1.2, { position: [x, 0.17, z], color: C.stoneDark });
  b.box(0.5, 0.35, 0.5, { position: [x + 0.9, 0.17, z + 0.6], rotation: [0, rng(), 0], color: C.stoneMoss, jitter: 0.2 });
}

// Wall torch: bracket + flame cone + additive glow quad. `facing` is the sign of the wall normal (0 = flat wall ahead).
function addTorch(env, x, y, u, facing, glowScale = 1) {
  const { b, extras } = env;
  const z = -u;
  b.box(0.25, 0.25, 0.25, { position: [x, y - 0.35, z], color: C.iron });
  b.add(unitGeo('cyl', 0.06, 0.08, 5), { position: [x - facing * 0.15, y - 0.15, z], scale: [1, 0.5, 1], color: C.woodDark });
  b.add(unitGeo('cyl', 0.16, 0.12, 6), { position: [x - facing * 0.22, y + 0.1, z], scale: [1, 0.2, 1], color: C.iron });
  const flame = new THREE.Mesh(flameGeo, flameMat);
  flame.position.set(x - facing * 0.22, y + 0.15, z);
  flame.userData.sharedGeo = true;
  flame.renderOrder = 5;
  extras.push(flame);
  const glow = new THREE.Mesh(glowGeo, glowMat);
  glow.scale.setScalar(glowScale);
  glow.position.set(x - facing * 0.5, y + 0.5, z + (facing === 0 ? 0.6 : 0));
  if (facing !== 0) glow.rotation.y = facing > 0 ? -Math.PI / 2 : Math.PI / 2;
  glow.userData.sharedGeo = true;
  glow.renderOrder = 4;
  extras.push(glow);
}

// Hidden meshes using every shared scenery material so their shaders compile at boot (renderer.compile)
// instead of stalling the first time a biome appears.
export function createWarmupGroup() {
  ensureShared();
  const g = new THREE.Group();
  const add = (geo, mat) => { const m = new THREE.Mesh(geo, mat); m.visible = false; g.add(m); return m; };
  add(flameGeo, flameMat); add(glowGeo, glowMat); add(mistGeo, mistMat);
  add(new THREE.PlaneGeometry(1, 1), waterMat); add(new THREE.PlaneGeometry(1, 1), fallMat);
  const b = new MeshBuilder(); b.box(1, 1, 1, { color: C.stone, sway: 0.5 });
  add(b.build(), worldMat);
  add(new THREE.BoxGeometry(1, 1, 1), abyssMat);
  return g;
}
