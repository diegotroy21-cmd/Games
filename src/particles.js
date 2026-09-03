// CPU-simulated particle pools rendered as point sprites with a small custom shader.
// Two pools: "solid" (dust, debris, leaves — normal blending) and "glow" (sparks, embers, mist — additive).
// Typed arrays, no per-frame allocations; each particle carries position, velocity, life, size, colour,
// rotation, shape (0 soft disc, 1 leaf, 2 chunk) and gravity/drag.
import * as THREE from 'three';

const SHAPE_DISC = 0, SHAPE_LEAF = 1, SHAPE_CHUNK = 2;

const VERT = `
  attribute float aSize; attribute float aAlpha; attribute float aRot; attribute float aShape; attribute vec3 aColor;
  varying float vAlpha; varying float vRot; varying float vShape; varying vec3 vColor;
  uniform float uScale;
  void main(){
    vColor = aColor; vAlpha = aAlpha; vRot = aRot; vShape = aShape;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = clamp(aSize * uScale / max(0.5, -mv.z), 1.0, 160.0);
    gl_Position = projectionMatrix * mv;
  }`;
const FRAG = `
  varying float vAlpha; varying float vRot; varying float vShape; varying vec3 vColor;
  uniform float uAdditive;
  void main(){
    vec2 p = gl_PointCoord - 0.5;
    float c = cos(vRot), s = sin(vRot);
    p = vec2(c * p.x - s * p.y, s * p.x + c * p.y);
    float a;
    if (vShape < 0.5) { a = smoothstep(0.5, 0.12, length(p)); }
    else if (vShape < 1.5) { float d = length(p * vec2(1.0, 2.2)); a = smoothstep(0.5, 0.42, d); a *= 0.7 + 0.3 * smoothstep(0.0, 0.5, p.y + 0.5); }
    else { a = step(abs(p.x), 0.32) * step(abs(p.y), 0.26); }
    a *= vAlpha;
    if (a < 0.01) discard;
    vec3 col = vColor;
    if (uAdditive > 0.5) { gl_FragColor = vec4(col * a, a); } else { gl_FragColor = vec4(col, a); }
  }`;

class Pool {
  constructor(scene, max, additive) {
    this.max = max; this.count = 0;
    this.pos = new Float32Array(max * 3); this.vel = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3); this.size = new Float32Array(max); this.alpha = new Float32Array(max);
    this.rot = new Float32Array(max); this.rotV = new Float32Array(max); this.shape = new Float32Array(max);
    this.life = new Float32Array(max); this.maxLife = new Float32Array(max); this.grav = new Float32Array(max);
    this.drag = new Float32Array(max); this.baseSize = new Float32Array(max); this.grow = new Float32Array(max);
    this.fadeIn = new Float32Array(max);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aColor', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aSize', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aAlpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aRot', new THREE.BufferAttribute(this.rot, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('aShape', new THREE.BufferAttribute(this.shape, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setDrawRange(0, 0);
    this.geo = geo;
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 300 }, uAdditive: { value: additive ? 1 : 0 } },
      vertexShader: VERT, fragmentShader: FRAG, transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    if (additive) this.mat.premultipliedAlpha = true;
    this.points = new THREE.Points(geo, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 20 : 10;
    scene.add(this.points);
  }
  spawn(x, y, z, vx, vy, vz, life, size, r, g, b, opts) {
    let i;
    if (this.count < this.max) i = this.count++;
    else i = (Math.random() * this.max) | 0; // recycle a random particle when full
    const i3 = i * 3;
    this.pos[i3] = x; this.pos[i3 + 1] = y; this.pos[i3 + 2] = z;
    this.vel[i3] = vx; this.vel[i3 + 1] = vy; this.vel[i3 + 2] = vz;
    this.col[i3] = r; this.col[i3 + 1] = g; this.col[i3 + 2] = b;
    this.life[i] = life; this.maxLife[i] = life; this.baseSize[i] = size; this.size[i] = size; this.alpha[i] = 0;
    this.rot[i] = opts.rot || 0; this.rotV[i] = opts.rotV || 0; this.shape[i] = opts.shape || 0;
    this.grav[i] = opts.grav || 0; this.drag[i] = opts.drag || 0; this.grow[i] = opts.grow || 0; this.fadeIn[i] = opts.fadeIn || 0.05;
  }
  update(dt) {
    let n = this.count;
    for (let i = 0; i < n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        // swap with last
        n--;
        if (i !== n) this._copy(n, i);
        i--; continue;
      }
      const i3 = i * 3;
      const d = 1 - this.drag[i] * dt;
      this.vel[i3] *= d; this.vel[i3 + 2] *= d;
      this.vel[i3 + 1] = this.vel[i3 + 1] * d + this.grav[i] * dt;
      this.pos[i3] += this.vel[i3] * dt; this.pos[i3 + 1] += this.vel[i3 + 1] * dt; this.pos[i3 + 2] += this.vel[i3 + 2] * dt;
      this.rot[i] += this.rotV[i] * dt;
      const t = 1 - this.life[i] / this.maxLife[i];
      const age = this.maxLife[i] - this.life[i];
      const fin = Math.min(1, age / this.fadeIn[i]);
      this.alpha[i] = fin * (1 - t * t);
      this.size[i] = this.baseSize[i] * (1 + this.grow[i] * t);
    }
    this.count = n;
    this.geo.setDrawRange(0, n);
    const a = this.geo.attributes;
    a.position.needsUpdate = true; a.aColor.needsUpdate = true; a.aSize.needsUpdate = true; a.aAlpha.needsUpdate = true; a.aRot.needsUpdate = true; a.aShape.needsUpdate = true;
  }
  _copy(from, to) {
    const f3 = from * 3, t3 = to * 3;
    for (let k = 0; k < 3; k++) { this.pos[t3 + k] = this.pos[f3 + k]; this.vel[t3 + k] = this.vel[f3 + k]; this.col[t3 + k] = this.col[f3 + k]; }
    for (const arr of [this.size, this.alpha, this.rot, this.rotV, this.shape, this.life, this.maxLife, this.grav, this.drag, this.baseSize, this.grow, this.fadeIn]) arr[to] = arr[from];
  }
  clear() { this.count = 0; this.geo.setDrawRange(0, 0); }
}

