// Shared animated materials: wind sway injection, spinning coins, flames, water and waterfalls.
// All time-driven uniforms are updated once per frame via tickMaterials(t).
import * as THREE from 'three';

const shared = { time: { value: 0 }, wind: { value: 1.0 } };
const tracked = new Set();
export function tickMaterials(t, windStrength = 1) {
  shared.time.value = t;
  shared.wind.value = windStrength;
  for (const m of tracked) { if (m.uniforms && m.uniforms.uTime) m.uniforms.uTime.value = t; }
}

// Injects wind sway into any MeshStandard/Lambert material using the per-vertex `aSway` attribute.
export function applyWindSway(material) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = shared.time;
    shader.uniforms.uWind = shared.wind;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\nattribute float aSway;\nuniform float uTime;\nuniform float uWind;`)
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec3 swayWorld = (modelMatrix * instanceMatrix * vec4(position, 1.0)).xyz;
        #else
          vec3 swayWorld = (modelMatrix * vec4(position, 1.0)).xyz;
        #endif
        float swayPhase = uTime * 1.7 + swayWorld.x * 0.35 + swayWorld.z * 0.27;
        float swayAmt = aSway * uWind * 0.18;
        transformed.x += sin(swayPhase) * swayAmt + sin(swayPhase * 2.3 + 1.7) * swayAmt * 0.35;
        transformed.z += cos(swayPhase * 0.8 + 0.6) * swayAmt * 0.7;
        transformed.y -= abs(sin(swayPhase)) * swayAmt * 0.15;`);
  };
  material.customProgramCacheKey = () => 'windsway';
  return material;
}

// Spins geometry around its local Y in the vertex shader (used by instanced coins: no per-frame matrix updates).
export function applySpin(material, speed = 3.0) {
  material.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = shared.time;
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', `#include <common>\nuniform float uTime;`)
      // beginnormal_vertex runs before begin_vertex in three's pipeline, so rotate the normal here first.
      .replace('#include <beginnormal_vertex>', `
        float spinPhase = uTime * ${speed.toFixed(2)};
        #ifdef USE_INSTANCING
          spinPhase += instanceMatrix[3].x * 0.9 + instanceMatrix[3].z * 0.7;
        #endif
        float spinC = cos(spinPhase), spinS = sin(spinPhase);
        vec3 objectNormal = vec3(normal.x * spinC - normal.z * spinS, normal.y, normal.x * spinS + normal.z * spinC);
        #ifdef USE_TANGENT
          vec3 objectTangent = vec3(tangent.xyz);
        #endif`)
      .replace('#include <begin_vertex>', `
        vec3 transformed = vec3(position.x * spinC - position.z * spinS, position.y, position.x * spinS + position.z * spinC);`);
  };
  material.customProgramCacheKey = () => 'spin' + speed;
  return material;
}

