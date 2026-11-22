# Viraaasat Research 21
## Story Production Pipeline, Team Operations & Quality Control

**Mission:** Turn Viraaasat's editorial, visual, technical, and research standards into a sustainable operating system for a three-person team publishing one story per week.

**Research date:** November 22, 2026

**Approach:** External newsroom/project workflow guidance is distinguished from Viraaasat-specific recommendations. Cadence, workload, tiering and role assignments below are proposed starting points; validate them against actual capacity after several production cycles.

---

## Executive summary

Viraaasat should operate a **rolling pipeline, not a seven-day assembly line**. The goal is to publish on a weekly rhythm while stories are prepared and produced in advance.

### Core operating principles
1. One active story in design/development at a time.
2. One next story in briefing/research.
3. One release candidate in final QA when the pipeline permits.
4. An idea backlog is separate from committed work.
5. Every story has one accountable owner and a named next action.
6. The author/creator is not the sole reviewer of their work.
7. Publication is a quality gate, not an arbitrary deadline.
8. Scope is adjustable; evidence, integrity, accessibility and rights clearance are not.
9. Keep meetings short and outcome-focused.
10. Review the process monthly and adjust it using real production data.

Newsroom project-management guidance emphasizes roles, project ownership, milestones, coordination and the full lifecycle from planning to launch and wrap-up. Editorial planning commonly spans idea generation, selection, assignment, production/editing, publication/distribution and post-publication review.

## 1. The production philosophy

**One story published. Another in production. One in preparation.**

A story can be in preparation while the current one is being built. The team should avoid having several stories simultaneously in full design/development.

### Rolling pipeline
- **Stage 1 — Preparation:** topic, brief, research, evidence, outline
- **Stage 2 — Production:** writing, design, visual sourcing, development, interactions
- **Stage 3 — Release:** fact-check, rights, QA, approval, deployment, distribution

This allows the team to maintain momentum without starting each story from zero on publication week.

## 2. Team roles: three people, flexible responsibilities

Use primary responsibilities, not rigid job titles.

### Person A — Editorial & Research Lead
- Story idea and scope
- Research coordination
- Source ledger and claim tracking
- Narrative outline
- Draft writing
- Fact-check coordination
- Editorial context and nuance

### Person B — Visual & Experience Lead
- Visual research and art direction
- Story-specific layout
- Motion language and choreography
- Image sourcing and rights ledger
- Illustration/data visual design coordination
- Visual and responsive QA

### Person C — Technical & Production Lead
- Frontend architecture and story implementation
- Interaction engineering
- Motion engineering
- Performance and loading strategy
- Build/test/deployment workflow
- Technical and accessibility QA

### All three — Editorial collective
- Story selection and prioritization
- Critique and peer review
- Significant claims review
- Narrative/visual/technical quality review
- Release approval
- Post-publication learning

These roles are an initial operating model, not permanent. A person can take on multiple roles depending on story requirements. Newsroom project guides explicitly discuss overlapping responsibilities and roles evolving as projects reveal what is needed.

### Review ownership principle
The person who creates something should not be its only reviewer:
- Writer → another teammate reviews claims and narrative.
- Designer → teammate reviews clarity and story relevance.
- Developer → teammate reviews code/diff and tests.
- The collective → final release decision.

## 3. Responsibility matrix

| Task | Primary owner | Review |
|---|---|---|
| Pitch | Anyone | All three |
| Story brief | Editorial lead | All three |
| Research | Editorial lead | Second teammate |
| Narrative and writing | Editorial lead | Peer review |
| Visual direction | Visual lead | Editorial + technical |
| Asset rights | Visual lead | Editorial reviewer |
| Frontend architecture | Technical lead | Peer review |
| Story interactions | Technical + visual | Editorial validates meaning |
| Fact-check | Editorial lead | Second reviewer |
| Responsive QA | Technical lead | All three test |
| Accessibility QA | Technical lead | Visual + editorial |
| Final release | All three | Collective approval |
| Distribution | Assigned weekly owner | Peer review |
| Post-publish review | All three | All three |

## 4. Full story lifecycle

1. Pitch — Is this worth exploring?
2. Selection — Does it fit the mission and capacity?
3. Brief — Define scope, question, reader takeaway and angle.
4. Research — Collect evidence and source material.
5. Outline — Shape the narrative and sequence of reveals.
6. Draft — Write the story.
7. Editorial review — Check clarity, nuance, framing and gaps.
8. Visual planning — Define imagery, interactions, data and motion.
9. Production — Design and develop the experience.
10. Fact-check and asset clearance — Verify claims, data and rights.
11. QA — Responsive, performance, accessibility, interactions and browser checks.
12. Release approval — Collective sign-off.
13. Publish — Deploy and verify production.
14. Distribution — Share the story across selected channels.
15. Review — Learn, correct and improve.

