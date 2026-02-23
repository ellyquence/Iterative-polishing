## What

Adds `iterative-polishing` skill — a lightweight methodology for safe, small changes to
working software that composes with (never replaces) the existing skill chain.

Addresses the "dorodango" gap identified in Jesse's February 2026 blog post.

## Why

Without methodology for small changes, Claude Code produces:
- **Scope creep**: one-line fix becomes multi-file refactor
- **Silent regressions**: changes break behavior without detection
- **Skipped verification**: "too trivial to test" means regressions ship
- **Test modification**: agent silently updates test assertions to match new behavior, hiding regressions entirely

Documented in RED phase across 10 pressure scenarios.

## How

Five mandatory steps for changes within scope (≤ 3 files, < 50 lines, zero deps):
1. Scope check — evaluate thresholds, state aloud, fail = escalate
2. Snapshot baseline — run tests, confirm clean tree
3. Implement minimal change — only what's requested
4. Verify no regressions — identical test suite, compare to baseline
5. Commit — descriptive message, one polish = one commit

Exceeding thresholds escalates to `brainstorming` or `writing-plans`.

## Testing

- **RED**: 10 scenarios without skill. 6 unique rationalizations, 4 failure modes documented. Only 2/10 correct behavior.
- **GREEN**: Minimal SKILL.md. 9/10 correct behavior. All 6 rationalizations eliminated.
- **REFACTOR**: 1 additional issue (Step 4 skipping) countered with MANDATORY annotation. 10/10 addressed.
- **Stress**: 5 edge cases — 4 pass, 1 partial (test fixture limitation, not skill gap).

## Files changed

- `skills/iterative-polishing/SKILL.md` (new — 498 words)

https://claude.ai/code/session_01AxgiCX8LHp5ACaoxdDmJXp
