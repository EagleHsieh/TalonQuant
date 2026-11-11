# Quantitative Trading Project

An open, research-grade toolkit for quantitative trading research on **US equities**, built to be useful from an individual trader with a small account to a professional or institutional team, with interactive visualization as a core feature.

> **Status:** early setup. No strategy or data code yet. See [`docs/STATUS.md`](docs/STATUS.md) for the current state. Project name: **TalonQuant**.

## Goals
- Be useful to every kind of trader, from individuals with few assets to large firms.
- Be a rigorous resource for competitive traders, including aspiring quant traders.
- Provide excellent, interactive visualization that users can explore.
- Keep every claim, formula, and reference **verifiable**. Nothing is made up. See [`docs/references.md`](docs/references.md).

## Design principles
1. **Correctness first.** Sourced facts only; unverified items are labeled as such.
2. **Reproducible.** Any result can be rerun from code, data manifest, and parameters.
3. **Realistic backtests.** Transaction costs, slippage, no look-ahead, no survivorship bias.
4. **Holding period is a parameter.** The same engine should serve short- and long-term strategies.
5. **Layered by user tier.** A core library with no UI dependency, with tiers on top (see below).

## Planned tiers
| Tier | Audience | Approach |
|---|---|---|
| Individual | Small accounts | Local-first, free data sources, simple dashboard |
| Pro | Serious independent traders | Parallel backtests, walk-forward validation, richer interactive explorer |
| Institutional | Teams and firms | Cloud deployment, database server, audit logs, access control (later) |

## Discussion so far（討論紀錄）
A summary of what the owner and Claude have discussed. Numbers refer to [`docs/DECISIONS.md`](docs/DECISIONS.md), which has the full record and each item's status (Decided 已決定 / Proposed 提議中).

- **Scope（範圍）.** US equities. Holding period (持有期間) is a strategy parameter: long-term means held more than one year, per IRS Topic 409. Short- to medium-term strategies on daily data come first (7). Hedge-fund methods (避險基金) are design inspiration; running a fund is deferred (13).
- **Users（使用者）.** From small individual accounts to institutional teams, through layered tiers (5).
- **Storage（儲存）.** Partitioned Parquet as source of truth, DuckDB as query engine, one data-access module so the backend can be swapped for a database server later (8, 14).
- **Decision system（決策系統）.** Rule-based and data-driven (資料驅動). The system recommends; the user decides (17). Feature contributions are labeled *model attribution* (模型歸因), never causation (22).
- **Validation（驗證）.** Walk-forward (前進式分析), purged k-fold with embargo, combinatorial purged cross-validation, Probability of Backtest Overfitting, Deflated Sharpe Ratio, and a trial log (試驗記錄) for multiple testing (多重檢定) (19). Details in [`docs/METHODS.md`](docs/METHODS.md).
- **Three-agent debate（三方辯論）.** Proposer (提案者), opponent (反方), and judge (裁判), with at least five hypotheses per round and every verdict archived. Statistical tests, not the judge, decide claims about data (20). No evidence yet that debate improves trading decisions. Details in [`docs/DEBATE.md`](docs/DEBATE.md).
- **Freshness（時效性）.** As-of dates on data and sources, scheduled source checks, and stability tests across old and new periods (21).
- **Human-computer interaction（人機互動）.** Pre-commitment display, a pause before override, uncertainty ranges, override tracking, and no dark patterns (23). Whether these change behavior is untested and needs user testing.
- **Visualization（視覺化）.** Interactive decision-path (決策路徑) view that shows how data becomes a recommendation. Planned first as a prototype on clearly labeled synthetic data (合成資料).
- **Working method（工作方式）.** `main` plus topic branches merged through pull requests (2); conflict check in contents and code before every merge (15); Mandarin next to terminology (18); multiple agents in parallel (6); handoff documents for any AI agent (3).
- **Rejected or deferred（暫不採用）.** Quantum computing is an optional research module only, benchmarked against classical baselines (11). Cloud deployment comes later, with Docker from the start (12).

