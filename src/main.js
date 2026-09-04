import * as THREE from 'three';
import { Game } from './game.js';
import { Input } from './input.js';
import { isMobile } from './util.js';
import { loadSave } from './save.js';

function autoQuality() {
  const mobile = isMobile();
  const cores = navigator.hardwareConcurrency || 4;
  if (mobile) return cores >= 6 ? 'medium' : 'low';
  return 'high';
}
function pickQuality() {
  const params = new URLSearchParams(location.search);
  if (params.get('quality')) return params.get('quality');
  const s = loadSave().settings.quality;
  if (s && s !== 'auto') return s;
  return autoQuality();
}
const ratioFor = (q) => Math.min(window.devicePixelRatio || 1, q === 'high' ? 2 : q === 'medium' ? 1.5 : 1);

function boot() {
  const canvas = document.getElementById('game');
  const quality = pickQuality();
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: quality === 'high', powerPreference: 'high-performance', stencil: false });
  renderer.setPixelRatio(ratioFor(quality));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.shadowMap.enabled = quality !== 'low';
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.info.autoReset = false; // reset once per frame so draw-call stats cover all passes

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 400);
  const input = new Input(document.getElementById('touch'));
  const game = new Game({ renderer, scene, camera, input, quality });
  window.__game = game; // test hook
  game.resolveAutoQuality = autoQuality;

  const onResize = () => {
    const w = window.innerWidth, h = window.innerHeight;
    camera.aspect = w / h; camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    game.resize();
  };
  window.addEventListener('resize', onResize);
  onResize();

  // Adaptive resolution: if the device cannot hold a smooth frame rate, step the pixel ratio down
  // (never below 0.75); step back up when there is headroom for a while.
  let maxRatio = renderer.getPixelRatio();
  let ratio = maxRatio, slowSeconds = 0, fastSeconds = 0;
  game.events.on('quality', (q) => { maxRatio = ratioFor(q); ratio = maxRatio; renderer.setPixelRatio(ratio); onResize(); });
  function adaptResolution(fps) {
    if (fps < 42 && ratio > 0.75) { slowSeconds++; fastSeconds = 0; }
    else if (fps > 57 && ratio < maxRatio) { fastSeconds++; slowSeconds = 0; }
    else { slowSeconds = 0; fastSeconds = 0; }
    if (slowSeconds >= 3) { ratio = Math.max(0.75, ratio - 0.25); slowSeconds = 0; }
    else if (fastSeconds >= 12) { ratio = Math.min(maxRatio, ratio + 0.25); fastSeconds = 0; }
    else return;
    renderer.setPixelRatio(ratio);
    onResize();
  }

  let last = null;
  let frames = 0, fpsStart = performance.now();
  function frame(now) {
    requestAnimationFrame(frame);
    // rAF timestamps can lag performance.now() (notably on the first frame), so clamp dt to [0, 50 ms]:
    // a negative dt would flip every exponential smoothing into runaway growth.
    let dt = last === null ? 1 / 60 : (now - last) / 1000; last = now;
    if (dt < 0) dt = 0;
    if (dt > 0.05) dt = 0.05; // clamp hitches so physics stays stable
    renderer.info.reset();
    if (game.state === 'paused' || game.state === 'shop') { game.render(dt); return; }
    game.update(dt);
    game.render(dt);
    frames++;
    if (now - fpsStart >= 1000) {
      game.fps = frames * 1000 / (now - fpsStart); frames = 0; fpsStart = now;
      if (game.state === 'running' && !window.__noAdapt) adaptResolution(game.fps);
    }
  }
  requestAnimationFrame(frame);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