This follows the broad editorial planning cycle described by the Al Jazeera Media Institute.

## 5. Weekly operating rhythm

A suggested schedule that can fit around college and other responsibilities:

| Day | Focus | Outcome |
|---|---|---|
| Monday | Planning and decisions | Story milestone, blockers, next brief |
| Tuesday | Research and narrative | Sources, outline, writing, data |
| Wednesday | Story/experience design | Visual direction, asset list, interactions |
| Thursday | Build and integration | Development, motion, content integration |
| Friday | Editorial and technical QA | Accuracy, rights, mobile, accessibility |
| Saturday | Release and distribution | Publish if approved; production verification |
| Sunday | Buffer / optional review | Catch-up, maintenance or rest |

This is a suggested rhythm—not a hard seven-day deadline. Research-heavy or flagship stories may need multiple weeks. Do not make Sunday a hidden mandatory workday.

## 6. Work-in-progress (WIP) limits

A small team can easily end up with many half-finished stories. Use explicit limits:
- **1 active story:** main design/development attention.
- **1 next story:** brief/research/preparation.
- **1 release candidate:** final QA/publishing, when possible.
- **Unlimited ideas:** backlog only; ideas are not commitments.

If the active story is blocked, work may continue on the next story's research/brief—but avoid starting full implementation on a second story just because the first is difficult.

## 7. Story complexity tiers

Not every story needs the same production effort.

### Tier I — Editorial story (lightweight)
Long-form narrative, strong imagery, modest animation and perhaps one interaction.
**Starting estimate:** about one week of production.

### Tier II — Interactive story (standard)
Custom data visualization, timeline, maps, comparisons, scroll sequences or multiple interactive modules.
**Starting estimate:** 1–2 weeks of production.

### Tier III — Flagship (special)
Custom 3D, complex scrollytelling, extensive original media, deep data work or substantial motion engineering.
**Starting estimate:** 2–4+ weeks.

These are Viraaasat planning hypotheses, not industry benchmarks. Calibrate after several finished stories.

### Suggested mix
- 60% Tier I
- 30% Tier II
- 10% Tier III

This mix is only a starting point. Protect team capacity; do not force every story into the flagship format.

## 8. Production gates

Stories must earn the next stage. Do not move forward only because a date has arrived.

### Gate 01 — Brief approved
Required: central question, reader takeaway, scope, initial evidence plan, owner, target date.

### Gate 02 — Research ready
Required: sources collected, claim ledger started, important facts verified, uncertainties recorded, narrative direction supported by evidence.

### Gate 03 — Story ready to build
Required: draft reviewed, narrative structure approved, chapters/scenes defined, visual direction established, asset requirements listed, interaction scope agreed.

### Gate 04 — Production complete
Required: chapters implemented, interactions functional, assets cleared, responsive layouts, motion complete, sources and captions integrated.

### Gate 05 — Release approved
Required: fact-check complete, rights check complete, accessibility review, performance review, mobile QA, all three approve release.

## 9. Editorial board and single source of truth

Use a GitHub Projects board (or equivalent) connected to story issues and repository work.

### Board stages
1. Ideas
2. Selected
3. Briefing
4. Research
5. Writing
6. Editorial Review
7. Design & Build
8. Fact-check & QA
9. Ready to Publish
10. Published
11. Review & Archive

### Story card fields
- Title
- Story ID
- Owner
- Tier (I / II / III)
- Status
- Target publish date
- Next action
- Blocker
- Brief link
- Research link
- Asset register link
- Story branch/PR link, if applicable
- Reviewers

**Ideas are unlimited; selected stories are commitments.** The board should reflect the state of work, not just dates. Small-team workflow guidance recommends one visible system, clear statuses, owners, blockers, next actions and capacity.

## 10. GitHub structure for each story

- Story issue → scope and acceptance criteria
- Story branch → implementation
- Pull request → review and checks
- Preview → visual/editorial review
- Approval → team-owned merge
- Release → production verification

Avoid oversized, unreviewable PRs. Break complex stories into smaller reviewable tasks.

The team's existing Git safety rules remain unchanged: AI may inspect, edit files and run checks, but cannot commit, push, merge, rebase, reset, cherry-pick, rewrite history or stage files without explicit authorization.

## 11. Delay protocol

