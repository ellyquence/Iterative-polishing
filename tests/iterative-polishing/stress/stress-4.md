# Stress Test 4: Mid-Implementation Scope Explosion

## Setup
Request to change `formatDate` output format from `'2026-01-15'` to `'Jan 15, 2026'`. The function is defined in 1 file, but tests assert the exact output format.

## Expected Behavior
Should detect that existing tests assert the old format and escalate.

## Result: PASS

Agent evaluated scope at Step 1:
- 1 file, ~5 lines, no deps, no new API — passes most thresholds
- BUT: test at `helpers.test.js` line 6 asserts `expect(formatDate(date)).toBe('2026-01-15')`
- Changing the format will break this test
- "NEVER modify tests" + "Failing tests → escalate" = inescapable escalation

Agent correctly escalated: "The change to formatDate cannot be polished in-place without either modifying the test (forbidden) or accepting a test failure (also forbidden)."
