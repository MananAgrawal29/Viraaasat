# Research 07 — Accessibility, Performance & Inclusive Experience Engineering
## Viraaasat

**Research mission:** Make Viraaasat's cinematic, scroll-driven storytelling usable, fast, robust, and inclusive on real-world devices, connections, input methods, and assistive technologies.

**Research stance:** Accessibility and performance are not polish layers added after the visual experience. They are part of the experience's design constraints from the first scene.

---

## 1. Executive direction

Viraaasat's motion-heavy ambition is compatible with an inclusive and performant site—but only if each effect is justified, progressively enhanced, and given an alternative.

**Core rule:** The story must remain understandable and navigable when animation, JavaScript, WebGL, large media, hover, or a fast connection are unavailable.

Use a layered experience:

1. **Content layer:** semantic HTML, headings, story text, sources, and meaningful image alternatives.
2. **Interaction layer:** accessible controls and optional enhancements that improve exploration.
3. **Motion layer:** cinematic transitions, parallax, pinning, and choreography—never the only way to understand content.
4. **Media layer:** image, video, map, and visualization assets loaded according to priority and user/device context.

The goal isn't to remove visual ambition. It is to spend performance and motion budgets where they produce storytelling value.

---

## 2. Core Web Vitals: measurable experience targets

Google's current Core Web Vitals measure loading, responsiveness, and visual stability. The recommended “good” thresholds are evaluated at the 75th percentile of visits, separately across mobile and desktop where applicable.

| Metric | What it tells us | Good target |
|---|---|---|
| **LCP — Largest Contentful Paint** | How quickly the main visible content appears | **≤ 2.5 s** |
| **INP — Interaction to Next Paint** | How responsive interactions feel across a visit | **≤ 200 ms** |
| **CLS — Cumulative Layout Shift** | Whether content unexpectedly moves | **≤ 0.1** |

These targets should be treated as field outcomes, not promises from a local developer machine. Test real users and representative device/network conditions.

### Viraaasat interpretation
- **LCP:** A user should see the opening story image/title quickly. Do not delay the page's main content behind a cinematic loader.
- **INP:** Interactive maps, timeline controls, filters, menus, and chapter navigation should respond promptly. Avoid long main-thread tasks and huge synchronous rendering updates.
- **CLS:** Reserve space for media, embeds, captions, visualizations, and fonts. The editorial layout should not jump as assets arrive.

**Practical priority:** Make the first viewport fast and stable, then load deeper scenes as the reader approaches them.

---

## 3. Performance budgets (proposed project targets)

These are Viraaasat working budgets—not industry standards or immutable limits. Adjust based on measurement and story needs.

### Initial page load
- Keep initial JavaScript as small as practical; avoid importing every story interaction into the homepage bundle.
- Prioritize the actual above-the-fold headline, standfirst, and hero media.
- Avoid loading a story's full visualization/3D engine before it is needed.
- Aim to keep initial critical requests few and avoid dependency waterfalls.
- Do not block the first meaningful content with video, WebGL, analytics, or decorative effects.

### Asset budgets
Establish per-asset and per-story budgets in review:
- **Hero still:** use responsive variants; compress and compare quality. Large full-bleed photography is not an excuse for multi-megabyte delivery on mobile.
- **Below-fold images:** lazy-load, use responsive `srcset`/`sizes`, and reserve dimensions/aspect ratio.
- **Video:** avoid autoplaying large background videos by default on mobile/low-data conditions; provide a still poster and explicit play control where practical.
- **Fonts:** load only required families/weights/styles; avoid many separate font requests. Keep text readable with system fallbacks.
- **3D:** use only when spatial understanding materially improves the story. Defer loading, keep a 2D/static fallback, and cap quality according to device capability.

Set exact budgets only after a first prototype and profiling. A budget should trigger a conversation—not cause developers to hide essential content.

---

## 4. First viewport and loading strategy

### 4.1 Above-the-fold priorities
The first screen is an editorial promise. Prioritize:
1. Text that tells the user where they are.
2. The main visual that carries the opening scene.
3. Navigation and progress cues that are usable immediately.
4. Decorative effects only after the essentials.

