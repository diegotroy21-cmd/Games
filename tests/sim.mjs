// Headless gameplay simulator (no rendering): runs the real Track + Player logic with a scripted
// player that reacts to hazards after a fixed delay, to measure how far players of different skill
// get and what kills them. Usage: node tests/sim.mjs [--runs 100] [--react 0.35,0.5,0.7] [--maxDist 6000]
import { Track } from '../src/track.js';
import { Player } from '../src/player.js';
import { CONFIG } from '../src/config.js';
import { Emitter } from '../src/util.js';

const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i >= 0 ? args[i + 1] : d; };
const RUNS = Number(opt('runs', 60));
const REACTS = String(opt('react', '0.3,0.45,0.6,0.8')).split(',').map(Number);
const MAX_DIST = Number(opt('maxDist', 5000));
const VERBOSE = args.includes('--verbose');

function simulate(seed, react, errRate = 0) {
  const track = new Track(seed);
  const events = new Emitter();
  const player = new Player(track, events);
  player.reset(track.root);
  const dt = 1 / 60;
  let deathInfo = null;
  events.on('die', (i) => { deathInfo = i; });
  const pending = []; // scheduled actions {t, action}
  const seen = new Set();
  let t = 0;
  let rng = seed * 31 + 7;
  const rand = () => { rng = (rng * 1664525 + 1013904223) >>> 0; return rng / 4294967296; };

  while (player.alive && player.distance < MAX_DIST && t < 600) {
    const p = player.piece;
    // Observe hazards within the reaction horizon (distance covered in `react` seconds + margin).
    const horizon = player.speed * (react + 0.45) + 2; // hazards become "visible" this far ahead
    const obsList = p.obstacles.map((o) => ({ o, d: o.u - o.depth * 0.5 - player.u }));
    if (p.end === 'straight' && p.next.straight) for (const o of p.next.straight.obstacles) obsList.push({ o, d: p.length - player.u + o.u - o.depth * 0.5 });
    for (const { o, d } of obsList) {
      if (d < 0 || d > horizon || seen.has(o.id)) continue;
      seen.add(o.id);
      // Decide the move now; execute it `react` seconds later, timed so it happens close to the obstacle.
      const arrive = d / Math.max(1, player.speed);
      // act `react` seconds after noticing, but no later than shortly before arrival
      const when = t + Math.min(react, Math.max(0, arrive - (o.action === 'jump' ? 0.2 : o.action === 'slide' ? 0.15 : 0.3)));
      const laneOverlap = () => player.lateral + 0.45 > o.vMin && player.lateral - 0.45 < o.vMax;
      if (rand() < errRate) continue; // occasional missed read
      if (o.action === 'jump') pending.push({ t: when, fn: () => { if (laneOverlap()) player.handleAction('up'); } });
      else if (o.action === 'slide') pending.push({ t: when, fn: () => { if (laneOverlap()) player.handleAction('down'); } });
      else {
        // dodge: pick the nearest free lane and swipe once per lane (a second swipe 90 ms later if needed)
        const dodge = () => {
          if (!laneOverlap()) return;
          const free = [-1, 0, 1].filter((l) => !o.lanes.includes(l));
          if (!free.length) return;
          const target = free.reduce((a, b) => Math.abs(b - player.lane) < Math.abs(a - player.lane) ? b : a);
          if (target !== player.lane) player.handleAction(target < player.lane ? 'left' : 'right');
          if (Math.abs(target - player.lane) >= 1) pending.push({ t: t + 0.09, fn: () => { if (target !== player.lane) player.handleAction(target < player.lane ? 'left' : 'right'); } });
        };
        pending.push({ t: when, fn: dodge });
      }
    }
    // Turns: react once the corner tile is within the horizon.
    if (p.end !== 'straight' && !seen.has('turn' + p.id) && p.tileStart - player.u < horizon) {
      seen.add('turn' + p.id);
      const dir = p.end === 'tee' ? (rand() < 0.5 ? 'left' : 'right') : p.end;
      const arrive = (p.tileStart - player.u) / Math.max(1, player.speed);
      pending.push({ t: t + Math.max(react, arrive + 0.05), fn: () => { if (player.piece === p) player.handleAction(dir); } });
    }
    for (let i = pending.length - 1; i >= 0; i--) if (pending[i].t <= t) { pending[i].fn(); pending.splice(i, 1); }
    player.update(dt);
    t += dt;
  }
  return { seed, react, distance: Math.floor(player.distance), alive: player.alive, death: deathInfo ? deathInfo.type : null, obstacle: deathInfo && deathInfo.obstacle ? deathInfo.obstacle.type : (deathInfo && deathInfo.type === 'hit' ? 'wall' : null), time: t, speed: player.speed };
}

for (const react of REACTS) {
  const results = [];
  for (let i = 0; i < RUNS; i++) results.push(simulate(1000 + i * 17, react));
  const dists = results.map((r) => r.distance).sort((a, b) => a - b);
  const median = dists[Math.floor(dists.length / 2)];
  const mean = dists.reduce((a, b) => a + b, 0) / dists.length;
  const causes = {};
  for (const r of results) { const k = r.alive ? 'survived' : `${r.death}:${r.obstacle || '?'}`; causes[k] = (causes[k] || 0) + 1; }
  console.log(`react ${react}s: median ${median} m, mean ${mean.toFixed(0)} m, min ${dists[0]}, max ${dists[dists.length - 1]}`);
  console.log('   causes:', Object.entries(causes).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}=${v}`).join(' '));
  if (VERBOSE) for (const r of results.slice(0, 10)) console.log('   ', JSON.stringify(r));
}
