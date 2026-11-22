# Research 08 — Design Systems, Frontend Architecture & Component Strategy
## Viraaasat

**Mission:** Translate Viraaasat's design, motion, storytelling, visualization, accessibility, and performance research into a scalable frontend architecture—so the site can grow weekly without every story becoming a bespoke codebase.

**Project constraint:** This is an editorial storytelling platform, not a conventional SaaS dashboard. The architecture must enable art direction and one-off storytelling while keeping shared foundations stable.

---

## 1. Executive recommendation

Build a **small, story-first design system** rather than a large component library.

The system should provide:
- Stable visual tokens and shared typography/layout rules.
- Reliable primitives (buttons, links, captions, source notes, controls).
- Editorial components (story header, chapter heading, pull quote, image/caption, reading progress).
- Interaction components (timeline, map selector, chart controls, annotation).
- Motion primitives and a shared reduced-motion policy.
- A story data/content model that supports metadata, sources, chapter structure, and reusable layouts.
- Story-specific modules that can be created when a story genuinely requires a unique experience.

**Do not force every story into the same template.** Reuse foundations and editorial patterns, not the entire narrative choreography.

React's component model supports composition and reusable pieces, while its guidance encourages decomposing UI according to responsibilities and data/state flow. 【React component guidance: https://react.dev/learn/describing-the-ui】【Thinking in React: https://react.dev/learn/thinking-in-react】

---

## 2. What a design system means for Viraaasat

A design system is more than a folder of components or a color palette. For this project, it consists of:

1. **Design tokens** — color, type, spacing, sizing, layout, motion, layering.
2. **Rules** — usage, accessibility, responsive behavior, and editorial conventions.
3. **Components** — tested, reusable building blocks.
4. **Patterns** — combinations of components for common story moments.
5. **Templates** — starting structure for a story, not rigid visual layouts.
6. **Documentation** — how to use and extend each element.
7. **Governance** — how shared decisions change without breaking stories.

The Design Tokens Community Group defines tokens as reusable stylistic values such as color, spacing, and typography, and aims to support interoperability across tools. The DTCG's 2025.10 format is listed as stable, but the specification is not on the W3C Standards Track. It is optional for our project; we can use the concept and a lightweight CSS-variable implementation without adopting the JSON format immediately.  
Source: https://www.w3.org/groups/cg/design-tokens/  
Source: https://www.designtokens.org/faq/

---

## 3. Architecture principles

### 3.1 Shared foundation, individual story identity
Stories can have different visual worlds. A famine story, space program story, folk culture story, and economic story should not look identical. They should still share typography, navigation, sources, accessible controls, and predictable responsive behavior.

### 3.2 Composition over monoliths
Compose pages from smaller pieces. Components should have focused responsibilities and clear inputs. Avoid giant components that handle data, scroll state, animation, layout, and every responsive variation at once.

### 3.3 Use the smallest useful abstraction
Do not create a component for every three-line markup fragment. Abstract when there is:
- repeated use,
- meaningful behavior,
- a consistency requirement,
- or a clear isolated responsibility.

### 3.4 Story-specific creativity remains first-class
A story may have a unique interactive map, custom comparison, or experimental visual. It should live inside its own story folder and consume shared primitives—not force the shared design system to absorb every special case.

### 3.5 Accessible by default
Accessibility requirements are built into component contracts and reviewed at story level. A shared component can help consistency but cannot guarantee a whole story is accessible.

### 3.6 Progressive enhancement
The baseline story is content and navigation. Interactive features and cinematic motion enhance it. Heavy modules load only when needed.

### 3.7 Design tokens, not magic values
Centralize palette, type, spacing, motion timing, layout widths, borders, and z-index. Avoid one-off values scattered throughout CSS.

### 3.8 Data and presentation separation
Story facts, dates, source information, captions, and chart data should be separated from the layout where it improves clarity and maintenance. But do not turn every expressive story into generic JSON-driven rendering.

---

## 4. Recommended frontend architecture

This is a conceptual architecture for the initial implementation; it can be adjusted after the actual stack and content model are selected.

