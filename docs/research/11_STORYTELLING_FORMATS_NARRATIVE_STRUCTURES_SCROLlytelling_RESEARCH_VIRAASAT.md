# Viraaasat Research 11
## Storytelling Formats, Narrative Structures & Scrollytelling Patterns
**Mission:** Define a flexible narrative design toolkit for Viraaasat's weekly stories.
**Status:** Research completed
**Editorial premise:** Structure serves the story; no universal template.

---

## Executive summary

Viraaasat stories should feel authored—not like a sequence of interchangeable scroll effects. Before choosing animation or interaction, decide:

1. **What is the central question?**
2. **What does the reader need to understand, and in what order?**
3. **Where should the story create curiosity, tension, surprise, empathy, or reflection?**
4. **Which visual form makes the evidence easier to understand?**
5. **Where does guided reading end and reader exploration begin?**

Scrollytelling is best understood as a combination of separate choices: narrative structure, visual/display mechanism, and trigger mechanics. Scroll is a pacing control—not a story in itself.

## 1. Narrative structure families

### A. Linear / author-guided
The author chooses a sequence and the reader follows it, while still controlling pace through ordinary scrolling.

**Use for:** historical narratives, explainers, investigations, journeys, cause-and-effect, complex topics that need context before evidence.

**Strength:** clarity and controlled reveals.
**Risk:** becomes passive or feels like a lecture if there are no changes in rhythm or reader agency.

### B. Martini glass
A guided narrative “stem” opens into an exploratory “bowl.” The story first builds a shared understanding, then lets readers examine data or cases more freely.

**Use for:** data stories, economic/social issues, comparisons, maps, datasets with meaningful dimensions.

**Viraaasat default for data-heavy stories:** strongly consider this structure. Guide the reader through the argument, then give them a well-labeled interactive to explore.

### C. Interactive slideshow / chapter sequence
The story is divided into distinct scenes. Scroll advances the scenes; each scene may include a small interaction or visual state.

**Use for:** biographies, journeys, cultural stories, process explainers, stories with distinct acts.

**Strength:** easy to pace, design, navigate, and test.
**Risk:** can feel like a presentation if every scene uses the same composition.

### D. Drill-down / reader-directed
Readers choose a category, location, person, period, or example and inspect it in depth.

**Use for:** archives, regional comparisons, catalogues, maps, case collections, open-ended subjects.

**Strength:** agency and repeat exploration.
**Risk:** readers can become lost or may never encounter the key context. Provide orientation, labels, back/return paths, and a recommended starting point.

### E. Chronological / timeline
The story follows events, periods, or change over time.

**Use for:** history, policy evolution, biographies, technological change, conflict, environmental change.

Chronology is useful but not mandatory: start at the most meaningful point, then use flashback, parallel timelines, or a thematic structure when that is more revealing.

### F. Question → evidence → implication
A story is organized around one central question, moving through evidence, interpretation, counter-evidence/limitations, and implications.

**Use for:** investigative or explanatory stories, contested claims, “what is really happening?” topics.

Avoid turning the story into a predetermined verdict. Make uncertainty, disagreement, and the evidence limits visible.

---

## 2. A flexible story arc

This is a planning scaffold—not a fixed template every story must obey.

1. **Cold open / hook** — image, scene, question, contradiction, or surprising fact.
2. **Orientation** — tell the reader what the story is about and why it matters.
3. **Context** — establish the background needed to understand the stakes.
4. **First reveal** — complicate the initial impression.
5. **Evidence / mechanism** — show how the situation works; use visuals to explain.
6. **Human or lived dimension** — bring the abstract issue into the scale of people, places, or consequences.
7. **Counterpoint / nuance** — reveal limitations, tensions, competing explanations, or trade-offs.
8. **Synthesis** — connect the pieces; articulate what the reader can now see differently.
9. **Open-ended closing** — a resonant image, question, or thought, without manufactured moralizing.
10. **Sources and further exploration** — make evidence inspectable and invite deeper reading.

