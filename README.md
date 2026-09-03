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

## Development

```bash
npm install
npm run dev      # http://localhost:8000 with live rebuild
npm run build    # public/game.js + self-contained dist/index.html
npm test         # build + headless Playwright smoke test (screenshots in test-results/)
```

`tests/probe.mjs` drives the built game headlessly with a scripted player and prints a summary
(FPS, draw calls, triangles) plus console output; see `docs/ARCHITECTURE.md` for the module contracts,
coordinate frames and the streaming track model.