### 4.2 Prioritize the LCP asset
- Make the LCP image discoverable early in the document.
- Avoid loading it only through a late JavaScript effect.
- Use appropriate preload/priority mechanisms only for the actual critical asset—do not preload every image.
- Use modern image formats where browser support and pipeline make sense; provide robust fallbacks.
- Choose responsive image sizes instead of delivering desktop-sized images to every screen.

### 4.3 Avoid “cinematic loading screens”
A loader that blocks reading until an animation or asset finishes undermines the editorial experience. Prefer:
- Text rendered immediately.
- A stable placeholder or poster with reserved dimensions.
- Progressive enhancement of visual layers.
- Loading indicators only for controls that genuinely need asynchronous data.

### 4.4 Loading states
For each important component, define:
- **Loading:** clear, stable placeholder; avoid indefinite spinner-only states.
- **Success:** the content is available and its controls work.
- **Empty:** explain why no data or content is present.
- **Error:** readable message and retry/alternate route.
- **Fallback:** static content if the enhancement fails.

---

## 5. Media and asset optimization

### Images
- Use responsive image sources and browser-selected sizes.
- Define width/height or aspect ratio to prevent layout shift.
- Lazy-load images below the fold; do not lazy-load the main LCP image by default.
- Provide descriptive alt text when an image communicates information; use empty alt for purely decorative imagery.
- Avoid loading full-resolution assets when a small viewport needs only a smaller source.
- Test compression at realistic mobile sizes and visual quality.

### Video
- Prefer poster images before video playback.
- Give the user control over playback.
- Avoid sound autoplay.
- If video is informational, provide captions and a text equivalent or summary.
- Consider reduced-motion, data-saving, and mobile bandwidth when choosing whether to autoplay motion footage.
- Avoid videos as the sole delivery of essential facts.

### Audio
- Controls must be accessible by keyboard and screen reader.
- Do not autoplay audio.
- Provide transcripts for spoken content.

### Fonts
- Use the locked Viraaasat type system: Cormorant Garamond (display), Manrope (body/UI), IBM Plex Mono (metadata).
- Load only needed styles/weights and use fallbacks.
- Avoid font swapping that causes large layout shifts; test font failure and slow loading.
- Do not let custom fonts prevent content from appearing.

### Maps and charts
- Keep a concise, readable textual summary of the main finding.
- Charts must have labels, units, and context; don't rely on color alone.
- Provide accessible data tables or text descriptions for complex visualizations when practical.
- Maps must have a non-map way to explore the same important information (e.g., searchable/selectable location list, key facts, tabular data).
- Don't require dragging, hover, or a precise pointer to use core controls.

---

## 6. Scroll animation and motion accessibility

Viraaasat is intentionally scroll-story driven. Motion should be choreographed without taking control away from the reader.

### 6.1 Motion policy
- Motion explains sequence, scale, transformation, emphasis, or atmosphere.
- No essential information should be revealed only through motion.
- Avoid continuous animation that distracts from reading.
- Avoid scroll hijacking and forced scroll speed.
- Avoid long pinned scenes that make mobile users feel trapped.
- Provide clear exits from interactive/pinned experiences.
- Avoid flashing and rapidly repeating movement.

### 6.2 Reduced motion
Honor `prefers-reduced-motion: reduce` across CSS and JavaScript animation systems.

When reduced motion is requested:
- Remove or substantially reduce parallax and large translations.
- Replace animated scene transitions with immediate state changes or restrained fades.
- Disable auto-playing background motion.
- Remove smooth scrolling and scroll-linked effects that are not necessary.
- Avoid pinned scenes if they create disorientation; present the same content in normal document flow.
- Preserve all story content and controls.

**Important:** Don't merely shorten animation durations. For strong motion effects, remove the movement itself or provide a static composition.

### 6.3 Provide an explicit motion control
In addition to respecting the OS preference, consider a persistent, clearly labelled “Reduce motion”/“Motion: On/Off” setting for people who don't use OS-level controls. It should:
- Be easy to find.
- Affect scroll effects, parallax, autoplay, and decorative animation.
- Be remembered only if the product intentionally supports preferences and explains them.
- Never hide story content when switched off.