## Updates（更新紀錄）
| Date | Update |
|---|---|
| 2026-10-12 | Repository created; skeleton, handoff documents, and storage decision (PR #1, #2) |
| 2026-10-12 | Renamed to TalonQuant (PR #3) |
| 2026-11-11 | Methods, debate protocol, and bilingual glossary added (PR #4) |
| 2026-11-11 | This README updated with the discussion summary and sources |
| Next | Synthetic-data prototype of the decision-path visualization |

## Sources used（參考來源）
Only sources that were opened and checked are listed. The full table, with what each source supports, is in [`docs/references.md`](docs/references.md).

**Market structure, tax, and regulation（市場結構、稅務與法規）**
- IRS Topic 409, holding period: https://www.irs.gov/taxtopics/tc409
- FINRA pattern day trader rule change: [King & Spalding](https://www.kslaw.com/insights/articles/finra-adopts-sweeping-changes-to-margin-requirements-for-day-trading), [E*TRADE](https://us.etrade.com/knowledge/library/margin/pattern-day-trading-rule-change)
- Hedge fund exemptions: [Proskauer via National Law Review](https://natlawreview.com/article/hedge-start-what-key-exemptions-apply-hedge-funds)

**Industry tools（業界工具）**
- [GS Quant](https://github.com/goldmansachs/gs-quant) (Goldman Sachs)
- [Perspective](https://github.com/finos/perspective/blob/asan-expr/README.md) (originally J.P. Morgan, now FINOS)
- [Capitalize Analytics](https://capitalizeconsulting.com/)

**Data storage（資料儲存）**
- DuckDB docs: [larger-than-memory processing](https://duckdb.org/docs/stable/guides/performance/environment), [workload tuning limits](https://duckdb.org/docs/current/guides/performance/how_to_tune_workloads), [concurrency](https://duckdb.org/docs/stable/connect/concurrency.html)

**Methods and behavior（方法與行為研究）**
- M1 Bailey and Lopez de Prado, Deflated Sharpe Ratio, 2014: https://papers.ssrn.com/abstract=2460551
- M2 Bailey, Borwein, Lopez de Prado, Zhu, Probability of Backtest Overfitting, 2017: https://papers.ssrn.com/abstract=2326253
- M3 Lopez de Prado, *Advances in Financial Machine Learning*, 2018 (chapter structure only; full text not read)
- M4 Lundberg and Lee, SHAP, 2017: https://arxiv.org/abs/1705.07874
- M5 Du et al., multiagent debate: https://arxiv.org/abs/2305.14325
- M6 Irving, Christiano, Amodei, AI safety via debate: https://arxiv.org/abs/1805.00899
- M7 Barber and Odean, 2000: https://econpapers.repec.org/RePEc:bla:jfinan:v:55:y:2000:i:2:p:773-806
- M8 Kahneman and Tversky, Prospect Theory, 1979: https://www.econometricsociety.org/publications/econometrica/1979/03/01/prospect-theory-analysis-decision-under-risk

**Known discrepancies and unverified items（待查證項目）.** Some details are still open, for example the SEC approval date of the FINRA change, the publication year and venue of M2 and M5, and the Taiwan result attributed to Barber, Lee, Liu, and Odean. Several claims are unverified and must not be relied on until checked, including the Egger et al. quantum computing paper, the qualified purchaser threshold, Perspective's license, and whether debate or HCI nudges improve trading outcomes. See the last two sections of [`docs/references.md`](docs/references.md).

## Repository layout
```
docs/        Project documents (status, decisions, references)
data/        Local data (git-ignored; see data/README.md)
src/         Source code
tests/       Automated tests
notebooks/   Research notebooks
viz/         Visualization / dashboard code
AGENTS.md    Rules and context for any AI agent or contributor
```

## Contributing (humans and AI agents)
Read [`AGENTS.md`](AGENTS.md) first. Work on a branch and open a pull request; `main` is changed only through reviewed pull requests.

## Disclaimer
This project is for research and education. It is **not financial advice**. Backtested results do not guarantee future performance, and trading involves risk of loss.
