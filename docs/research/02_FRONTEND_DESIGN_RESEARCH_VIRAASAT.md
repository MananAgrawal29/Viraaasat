# Viraaasat Research 01 — Frontend Design & Creative Direction

**Research status:** Pass 1 (curated starting point; not an exhaustive audit)  
**Research date:** 22 November 2026  
**Project:** Viraaasat — premium editorial, archival heritage, cinematic documentary, interactive storytelling

## Research question
How can Viraaasat feel like a living archive of India—heritage-rooted, modern, cinematic, editorial, and distinctive—without becoming a generic award-gallery clone or an over-animated site?

## Direction
Use three reference layers:
1. **Art direction galleries** — identify ideas, composition, typography, and visual tone.
2. **Real experience case studies** — inspect how story, scroll, media, and interaction work together.
3. **Agent design skills** — encode design intent and critique into our AI-assisted implementation process.

All external inspiration must be adapted to Viraaasat's identity. References are not templates.


## A. Inspiration galleries — what each is for

| Resource | Link | Use it for | Priority |
|---|---|---|---|
| Awwwards | https://www.awwwards.com/ | Award-winning sites, immersive art direction, unconventional layout, interaction ideas | High |
| Recent (formerly Godly) | https://recent.design/ | Video previews of motion, scroll and interaction; quick visual scan of contemporary work | High |
| SiteInspire | https://www.siteinspire.com/ | Editorial structure, typography, whitespace, tasteful restraint | High |
| Minimal Gallery | https://minimal.gallery/ | Typographic layouts, whitespace, minimal design and refinement | High |
| Hoverstates | https://hoverstat.es/ | Experimental navigation, unusual web interactions, non-template ideas | Medium-high |
| One Page Love | https://onepagelove.com/ | Long-form pages, scrollytelling, section sequencing and single-page narratives | High |
| Land-book | https://land-book.com/ | Compare specific sections (hero, navigation, grids, CTA, footer) | Medium-high |
| CSS Design Awards | https://www.cssdesignawards.com/ | Alternate award lens for UI, UX, and implementation ideas | Medium |
| The FWA | https://thefwa.com/ | Cutting-edge interactive/experiential web work | Medium |

**Use two or three galleries per design task—not all of them.** Pick the gallery based on the design question.

## B. Experience references to dissect

### 1. Siena Film Foundation — homepage/cinematic editorial reference
- Website: https://www.siena.film/
- Case-study/reference: https://www.commarts.com/webpicks/siena-film-foundation
- Why it matters: filmic structure, editorial typography, large visual presence, filmstrip-inspired imagery, parallax and context-sensitive navigation.
- Study: opening composition; image scale; typography hierarchy; how the page transitions between visual chapters; persistent vs contextual navigation; how motion is restrained for usability.
- Adapt for Viraaasat: cinematic introduction, visual identity reveal, image-led editorial sections, navigation that doesn't dominate.
- **Do not copy:** film production identity, exact layout, filmstrip treatment, or its signature animations.

### 2. The Boat (SBS) — story-level immersion reference
- SBS Labs: https://www.sbs.com.au/labs/
- One Page Love entry: https://onepagelove.com/the-boat
- Research/case discussion: https://www.tandfonline.com/doi/full/10.1080/1554480X.2024.2329059
- Why it matters: story-driven scroll, custom illustration, soundscape, motion responsive to narrative, optional side exploration, and context material.
- Study: how motion supports story; audio opt-in; user pacing; branch points; scene transitions; accessibility/fallback behavior.
- Adapt for Viraaasat: individual stories should have bespoke visual/narrative systems. The homepage must not dictate the story-page template.
- **Do not copy:** exact illustration style, audio behavior, plot structure, or use sound without user control.

### 3. Every Last Drop — lightweight scrollytelling reference
- Archive/reference: https://onepagelove.com/every-last-drop
- Why it matters: cumulative information linked to scroll; long-form experience without relying on WebGL or 3D.
- Study: progress-linked numbers; visual continuity; simple mechanics that reinforce the message; how a long page remains coherent.
- Adapt for Viraaasat: cumulative data, timeline progress, chapter-linked statistics, and scroll-reactive scenes where meaningful.
- **Caveat:** the original site is no longer live; inspect preserved screenshots/archives rather than treating it as a current implementation to clone.

## C. Agent design skills — initial evaluation

### Primary candidate: Taste Skill
- Repository: https://github.com/Leonxlnx/taste-skill
- Role: art direction and stronger visual decisions for high-impact websites/landing pages; reference-first approach and browser checking.
- Viraaasat fit: high for homepage creative direction and story landing pages.
- Adoption status: **RECOMMENDED FOR TRIAL; not installed/approved yet.** Inspect skill files, dependencies, installation instructions and licensing before adoption.

### Polish/critique candidate: Impeccable
- Repository: https://github.com/pbakaus/impeccable
- Role: design critique, refinement, polish and UI quality workflows.
- Viraaasat fit: high for post-implementation refinement, provided it follows our local design authority.
- Adoption status: **RECOMMENDED FOR TRIAL; not installed/approved yet.**

