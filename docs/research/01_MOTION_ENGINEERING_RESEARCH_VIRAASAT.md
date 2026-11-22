# Viraaasat Research 02 — Motion Engineering & Scroll Choreography

**Status:** Research / recommendations (not yet a locked implementation spec)  
**Purpose:** Establish a motion toolkit, performance/accessibility constraints, and storytelling principles for Viraaasat's cinematic, scroll-heavy experiences.

## 1. Motion philosophy

Motion should function like documentary editing: control pacing, reveal information, create transitions, and allow moments of stillness. Scrolling should sometimes be the narrative timeline, not merely a trigger for entrance animations.

Principles:
- Motion serves meaning: reveal, explain, establish atmosphere, or connect ideas.
- Pacing is intentional: slow, pause, accelerate, reveal, breathe.
- Transitions connect ideas and chapters, rather than being ornamental.
- Keep the reader in control; do not trap, hijack, or fight scrolling.
- Performance is a design requirement.
- Respect reduced-motion settings from the beginning.

## 2. Motion toolkit

### GSAP + ScrollTrigger — recommended primary choreography tool
Use for complex narrative animation: pinned scenes, scroll-scrubbed transitions, coordinated timelines, horizontal sequences, layered parallax, masks, chapter transitions, and animation linked to scroll progress.\nOfficial resources:
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://gsap.com/resources/
- https://gsap.com/

ScrollTrigger supports pinning, scrubbing, snapping, trigger positions, callbacks, responsive setups, and linked timeline progress. It is appropriate for complex sequences; avoid using it for every tiny UI animation.

### Lenis — optional, test before adopting
Use only if smooth-scroll behavior demonstrably improves the experience. It retains native scroll and can integrate with GSAP, WebGL, parallax, and React. It supports reduced motion.
Resources:
- https://github.com/darkroomengineering/lenis
- https://oss.darkroom.engineering/lenis
- React integration: https://github.com/darkroomengineering/lenis/tree/main/packages/react
Recommendation: begin with native scrolling. Evaluate Lenis later, including touch devices and reduced-motion behavior; do not assume smooth scrolling is automatically superior.

### CSS Scroll-driven Animations — lightweight option
Use native CSS for simpler scroll-progress effects such as reading progress, subtle reveals, decorative line growth, and simple progress-linked transformations. Avoid adding JavaScript when CSS can handle the effect cleanly.
Resources:
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations

### Intersection Observer — simple visibility triggers
Use for one-time entrance effects, lazy loading, chapter activation, and simple staggered reveals. Not a substitute for precise scroll-progress choreography.
Resource:
- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## 3. Motion vocabulary

Choose effects based on the subject; do not use every technique on every page.
1. **Mask / clip reveal:** images, headings, or video emerge through a clipping window. Use for hero imagery, chapter intros, major transitions.
2. **Pinned narrative scenes:** visual stays anchored while text/images/data change. Use for complex explanations and cause-effect sequences.
3. **Layered parallax:** subtle depth among background, foreground, captions, and overlays. Use for landscapes, architecture, atmosphere.
4. **Kinetic typography:** scale, position, spacing, clipping, or emphasis changes. Use for opening statements, quotes, and revelations.
5. **Horizontal story rail:** vertical scrolling advances through horizontal scenes. Use for timelines, comparisons, and collections; provide mobile adaptation.
6. **Data reveal:** statistics, diagrams, labels, or chart elements appear progressively. Use for population, economics, inequality, climate, infrastructure.
7. **Image transformation:** archival-to-present, before/after, restoration, or comparison transitions.
8. **Spatial transition:** map/document/illustration transitions into another scene. Use for geography and regional history.
9. **Chapter cut:** a sharp change in visual, color, typography, or composition marks a shift in time, topic, or perspective.
10. **Deliberate pause:** no movement; a sentence, image, or statistic gets space. Especially important for sensitive subjects.

The subject chooses the motion language.


## 4. Performance rules — non-negotiable

Prefer animating `transform` and `opacity`. Properties that trigger layout or paint (such as dimensions, positional layout properties, and some effects) can be more expensive.
- Do not apply `will-change` globally; use sparingly and only when profiling indicates need.
- Avoid dozens of simultaneously animated elements.
- Avoid continuous full-screen blur layers unless their cost is justified and tested.
- Avoid unnecessary scroll listeners and per-frame calculations.
- Lazy-load below-the-fold media; use responsive, optimized image sizes.
- Profile real behavior in browser DevTools, not only by inspecting code.

Resources:
- https://developer.chrome.com/docs/modern-web-guidance/guides/ui-behaviors/motion
- https://web.dev/articles/animations-guide
- https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance

## 5. Accessibility and reduced motion

