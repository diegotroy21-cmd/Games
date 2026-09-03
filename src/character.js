// PLACEHOLDER adventurer: simple jointed rig with run/jump/slide/turn/fall/hit poses. To be replaced by a richer model.
import * as THREE from 'three';
import { damp, clamp, lerp } from './util.js';

export function createCharacter() {
  const group = new THREE.Group();
  const rig = new THREE.Group();
  group.add(rig);
  const mat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 });
  const skin = mat(0xd9a074), shirt = mat(0xc9752b), pants = mat(0x4a3a2a), hat = mat(0x5a3d22), gold = new THREE.MeshStandardMaterial({ color: 0xffc233, emissive: 0xff9900, emissiveIntensity: 0.4, metalness: 0.9, roughness: 0.3 });
  const box = (w, h, d, m, x = 0, y = 0, z = 0) => { const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m); mesh.position.set(x, y, z); mesh.castShadow = true; return mesh; };

  const hips = new THREE.Group(); hips.position.y = 0.95; rig.add(hips);
  const torso = box(0.5, 0.6, 0.3, shirt, 0, 0.35); hips.add(torso);
  const head = new THREE.Group(); head.position.y = 0.85; hips.add(head);
  head.add(box(0.32, 0.32, 0.32, skin));
  const brim = box(0.5, 0.05, 0.5, hat, 0, 0.16); head.add(brim); head.add(box(0.34, 0.16, 0.34, hat, 0, 0.25));
  const mkLimb = (len, m, thick = 0.14) => { const j = new THREE.Group(); const seg = box(thick, len, thick, m, 0, -len / 2); j.add(seg); return j; };
  const armL = mkLimb(0.55, skin); armL.position.set(-0.34, 0.58, 0); hips.add(armL);
  const armR = mkLimb(0.55, skin); armR.position.set(0.34, 0.58, 0); hips.add(armR);
  const idol = box(0.16, 0.22, 0.16, gold, 0, -0.62, -0.05); armR.add(idol);
  const legL = mkLimb(0.85, pants, 0.18); legL.position.set(-0.14, 0, 0); hips.add(legL);
  const legR = mkLimb(0.85, pants, 0.18); legR.position.set(0.14, 0, 0); hips.add(legR);

  let state = 'idle', phase = 0, stateTime = 0;
  const api = {
    group, height: 1.8,
    setState(s) { if (s === 'turn') return; state = s; stateTime = 0; },
    reset() { state = 'run'; phase = 0; stateTime = 0; rig.rotation.set(0, 0, 0); hips.position.y = 0.95; },
    update(dt, ctx) {
      stateTime += dt;
      const s = ctx.dead ? (ctx.deathType === 'fall' ? 'fall' : 'hit') : ctx.state;
      const cadence = 8 + ctx.speed01 * 5;
      phase += dt * cadence;
      const lean = clamp(ctx.lateralVel * 0.04, -0.4, 0.4);
      rig.rotation.z = damp(rig.rotation.z, -lean, 10, dt);
      rig.rotation.x = damp(rig.rotation.x, s === 'run' ? 0.12 + ctx.speed01 * 0.1 : 0, 8, dt);
      if (s === 'run') {
        const sw = Math.sin(phase), cs = Math.cos(phase);
        legL.rotation.x = sw * 0.9; legR.rotation.x = -sw * 0.9;
        armL.rotation.x = -sw * 0.8; armR.rotation.x = sw * 0.8;
        hips.position.y = 0.95 + Math.abs(cs) * 0.06;
      } else if (s === 'jump') {
        legL.rotation.x = 0.7; legR.rotation.x = -0.3; armL.rotation.x = -1.6; armR.rotation.x = -1.2; hips.position.y = 0.95;
      } else if (s === 'slide') {
        rig.rotation.x = -1.2; hips.position.y = 0.55; legL.rotation.x = 0.3; legR.rotation.x = 0.1; armL.rotation.x = -2.6; armR.rotation.x = -2.6;
      } else if (s === 'fall') {
        rig.rotation.x += dt * 2; armL.rotation.x = -2.8; armR.rotation.x = -2.8; legL.rotation.x = Math.sin(phase) * 0.6; legR.rotation.x = -Math.sin(phase) * 0.6;
      } else if (s === 'hit' || s === 'burn' || s === 'caught') {
        rig.rotation.x = damp(rig.rotation.x, -1.3, 6, dt); hips.position.y = damp(hips.position.y, 0.35, 6, dt); armL.rotation.x = -2.2; armR.rotation.x = -2.2;
      }
    },
  };
  return api;
}
