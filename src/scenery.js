// PLACEHOLDER scenery: flat stone floor with gaps cut out, low side walls, a few trees, sky/fog/lights.
// To be replaced by rich temple/jungle/cliff/bridge/ruins environments.
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { MeshBuilder, unitGeo, standardVertexMaterial } from './meshbuilder.js';
import { applyWindSway, setFxFog } from './fx-materials.js';

const W = CONFIG.trackWidth;

export function createEnvironment(scene, renderer, quality) {
  scene.background = new THREE.Color(0x9fc7b3);
  scene.fog = new THREE.Fog(0xbfd8c8, 45, 170);
  setFxFog(0xbfd8c8, 45, 170);
  const hemi = new THREE.HemisphereLight(0xcfe8ff, 0x3b4a2c, 0.9);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff0d0, 2.4);
  sun.position.set(30, 60, 20);
  sun.castShadow = quality !== 'low';
  sun.shadow.mapSize.set(quality === 'high' ? 2048 : 1024, quality === 'high' ? 2048 : 1024);
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 160;
  sun.shadow.camera.left = -40; sun.shadow.camera.right = 40; sun.shadow.camera.top = 40; sun.shadow.camera.bottom = -40;
  sun.shadow.bias = -0.0005;
  scene.add(sun); scene.add(sun.target);
  return {
    update(dt, ctx) {
      // keep the shadow frustum centred on the runner
      sun.position.copy(ctx.playerPos).add(new THREE.Vector3(30, 60, 20));
      sun.target.position.copy(ctx.playerPos);
      sun.target.updateMatrixWorld();
    },
    setQuality() {}, dispose() {},
  };
}

const material = applyWindSway(standardVertexMaterial());

export function buildPiece(piece, ctx) {
  const rng = ctx.rng;
  const b = new MeshBuilder();
  const len = piece.length;
  const u0 = piece.end === 'straight' ? 0 : 0;
  // floor in stretches between gaps
  const gaps = piece.obstacles.filter((o) => o.type === 'gap').map((o) => [o.u - o.depth / 2, o.u + o.depth / 2]);
  let cur = piece.contentStart > 0 ? -W / 2 : 0;
  const stretches = [];
  for (const [a, bb] of gaps) { stretches.push([cur, a]); cur = bb; }
  stretches.push([cur, len]);
  const floorColor = { temple: 0x8b8672, jungle: 0x6f5a3a, cliff: 0x8a8070, bridge: 0x7a5a36, ruins: 0x8a8372 }[piece.kind] || 0x888888;
  for (const [a, c] of stretches) {
    if (c - a <= 0.01) continue;
    b.box(W, 0.6, c - a, { position: [0, -0.3, -(a + c) / 2], color: floorColor, jitter: 0.15 });
  }
  // side walls / edges (not on the tile's open sides)
  const wallLen = piece.end === 'straight' ? len : len - W;
  const wallStart = piece.contentStart > 0 ? W / 2 : 0;
  for (const side of [-1, 1]) {
    const kind = side < 0 ? piece.side.left : piece.side.right;
    if (kind === 'wall' || kind === 'cliffwall') b.box(1.2, 4, wallLen - wallStart, { position: [side * (W / 2 + 0.6), 2, -(wallStart + wallLen) / 2], color: kind === 'wall' ? 0x7e7867 : 0x6a6458, jitter: 0.2 });
    else if (kind === 'drop') { /* open */ }
    else {
      // jungle edge: ground and trees
      b.box(10, 0.6, wallLen - wallStart, { position: [side * (W / 2 + 5), -0.3, -(wallStart + wallLen) / 2], color: 0x4f6b32, jitter: 0.2 });
      const n = Math.floor((wallLen - wallStart) / 5);
      for (let i = 0; i < n; i++) {
        const z = -(wallStart + 2 + i * 5 + rng() * 2);
        const x = side * (W / 2 + 2 + rng() * 5);
        const h = 4 + rng() * 5;
        b.cylinder(0.25, 0.4, h, 6, { position: [x, h / 2, z], color: 0x5a3e24 });
        b.cone(1.6 + rng(), 2.5 + rng() * 2, 7, { position: [x, h + 0.8, z], color: 0x3f7a2e, jitter: 0.25, sway: 0.8 });
      }
    }
  }
  // corner tile walls: far wall + the closed side(s)
  if (piece.end !== 'straight') {
    const zc = -(len - W / 2);
    b.box(W + 2.4, 5, 1.2, { position: [0, 2.5, -(len + 0.6)], color: 0x7e7867, jitter: 0.2 });
    if (piece.end !== 'tee') {
      const closed = piece.end === 'left' ? 1 : -1;
      b.box(1.2, 5, W, { position: [closed * (W / 2 + 0.6), 2.5, zc], color: 0x7e7867, jitter: 0.2 });
    }
  }
  const mesh = b.toMesh(material);
  const group = new THREE.Group();
  if (mesh) group.add(mesh);
  return group;
}

export function disposePiece(group) {
  group.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
}
