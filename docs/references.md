# References

Rule: only list sources that were actually opened and checked. Unverified items go in the second section until verified. Access date: 2026-10-12 unless a row states otherwise.

## Verified (opened and read)
| Topic | Source | What it supports |
|---|---|---|
| Long-term vs short-term holding period | IRS Topic 409, https://www.irs.gov/taxtopics/tc409 | Held more than one year = long-term; one year or less = short-term |
| Pattern day trader (PDT) rule change | King & Spalding, https://www.kslaw.com/insights/articles/finra-adopts-sweeping-changes-to-margin-requirements-for-day-trading ; E*TRADE, https://us.etrade.com/knowledge/library/margin/pattern-day-trading-rule-change | FINRA Rule 4210 amended; PDT designation and $25,000 minimum replaced by an intraday margin model; $2,000 minimum margin equity remains |
| Hedge fund exemptions (US) | Proskauer via National Law Review, https://natlawreview.com/article/hedge-start-what-key-exemptions-apply-hedge-funds | Reg D private placements; accredited investor and qualified purchaser concepts; Investment Company Act 3(c)(7) |
| GS Quant | https://github.com/goldmansachs/gs-quant | Python toolkit for quantitative finance by Goldman Sachs quants; API access requires institutional client credentials |
| Perspective | https://github.com/finos/perspective/blob/asan-expr/README.md | Interactive visualization component for large and streaming data; originally developed at J.P. Morgan; open-sourced via FINOS |
| Capitalize Analytics | https://capitalizeconsulting.com/ | Data/analytics/AI consulting firm; lists partners including Alteryx, UiPath, Workday Adaptive Planning, Databricks, Power BI, Snowflake, Tableau |
| Claude Code | https://code.claude.com/docs/en/quickstart.md | Coding tool that works with git; supports terminal, IDE, desktop, and web |
| DuckDB memory and larger-than-memory processing | https://duckdb.org/docs/stable/guides/performance/environment | Can process larger-than-memory workloads by spilling to disk; rule of thumb 1-2 GB per thread (aggregation-heavy) and 3-4 GB per thread (join-heavy); fast disks matter |
| DuckDB workload tuning limits | https://duckdb.org/docs/current/guides/performance/how_to_tune_workloads | Out-of-core support has limits: some complex aggregate states cannot yet be offloaded to disk and may cause out-of-memory errors |
| DuckDB concurrency | https://duckdb.org/docs/stable/connect/concurrency.html ; https://duckdb.org/docs/current/connect/concurrency | Native database file: one process reads and writes, or many processes read-only; multi-process writing is not automatic. Newer docs mention other options (see Unverified) |
| DuckDB FAQ: Parquet pattern for multiple writers | Mirror of the DuckDB web repo, https://github.com/pmm-motif/duckdb-web/blob/master/faq.md (not the official site; confirm on duckdb.org) | Suggests writing Parquet files and reading many of them with DuckDB when multiple processes must write |