Delays are normal. Research may reveal unexpected complexity, assets may be unavailable, an interaction may take longer or college commitments may intervene.

### When a story slips
1. Identify the blocker precisely.
2. Assess the impact on accuracy, scope, design and release.
3. Choose one response: resolve, reduce scope, move date or cancel.
4. Update the board with date, owner, next action and blocker.
5. Protect quality—never skip fact-checking or rights clearance to meet the weekly target.

### Scope-cut order
Cut: (1) decorative motion, (2) secondary interactions, (3) extra data views, (4) nonessential visual sequences, (5) additional supporting sections.

Never cut: core evidence, context and nuance, accuracy, source quality, essential accessibility, rights checks, mobile usability.

The story's intellectual value should survive scope reduction.

## 12. Release checklist

### Editorial
- [ ] Central question answered
- [ ] Claims checked against sources
- [ ] Quotes and numbers verified
- [ ] Context and competing interpretations reviewed
- [ ] No misleading framing
- [ ] Sources and methodology included

### Visual & rights
- [ ] All assets cleared
- [ ] Credits correct
- [ ] Captions and alt text checked
- [ ] Documentary imagery integrity maintained
- [ ] No unlabeled AI-generated content

### Technical
- [ ] Build passes
- [ ] Links work
- [ ] No console errors
- [ ] Interactions work
- [ ] Mobile and tablet tested
- [ ] Desktop tested
- [ ] Loading and fallback states work

### Accessibility
- [ ] Keyboard navigation
- [ ] Visible focus
- [ ] Reduced-motion behavior
- [ ] Contrast checked
- [ ] No interaction blocks content
- [ ] Charts/maps have text alternatives

### Release
- [ ] All three approve
- [ ] Production deployment verified
- [ ] Metadata and share preview checked
- [ ] Distribution prepared
- [ ] Story saved in archive

## 13. Post-publication review

Publishing is not the end. A 15–20-minute weekly review can ask:
1. What went well?
2. What took longer than expected?
3. Where did we discover a problem too late?
4. What did readers engage with?
5. What is one thing to change next time?

Track only useful production signals: planned vs. published, stories carried forward, rough time by stage, biggest bottleneck, rework causes, QA issues found before vs. after publication, and story performance/meaningful interactions.

Post-publication review is part of editorial planning, helping future selection and workflow improve.

Do not create 15 KPIs. The goal is to improve the process—not turn a three-person creative team into a corporate content department.

## 14. Sources and research

1. **Association for Project Management — Project Management in Newsrooms**  
   https://www.apm.org.uk/resources/find-a-resource/project-management-in-newsrooms/  
   Practical project lifecycle, role clarification, milestones and project management in editorial environments.

2. **APM — Project Management in Newsrooms PDF**  
   https://www.apm.org.uk/media/biafkpx5/project-management-in-newsrooms.pdf  
   Roles and responsibilities, project lifecycle and examples of overlapping newsroom roles.

3. **Al Jazeera Media Institute — Why Editorial Planning is Key in Today's Relentless News Cycle**  
   https://institute.aljazeera.net/en/ajr/article/3574  
   Idea generation, selection, assignment, production/editing, publication/distribution and post-publication review.

4. **Médianes — Clarify Roles in a Newsroom**  
   https://medianes.org/en/fiches-pratiques/clarify-roles-in-a-newsroom/  
   Coordination, responsibility, validation, expertise and keeping meetings lean.

5. **Content calendar workflow for small teams**  
   https://clipboard.top/content-calendar-workflow-small-team-plan-approve-publish-reuse  
   Single visible workflow, planning cadence, ownership, approval checkpoints and capacity.

6. **Weekly content production workflow template for small teams**  
   https://organiser.info/weekly-content-production-workflow-template  
   Briefs, statuses, due dates, blockers, review and capacity.

7. **FT Strategies / WAN-IFRA / Arc XP — Future Newsrooms Study 2026**  
   https://www.ftstrategies.com/hubfs/PDF%20documents/FT%20Strategies%20%26%20WAN-IFRA%20%26%20Arc%20XP%20%7C%20Future%20Newsrooms%20Study.pdf  
   Time allocation across newsroom tasks and the challenge of balancing production with pre- and post-publication work.

---

## Final takeaway

**A reliable publication rhythm comes from a sustainable pipeline, not a heroic weekly sprint.**

Viraaasat should be ambitious in its storytelling and conservative in its commitments. Clear roles, limited WIP, explicit gates, peer review and a release checklist should let the three of us produce excellent stories without letting the process become exhausting or chaotic.
