# Viraaasat.in — Master Blueprint

**Research Mission 40 of 40 · Final foundation consolidation**  
**Date:** 22 November 2026  
**Status:** Foundation research complete; implementation begins next

---

## 1. Executive summary

Viraaasat is an independent, story-first digital publication exploring India in all its complexity—its history, culture, society, geography, politics, economy, science, contradictions, achievements, failures, and possible futures.

It is neither a conventional news portal nor simply a cinematic landing page. It is a publication built around original, evidence-driven stories that invite curiosity and help readers understand a subject more deeply. Each story may have its own visual language, pacing, and interactive form, while sharing Viraaasat’s editorial standards and recognizable identity.

**Editorial north star:** curious rather than preachy; honest rather than nationalistic; intellectual but accessible; emotional without sentimentality.

**Tagline in consideration:** “India, in all its complexity.” Not formally locked.

The foundational research is complete. It is not a license to lock unapproved topics, design choices, implementation details, or editorial decisions. Research supplies options and recommendations; the user and team decide.

## 2. Project principles

- Nuanced, evidence-driven, candid, balanced, and curious.
- Neither blindly patriotic nor reflexively cynical.
- No sensationalism, clickbait, simplistic solutions, or manufactured drama.
- Evidence and context before spectacle.
- Readers should be able to explore, pause, understand, and leave with a better question.
- Storytelling and design should be accessible; essential information must not depend on motion, hover, sound, WebGL, or JavaScript-heavy modules.
- The website is a long-term publication, not a one-off showcase.

### Editorial archetypes
- **Explorer:** curiosity, discovery, observation.
- **Sage:** context, knowledge, analysis, evidence.

## 3. Team and operating reality

- Team of three: the user and two friends.
- College and other obligations are real constraints.
- Sustainable publishing matters more than a public promise of weekly releases.
- Roles can rotate; peer review is expected.
- Start lean, prove the workflow over the first stories, and only increase scope or cadence based on actual time and quality.

## 4. Brand and visual identity

### Locked palette

| Token | Hex | Intended use |
|---|---|---|
| Archive Ivory | `#F1EBDD` | Paper, editorial backgrounds |
| Ink Charcoal | `#191B18` | Primary text, dark surfaces |
| Terracotta | `#B66A46` | Warm accents |
| Forest | `#68745C` | Natural secondary accent |
| Old Brass | `#C6A66B` | Highlights, restrained detail |
| Oxide Red | `#7D3430` | Strong accent, emphasis |

### Locked typography pairing

- **Cormorant Garamond** — display and editorial headings.
- **Manrope** — body text and UI.
- **IBM Plex Mono** — metadata, labels, technical detail.

### Art direction

Premium cinematic documentary/editorial, combining archival museum, modern magazine, digital museum, and experimental web studio sensibilities. Visual references include the ambition of A24, NYT editorial, museum exhibits, and experimental digital studios—not imitation of any one brand.

- Authentic, observed documentary photography.
- Natural light, tactile details, restrained film texture.
- India represented with specificity and diversity, not stock-tourism clichés.
- Subtle but bold identity; scripts and cultural motifs may be used thoughtfully.
- Avoid oversaturation, staged imagery, cliché symbols, and decorative noise.

### Logo

**Undecided.** Preferred direction: minimalist editorial/archival wordmark or compact mark. Ideas include a custom V/archival symbol or compact Devanagari `वि`. Avoid flag, Ashoka Chakra, map, lotus, or mandala clichés. No logo should be treated as selected until team approval.

## 5. Website experience

### Experience ambition

A long, cinematic, scroll-led experience where scrolling controls narrative pace. Motion is part of storytelling, not an effects layer added everywhere.

### Homepage concept

Proposed sequence (not a locked wireframe):
1. Cinematic opening—identity and invitation.
2. Featured story.
3. Brief explanation of what Viraaasat is.
4. Story collection/archive preview.
5. Explore India—topics, collections, and potentially places/timelines as these mature.
6. Reader relationship—newsletter or feedback invitation.
7. Footer with trust and editorial links.