```text
src/
├── app/
│   ├── App.tsx
│   ├── routes.tsx
│   ├── providers/
│   └── shell/
│       ├── SiteHeader/
│       ├── SiteFooter/
│       ├── Navigation/
│       └── ReadingProgress/
│
├── design-system/
│   ├── tokens/
│   │   ├── colors.css
│   │   ├── typography.css
│   │   ├── spacing.css
│   │   ├── layout.css
│   │   ├── motion.css
│   │   └── z-index.css
│   ├── primitives/
│   │   ├── Button/
│   │   ├── Link/
│   │   ├── Icon/
│   │   ├── Container/
│   │   ├── Grid/
│   │   ├── VisuallyHidden/
│   │   └── FocusRing/
│   ├── editorial/
│   │   ├── StoryHeader/
│   │   ├── ChapterHeading/
│   │   ├── ReadingColumn/
│   │   ├── PullQuote/
│   │   ├── ImageFrame/
│   │   ├── ImageCaption/
│   │   ├── SourceNote/
│   │   ├── Footnote/
│   │   └── AuthorCredit/
│   ├── interaction/
│   │   ├── Timeline/
│   │   ├── Tabs/
│   │   ├── Accordion/
│   │   ├── MapControls/
│   │   ├── ChartLegend/
│   │   └── MotionToggle/
│   └── motion/
│       ├── MotionProvider/
│       ├── Reveal/
│       ├── Parallax/
│       ├── ChapterTransition/
│       └── ScrollScene/
│
├── stories/
│   ├── registry.ts
│   ├── shared/
│   │   ├── StoryLayout/
│   │   ├── ChapterNav/
│   │   └── SourceList/
│   └── [story-slug]/
│       ├── index.ts
│       ├── story.ts
│       ├── assets/
│       ├── components/
│       ├── scenes/
│       ├── data/
│       └── styles.css
│
├── content/
│   ├── stories/
│   └── taxonomy/
│
├── utilities/
│   ├── formatters/
│   ├── media/
│   ├── accessibility/
│   └── performance/
│
└── styles/
    ├── reset.css
    ├── globals.css
    └── utilities.css
```

**Important:** This is a target structure, not a requirement to create every folder on day one. Start with only the parts that have real usage.

---

## 5. Component tiers and boundaries

### Tier 1 — Primitives
Small, foundational pieces:
- Button
- Link
- Icon
- Container
- Grid
- Divider
- VisuallyHidden
- FocusRing

**Responsibilities:** semantics, visual states, focus, basic responsive behavior.

**Should not:** contain story logic, load data, manage chapter progression, or know about specific editorial topics.

### Tier 2 — Editorial components
Shared pieces used by story pages:
- StoryHeader
- StoryKicker
- StoryTitle
- StoryDeck
- StoryMeta
- ChapterHeading
- ReadingColumn
- PullQuote
- ImageFrame
- ImageCaption
- ImageCredit
- SourceNote
- Footnote
- SourceList
- ChapterNav
- ReadingProgress

These should be content-aware and preserve editorial hierarchy. They must not become rigidly uniform across every story.

### Tier 3 — Interaction components
Reusable behaviors with accessible contracts:
- Timeline selector
- Tabs
- Accordion
- Chart legend/selector
- Map controls and location list
- Comparison control
- Tooltip/annotation (where appropriate)
- Motion preference control

### Tier 4 — Motion primitives
Small, composable animation behaviors:
- Reveal
- ImageWipe
- ChapterCut
- TextReveal
- Parallax
- Pin/ScrollScene

Motion primitives must be governed by a shared motion policy, including reduced-motion behavior. Do not make each story reinvent how reduced motion is handled.

### Tier 5 — Story modules
Unique to a story:
- India population comparison
- A custom geographic exploration
- Historical map transformation
- Unique timeline
- Special data simulation

Keep these inside the story directory. Extract them to the shared system only after repeat usage or a clear cross-story requirement emerges.

---

## 6. Naming and API conventions

### Names
Use names that describe meaning or behavior, not implementation detail.

Prefer:
- `StoryHeader`
- `ChapterHeading`
- `SourceNote`
- `TimelineSelector`
- `MapLocationList`
- `ReducedMotionProvider`

Avoid:
- `BigText2`
- `GreenBox`
- `ThingWrapper`
- `AnimationContainer`

### Props
Component APIs should be:
- Explicit and narrow.
- Easy to understand.
- Type-safe.
- Able to accept content without internal assumptions.
- Stable enough for reuse.

Example conceptual API:

```tsx
<StoryHeader
  category="History"
  title="The story title"
  deck="A short editorial introduction"
  publishedAt="2026-11-22"
  readingTime="12 min"
/>
```

Do not overengineer with 30 optional props. Prefer composition when variants become complex.

### Variants
Use a small number of named variants when a pattern is genuinely repeated, e.g.:
- `tone="dark"`
- `size="compact"`
- `layout="wide"`

Avoid boolean prop explosion (`isDark`, `isCompact`, `isWide`, `isEditorial`, `isSpecial`). If combinations become complex, separate variants or component composition may be clearer.

