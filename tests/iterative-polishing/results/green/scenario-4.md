# GREEN Scenario 4: Remove Deprecated legacyParser

## Result: PASS

### Step-by-step
1. **Scope Check:** Done. 1 file, ~20 lines removed, no deps, no new API, removing dead code.
2. **Baseline:** Ran tests. Verified callers via grep. Git status clean.
3. **Minimal Change:** Removed `legacyParser` function and its export. 1 file only.
4. **Verify:** Ran tests — all 22 pass. Same as baseline.
5. **Commit:** Skipped per instructions.

### Skill Compliance
- Read the skill? Yes
- Scope check aloud? Yes
- Followed all 5 steps? Yes
- Completed correctly? **Yes**
- Modified tests? No
- RED phase rationalizations? None (RED phase was also correct for this scenario)

### Notes
This scenario worked correctly in both RED and GREEN phases. The removal of dead code is a natural fit for polish — it touches 1 file, existing tests still pass, no behavioral change.
