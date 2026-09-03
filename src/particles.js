// PLACEHOLDER particle system: simple point-sprite pool with a few emitter types.
import * as THREE from 'three';

const MAX = 1500;
export function createParticles(scene) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(MAX * 3), col = new Float32Array(MAX * 3), size = new Float32Array(MAX);
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(size, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { uScale: { value: 300 } },
    vertexShader: `attribute float size; varying vec3 vC; uniform float uScale; void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = size * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `varying vec3 vC; void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.15, length(d)); gl_FragColor = vec4(vC, a); }`,
    transparent: true, depthWrite: false, vertexColors: true, blending: THREE.NormalBlending,
  });
  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  scene.add(points);
  const parts = [];
  const free = [];
  for (let i = 0; i < MAX; i++) { free.push(i); pos[i * 3 + 1] = -999; }
  const TYPES = {
    dust: { color: [0.75, 0.66, 0.5], life: 0.6, speed: 1.2, up: 1.0, size: 0.35, grav: -1.5 },
    slide: { color: [0.75, 0.66, 0.5], life: 0.7, speed: 1.6, up: 1.4, size: 0.4, grav: -1.5 },
    sparkle: { color: [1, 0.85, 0.35], life: 0.5, speed: 2.5, up: 2.0, size: 0.28, grav: -2 },
    burst: { color: [1, 1, 0.8], life: 0.8, speed: 4, up: 3, size: 0.35, grav: -3 },
    smash: { color: [0.5, 0.45, 0.4], life: 1.0, speed: 5, up: 4, size: 0.4, grav: -12 },
    shieldpop: { color: [0.5, 0.8, 1], life: 0.7, speed: 4, up: 2, size: 0.35, grav: -2 },
    ember: { color: [1, 0.5, 0.15], life: 1.2, speed: 1.5, up: 3, size: 0.25, grav: 1 },
  };
  const _c = new THREE.Color();
  return {
    emit(type, at, opts = {}) {
      const t = TYPES[type] || TYPES.dust;
      const n = opts.count || 6;
      for (let k = 0; k < n; k++) {
        if (!free.length) return;
        const i = free.pop();
        const s = t.speed * (opts.small ? 0.4 : 1);
        parts.push({ i, life: t.life * (0.7 + Math.random() * 0.6), age: 0, x: at.x + (Math.random() - 0.5) * 0.4, y: at.y + 0.1, z: at.z + (Math.random() - 0.5) * 0.4, vx: (Math.random() - 0.5) * s, vy: Math.random() * t.up, vz: (Math.random() - 0.5) * s, g: t.grav, size: t.size * (opts.small ? 0.6 : 1) });
        col[i * 3] = t.color[0]; col[i * 3 + 1] = t.color[1]; col[i * 3 + 2] = t.color[2];
      }
    },
    update(dt) {
      for (let k = parts.length - 1; k >= 0; k--) {
        const p = parts[k];
        p.age += dt;
        if (p.age >= p.life) { pos[p.i * 3 + 1] = -999; free.push(p.i); parts.splice(k, 1); continue; }
        p.vy += p.g * dt; p.x += p.vx * dt; p.y += p.vy * dt; p.z += p.vz * dt;
        pos[p.i * 3] = p.x; pos[p.i * 3 + 1] = p.y; pos[p.i * 3 + 2] = p.z;
        size[p.i] = p.size * (1 - p.age / p.life);
      }
      geo.attributes.position.needsUpdate = true; geo.attributes.size.needsUpdate = true; geo.attributes.color.needsUpdate = true;
    },
    reset() { for (const p of parts) { pos[p.i * 3 + 1] = -999; free.push(p.i); } parts.length = 0; geo.attributes.position.needsUpdate = true; },
  };
}