Stories may skip, reorder, merge, repeat, or expand these beats.

---

## 3. Narrative tension and curiosity

Curiosity is created by a gap between what the reader knows and what they want to understand—not by withholding basic context unfairly.

Useful devices:
- **Question:** What is happening here?
- **Contradiction:** The familiar explanation does not fully fit.
- **Scale shift:** Move from individual → system, local → national, visible → hidden.
- **Time shift:** Show a present condition, then trace how it emerged.
- **Reveal:** A new piece of evidence changes the reader's interpretation.
- **Consequence:** Explain what this means for real lives.
- **Choice:** Let the reader compare or explore an important dimension.
- **Return:** Revisit the opening image or question with new meaning.

Do not create artificial cliffhangers between every chapter. Resolve the question when the evidence supports resolution.

---

## 4. Scene design: a reusable planning contract

For each scene, document:

| Field | Planning question |
|---|---|
| Scene purpose | What should this scene accomplish? |
| Reader takeaway | What should the reader understand or feel? |
| Evidence | Which claim, source, or data supports it? |
| Narrative transition | Why does this scene follow the previous one? |
| Visual | What image, map, chart, animation, or media best serves it? |
| Interaction | What action is meaningful, if any? |
| Scroll mechanism | Inline, sticky, step-trigger, scrub, pin, or no motion? |
| Mobile treatment | How does this work in a narrow/short viewport? |
| Static state | Can the scene be understood as a still? |
| Accessibility | Keyboard, reduced motion, labels, text equivalent |
| Production cost | Is the value worth the effort? |

**Scene rule:** every visual state should add evidence, context, understanding, or emotional meaning—not just intensify the spectacle.

---

## 5. Pattern library

### Pattern 1 — Sticky visual + scrolling text
A visual remains in place while text steps scroll beside it.

**Best for:** one map, photo, diagram, chart, or object with multiple observations.
**Avoid:** sticky visuals that remain unchanged for many paragraphs without a narrative reason.
**Mobile:** stack the visual and each step, or make the visual compact and sticky only where it truly works.

### Pattern 2 — Chapter cut
A full-bleed image/video or composition marks a change of time, place, subject, or emotional register.

**Best for:** act breaks, geographic transitions, historical eras, tonal shifts.
**Use sparingly:** full-screen scenes have impact when they are not constant.

### Pattern 3 — Progressive/staged reveal
Layers, labels, annotations, or chart series appear as the reader reaches each step.

**Best for:** explaining a mechanism, building a map, showing a system, comparing before/after.
**Fallback:** render a complete, labeled state for reduced motion and non-scroll interaction.

### Pattern 4 — Scrubbed sequence
Scroll position maps continuously to a visual progression (camera, image sequence, drawing, time).

**Best for:** transformations, continuous change, spatial or temporal movement.
**Cost:** high media/performance burden; avoid unless intermediate states matter.
**Fallback:** 3–5 key still frames or a user-controlled playback/stepper.

### Pattern 5 — Scroll-triggered chart
A chart changes as the story introduces data—highlighting, annotating, adding series, or changing focus.

**Best for:** explaining trends, comparison, composition, distribution, geography.
**Rule:** don't hide critical values in transient states. Labels, units, context, and caveats stay available.

### Pattern 6 — Before / after or comparison
A slider, split view, or toggle reveals contrast.

**Best for:** urban change, landscape, policy changes, historical imagery, scale comparisons.
**Rule:** make both states accessible without precision dragging; provide toggle buttons or side-by-side alternative.

### Pattern 7 — Timeline with narrative synchronization
A timeline shows dates/periods and the active narrative scene. Readers can jump to a period.

**Best for:** history, biographies, long-term change, event sequences.
**Rule:** timeline navigation should not trap readers in a fixed order; allow direct access where useful.

### Pattern 8 — Map journey
The map changes location, zoom, layers, routes, or highlighted regions as the story progresses.