Respect `prefers-reduced-motion`. Large-scale zooming, panning, parallax, and other motion may cause discomfort or nausea for some people.

When reduced motion is enabled, adapt rather than break the content:
| Full motion | Reduced-motion alternative |
|---|---|
| Parallax | Static layered composition |
| Large zoom transitions | Simple fade or instant transition |
| Scroll-pinned sequence | Normal document flow |
| Kinetic typography | Static readable typography |
| Long animated reveal | Content visible immediately |
| Smooth-scroll enhancement | Native scrolling |

Never hide story content, break navigation, or leave elements invisible when motion is reduced. Consider defaulting to static content and opting into non-essential motion for users with no reduced-motion preference. Do not use blanket `animation-duration: 0.01ms`; implement case-by-case adaptations.

Resources:
- https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion
- https://www.w3.org/WAI/WCAG22/Techniques/css/C39
- https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR40

## 6. Mobile motion strategy

Mobile is a re-edit of the experience, not a smaller desktop version.
- Simplify or remove pinned sequences that cause scroll friction.
- Replace horizontal sections with swipe rails or vertical content where appropriate.
- Reduce layered parallax and large zooms.
- Keep text reveals short and readable.
- Preserve image impact without excessive motion.
- Prioritize touch, battery, and performance.
- Never make users fight the scroll to read.

## 7. Motion by story category

- **History / Heritage:** slow reveals, archival texture, timelines, map transitions, restrained parallax, chapter cuts.
- **Geography / Environment:** maps, terrain layers, spatial transitions, gradual data reveals.
- **Science / Achievement:** diagrams, precise movement, progressive explanations, data visualization.
- **Politics / Conflict / Social Issues:** minimal motion, evidence-first reveals, restrained transitions; no sensationalism.
- **People / Culture:** photographic sequences, text-image rhythm, intimate transitions, ambient storytelling.
- **Economy / Infrastructure:** charts, maps, counters, comparisons, system/flow visualizations.

## 8. Recommended implementation direction

Proposed baseline (not yet locked):
- **GSAP + ScrollTrigger** for complex story choreography.
- **CSS transitions/animations** for simple UI and lightweight reveals.
- **CSS scroll-driven animations** where browser support and fallback behavior are appropriate.
- **Intersection Observer** for simple in-view triggers and lazy loading.
- **Lenis** optional; evaluate after a native-scroll prototype.

Do not stack multiple scroll engines. Avoid adding libraries just because they are fashionable. The final stack should be selected based on actual interaction requirements, browser compatibility, performance, and accessibility.

## 9. Agent instructions distilled

When agents implement motion for Viraaasat:
1. Read `DESIGN_SYSTEM.md`, `AGENTS.md`, and this research document.
2. Explain the purpose of each major motion sequence before implementation.
3. Use the simplest appropriate technique: CSS first for simple effects; GSAP/ScrollTrigger for complex choreography.
4. Keep the user's native scroll control intact; no scroll hijacking.
5. Provide responsive/mobile-specific behavior, not only breakpoints that shrink desktop animation.
6. Respect `prefers-reduced-motion`; all content must remain visible and usable.
7. Prefer `transform` and `opacity`; profile expensive effects.
8. Test scroll behavior, keyboard access, touch, reduced-motion, and performance.
9. Avoid over-animating; deliberate stillness is a valid storytelling choice.
10. Do not add, remove, or update project dependencies without explicit task scope/approval.

## 10. Sources and links

- GSAP ScrollTrigger docs: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- GSAP learning resources: https://gsap.com/resources/
- Lenis GitHub: https://github.com/darkroomengineering/lenis
- Lenis official: https://oss.darkroom.engineering/lenis
- Lenis React integration: https://github.com/darkroomengineering/lenis/tree/main/packages/react
- MDN scroll-driven animations: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations
- MDN scroll-triggered animations: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Animation_triggers/Using_scroll-triggered_animations
- MDN Intersection Observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- Chrome motion guidance: https://developer.chrome.com/docs/modern-web-guidance/guides/ui-behaviors/motion
- web.dev animation performance: https://web.dev/articles/animations-guide
- WAI animation from interactions: https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions
- MDN reduced motion: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion
- WAI technique C39: https://www.w3.org/WAI/WCAG22/Techniques/css/C39
- WAI technique SCR40: https://www.w3.org/WAI/WCAG22/Techniques/client-side-script/SCR40

---
**Research conclusion:** Viraaasat should be cinematic through choreography, not sheer animation volume. GSAP/ScrollTrigger is the proposed primary tool for complex sequences; CSS handles simple motion; Lenis remains optional; native scrolling, performance, mobile adaptation, and reduced-motion support are requirements.