// Stylized flame: a displaced cone with an animated vertical gradient. Additive + emissive so bloom picks it up.
export function createFlameMaterial({ color1 = 0xffd24a, color2 = 0xff5a1a, color3 = 0x4a0a00 } = {}) {
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uC1: { value: new THREE.Color(color1) },
      uC2: { value: new THREE.Color(color2) },
      uC3: { value: new THREE.Color(color3) },
    },
    vertexShader: `
      uniform float uTime;
      varying float vY;
      varying float vFlick;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main(){
        vY = uv.y;
        vec3 p = position;
        #ifdef USE_INSTANCING
          vec3 wp = (modelMatrix * instanceMatrix * vec4(position,1.0)).xyz;
        #else
          vec3 wp = (modelMatrix * vec4(position,1.0)).xyz;
        #endif
        float seed = hash(floor(wp.xz * 3.1));
        float t = uTime * 6.0 + seed * 20.0;
        float w = uv.y * uv.y;
        p.x += sin(t + p.y * 4.0) * 0.18 * w;
        p.z += cos(t * 1.3 + p.y * 3.0) * 0.15 * w;
        p.y *= 0.85 + 0.25 * sin(t * 1.7 + seed * 6.0) * w + 0.12 * sin(t * 4.1);
        vFlick = 0.85 + 0.15 * sin(t * 3.0);
        #ifdef USE_INSTANCING
          gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0);
        #else
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        #endif
      }`,
    fragmentShader: `
      uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;
      varying float vY; varying float vFlick;
      void main(){
        vec3 c = mix(uC1, uC2, smoothstep(0.05, 0.6, vY));
        c = mix(c, uC3, smoothstep(0.55, 1.0, vY));
        float a = (1.0 - vY) * 0.95 + 0.05;
        gl_FragColor = vec4(c * 1.9 * vFlick, a);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    toneMapped: false,
  });
  tracked.add(m);
  return m;
}

// Flat water surface with animated procedural ripples and a fresnel-ish rim.
export function createWaterMaterial({ color = 0x1f6f7a, deep = 0x0b2e3a, foam = 0xbfe9ee } = {}) {
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uDeep: { value: new THREE.Color(deep) },
      uFoam: { value: new THREE.Color(foam) },
      uFogColor: { value: new THREE.Color(0xbfd8c8) },
      uFogNear: { value: 40 }, uFogFar: { value: 160 },
    },
    vertexShader: `
      varying vec3 vW; varying vec2 vUv;
      void main(){ vUv = uv; vec4 wp = modelMatrix * vec4(position,1.0); vW = wp.xyz; gl_Position = projectionMatrix * viewMatrix * wp; }`,
    fragmentShader: `
      uniform float uTime; uniform vec3 uColor; uniform vec3 uDeep; uniform vec3 uFoam;
      uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar;
      varying vec3 vW; varying vec2 vUv;
      float n(vec2 p){ return sin(p.x) * sin(p.y); }
      void main(){
        vec2 p = vW.xz * 0.35;
        float t = uTime;
        float r = n(p * 1.3 + vec2(t * 0.6, t * 0.4)) * 0.5 + n(p * 2.7 - vec2(t * 0.9, t * 0.3)) * 0.3 + n(p * 5.1 + vec2(t * 1.5, -t)) * 0.2;
        vec3 c = mix(uDeep, uColor, 0.55 + 0.45 * r);
        float foam = smoothstep(0.62, 0.9, r);
        c = mix(c, uFoam, foam * 0.5);
        c += vec3(0.08) * pow(max(0.0, r), 3.0);
        float dist = gl_FragCoord.z / gl_FragCoord.w;
        float f = smoothstep(uFogNear, uFogFar, dist);
        gl_FragColor = vec4(mix(c, uFogColor, f), 0.9);
      }`,
    transparent: true,
    depthWrite: false,
  });
  tracked.add(m);
  return m;
}

// Waterfall sheet: scrolling streaks, brighter at the top and misty at the bottom.
export function createWaterfallMaterial({ color = 0xd9f4ff, tint = 0x5aa9c8 } = {}) {
  const m = new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new THREE.Color(color) },
      uTint: { value: new THREE.Color(tint) },
      uFogColor: { value: new THREE.Color(0xbfd8c8) },
      uFogNear: { value: 40 }, uFogFar: { value: 160 },
    },
    vertexShader: `
      varying vec2 vUv; varying float vDist;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.0); vDist = -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `
      uniform float uTime; uniform vec3 uColor; uniform vec3 uTint;
      uniform vec3 uFogColor; uniform float uFogNear; uniform float uFogFar;
      varying vec2 vUv; varying float vDist;
      float hash(float x){ return fract(sin(x * 91.17) * 43758.5453); }
      void main(){
        float speed = 1.6;
        float y = vUv.y + uTime * speed;
        float col = floor(vUv.x * 18.0);
        float streak = 0.5 + 0.5 * sin((y * 9.0 + hash(col) * 6.28) * 3.14159);
        float streak2 = 0.5 + 0.5 * sin((y * 21.0 + hash(col + 7.0) * 6.28) * 3.14159 + vUv.x * 30.0);
        float s = streak * 0.6 + streak2 * 0.4;
        float edge = smoothstep(0.0, 0.08, vUv.x) * smoothstep(1.0, 0.92, vUv.x);
        float bottom = smoothstep(0.0, 0.25, vUv.y);
        float alpha = (0.35 + 0.55 * s) * edge * mix(0.35, 1.0, bottom);
        vec3 c = mix(uTint, uColor, s * 0.9 + 0.1);
        float f = smoothstep(uFogNear, uFogFar, vDist);
        gl_FragColor = vec4(mix(c, uFogColor, f * 0.8), alpha);
      }`,
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  });
  tracked.add(m);
  return m;
}

// Soft glowing halo for power-ups / shield bubble (fresnel).
export function createGlowMaterial(color = 0x66ccff, power = 2.0, intensity = 1.6) {
  const m = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uColor: { value: new THREE.Color(color) }, uPower: { value: power }, uInt: { value: intensity } },
    vertexShader: `
      varying vec3 vN; varying vec3 vV;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `
      uniform vec3 uColor; uniform float uPower; uniform float uInt; uniform float uTime;
      varying vec3 vN; varying vec3 vV;
      void main(){ float f = pow(1.0 - abs(dot(vN, vV)), uPower); float pulse = 0.85 + 0.15 * sin(uTime * 5.0); gl_FragColor = vec4(uColor * uInt * pulse, f * 0.9 + 0.05); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, toneMapped: false,
  });
  tracked.add(m);
  return m;
}

export function setFxFog(color, near, far) {
  for (const m of tracked) {
    if (m.uniforms.uFogColor) { m.uniforms.uFogColor.value.set(color); m.uniforms.uFogNear.value = near; m.uniforms.uFogFar.value = far; }
  }
}
export function untrackMaterial(m) { tracked.delete(m); }
