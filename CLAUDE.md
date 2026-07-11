# Project Instructions

## Git workflow

This repo has other collaborators (e.g. Nishit Kumar) pushing directly to GitHub, so keep local and remote in sync in both directions:

- **Before starting work / before pushing**: run `git fetch origin` and check if `origin/main` has commits not in local `main`. If so, `git merge origin/main` (or `git pull`) to bring them in before doing anything else. Never force-push over remote changes.
- **After making any local code change**: automatically stage, commit (short descriptive message), and push to `origin/main` on https://github.com/KRITARTH94/asatrobo — do not wait to be asked.
- If a push is rejected because the remote has moved, fetch, inspect what changed (`git log --stat main..origin/main` / `git show <commit>`), merge cleanly, and push again. Only stop and ask the user if there's an actual merge conflict that needs a judgment call.

Git is installed at `C:\Program Files\Git` but is not on PATH by default in this environment; add it for the session before running git commands:

```powershell
$env:Path += ";C:\Program Files\Git\cmd"
```