The homepage should quickly establish identity and provide a clear path to a story. Avoid long introductions that delay discovery.

### Proposed primary navigation

- Stories
- Explore
- Latest
- About

These labels and final information architecture are proposals pending team review.

### Proposed sitemap

```text
/
├── /stories
│   ├── /stories/:slug
│   └── /stories/topic/:topic
├── /explore
│   ├── /explore/topics
│   ├── /explore/collections
│   ├── /explore/places        (future)
│   └── /explore/timeline      (future)
├── /latest
├── /about
│   ├── /about/editorial-standards
│   ├── /about/corrections
│   └── /about/funding
├── /contact
├── /newsletter                (optional)
├── /privacy
├── /terms
└── /copyright
```

The sitemap is a proposal. Launch pages should be only those with meaningful content and operational readiness.

## 6. Editorial strategy

### Coverage intent

Viraaasat should build a varied, long-term picture of India across topics rather than over-indexing on a single domain. Candidate topic areas include:

- History
- Society
- Culture
- Geography and environment
- Science and technology
- Economy and work
- Politics and public life
- Cities and infrastructure
- Ideas and identity
- India's future

The taxonomy is not locked.

### Story selection

Use an editorial scorecard as a discussion aid—not an automatic selector. Consider:
- Importance and relevance
- Originality and distinctiveness
- Evidence availability
- Narrative potential
- Human stakes and lived experience
- Visual/interactivity potential
- Representational balance across India
- Production feasibility and time
- Rights and safety considerations

**Editorial ownership:** the team selects topics, titles, angles, and publication order. The assistant can research, shortlist, analyze, and recommend, but must not decide or lock a story without explicit approval.

### Evidence and fact-checking

- Maintain a source ledger and claim-to-source mapping.
- Classify claims as verified, disputed, rejected, or unresolved.
- Corroborate important claims, prioritize primary evidence when available, and use credible secondary sources.
- For statistics, record definitions, denominator, timeframe, method, limitations, and geographic scope.
- History should distinguish established facts from interpretations and contested accounts.
- Allegations require careful corroboration, attribution, relevant responses, and legal/editorial review when risk warrants.
- Corrections should be visible, documented, and handled through a defined process.
- Do not claim absolute neutrality; demonstrate trustworthy methods.

## 7. Story experience blueprint

A story is not a long article with effects. It is a sequence of scenes that carry meaning.

**Core loop:** Scene → Question → Evidence → Visual → Pause → Discovery.

Each chapter should have one primary question and one key insight. Text and visual state should reinforce the same point.

### Flexible narrative movements

Possible movements, adapted to the story:
1. Opening
2. Orientation
3. Discovery
4. Context
5. Complexity or contradiction
6. Human connection
7. Implication
8. Synthesis
9. Accountability / sources / methods

This is a flexible framework, not a required template for every story.

### Chapter planning contract

Before development, define:
- Chapter ID and title
- Chapter question
- Key insight
- Evidence and source links
- Text draft
- Visual concept
- Interaction
- Motion
- Trigger or scroll behavior
- Static fallback
- Mobile adaptation
- Accessibility notes
- Transition to next scene
- Production notes

### Starting production targets (flexible)
- 6–10 chapters as a planning range.
- 2–5 major interactive modules where justified.
- 1,500–3,000 words as a rough editorial range, adjusted for story needs.
- Reading time should reflect text, not artificial time created by scroll pinning.
- A story may be shorter, longer, lighter, or more complex when the subject warrants it.

## 8. Motion and interaction

### Motion vocabulary

- Mask/clip reveal
- Layer reveal
- Pinned visual with changing text
- Parallax used selectively
- Kinetic typography
- Image wipe or transformation
- Horizontal rail when appropriate
- Progressive map/chart reveal
- Spatial transition
- Chapter cut
- Data reveal
- Pause / stillness

### Motion principles

- Narrative pacing first; animation supports meaning.
- Keep native scroll behavior.
- Scroll should remain reversible and usable.
- Avoid scroll hijacking, constant parallax, excessive pinning, heavy blur, global `will-change`, or effects that block content.
- Essential information must be available in a static or reduced-motion experience.
- Respect `prefers-reduced-motion`.
- Mobile is a separately edited composition, not a shrunken desktop layout.

