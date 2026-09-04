// DOM user interface: title screen, in-game HUD, tutorial hints, pause, game over, settings and the
// upgrade shop. Everything is built from the markup in index.html plus the inline SVG sprite; the
// per-frame update only touches the DOM when a displayed value actually changes.
import { formatScore, isMobile } from './util.js';
import { UPGRADES, upgradeCost } from './save.js';
import { CONFIG } from './config.js';

const $ = (id) => document.getElementById(id);
const TUTORIAL_KEY = 'relic-rush-tutorial-v1';
const RING = 2 * Math.PI * 23;            // circumference of the power ring (r = 23 in a 52-unit viewBox)
const POWER_TYPES = ['boost', 'shield', 'magnet'];
const HINT_SECONDS = 2.8;                 // how long each tutorial hint stays up
const ICON_COLOR = { magnet: '#ff5fa8', shield: '#5cc2ff', boost: '#ffc340', coin: '#ffd25a', head: '#7fd45f' };
const QUALITY_NOTE = { low: 'Low: fastest, no shadows', medium: 'Medium: balanced', high: 'High: best looking' };

const DEATH_TEXT = {
  hit:    { title: 'Smashed!', line: 'You ran headlong into ancient stone.' },
  fall:   { title: 'Fell!',    line: 'The abyss swallowed the idol thief.' },
  burn:   { title: 'Burned!',  line: 'The temple fire claimed you.' },
  caught: { title: 'Caught!',  line: 'The guardians dragged you back to the temple.' },
};

const readFlag = (key) => { try { return localStorage.getItem(key) === '1'; } catch { return false; } };
const writeFlag = (key, on) => { try { if (on) localStorage.setItem(key, '1'); else localStorage.removeItem(key); } catch { /* storage unavailable */ } };
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
// Restart a CSS animation driven by a class: remove it, force a reflow, add it again.
function replay(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }

// First-run tutorial: one hint per control, staggered over the first seconds of the run.
function tutorialSteps(mobile) {
  const swipe = (id, cls) => `<svg class="swipe ${cls}"><use href="#${id}"/></svg>`;
  const keys = (...ks) => ks.map((k) => `<kbd>${k}</kbd>`).join('');
  return mobile ? [
    { at: 0.8,  text: 'Swipe left or right to change lanes', glyph: swipe('i-swipe-lr', 'lr') },
    { at: 4.2,  text: 'Swipe up to jump',                    glyph: swipe('i-swipe', 'up') },
    { at: 7.6,  text: 'Swipe down to slide',                 glyph: swipe('i-swipe', 'down') },
    { at: 11.2, text: 'At a corner, swipe toward the turn',  glyph: swipe('i-swipe-turn', 'turn') },
  ] : [
    { at: 0.8,  text: 'Change lanes',                        glyph: keys('←', '→') },
    { at: 4.2,  text: 'Jump',                                glyph: keys('↑') },
    { at: 7.6,  text: 'Slide',                               glyph: keys('↓') },
    { at: 11.2, text: 'At a corner, press toward the turn',  glyph: keys('←', '→') },
  ];
}

