// Tests for the pure logic inside viz/decision_path_prototype.html (between LOGIC markers).
// Run: node tests/test_decision_path_logic.mjs
import fs from 'node:fs';
import assert from 'node:assert/strict';
const html = fs.readFileSync(new URL('../viz/decision_path_prototype.html', import.meta.url), 'utf8');
const src = html.split('/* LOGIC:START */')[1].split('/* LOGIC:END */')[0];
const L = new Function(src + '; return {makeSeries,analyze,SCENARIOS,FEATURES,logistic};')();
const P = (o = {}) => Object.assign({ equity: 25000, riskPct: 1, stopMult: 2, adv: 40e6, maxPosPct: 20, liqPct: 1 }, o);
let n = 0; const t = (name, f) => { f(); n++; console.log('ok -', name); };

t('series is deterministic and has 252 days', () => {
  const s = L.SCENARIOS[0]; const a = L.makeSeries(s.seed, s.segs, 100), b = L.makeSeries(s.seed, s.segs, 100);
  assert.deepEqual(a, b); assert.equal(a.length, 252); assert.ok(a.every(x => x > 0));
});
t('no look-ahead: result unchanged when future days are removed', () => {
  for (const s of L.SCENARIOS) { const p = L.makeSeries(s.seed, s.segs, 100);
    for (const day of [60, 130, 200, 251]) {
      const full = L.analyze(p, day, P({ adv: s.adv })), cut = L.analyze(p.slice(0, day + 1), day, P({ adv: s.adv }));
      assert.deepEqual(full, cut); } }
});
t('contributions add up exactly to the score', () => {
  const s = L.SCENARIOS[1], p = L.makeSeries(s.seed, s.segs, 100);
  for (let d = 60; d < 252; d += 7) { const a = L.analyze(p, d, P()); const sum = a.feats.reduce((x, f) => x + f.contrib, 0); assert.ok(Math.abs(sum - a.score) < 1e-12); }
});
t('probability matches logistic(score), band contains it, action follows thresholds', () => {
  for (const s of L.SCENARIOS) { const p = L.makeSeries(s.seed, s.segs, 100);
    for (let d = 60; d < 252; d += 5) { const a = L.analyze(p, d, P({ adv: s.adv }));
      assert.ok(Math.abs(a.prob - L.logistic(a.score)) < 1e-12);
      assert.ok(a.band[0] <= a.prob && a.prob <= a.band[1]);
      assert.equal(a.action, a.prob >= 0.6 ? 'BUY' : a.prob <= 0.4 ? 'AVOID' : 'WAIT'); } }
});
t('position size never exceeds any of the three limits', () => {
  for (const eq of [5000, 25000, 1e6, 1e8]) for (const s of L.SCENARIOS) { const p = L.makeSeries(s.seed, s.segs, 100);
    for (let d = 60; d < 252; d += 11) { const a = L.analyze(p, d, P({ equity: eq, adv: s.adv })), z = a.sizing;
      assert.ok(z.shares >= 0 && z.shares <= z.sharesRisk && z.shares <= z.sharesConc && z.shares <= z.sharesLiq);
      assert.ok(z.shares * a.price <= eq * 0.2 + a.price); assert.ok(z.shares * a.price <= s.adv * 0.01 + a.price);
      assert.ok(z.stop < a.price); } }
});
t('large account is limited by liquidity, small account by risk or concentration', () => {
  const s = L.SCENARIOS[0], p = L.makeSeries(s.seed, s.segs, 100);
  assert.equal(L.analyze(p, 200, P({ equity: 1e8, adv: s.adv })).sizing.binding, 'liquidity cap');
  assert.notEqual(L.analyze(p, 200, P({ equity: 25000, adv: s.adv })).sizing.binding, 'liquidity cap');
});
t('a failed risk check blocks a BUY and gives zero shares', () => {
  let seen = false;
  for (const s of L.SCENARIOS) { const p = L.makeSeries(s.seed, s.segs, 100);
    for (let d = 60; d < 252; d++) { const a = L.analyze(p, d, P({ adv: s.adv }));
      if (a.blocked) { assert.equal(a.rec.shares, 0); assert.notEqual(a.rec.label, 'BUY'); seen = true; } } }
  console.log('   (blocked case found in synthetic scenarios:', seen, ')');
});
t('scenarios produce different behavior (at least two distinct recommendations across them)', () => {
  const labels = new Set();
  for (const s of L.SCENARIOS) { const p = L.makeSeries(s.seed, s.segs, 100); for (let d = 60; d < 252; d += 3) labels.add(L.analyze(p, d, P({ adv: s.adv })).rec.label); }
  console.log('   labels seen:', [...labels].join(', ')); assert.ok(labels.size >= 3);
});
console.log(n + ' tests passed');