### 6.4 Scroll-triggered animation implementation
- Use transform and opacity for lightweight animation when appropriate.
- Avoid animation of layout-affecting properties such as height, top, left, margin, and complex layout changes.
- Don't add `will-change` to everything; use sparingly and only after profiling.
- Avoid dozens of simultaneous animated elements.
- Ensure offscreen animation can be paused or reduced.
- If a scroll scene is pinned, keep a clear progression and provide a non-pinned/reduced-motion version.
- Test scrolling with keyboard, touch, screen reader, and browser zoom—not only mouse wheel.

---

## 7. Accessibility baseline — WCAG 2.2 AA as the target

Use **WCAG 2.2 Level AA** as the team's practical accessibility target, subject to story-specific review. This is not a legal compliance claim.

### Semantic structure
- Use one meaningful page title and a logical heading hierarchy.
- Use landmarks (`header`, `nav`, `main`, `footer`, sections) to help navigation.
- Use native buttons for actions and links for navigation.
- Don't create fake interactive elements from styled `div`s.
- Keep story content in the DOM and in reading order, not only on a canvas or in an image.

### Keyboard
- All functionality should work with keyboard alone.
- Visible focus indicator must remain obvious against the Viraaasat palette.
- Avoid keyboard traps.
- Skip link: provide a route to bypass repeated navigation and jump to main content.
- Use logical tab order; avoid positive `tabindex` values.
- Modal/panel behavior must manage focus and offer an obvious close action.

### Focus and sticky/pinned scenes
- Sticky navigation, overlays, and pinned scene layers must not obscure focused controls.
- When chapters change, do not unexpectedly steal focus.
- Ensure focus can move out of every component.
- Keep chapter navigation and story controls available even when the viewport is in a complex scene.

### Color and contrast
- Don't use color as the only way to communicate status, selection, or chart values.
- Validate text and interface contrast against WCAG 2.2.
- Test the actual brand palette pairings, not just palette swatches.
- Terracotta, forest, brass, oxide, ivory, and charcoal can behave differently at different font sizes and weights; don't assume every combination is accessible.

### Touch and pointer
- Provide controls with adequate hit areas and spacing.
- Don't require hover to discover important content.
- Don't rely exclusively on dragging, multi-touch, or path gestures unless the gesture is essential; provide alternatives.
- Consider one-handed reach on mobile without assuming a particular hand or device grip.

### Text resizing and reflow
- Test zoom at 200% and responsive reflow at narrow viewport widths.
- Ensure long headlines, captions, tables, data labels, and metadata don't overlap or clip.
- Avoid fixed-height text containers.
- Allow user text spacing adjustments without breaking layout.

### Forms and controls
- Label all inputs explicitly.
- Communicate validation errors in text, not only color.
- Preserve user input when errors occur.
- Controls must expose their name, role, and state to assistive technology.
- For toggles, expose on/off state and clear labels.

---

## 8. Accessible interaction patterns for Viraaasat's storytelling

### Timeline
- Use buttons for year/date selection.
- Keyboard support: logical tabbing; arrow keys may be supported when appropriate, but don't create unusual shortcuts without clear instructions.
- The selected date should be exposed and visible.
- Include a text chronology/list alternative.
- Avoid auto-advancing timelines unless user-controlled and pausable.

### Interactive map
- Map gestures are optional, not mandatory.
- Provide zoom buttons, reset, and location selection controls.
- Offer a list or table of featured locations.
- Communicate selected location in text and expose selection state.
- Keyboard access must be tested for all essential controls.

### Data charts
- Explain the key insight before or beside the chart.
- Provide labels and exact values where appropriate.
- Use accessible names and descriptions.
- Include an underlying data table when complexity warrants.
- Don't encode categories with color alone.

### Chapter navigation
- A chapter list or contents panel should be available without waiting for animation.
- Clearly identify the active chapter.
- Avoid auto-changing active state in ways that confuse keyboard focus or screen readers.

### Horizontal rails
- Must support keyboard focus and scroll.
- Include visible next/previous controls where appropriate.
- Do not make a horizontal rail the only way to access story material.
- Provide a linear/mobile alternative when the interaction is awkward.

### Hover reveals
- Every hover interaction must have an equivalent focus, tap, or explicit control behavior.
- Avoid important labels that disappear when the pointer leaves.

---

## 9. Progressive enhancement architecture

Build the experience as a robust editorial page first, then enhance it.

### Suggested capability layers
**Layer 0 — Content**
- Story title, chapters, prose, image captions, sources.
- Readable with CSS and JavaScript disabled where reasonable.

