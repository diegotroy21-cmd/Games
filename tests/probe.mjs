// Dev probe: opens the built game headless, optionally starts a run and auto-plays for N seconds,
// evaluates a JS expression against window.__game, prints console output and saves a screenshot.
//   node tests/probe.mjs --start --seconds 6 --eval "({coins: g.collectibles.count})" --shot /tmp/x.png [--seed 42] [--quality low] [--width 960 --height 600] [--keys up,left,...] [--dist <dir built with build.mjs --outdir>]
// Inside --eval, `g` is the Game instance. --auto drives the runner with a simple scripted player.
import { chromium } from 'playwright-core';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { existsSync } from 'node:fs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf('--' + name); return i >= 0 ? (args[i + 1] && !args[i + 1].startsWith('--') ? args[i + 1] : true) : def; };
const seconds = Number(opt('seconds', 3));
const evalExpr = opt('eval', null);
const shot = opt('shot', null);
const seed = opt('seed', null);
const quality = opt('quality', 'low');
const width = Number(opt('width', 960)), height = Number(opt('height', 600));
const start = !!opt('start', false);
const auto = !!opt('auto', false);
const keys = opt('keys', null);
const url = opt('url', null);
const dist = opt('dist', null);
const exe = process.env.CHROME_PATH || ['/opt/pw-browsers/chromium-1194/chrome-linux/chrome'].find(existsSync);

const browser = await chromium.launch({ executablePath: exe, args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const page = await browser.newPage({ viewport: { width, height } });
const logs = [];
page.on('pageerror', (e) => logs.push('[pageerror] ' + e.message + (e.stack ? '\n  ' + String(e.stack).split('\n').slice(0, 4).join('\n  ') : '')));
page.on('console', (m) => logs.push('[' + m.type() + '] ' + m.text().slice(0, 600)));
const base = url || pathToFileURL(resolve(root, dist ? resolve(dist, 'index.html') : 'dist/index.html')).href;
await page.goto(base + (base.includes('?') ? '&' : '?') + 'quality=' + quality + (seed ? '&seed=' + seed : ''));
await page.waitForFunction(() => window.__game && window.__game.state === 'menu', null, { timeout: 20000 });
if (start) {
  await page.evaluate(() => window.__game.startRun());
  await page.waitForFunction(() => window.__game.state === 'running', null, { timeout: 5000 });
}
if (keys) {
  for (const k of keys.split(',')) {
    const map = { up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' };
    await page.keyboard.press(map[k] || k);
    await page.waitForTimeout(250);
  }
}
if (auto) {
  await page.evaluate(async (secs) => {
    const g = window.__game; const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const t0 = performance.now();
    while (g.state === 'running' && performance.now() - t0 < secs * 1000) {
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
  }, seconds);
} else {
  await page.waitForTimeout(seconds * 1000);
}
if (evalExpr) {
  const out = await page.evaluate((expr) => { const g = window.__game; try { return JSON.stringify(eval(expr), null, 1); } catch (e) { return 'EVAL ERROR: ' + e.message; } }, evalExpr);
  console.log('eval:', out);
}
const summary = await page.evaluate(() => { const g = window.__game; return { state: g.state, fps: g.fps && g.fps.toFixed(1), distance: Math.floor(g.run.distance), score: Math.floor(g.run.score), coins: g.run.coins, deathType: g.run.deathType, pieces: g.track.pieces.size, drawCalls: g.renderer.info.render.calls, triangles: g.renderer.info.render.triangles }; });
console.log('summary:', JSON.stringify(summary));
if (shot) { await page.screenshot({ path: shot }); console.log('screenshot:', shot); }
await browser.close();
if (logs.length) console.log('console:\n' + logs.join('\n'));
