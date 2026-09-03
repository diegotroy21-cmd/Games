import * as THREE from 'three';
import { Game } from './game.js';
import { Input } from './input.js';
import { isMobile } from './util.js';
import { loadSave } from './save.js';

function pickQuality() {
  const params = new URLSearchParams(location.search);
  if (params.get('quality')) return params.get('quality');
  const s = loadSave().settings.quality;
  if (s && s !== 'auto') return s;
  const mobile = isMobile();
  const cores = navigator.hardwareConcurrency || 4;
  if (mobile) return cores >= 6 ? 'medium' : 'low';
  return 'high';
}

function boot() {
  const canvas = document.getElementById('game');
  const quality = pickQuality();
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: quality === 'high', powerPreference: 'high-performance', stencil: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, quality === 'high' ? 2 : quality === 'medium' ? 1.5 : 1));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  renderer.shadowMap.enabled = quality !== 'low';
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.info.autoReset = false; // reset once per frame so draw-call stats cover all passes

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(62, window.innerWidth / window.innerHeight, 0.1, 400);
  const input = new Input(document.getElementById('touch'));
  const game = new Game({ renderer, scene, camera, input, quality });
  window.__game = game; // test hook

  const onResize = () => {
    const w = window.innerWidth, h = window.innerHeight;
    camera.aspect = w / h; camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
    game.resize();
  };
  window.addEventListener('resize', onResize);
  onResize();

  let last = performance.now();
  let frames = 0, fpsStart = last;
  function frame(now) {
    requestAnimationFrame(frame);
    let dt = (now - last) / 1000; last = now;
    if (dt > 0.05) dt = 0.05; // clamp hitches so physics stays stable
    renderer.info.reset();
    if (game.state === 'paused' || game.state === 'shop') { game.render(dt); return; }
    game.update(dt);
    game.render(dt);
    frames++;
    if (now - fpsStart >= 1000) { game.fps = frames * 1000 / (now - fpsStart); frames = 0; fpsStart = now; }
  }
  requestAnimationFrame(frame);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