## Verified methods and behavioral sources (access date 2026-11-11)
| ID | Source | What it supports |
|---|---|---|
| M1 | Bailey and Lopez de Prado, "The Deflated Sharpe Ratio: Correcting for Selection Bias, Backtest Overfitting and Non-Normality", Journal of Portfolio Management 40(5), 94-107, 2014. https://papers.ssrn.com/abstract=2460551 ; DOI 10.3905/jpm.2014.40.5.094 | DSR corrects performance inflation from selection bias under multiple testing and from non-normal returns (abstract read) |
| M2 | Bailey, Borwein, Lopez de Prado, Zhu, "The Probability of Backtest Overfitting", Journal of Computational Finance 20(4), April 2017. https://papers.ssrn.com/abstract=2326253 ; https://www.risk.net/journal-of-computational-finance/volume-20-number-4-april-2017 ; DOI 10.21314/JCF.2016.322 | Framework to estimate the probability of backtest overfitting using combinatorially symmetric cross-validation; standard hold-out is argued to be unreliable for investment backtests (abstract read) |
| M3 | Lopez de Prado, *Advances in Financial Machine Learning*, Wiley, 2018. Table of contents: https://libcat.scu.edu/Record/b3136103/Details ; https://www.pubmatch.com/book/312645.html | Verified the book and its chapter structure only: chapter 3 (triple-barrier 3.4, meta-labeling 3.6), chapter 7 (purged k-fold 7.4, embargo 7.4.2), chapter 12 (walk-forward 12.2, combinatorial purged cross-validation 12.4). Full text not read |
| M4 | Lundberg and Lee, "A Unified Approach to Interpreting Model Predictions", NeurIPS (NIPS) 2017. https://arxiv.org/abs/1705.07874 ; https://papers.nips.cc/paper/7062-a | SHAP assigns each feature an importance value for a particular prediction (abstract read) |
| M5 | Du, Li, Torralba, Tenenbaum, Mordatch, "Improving Factuality and Reasoning in Language Models through Multiagent Debate", arXiv:2305.14325 (May 2023). https://arxiv.org/abs/2305.14325 | Multiple model instances propose and debate over rounds; improved reasoning and factual validity on the benchmarks tested (not trading) |
| M6 | Irving, Christiano, Amodei, "AI safety via debate", arXiv:1805.00899 (2018). https://arxiv.org/abs/1805.00899 | Debate between agents judged by a human; authors state that whether it works needs extensive testing; only a simple MNIST experiment reported |
| M7 | Barber and Odean, "Trading Is Hazardous to Your Wealth", Journal of Finance 55(2), 773-806, 2000. https://econpapers.repec.org/RePEc:bla:jfinan:v:55:y:2000:i:2:p:773-806 ; DOI 10.1111/0022-1082.00226 | Overconfidence can explain high trading and poor performance of individual investors. Figures (66,465 households, 1991-1996; heaviest traders 11.4% vs market 17.9% a year) come from a library-index abstract; confirm in the paper |
| M8 | Kahneman and Tversky, "Prospect Theory: An Analysis of Decision under Risk", Econometrica 47(2), 1979. https://www.econometricsociety.org/publications/econometrica/1979/03/01/prospect-theory-analysis-decision-under-risk | Value assigned to gains and losses rather than final wealth; value function generally steeper for losses than for gains (abstract read) |

## Known discrepancies to resolve
- SEC approval date of the FINRA Rule 4210 amendments: some sources say April 14, 2026, one says April 15, 2026. The effective date reported is June 4, 2026. Check the primary SEC order and FINRA Regulatory Notice 26-10.
- M2: SSRN lists the paper as forthcoming in 2015; the journal issue is vol. 20 no. 4, April 2017. Cite as 2017.
- M5: sources disagree on whether the venue is ICML 2023 or ICML 2024. Cite the arXiv ID.
- M8: sources give the page range as 263-292 or 263-291. Confirm.

## Unverified (do not rely on until checked)
- Egger et al., "Quantum Computing for Finance: State-of-the-art and future prospects", IEEE Transactions on Quantum Engineering, 2020 - recalled from memory
- Qualified purchaser threshold of about $5 million in investments - seen only in a vendor glossary; verify against SEC text
- Perspective license terms
- Jane Street's use of OCaml - recalled from memory
- Suitability of Ray or Dask for parallel backtests
- Current state of practical quantum advantage in finance
- DuckDB version we will use, and whether newer multi-process write options (Quack remote protocol; DuckLake with a PostgreSQL catalog) are stable - mentioned in current DuckDB docs, not studied
- DuckDB S3 Parquet import/export pages - listed in the docs navigation, not yet read
- Parquet loading support and procedures for PostgreSQL/TimescaleDB, Snowflake, and Databricks - not yet checked
- Row-count estimates in docs/DECISIONS.md assume a universe of about 8,000 symbols (assumption, not sourced)
- Barber, Lee, Liu, Odean, "Just How Much Do Individual Investors Lose by Trading?" - Taiwan result (about 3.8 percentage points a year) seen only quoted on a secondary bibliography page; find the original
- Whether multi-agent debate improves trading or investment decisions - no evidence found; M5 and M6 do not test it
- Whether HCI nudges (pause before override, pre-commitment display) change investor behavior - not studied; test with users
- Embargo-length guidance - seen only in secondary sources, not in M3 itself
