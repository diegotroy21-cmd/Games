// Central tuning knobs for Relic Rush. Units are metres; the runner moves along -Z in a piece's local frame.
export const CONFIG = {
  laneWidth: 2,          // lateral distance between lanes
  trackWidth: 6,         // total walkable width (3 lanes) == corner tile size
  lanes: [-1, 0, 1],

  // Speed curve (m/s) as a function of distance run: start -> max with an exponential ease.
  startSpeed: 11,
  maxSpeed: 27,
  speedRampDistance: 2600, // distance constant for the ease (bigger = slower ramp)
  boostSpeedMul: 1.55,

  // Vertical motion
  jumpHeight: 1.75,
  jumpDuration: 0.74,    // total airtime in seconds
  fastFallGravityMul: 3.2,
  slideDuration: 0.85,
  laneChangeTime: 0.15,  // seconds to tween between lanes

  // Turning
  turnEarlyWindow: 2.2,  // metres before a corner tile in which a swipe pre-queues the turn
  turnWallMargin: 0.6,   // distance from the far wall where a missed turn becomes a crash
  turnHeadingTime: 0.28, // camera / character heading smoothing on turns

  // Stumbles: minor obstacles slow you and let the monkeys close in; two within stumbleWindow = caught.
  stumbleWindow: 3.5,
  stumbleSlowdown: 0.55,
  stumbleSlowTime: 0.8,

  // Power-ups (base durations in seconds; upgrades extend them)
  shieldDuration: 9,
  magnetDuration: 10,
  boostDuration: 5,
  magnetRadius: 6.5,

  // Scoring
  coinScore: 5,
  distanceScorePerMetre: 1,
  multiplierEvery: 400,  // +1 multiplier each N metres
  maxMultiplier: 12,

  // World streaming
  aheadDistance: 190,    // keep this much track generated ahead of the player
  behindPieces: 2,       // pieces kept alive behind the player
  playerRadius: 0.42,
  playerHeight: 1.8,
  slideHeight: 0.8,

  // Camera
  camBack: 6.2,
  camHeight: 3.1,
  camLookAhead: 7,
  camLookHeight: 1.1,
  fovBase: 62,
  fovMax: 76,
};
