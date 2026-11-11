# Decision Log

Status values: **Decided** (confirmed by the project owner) or **Proposed** (suggested, awaiting confirmation).

| # | Date | Decision | Status | Notes |
|---|---|---|---|---|
| 1 | 2026-10-12 | Target market: US equities | Decided | Stated by owner |
| 2 | 2026-10-12 | Use a GitHub **repository** (not only a GitHub Project board); `main` plus topic branches; changes via pull requests | Decided | Project board may be added later for task tracking |
| 3 | 2026-10-12 | Keep handoff documents (`AGENTS.md`, `STATUS.md`, `DECISIONS.md`, `references.md`) so other AI agents can continue the work | Decided | Stated by owner |
| 4 | 2026-10-12 | Interactive visualization is a core feature | Decided | Stated by owner |
| 5 | 2026-10-12 | Support users from small individual accounts to large firms, via layered tiers | Decided | See README tiers |
| 6 | 2026-10-12 | Use multiple agents in parallel, each owning a module and branch | Decided | Interfaces fixed first |
| 7 | 2026-10-12 | Start with short- to medium-term strategies on daily data; make holding period a strategy parameter so intraday can be added later | Proposed | Rationale: smaller data, lower infrastructure and execution complexity |
| 8 | 2026-10-12 | Store data as partitioned Parquet files (source of truth) and use DuckDB as the query engine; move to a database server only if needed | Proposed | Avoids DuckDB's single-writer limit when several agents work at once (see docs/references.md). Size estimates, assuming ~8,000 symbols: daily bars ~40M rows over 20 years; 1-minute bars up to ~7.9B rows over 10 years (upper bound). Not benchmarked. |
| 9 | 2026-10-12 | Visualization: Python dashboard prototype first (Plotly Dash or Streamlit), React front end later | Proposed | |
| 10 | 2026-10-12 | Python as the core language | Proposed | |
| 11 | 2026-10-12 | Quantum computing: optional research module only, benchmarked against classical baselines | Proposed | No verified practical advantage assumed |
| 12 | 2026-10-12 | Cloud: later; containerize (Docker) from the start | Proposed | |
| 13 | 2026-10-12 | Hedge-fund methods (long/short, market-neutral, risk limits) as design inspiration; running an actual fund deferred | Proposed | Needs securities counsel if pursued |
| 14 | 2026-10-12 | All data access goes through one module in `src/`, so the storage backend can be swapped | Proposed | Migration path: copy Parquet to cloud storage, load into the target system, run old and new in parallel and compare results, then switch |
| 15 | 2026-10-12 | Before every merge, check for conflicts in contents and code and report the result | Decided | Stated by owner |
| 16 | 2026-10-12 | Project name is **TalonQuant** (GitHub repo `EagleHsieh/TalonQuant`, renamed from `Quantitative-Trading-Project`); the README title stays "Quantitative Trading Project" because it summarizes the project at a glance | Decided | Stated by owner. Name is for now and may change. Exact-name checks on PyPI, npm, and GitHub found no conflicts on 2026-10-12; trademark and domain checks not done |
| 17 | 2026-11-11 | Decisions are rule-based and data-driven; the system recommends and the user makes the final decision | Decided | Stated by owner |
| 18 | 2026-11-11 | Terminology in documents and replies carries a Mandarin translation (Traditional characters, Taiwan finance usage), kept in docs/GLOSSARY.md | Decided | Stated by owner. Terms marked * have no single standard translation |
| 19 | 2026-11-11 | Validation stack: walk-forward, purged k-fold with embargo, combinatorial purged cross-validation, Probability of Backtest Overfitting, Deflated Sharpe Ratio; log every trial | Proposed | See docs/METHODS.md; sources M1-M3 |
| 20 | 2026-11-11 | Three-agent debate protocol (proposer, opponent, judge): at least 5 hypotheses per round, all verdicts archived, statistical tests decide data claims | Proposed | Owner's idea; details proposed. Unproven for trading (M5, M6). See docs/DEBATE.md |
| 21 | 2026-11-11 | Freshness policy: as-of dates on data and sources, scheduled source checks, stability tests across old and new periods | Proposed | Owner wants newest data and sources considered |
| 22 | 2026-11-11 | Visualization labels feature contributions as model attribution, never as causation | Proposed | M4 |
| 23 | 2026-11-11 | HCI principles: pre-commitment display, pause before override, uncertainty ranges, override tracking, no dark patterns; test with users | Proposed | Owner expects HCI to matter later; effectiveness unverified (M7, M8 show behavior effects only) |
| 24 | 2026-11-11 | Decision-path prototype is a single self-contained HTML file on synthetic data, with its pure logic between `LOGIC:START/END` markers so it can be tested in Node; to be replaced by the Python dashboard (item 9) once real data exists | Proposed | Owner asked to start building the prototype |

## Open decisions
- License (none chosen yet; a public repository without a license is not open for reuse by default).
- Repository visibility (currently public).
- Data source and budget.
- Whether Claude may merge pull requests directly in chat. Technically possible with a token that has Contents and Pull requests write access. Proposed rule: only on an explicit instruction naming the pull request, after a conflict check and test run.
- Whether the AI judge uses a different model family from the proposer and opponent.
- Whether the debate protocol runs at development time only, or also at runtime.