**Layer 1 — Responsive layout**
- Grid, typography, image sizing, mobile adaptation.

**Layer 2 — Essential interactions**
- Menus, tabs, timeline selectors, map controls, chart toggles.
- Native semantic controls with keyboard support.

**Layer 3 — Cinematic motion**
- Scroll reveals, parallax, pinned scenes, transitions.
- Disabled or reduced for user preference and device constraints.

**Layer 4 — Expensive immersive features**
- WebGL/3D, heavy maps, large video, advanced data visualization.
- Loaded on demand, with clear fallback.

### Enhancement failure should not fail the story
If a map, video, animation library, or WebGL feature fails:
- Show a useful static illustration or image if available.
- Provide the story's key information in text.
- Keep chapter navigation and sources working.
- Show a retry option only where retry is useful.

---

## 10. Mobile-first experience, not desktop shrinkage

Mobile users are not merely viewing a smaller desktop. Re-edit the story for their context.

- Establish the mobile narrative and interaction first.
- Simplify parallax depth and pinning.
- Replace long horizontal interactions with vertical cards, a selectable list, or a compact control.
- Keep controls reachable and avoid tiny touch targets.
- Avoid large autoplay media and unnecessary animation.
- Ensure image crops preserve the subject, but don't force the same crop across every breakpoint.
- Test portrait, landscape, short screens, and browser UI changes.
- Respect data-saving and reduced-motion signals when available.
- Do not assume a phone has strong GPU, ample memory, or stable network.

---

## 11. Low-end devices and network resilience

Test deliberately with constraints—not only with a fast laptop and home Wi-Fi.

### Network conditions
At minimum test:
- Fast connection.
- Typical mobile network.
- Slow network / high latency.
- Intermittent connection.
- Cached repeat visit.
- Failed asset request.

### Device conditions
At minimum test:
- Current desktop.
- Mid-range Android phone.
- Older/low-end phone if available.
- iPhone/Safari or equivalent iOS browser.
- Small viewport and landscape.
- Reduced-motion setting.
- Keyboard-only.
- Screen reader spot-check.

### Degradation policy
- Keep content available if media fails.
- Don't block navigation on third-party embeds.
- Use lighter alternatives for expensive effects.
- Avoid infinite retries.
- Keep the interface responsive while assets load.
- Use loading skeletons sparingly and only when they prevent confusion.

---

## 12. Animation and rendering performance engineering

### Main-thread discipline
- Avoid large JavaScript tasks during scrolling and interaction.
- Keep animation callbacks light.
- Avoid repeated layout measurement and DOM writes in loops.
- Batch work and use browser-native scroll/animation primitives when appropriate.
- Avoid expensive filters and giant composited layers unless justified.

### Rendering strategy
- Prefer transforms and opacity for animation.
- Avoid animating properties that trigger layout or paint repeatedly.
- Profile before optimizing; don't guess.
- Reduce the number of simultaneous animated elements.
- Pause or simplify effects when scenes are offscreen.
- Consider lower-resolution media or effects for constrained devices.

### Scroll libraries
- Use a library only when its benefits outweigh its runtime and complexity.
- Avoid two competing systems controlling the same scroll/animation state.
- Native scroll should remain the default.
- Ensure motion systems can be disabled consistently through a shared preference/policy.

---

## 13. Cross-browser and QA strategy

### Browser coverage
Test the actual browsers your audience uses, including:
- Chromium-based browsers.
- Firefox.
- Safari/WebKit (desktop and iOS where possible).

Do not treat Chromium success as universal browser success.

### Test matrix (minimum practical)
| Test | Pass condition |
|---|---|
| Keyboard-only | All story controls and navigation reachable/usable |
| Focus | Focus is visible and not hidden behind sticky layers |
| Reduced motion | No disruptive scroll-linked motion; story remains complete |
| Screen reader | Headings, landmarks, control labels, selected states make sense |
| 200% zoom | No clipped or overlapping essential content |
| Mobile width | No horizontal overflow in the reading experience |
| Slow network | First content appears early; assets load progressively |
| Failed media | Story remains understandable |
| Interaction | Map, timeline, menu, and controls respond without lag |
| Visual stability | Media/font loading does not cause disruptive shifts |
| Long story | Navigation and reading remain comfortable |
| Contrast | Brand combinations meet appropriate contrast requirements |

