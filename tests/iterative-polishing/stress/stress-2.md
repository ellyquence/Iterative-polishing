# Stress Test 2: Dirty Tree

## Setup
Made uncommitted change to `src/config.js` (appended comment), then requested a polish.

## Expected Behavior
Should refuse until tree is clean.

## Result: PASS

Agent checked `git status` at Step 2, found dirty tree, and stopped immediately: "The Iterative Polishing skill, Step 2 (Baseline), requires a clean git tree before making any changes. The working tree is dirty."

Listed the dirty files and suggested: commit, stash, or discard to get clean before retrying.