**Best for:** migration, infrastructure, geography, trade, conflict, ecological change, regional stories.
**Rule:** preserve geographic orientation and avoid dramatic camera movement that disorients. Provide a textual place list or equivalent.

### Pattern 9 — Horizontal rail
A horizontal sequence of cards, images, stages, or events.

**Best for:** collections, short sequences, artifacts, side-by-side examples.
**Mobile:** horizontal interaction must be obvious and accessible; don't make it the only route to essential content.

### Pattern 10 — Quiet interlude
A pause: short text, portrait, ambient still, quotation, or a small detail.

**Best for:** human dimension, reflective transitions, emotional pacing.
**Rule:** quiet moments are editorial choices, not decorative filler.

### Pattern 11 — Guided narrative → open exploration
The story establishes context and then offers a map, chart, archive, or dataset with controls.

**Best for:** complicated datasets or multi-dimensional subjects.
This is Viraaasat's recommended pattern when reader exploration could be overwhelming without context.

### Pattern 12 — Return to opening
The closing returns to an opening image, phrase, place, or question—but its meaning has changed.

**Best for:** emotional or reflective endings.
**Rule:** the return should be earned by the story, not forced into every piece.

---

## 6. Interaction types: choose by reader purpose

Use interaction only when it answers a reader question or provides meaningful control.

- **Reveal:** What is hidden beneath/behind this?
- **Compare:** What changes between these states?
- **Filter:** What happens if I focus on this category?
- **Locate:** Where is this happening?
- **Explore:** What does this look like for my chosen region/time/group?
- **Scrub:** How does the change progress continuously?
- **Select:** Which case or pathway interests me?
- **Annotate:** What am I looking at and why is it important?

Avoid novelty controls that have no clear reader benefit. Prefer simple controls, visible labels, keyboard support, and predictable behavior.

---

## 7. Pacing and rhythm

A strong story alternates rather than repeating a single mode.

A possible rhythm:
- **Impact** — striking opening.
- **Orientation** — calm, readable text.
- **Motion** — visual change.
- **Evidence** — chart, map, image, or document.
- **Pause** — breathing room.
- **Complexity** — reader exploration.
- **Impact** — major reveal.
- **Quiet** — closing synthesis.

Vary scene length and visual intensity. Not every chapter needs a full viewport, a pinned graphic, or an animation. Long text can be appropriate when the prose carries the story.

---

## 8. Reader orientation

Immersive stories should keep readers aware of where they are.

Recommended aids for long stories:
- Subtle chapter/section label
- Reading progress indicator
- Chapter navigation or contents for long experiences
- Clear section headings
- A visible cue that scrolling is advancing the story when the graphic is pinned
- Direct jump to key sections
- A way to revisit previous scenes
- Sources accessible from the narrative and/or end section

Avoid scroll-jacking, snap-only navigation, long trapped pinned scenes, or custom wheel controls that break normal scrolling.

---

## 9. Mobile and reduced-motion alternatives

Mobile is a re-edit of the story, not simply a smaller desktop.

For each scene, decide whether it becomes:
- stacked image + text
- a compact stepper
- static chart with annotations
- simplified map with controls
- still frames instead of scrubbed media
- inline comparison instead of sticky overlay

Reduced-motion mode should remove or simplify nonessential motion while preserving the full story and all evidence. Scenes should remain understandable as static frames. Avoid dependence on a fleeting transition to convey a fact.

---

## 10. A narrative format selector

Use this quick decision tree during story planning:

- **Is the order important to understanding?** → Guided linear or chapter sequence.
- **Is chronology central?** → Timeline, possibly with narrative jumps.
- **Is spatial context central?** → Map journey or spatial scene.
- **Does one visual need to be examined across several points?** → Sticky figure + steps.
- **Does continuous change matter?** → Scrubbed sequence, if performance budget allows.
- **Does the audience need to compare states?** → Split view, slider, or toggle.
- **Is the topic multidimensional and data-heavy?** → Guided narrative followed by exploration (martini glass).
- **Is reader choice essential?** → Drill-down, filter, branching—but include orientation and context.
- **Does a human experience carry the story?** → Documentary sequence, portrait, intimate detail, quiet interlude.

