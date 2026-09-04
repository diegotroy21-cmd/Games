# Relic Rush

A fast-paced, third-person 3D endless runner. You stole the golden idol from an ancient jungle temple
and its demonic monkey guardians want it back. Sprint through crumbling temple halls, jungle paths,
cliff ledges and rope bridges for as long as you can.

**Play:** open `dist/index.html` in any modern browser (desktop or mobile), or run the dev server (below).

## Controls

| Action | Touch | Keyboard |
| --- | --- | --- |
| Change lane / take a turn | swipe left / right | ← → or A / D |
| Jump over gaps, roots, fire | swipe up | ↑, W or Space |
| Slide under low beams and branches | swipe down | ↓ or S |
| Pause | – | P or Esc |
| Mute | – | M |

Swipe **toward** a corner while you are on the corner tile to turn (a little early is fine: the turn is
queued). Swiping the wrong way at a corner sends you off the edge; missing the turn runs you into the wall.
Small obstacles (roots, logs, boulders, branches) only make you **stumble**, which lets the monkeys catch
up; stumble twice within a few seconds and they get you. Fire, gaps, pillars, lintels and rubble are fatal.

## Features

* Procedurally generated, endless track: straights, left/right corners and T-junctions across five biomes
  (temple, jungle, cliff, rope bridge, ruins) with difficulty and speed that ramp with distance.
* Jump / slide / dodge obstacle vocabulary with combo hazards, gaps and fire.
* Coins in lines, waves and jump arcs; power-ups: **Shield** (absorbs a hit), **Coin Magnet**, **Boost**
  (faster, invulnerable, auto-jump / auto-turn, double multiplier).
* Score multiplier grows with distance; coins buy persistent upgrades in the shop.
* Fully procedural art and audio: no downloaded assets. Stylized low-poly world, bloom, wind sway,
  animated fire and water, synthesized sound effects and an adaptive tribal soundtrack.

## Options

* **Settings** (title screen) and the **pause** menu: sound on/off, quality (Auto / Low / Medium / High,
  applied live), replay the tutorial hints, quit to title.
* The game adapts its render resolution automatically if the frame rate drops.
* Progress (best score, coin bank, upgrades, tutorial state) is stored in `localStorage`.

## Development

```bash
npm install
npm run dev      # http://localhost:8000 with live rebuild
npm run build    # public/game.js + self-contained dist/index.html
npm test         # build + headless Playwright smoke test (screenshots in test-results/)
```

Headless tooling (all use the bundled Chromium via Playwright, software-rendered):

* `node tests/probe.mjs --start --auto --seconds 15 --seed 7 --shot out.png` drives the built game with a
  scripted player and prints FPS, draw calls, triangles and console output. `--teleport cliff` jumps to a
  biome, `--pre`/`--prefile` run JavaScript against the game right after the run starts.
* `node tests/sim.mjs --runs 60 --react 0.45,0.7` runs the real track and runner logic without rendering
  to measure how far players with a given reaction time get and what kills them.
* `node tests/nanhunt.mjs --seconds 40` samples every rendered frame and counts white or black frames.

See `docs/ARCHITECTURE.md` for the module contracts, coordinate frames and the streaming track model.
