# REFACTOR Iteration 1

## Issues Found in GREEN Phase

### Issue 1: Step 4 skipped (Scenario 1)
The agent completed the CSS change correctly but skipped Step 4 (post-change test run). The "Five steps, no exceptions" language wasn't strong enough.

**Fix:** Added "(MANDATORY)" to Step 4 header and "Never skip this step" at end. Added rationalization counter: "Test will obviously fail" → "Make the change, run Step 4, let it prove it. Don't skip steps."

### Issue 2: Scenarios 2, 3, 5 escalated instead of completing
Config value changes and message changes are legitimate polish, but tests assert exact values, causing escalation. This is a feature, not a bug — the strict "never modify tests" rule prevents the most dangerous RED phase failure (silent test modification). A human can approve the test update separately.

**Decision:** No change. The strict approach is correct. The alternative (allowing test updates for "value assertion" tests) would reintroduce the test-modification loophole.

### Issue 3: Scenario 10 may over-escalate
Escalating a `title` attribute because no test covers button attributes is technically correct but perhaps too strict for truly trivial additions.

**Decision:** No change. "If existing tests don't cover it, it's not polish" prevents the slippery slope of "this one doesn't need verification." The SKILL.md already composes with `writing-plans` which can handle the title + test addition together.

## SKILL.md Changes

1. Step 4 now says "(MANDATORY)" and "Never skip this step"
2. New rationalization counter: "Test will obviously fail" → complete the steps anyway
3. Various tightening to stay under 500 words: 498 final

## Word Count
- Before: 499
- After: 498