### Design intelligence database: UI/UX Pro Max
- Repository: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Role: searchable styles, palettes, typography, UX guidance, chart patterns and stack-aware suggestions.
- Viraaasat fit: useful as a lookup tool, but not our art director.
- Adoption status: **OPTIONAL REFERENCE; evaluate later if it solves a real need.**

### Review skill: Vercel Web Interface Guidelines
- Repository: https://github.com/vercel-labs/agent-skills
- Role: UI quality review and guidelines-oriented feedback.
- Viraaasat fit: useful QA layer for usability/accessibility, not creative direction.
- Adoption status: **OPTIONAL QA TRIAL.**

### Skill policy
Do not install all design skills simultaneously. They can overlap or conflict. Start by testing one primary art-direction skill and one separate critique/review skill on a small, disposable prototype. `DESIGN_SYSTEM.md` and the local brief remain the source of truth.


## D. Proposed reference-analysis method

When we find a reference website, do not save it with a vague note like “cool animations.” Record:
- URL and reference name
- What makes the experience memorable
- Opening viewport composition
- Typography choices and hierarchy
- Color and image treatment
- Layout/grid behavior
- Navigation model
- Scroll and motion behavior (what triggers it, purpose, timing/easing if inspectable)
- Interaction and feedback
- Responsive behavior
- Accessibility/performance considerations
- **What we can learn**
- **What must not be copied**
- Relevance to Viraaasat: high/medium/low and which area


## E. Viraaasat design principles distilled from Pass 1
1. **Build a cinematic atmosphere, not a cinematic obstacle.** The site must remain navigable and readable.
2. **Design story-specific experiences.** Use the homepage design system as the brand backbone, not as a rigid story template.
3. **Motion must reveal meaning.** Scroll movement, counters, transitions and parallax should help reveal relationships or atmosphere.
4. **Start with composition and content.** Do not use effects to disguise weak hierarchy or generic layouts.
5. **Use the lightest effective technique.** CSS and simple DOM motion before canvas/WebGL; reserve 3D for stories that justify it.
6. **Treat references as evidence of techniques, not templates.** Avoid cloning signature layouts or animation sequences.
7. **Mobile and reduced-motion are design targets, not afterthoughts.** Every immersive interaction needs a usable alternative.
8. **The existing brand is the authority.** Archive Ivory, Ink Charcoal, Terracotta, Forest, Old Brass, Oxide Red; Cormorant Garamond, Manrope, IBM Plex Mono; premium editorial/documentary tone.

## F. Research platforms quick links
- Awwwards: https://www.awwwards.com/
- Recent: https://recent.design/
- SiteInspire: https://www.siteinspire.com/
- Minimal Gallery: https://minimal.gallery/
- Hoverstates: https://hoverstat.es/
- One Page Love: https://onepagelove.com/
- Land-book: https://land-book.com/
- CSS Design Awards: https://www.cssdesignawards.com/
- The FWA: https://thefwa.com/

## G. Sources consulted for this pass
- Communication Arts — Siena Film Foundation design write-up: https://www.commarts.com/webpicks/siena-film-foundation
- Siena Film Foundation site: https://www.siena.film/
- SBS Labs: https://www.sbs.com.au/labs/
- One Page Love — The Boat: https://onepagelove.com/the-boat
- One Page Love — Every Last Drop archive: https://onepagelove.com/every-last-drop
- Academic discussion of SBS The Boat's interactive experience: https://www.tandfonline.com/doi/full/10.1080/1554480X.2024.2329059
- Anthropic skills repository: https://github.com/anthropics/skills (frontend-design skill)
- Impeccable: https://github.com/pbakaus/impeccable
- Taste Skill: https://github.com/Leonxlnx/taste-skill
- UI/UX Pro Max: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill
- Vercel agent skills: https://github.com/vercel-labs/agent-skills
- Design inspiration gallery overview used for classification (secondary guide): https://wbcomdesigns.com/best-websites-design-inspiration/

## H. Decisions from this research pass

| Decision | Status |
|---|---|
| Use galleries for targeted reference gathering, not indiscriminate inspiration | Adopted as workflow principle |
| Start reference study with Siena Film Foundation, The Boat, Every Last Drop | Adopted as initial case studies |
| Taste Skill as primary art-direction skill | Trial recommended; not installed |
| Impeccable as separate critique/polish layer | Trial recommended; not installed |
| UI/UX Pro Max | Optional research database; defer |
| Vercel Web Interface Guidelines | Optional QA layer; defer |
| Homepage design/build | Not started |
| Tech stack/dependencies | Not locked by this research pass |


## Next research pass
**Motion engineering & scroll choreography:** GSAP/ScrollTrigger, native scroll-driven CSS, Lenis tradeoffs, text reveal methods, pinning, performance, accessibility and responsive fallback patterns. We will turn the findings into a separate `research/MOTION_ENGINEERING.md` resource.
