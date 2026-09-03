// Minimal DOM HUD: score, coins, multiplier, power-up bar, menus, shop, hints. (Polished later.)
import { formatScore } from './util.js';
import { UPGRADES, upgradeCost } from './save.js';

const $ = (id) => document.getElementById(id);

export function createHUD(game) {
  const el = {
    hud: $('hud'), score: $('hud-score'), mult: $('hud-mult'), coins: $('hud-coins'), dist: $('hud-dist'),
    power: $('hud-power'), powerIcon: $('hud-power-icon'), powerFill: $('hud-power-fill'), toast: $('hud-toast'), hint: $('hud-hint'),
    menu: $('menu'), menuBest: $('menu-best'), menuCoins: $('menu-coins'), gameover: $('gameover'), pause: $('pause'), shop: $('shop'),
    goTitle: $('go-title'), goBest: $('go-best'), goScore: $('go-score'), goDist: $('go-dist'), goCoins: $('go-coins'), goHi: $('go-hi'),
    shopCoins: $('shop-coins'), shopList: $('shop-list'), sound: $('btn-sound'),
  };
  let toastTimer = 0;
  let shownScore = 0;
  let lastTapBlock = 0;

  const bind = (id, fn) => { const b = $(id); if (b) b.addEventListener('click', (e) => { e.stopPropagation(); lastTapBlock = performance.now(); fn(); }); };
  bind('btn-play', () => game.startRun());
  bind('btn-again', () => game.startRun());
  bind('btn-shop', () => game.openShop());
  bind('btn-shop2', () => game.openShop());
  bind('btn-shop-close', () => game.closeShop());
  bind('btn-resume', () => game.togglePause());
  bind('btn-sound', () => game.toggleSound());
  // Prevent overlay pointer events from generating swipes/taps on the game layer.
  for (const o of [el.menu, el.gameover, el.pause, el.shop]) o.addEventListener('pointerdown', (e) => e.stopPropagation());

  const hideAll = () => { for (const o of [el.menu, el.gameover, el.pause, el.shop]) o.hidden = true; };

  function refreshMenu() {
    el.menuBest.textContent = formatScore(game.save.best);
    el.menuCoins.textContent = formatScore(game.save.coins);
    el.sound.textContent = 'Sound: ' + (game.save.settings.sound ? 'On' : 'Off');
  }

  const api = {
    blocksTap() { return performance.now() - lastTapBlock < 300 || game.state === 'shop'; },
    showMenu(which = 'menu') { hideAll(); refreshMenu(); if (which === 'dead') el.gameover.hidden = false; else el.menu.hidden = false; el.hud.hidden = which !== 'dead'; },
    hideMenus() { hideAll(); el.hud.hidden = false; },
    showPause() { hideAll(); el.pause.hidden = false; },
    showGameOver(run) {
      hideAll();
      const titles = { fall: 'Fell into the abyss', hit: 'Smashed!', burn: 'Burned!', caught: 'Caught by the demons!' };
      el.goTitle.textContent = titles[run.deathType] || 'Run over';
      el.goBest.hidden = !run.best;
      el.goScore.textContent = formatScore(run.score);
      el.goDist.textContent = Math.floor(run.distance) + ' m';
      el.goCoins.textContent = formatScore(run.coins);
      el.goHi.textContent = formatScore(game.save.best);
      el.gameover.hidden = false;
      refreshMenu();
    },
    showShop() {
      hideAll();
      el.shop.hidden = false;
      renderShop();
    },
    toast(text, ms = 1600) {
      if (!text) { el.toast.classList.remove('show'); return; }
      el.toast.textContent = text; el.toast.classList.add('show'); toastTimer = ms / 1000;
    },
    hint(text) { if (!text) el.hint.classList.remove('show'); else { el.hint.textContent = text; el.hint.classList.add('show'); } },
    update(dt) {
      if (game.state === 'running' || game.state === 'dying') {
        shownScore += (game.run.score - shownScore) * Math.min(1, dt * 12);
        el.score.textContent = formatScore(shownScore);
        el.mult.textContent = 'x' + game.run.multiplier;
        el.coins.textContent = formatScore(game.run.coins);
        el.dist.textContent = Math.floor(game.run.distance) + ' m';
        let active = null, frac = 0;
        for (const k of ['boost', 'shield', 'magnet']) if (game.power[k] > 0) { active = k; frac = game.power[k] / game.powerDuration(k); break; }
        if (active) { el.power.hidden = false; el.powerIcon.className = 'power-icon ' + active; el.powerFill.style.width = (frac * 100).toFixed(1) + '%'; }
        else el.power.hidden = true;
        if (toastTimer > 0) { toastTimer -= dt; if (toastTimer <= 0) el.toast.classList.remove('show'); }
      }
    },
  };

  function renderShop() {
    el.shopCoins.textContent = formatScore(game.save.coins);
    el.shopList.innerHTML = '';
    for (const key of Object.keys(UPGRADES)) {
      const u = UPGRADES[key];
      const lv = game.save.upgrades[key] || 0;
      const maxed = lv >= u.max;
      const cost = maxed ? 0 : upgradeCost(key, lv);
      const item = document.createElement('div');
      item.className = 'shop-item';
      item.innerHTML = `<div><div class="name">${u.name}</div><div class="desc">${u.desc}</div><div class="level">${'◆'.repeat(lv)}${'◇'.repeat(u.max - lv)}</div></div>`;
      const btn = document.createElement('button');
      btn.className = 'btn';
      btn.textContent = maxed ? 'Max' : cost.toLocaleString('en-US');
      btn.disabled = maxed || game.save.coins < cost;
      btn.addEventListener('click', (e) => { e.stopPropagation(); lastTapBlock = performance.now(); if (game.buyUpgrade(key)) renderShop(); });
      item.appendChild(btn);
      el.shopList.appendChild(item);
    }
  }

  game.events.on('start', () => { shownScore = 0; api.hideMenus(); api.toast(''); api.hint('Swipe ↑ to jump, ↓ to slide, ← → to turn'); setTimeout(() => api.hint(''), 3500); });
  game.events.on('settings', refreshMenu);
  api.showMenu('menu');
  return api;
}
