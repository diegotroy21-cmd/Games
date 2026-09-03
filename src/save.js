// Persistent progression: best score, coin bank and upgrade levels (localStorage, guarded).
const KEY = 'relic-rush-save-v1';

export const UPGRADES = {
  magnet:  { name: 'Coin Magnet',   desc: 'Magnet lasts longer',           icon: 'magnet', max: 5, base: 250, bonus: (lv) => lv * 2.5 },
  shield:  { name: 'Shield',        desc: 'Shield lasts longer',           icon: 'shield', max: 5, base: 250, bonus: (lv) => lv * 2.0 },
  boost:   { name: 'Boost',         desc: 'Boost lasts longer',            icon: 'boost',  max: 5, base: 300, bonus: (lv) => lv * 1.2 },
  coin:    { name: 'Coin Value',    desc: 'Each coin is worth more score', icon: 'coin',   max: 5, base: 200, bonus: (lv) => lv * 2 },
  head:    { name: 'Head Start',    desc: 'Begin each run with a boost',   icon: 'head',   max: 1, base: 1500, bonus: (lv) => lv },
};

export function upgradeCost(key, level) {
  const u = UPGRADES[key];
  return Math.round(u.base * Math.pow(2.1, level));
}

const DEFAULTS = () => ({
  best: 0, bestDistance: 0, coins: 0, runs: 0, totalCoins: 0,
  upgrades: { magnet: 0, shield: 0, boost: 0, coin: 0, head: 0 },
  settings: { sound: true, music: true, quality: 'auto' },
});

export function loadSave() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULTS();
    const d = DEFAULTS();
    const parsed = JSON.parse(raw);
    Object.assign(d, parsed);
    d.upgrades = { ...DEFAULTS().upgrades, ...(parsed.upgrades || {}) };
    d.settings = { ...DEFAULTS().settings, ...(parsed.settings || {}) };
    return d;
  } catch { return DEFAULTS(); }
}

export function writeSave(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch { /* private mode etc. */ }
}
