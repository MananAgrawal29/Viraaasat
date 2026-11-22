# Viraaasat — AI Tool & Agent Workflow

## Principle
One AI coding agent works on the repository at a time. Tools are assigned based on strengths and available quotas, not model novelty.

## Tools and roles
### Codex Desktop — premium engineering
Use monthly-limited tokens strategically for:
- Initial architecture and foundation
- High-value landing-page implementation
- Complex interaction/animation engineering
- Difficult debugging/refactoring
- Architectural and quality reviews

Avoid routine edits, boilerplate, simple CSS tweaks and repetitive component tasks when unlimited Beam can do them.

### Freebuff / Beam 1.0 High — iteration workhorse
Use for:
- Scoped component implementation
- CSS, responsive refinements
- Routine features
- Small fixes
- Iterative visual improvements
- Refactors within well-defined scope

### Antigravity Desktop — agentic execution/verification
Use weekly quota for:
- Multi-step implementation tasks
- Repository exploration
- Terminal and test workflows
- Browser verification and UI inspection
- Issue reproduction and correction loops

### AI Studio — experimental lab
Use for:
- Disposable prototypes
- Concept exploration
- Alternate layouts
- Prompt experiments
- Model capability testing

Do not assume a model has local desktop/repository access unless the chosen environment explicitly provides it.

## One-agent handoff protocol
Before switching tools, the current agent should:
1. Save all changes.
2. Avoid leaving destructive operations running.
3. Report modified files and purpose.
4. Report checks, results, and failures.
5. List unresolved issues and next recommended task.
6. Leave working tree state clear.

The next agent should inspect repository status and the handoff report before continuing.

## Prompt structure
Every agent task should specify:
- Role
- Context files to read
- Objective
- Scope / files or areas to own
- Explicit non-goals
- Design/engineering constraints
- Acceptance criteria
- Commands/checks to run
- Required handoff report

## Git — user owns all Git writes
- AI agents do not commit. All commits are made manually by the user.
- AI agents must not push, merge, rebase, reset, cherry-pick, amend, or rewrite history.
- Do not stage files (`git add`) without explicit user authorization.
- Read-only Git commands (status, diff, log, branch inspection) are allowed.
- Leave code changes uncommitted and unstaged; summarize the diff and changed files at handoff.
- Avoid destructive commands.
- Prefer small, reviewable changes.
- Use a branch/worktree if isolation is needed, but sequential agents are the default.
- Do not change package dependencies without explaining the need and tradeoff.

## Agent review checklist
- Does the work follow the brand?
- Does it fulfill the task rather than expanding scope?
- Is it responsive?
- Are keyboard/touch interactions usable?
- Is reduced-motion supported?
- Are performance impacts considered?
- Are factual claims and assets properly sourced?
- Are tests/checks reported honestly?
- Are there unintended changes?
