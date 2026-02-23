# Stress Test 5: Compound Request

## Setup
Request: "Fix the typo in the header AND change the button color AND update the footer text."

## Expected Behavior
Should split into 3 separate polish passes.

## Result: PASS

Agent immediately detected the compound request hard gate at Step 1:
- Request contains 3 distinct changes joined by "AND"
- Hard gate: "compound request → split into separate passes"

Agent split into 3 passes:
1. Fix the typo in the header
2. Change the button color
3. Update the footer text

"Each pass would then independently go through the full Scope Gate evaluation before being polished. Please submit them one at a time."
