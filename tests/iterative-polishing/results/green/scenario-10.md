# GREEN Scenario 10: Add Tooltip to Button

## Result: PASS (correct escalation)

### Step-by-step
1. **Scope Check:** Evaluated thresholds. Change is 1 file, 1 line, no deps, no new exports. BUT: existing tests don't cover the button's attributes — new test assertion would be needed. "New tests needed" = hard gate.
2-5. Not reached — escalated.

### Skill Compliance
- Read the skill? Yes
- Scope check aloud? Yes
- Escalated correctly? **Yes** — detected that tests don't cover the change
- RED phase rationalizations? Partially — RED used title attr (simplest approach), but GREEN correctly identified that no tests exist to verify the addition

### RED → GREEN Comparison
| Behavior | RED | GREEN |
|----------|-----|-------|
| Questioned approach? | No | **Yes** |
| Made changes? | Yes (title attr) | **No** |
| Recognized test gap? | No | **Yes** |
| Escalated? | No | **Yes** |

### Notes
This is a borderline case. A `title` attribute on a button is extremely simple, and whether it needs a dedicated test is debatable. However, the skill correctly applies the threshold: if existing tests don't cover the change, it's not polish. This strict interpretation prevents the slippery slope of "this one is too simple to verify." The REFACTOR phase may want to examine whether this is too aggressive.
