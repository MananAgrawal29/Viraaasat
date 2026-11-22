# Viraaasat — Architecture

**Status:** Proposed stack. Validate through a small homepage proof-of-concept before fully locking.

## Proposed stack
| Area | Recommendation |
|---|---|
| Framework | Next.js App Router |
| UI | React |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS variables |
| UI primitives | Radix / shadcn selectively, with custom editorial styling |
| Scroll storytelling | GSAP + ScrollTrigger |
| Component motion | CSS first; Motion for React selectively |
| Smooth scroll | Lenis optional; only after testing |
| Maps | MapLibre GL JS; React integration as appropriate |
| Charts | Observable Plot or Recharts for common charts; D3 for custom |
| 3D | Three.js + React Three Fiber + Drei, story-specific |
| CMS | Sanity Studio, proposed |
| Unit/component tests | Vitest + React Testing Library |
| E2E | Playwright |
| Visual/component workbench | Storybook, optional |
| CI | GitHub Actions |
| Hosting | Vercel initially |
| Error monitoring | Sentry optional |
| Analytics | Plausible or PostHog; privacy reviewed |

## Architecture principles
- Content-first and SEO-aware rendering.
- Keep heavy story interactions isolated and lazy-loaded.
- Homepage should not depend on 3D or map bundles.
- Stories should be composable, but not forced into one rigid template.
- Build reusable story blocks for common patterns.
- Keep content and presentation separated.
- Avoid introducing libraries without a clear need.
- Avoid premature backend complexity.
- Use server rendering/static generation where it improves public content delivery.
- Progressive enhancement: core content remains usable without heavy JS.

## Suggested initial route model
- `/` — homepage.
- `/stories` — story index/archive.
- `/stories/[slug]` — individual story.
- `/about` — editorial mission, team and methodology.
- `/topics/[slug]` — topic collections, if needed.
- `/explore` — interactive exploration hub, if justified by content.

Routes are a proposal; confirm during implementation.

## Suggested component families
- Global: SiteHeader, NavigationOverlay, Footer, PageTransition, ReadingProgress.
- Editorial: StoryCard, FeaturedStory, StoryMeta, ChapterHeading, PullQuote, ImageSequence, MediaFrame, SourceNotes.
- Interaction: Timeline, MapStoryBlock, ChartStoryBlock, DataCallout, TopicExplorer.
- Layout: FullBleedSection, SplitEditorialSection, StickyChapter, StoryGrid.

## Proposed content model
Story:
- title, slug, deck/summary
- publication date and update date
- author(s), editor, contributors
- topic tags and geographic tags
- hero media, poster/fallback, alt text, caption, credit
- chapters/blocks
- source list and citation references
- asset/licensing metadata
- reading duration (calculated or editorially checked)
- status: draft, review, fact-check, scheduled, published, archived
- related stories

## Story modules
Possible reusable blocks:
- prose
- image with caption/credit
- full-bleed image
- video
- quote
- timeline
- map
- chart
- comparison
- audio
- interactive scene
- sources and methodology

Do not implement all modules before a story requires them.

## Technical safeguards
- Route-level code splitting and lazy loading.
- Responsive image formats/sizes.
- Do not preload every hero asset.
- Prefer transform/opacity animation.
- Avoid layout shift.
- Set and review performance budgets.
- Handle failures gracefully: map/chart/3D fallback should not block story reading.