---

## 7. Design token strategy

Viraaasat's palette and type choices are locked. The token system should represent these values and define semantic roles.

### Token categories
- **Color:** palette, semantic surface, text, accent, border, focus, data series.
- **Typography:** family, size, weight, line-height, letter-spacing.
- **Spacing:** story rhythm, layout gaps, padding, component spacing.
- **Layout:** reading width, wide width, full bleed, grid, gutters.
- **Motion:** duration, easing, distance, reveal defaults, pinning rules.
- **Layering:** header, overlay, modal, tooltip, media controls.
- **Shape:** border radius, frame, divider.
- **Responsive:** breakpoint behavior—not merely device labels, but layout transitions.

### Palette tokens (already locked)
```css
:root {
  --color-ink: #191B18;
  --color-ivory: #F1EBDD;
  --color-terracotta: #B66A46;
  --color-forest: #68745C;
  --color-brass: #C6A66B;
  --color-oxide: #7D3430;
}
```

### Semantic roles
Map palette tokens into roles rather than using raw palette names everywhere:

```css
:root {
  --surface-page: var(--color-ivory);
  --surface-immersive: var(--color-ink);
  --text-primary: var(--color-ink);
  --text-inverse: var(--color-ivory);
  --accent-culture: var(--color-terracotta);
  --accent-geography: var(--color-forest);
  --accent-timeline: var(--color-brass);
  --accent-conflict: var(--color-oxide);
}
```

These are starter examples; verify every foreground/background pairing for contrast before use.

### Token principle
Components consume semantic tokens. Stories can choose from approved palette roles or define story-specific semantic tokens. Don't let every component reference raw hex codes.

---

## 8. Story page architecture: template, not cage

A weekly story should have a reusable baseline structure while allowing its own narrative sequence.

### Common baseline
1. Story metadata and title.
2. Opening visual / standfirst.
3. Chapter navigation or progress, when useful.
4. Main story body.
5. Interactive or visual scenes.
6. Human/quiet editorial moments.
7. Closing synthesis.
8. Sources and methodology.
9. Related stories.

### Story composition example

```tsx
<StoryLayout story={story}>
  <StoryHeader {...story.header} />

  <StoryOpeningScene />

  <Chapter id="context">
    <ChapterHeading />
    <ReadingSection />
  </Chapter>

  <InteractiveScene />

  <Chapter id="evidence">
    <ReadingSection />
    <DataVisualization />
  </Chapter>

  <ClosingSection />
  <SourceList sources={story.sources} />
</StoryLayout>
```

The story's actual scene sequence should be authored for the subject. Avoid hard-coding the same 9 chapters into all stories.

### Story data model (starter)
```ts
type StoryMetadata = {
  slug: string;
  title: string;
  deck: string;
  category: string;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes?: number;
  authors: string[];
  cover: MediaAsset;
  sources: Source[];
};

type Source = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  publishedAt?: string;
  accessedAt?: string;
  notes?: string;
};

type MediaAsset = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
  aspectRatio?: string;
};
```

This model is intentionally small. Add fields only when editorial workflows need them.

---

## 9. Shared story template vs story-specific layouts

### Use a shared component when
- The same behavior or editorial role appears in multiple stories.
- Accessibility or interaction consistency is important.
- Visual updates should propagate.
- It has a stable interface and clear responsibility.

### Keep it story-specific when
- It exists only to explain a particular topic.
- Its visual form is unique to that narrative.
- Abstraction would add configuration and complexity.
- Reuse is speculative.

### Avoid the “universal StoryBlock”
A single component with many switches such as:
`type="chart" | "map" | "quote" | "video" | "timeline" | "custom"` and a large config object can become difficult to maintain and impossible to art-direct.

Use explicit components and composition.

---

## 10. State and data architecture

### Keep state close to where it is used
- Timeline selection belongs in the timeline or scene unless multiple regions depend on it.
- Map selection may be lifted to the parent scene when the map, sidebar, and narrative all need to reflect the same location.
- Global state is reserved for truly global concerns: theme, navigation, motion preference, perhaps user preferences.

### Avoid duplicated state
If a value can be derived from existing state or story data, derive it instead of storing a second copy.

### Separate source data from state
Static datasets, chronology, location records, sources, and captions should be separate from selected tab/year/location state.

### State flow
Use simple parent-child props/callbacks first. Introduce a shared state library only when the project demonstrates a real complexity problem. Do not add state tooling preemptively.

---

## 11. Route, story and bundle strategy

