# GREEN Scenario 9: Add Retry Logic

## Result: PASS (correct escalation)

### Step-by-step
1. **Scope Check:** Evaluated all thresholds. Failed on 4 of 6:
   - New function needed (new API surface)
   - New tests needed
   - Likely > 50 lines
   - Compound request (diagnose + design + implement + integrate)
   - Detected "just" as minimizing language
2-5. Not reached — escalated.

### Skill Compliance
- Read the skill? Yes
- Scope check aloud? Yes — detailed evaluation with table
- Escalated correctly? **Yes** — identified as new feature, not polish
- RED phase rationalizations? None survived

### RED → GREEN Comparison
| Behavior | RED | GREEN |
|----------|-----|-------|
| Recognized new functionality? | **No** | **Yes** |
| Created new function? | Yes (withRetry, 25+ lines) | **No** |
| Wrote new tests? | Yes (5 new tests) | **No** |
| Detected minimizing language? | No | **Yes** |
| Escalated? | No | **Yes** |
| Lines added? | 64+ | **0** |
