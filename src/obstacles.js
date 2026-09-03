// PLACEHOLDER obstacle visuals: simple colored primitives per obstacle type, built in piece-local coords
// (x = lateral v, z = -u, y = up). To be replaced with detailed props.
import * as THREE from 'three';
import { CONFIG } from './config.js';
import { createFlameMaterial } from './fx-materials.js';

const LW = CONFIG.laneWidth;
const mats = {};
const mat = (c, extra = {}) => (mats[c + JSON.stringify(extra)] ||= new THREE.MeshStandardMaterial({ color: c, roughness: 0.85, ...extra }));

export function buildObstacle(o, piece, ctx) {
  if (o.type === 'gap') return null; // the floor builder cuts gaps
  const g = new THREE.Group();
  const width = (o.lanes.length) * LW;
  const cx = (o.vMin + o.vMax) * 0.5;
  const z = -o.u;
  const add = (m) => { m.castShadow = true; m.receiveShadow = true; g.add(m); return m; };
  switch (o.type) {
    case 'root': { const m = add(new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, width, 7), mat(0x5b3d22))); m.rotation.z = Math.PI / 2; m.position.set(cx, 0.28, z); break; }
    case 'log': { const m = add(new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, width + 0.8, 9), mat(0x6b4a2b))); m.rotation.z = Math.PI / 2; m.position.set(cx, 0.42, z); break; }
    case 'boulder': { const m = add(new THREE.Mesh(new THREE.DodecahedronGeometry(0.55, 0), mat(0x7d7a70))); m.position.set(cx, 0.45, z); break; }
    case 'spikes': for (let i = 0; i < o.lanes.length * 3; i++) { const m = add(new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.7, 5), mat(0xb0b0b0, { metalness: 0.6, roughness: 0.4 }))); m.position.set(o.vMin + 0.35 + i * 0.6, 0.35, z); } break;
    case 'fire': case 'brazier': {
      const base = add(new THREE.Mesh(new THREE.BoxGeometry(width, 0.3, o.depth), mat(0x3a3128))); base.position.set(cx, 0.15, z);
      const flame = new THREE.Mesh(new THREE.ConeGeometry(0.45, 1.4, 8, 3, true), createFlameMaterial());
      flame.position.set(cx, 0.9, z); flame.scale.x = width * 0.8; g.add(flame);
      const light = new THREE.PointLight(0xff7722, 6, 8, 2); light.position.set(cx, 1.2, z); g.add(light);
      break;
    }
    case 'branch': { const m = add(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.2, width + 1.2, 7), mat(0x4e3620))); m.rotation.z = Math.PI / 2; m.position.set(cx, o.height + 0.2, z); break; }
    case 'lintel': {
      const beam = add(new THREE.Mesh(new THREE.BoxGeometry(width + 0.6, 0.6, 0.8), mat(0x8a8577))); beam.position.set(cx, o.height + 0.35, z);
      const top = add(new THREE.Mesh(new THREE.BoxGeometry(width + 0.6, 1.6, 0.8), mat(0x75705f))); top.position.set(cx, o.height + 1.45, z);
      break;
    }
    case 'pillar': { const m = add(new THREE.Mesh(new THREE.CylinderGeometry(0.45, 0.55, o.height, 9), mat(0x8f8a7a))); m.position.set(cx, o.height / 2, z); break; }
    case 'statue': { const m = add(new THREE.Mesh(new THREE.BoxGeometry(0.9, o.height, 0.9), mat(0x7b776a))); m.position.set(cx, o.height / 2, z); break; }
    case 'rubble': { const m = add(new THREE.Mesh(new THREE.BoxGeometry(width, o.height, o.depth), mat(0x6d685c))); m.position.set(cx, o.height / 2, z); break; }
    case 'trunk': { const m = add(new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, o.height, 9), mat(0x4a3220))); m.position.set(cx, o.height / 2, z); break; }
    default: { const m = add(new THREE.Mesh(new THREE.BoxGeometry(width, o.height, o.depth), mat(0xff00ff))); m.position.set(cx, o.height / 2, z); }
  }
  return g;
}

export function smashObstacle(obj) {
  // Simple: knock it over and sink it.
  obj.userData.smashed = true;
  obj.rotation.x = -0.9;
  obj.position.y -= 0.6;
}
