// Statistical hunt for NaN/white-out frames: runs the game headless at high quality, copies the WebGL
// canvas into a 2D canvas after every render and counts frames that are mostly white or black.
//   node tests/nanhunt.mjs --seconds 30 [--seed 21] [--hide particles,flames,glows,character,monkeys,coins,water,falls,mist] [--teleport tee]
import { chromium } from 'playwright-core';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const seconds = Number(opt('seconds', 30));
const seed = opt('seed', '21');
const hide = String(opt('hide', '')).split(',').filter(Boolean);
const teleport = opt('teleport', null);
const dist = opt('dist', 'dist');
const exe = process.env.CHROME_PATH || ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find(existsSync);

const browser = await chromium.launch({ executablePath: exe, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage({ viewport: { width: 320, height: 200 } });
const logs = [];
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message));
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') logs.push('[' + m.type() + '] ' + m.text().slice(0, 300)); });
await page.goto(pathToFileURL(resolve(root, dist, 'index.html')).href + '?quality=high&seed=' + seed);
await page.waitForFunction(() => window.__game && window.__game.state === 'menu', null, { timeout: 30000 });
await page.evaluate(({ hide, teleport }) => {
  const g = window.__game;
  g.startRun();
  if (teleport) {
    let p = g.track.root, n = 0; const chain = [p];
    while (p.end !== teleport && p.kind !== teleport && n < 150) { g.track.ensureAhead(p, 0, Infinity); const nx = p.next.straight || p.next.left || p.next.right; if (!nx) break; p = nx; chain.push(p); n++; }
    for (let i = 0; i + 1 < chain.length; i++) g.track.advance(chain[i], chain[i + 1]);
    g.player.piece = p; g.player.u = p.contentStart + 2; g.player.lane = 0; g.player.lateral = 0; g.player.updateWorld();
    g._headingAngle = p.angle; g.followCam.reset(p.angle, g._computeAnchor()); g.track.ensureAhead(p, g.player.u, Infinity);
  }
  const isFlame = (o) => o.material && o.material.uniforms && o.material.uniforms.uC1;
  const isGlow = (o) => o.material && o.material.map && o.material.blending === 2 && o.geometry && (o.geometry.type === 'PlaneGeometry' || o.geometry.type === 'CircleGeometry');
  const isWater = (o) => o.material && o.material.uniforms && o.material.uniforms.uFoam;
  const isFall = (o) => o.material && o.material.uniforms && o.material.uniforms.uTint;
  window.__applyHide = () => {
    g.scene.traverse((o) => {
      if (!o.isMesh && !o.isPoints) return;
      if (hide.includes('flames') && isFlame(o)) o.visible = false;
      if (hide.includes('glows') && isGlow(o)) o.visible = false;
      if (hide.includes('water') && isWater(o)) o.visible = false;
      if (hide.includes('falls') && isFall(o)) o.visible = false;
    });
    if (hide.includes('particles')) g.particles.update = () => {};
    if (hide.includes('particles')) g.scene.traverse((o) => { if (o.isPoints) o.visible = false; });
    if (hide.includes('character')) g.character.group.visible = false;
    if (hide.includes('monkeys')) g.scene.traverse((o) => { if (o.userData && o.userData.monkeys) o.visible = false; });
    if (hide.includes('coins')) g.collectibles.mesh.visible = false;
  };
  window.__applyHide();
  // frame sampler
  const src = g.renderer.domElement;
  const c2 = document.createElement('canvas'); c2.width = 80; c2.height = 50;
  const ctx = c2.getContext('2d', { willReadFrequently: true });
  window.__stats = { frames: 0, white: 0, black: 0, samples: [] };
  const origRender = g.render.bind(g);
  g.render = (dt) => {
    origRender(dt);
    window.__applyHide();
    ctx.drawImage(src, 0, 0, 80, 50);
    const d = ctx.getImageData(0, 0, 80, 50).data;
    let w = 0, b = 0;
    for (let i = 0; i < d.length; i += 4) { const r = d[i], gg = d[i + 1], bb = d[i + 2]; if (r > 245 && gg > 245 && bb > 245) w++; else if (r < 8 && gg < 8 && bb < 8) b++; }
    const n = d.length / 4;
    const s = window.__stats; s.frames++;
    if (w / n > 0.6) s.white++; if (b / n > 0.6) s.black++;
    if (s.samples.length < 400) s.samples.push([+(w / n).toFixed(2), +(b / n).toFixed(2), +g.time.toFixed(2)]);
  };
  // auto-player
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  (async () => {
    while (g.state === 'running') {
      const p = g.player, piece = p.piece;
      if (piece.end !== 'straight' && p.u >= piece.tileStart - 1.0 && !p.queuedTurn) p.handleAction(piece.end === 'tee' ? 'left' : piece.end);
      const look = p.speed * 0.3;
      for (const o of piece.obstacles) {
        const d = o.u - o.depth * 0.5 - p.u; if (d < 0 || d > look) continue;
        if (!(p.lateral + 0.45 > o.vMin && p.lateral - 0.45 < o.vMax)) continue;
        if (o.action === 'jump') { if (p.state !== 'jump') p.handleAction('up'); }
        else if (o.action === 'slide') { if (p.state !== 'slide') p.handleAction('down'); }
        else { const free = [-1, 0, 1].filter((l) => !o.lanes.includes(l)); if (free.length) { const t = free.reduce((a, b) => Math.abs(b - p.lane) < Math.abs(a - p.lane) ? b : a); if (t !== p.lane) p.handleAction(t < p.lane ? 'left' : 'right'); } }
        break;
      }
      await sleep(30);
    }
  })();
}, { hide, teleport });
await page.waitForTimeout(seconds * 1000);
const stats = await page.evaluate(() => { const s = window.__stats; const g = window.__game; return { frames: s.frames, white: s.white, black: s.black, state: g.state, distance: Math.floor(g.run.distance), kind: g.player.piece.kind, firstBad: s.samples.find((x) => x[0] > 0.6 || x[1] > 0.6) || null }; });
console.log(`hide=[${hide.join(',')}] teleport=${teleport || '-'} ->`, JSON.stringify(stats));
if (logs.length) console.log('console:', logs.slice(0, 5).join(' | '));
await browser.close();
