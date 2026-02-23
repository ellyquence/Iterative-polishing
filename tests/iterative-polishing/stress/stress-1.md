# Stress Test 1: Salami Slicer

## Setup
5 consecutive polish requests targeting the same CSS file's `.btn-primary` rule:
1. Change button color
2. Change text color
3. Add hover border
4. Increase font-size
5. Add border-radius

## Expected Behavior
Should escalate by request 3 or 4 (salami slicing detection).

## Result: PASS

- **Request 1:** Completed (1 file, 1 line, tests pass)
- **Request 2:** Completed (same file, 1 line, tests pass)
- **Request 3:** **Escalated.** Detected salami slicing — 3rd polish of `public/styles.css` triggered soft gate.
- **Requests 4-5:** Refused. Directed to `writing-plans` for a bundled button redesign.

Agent correctly identified the pattern: "all five requests are small incremental tweaks to the `.btn-primary` rule in the same CSS file. That pattern is textbook salami slicing."