## 9. Visual journalism and data

- Start with the question or insight, not the chart type.
- Use D3 for bespoke visualization when necessary; Observable Plot for simpler, quicker charts.
- Annotate the data so readers understand why it matters.
- Show provenance, units, methodology, and limitations.
- Avoid misleading scales, false precision, unsupported causation, and cherry-picking.
- Keep exploration optional when the narrative needs a clear path.
- Ensure charts have text alternatives, keyboard-accessible controls, and readable mobile layouts.

## 10. Maps and geospatial stories

Maps should be chosen to answer a story question, not added as decorative geographic content. A story-specific mapping stack can be selected after data, performance, accessibility, and mobile requirements are understood. Mapping research mission 04 was completed, but its detailed report content is not available in this consolidation context; specific library or source recommendations from that report should be reopened before being relied upon.

## 11. 3D and immersive technology

- Use spatial experiences only when they materially improve understanding.
- Suitable contexts: architecture, heritage, terrain, spatial relationships, cutaways, and complex physical systems.
- Three.js, React Three Fiber, Drei, Blender, and glTF/GLB are options—not mandatory stack components for every story.
- Art direction matters more than polygon count.
- Optimize assets and load progressively.
- Provide accessible text and static fallbacks.
- Homepage should remain predominantly 2D; 3D is a special storytelling tool, not a default.

## 12. Design system and frontend architecture

### Proposed stack

- React + TypeScript + Vite.
- CSS variables/tokens for design system.
- GSAP + ScrollTrigger for complex scroll choreography.
- Native CSS and Intersection Observer for simple effects.
- Lenis only if it demonstrably improves the experience; native scroll remains preferred.
- D3 or Observable Plot for data stories.
- Map library selected per story.
- Three.js / React Three Fiber / Drei for justified 3D experiences.
- Markdown/MDX content authoring initially.
- Static-first hosting and pre-rendering for public content.

### Architecture principles

- Story-first folders and registry.
- Global foundations, primitives, editorial components, interaction components, motion components, and story-specific modules.
- Components should be reusable where repetition is real; keep story-specific work local until reuse is proven.
- Avoid prop explosion, unnecessary global state, and premature abstraction.
- A story template guides production but does not constrain the creative form.

### Proposed content structure

```text
src/
  app/
  design-system/
    tokens/
    primitives/
    editorial/
    interaction/
    motion/
  stories/
    registry/
    story-slug/
      content/
      components/
      assets/
      styles/
  content/
  utilities/
  styles/
```

Adjust as implementation reveals the real needs.

## 13. Typography and editorial layout

### Fluid type planning ranges

| Style | Desktop range | Mobile range |
|---|---:|---:|
| Hero | 72–144 px | 44–84 px |
| H1 | 56–88 px | 36–56 px |
| H2 | 40–56 px | 30–42 px |
| H3 | 26–36 px | 22–30 px |
| Deck | 20–26 px | 18–22 px |
| Body | 17–20 px | 16–19 px |
| Caption | 13–15 px | 12–14 px |
| Metadata | 11–13 px | 11–12 px |
| UI | 14–17 px | — |

These are starting heuristics, not rigid rules.

- Long-form reading measure: approximately 60–75 characters per line; `max-width: 68ch` as a starting point.
- Display line-height: 0.95–1.10; headings: 1.0–1.18; body: 1.55–1.75; deck: 1.4–1.55; captions/UI: 1.35–1.5.
- Prefer generous whitespace, left alignment, restrained bold/italic, clear hierarchy.
- Suggested responsive grid: 12 columns desktop, 6–8 tablet, 4 mobile.

## 14. Asset and media pipeline

### Asset sourcing hierarchy

1. Original / commissioned material.
2. Primary and institutional archives.
3. Properly licensed documentary assets.
4. Open-license material, with individual license verification.
5. Created explanatory visuals, diagrams, maps, illustrations, or simulations.

