# Project Status

_Last updated: 2026-11-11_

## Done
- GitHub repository created (`EagleHsieh/TalonQuant`, branch `main`; renamed from `Quantitative-Trading-Project`).
- Repository skeleton and handoff documents added (PR #1, merged).
- Storage decision and merge-conflict rule documented (PR #2, merged); repo rename recorded (PR #3, merged).

## In progress
- Confirming scope decisions listed as "Proposed" in `docs/DECISIONS.md`.
- Methods, debate protocol, and bilingual glossary documented (this pull request): `docs/METHODS.md`, `docs/DEBATE.md`, `docs/GLOSSARY.md`.

## Next
1. Confirm scope: asset universe, holding-period tiers, success metrics.
2. Choose and verify a data source (survivorship bias, split/dividend adjustment, point-in-time data).
3. Build the data layer (ingestion, cleaning, validation checks).
4. Build the backtest engine (costs, slippage, no look-ahead).
5. Build validation (out-of-sample, walk-forward, overfitting controls).
6. Build the first interactive visualization prototype.
7. Prototype the decision-path visualization with clearly labeled synthetic data to settle the interface design.

## Blockers / open questions
- Intended use: personal trading, research/portfolio, or managing outside money (affects compliance planning).
- Data budget: free sources only, or paid data.
