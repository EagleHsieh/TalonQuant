# viz/ - Visualization（視覺化）

## decision_path_prototype.html
Self-contained prototype of the **decision path（決策路徑）** view. Open the file in any browser; no install, no network needed except optional Google Fonts.

**Uses synthetic data（合成資料）only.** Prices come from a seeded random walk (three scenarios). Model weights and scales are illustrative and were not fitted to any data. It is a design study for the interface, not a trading model and not financial advice.

What it shows:
- Six stages: data, features, signal, risk checks, position size, recommendation. Click a stage to inspect its numbers; "Trace path" steps through them.
- Model attribution（模型歸因）: weight x z-score per feature. Exact for this linear score; not causation.
- Rule-based signal (BUY at probability >= 60%, AVOID at <= 40%), an illustrative uncertainty range, and four risk checks (volatility, drawdown, concentration, liquidity).
- Position size as the smallest of three limits (risk budget, concentration cap, liquidity cap). Try the $100,000,000 account to see liquidity take over.
- Your decision（你的決定）: accept, modify, or override. Overrides need a reason and a 5-second pause. Everything is listed in a decision record（決策記錄）; a trial counter reminds you of multiple testing（多重檢定）.

Limits: no costs or slippage; in-page record only (resets on reload); thresholds and caps are placeholders. The pause and trial counter are design proposals; whether they change behavior is untested (see docs/DECISIONS.md, item 23).

Tests for the pure logic (no look-ahead, attribution sums to score, size limits, risk blocking): `node tests/test_decision_path_logic.mjs`