### Tooling
- Lighthouse and browser DevTools for repeatable lab checks and diagnostics.
- PageSpeed Insights / Search Console for real-world Core Web Vitals when sufficient traffic exists.
- Automated accessibility tests as a first-pass guard—not as proof of accessibility.
- Manual keyboard and screen-reader checks remain necessary.
- Test a component in isolation and in the real story page: context, sticky elements, and scroll behavior can introduce issues.

---

## 14. Viraaasat accessibility & performance design checklist

### Before implementation
- [ ] Define what this interaction communicates.
- [ ] Decide whether the story works without motion.
- [ ] Identify the static/text alternative.
- [ ] Decide when heavy assets should load.
- [ ] Define mobile behavior separately.
- [ ] Establish the relevant performance budget.

### During implementation
- [ ] Semantic HTML and native controls.
- [ ] Keyboard and visible focus.
- [ ] No hover-only information.
- [ ] Reduced-motion behavior.
- [ ] Reserved media dimensions.
- [ ] Responsive asset selection.
- [ ] Lazy-load non-critical media.
- [ ] Avoid expensive effects in the initial viewport.
- [ ] Loading/error/empty/fallback states.

### Before release
- [ ] Core Web Vitals targets checked.
- [ ] Mobile and low-end behavior reviewed.
- [ ] Reduced-motion experience reviewed.
- [ ] Keyboard-only journey completed.
- [ ] Zoom/reflow checked.
- [ ] Contrast checked.
- [ ] Screen-reader spot-check.
- [ ] Media failure tested.
- [ ] Cross-browser smoke test.
- [ ] Source and methodology links usable.

---

## 15. Viraaasat-specific decisions recommended

1. **The story is never locked behind animation.**
2. **A cinematic loading screen is not the default.** Render the editorial content first.
3. **Every scroll scene has a reduced-motion and mobile design.**
4. **Every map/chart/3D scene has a text or static fallback.**
5. **First viewport assets are carefully prioritized; deep-story assets are deferred.**
6. **Performance budgets are reviewed at story level, not just app level.**
7. **No hover-only interaction.**
8. **Keyboard navigation and visible focus are design requirements.**
9. **The site is tested on realistic mobile/network conditions.**
10. **Accessibility is a creative constraint that improves clarity, not a compromise to the visual identity.**

---

## 16. Suggested implementation reference snippets

### Reduced motion (CSS)
```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
This is a starting point, not a complete solution. Scroll libraries, video autoplay, WebGL motion, pinned scenes, and JavaScript timelines need explicit handling too. Consider disabling movement rather than simply shortening it.

### Reserve media space
```css
.story-media {
  aspect-ratio: 16 / 9;
}
```

### A simple image loading principle
```html
<!-- Critical opening image: prioritize it; don't lazy-load by default -->
<img src="hero.webp" alt="..." width="1600" height="900" />

<!-- Deep-story image: lazy load -->
<img src="chapter-image.webp" alt="..." loading="lazy" width="1200" height="800" />
```
Use responsive source sets and appropriate dimensions in the actual implementation.

---

## 17. Research sources

### Performance
- Google Search Central — Understanding Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- web.dev — Core Web Vitals threshold methodology: https://web.dev/articles/defining-core-web-vitals-thresholds
- web.dev — Performance guides: https://web.dev/performance
- web.dev — Most effective ways to improve Core Web Vitals: https://web.dev/articles/top-cwv
- HTTP Archive — Web Almanac 2025: https://httparchive.org/en/2025/performance

### Accessibility
- W3C — WCAG 2.2: https://www.w3.org/TR/WCAG22/
- W3C WAI — Reduced motion technique C39: https://www.w3.org/WAI/WCAG22/Techniques/css/C39
- W3C WAI — Mobile accessibility mapping: https://www.w3.org/TR/mobile-accessibility-mapping/
- W3C — WCAG 2.2 mobile guidance: https://www.w3.org/TR/wcag2mobile-22/

---

## Final principle

**Viraaasat should feel cinematic without demanding a powerful device, visually rich without making readers wait, and immersive without taking control away from them.**

The best version of the experience is the one where everyone can enter the story.