Possible sources include Unsplash, Pexels, Wikimedia Commons, Smithsonian Open Access, and relevant institutional/government archives. A source's general reputation or open access status does not replace checking the specific asset's license and conditions.

### Asset workflow

Brief → research and shortlist → rights/provenance verification → edit or create → optimize → integrate → QA → publish.

### Editorial image standards

- Documentary first, aesthetic second.
- Authentic, specific, observed, human, dignified imagery.
- Avoid deceptive manipulation and evidence-altering edits.
- Photorealistic AI-generated imagery must not masquerade as documentary evidence.
- Label archives, reconstructions, illustrations, simulations, generative assets, and data visuals clearly when context requires.
- Preserve creator, license, credit, consent, and provenance.

### Asset ledger

Record at minimum: asset ID, story, filename, description, creator, source URL, license, required credit, download date, original path, edit history, publication location, verifier, rights status, and notes.

### Technical media guidance

- Photos: AVIF/WebP where appropriate; provide responsive variants.
- Graphics: SVG when suitable.
- Video: WebM/MP4 with poster and controls; avoid autoplay sound.
- Avoid GIF for heavy looping media; prefer optimized video.
- Lazy-load below-fold media; prioritize hero/LCP media; reserve aspect ratios to reduce layout shift.
- Practical proposed image-size targets are only heuristics and should be tested against quality and performance.

## 15. Audio

- Sound is optional and never required for comprehension.
- No autoplay audio.
- User controls play, pause, mute, and volume.
- Ambience, narration, music, and designed sound each need a reason.
- Do not fabricate archival audio.
- Obtain consent for field recordings and verify separate rights for recordings and compositions.
- Provide captions/transcripts or appropriate text alternatives.
- Lazy-load audio and pause when no longer relevant.

## 16. Accessibility, performance, and responsive QA

Target WCAG 2.2 AA as an internal design goal; do not claim conformance without testing.

- Semantic HTML, landmarks, headings, skip link.
- Keyboard navigation and visible focus.
- Color contrast and never use color alone to communicate.
- Zoom and reflow.
- Reduced motion support and static alternatives.
- Charts/maps have text equivalents.
- Video captions and audio transcripts where appropriate.
- No content hidden behind hover-only behavior.
- Mobile touch targets and readable controls.
- Real-device testing, browsers, and screen-reader spot checks.

### Core Web Vitals target thresholds

At the 75th percentile, aim for:
- LCP ≤ 2.5 seconds
- INP ≤ 200 milliseconds
- CLS ≤ 0.1

Use these as performance goals; measure real outcomes after launch.

Progressive enhancement order:
1. Content works.
2. Responsive layout works.
3. Essential interactions work.
4. Cinematic motion enhances it.
5. Heavy 3D or advanced modules load when justified.

## 17. SEO and search visibility

### Principle

Build a search-friendly editorial site that happens to be immersive. Search discoverability is a by-product of clear, accessible, original content—not a keyword game.

### Story page basics

- Stable, unique, descriptive URL.
- Pre-render/static generation where feasible.
- Primary story text present in crawlable HTML.
- Unique title, description, canonical, social metadata.
- Logical headings and internal links.
- Responsive, contextual images with meaningful alt text and descriptive filenames.
- Accurate Article/NewsArticle structured data where appropriate, BreadcrumbList, Organization/Person as relevant.
- Sources, methods, limitations, updates, and corrections accessible.

### Site-level essentials

- XML sitemap and robots.txt.
- Search Console setup and sitemap submission.
- HTTPS, proper redirects, correct 404 handling.
- No duplicate/near-duplicate thin topic pages.
- Internal links to related stories, topics, archive, sources, and trust pages.
- Unique share imagery and Open Graph/social cards; 1200×630 is a useful starting canvas.
- Verify structured data; do not mark up content inaccurately.

### Search intent

Stories should be useful to readers seeking context on a topic, a question, a place/entity, or a comparison. Do not distort the story to chase search terms.

## 18. Content management and publication workflow

### Initial authoring approach

