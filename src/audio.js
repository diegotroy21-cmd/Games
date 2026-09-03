// PLACEHOLDER audio: WebAudio blips for the main events. To be replaced with full synthesized SFX + music.
export function createAudio(settings) {
  let ctx = null, master = null, enabled = !!settings.sound, paused = false;
  const ensure = () => { if (ctx) return ctx; try { ctx = new (window.AudioContext || window.webkitAudioContext)(); master = ctx.createGain(); master.gain.value = 0.5; master.connect(ctx.destination); } catch { ctx = null; } return ctx; };
  const beep = (f, dur = 0.08, type = 'square', vol = 0.2, slide = 0) => {
    if (!enabled || paused || !ensure()) return;
    if (ctx.state === 'suspended') ctx.resume();
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f, ctx.currentTime);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, f + slide), ctx.currentTime + dur);
    g.gain.setValueAtTime(vol, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    o.connect(g); g.connect(master); o.start(); o.stop(ctx.currentTime + dur);
  };
  return {
    unlock() { ensure(); if (ctx && ctx.state === 'suspended') ctx.resume(); },
    play(name, opts = {}) {
      switch (name) {
        case 'coin': beep(1200 + Math.min(6, opts.count || 1) * 60, 0.09, 'sine', 0.18, 600); break;
        case 'jump': beep(300, 0.15, 'triangle', 0.15, 400); break;
        case 'land': beep(120, 0.08, 'triangle', 0.15, -60); break;
        case 'slide': beep(200, 0.2, 'sawtooth', 0.08, -120); break;
        case 'stumble': beep(180, 0.2, 'square', 0.2, -100); break;
        case 'hit': beep(90, 0.4, 'sawtooth', 0.3, -60); break;
        case 'fall': beep(500, 0.9, 'sine', 0.2, -450); break;
        case 'burn': beep(200, 0.5, 'sawtooth', 0.25, -100); break;
        case 'powerup': beep(600, 0.3, 'sine', 0.2, 600); break;
        case 'smash': beep(120, 0.2, 'square', 0.2, -80); break;
        case 'shieldbreak': beep(800, 0.3, 'sine', 0.2, -500); break;
        case 'turn': beep(240, 0.06, 'triangle', 0.08, 60); break;
        case 'buy': beep(700, 0.15, 'sine', 0.2, 300); break;
        case 'deny': beep(150, 0.15, 'square', 0.15, -50); break;
        case 'monkeys': beep(900, 0.25, 'sawtooth', 0.08, 400); break;
        default: break;
      }
    },
    footstep() { beep(70, 0.04, 'triangle', 0.05, -20); },
    startMusic() {}, stopMusic() {}, setPaused(p) { paused = p; }, setEnabled(s) { enabled = s; }, setBiome() {}, setIntensity() {}, update() {},
  };
}
