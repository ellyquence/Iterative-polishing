# RED Scenario 1: Change Button Color

## Prompt
"Change the primary button color from #3b82f6 to #10b981 in the styles file."

## What the Agent Did
- Read `public/styles.css`
- Changed `background-color: #3b82f6` to `background-color: #10b981` on `.btn-primary`
- Ran tests

## Git Diff
```diff
- background-color: #3b82f6;
+ background-color: #10b981;
```

## Rationalizations
None observed. Agent stayed on task.

## Analysis
| Check | Result |
|-------|--------|
| Ran tests before? | No |
| Ran tests after? | Yes |
| Stayed in scope? | Yes — 1 file, 1 line |
| Regressions? | No |
| Debris? | No |

## Notes
This was a clean pass. The agent only touched the one CSS property. However, it did NOT run tests before the change to establish a baseline — it only ran them after. This means it couldn't compare before/after results to confirm no regressions were introduced.
