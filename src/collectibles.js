// Coins and power-ups: one InstancedMesh of spinning coins (vertex-shader rotation) plus small
// glowing power-up pickups. Handles collection tests and magnet attraction.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { applySpin, createGlowMaterial } from './fx-materials.js';

const MAX_COINS = 600;
const HIDDEN = new THREE.Matrix4().makeScale(0, 0, 0);

export function createCollectibles(scene, track) {
  // Bevelled coin: a thin outer disc plus a thicker inner disc, facing along Z so the Y-spin shows the face.
  const outer = new THREE.CylinderGeometry(0.36, 0.36, 0.07, 20);
  const inner = new THREE.CylinderGeometry(0.27, 0.27, 0.12, 20);
  const coinGeo = mergeGeometries([outer, inner], false);
  coinGeo.rotateX(Math.PI / 2);
  outer.dispose(); inner.dispose();
  const coinMat = applySpin(new THREE.MeshStandardMaterial({ color: 0xffc72c, emissive: 0xff9d00, emissiveIntensity: 0.55, metalness: 0.85, roughness: 0.25 }), 3.2);
  const mesh = new THREE.InstancedMesh(coinGeo, coinMat, MAX_COINS);
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.frustumCulled = false;
  mesh.castShadow = false;
  for (let i = 0; i < MAX_COINS; i++) mesh.setMatrixAt(i, HIDDEN);
  mesh.count = MAX_COINS;
  scene.add(mesh);

  const freeSlots = [];
  for (let i = MAX_COINS - 1; i >= 0; i--) freeSlots.push(i);
  const coins = new Map(); // slot -> coin record
  const _m = new THREE.Matrix4();
  const _p = new THREE.Vector3();
  const _q = new THREE.Quaternion();
  const _s = new THREE.Vector3(1, 1, 1);

  const powerups = []; // { rec, piece, obj, pos }
  const puGeos = {
    magnet: new THREE.TorusGeometry(0.42, 0.14, 8, 16, Math.PI),
    shield: new THREE.IcosahedronGeometry(0.5, 1),
    boost: new THREE.ConeGeometry(0.42, 0.9, 5),
  };
  const puColors = { magnet: 0xff4d8f, shield: 0x4db8ff, boost: 0xffc233 };

  function setCoinMatrix(rec) {
    _p.copy(rec.pos);
    mesh.setMatrixAt(rec.slot, _m.compose(_p, _q, _s));
  }

  function addPiece(piece) {
    for (const c of piece.coins) {
      if (freeSlots.length === 0) break;
      const slot = freeSlots.pop();
      const pos = track.worldPosition(piece, c.u, c.v, c.y);
      const rec = { slot, piece, data: c, pos, baseY: pos.y, taken: false, pulled: false };
      coins.set(slot, rec);
      setCoinMatrix(rec);
    }
    for (const pu of piece.powerups) {
      const obj = new THREE.Group();
      const core = new THREE.Mesh(puGeos[pu.type], new THREE.MeshStandardMaterial({ color: puColors[pu.type], emissive: puColors[pu.type], emissiveIntensity: 0.9, metalness: 0.4, roughness: 0.3 }));
      if (pu.type === 'magnet') core.rotation.z = Math.PI;
      const halo = new THREE.Mesh(new THREE.SphereGeometry(0.85, 16, 12), createGlowMaterial(puColors[pu.type], 2.2, 1.4));
      obj.add(core, halo);
      const pos = track.worldPosition(piece, pu.u, pu.v, pu.y);
      obj.position.copy(pos);
      scene.add(obj);
      powerups.push({ rec: pu, piece, obj, pos, core, baseY: pos.y });
    }
    mesh.instanceMatrix.needsUpdate = true;
  }

  function removePiece(piece) {
    for (const [slot, rec] of coins) {
      if (rec.piece === piece) { coins.delete(slot); freeSlots.push(slot); mesh.setMatrixAt(slot, HIDDEN); }
    }
    for (let i = powerups.length - 1; i >= 0; i--) {
      if (powerups[i].piece === piece) { disposePU(powerups[i]); powerups.splice(i, 1); }
    }
    mesh.instanceMatrix.needsUpdate = true;
  }

  function disposePU(p) { scene.remove(p.obj); p.obj.traverse((o) => { if (o.material) o.material.dispose(); }); }

  function reset() {
    for (const [slot] of coins) { freeSlots.push(slot); mesh.setMatrixAt(slot, HIDDEN); }
    coins.clear();
    for (const p of powerups) disposePU(p);
    powerups.length = 0;
    mesh.instanceMatrix.needsUpdate = true;
  }

  const result = { coins: 0, powerups: [], coinPositions: [] };
  const _d = new THREE.Vector3();

  // ctx: { playerPos, playerY, hitboxHeight, magnet, magnetRadius, fwd, speed, time }
  function update(dt, ctx) {
    result.coins = 0; result.powerups.length = 0; result.coinPositions.length = 0;
    const pp = ctx.playerPos;
    const bodyY0 = pp.y - 0.35, bodyY1 = pp.y + ctx.hitboxHeight + 0.3;
    let dirty = false;
    for (const [slot, rec] of coins) {
      if (rec.taken) continue;
      _d.subVectors(rec.pos, pp);
      const horiz = Math.hypot(_d.x, _d.z);
      if (ctx.magnet && horiz < ctx.magnetRadius && _d.y > -2 && _d.y < 4) {
        // pull toward the runner's chest
        const target = _p.copy(pp); target.y += 1.0;
        rec.pos.lerp(target, 1 - Math.exp(-dt * 9));
        rec.pulled = true;
        setCoinMatrix(rec); dirty = true;
        _d.subVectors(rec.pos, pp);
      }
      const near = Math.abs(_d.x) < 0.95 && Math.abs(_d.z) < 0.95 && rec.pos.y > bodyY0 && rec.pos.y < bodyY1;
      if (near || (rec.pulled && _d.length() < 1.2)) {
        rec.taken = true; rec.data.taken = true;
        coins.delete(slot); freeSlots.push(slot);
        mesh.setMatrixAt(slot, HIDDEN); dirty = true;
        result.coins++;
        if (result.coinPositions.length < 6) result.coinPositions.push(rec.pos.clone());
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
      if (grab) { p.rec.taken = true; result.powerups.push(p.rec.type); disposePU(p); powerups.splice(i, 1); }
    }
    return result;
  }

  return { addPiece, removePiece, update, reset, mesh, get count() { return coins.size; } };
}
