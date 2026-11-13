# AGENTS.md - Read this first

This file is the entry point for any AI agent or contributor joining the project. It should let you understand the current state quickly and continue work safely.

## Orientation (read in this order)
1. `README.md` - purpose, scope, layout
2. `docs/STATUS.md` - what is done, in progress, next
3. `docs/DECISIONS.md` - what was decided and why
4. `docs/references.md` - the only approved source list
5. `docs/METHODS.md`, `docs/DEBATE.md`, `docs/GLOSSARY.md` - methods, debate protocol, bilingual terms
6. `docs/STUDIES.md` - candidate research studies and their order

## Non-negotiable rules
1. **Never fabricate sources.** Do not invent papers, authors, citations, numbers, formulas, or links. If you are not sure, search and verify, then record the source in `docs/references.md`. If you cannot verify, label it "unverified" and say so.
2. **Tell the owner what you changed.** Every pull request and every session summary must list the files added, changed, or removed.
3. **Never commit secrets or data.** No API keys, tokens, passwords, personal data, or licensed market data. Use environment variables. Track data with a manifest (source, date pulled, hash) instead.
4. **Never push to `main` directly.** Work on a branch, open a pull request, and let the owner merge.
5. **Keep the handoff documents current.** Update `docs/STATUS.md` and `docs/DECISIONS.md` in the same pull request as the change they describe.
6. **No look-ahead, no survivorship bias, realistic costs.** Any backtest must state how it avoids these.
7. **No financial advice.** Outputs are research and education only.
8. **Check for conflicts before every merge.** Check for conflicts in contents and code (GitHub mergeability plus a local test merge), run the tests, and report the result. Merge only on the owner's explicit instruction.
9. **Add Mandarin next to terminology.** When using a technical term in documents or replies to the owner, add the Mandarin translation (Traditional characters). Keep `docs/GLOSSARY.md` current.
10. **When unsure, search and report.** Look it up, tell the owner what you found, and list what remains unverified.

## Branch and PR workflow
- Branch names: `feature/<topic>`, `fix/<topic>`, `research/<topic>`, `setup/<topic>`.
- One topic per branch. Small, reviewable pull requests.
- PR description: what changed, why, how it was tested, which docs were updated, which sources were used.

## Working in parallel (multiple agents)
- Each agent owns one module and one branch at a time (for example data, backtester, visualization, docs).
- Agree on interfaces first; do not edit another agent's module without coordination.
- Record interface changes in `docs/DECISIONS.md`.

## Conventions
- Language: Python for the core library (see `docs/DECISIONS.md` for status of this choice).
- Add tests for new logic under `tests/`.
- Prefer clear, documented functions over clever code.
