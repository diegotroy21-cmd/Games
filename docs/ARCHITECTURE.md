# Relic Rush — architecture and module contracts

A fast-paced third-person 3D endless runner (three.js, no build-time assets: everything is procedural
geometry, shaders and WebAudio synthesis). One bundle (`npm run build` → `dist/index.html`, fully
self-contained) plus a dev server (`npm run dev` → http://localhost:8000).

## Coordinate frames

* World: three.js right-handed, +Y up. Heading `h` ∈ {0,1,2,3}; angle = h·π/2 about +Y; heading 0
  runs toward −Z. `headingForward(h)`, `headingRight(h)` in `src/util.js`.
* Piece-local (used by every per-piece builder): **x = v (lateral, +x = runner's right), y = up,
  z = −u (forward is −Z)**. `piece.visual` is a `THREE.Group` positioned at `piece.origin` and rotated
  by `piece.angle`, so builders never need world coordinates.
* Lanes: `CONFIG.laneWidth = 2`, lanes at v = −2, 0, +2. `CONFIG.trackWidth = W = 6` is the walkable
  width and also the size of a square corner tile.
* Track distance u: `piece.contentStart` (0, or W/2 = 3 for a piece following a corner: its origin is
  the corner-tile centre, the tile itself belongs to the previous piece). Content (floor, walls, props)
  of a post-turn piece must start at u = contentStart; the previous piece draws the tile.
* Corner tile: pieces with `end !== 'straight'` own the tile occupying u ∈ [length − W, length],
  v ∈ [−W/2, W/2]. `end` is `'left'`, `'right'` or `'tee'`. The far side (u = length) is a wall; the
  closed side of a single turn is a wall; open sides continue as the next piece's floor. A missed turn
  crashes the runner into the far wall at u = length − CONFIG.turnWallMargin.

## Piece data (`src/track.js`)

```js
piece = {
  id, kind: 'temple'|'jungle'|'cliff'|'bridge'|'ruins', kindRun, safe (first runway piece),
  origin: Vector3, heading, angle, fwd: Vector3, right: Vector3,
  startDistance, length, contentStart, end: 'straight'|'left'|'right'|'tee', tileStart (= length − W or Infinity),
  obstacles: [{ id, type, u, lanes:[..], vMin, vMax, action:'jump'|'slide'|'dodge', severity:'stumble'|'kill'|'fall',
                height, depth, hit, destroyed, visual (Object3D set by the game), bridge?, plank? }],
  coins: [{ u, v, y, taken }], powerups: [{ id, type:'magnet'|'shield'|'boost', u, v, y, taken }],
  seed (int, use mulberry32(seed) for deterministic decoration), difficulty (0..1),
  side: { left: 'wall'|'cliffwall'|'jungle'|'open'|'drop', right: ... },   // what lies beside the path
  prev, next: { straight?|left?|right? }, visual: Group|null,
}
```
Obstacle types and semantics: see `OBSTACLE_TYPES` in `src/track.js`. `gap` obstacles are holes in the
floor spanning all lanes for `depth` metres centred on `u`: **the scenery floor builder must cut them out**
(the obstacle builder returns null for gaps). On `bridge` pieces gaps are missing planks.

## Module contracts (each file exports exactly these; the game calls them as described)

### `src/character.js` — `createCharacter()`
Returns `{ group, height, setState(name, arg), reset(), update(dt, ctx) }`.
`group` is placed by the game every frame at the runner's feet (world) with `rotation.y` = heading;
the model faces local −Z. `setState` is called on events: `'run'|'jump'|'slide'|'turn'(dir)|'stumble'|
'fall'|'hit'|'burn'|'caught'`. `ctx = { state ('run'|'jump'|'slide'|'fall'|'dead'), speed, speed01,
y, vy, lateralVel, turnLean (−1..1), stumble01, shield, boost, magnet, dead, deathType, deadTime, time }`.
Draw the shield bubble / boost aura / magnet effect when the flags are set.

### `src/monkeys.js` — `createMonkeys(scene)`
Returns `{ update(dt, ctx), reset(), pounce(), setThreat(x) }`. `ctx = { sample(distBehind, out) →
{ pos: Vector3, fwd: Vector3, piece, u, v }, playerPos, playerAngle, threat (0 far … 1 on the heels),
dead, deathType, deadTime, speed01, time, running }`. Creatures should run/leap on the track behind
the runner at a distance driven by `threat`, and pile onto the runner after `pounce()`.

### `src/scenery.js`
* `createEnvironment(scene, renderer, quality)` → `{ update(dt, ctx), setQuality(q), dispose() }`.
  Owns sky/background, fog (`scene.fog`, and call `setFxFog(color, near, far)` from `fx-materials.js`
  so shader materials match), sun + hemisphere lights, shadow frustum following `ctx.playerPos`,
  distant backdrop (mountains/jungle silhouettes), ambient particles/light shafts if desired.
  `ctx = { playerPos, camera, time, speed01, piece }`.
* `buildPiece(piece, { rng, quality })` → `THREE.Group` in piece-local coords: floor (with gap cut-outs
  and the corner tile), walls/edges per `piece.side`, biome decoration, torches, waterfalls, water,
  bridges, ruins, vegetation. Use `MeshBuilder` (`src/meshbuilder.js`) to merge static props into a
  few meshes (vertex colours; `sway` for wind via `applyWindSway`), and the shader materials from
  `src/fx-materials.js` for flames/water/waterfalls. Keep a piece under ~25k triangles / ~10 draw calls.
* `disposePiece(group)` → free geometries/materials created per piece (shared materials must not be disposed).

### `src/obstacles.js`
* `buildObstacle(obstacle, piece, { rng, quality })` → `Object3D | null` in piece-local coords, at
  x = (vMin+vMax)/2, z = −u. The visual must read instantly: low things you jump, overhead things you
  slide, tall things you dodge; fire glows (use `createFlameMaterial`).
* `smashObstacle(obj)` → play a break-apart / knock-over effect on that object (shield/boost hits).

### `src/collectibles.js` (done) — coins and power-up pickups. `src/particles.js` —
`createParticles(scene, renderer)` → `{ emit(type, worldPos, opts), update(dt, camera), reset() }` with types
`dust, slide, sparkle, burst, smash, shieldpop, ember, leaf, mist, splash, smoke`.

### `src/audio.js` — `createAudio(settings)`
`{ unlock(), play(name, opts), footstep(kind), startMusic(), stopMusic(fadeSec), setPaused(bool),
setEnabled(sound, music), setBiome(kind), update(dt, ctx) }`. Event names used by the game:
`coin, jump, land, slide, whoosh, step, turn, stumble, smash, shieldbreak, hit, fall, burn, powerup,
start, monkeys, buy, deny`.

### `src/hud.js` — `createHUD(game)`
`{ update(dt), showMenu(which), hideMenus(), showPause(), showGameOver(run), showShop(), toast(text, ms),
hint(text), blocksTap() }`. Reads `game.run` (`score, distance, coins, multiplier, deathType, best`),
`game.power` (remaining seconds per type), `game.powerDuration(type)`, `game.save`, and calls
`game.startRun(), openShop(), closeShop(), buyUpgrade(key), togglePause(), toggleSound(), setQuality(q)`.
Game events: `start, death, gameover, coin, power, powerend, stumble, pause, resume, settings, upgrade`.

## Rendering rules
* Never add dynamic lights (PointLight/SpotLight) at runtime: three recompiles every shader whenever the
  light count changes. Fake glow with emissive materials plus additive sprites (see torches in scenery.js).
* Post-processing renders into half-float targets: a single NaN pixel smears across the whole frame via
  bloom. Avoid `pow(0, n)`, `normalize(vec3(0))`, `smoothstep(a, a, x)` and zero-scale primitives
  (a singular matrix zeroes the normals).
* Corner ownership: a turning piece draws its corner tile and the walls that close it. Wide side
  decoration (ground strips, trees, water) stops 16 m before the open side of a turn; the next piece
  decorates that inside-corner square as the start of its own side. Thin edge elements (walls, rock
  faces, path lips) run all the way to the tile.

## Game states
`menu → running → dying (slow-mo, 1.5 s) → dead → running…`; `paused`; `shop`.
Test hook: `window.__game` exposes the `Game` instance (`state, run, power, player, track, ...`).

## Testing
* `npm run build` (or `node scripts/build.mjs --outdir some-dir` for a private build).
* `node tests/probe.mjs --start --auto --seconds 20 --seed 7 --width 640 --height 400 --shot out.png
  [--dist some-dir] [--eval "({...})"]` — headless SwiftShader run with a scripted player; prints a
  summary (fps, draw calls, triangles) and console errors. `--keys up,down,left,right` presses keys.
* `node tests/smoke.mjs` — the full smoke test; must pass before committing.
Headless rendering is CPU-bound (≈15–20 fps at 640×400 on `quality=low`); real GPUs are far faster.
