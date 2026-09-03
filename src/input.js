// Gesture input: swipes (touch or mouse drag) and keyboard map to four actions: left, right, up, down.
// Actions are queued with timestamps and consumed by the game each frame so quick swipes are never lost.
import { Emitter } from './util.js';

const SWIPE_MIN_PX = 24;
const SWIPE_MAX_MS = 600;

export class Input extends Emitter {
  constructor(target) {
    super();
    this.target = target;
    this.queue = [];
    this._pointer = null;
    this._bind();
  }

  _bind() {
    const t = this.target;
    const down = (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      this._pointer = { id: e.pointerId, x: e.clientX, y: e.clientY, t: performance.now(), done: false };
      this.emit('tap-down');
    };
    const move = (e) => {
      const p = this._pointer;
      if (!p || p.done || p.id !== e.pointerId) return;
      const dx = e.clientX - p.x, dy = e.clientY - p.y;
      if (Math.max(Math.abs(dx), Math.abs(dy)) >= SWIPE_MIN_PX) {
        p.done = true;
        this._push(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'), 'swipe');
      }
    };
    const up = (e) => {
      const p = this._pointer;
      if (!p || p.id !== e.pointerId) return;
      const dt = performance.now() - p.t;
      if (!p.done && dt < SWIPE_MAX_MS) {
        const dx = e.clientX - p.x, dy = e.clientY - p.y;
        if (Math.max(Math.abs(dx), Math.abs(dy)) >= SWIPE_MIN_PX * 0.6) {
          this._push(Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up'), 'swipe');
        } else {
          this.emit('tap', { x: e.clientX, y: e.clientY });
        }
      }
      this._pointer = null;
    };
    t.addEventListener('pointerdown', down);
    t.addEventListener('pointermove', move);
    t.addEventListener('pointerup', up);
    t.addEventListener('pointercancel', () => { this._pointer = null; });
    t.addEventListener('contextmenu', (e) => e.preventDefault());

    const keymap = {
      ArrowLeft: 'left', KeyA: 'left',
      ArrowRight: 'right', KeyD: 'right',
      ArrowUp: 'up', KeyW: 'up', Space: 'up',
      ArrowDown: 'down', KeyS: 'down',
    };
    window.addEventListener('keydown', (e) => {
      if (e.repeat) return;
      const a = keymap[e.code];
      if (a) { e.preventDefault(); this._push(a, 'key'); }
      else if (e.code === 'Enter') this.emit('confirm');
      else if (e.code === 'Escape') this.emit('escape');
      else if (e.code === 'KeyP') this.emit('pause');
      else if (e.code === 'KeyM') this.emit('mute');
    });
  }

  _push(action, source) {
    this.queue.push({ action, source, t: performance.now() });
    if (this.queue.length > 4) this.queue.shift();
    this.emit('action', action);
  }

  // Returns queued actions newer than maxAgeMs and clears the queue.
  drain(maxAgeMs = 250) {
    const now = performance.now();
    const out = this.queue.filter((a) => now - a.t <= maxAgeMs).map((a) => a.action);
    this.queue.length = 0;
    return out;
  }
  clear() { this.queue.length = 0; }
}
