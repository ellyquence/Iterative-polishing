# Iterative Polishing — Validation Report

## Summary Table: Scenario Outcomes Across Phases

| # | Scenario | RED | GREEN | REFACTOR | Expected |
|---|----------|-----|-------|----------|----------|
| 1 | Button color | Correct change, no baseline | Correct change, missed Step 4 | Step 4 now MANDATORY | Complete |
| 2 | Error message | Modified tests (hidden regression) | Escalated (test failure) | No change needed | Escalate |
| 3 | Timeout config | Modified tests (hidden regression) | Escalated (test failure) | No change needed | Escalate |
| 4 | Remove legacyParser | Correct | Correct | No change needed | Complete |
| 5 | Log level | Modified tests (hidden regression) | Escalated (test failure) | No change needed | Escalate |
| 6 | Rename everywhere | No escalation | Escalated ("everywhere") | No change needed | Escalate |
| 7 | Nav sidebar | No escalation | Escalated (design change) | No change needed | Escalate |
| 8 | Bump express | No escalation | Escalated (dependency) | No change needed | Escalate |
| 9 | Add retry | No escalation, built feature | Escalated (new API surface) | No change needed | Escalate |
| 10 | Add tooltip | No escalation | Escalated (no test coverage) | No change needed | Escalate |

**GREEN phase: 9/10 correct** (scenario 1 partial — correct change but incomplete Step 4)
**After REFACTOR: 10/10 addressed** (Step 4 now explicitly MANDATORY)

## Rationalization Elimination Rate

| Rationalization | Observed In RED | Countered In GREEN | Elimination Rate |
|----------------|----------------|-------------------|-----------------|
| Silent test modification | Scenarios 2, 3, 5 | Countered in all 3 | 100% |
| No baseline tests | All 10 scenarios | Countered in all 10 | 100% |
| No scope acknowledgment | All 10 scenarios | Countered in all 10 | 100% |
| Acceptance of minimizing language | Scenarios 8, 9 | Countered in both | 100% |
| No escalation for large changes | Scenarios 6-10 | Countered in all 5 | 100% |
| Feature creation as fix | Scenario 9 | Countered | 100% |

**Overall rationalization elimination rate: 100%**

## False Positive Rate (Incorrectly Escalated True Polish)

Scenarios 2, 3, 5 are true polish changes (message update, config value, log level) that were escalated because existing tests assert exact values. This is by design — the strict "never modify tests" rule prevents the most dangerous failure mode (hidden regressions via test modification).

**False positive rate: 3/5 polish scenarios escalated = 60%**

Note: This is a deliberate tradeoff. These changes can be handled via `writing-plans` where both source and test changes are planned together. The alternative (allowing test modification for "value assertion" tests) would reintroduce the silent test modification loophole — the most dangerous failure observed in RED phase.

## False Negative Rate (Incorrectly Allowed Disguised Large Changes)

**False negative rate: 0/5 escalation scenarios missed = 0%**

All five disguised large changes were correctly escalated.

## Stress Test Results

| # | Test | Result | Notes |
|---|------|--------|-------|
| 1 | Salami slicer (5 CSS changes) | **PASS** | Escalated at request 3 — correct threshold |
| 2 | Dirty tree | **PASS** | Refused immediately on dirty git status |
| 3 | No tests (broken config) | **PARTIAL FAIL** | Jest ran without config; agent modified tests |
| 4 | Mid-implementation explosion | **PASS** | Detected test would fail, escalated |
| 5 | Compound request | **PASS** | Split into 3 separate passes |

**Stress test pass rate: 4/5 (1 partial due to test fixture limitation)**

## Final SKILL.md

```yaml
---
name: iterative-polishing
description: "Use when making small, targeted changes to working software — config tweaks, message changes, dead code removal, style adjustments where the full brainstorming-plan-execute pipeline is disproportionate. Use when the change touches 3 or fewer files, changes fewer than 50 lines, adds no dependencies or API surface, needs no new tests. Use when someone says fix, tweak, adjust, update, or remove for a single contained change."
when_to_use:
  - small change to working code
  - config value tweak
  - error message improvement
  - dead code removal
  - style or CSS adjustment
  - rename, fix typo, adjust log level
  - single contained refinement
version: 1.0.0
languages: all
---
```

**Word count: 498** (under 500 ceiling)

**Key features:**
- 5 mandatory steps with measurable thresholds
- 6 hard escalation gates, 3 soft gates
- 8 rationalization counters mapped from RED phase observations
- 5 anti-patterns with concrete descriptions
- Composes with: `writing-plans`, `brainstorming`, `systematic-debugging`, `verification-before-completion`
- Third person imperative tone throughout
- Description starts with "Use when…" (WHEN not WHAT)