export function createHUD(game) {
  const mobile = isMobile();
  const el = {
    hud: $('hud'), score: $('hud-score'), mult: $('hud-mult'), multVal: $('hud-mult-val'), coins: $('hud-coins'), coinsWrap: $('hud-coins-wrap'),
    dist: $('hud-dist'), toast: $('hud-toast'), warn: $('hud-warn'), hint: $('hud-hint'), hintGlyph: $('hud-hint-glyph'), hintText: $('hud-hint-text'),
    menu: $('menu'), dust: $('dust'), menuBest: $('menu-best'), menuCoins: $('menu-coins'), menuControls: $('menu-controls'),
    gameover: $('gameover'), goTitle: $('go-title'), goReason: $('go-reason'), goBest: $('go-best'), confetti: $('go-confetti'),
    goScore: $('go-score'), goDist: $('go-dist'), goCoins: $('go-coins'), goHi: $('go-hi'),
    pause: $('pause'), pauseScore: $('pause-score'), pauseDist: $('pause-dist'),
    settings: $('settings'), shop: $('shop'), shopCoins: $('shop-coins'), shopList: $('shop-list'), tutorialBtn: $('btn-tutorial'),
  };
  const overlays = [el.menu, el.gameover, el.pause, el.settings, el.shop];
  const soundButtons = document.querySelectorAll('[data-action="sound"]');
  const qualitySegs = document.querySelectorAll('.seg[data-role="quality"]');
  const qualityNotes = document.querySelectorAll('[data-role="quality-note"]');
  const powers = {};
  for (const t of POWER_TYPES) {
    const root = $('hud-power-' + t);
    powers[t] = { root, ring: root.querySelector('.ring-fg'), secs: root.querySelector('.power-secs'), shown: false, low: false, lastSecs: -1 };
  }

  // ---- state -----------------------------------------------------------------------------------
  let lastTapBlock = 0;
  let shownScore = 0, lastScoreText = '', lastMult = 0, lastDist = -1, lastCoins = -1, danger = false;
  let toastTimer = 0;
  let apiHint = '';                                   // text shown through hint(); persists until cleared
  const go = { t: 1, target: 0, text: '' };           // game-over score count-up
  const tutorial = { steps: tutorialSteps(mobile), index: 0, time: 0, hideAt: 0, active: false, shownCount: 0, done: readFlag(TUTORIAL_KEY) };

  // ---- wiring ----------------------------------------------------------------------------------
  // Overlays sit above the swipe layer; stop their pointer events from reaching anything else.
  for (const o of overlays) o.addEventListener('pointerdown', (e) => e.stopPropagation());
  el.hud.addEventListener('pointerdown', (e) => e.stopPropagation()); // only the pause button receives events

  const press = (fn) => (e) => {
    e.stopPropagation(); e.preventDefault();
    lastTapBlock = performance.now();
    fn(e);
    if (e.currentTarget && e.currentTarget.blur) e.currentTarget.blur(); // Enter must not re-trigger a focused button
  };
  const bind = (id, fn) => { const b = $(id); if (b) b.addEventListener('click', press(fn)); };
  bind('btn-play', () => game.startRun());
  bind('btn-again', () => game.startRun());
  bind('btn-shop', () => game.openShop());
  bind('btn-shop2', () => game.openShop());
  bind('btn-shop-close', () => game.closeShop());
  bind('btn-resume', () => game.togglePause());
  bind('btn-quit', () => game.quitToMenu());
  bind('btn-menu', () => game.quitToMenu());
  bind('btn-pause', () => { if (game.state === 'running') game.togglePause(); });
  bind('btn-settings', () => showSettings());
  bind('btn-settings-close', () => closeSettings());
  bind('btn-tutorial', () => {
    tutorial.done = false; writeFlag(TUTORIAL_KEY, false);
    const label = el.tutorialBtn.querySelector('span');
    label.textContent = 'Ready';
    setTimeout(() => { label.textContent = 'Show again'; }, 1400);
  });
  for (const b of soundButtons) b.addEventListener('click', press(() => game.toggleSound()));
  for (const seg of qualitySegs) seg.addEventListener('click', press((e) => {
    const b = e.target.closest('button[data-q]');
    if (b) game.setQuality(b.dataset.q);
  }));
  el.shopList.addEventListener('click', press((e) => {
    const b = e.target.closest('.btn-buy');
    if (!b || b.disabled) return;
    if (!game.buyUpgrade(b.dataset.key)) replay(b.closest('.card'), 'shake'); // success re-renders via the 'upgrade' event
  }));

  // ---- helpers ---------------------------------------------------------------------------------
  const hideAll = () => { for (const o of overlays) o.hidden = true; };
  const setHud = (visible) => { el.hud.hidden = !visible; };

  function refreshMenu() {
    el.menuBest.textContent = formatScore(game.save.best);
    el.menuCoins.textContent = formatScore(game.save.coins);
  }

  function refreshSettings() {
    const on = !!game.save.settings.sound;
    for (const b of soundButtons) {
      b.setAttribute('aria-pressed', String(on));
      b.querySelector('use').setAttribute('href', on ? '#i-sound' : '#i-mute');
      b.querySelector('span').textContent = on ? 'On' : 'Off';
    }
    const q = game.save.settings.quality || 'auto';
    for (const seg of qualitySegs) for (const b of seg.children) b.classList.toggle('on', b.dataset.q === q);
    const note = q === 'auto' ? `Auto: ${cap(game.quality)} on this device` : (QUALITY_NOTE[q] || '');
    for (const n of qualityNotes) n.textContent = note;
  }

  function setDanger(on) {
    if (on === danger) return;
    danger = on;
    el.warn.classList.toggle('show', on);
    el.hud.classList.toggle('danger', on);
  }

  function showHint(text, glyphHtml) {
    el.hintGlyph.innerHTML = glyphHtml || '';
    el.hintText.textContent = text;
    el.hint.classList.add('show');
  }
  const hideHint = () => el.hint.classList.remove('show');

  function tickTutorial(dt) {
    tutorial.time += dt;
    if (tutorial.hideAt > 0 && tutorial.time >= tutorial.hideAt) {
      tutorial.hideAt = 0; hideHint();
      if (tutorial.index >= tutorial.steps.length) finishTutorial();
    }
    const step = tutorial.steps[tutorial.index];
    if (step && tutorial.time >= step.at) {
      showHint(step.text, step.glyph);
      tutorial.hideAt = step.at + HINT_SECONDS;
      tutorial.index++; tutorial.shownCount++;
    }
  }
  function finishTutorial() { tutorial.active = false; tutorial.done = true; writeFlag(TUTORIAL_KEY, true); }

  // Drifting golden dust motes behind the title (pure CSS animation; built once).
  function buildDust() {
    let html = '';
    for (let i = 0; i < 18; i++) {
      html += `<i style="--x:${(Math.random() * 100).toFixed(1)}%;--y:${(30 + Math.random() * 80).toFixed(1)}%;--s:${(2 + Math.random() * 4).toFixed(1)}px;` +
        `--d:${(7 + Math.random() * 8).toFixed(1)}s;--delay:${(-Math.random() * 14).toFixed(1)}s;--dx:${((Math.random() - 0.5) * 90).toFixed(0)}px;--o:${(0.35 + Math.random() * 0.5).toFixed(2)}"></i>`;
    }
    el.dust.innerHTML = html;
  }

  // Small burst of confetti behind the "New best!" badge.
  function spawnConfetti() {
    const colors = ['#ffd25a', '#ff9e2c', '#7fd45f', '#fff3bf', '#5cc2ff'];
    let html = '';
    for (let i = 0; i < 20; i++) {
      const a = (i / 20) * Math.PI * 2 + Math.random() * 0.3, r = 60 + Math.random() * 80;
      html += `<i style="--dx:${(Math.cos(a) * r).toFixed(0)}px;--dy:${(Math.sin(a) * r - 30).toFixed(0)}px;--rot:${(Math.random() * 720 - 360) | 0}deg;` +
        `--c:${colors[i % colors.length]};--delay:${(0.3 + Math.random() * 0.2).toFixed(2)}s"></i>`;
    }
    el.confetti.innerHTML = html;
  }

  function showSettings() { hideAll(); refreshSettings(); el.settings.hidden = false; }
  function closeSettings() { api.showMenu('menu'); }

  // ---- shop ------------------------------------------------------------------------------------
  function effectText(key, lv, maxed) {
    const u = UPGRADES[key];
    const fmt = (n) => (Math.round(n * 10) / 10).toString();
    if (key === 'magnet' || key === 'shield' || key === 'boost') {
      const base = key === 'shield' ? CONFIG.shieldDuration : key === 'magnet' ? CONFIG.magnetDuration : CONFIG.boostDuration;
      const cur = base + u.bonus(lv);
      return maxed ? `Lasts ${fmt(cur)} s` : `Lasts ${fmt(cur)} s → ${fmt(base + u.bonus(lv + 1))} s`;
    }
    if (key === 'coin') {
      const cur = CONFIG.coinScore + u.bonus(lv);
      return maxed ? `${cur} pts per coin` : `${cur} → ${CONFIG.coinScore + u.bonus(lv + 1)} pts per coin`;
    }
    return lv > 0 ? 'Every run starts boosted' : 'Start every run boosted';
  }

  function renderShop(flashKey = null) {
    const coins = game.save.coins;
    el.shopCoins.textContent = formatScore(coins);
    const scroll = el.shopList.scrollTop;
    let html = '';
    for (const key of Object.keys(UPGRADES)) {
      const u = UPGRADES[key];
      const lv = game.save.upgrades[key] || 0;
      const maxed = lv >= u.max;
      const cost = maxed ? 0 : upgradeCost(key, lv);
      const afford = !maxed && coins >= cost;
      let pips = '';
      for (let i = 0; i < u.max; i++) pips += `<i class="${i < lv ? 'on' : ''}"></i>`;
      const button = maxed
        ? '<span>Max</span>'
        : `<span class="cost"><svg class="coin"><use href="#i-coin"/></svg>${formatScore(cost)}</span><span class="buy-label">${afford ? 'Buy' : 'Need ' + formatScore(cost - coins)}</span>`;
      html += `<div class="card${maxed ? ' maxed' : ''}${key === flashKey ? ' bought' : ''}" style="--c:${ICON_COLOR[key] || '#ffd25a'}">` +
        `<div class="card-icon"><svg><use href="#i-${u.icon}"/></svg></div>` +
        `<div class="card-body"><div class="card-name"><span class="nm">${u.name}</span><span class="card-lv">${maxed ? 'Max' : 'Lv ' + lv + '/' + u.max}</span></div>` +
        `<div class="card-desc">${u.desc}</div><div class="card-effect">${effectText(key, lv, maxed)}</div><div class="pips">${pips}</div></div>` +
        `<button class="btn btn-buy ${maxed ? 'max' : afford ? 'afford' : 'poor'}" data-key="${key}"${maxed ? ' disabled' : ''}>${button}</button></div>`;
    }
    el.shopList.innerHTML = html;
    el.shopList.scrollTop = scroll;
  }

  // ---- public API ------------------------------------------------------------------------------
  const api = {
    blocksTap() { return performance.now() - lastTapBlock < 350 || game.state === 'shop' || !el.settings.hidden; },
    showMenu(which = 'menu') {
      hideAll(); refreshMenu(); setHud(false); setDanger(false); hideHint();
      if (which === 'dead') el.gameover.hidden = false; else el.menu.hidden = false;
    },
    hideMenus() { hideAll(); setHud(true); },
    showPause() {
      hideAll(); setHud(false); refreshSettings();
      el.pauseScore.textContent = formatScore(game.run.score);
      el.pauseDist.textContent = formatScore(game.run.distance) + ' m';
      el.pause.hidden = false;
    },
    showGameOver(run) {
      hideAll(); setHud(false); setDanger(false); hideHint();
      const d = DEATH_TEXT[run.deathType] || { title: 'Run over', line: 'The temple keeps its secrets.' };
      el.goTitle.textContent = d.title;
      el.goReason.textContent = d.line;
      el.goDist.textContent = formatScore(run.distance) + ' m';
      el.goCoins.textContent = '+' + formatScore(run.coins);
      el.goHi.textContent = formatScore(game.save.best);
      go.t = 0; go.target = run.score; go.text = '0'; el.goScore.textContent = '0';
      el.goBest.hidden = !run.best;
      if (run.best) spawnConfetti();
      el.gameover.hidden = false;
      refreshMenu();
    },
    showShop() { hideAll(); renderShop(); el.shop.hidden = false; },
    toast(text, ms = 1600) {
      if (!text) { toastTimer = 0; el.toast.classList.remove('show'); return; }
      el.toast.textContent = text;
      replay(el.toast, 'show');
      toastTimer = ms / 1000;
    },
    hint(text) { apiHint = text || ''; if (apiHint) showHint(apiHint, ''); else hideHint(); },
    update(dt) {
      const st = game.state;
      if (toastTimer > 0) { toastTimer -= dt; if (toastTimer <= 0) el.toast.classList.remove('show'); }
      if (st === 'running' || st === 'dying') {
        const run = game.run;
        // The score eases toward the true value so it visibly counts up.
        shownScore += (run.score - shownScore) * Math.min(1, dt * (st === 'dying' ? 30 : 10));
        if (run.score - shownScore < 0.5) shownScore = run.score;
        const s = formatScore(shownScore);
        if (s !== lastScoreText) { lastScoreText = s; el.score.textContent = s; }
        const m = run.multiplier;
        if (m !== lastMult) {
          const grew = lastMult > 0 && m > lastMult;
          lastMult = m; el.multVal.textContent = m;
          el.mult.classList.toggle('boosted', game.power.boost > 0);
          if (grew) replay(el.mult, 'pop');
        }
        if (run.coins !== lastCoins) { lastCoins = run.coins; el.coins.textContent = formatScore(run.coins); }
        const d = Math.floor(run.distance);
        if (d !== lastDist) { lastDist = d; el.dist.textContent = formatScore(d) + ' m'; }
        // Power-up rings: one per active power, draining clockwise, blinking for the last two seconds.
        for (const t of POWER_TYPES) {
          const p = powers[t], rem = game.power[t];
          if (rem > 0) {
            if (!p.shown) { p.shown = true; p.root.hidden = false; p.lastSecs = -1; }
            const frac = Math.min(1, rem / game.powerDuration(t));
            p.ring.style.strokeDashoffset = (RING * (1 - frac)).toFixed(1);
            const secs = Math.ceil(rem);
            if (secs !== p.lastSecs) { p.lastSecs = secs; p.secs.textContent = secs; }
            const low = rem < 2;
            if (low !== p.low) { p.low = low; p.root.classList.toggle('low', low); }
          } else if (p.shown) { p.shown = false; p.root.hidden = true; }
        }
        setDanger(st === 'running' && game.player.stumbleTimer > 0);
        if (st === 'running' && tutorial.active && !apiHint) tickTutorial(dt);
      } else if (st === 'dead' && go.t < 1) {
        go.t = Math.min(1, go.t + dt / 1.1);
        const e = 1 - Math.pow(1 - go.t, 3);
        const s = formatScore(go.target * e);
        if (s !== go.text) { go.text = s; el.goScore.textContent = s; }
      }
    },
  };

  // ---- game events -----------------------------------------------------------------------------
  const ev = game.events;
  ev.on('start', () => {
    shownScore = 0; lastScoreText = ''; lastMult = 0; lastDist = -1; lastCoins = -1;
    el.hud.classList.remove('dying');
    setDanger(false); apiHint = ''; hideHint();
    for (const t of POWER_TYPES) { const p = powers[t]; p.shown = false; p.low = false; p.root.hidden = true; p.root.classList.remove('low'); }
    tutorial.active = !tutorial.done; tutorial.index = 0; tutorial.time = 0; tutorial.hideAt = 0; tutorial.shownCount = 0;
    if (toastTimer <= 0) api.toast('Run!', 900);
  });
  ev.on('death', () => {
    el.hud.classList.add('dying');
    setDanger(false); hideHint();
    if (tutorial.active) { tutorial.active = false; if (tutorial.shownCount >= 3) finishTutorial(); }
  });
  ev.on('gameover', () => { el.hud.classList.remove('dying'); });   // showGameOver() is called by the game right after
  ev.on('coin', () => replay(el.coinsWrap, 'pop'));
  ev.on('power', (type) => { const p = powers[type]; if (p && !p.shown) { p.shown = true; p.root.hidden = false; p.lastSecs = -1; } });
  ev.on('powerend', (type) => { const p = powers[type]; if (p && p.shown) { p.shown = false; p.low = false; p.root.hidden = true; p.root.classList.remove('low'); } });
  ev.on('stumble', () => replay(el.warn, 'show'));
  ev.on('pause', () => { hideHint(); });                                // showPause() is called by the game
  ev.on('resume', () => { if (apiHint) showHint(apiHint, ''); });
  ev.on('menu', () => { el.hud.classList.remove('dying'); });         // showMenu('menu') is called by the game
  ev.on('settings', refreshSettings);
  ev.on('quality', refreshSettings);
  ev.on('upgrade', (key) => { renderShop(key); refreshMenu(); });
  // Escape closes the settings overlay (the game only handles Escape while running / paused / in the shop).
  window.addEventListener('keydown', (e) => { if (e.code === 'Escape' && !el.settings.hidden) closeSettings(); });

  // ---- init ------------------------------------------------------------------------------------
  buildDust();
  el.menuControls.innerHTML = mobile
    ? 'Swipe <kbd>&larr;</kbd><kbd>&rarr;</kbd> lanes &amp; turns &middot; <kbd>&uarr;</kbd> jump &middot; <kbd>&darr;</kbd> slide'
    : 'Arrow keys or <kbd>WASD</kbd> &middot; <kbd>Space</kbd> jump &middot; <kbd>P</kbd> pause';
  refreshSettings();
  api.showMenu('menu');
  return api;
}
