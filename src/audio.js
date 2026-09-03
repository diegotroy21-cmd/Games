// Procedural audio: every sound is synthesized with WebAudio (no files). Footsteps, jumps, coins,
// collisions, power-ups, environmental loops (fire crackle, waterfall) and an adaptive tribal soundtrack
// whose tempo and intensity follow the runner's speed and the monkeys' proximity.
import { clamp, lerp } from './util.js';

export function createAudio(settings) {
  let ctx = null;
  let master = null, sfxBus = null, musicBus = null, ambBus = null;
  let soundOn = settings.sound !== false, musicOn = settings.music !== false;
  let paused = false;
  let noiseBuf = null;
  let biome = 'temple';
  let coinStreak = 0, coinStreakTime = 0;
  let footAlt = 0;

  // ---- context ---------------------------------------------------------------------------------
  function ensure() {
    if (ctx) return ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try {
      ctx = new AC();
      master = ctx.createGain(); master.gain.value = 0.7; master.connect(ctx.destination);
      const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 4; comp.attack.value = 0.005; comp.release.value = 0.2;
      comp.connect(master);
      sfxBus = ctx.createGain(); sfxBus.gain.value = soundOn ? 1 : 0; sfxBus.connect(comp);
      musicBus = ctx.createGain(); musicBus.gain.value = musicOn ? 0.55 : 0; musicBus.connect(comp);
      ambBus = ctx.createGain(); ambBus.gain.value = soundOn ? 1 : 0; ambBus.connect(comp);
      const len = ctx.sampleRate * 2;
      noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
      setupAmbience();
    } catch { ctx = null; }
    return ctx;
  }
  const now = () => ctx.currentTime;
  const ready = () => soundOn && !paused && ensure() && ctx.state === 'running';

  // ---- primitives ------------------------------------------------------------------------------
  function tone({ f = 440, f2 = null, t = 0, dur = 0.2, type = 'sine', vol = 0.2, attack = 0.005, decay = null, bus = sfxBus, detune = 0, pan = 0, curve = 'exp' }) {
    const o = ctx.createOscillator(); o.type = type; o.detune.value = detune;
    const start = now() + t;
    o.frequency.setValueAtTime(f, start);
    if (f2 !== null) { if (curve === 'exp') o.frequency.exponentialRampToValueAtTime(Math.max(20, f2), start + dur); else o.frequency.linearRampToValueAtTime(f2, start + dur); }
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(vol, start + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, start + (decay || dur));
    o.connect(g);
    let out = g;
    if (pan) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); out = p; }
    out.connect(bus);
    o.start(start); o.stop(start + (decay || dur) + 0.05);
    return o;
  }
  function noise({ t = 0, dur = 0.2, vol = 0.2, filter = 'lowpass', freq = 1000, q = 0.7, freq2 = null, bus = sfxBus, attack = 0.003, pan = 0 }) {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    s.playbackRate.value = 0.8 + Math.random() * 0.4;
    const fl = ctx.createBiquadFilter(); fl.type = filter; fl.frequency.value = freq; fl.Q.value = q;
    const start = now() + t;
    if (freq2 !== null) fl.frequency.exponentialRampToValueAtTime(Math.max(30, freq2), start + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, start);
    g.gain.exponentialRampToValueAtTime(vol, start + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
    s.connect(fl); fl.connect(g);
    let out = g;
    if (pan) { const p = ctx.createStereoPanner(); p.pan.value = pan; g.connect(p); out = p; }
    out.connect(bus);
    s.start(start); s.stop(start + dur + 0.05);
  }

  // ---- sound effects ---------------------------------------------------------------------------
  const SFX = {
    coin(o) {
      const n = Math.min(12, coinStreak);
      const base = 880 * Math.pow(2, (n % 8) / 12);
      tone({ f: base, dur: 0.12, type: 'sine', vol: 0.16 });
      tone({ f: base * 1.5, t: 0.03, dur: 0.16, type: 'triangle', vol: 0.09 });
    },
    jump() { noise({ dur: 0.18, vol: 0.12, filter: 'bandpass', freq: 600, freq2: 2400, q: 1.2 }); tone({ f: 220, f2: 520, dur: 0.16, type: 'triangle', vol: 0.09 }); },
    land() { noise({ dur: 0.12, vol: 0.2, freq: 500, freq2: 120 }); tone({ f: 110, f2: 60, dur: 0.1, type: 'sine', vol: 0.18 }); },
    slide() { noise({ dur: 0.45, vol: 0.16, freq: 1200, freq2: 300, q: 0.5 }); },
    whoosh() { noise({ dur: 0.25, vol: 0.12, filter: 'bandpass', freq: 2500, freq2: 500, q: 1 }); },
    step() { noise({ dur: 0.06, vol: 0.08, freq: 900, freq2: 300 }); },
    turn() { noise({ dur: 0.16, vol: 0.14, freq: 700, freq2: 200 }); tone({ f: 140, f2: 90, dur: 0.1, type: 'triangle', vol: 0.08 }); },
    stumble() {
      noise({ dur: 0.25, vol: 0.28, freq: 800, freq2: 150 });
      tone({ f: 180, f2: 70, dur: 0.3, type: 'sawtooth', vol: 0.14 });
      SFX.monkeys({ close: true });
    },
    smash() { noise({ dur: 0.35, vol: 0.35, freq: 1500, freq2: 200, q: 0.8 }); tone({ f: 90, f2: 40, dur: 0.3, type: 'square', vol: 0.18 }); for (let i = 0; i < 5; i++) noise({ t: 0.05 + i * 0.05, dur: 0.08, vol: 0.1, filter: 'bandpass', freq: 2000 + Math.random() * 3000, q: 4 }); },
    shieldbreak() { tone({ f: 1400, f2: 300, dur: 0.4, type: 'sine', vol: 0.18 }); noise({ dur: 0.4, vol: 0.2, filter: 'highpass', freq: 2500 }); for (let i = 0; i < 6; i++) tone({ f: 2000 + Math.random() * 2000, t: i * 0.04, dur: 0.12, type: 'sine', vol: 0.06 }); },
    hit() { noise({ dur: 0.4, vol: 0.45, freq: 900, freq2: 100 }); tone({ f: 70, f2: 35, dur: 0.45, type: 'sawtooth', vol: 0.25 }); tone({ f: 200, f2: 60, dur: 0.2, type: 'square', vol: 0.12 }); },
    fall() { tone({ f: 700, f2: 120, dur: 1.4, type: 'sine', vol: 0.18 }); noise({ dur: 1.2, vol: 0.12, filter: 'bandpass', freq: 800, freq2: 200, q: 0.8 }); },
    burn() { noise({ dur: 0.7, vol: 0.35, filter: 'bandpass', freq: 400, freq2: 2500, q: 0.7 }); tone({ f: 180, f2: 60, dur: 0.6, type: 'sawtooth', vol: 0.16 }); },
    powerup(o) {
      const root = o && o.type === 'shield' ? 523 : o && o.type === 'magnet' ? 587 : 659;
      [1, 1.25, 1.5, 2].forEach((m, i) => tone({ f: root * m, t: i * 0.07, dur: 0.35, type: 'triangle', vol: 0.14 }));
      noise({ dur: 0.5, vol: 0.06, filter: 'highpass', freq: 3000 });
    },
    start() { [392, 523, 659, 784].forEach((f, i) => tone({ f, t: i * 0.09, dur: 0.3, type: 'square', vol: 0.08 })); noise({ dur: 0.6, vol: 0.12, filter: 'bandpass', freq: 300, freq2: 1500, q: 0.7 }); },
    monkeys(o) {
      const count = o && o.close ? 3 : 2;
      for (let i = 0; i < count; i++) {
        const t = i * 0.13 + Math.random() * 0.05;
        const f = 900 + Math.random() * 500;
        tone({ f, f2: f * 1.8, t, dur: 0.12, type: 'sawtooth', vol: 0.05, curve: 'lin', pan: (Math.random() - 0.5) * 1.2 });
        tone({ f: f * 1.8, f2: f * 0.7, t: t + 0.12, dur: 0.18, type: 'sawtooth', vol: 0.05, curve: 'lin' });
      }
    },
    buy() { [660, 880, 1320].forEach((f, i) => tone({ f, t: i * 0.08, dur: 0.25, type: 'sine', vol: 0.14 })); },
    deny() { tone({ f: 160, f2: 110, dur: 0.25, type: 'square', vol: 0.1 }); },
    click() { tone({ f: 800, dur: 0.05, type: 'sine', vol: 0.08 }); },
  };

  // ---- ambience --------------------------------------------------------------------------------
  let fireGain = null, waterGain = null, jungleGain = null, windGain = null;
  function loopNoise(freq, q, type, gainValue) {
    const s = ctx.createBufferSource(); s.buffer = noiseBuf; s.loop = true;
    const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = ctx.createGain(); g.gain.value = gainValue;
    s.connect(f); f.connect(g); g.connect(ambBus); s.start();
    return { g, f };
  }
  function setupAmbience() {
    fireGain = loopNoise(600, 0.6, 'bandpass', 0);       // crackle bed (modulated in update)
    waterGain = loopNoise(400, 0.3, 'lowpass', 0);       // waterfall rumble
    jungleGain = loopNoise(4000, 2.5, 'bandpass', 0);    // insects hiss
    windGain = loopNoise(200, 0.4, 'lowpass', 0.012);    // wind bed
  }
  let crackleTimer = 0, birdTimer = 2;

  // ---- music: pattern sequencer ----------------------------------------------------------------
  const music = { on: false, step: 0, nextTime: 0, bpm: 118, intensity: 0, fade: null };
  const SCALE = [0, 3, 5, 7, 10, 12, 15, 17]; // minor pentatonic
  const ROOT = 146.83; // D3
  const midiF = (semi) => ROOT * Math.pow(2, semi / 12);
  const MELODY = [0, 2, 3, 2, 5, 3, 2, 0, 4, 2, 0, -1, 2, 3, 5, 7]; // indices into SCALE (with rests as -1)
  const BASS = [0, 0, 5, 0, 3, 0, 5, 7];
  function drum(kind, t, vel = 1) {
    if (kind === 'kick') { tone({ f: 150, f2: 45, t, dur: 0.25, type: 'sine', vol: 0.5 * vel, bus: musicBus }); }
    else if (kind === 'tom') { tone({ f: 220, f2: 110, t, dur: 0.22, type: 'sine', vol: 0.3 * vel, bus: musicBus }); noise({ t, dur: 0.08, vol: 0.06 * vel, freq: 1500, freq2: 300, bus: musicBus }); }
    else if (kind === 'shaker') { noise({ t, dur: 0.05, vol: 0.05 * vel, filter: 'highpass', freq: 6000, bus: musicBus }); }
    else if (kind === 'clap') { noise({ t, dur: 0.12, vol: 0.12 * vel, filter: 'bandpass', freq: 1800, q: 1.5, bus: musicBus }); }
  }
  function scheduleMusic() {
    if (!music.on || !ctx) return;
    const stepDur = 60 / music.bpm / 4; // 16th notes
    while (music.nextTime < now() + 0.25) {
      const s = music.step, t = music.nextTime - now();
      const bar = Math.floor(s / 16), beat = s % 16;
      const inten = music.intensity;
      // drums: tribal pattern, denser with intensity
      if (beat % 4 === 0) drum('kick', t, 0.9);
      if (beat === 6 || beat === 14) drum('tom', t, 0.7);
      if (inten > 0.3 && (beat === 3 || beat === 11)) drum('tom', t, 0.5);
      if (beat % 2 === 1) drum('shaker', t, 0.5 + inten * 0.5);
      if (inten > 0.55 && (beat === 4 || beat === 12)) drum('clap', t, 0.6);
      // bass drone / pulse
      if (beat % 2 === 0) { const b = BASS[(bar * 2 + (beat >= 8 ? 1 : 0)) % BASS.length]; tone({ f: midiF(b - 12), t, dur: stepDur * 1.8, type: 'sawtooth', vol: 0.07 + inten * 0.05, bus: musicBus, attack: 0.01 }); }
      // marimba-like melody, only above low intensity, rests keep it airy
      if (inten > 0.15 && beat % 2 === 0) {
        const m = MELODY[(s / 2 + bar * 3) % MELODY.length];
        if (m >= 0 && (inten > 0.6 || bar % 2 === 0 || beat % 4 === 0)) {
          const f = midiF(SCALE[m % SCALE.length] + 12);
          tone({ f, t, dur: 0.22, type: 'triangle', vol: 0.11 + inten * 0.05, bus: musicBus, attack: 0.004 });
          tone({ f: f * 2, t, dur: 0.08, type: 'sine', vol: 0.05, bus: musicBus });
        }
      }
      // high-intensity flute-like counter line
      if (inten > 0.75 && beat % 8 === 4) { const f = midiF(SCALE[(bar + 2) % 5] + 24); tone({ f, f2: f * 1.01, t, dur: stepDur * 6, type: 'sine', vol: 0.06, bus: musicBus, attack: 0.05, curve: 'lin' }); }
      music.nextTime += stepDur;
      music.step++;
    }
  }

  // ---- public api ------------------------------------------------------------------------------
  const api = {
    unlock() { if (ensure() && ctx.state === 'suspended') ctx.resume().catch(() => {}); },
    play(name, opts = {}) {
      if (!ready()) return;
      if (name === 'coin') { coinStreak = (performance.now() - coinStreakTime < 700) ? coinStreak + 1 : 0; coinStreakTime = performance.now(); }
      const fn = SFX[name];
      if (fn) { try { fn(opts); } catch { /* audio graph errors are non-fatal */ } }
    },
    footstep(kind = 'temple') {
      if (!ready()) return;
      footAlt ^= 1;
      const pan = footAlt ? 0.18 : -0.18;
      if (kind === 'bridge') { tone({ f: 180 + footAlt * 30, f2: 90, dur: 0.09, type: 'triangle', vol: 0.12, pan }); noise({ dur: 0.05, vol: 0.05, freq: 1200, freq2: 400, pan }); }
      else if (kind === 'jungle') noise({ dur: 0.07, vol: 0.09, freq: 700, freq2: 250, pan });
      else noise({ dur: 0.06, vol: 0.1, freq: 1400, freq2: 500, q: 0.9, pan });
    },
    startMusic() {
      if (!ensure()) return;
      music.on = true; music.step = 0; music.nextTime = now() + 0.1; music.intensity = 0.2;
      if (music.fade) { clearTimeout(music.fade); music.fade = null; }
      musicBus.gain.cancelScheduledValues(now());
      musicBus.gain.setValueAtTime(musicOn ? 0.55 : 0, now());
    },
    stopMusic(fadeSec = 1) {
      if (!ctx) return;
      musicBus.gain.cancelScheduledValues(now());
      musicBus.gain.setValueAtTime(musicBus.gain.value, now());
      musicBus.gain.linearRampToValueAtTime(0.0001, now() + fadeSec);
      music.fade = setTimeout(() => { music.on = false; }, fadeSec * 1000);
    },
    setPaused(p) {
      paused = p;
      if (!ctx) return;
      if (p) ctx.suspend().catch(() => {}); else ctx.resume().catch(() => {});
    },
    setEnabled(sound, musicEnabled) {
      soundOn = sound; musicOn = musicEnabled;
      if (!ctx) return;
      sfxBus.gain.value = sound ? 1 : 0; ambBus.gain.value = sound ? 1 : 0;
      musicBus.gain.cancelScheduledValues(now());
      musicBus.gain.setValueAtTime(musicEnabled && music.on ? 0.55 : 0, now());
    },
    setBiome(kind) { biome = kind; },
    setIntensity(x) { music.intensity = clamp(x, 0, 1); },
    // ctx: { speed01, threat, running, boost, piece, playerPos }
    update(dt, c) {
      if (!ctx || paused) return;
      if (c.piece) biome = c.piece.kind;
      // music intensity & tempo track speed and danger
      const targetInt = c.running ? clamp(0.25 + c.speed01 * 0.5 + c.threat * 0.3 + (c.boost ? 0.25 : 0), 0, 1) : music.intensity;
      music.intensity += (targetInt - music.intensity) * Math.min(1, dt * 1.5);
      music.bpm = lerp(112, 150, clamp(c.speed01, 0, 1)) + (c.boost ? 10 : 0);
      scheduleMusic();
      // ambience by biome
      const fire = biome === 'temple' || biome === 'ruins' ? 0.05 : 0.0;
      const water = biome === 'cliff' ? 0.09 : biome === 'bridge' ? 0.12 : 0.02;
      const jungle = biome === 'jungle' ? 0.02 : 0.006;
      const k = Math.min(1, dt * 1.2);
      fireGain.g.gain.value += (fire - fireGain.g.gain.value) * k;
      waterGain.g.gain.value += (water - waterGain.g.gain.value) * k;
      jungleGain.g.gain.value += (jungle - jungleGain.g.gain.value) * k;
      windGain.g.gain.value = 0.01 + c.speed01 * 0.03;
      windGain.f.frequency.value = 200 + c.speed01 * 500;
      // sporadic crackles and bird calls
      crackleTimer -= dt;
      if (fire > 0 && crackleTimer <= 0 && soundOn) { crackleTimer = 0.08 + Math.random() * 0.3; noise({ dur: 0.03, vol: 0.05 * Math.random(), filter: 'bandpass', freq: 2500 + Math.random() * 3000, q: 3, bus: ambBus, pan: (Math.random() - 0.5) }); }
      birdTimer -= dt;
      if (biome === 'jungle' && birdTimer <= 0 && soundOn) {
        birdTimer = 2 + Math.random() * 5;
        const f = 1800 + Math.random() * 1500;
        for (let i = 0; i < 2 + Math.floor(Math.random() * 3); i++) tone({ f, f2: f * 1.3, t: i * 0.11, dur: 0.08, type: 'sine', vol: 0.03, bus: ambBus, pan: (Math.random() - 0.5) * 1.5 });
      }
      // monkey chatter when they are close
      if (c.running && c.threat > 0.6 && Math.random() < dt * 0.8) SFX.monkeys({ close: false });
    },
  };
  return api;
}