Repo-native Markdown/MDX is recommended initially. Consider a CMS only when browser-based editing, collaboration, or workflow limitations are genuinely slowing production.

### Workflow

Pitch → team selection → brief → research → evidence/source ledger → outline → draft → editorial review → visual plan/storyboard → production → fact-check and rights review → QA → approval → publish → post-publication review.

### Quality gates

No story publishes until editorial, rights, reader experience, technical, and operational gates pass. The story's production tier may change during production. When time is constrained, cut decorative motion and secondary interactions—not accuracy, rights, accessibility, or the core narrative.

## 19. Team workflow and production tiers

### Suggested roles

- **Editorial/research:** brief, sources, narrative, claims, fact-check.
- **Visual/experience:** art direction, storyboard, image curation, interaction/motion.
- **Technical/production:** frontend, data/interaction integration, performance, QA, deployment.

Peer review is shared. Roles may rotate.

### Story production tiers

- **Tier I — Lighter:** editorial-first, restrained motion, one or two meaningful interactions.
- **Tier II — Medium:** bespoke visuals and several meaningful interactions.
- **Tier III — Flagship:** complex scrollytelling, maps/data, advanced motion, or 3D when justified.

Do not make every story a flagship.

### Estimated effort

A prior operational estimate placed a story in roughly 40–88 combined team-hours, depending on complexity. This is an illustrative planning range, not measured historical data. Validate against the first few stories.

### Cadence

Do not publicly promise weekly publication before validating capacity. Release when quality gates pass. A two-to-three-week cadence may be more sustainable for some stories; adjust based on observed workload and pipeline.

## 20. Marketing and distribution

### Distribution model

- **Instagram:** discovery—carousels, visual extracts, short video.
- **Newsletter:** direct reader relationship and return visits.
- **YouTube:** deeper visual essays/explainers when justified.
- **Personalized outreach:** relevant creators, educators, journalists, newsletters, niche publications, communities.
- **Search:** evergreen discovery.
- **Website:** canonical home for the story.

### Per-story distribution package (proposed)

- 1 immersive web story.
- 1 Instagram carousel.
- 1 short video where suitable.
- 1 newsletter edition.
- 2–3 additional social posts/extracts.
- Small, relevant outreach list.
- Post-release performance and qualitative review.

Distribution should be planned before story completion—not as an afterthought. Do not turn the three-person team into a content factory.

## 21. Analytics and privacy

Measure discovery, reading progression, interaction usefulness, returning readers, and mobile/technical outcomes. Start with minimal privacy-conscious analytics.

Potential events: story view, chapter reached, scroll threshold, interaction started/completed, source opened, audio started, archive search, language switch, share, external link, and 404.

Use an allowlisted event/property design. Avoid unnecessary personal data, session recording, heatmaps, advertising pixels, or sensitive profiling at launch. Review analytics weekly or monthly as appropriate; low engagement does not automatically mean a story lacks value.

## 22. Community and reader relationships

Start with a relationship, not a platform.

- Newsletter.
- Feedback and corrections channel.
- Small reader testing pool.
- Clear contact information.

Defer comments, accounts, leaderboards, open uploads, and community platform features until there is a clear need and capacity to moderate, protect privacy, and maintain trust.

## 23. Security, legal, privacy, and trust

### Security baseline

- MFA/passkeys for team accounts where available.
- Least-privilege access.
- No secrets in repository or frontend bundles.
- GitHub protections, CI checks, dependency alerts, secret scanning, and code scanning as appropriate.
- Sanitization and safe content handling; MDX is trusted code and must be managed accordingly.
- Security headers/CSP, HTTPS, dependency/supply-chain review.
- Separate staging and production.
- Backup and recovery plan.
- Incident-response owner and process.
- No user-generated content/accounts at launch unless specifically justified and secured.

### Legal and editorial trust pages

Prepare and review:
- About
- Editorial standards
- Corrections
- Funding and independence
- Contact
- Privacy
- Terms (as appropriate)
- Copyright/credits