### Routing
Use route-level boundaries so each story can be navigated and linked directly. Each story needs a stable URL and meaningful metadata.

### Bundle strategy
- Keep homepage bundle lean.
- Lazy-load story routes.
- Lazy-load heavy visualizations, 3D, map engines, and special scene modules.
- Avoid importing every story asset or scene into the homepage.
- Use Suspense/loading fallbacks at boundaries that correspond to independent modules.

React `lazy` supports deferring component code until first render, paired with Suspense for loading UI. But code splitting must be profiled: poorly coordinated code/data loading can create waterfalls and worsen user experience.  
References:
- https://react.dev/reference/react/lazy
- https://react.dev/learn/build-a-react-app-from-scratch

---

## 12. Motion architecture

Motion is a shared language, but stories control choreography.

### Shared layer
- Motion preference detection and user control.
- Standard duration/easing tokens.
- Reduced-motion behavior.
- A small set of reusable primitives.
- Cleanup/teardown conventions for scroll and animation systems.

### Story layer
- Scene timeline and choreography.
- Pin duration and sequence.
- Parallax intensity.
- Custom transitions.
- Motion timing specific to editorial pacing.

### Avoid
- Global scroll-jacking.
- Shared motion components that impose identical story pacing.
- Multiple libraries controlling the same scene.
- Animations that hide content until triggered.
- Creating motion abstractions before an actual story needs them.

---

## 13. Design system documentation and component testing

Storybook is a possible tool for documenting and testing components in isolation in React/Vite projects. Use it selectively; it is not mandatory for every primitive or a substitute for testing the actual site.  
Reference: https://storybook.js.org/docs/get-started/frameworks/react-vite/

### Initial documentation requirements
For each meaningful component, document:
- Purpose.
- API / props.
- Supported variants.
- Example.
- Responsive behavior.
- Accessibility behavior.
- Motion behavior.
- Do / don't guidance.
- Known limitations.

### Testing layers
1. **Unit/component:** states, props, interaction behavior.
2. **Accessibility:** automated checks plus manual keyboard/focus review.
3. **Visual:** compare intended variants and breakpoints.
4. **Integration:** component inside real story context.
5. **Performance:** story-specific bundle/media/animation profiling.

### When Storybook becomes worthwhile
- Many shared components.
- Several people contributing.
- Component behavior needs review.
- Design-system changes risk regressions.
- Story templates become repeatable.

For the initial site, consider starting with documented component examples or a small component gallery. Introduce full Storybook when the component inventory becomes large enough to justify the overhead.

---

## 14. Weekly publishing workflow

Each story should use the same **workflow**, not necessarily the same layout.

### Phase A — Editorial brief
- Topic and question.
- Why it matters.
- Scope and boundaries.
- What is known/unknown.
- Source plan.
- Potential visual/storytelling techniques.

### Phase B — Narrative design
- Story arc.
- Chapters.
- Key reveal or central insight.
- Interactive scenes (why they exist).
- Quiet moments.
- Closing synthesis.

### Phase C — Asset and evidence
- Data verification.
- Source metadata.
- Image/video licensing.
- Asset optimization.
- Captions and alternative text.
- Static alternatives for interactive scenes.

### Phase D — Build
- Use shared foundations.
- Build story-specific scenes.
- Integrate motion.
- Responsive layout.
- Progressive enhancement.

### Phase E — Review
- Fact/source review.
- Editorial clarity.
- Accessibility.
- Performance.
- Mobile.
- Browser QA.
- Motion and visual polish.

### Phase F — Publish and maintain
- Publish and link from the homepage.
- Add metadata and social preview.
- Add to story registry/collection.
- Monitor broken links, errors, and performance.
- Plan corrections and updates.

---

## 15. Architecture decision: what to build first

Recommended order:

### Foundation
- CSS reset and global styles.
- Locked design tokens.
- Typography and reading grid.
- Container and responsive layout primitives.
- Buttons, links, focus styling.
- Navigation shell.

### Editorial components
- Story header.
- Deck/standfirst.
- Chapter heading.
- Reading column.
- Pull quote.
- Image/caption/credit.
- Source note.
- Footnotes and source list.

### Story mechanics
- Chapter navigation/progress.
- Timeline controls.
- Tabs/accordion.
- Motion preference policy.
- Reveal primitive.

### Specialized storytelling
- Interactive chart.
- Map scene.
- Comparison.
- Custom data module.
- 3D scene only where story demands it.

### Homepage
- Cinematic opening.
- Transition to long-scroll editorial homepage.
- Weekly featured story.
- Archive/previous stories.
- About/editorial philosophy.
- Social links (including GitHub and Instagram, with room for future platforms).

