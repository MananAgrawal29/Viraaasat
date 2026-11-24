# Viraaasat — Changelog & Decision History

Record significant changes to identity, architecture, workflow, editorial policy, and scope. Do not log every tiny code edit here; use Git commits for those.

## 2026-11-22 — Initial context pack
- Established project context files to live in the repository.
- Project name recorded as **Viraaasat**; preserve the exact spelling.
- Brand direction: premium editorial, archival heritage, cinematic documentary, modern interactive museum.
- Color palette and typography direction recorded as locked.
- Logo remains undecided.
- Landing-page direction: cinematic opening into a scroll-heavy journey; subtle but distinct India identity; blend of cinematic, editorial, museum and experimental design.
- Weekly story cadence proposed.
- Social links: GitHub and Instagram initially; other platforms may be added later.
- Proposed stack documented but remains subject to proof-of-concept validation.
- AI workflow recorded: one agent at a time; Codex Desktop (premium), Freebuff/Beam 1.0 High (unlimited workhorse), Antigravity Desktop (agentic execution and QA), AI Studio (experiments).
- Created initial project context pack.

## 2026-11-24 — 4K Scroll-Scrubbed Cinematic Film Integration
- Integrated `Viraaasat_Scroll_Film_4K.mp4` into the homepage hero stage using an 8-act scroll-scrubbed narrative architecture.
- Extracted curated visual assets into `assets/curated-pack/` and linked high-resolution museum photography and cartography as authentic editorial fallbacks and contextual references.
- Implemented non-blocking RAF/seeked video seek controller in `main.js` synchronized with GSAP ScrollTrigger for 60fps scrub control without decoder lockups.
- Structured 8 synchronized narrative movements matching the film's 8 scenes: The Threshold, The Living Archive, The Rock-Cut Sanctuaries, Cartography of the Subcontinent, The Stone Realm, The Monument, The Sacred Current, and The Horizon.
- Added responsive mobile typography and touch-tuned scrub timing, interactive timeline indicators with direct scene jumping, and complete `prefers-reduced-motion` accessible editorial layout.

## 2026-11-22 — Human-controlled Git policy
- Confirmed that all Git commits are performed manually by the user.
- AI agents must not commit, push, merge, rebase, reset, cherry-pick, amend, rewrite history, or stage files without explicit authorization.
- Agents may inspect Git state, edit project files, and run checks, then leave an uncommitted/unstaged handoff with a diff summary.