Legal research previously covered India privacy and publication compliance, including DPDP implementation considerations, IT Rules applicability, copyright, defamation/privacy, and editorial ethics. Verify the applicable current legal requirements and seek qualified legal review where necessary before launch; this blueprint is not legal advice.


### Trust signals in stories

- Why the story matters.
- Story type and disclosures.
- Byline and dates.
- Sources, methods, limitations.
- Corrections/updates.
- Reader feedback route.
- Funding/conflict disclosure where relevant.

Trust should be demonstrated through process and transparency, not blanket claims of unbiasedness.

## 24. Financial and operational sustainability

### Bootstrap philosophy

- Keep infrastructure lean and predictable.
- Domain is an essential cost; other paid services should be justified.
- Start with free/low-cost hosting, tools, analytics, and newsletter tiers where suitable.
- Review subscriptions periodically and cancel unused tools.
- Story-specific expenses are approved separately.
- Avoid monetization distractions during initial credibility-building.

### Illustrative budget ranges from Research 38

- Lean monthly operating target: ₹0–₹500 (excluding annual domain cost averaged across the year).
- Comfortable optional spending: ₹500–₹2,000/month.

These are planning estimates, not verified current prices or guaranteed cost ceilings. Confirm provider pricing, eligibility, limits, and commercial-use terms before choosing.

### Cut scope in this order when under pressure

1. Decorative animation.
2. Secondary interactions.
3. Repetitive media.
4. Extra social variations.
5. Overcomplicated promotion.

Protect research, fact-checking, rights, editorial quality, mobile experience, accessibility, and the core narrative.

## 25. Launch MVP

### Launch essentials

- Homepage.
- Stories/archive.
- At least one fully finished story (topic and title chosen by the team).
- About Viraaasat.
- Editorial standards and corrections/contact pathway.
- Privacy and appropriate legal pages.
- SEO essentials: titles, metadata, sitemap, robots, canonical, share cards, structured data where applicable.
- Mobile-ready experience.
- Performance and accessibility QA.
- Secure deployment, monitoring, and rollback/recovery plan.
- Minimal analytics and newsletter/reader relationship path if ready.

### Deferred until need is demonstrated

- Accounts and profiles.
- Comments.
- Community platform.
- Complex CMS.
- Recommendation engine.
- Monetization infrastructure.
- Advanced search beyond actual content needs.
- Multi-language content before translation/review workflow exists.
- Homepage 3D or heavy effects without a strong purpose.

## 26. Pre-launch release gates

Every launch should pass:

1. **Editorial integrity:** claims are sourced, checked, contextualized, approved.
2. **Media/rights:** provenance, licensing, credit, consent, and disclosures are verified.
3. **Reader experience:** mobile, keyboard, reduced motion, fallback states, readability.
4. **Technical quality:** production build, routes, browser checks, acceptable performance, no critical errors.
5. **Trust/security:** privacy, security baseline, contact/corrections, no exposed secrets.
6. **Operations:** deployment ownership, backups, recovery, monitoring, realistic post-launch workload.

Research 39 contains the detailed pre-launch audit and checklists. Research completion is not the same as passing these gates on the actual implementation.

## 27. Implementation roadmap

This is a recommended sequence, subject to team approval and adjustment.

### Phase 0 — Decisions and setup

- Review this master blueprint with all three team members.
- Confirm approved brand tokens and identify remaining brand decisions.
- Select the first story collaboratively—no assistant-selected story is assumed.
- Establish project repository and agreed workflow.
- Define the first story brief, sources, scope, production tier, and deadline/cadence expectation.

### Phase 1 — Foundation build

- Establish app structure, routes, content conventions, tokens, responsive grid, type scale.
- Build basic homepage, story index/archive, story page framework, about/trust pages, footer/navigation.
- Set up deployment preview and production environment.
- Add essential SEO and analytics plumbing.

### Phase 2 — Story prototype

- Research and outline the chosen story.
- Create claim ledger, draft, and storyboard.
- Prototype one representative scene/interaction before committing to a full build.
- Validate mobile, performance, fallback, and reduced-motion behavior early.

### Phase 3 — Complete first story

