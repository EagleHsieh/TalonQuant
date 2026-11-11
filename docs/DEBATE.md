# Debate protocol（辯論協議）

Status: **Proposed** (owner's idea; details are our design).

## Why
Several language model instances that propose and debate over multiple rounds improved reasoning and factual accuracy on the benchmarks tested in M5. M6 proposes debate between agents with a judge, and states that whether it works needs extensive testing. **Neither source tests trading decisions.** We must test this protocol on our own tasks before trusting it.

## Roles
| Role | Job |
|---|---|
| Proposer（提案者） | Produces at least 5 hypotheses（假設）per round |
| Opponent（反方） | Attacks each hypothesis: counter-evidence, alternative explanations, failure modes, data tests |
| Judge（裁判） | Scores each hypothesis and issues a verdict |

## Flow
1. **Round 0 (independent):** proposer and opponent each analyze the question without seeing the other's work.
2. **Round 1 and later:** exchange arguments and critique. Use multiple rounds.
3. **Judgement:** data claims are decided by statistical tests (walk-forward, Probability of Backtest Overfitting, Deflated Sharpe Ratio). The AI judge scores reasoning and source quality.
4. **Human review:** the owner or user makes the final decision.

## Rules
1. **Always output the full set** of points, including rejected and uncertain ones. Nothing is silently dropped. All are archived in an audit trail（稽核軌跡）.
2. **Evidence rule:** each claim needs a verified, dated source from `docs/references.md`, or a data test. Otherwise the verdict is "unsupported."
3. **Count every hypothesis as a trial**（試驗）in the trial log, because multiple testing（多重檢定）inflates results.
4. **Reduce shared blind spots:** use different prompts and data access per role, and ideally different models.
5. **Calibrate the judge:** store each verdict and compare it with later outcomes.
6. **Freshness:** each source carries its published date and access date; mark preprints（預印本）.
7. Run debates for different hypotheses **in parallel**.

## Verdict values
`supported`, `contested`, `unsupported`, `rejected`, `needs data`

## Record format (one entry per hypothesis)
```
id, date, question
claim, mechanism
evidence: [source id + date, or test name + result]
counter-evidence
verdict, judge reasoning
trial_number
follow-up outcome (filled in later)
```

## Scope
- (a) **Development-time:** reviewing our own design decisions. Start here.
- (b) **Runtime:** inside the product. Later.

## Known limits
- Agents of the same model family may share blind spots.
- A persuasive argument can still be wrong; the statistical tests are the arbiter for data claims.
- Debate costs more time and compute than a single answer.
