# Agent Instructions — Viraaasat

## Before you begin
1. Read `README.md` and `VISION.md`.
2. Read `DESIGN_SYSTEM.md` for UI tasks.
3. Read `ARCHITECTURE.md` before structural or dependency changes.
4. Read `EDITORIAL_GUIDELINES.md` and `SOURCES_AND_LICENSING.md` for story/content tasks.
5. Read `AI_WORKFLOW.md` and check `CHANGELOG.md` for handoff context.
6. Inspect the existing codebase before proposing changes. Do not assume it matches this document.

## Project north star
Create a premium, cinematic, heritage-rooted yet modern digital storytelling experience about India. It should feel like an archival museum, an editorial publication, and a documentary film experience brought together—not a generic blog, tourism portal, government site, news feed, or AI-generated template.

## Working rules
- Preserve approved identity decisions and existing working behavior.
- Do not redesign unrelated areas while implementing a scoped task.
- Avoid unnecessary dependencies. Explain why a new package is needed.
- Prefer maintainable, reusable components, but do not force every story into identical layouts.
- Mobile and reduced-motion experiences are first-class requirements.
- Animation must not obstruct reading, navigation, accessibility, or performance.
- Use truthful content. Never invent sources, data, quotes, licenses, or historical details.
- Do not use placeholder copy or fake data in production-facing story content unless explicitly marked as placeholder.
- Do not make up project state. Inspect files, commands, and test output.
- Avoid destructive operations. Do not delete, replace, or mass-format files without clear scope.
- Never expose secrets or place credentials in committed files.

## Task discipline
For each task:
1. Restate the task briefly in your internal plan.
2. Inspect relevant files.
3. Identify scope and risks.
4. Implement only the requested work.
5. Run relevant tests, lint, typecheck, and/or build.
6. Inspect the actual UI when visual work is involved and browser tooling is available.
7. Report changed files, commands run, results, known issues, and next steps.

## Handoff
When finished, leave the repository in a clean handoff state. Provide a concise report:
- Summary
- Files changed
- Checks run and outcomes
- Known issues / limitations
- Recommended next task

## Git — Human-controlled only
- AI agents must NEVER create commits. The user handles all commits.
- AI agents must NEVER push, merge, rebase, reset, cherry-pick, amend, or rewrite Git history.
- Do not stage files (`git add`) unless the user explicitly authorizes it.
- Git status, diff, log, branch inspection, and other read-only Git commands are allowed.
- Agents may edit files and run tests/builds, but leave all changes uncommitted and unstaged.
- At handoff, report changed files and summarize the diff so the user can review and commit manually.
- Do not create parallel agents unless explicitly requested.
- One AI agent works on the repository at a time.


## Research Reference Policy

The complete Viraaasat research archive is stored in `docs/research/` and contains 40 research documents, including the Master Blueprint.

To minimize context and token consumption:
- Start with the existing root documentation and the Master Blueprint when relevant.
- Do not read all 40 research documents for every task.
- Consult only the specific research missions relevant to the current task.
- Prefer existing project documentation over repeatedly rediscovering settled decisions.
- Distinguish locked decisions, approved direction, recommendations, and unresolved decisions.
- Do not independently make editorial decisions or lock creative direction that requires team approval.
- If research conflicts with current project decisions, flag the conflict rather than silently changing direction.