// Headless smoke test: loads dist/index.html, starts a run, drives it with keys, checks for errors.
import { chromium } from 'playwright-core';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync, mkdirSync } from 'node:fs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = process.env.SHOT_DIR || resolve(root, 'test-results');
mkdirSync(outDir, { recursive: true });
const exe = process.env.CHROME_PATH || ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find(existsSync);

const browser = await chromium.launch({ executablePath: exe, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage({ viewport: { width: 960, height: 600 } });
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') errors.push(m.type() + ': ' + m.text()); });

await page.goto(pathToFileURL(resolve(root, 'dist/index.html')).href + '?quality=' + (process.env.QUALITY || 'low') + (process.env.SEED ? '&seed=' + process.env.SEED : ''));
await page.waitForFunction(() => window.__game && window.__game.state === 'menu', null, { timeout: 20000 });
await page.waitForTimeout(800);
await page.screenshot({ path: resolve(outDir, '01-menu.png') });

await page.keyboard.press('Enter');
await page.waitForFunction(() => window.__game.state === 'running', null, { timeout: 5000 });
await page.waitForTimeout(1200);
await page.screenshot({ path: resolve(outDir, '02-running.png') });

// Drive with a scripted "smart" player using the test hook: react to upcoming obstacles/turns.
const stats = await page.evaluate(async () => {
  const g = window.__game;
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const t0 = performance.now();
  let actions = 0;
  while (g.state === 'running' && performance.now() - t0 < 25000) {
    const p = g.player;
    const piece = p.piece;
    // turns
    if (piece.end !== 'straight' && p.u >= piece.tileStart - 1.0 && !p.queuedTurn) {
      const dir = piece.end === 'tee' ? 'left' : piece.end;
      p.handleAction(dir); actions++;
    }
    // obstacles within reaction distance
    const look = p.speed * 0.3;
    for (const o of piece.obstacles) {
      const d = o.u - o.depth * 0.5 - p.u;
      if (d < 0 || d > look) continue;
      const inLane = p.lateral + 0.45 > o.vMin && p.lateral - 0.45 < o.vMax;
      if (!inLane) continue;
      if (o.action === 'jump') { if (p.state !== 'jump') { p.handleAction('up'); actions++; } }
      else if (o.action === 'slide') { if (p.state !== 'slide') { p.handleAction('down'); actions++; } }
      else { const free = [-1, 0, 1].filter((l) => !o.lanes.includes(l)); if (free.length) { const target = free.reduce((a, b) => Math.abs(b - p.lane) < Math.abs(a - p.lane) ? b : a); if (target !== p.lane) { p.handleAction(target < p.lane ? 'left' : 'right'); actions++; } } }
      break;
    }
    await sleep(40);
  }
  return { state: g.state, distance: Math.floor(g.run.distance), score: Math.floor(g.run.score), coins: g.run.coins, deathType: g.run.deathType, actions, fps: g.fps, pieces: g.track.pieces.size, speed: g.player.speed.toFixed(1) };
});
await page.screenshot({ path: resolve(outDir, '03-late.png') });
console.log('run stats:', JSON.stringify(stats));

if (stats.state === 'running') {
  // force a death to exercise the game-over path
  await page.evaluate(() => window.__game.player._die('hit'));
}
await page.waitForFunction(() => window.__game.state === 'dead', null, { timeout: 8000 });
await page.waitForTimeout(400);
await page.screenshot({ path: resolve(outDir, '04-gameover.png') });

// restart and run a second time briefly
await page.keyboard.press('Enter');
await page.waitForFunction(() => window.__game.state === 'running', null, { timeout: 5000 });
await page.waitForTimeout(1500);
const second = await page.evaluate(() => ({ state: window.__game.state, distance: Math.floor(window.__game.run.distance) }));
console.log('second run:', JSON.stringify(second));

await browser.close();
const fatal = errors.filter((e) => !/deprecat|GPU stall|swiftshader|AudioContext/i.test(e));
if (fatal.length) { console.error('Errors:\n' + fatal.join('\n')); process.exit(1); }
if (stats.distance < 30) { console.error('Run did not progress'); process.exit(1); }
console.log('smoke test passed; screenshots in', outDir);