const rnd = (a, b) => a + Math.random() * (b - a);
const _c = new THREE.Color();

export function createParticles(scene, renderer) {
  const solid = new Pool(scene, 1200, false);
  const glow = new Pool(scene, 1200, true);
  const size = new THREE.Vector2();

  const setColor = (hex, vary = 0) => { _c.set(hex); if (vary) { const k = 1 + rnd(-vary, vary); _c.r *= k; _c.g *= k; _c.b *= k; } return _c; };

  // Emitters: each spawns `count` particles around `at` (Vector3, world) with type-specific motion.
  const EMIT = {
    dust(at, o) { // footstep / landing puffs
      const n = o.count || 6, s = o.small ? 0.5 : 1;
      for (let i = 0; i < n; i++) {
        const c = setColor(0xc9b48a, 0.15);
        solid.spawn(at.x + rnd(-0.3, 0.3) * s, at.y + 0.05, at.z + rnd(-0.3, 0.3) * s, rnd(-1, 1) * s, rnd(0.4, 1.6) * s, rnd(-1, 1) * s + 1.5, rnd(0.35, 0.7), rnd(0.25, 0.5) * s, c.r, c.g, c.b, { grav: -1.2, drag: 2.5, grow: 2.2, rot: rnd(0, 6), rotV: rnd(-2, 2) });
      }
    },
    slide(at, o) { // dirt spray behind a slide
      const n = o.count || 10;
      for (let i = 0; i < n; i++) {
        const c = setColor(0xb8a077, 0.2);
        solid.spawn(at.x + rnd(-0.4, 0.4), at.y + 0.1, at.z + rnd(-0.2, 0.6), rnd(-1.5, 1.5), rnd(1, 3), rnd(1, 3), rnd(0.3, 0.6), rnd(0.15, 0.35), c.r, c.g, c.b, { grav: -6, drag: 1, grow: 1.5, shape: SHAPE_CHUNK, rot: rnd(0, 6), rotV: rnd(-6, 6) });
      }
    },
    sparkle(at, o) { // coin pickup glints
      const n = o.count || 6;
      for (let i = 0; i < n; i++) {
        const c = setColor(i % 3 === 0 ? 0xfff4c0 : 0xffc93a, 0.1);
        glow.spawn(at.x + rnd(-0.2, 0.2), at.y + rnd(-0.1, 0.3), at.z + rnd(-0.2, 0.2), rnd(-1.5, 1.5), rnd(1.5, 3.5), rnd(-1.5, 1.5), rnd(0.3, 0.55), rnd(0.18, 0.32), c.r, c.g, c.b, { grav: -3, drag: 1.5, grow: -0.6 });
      }
    },
    burst(at, o) { // power-up pickup: coloured ring blast
      const n = o.count || 30;
      const hex = o.type === 'shield' ? 0x66ccff : o.type === 'magnet' ? 0xff5aa0 : 0xffcc44;
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2, sp = rnd(3, 6);
        const c = setColor(hex, 0.2);
        glow.spawn(at.x, at.y + 1.0, at.z, Math.cos(a) * sp, rnd(0.5, 2.5), Math.sin(a) * sp, rnd(0.4, 0.8), rnd(0.25, 0.45), c.r, c.g, c.b, { grav: -2, drag: 3, grow: 1 });
      }
      const w = setColor(0xffffff);
      glow.spawn(at.x, at.y + 1.0, at.z, 0, 0, 0, 0.22, 0.9, w.r * 0.6, w.g * 0.6, w.b * 0.6, { grow: 1.2 });
    },
    smash(at, o) { // stone debris
      const n = o.count || 20;
      for (let i = 0; i < n; i++) {
        const c = setColor(0x8c8474, 0.3);
        solid.spawn(at.x + rnd(-0.5, 0.5), at.y + rnd(0.2, 1.4), at.z + rnd(-0.5, 0.5), rnd(-4, 4), rnd(2, 7), rnd(-4, 4), rnd(0.5, 1.1), rnd(0.15, 0.4), c.r, c.g, c.b, { grav: -14, drag: 0.5, shape: SHAPE_CHUNK, rot: rnd(0, 6), rotV: rnd(-10, 10) });
      }
      EMIT.dust(at, { count: 10 });
    },
    shieldpop(at, o) { // blue shards
      const n = o.count || 30;
      for (let i = 0; i < n; i++) {
        const a = rnd(0, Math.PI * 2), e = rnd(-0.5, 1), sp = rnd(3, 7);
        const c = setColor(0x8fdcff, 0.2);
        glow.spawn(at.x, at.y + 1.0, at.z, Math.cos(a) * sp, e * sp, Math.sin(a) * sp, rnd(0.4, 0.8), rnd(0.15, 0.35), c.r, c.g, c.b, { grav: -4, drag: 1.5, shape: SHAPE_CHUNK, rot: rnd(0, 6), rotV: rnd(-8, 8) });
      }
    },
    ember(at, o) { // fire sparks drifting upward
      const n = o.count || 4;
      for (let i = 0; i < n; i++) {
        const c = setColor(i % 4 === 0 ? 0xffe28a : 0xff7a2a, 0.25);
        glow.spawn(at.x + rnd(-0.6, 0.6), at.y + rnd(0, 0.6), at.z + rnd(-0.6, 0.6), rnd(-0.6, 0.6), rnd(1.5, 3.5), rnd(-0.6, 0.6), rnd(0.6, 1.4), rnd(0.08, 0.2), c.r, c.g, c.b, { grav: 1.2, drag: 0.8, grow: -0.7 });
      }
    },
    leaf(at, o) { // falling leaves
      const n = o.count || 3;
      for (let i = 0; i < n; i++) {
        const c = setColor(i % 3 === 0 ? 0xa9c94d : 0x4f8f3a, 0.25);
        solid.spawn(at.x + rnd(-6, 6), at.y + rnd(3, 7), at.z + rnd(-8, 8), rnd(-0.8, 0.8), rnd(-0.6, -0.2), rnd(-0.5, 0.5), rnd(2.5, 4.5), rnd(0.18, 0.3), c.r, c.g, c.b, { grav: -0.35, drag: 0.4, shape: SHAPE_LEAF, rot: rnd(0, 6), rotV: rnd(-3, 3), fadeIn: 0.5 });
      }
    },
    mist(at, o) { // waterfall spray, soft and slow
      const n = o.count || 3;
      for (let i = 0; i < n; i++) {
        const c = setColor(0xdff4ff, 0.05);
        glow.spawn(at.x + rnd(-1.5, 1.5), at.y + rnd(0, 1), at.z + rnd(-1.5, 1.5), rnd(-0.4, 0.4), rnd(0.3, 1.0), rnd(-0.4, 0.4), rnd(1.2, 2.4), rnd(0.8, 1.6), c.r * 0.35, c.g * 0.35, c.b * 0.35, { grav: -0.1, drag: 0.6, grow: 1.6, fadeIn: 0.6 });
      }
    },
    splash(at, o) {
      const n = o.count || 12;
      for (let i = 0; i < n; i++) {
        const c = setColor(0xcfefff, 0.1);
        glow.spawn(at.x + rnd(-0.3, 0.3), at.y, at.z + rnd(-0.3, 0.3), rnd(-2, 2), rnd(2, 5), rnd(-2, 2), rnd(0.4, 0.7), rnd(0.1, 0.25), c.r * 0.6, c.g * 0.6, c.b * 0.6, { grav: -9, drag: 0.5 });
      }
    },
    smoke(at, o) {
      const n = o.count || 4;
      for (let i = 0; i < n; i++) {
        const c = setColor(0x55504a, 0.2);
        solid.spawn(at.x + rnd(-0.3, 0.3), at.y + 0.2, at.z + rnd(-0.3, 0.3), rnd(-0.3, 0.3), rnd(0.8, 1.6), rnd(-0.3, 0.3), rnd(1.0, 2.0), rnd(0.4, 0.7), c.r, c.g, c.b, { grav: 0.2, drag: 0.8, grow: 2.5, rot: rnd(0, 6), rotV: rnd(-1, 1), fadeIn: 0.3 });
      }
    },
  };

  return {
    emit(type, at, opts = {}) { const fn = EMIT[type] || EMIT.dust; fn(at, opts); },
    update(dt, camera) {
      renderer.getSize(size);
      const scale = (size.y * renderer.getPixelRatio()) / (2 * Math.tan(THREE.MathUtils.degToRad(camera.fov) * 0.5));
      solid.mat.uniforms.uScale.value = scale; glow.mat.uniforms.uScale.value = scale;
      solid.update(dt); glow.update(dt);
    },
    reset() { solid.clear(); glow.clear(); },
    get count() { return solid.count + glow.count; },
  };
}
