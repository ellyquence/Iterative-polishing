---
name: iterative-polishing
description: "Use when making small, targeted changes to working software — config tweaks, message changes, dead code removal, style adjustments where the full brainstorming-plan-execute pipeline is disproportionate. Use when the change touches 3 or fewer files, changes fewer than 50 lines, adds no dependencies or API surface, needs no new tests. Use when someone says fix, tweak, adjust, update, or remove for a single contained change."
when_to_use: "Small change to working code. Config value tweak. Error message improvement. Dead code removal. Style or CSS adjustment. Rename, fix typo, adjust log level. Single contained refinement."
version: 1.0.0
languages: all
---

# Iterative Polishing

Announce at start: "I'm using the iterative-polishing skill to make a small, safe change."

## When to use

Request is a single, contained change to working software: config value, error message, dead code, CSS tweak, log level, typo. User says "fix", "tweak", "adjust", "update", or "remove" for one thing. The full brainstorming-plan-execute pipeline feels disproportionate.

## Core process

**Step 1 — Scope Check.** Evaluate ALL thresholds aloud: ≤ 3 source files, < 50 lines, zero new deps, no new exports/endpoints/functions, existing tests cover it, single request. Example: "1 file, ~2 lines, no deps, no new API — polish." Any fail → escalate. Minimizing language ("just", "quick") → evaluate harder. "Everywhere"/"across the codebase" → escalate.

**Step 2 — Baseline.** Run full test suite BEFORE changes. Record pass/fail/skip. Confirm `git status` clean. Dirty tree → stop.

**Step 3 — Minimal Change.** Change ONLY what was requested. Run `git diff --stat` to verify: ≤ 3 source files, no test files in diff, < 50 lines. Exceeds → revert and escalate.

**Step 4 — Verify (MANDATORY).** Run identical test suite. Compare to Step 2. Same → proceed. New failures → regression, use `systematic-debugging`. **NEVER modify tests.** Failing tests = unexpected impact → escalate, don't "fix" tests. Never skip this step.

**Step 5 — Commit.** One commit per polish. Invoke `verification-before-completion` before claiming done.

## Escalation triggers

**Hard gates:** diff > 3 files; dependency change; new function/export/endpoint; new tests needed; compound request → split into separate passes; "everywhere"/"all files".

**Soft gates:** change feels larger mid-implementation; same file polished 3+ times this session; change touches shared code with many callers.

Escalate: `brainstorming` for design, `writing-plans` for scope.

## Anti-patterns

- **Test modification** — Changing assertions to match. Hides regressions.
- **Salami slicing** — Serial changes to same file. By pass 3, escalate.
- **Trojan refactor** — Color change becomes CSS restructure. Only what was asked.
- **Confidence bypass** — "Too simple to test." Run them.
- **Cleanup creep** — Improving surrounding code. Don't.

## Rationalization counters

| Thought | Reality |
|---------|---------|
| "Update tests to match" | NEVER. Failing tests = not polish. Escalate. |
| "Clean up nearby code too" | One change only. Separate task. |
| "Quick rename across files" | "Everywhere" ≠ polish. Escalate. |
| "Just a dependency bump" | Dependencies ≠ polish. Escalate. |
| "Add a small helper/utility" | New API surface ≠ polish. Escalate. |
| "Skip baseline — too simple" | No before/after = invisible regressions. Always Step 2. |
| "Too simple for all 5 steps" | Steps take seconds. Do all 5. |
| "Test will obviously fail" | Make the change, run Step 4, let it prove it. Don't skip steps. |
