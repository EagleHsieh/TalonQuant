# Methods（方法）

Purpose: the methods TalonQuant proposes to use, and the status of each.

- **Verified** = the source was opened and checked (see `docs/references.md`, IDs M1-M8).
- **Proposed** = our own design, not yet sourced or tested.
- Terms follow `docs/GLOSSARY.md`.

**Principle:** decisions are rule-based and data-driven（資料驅動）. The system gives a recommendation; the **user makes the final decision**.

## 1. Data（資料層）
- Ingest, validate, and adjust for splits and dividends.
- Use point-in-time data（時點資料）and handle survivorship bias（存活者偏誤）.
- Every data point carries its source and an as-of date.
- Status: Proposed (standard practice; sources still to be added).

## 2. Labeling（標註）
- Triple-barrier method（三重障礙法）: profit target, stop loss, time expiry. Listed in M3, chapter 3 (section 3.4).
- Meta-labeling（元標註）: M3, chapter 3 (section 3.6).
- Status: Verified that both appear in M3's table of contents. Details beyond the table of contents are not yet read from the book itself.

## 3. Strategy（策略）
- Start with simple rule-based baselines（基準模型）, add machine learning later, and compare every model with a baseline.
- Status: Proposed.

## 4. Validation（驗證）
| Method | Source | Status |
|---|---|---|
| Walk-forward（前進式分析） | M3, chapter 12 (12.2) | Verified in table of contents |
| Purged k-fold with embargo（清除式 k 折交叉驗證、隔離期） | M3, chapter 7 (7.4) | Verified in table of contents |
| Combinatorial purged cross-validation（組合式清除交叉驗證） | M3, chapter 12 (12.4) | Verified in table of contents |
| Probability of Backtest Overfitting, via combinatorially symmetric cross-validation（回測過度配適機率） | M2 | Verified (abstract read) |
| Deflated Sharpe Ratio（去膨脹夏普比率） | M1 | Verified (abstract read) |

- **Trial log:** every strategy, parameter set, and hypothesis tried is logged. The number of trials is an input to the Deflated Sharpe Ratio, which corrects for selection bias under multiple testing（多重檢定）.
- The embargo length is not a universal default. Run a sensitivity check (per a secondary source; not yet checked against M3).
- Status of the trial-log rule: Proposed.

## 5. Costs, sizing, risk（成本、部位、風險）
- Transaction costs and slippage（滑價）, position sizing（部位規模配置）, drawdown（回撤）and exposure limits.
- Status: Proposed.

## 6. Decision engine（決策引擎）
- Rules are fixed in advance; thresholds are not changed after seeing results.
- Output: a recommendation, a confidence level, and the inputs behind it.
- Every recommendation is saved as a decision record（決策記錄）. User overrides are logged.
- Status: Proposed.

## 7. Feedback loop（回饋迴路）
- Compare paper or live results with backtest expectations; monitor drift（漂移）and performance decay; test changes as challengers against the current version (champion-challenger, 冠軍／挑戰者模型).
- **Warning:** every change is another trial. Keep an untouched final holdout（保留集）and count trials.
- Status: Proposed.

## 8. Explanation and visualization（解釋與視覺化）
- Animated decision path（決策路徑）: data → features → signal → risk checks → position size → recommendation. Users click any step to see its values.
- Contribution view: SHAP assigns each feature an importance value for a particular prediction (M4).
- **Label this "model attribution（模型歸因）", never "cause."** It shows what drives the model's output, not what causes prices to move.
- Extras: what-if sliders, a time scrubber that replays past decisions, an override log.
- The first prototype uses synthetic data（合成資料）, clearly labeled as synthetic.
- Status: Proposed (SHAP itself: Verified, M4).

## 9. Freshness（時效性）
- As-of dates on data and sources, staleness alerts, scheduled checks for new sources.
- Mark each source as preprint（預印本）or peer-reviewed（同儕審查）.
- Newer is not automatically better: test stability across old and new periods and across regime shifts（市場狀態轉換）.
- Status: Proposed.

## 10. Human-computer interaction（人機互動, HCI）
- Evidence that individual investors are affected by behavior: M7 (overconfidence（過度自信）and trading performance) and M8 (prospect theory（展望理論）; value function generally steeper for losses than gains).
- Design proposals, effectiveness **unverified**, so test with real users: show the rules before the trade (pre-commitment, 事前承諾); a short pause before an override; uncertainty ranges instead of single numbers; track how user overrides performed against the rules.
- **No dark patterns:** no urgency cues, gamification, or other design that pushes users to trade. Users keep full control.
- Status: Proposed.

## Open questions
- Which holding-period tier to implement first (see decision 7 in `docs/DECISIONS.md`).
- Data source and budget.
- Whether to use the debate protocol (`docs/DEBATE.md`) at development time only, or also at runtime.

*Not financial advice.*