- Produce narrative and assets.
- Build scene by scene.
- Conduct editorial, rights, accessibility, performance, and technical reviews.
- Keep scope flexible; remove unnecessary effects.

### Phase 4 — Launch readiness

- Complete Research 39 checklist against the real site.
- Test routes, devices, browsers, accessibility, metadata, sitemap, and production behavior.
- Verify legal/trust pages, deployment, monitoring, recovery, and ownership.
- Team Go/No-Go.

### Phase 5 — Publish and learn

- Release the story and distribution package.
- Observe reader behavior and feedback.
- Record production time and friction.
- Review what worked and what should change before planning the next story.

## 28. Unresolved decisions register

Do not silently convert these into decisions:

- Logo and final wordmark.
- Whether and when the tagline is formally adopted.
- Exact homepage composition and animation.
- Final navigation labels and sitemap details.
- Launch topic/title/angle and publishing order.
- Topic taxonomy and collection system.
- Hosting provider and plan, after checking current limits and eligibility.
- Analytics provider and event configuration.
- Newsletter provider and signup approach.
- Launch cadence after observing real workload.
- Which interactions/visuals the first story needs.
- Whether any future CMS, search, localization, community, or monetization is justified.

## 29. Locked decisions and approved direction

### Explicitly locked

- Project name: **Viraaasat.in** (three “a”s).
- Palette: archive ivory, ink charcoal, terracotta, forest, old brass, oxide red with the specified hex values.
- Typography: Cormorant Garamond + Manrope + IBM Plex Mono.
- Editorial intent: India in all its complexity; nuanced, candid, evidence-driven; neither blindly patriotic nor reflexively cynical.
- Story-first publication, with bespoke immersive experiences as appropriate.
- Three-person team and sustainable production ambition.
- User/team own all editorial selections and decisions.

### Approved direction / strong recommendations, not locked

- Cinematic scroll-driven experience.
- Static-first and progressive enhancement.
- React + TypeScript + Vite.
- GSAP/ScrollTrigger for complex motion.
- Markdown/MDX initially.
- Story-first architecture.
- 2D homepage; special 3D stories only when justified.
- Privacy-conscious analytics, newsletter-led reader relationship.
- Tiered story production.
- Static hosting, pre-rendered public content, lean launch.

## 30. Editorial ownership and AI collaboration rules

- The assistant researches, structures, explains, drafts, critiques, and recommends.
- The assistant must clearly label facts, source-derived claims, inference, opinion, candidate ideas, and recommendations.
- The assistant must not independently choose, title, angle, or lock a story.
- The assistant must not claim a team decision or approval without explicit confirmation.
- Preserve user corrections and previously locked choices.
- Avoid unsolicited mockups/images or large changes in direction.
- User handles Git commits and pushes. AI may inspect status/log/diff/branch, edit files, and run checks, but must not stage, commit, push, merge, rebase, reset, cherry-pick, or rewrite history unless explicitly authorized.

## 31. What research does and does not mean

Foundational research missions 1–40 are complete, but a number of earlier missions’ full reports are not present in this consolidation context. This blueprint uses the summaries and conclusions that are available; it does not pretend to reconstruct every citation, source detail, or recommendation from reports whose full content was not reopened.

Mission 40 is a synthesis, not fresh external verification of every vendor, law, price, technical version, or platform feature. Re-check current provider terms, laws, and technical documentation at implementation time.

## 32. Final north star

Viraaasat should feel like entering a story, not opening a news feed.

It should be beautiful enough to invite people in, clear enough to keep them oriented, rigorous enough to earn trust, accessible enough to welcome them, and thoughtful enough to leave them with something beyond a scroll.

The publication's quality is not measured by how many effects it uses, how many topics it covers, or how fast it publishes. It is measured by whether each story makes India more understandable—without flattening its complexity.

---

## Research completion tracker

**40 / 40 missions completed — 100% foundational research.**

No missions skipped.

**Transition:** foundational research is complete. The next work should be implementation-driven: build the foundation, choose the first story with the team, prototype, test, and refine based on the actual project—not continue broad research unless a concrete implementation question requires it.
