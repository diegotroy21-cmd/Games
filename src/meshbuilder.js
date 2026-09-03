// MeshBuilder merges many small colored primitives into one geometry (vertex colors) so a whole
// track piece renders in a couple of draw calls. Optional per-vertex "sway" weight drives the wind shader.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _p = new THREE.Vector3();
const _c = new THREE.Color();

// Small cache of unit geometries so we do not regenerate boxes/cylinders for every prop.
const geoCache = new Map();
export function unitGeo(kind, ...params) {
  const key = kind + ':' + params.join(',');
  let g = geoCache.get(key);
  if (g) return g;
  switch (kind) {
    case 'box': g = new THREE.BoxGeometry(1, 1, 1, ...params); break;
    case 'cyl': g = new THREE.CylinderGeometry(params[0] ?? 1, params[1] ?? 1, 1, params[2] ?? 8, params[3] ?? 1, params[4] ?? false); break;
    case 'cone': g = new THREE.ConeGeometry(1, 1, params[0] ?? 7, 1); break;
    case 'sphere': g = new THREE.SphereGeometry(1, params[0] ?? 8, params[1] ?? 6); break;
    case 'ico': g = new THREE.IcosahedronGeometry(1, params[0] ?? 0); break;
    case 'dodeca': g = new THREE.DodecahedronGeometry(1, params[0] ?? 0); break;
    case 'plane': g = new THREE.PlaneGeometry(1, 1, params[0] ?? 1, params[1] ?? 1); break;
    case 'tetra': g = new THREE.TetrahedronGeometry(1, params[0] ?? 0); break;
    case 'torus': g = new THREE.TorusGeometry(1, params[0] ?? 0.2, params[1] ?? 6, params[2] ?? 12); break;
    default: throw new Error('unknown geo ' + kind);
  }
  g = g.toNonIndexed();
  geoCache.set(key, g);
  return g;
}

export class MeshBuilder {
  constructor() { this.parts = []; }

  // Adds a copy of `geo` transformed by position/rotation(euler or quaternion)/scale, painted `color`.
  // opts: { sway: number | (y01)=>number, jitter: color variance 0..1, roughness?: 0..1 (stored in uv2.x if used) }
  add(geo, { position = [0, 0, 0], rotation = [0, 0, 0], quaternion = null, scale = [1, 1, 1], color = 0xffffff, sway = 0, jitter = 0 } = {}) {
    const g = geo.clone();
    if (quaternion) _q.copy(quaternion); else _q.setFromEuler(_e.set(rotation[0], rotation[1], rotation[2]));
    if (typeof scale === 'number') _s.set(scale, scale, scale); else _s.set(scale[0], scale[1], scale[2]);
    _p.set(position[0], position[1], position[2]);
    _m.compose(_p, _q, _s);
    g.applyMatrix4(_m);

    const count = g.attributes.position.count;
    const colors = new Float32Array(count * 3);
    const sways = new Float32Array(count);
    _c.set(color);
    const pos = g.attributes.position;
    // compute local bbox y range for sway weighting
    let minY = Infinity, maxY = -Infinity;
    if (sway) { for (let i = 0; i < count; i++) { const y = pos.getY(i); if (y < minY) minY = y; if (y > maxY) maxY = y; } }
    for (let i = 0; i < count; i++) {
      let r = _c.r, gg = _c.g, b = _c.b;
      if (jitter) { const j = 1 + (hashf(i * 7 + count) - 0.5) * jitter; r *= j; gg *= j; b *= j; }
      colors[i * 3] = r; colors[i * 3 + 1] = gg; colors[i * 3 + 2] = b;
      if (sway) {
        const y01 = maxY > minY ? (pos.getY(i) - minY) / (maxY - minY) : 1;
        sways[i] = typeof sway === 'function' ? sway(y01) : sway * y01;
      }
    }
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    g.setAttribute('aSway', new THREE.BufferAttribute(sways, 1));
    this.parts.push(g);
    return this;
  }

  box(w, h, d, opts = {}) { return this.add(unitGeo('box'), { ...opts, scale: [w, h, d] }); }
  // Cylinder with real radii (unit height, scaled to h). opts.seg = radial segments, opts.open = no caps.
  cylinder(rTop, rBottom, h, seg = 8, opts = {}) {
    return this.add(unitGeo('cyl', rTop, rBottom, seg, 1, !!opts.open), { ...opts, scale: [1, h, 1] });
  }
  sphere(r, opts = {}) { return this.add(unitGeo('sphere', opts.ws || 8, opts.hs || 6), { ...opts, scale: [r, r, r] }); }
  cone(r, h, seg = 7, opts = {}) { return this.add(unitGeo('cone', seg), { ...opts, scale: [r, h, r] }); }

  // Merge everything into one BufferGeometry (non-indexed, with color + aSway attributes).
  build() {
    if (!this.parts.length) return null;
    const merged = mergeGeometries(this.parts, false);
    for (const p of this.parts) p.dispose();
    this.parts.length = 0;
    if (merged) merged.computeBoundingSphere();
    return merged;
  }

  toMesh(material) {
    const g = this.build();
    if (!g) return null;
    const m = new THREE.Mesh(g, material);
    m.castShadow = true; m.receiveShadow = true;
    return m;
  }
}

function hashf(i) { let h = (i * 2654435761) >>> 0; h ^= h >>> 15; h = Math.imul(h, 2246822519) >>> 0; h ^= h >>> 13; return h / 4294967296; }

// Materials shared by merged geometry meshes.
let _stdMat = null;
export function standardVertexMaterial() {
  if (_stdMat) return _stdMat;
  _stdMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92, metalness: 0.02, flatShading: true });
  return _stdMat;
}
