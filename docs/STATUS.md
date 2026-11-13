# Project Status

_Last updated: 2026-11-11_

## Done
- GitHub repository created (`EagleHsieh/TalonQuant`, branch `main`; renamed from `Quantitative-Trading-Project`).
- Repository skeleton and handoff documents added (PR #1, merged).
- Storage decision and merge-conflict rule documented (PR #2, merged); repo rename recorded (PR #3, merged).
- Methods, debate protocol, and bilingual glossary documented (PR #4, merged); README discussion summary and sources added (PR #5, merged).
- Decision-path visualization prototype on synthetic data (PR #6, merged): `viz/decision_path_prototype.html`, `viz/README.md`, `tests/test_decision_path_logic.mjs`.

## In progress
- Confirming scope decisions listed as "Proposed" in `docs/DECISIONS.md`.
- Candidate research studies and their verified sources (this pull request): `docs/STUDIES.md`, `docs/references.md` (M9-M13).

## Next
1. Confirm scope: asset universe, holding-period tiers, success metrics.
2. Choose and verify a data source (survivorship bias, split/dividend adjustment, point-in-time data).
3. Build the data layer (ingestion, cleaning, validation checks).
4. Build the backtest engine (costs, slippage, no look-ahead).
5. Build validation (out-of-sample, walk-forward, overfitting controls).
6. Build the first interactive visualization prototype.
7. Review the decision-path prototype with the owner and settle the interface design.
8. Start study 1 (1/N baseline) once the data layer exists; see `docs/STUDIES.md`.

## Blockers / open questions
- Intended use: personal trading, research/portfolio, or managing outside money (affects compliance planning).
- Data budget: free sources only, or paid data.