---

## 16. Recommended tooling (decision-ready, not a shopping list)

| Need | Recommendation | Notes |
|---|---|---|
| UI | React | Composition and component model |
| Build tool | Vite | Lean frontend workflow; optimize and split bundles |
| Language | TypeScript | Typed props/data contracts |
| Styling | CSS with token variables | Avoid introducing a heavy styling abstraction without need |
| Motion | GSAP/ScrollTrigger for complex scenes; CSS for micro-motion | One motion policy and reduced-motion path |
| 3D | Three.js / React Three Fiber only in special stories | Lazy load; provide static alternative |
| Charts | D3 or Observable Plot according to story | Data visualization research (Mission 05) |
| Maps | Select based on map story requirements and data/license | Map research (Mission 04) |
| Component docs | Storybook optional | Adopt when component inventory/team needs justify |
| QA | Lighthouse/DevTools, automated accessibility tests, manual keyboard/screen-reader checks | No single test proves quality |

This is a suggested baseline, not a requirement to install all tools before building.

---

## 17. Proposed component inventory

### Shared site shell
- `SiteHeader`
- `SiteNavigation`
- `SiteFooter`
- `MobileNavigation`
- `ReadingProgress`
- `SkipLink`

### Editorial
- `StoryHeader`
- `StoryKicker`
- `StoryTitle`
- `StoryDeck`
- `StoryMetadata`
- `ChapterHeading`
- `ReadingColumn`
- `PullQuote`
- `ImageFrame`
- `ImageCaption`
- `ImageCredit`
- `InlineAnnotation`
- `Footnote`
- `SourceNote`
- `SourceList`
- `RelatedStories`

### Interaction
- `Timeline`
- `TimelineControls`
- `Tabs`
- `Accordion`
- `MapLocationList`
- `MapControls`
- `ChartLegend`
- `ComparisonControl`
- `MotionToggle`

### Motion
- `Reveal`
- `ImageWipe`
- `TextReveal`
- `Parallax`
- `ChapterTransition`
- `ScrollScene`

**Inventory warning:** These are candidates, not a task list. Build only when a real story uses them.

---

## 18. Architecture risks to avoid

- **Over-abstraction:** trying to anticipate every story type before publishing one.
- **Universal template:** making stories visually repetitive.
- **Component sprawl:** one-off wrappers and tiny components with no meaningful reuse.
- **Prop explosion:** too many flags on a shared component.
- **Coupled motion:** content only exists inside animation logic.
- **Global state creep:** story-local state stored globally.
- **Heavy homepage:** eagerly importing every story, asset, chart, and engine.
- **Unclear source/data ownership:** mixing facts, presentation, and interaction logic.
- **Tool-first architecture:** installing libraries before the actual problem appears.
- **Shared components without tests:** reusable code multiplies regressions.
- **Generic content blocks:** a “flexible” renderer that loses editorial art direction.

---

## 19. Proposed architecture guardrails

1. Every shared component has one clear purpose.
2. Shared components are extracted because reuse or consistency is real—not speculative.
3. Story-specific experiences stay story-local until there is proven reuse.
4. Design tokens are the single source for shared visual decisions.
5. Semantic HTML is the default.
6. Motion is optional enhancement, governed centrally.
7. Heavy assets and experiences are lazy-loaded.
8. The homepage does not import all story experiences.
9. Story data includes sources, captions, credits, and metadata.
10. Each story gets its own accessibility and performance review.
11. Component API changes are reviewed for impact across stories.
12. The system remains small enough that contributors can understand it.

---

## 20. Research references

### React
- Describing the UI: https://react.dev/learn/describing-the-ui
- Thinking in React: https://react.dev/learn/thinking-in-react
- React lazy: https://react.dev/reference/react/lazy
- Build a React app from scratch: https://react.dev/learn/build-a-react-app-from-scratch

### Design tokens
- W3C Design Tokens Community Group: https://www.w3.org/groups/cg/design-tokens/
- Design Tokens Community Group specification portal: https://www.designtokens.org/
- DTCG FAQ and status: https://www.designtokens.org/faq/

### Component documentation
- Storybook React + Vite: https://storybook.js.org/docs/get-started/frameworks/react-vite/

---

## Final principle

**Viraaasat should have a consistent design language, not a consistent story layout.**

The system should make the boring, repeated work reliable—tokens, typography, source notes, controls, accessibility, navigation—so each weekly story can spend its creative energy on what makes its subject unique.
