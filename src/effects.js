// Post-processing: bloom for coins/fire/glow, a speed vignette, and screen flashes.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { damp } from './util.js';

const VignetteShader = {
  uniforms: {
    tDiffuse: { value: null },
    uSpeed: { value: 0 },        // 0..1 speed lines / vignette intensity
    uFlash: { value: new THREE.Vector4(1, 1, 1, 0) }, // rgb + strength
    uTime: { value: 0 },
    uAspect: { value: 1 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform sampler2D tDiffuse; uniform float uSpeed; uniform vec4 uFlash; uniform float uTime; uniform float uAspect;
    varying vec2 vUv;
    float hash(float x){ return fract(sin(x * 12.9898) * 43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec2 d = vUv - 0.5; d.x *= uAspect;
      float r = length(d);
      // vignette grows with speed
      float vig = smoothstep(0.55, 1.15 - uSpeed * 0.25, r);
      c.rgb *= 1.0 - vig * (0.35 + 0.35 * uSpeed);
      // radial speed streaks near the screen edges
      if (uSpeed > 0.02) {
        float ang = atan(d.y, d.x);
        float streak = hash(floor(ang * 40.0)) ;
        float s = step(0.72, streak) * smoothstep(0.35, 0.75, r) * (0.5 + 0.5 * sin(uTime * 30.0 + streak * 60.0 + r * 40.0));
        c.rgb += vec3(1.0, 0.95, 0.85) * s * uSpeed * 0.28;
      }
      c.rgb = mix(c.rgb, uFlash.rgb, uFlash.a);
      gl_FragColor = c;
    }`,
};

export function createEffects(renderer, scene, camera, quality = 'high') {
  const size = renderer.getSize(new THREE.Vector2());
  let composer = null, bloom = null, vignette = null, output = null, renderPass = null;
  let speed = 0, targetSpeed = 0;
  const flash = new THREE.Vector4(1, 1, 1, 0);
  let time = 0;

  function build() {
    composer = new EffectComposer(renderer);
    renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
    bloom = null;
    if (quality !== 'low') {
      bloom = new UnrealBloomPass(new THREE.Vector2(size.x, size.y), 0.42, 0.55, 0.82);
      composer.addPass(bloom);
    }
    vignette = new ShaderPass(VignetteShader);
    vignette.uniforms.uAspect.value = size.x / size.y;
    composer.addPass(vignette);
    output = new OutputPass();
    composer.addPass(output);
  }
  build();

  return {
    get quality() { return quality; },
    setQuality(q) {
      quality = q;
      // passes own render targets and materials; dispose them before the composer
      for (const pass of [renderPass, bloom, vignette, output]) if (pass && pass.dispose) pass.dispose();
      composer.dispose();
      build();
      this.resize();
    },
    resize() {
      renderer.getSize(size);
      composer.setSize(size.x, size.y);
      composer.setPixelRatio(renderer.getPixelRatio());
      if (bloom) bloom.resolution.set(size.x, size.y);
      if (vignette) vignette.uniforms.uAspect.value = size.x / size.y;
    },
    setSpeed(s) { targetSpeed = s; },
    flash(color, strength = 0.6) { flash.set(((color >> 16) & 255) / 255, ((color >> 8) & 255) / 255, (color & 255) / 255, strength); },
    render(dt) {
      time += dt;
      speed = damp(speed, targetSpeed, 4, dt);
      flash.w = Math.max(0, flash.w - dt * 2.2);
      vignette.uniforms.uSpeed.value = speed;
      vignette.uniforms.uTime.value = time;
      vignette.uniforms.uFlash.value.copy(flash);
      composer.render(dt);
    },
  };
}