---

## 11. Viraaasat story-design principles

1. **One central question per story.** It can be complex, but the reader should know what they're investigating.
2. **Narrative before effects.** Choose visual techniques after the outline.
3. **Every scene earns its place.** Remove any scene that only repeats.
4. **Scroll is pacing.** Don't take away native scroll control.
5. **Interactions have purpose.** The reader should know what a control does.
6. **Evidence remains inspectable.** Sources, definitions, units, and limitations are nearby.
7. **Static scenes are valid.** Every scene must work without motion.
8. **Mobile is authored.** Don't shrink or simply disable a desktop layout.
9. **Use intensity selectively.** A full-bleed scene is a punctuation mark.
10. **End with resonance, not a forced moral.** Trust readers to think.

---

## 12. Suggested weekly story planning workflow

### Step 1 — Story brief
Write the question, intended reader takeaway, why now, scope, and what the story will not attempt.

### Step 2 — Narrative outline
Write the story in plain text, without any visual or animation ideas. Establish the argument, chronology, evidence, counterpoints, and conclusion.

### Step 3 — Scene map
Break the outline into scenes. Assign purpose, reader takeaway, evidence, and transition.

### Step 4 — Visual mapping
Choose each scene's best visual form. Identify where static imagery is enough and where a map/chart/animation/interactivity is justified.

### Step 5 — Interaction and motion
Select only interactions that improve comprehension or agency. Define mobile and reduced-motion alternatives.

### Step 6 — Production estimate
Estimate assets, data, implementation effort, performance risks, and review needs. Reduce scope if the weekly deadline is at risk.

### Step 7 — Build and review
Build, preview, fact-check, test keyboard/mobile/reduced motion, check evidence and sources, then publish.

---

## 13. Sources and references

- Chrome Developers, **Scrollytelling / scroll-driven animations** — implementation guidance, progressive enhancement, feature detection, reduced motion, performant properties. https://developer.chrome.com/docs/modern-web-guidance/guides/ui-behaviors/scrollytelling
- Segel & Heer, **Narrative Visualization: Telling Stories with Data** (2010) — foundational narrative structures and genres. https://vis.stanford.edu/papers/narrative/
- **Story Patterns and Scene Contracts** (OpenAI Plugins reference) — scene-by-scene planning, sticky, overlay, stacked mobile fallback, choose scroll vs stepper vs static. https://github.com/openai/plugins/blob/main/plugins/build-web-data-visualization/skills/scrollytelling-and-parallax-data-visualization/references/story-patterns-and-scene-contracts.md
- Shorthand, **An Introduction to Scrollytelling** — pattern overview and editorial guidance. https://shorthand.com/the-craft/an-introduction-to-scrollytelling/index.html
- Shorthand, **Scrollytelling Examples** — examples including archival map stories and landscape narratives. https://shorthand.com/the-craft/scrollytelling-examples/index.html
- **Narrative Design Patterns for Data-Driven Storytelling** — categorized narrative patterns and design space. https://datavis2020.github.io/pdfs/Narrative_Design_Patterns__for_Data_Driven_Storytelling.pdf
- Microsoft Research, **Storytelling Techniques** — navigation, narrative techniques, controlled exploration, reader orientation. https://www.microsoft.com/en-us/research/wp-content/uploads/2016/04/MSR-TR-2016-14-Storytelling-Techniques.pdf

---

## Research conclusion

Viraaasat should not adopt a universal “Snow Fall template.” It should develop a **story-specific narrative language** built from a consistent editorial foundation.

The story determines the structure. The structure determines the scenes. The scenes determine the visuals and interactions. Motion connects those scenes—it never replaces the story.

**Guiding principle: Every story should feel like it could only have been told in that form.**
