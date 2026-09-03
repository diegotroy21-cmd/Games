// PLACEHOLDER demon monkeys: three dark shapes with glowing eyes that chase behind the runner.
import * as THREE from 'three';
import { damp, lerp } from './util.js';

export function createMonkeys(scene) {
  const group = new THREE.Group();
  scene.add(group);
  const monkeys = [];
  const body = new THREE.MeshStandardMaterial({ color: 0x1b1216, roughness: 0.9 });
  const eye = new THREE.MeshBasicMaterial({ color: 0xff2a1a });
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Group();
    const torso = new THREE.Mesh(new THREE.SphereGeometry(0.42, 10, 8), body); torso.position.y = 0.7; torso.scale.set(1, 0.9, 1.2); m.add(torso);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), body); head.position.set(0, 1.15, -0.25); m.add(head);
    const e1 = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), eye); e1.position.set(-0.12, 1.2, -0.5); m.add(e1);
    const e2 = e1.clone(); e2.position.x = 0.12; m.add(e2);
    const arms = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.12, 0.12), body); arms.position.y = 0.75; m.add(arms);
    group.add(m);
    monkeys.push({ obj: m, lateral: (i - 1) * 1.6, dist: 14, phase: i * 2.1, pounced: false });
  }
  const sample = {};
  const api = {
    reset() { for (const m of monkeys) { m.dist = 6; m.pounced = false; m.obj.visible = true; } },
    pounce() { for (const m of monkeys) m.pounced = true; },
    setThreat() {},
    update(dt, ctx) {
      for (const m of monkeys) {
        const target = m.pounced ? 0.6 : lerp(15, 2.4, ctx.threat) + Math.sin(ctx.time * 2 + m.phase) * 0.4;
        m.dist = damp(m.dist, target, m.pounced ? 6 : 1.4, dt);
        ctx.sample(m.dist, sample);
        m.obj.position.copy(sample.pos);
        m.obj.position.x += ctx.dead ? 0 : 0; // stays on track centre-ish
        m.obj.position.addScaledVector(sample.piece.right, m.lateral * 0.7);
        m.obj.position.y = Math.abs(Math.sin(ctx.time * 7 + m.phase)) * (ctx.running ? 0.35 : 0);
        m.obj.rotation.y = Math.atan2(-sample.fwd.x, -sample.fwd.z);
        m.obj.visible = ctx.threat > 0.02 || m.pounced;
      }
    },
  };
  return api;
}
