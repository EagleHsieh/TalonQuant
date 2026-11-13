# Candidate research studies（候選研究專題）

Status: **Proposed.** Source of the idea list: an Instagram carousel by the Wall Street Quants account (posted October 26, per the screenshots the owner shared on 2026-11-12). The post is marketing for a paid service and its charts are simulated, so it is only a pointer. Each study below rests on the **paper**, checked in `docs/references.md` (M9-M13), not on the post.

## Why add studies
TalonQuant needs real end-to-end work to test the data layer, the backtest engine, validation, and the decision path. Each study below is small, built on a published paper, and exercises a different part of the system. They also double as portfolio pieces.

## Recommended order
| Order | Study | Paper | What it tests in TalonQuant | Data needed | Fit |
|---|---|---|---|---|---|
| 1 | **1/N vs. mean-variance**（等權重 vs. 均異數最適化*） | M12 DeMiguel, Garlappi, Uppal (2009) | Baseline（基準模型）rule: every strategy must beat equal weights out of sample. Validation stack. | Daily prices | Strong |
| 2 | **Post-earnings drift**（財報後漂移） | M9 Bernard, Thomas (1989) | Point-in-time data, announcement-date handling, look-ahead control, walk-forward | Daily prices plus earnings announcement dates and estimates | Strong |
| 3 | **Factor model from scratch**（因子模型） | M10 Fama, French (1993) | Return attribution（報酬歸因）: how much of a strategy's return is exposure to known factors, not alpha | Daily or monthly prices plus fundamentals (book value, shares) | Strong |
| 4 | **Optimal execution simulator**（最佳執行模擬） | M11 Almgren, Chriss (2000/01) | Cost and slippage（滑價）model; links to the liquidity cap in the decision path | Daily volume and volatility; impact parameters are assumptions | Good |
| 5 | **Order-flow imbalance**（委託流不平衡） | M13 Cont, Kukanov, Stoikov (2014) | Market microstructure on high-frequency data | Order-book data (costly) | Later |

Reasoning for the order:
- **1 first** because it needs only prices and gives every later study a baseline.
- **2 second** because it forces us to solve point-in-time data and look-ahead bias（前視偏誤）, which the whole project depends on. It is blocked until we choose an earnings data source (open decision).
- **3** reuses the same data and gives an honest answer to "is this alpha or just exposure?".
- **4** becomes useful once a backtest exists; until then it is a stand-alone simulation.
- **5 later** because it needs order-book data, which is outside the daily-data scope (decision 7).

## Rules for every study (from AGENTS.md and METHODS.md)
1. State how it avoids look-ahead bias, survivorship bias（存活者偏誤）, and unrealistic costs.
2. Compare against the 1/N baseline and report out-of-sample results (walk-forward; purged cross-validation where labels overlap).
3. Log every variant tried as a trial（試驗）; report the Deflated Sharpe Ratio and the number of trials.
4. Cite the paper from `docs/references.md`; do not assert that a published effect still holds today. Test it on recent data and across periods (decision 21). Whether any of these effects persist is **unverified**.
5. Run the three-agent debate（三方辯論）on the study's design and on its conclusions; archive every verdict.

## Cautions
- DeMiguel et al. report that none of 14 models they tested consistently beat 1/N **on the datasets and period they studied** (M12). That is not a rule for all markets.
- The post's description of M9 and M10 has not been checked against the papers (abstracts were not available in the records opened).
- Published effects can shrink once known; use them to test our pipeline first, and as trading ideas only after our own out-of-sample tests.

## Open questions
- Earnings data source and budget (announcement timestamps and consensus estimates).
- Fundamentals source for factor construction (book value, shares outstanding), with point-in-time handling.
