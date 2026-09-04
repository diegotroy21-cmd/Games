// Coins and power-ups: one InstancedMesh of spinning coins (vertex-shader rotation) plus small glowing
// power-up pickups. Handles collection tests and magnet attraction.
// Live coins are kept packed at the front of the instance buffer so only live instances are drawn.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { applySpin, createGlowMaterial } from './fx-materials.js';

const MAX_COINS = 600;

export function createCollectibles(scene, track) {
  // Bevelled coin: a thin outer disc plus a thicker inner disc, facing along Z so the Y-spin shows the face.
  const outer = new THREE.CylinderGeometry(0.36, 0.36, 0.07, 14);
  const inner = new THREE.CylinderGeometry(0.27, 0.27, 0.12, 12);
  const coinGeo = mergeGeometries([outer, inner], false);
  coinGeo.rotateX(Math.PI / 2);
  outer.dispose(); inner.dispose();
  const coinMat = applySpin(new THREE.MeshStandardMaterial({ color: 0xffc72c, emissive: 0xff9d00, emissiveIntensity: 0.55, metalness: 0.85, roughness: 0.25 }), 3.2);
  const mesh = new THREE.InstancedMesh(coinGeo, coinMat, MAX_COINS);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.frustumCulled = false;
  mesh.castShadow = false;
  mesh.count = 0;
  scene.add(mesh);

  const records = []; // live coins; records[i].slot === i
  const _m = new THREE.Matrix4();
  const _q = new THREE.Quaternion();
  const _s = new THREE.Vector3(1, 1, 1);
  const _p = new THREE.Vector3();
  const _d = new THREE.Vector3();

  function writeMatrix(rec) { mesh.setMatrixAt(rec.slot, _m.compose(rec.pos, _q, _s)); }

  // Removes a coin record by swapping the last live coin into its slot.
  function removeRecord(rec) {
    const last = records.pop();
    if (last !== rec) { records[rec.slot] = last; last.slot = rec.slot; writeMatrix(last); }
    rec.slot = -1;
    mesh.count = records.length;
    mesh.instanceMatrix.needsUpdate = true;
  }

  // ---- power-ups: geometry and materials are shared per type for the whole session -------------
  const PU_TYPES = ['magnet', 'shield', 'boost'];
  const puGeos = {
    magnet: new THREE.TorusGeometry(0.42, 0.14, 8, 16, Math.PI),
    shield: new THREE.IcosahedronGeometry(0.5, 1),
    boost: new THREE.ConeGeometry(0.42, 0.9, 5),
  };
  const puColors = { magnet: 0xff4d8f, shield: 0x4db8ff, boost: 0xffc233 };
  const puCoreMats = {}, puHaloMats = {};
  for (const t of PU_TYPES) {
    puCoreMats[t] = new THREE.MeshStandardMaterial({ color: puColors[t], emissive: puColors[t], emissiveIntensity: 0.9, metalness: 0.4, roughness: 0.3 });
    puHaloMats[t] = createGlowMaterial(puColors[t], 2.2, 1.4);
  }
  const haloGeo = new THREE.SphereGeometry(0.85, 16, 12);
  const powerups = []; // { rec, piece, obj, core, baseY }

  function makePickup(type) {
    const obj = new THREE.Group();
    const core = new THREE.Mesh(puGeos[type], puCoreMats[type]);
    if (type === 'magnet') core.rotation.z = Math.PI;
    const halo = new THREE.Mesh(haloGeo, puHaloMats[type]);
    obj.add(core, halo);
    obj.userData.core = core;
    return obj;
  }

  function addPiece(piece) {
    for (const c of piece.coins) {
      if (records.length >= MAX_COINS) break;
      const pos = track.worldPosition(piece, c.u, c.v, c.y);
      const rec = { slot: records.length, piece, data: c, pos, pulled: false };
      records.push(rec);
      writeMatrix(rec);
    }
    for (const pu of piece.powerups) {
      const obj = makePickup(pu.type);
      const pos = track.worldPosition(piece, pu.u, pu.v, pu.y);
      obj.position.copy(pos);
      scene.add(obj);
      powerups.push({ rec: pu, piece, obj, core: obj.userData.core, baseY: pos.y });
    }
    mesh.count = records.length;
    mesh.instanceMatrix.needsUpdate = true;
  }

  function removePiece(piece) {
    for (let i = records.length - 1; i >= 0; i--) if (records[i].piece === piece) removeRecord(records[i]);
    for (let i = powerups.length - 1; i >= 0; i--) {
      if (powerups[i].piece === piece) { scene.remove(powerups[i].obj); powerups.splice(i, 1); }
    }
  }

  function reset() {
    records.length = 0;
    mesh.count = 0;
    mesh.instanceMatrix.needsUpdate = true;
    for (const p of powerups) scene.remove(p.obj);
    powerups.length = 0;
  }

  const result = { coins: 0, powerups: [], coinPositions: [] };
  const pooledPositions = Array.from({ length: 6 }, () => new THREE.Vector3());

  // ctx: { playerPos, playerY, hitboxHeight, magnet, magnetRadius, fwd, speed, time }
  function update(dt, ctx) {
    result.coins = 0; result.powerups.length = 0; result.coinPositions.length = 0;
    const pp = ctx.playerPos;
    const bodyY0 = pp.y - 0.35, bodyY1 = pp.y + ctx.hitboxHeight + 0.3;
    let dirty = false;
    for (let i = records.length - 1; i >= 0; i--) {
      const rec = records[i];
      _d.subVectors(rec.pos, pp);
      const horiz = Math.hypot(_d.x, _d.z);
      if (ctx.magnet && horiz < ctx.magnetRadius && _d.y > -2 && _d.y < 4) {
        // pull toward the runner's chest
        _p.copy(pp); _p.y += 1.0;
        rec.pos.lerp(_p, 1 - Math.exp(-dt * 9));
        rec.pulled = true;
        writeMatrix(rec); dirty = true;
        _d.subVectors(rec.pos, pp);
      }
      const near = Math.abs(_d.x) < 0.95 && Math.abs(_d.z) < 0.95 && rec.pos.y > bodyY0 && rec.pos.y < bodyY1;
      if (near || (rec.pulled && _d.length() < 1.2)) {
        rec.data.taken = true;
        if (result.coinPositions.length < pooledPositions.length) result.coinPositions.push(pooledPositions[result.coinPositions.length].copy(rec.pos));
        removeRecord(rec);
        result.coins++;
      }
    }
    if (dirty) mesh.instanceMatrix.needsUpdate = true;

    for (let i = powerups.length - 1; i >= 0; i--) {
      const p = powerups[i];
      p.obj.rotation.y += dt * 2.2;
      p.obj.position.y = p.baseY + Math.sin(ctx.time * 3 + i) * 0.12;
      p.core.rotation.x += dt * 0.7;
      _d.subVectors(p.obj.position, pp);
      const grab = (Math.abs(_d.x) < 1.1 && Math.abs(_d.z) < 1.1 && _d.y > -0.5 && _d.y < 2.4) || (ctx.magnet && Math.hypot(_d.x, _d.z) < 2.6 && Math.abs(_d.y) < 3);
      if (grab) { p.rec.taken = true; result.powerups.push(p.rec.type); scene.remove(p.obj); powerups.splice(i, 1); }
    }
    return result;
  }

  // Hidden instances of every pickup material so shaders compile at boot rather than mid-run.
  function warmupGroup() {
    const g = new THREE.Group();
    for (const t of PU_TYPES) { const o = makePickup(t); o.visible = false; g.add(o); }
    return g;
  }

  return { addPiece, removePiece, update, reset, warmupGroup, mesh, get count() { return records.length; } };
}
