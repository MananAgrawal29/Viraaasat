# Viraaasat Research 36 — SEO & Search Visibility Audit
**Date:** 22 November 2026  
**Mission:** Design an organic discoverability strategy and technical SEO baseline for Viraaasat.in without sacrificing its cinematic, story-first editorial experience.

---

## 1. Executive summary

Viraaasat should treat SEO as **making its journalism understandable, accessible, and discoverable**, not as a keyword game.

The website's central discoverability risk is not its visual style. It is the possibility that key story content, metadata, links, and page structure become dependent on a JavaScript-heavy immersive experience that is difficult to discover, understand, or share.

### Strategic recommendation

Build a **search-friendly editorial website that happens to be immersive**:

1. Each story has a stable, unique, crawlable URL.
2. Important story text is present in HTML and not trapped in graphics, canvas, or animation states.
3. Each page has a unique title, description, canonical URL, social metadata, and descriptive headings.
4. Internal links connect stories, topics, archive pages, and relevant editorial context.
5. Sitemap, robots.txt, and Search Console are maintained from the start.
6. Structured data is accurate and modest—Article/NewsArticle as appropriate, BreadcrumbList, Organization/Person where appropriate.
7. Images are optimized, responsive, contextually placed, and supplied with descriptive alt text.
8. Performance and accessibility are treated as both reader experience and technical quality, not an SEO afterthought.
9. Stories are written to answer real questions and contribute original reporting, research, explanation, or perspective.
10. Search performance is measured, but editorial choices are never made solely to chase traffic.

Google's Search Essentials emphasize people-first helpful content, words people actually search for placed in prominent locations, crawlable links, and appropriate handling of images, video, JavaScript, and structured data. Search visibility is not guaranteed even when best practices are followed.

---

## 2. The SEO philosophy for Viraaasat

### SEO is not the editorial strategy
Do not choose topics, conclusions, or headlines solely because a keyword tool suggests volume. Search intent can inform audience understanding and packaging, but it must not replace editorial judgment.

### Search should be an entry point to the story
A reader may arrive searching a question, a place, a phenomenon, a person, or a historical event. The landing page should satisfy that intent and then invite them into the immersive experience.

### The site should have two layers working together

**Editorial experience**
- Cinematic
- Scroll-driven
- Interactive
- Visually distinctive
- Emotionally and intellectually engaging

**Discoverability layer**
- Semantically structured
- Text-rich enough to understand
- Stable URLs
- Crawlable navigation
- Accessible and responsive
- Accurate metadata and schema

These layers should support each other, not compete.

---

## 3. Site architecture and URL strategy

Research 32 established a story-first information architecture. SEO supports that direction.

### Proposed routes

```text
/
├── /stories
│   ├── /stories/:slug
│   └── /stories/topic/:topic
├── /explore
│   ├── /explore/topics
│   ├── /explore/collections
│   ├── /explore/places       (future)
│   └── /explore/timeline     (future)
├── /latest
├── /about
│   ├── /about/editorial-standards
│   ├── /about/corrections
│   └── /about/funding
├── /contact
├── /newsletter               (optional)
├── /privacy
├── /terms
└── /copyright
```

### URL rules

- Short, descriptive, readable slugs.
- Avoid IDs or random strings.
- Use lowercase.
- Hyphen-separated words.
- Don't change URLs without a reason.
- Use one canonical URL per story.
- Redirect changed URLs permanently when a story slug changes.
- Avoid duplicate story pages with query strings or alternate paths.

**Example pattern:**
`https://viraaasat.in/stories/<descriptive-story-slug>`

Topic routes should provide real, curated, useful content—not thin pages generated solely for SEO.

Google recommends descriptive URLs and logically organized pages that help people and search engines understand the site. Canonical URLs help resolve duplicate or alternate pages.

---

## 4. Search-ready story page architecture

Every published story should be a complete, independently discoverable page.

### Recommended story metadata

- Story title
- SEO title (can be similar to the display title, but may be adjusted for clarity)
- Meta description
- Slug
- Topic / category
- Story deck / standfirst
- Author(s)
- Publish date
- Last meaningful update date
- Hero image
- Hero alt text
- Hero credit
- Canonical URL
- Social preview image
- Reading time (optional; calculate honestly)
- Sources and methodology
- Related stories
- Article schema data

### Page structure

```text
Story page
├── <title>
├── Meta description
├── Canonical
├── Social metadata
├── Article structured data
├── Breadcrumb structured data
└── Visible story
    ├── Topic/kicker
    ├── H1 (story title)
    ├── Standfirst
    ├── Byline
    ├── Published / updated date
    ├── Hero image + caption + credit
    ├── Narrative chapters
    │   ├── Semantic headings
    │   ├── Body copy
    │   ├── Images
    │   ├── Charts/maps/interactive modules
    │   └── Captions / notes
    ├── Conclusion / synthesis
    ├── Sources / methods / limitations
    ├── Corrections or update note
    ├── Related stories
    └── Internal navigation / archive
```

### Critical rule
**Don't make the story's meaning depend exclusively on animation or visual rendering.**

The important text, headings, captions, and key explanations must be accessible as content. A story can have animated maps and transitions, but it needs an understandable text layer.

---

## 5. Titles, headings, and snippets

### HTML title (`<title>`)
Every page should have a unique, concise, descriptive title.

Proposed title patterns:

**Homepage**
`Viraaasat — India, in all its complexity`

**Story**
`[Story title] | Viraaasat`

**Topic**
`[Topic] Stories and Explorations | Viraaasat`

**About**
`About Viraaasat | India, in all its complexity`

These are patterns, not final copy.

### H1
Each page should have a clear primary heading.

- Homepage: brand statement or primary editorial heading.
- Story: the actual story title.
- Topic: topic name.
- About: page purpose.

Use headings to structure the narrative—not simply as typography decoration.

### Meta description
Write a unique, accurate description of each page.

Suggested editorial guideline:
- One or two sentences.
- Roughly 140–160 characters as an internal writing target, not a Google limit.
- Describe the story's actual subject and distinctive value.
- Avoid keyword stuffing.
- Avoid generic descriptions reused across all stories.
- Don't promise revelations the story doesn't deliver.

Google may generate snippets from page content instead of using the meta description, depending on the search query.

---

## 6. Keyword and search-intent research

Use keyword research as an audience question discovery tool.

### Four query families

**1. Topic queries**
What is the reader broadly interested in?
- `[topic] in India`
- `[topic] explained`
- history of `[subject]`
- `[subject] facts`

**2. Question queries**
What does the reader want to understand?
- Why does `[phenomenon]` happen?
- How does `[system]` work?
- What changed in `[period]`?
- What is the difference between `[A]` and `[B]`?

**3. Place / entity queries**
- `[place] history`
- `[region] geography`
- `[site] significance`
- `[city] infrastructure`

**4. Comparative / contextual queries**
- `[topic] India vs other countries`
- `[phenomenon] across Indian states
- `[system] before and after
- `[region] differences

Use these to discover gaps and phrasing—not to turn stories into listicles or copy search-engine wording.

### Recommended workflow
1. Identify the story's central question.
2. Brainstorm reader language and related queries.
3. Check search intent and existing results.
4. Identify unanswered or poorly explained questions.
5. Review relevant query terms in Search Console after publication.
6. Improve title, description, section clarity, and internal links when warranted.

---

## 7. Technical SEO: must-have baseline

### Crawlability and indexability
- Public stories return successful HTTP status codes.
- No accidental `noindex`.
- No unintended robots.txt blocks.
- Important assets and scripts are accessible.
- Navigation uses crawlable links.
- Avoid requiring a user interaction before primary content appears.
- Don't hide story content behind a complex app shell unnecessarily.

### Rendering
Google can render JavaScript, but rendering may happen in a separate stage and can be delayed; not all crawlers or platforms execute JS similarly. Server-rendering or pre-rendering can make content faster and more consistently accessible.

**Recommendation for Viraaasat:** static generation or pre-rendering for the homepage, archive/topic pages, and every story. React/Vite can still power the experience, but ensure HTML output contains meaningful story content, titles, headings, links, and metadata.

### HTTP and site reliability
- HTTPS everywhere.
- Canonical host and redirect strategy (www or non-www—choose one).
- Correct 200, 301, 404, and 410 behavior where appropriate.
- No soft 404s.
- No broken internal links.
- Keep deployment stable.
- Custom 404 page with real 404 response.
- Avoid redirect chains.

### Robots.txt
Use robots.txt for crawl control—not as a substitute for `noindex`.

### Sitemap
Maintain a sitemap that includes canonical public pages:
- Homepage
- Stories
- Topic/collection pages that are useful and indexable
- About and editorial trust pages

Update sitemap when stories are published or materially updated. Use accurate last-modified dates rather than automatically changing every URL's date.

Google supports sitemap submission and sitemap reporting; a sitemap is a discovery aid, not a guarantee of indexing.

---

## 8. Structured data

Structured data can help search engines understand a page and may enable eligible search features. It does not guarantee enhanced results.

### Recommended types

| Page | Schema recommendation |
|---|---|
| Homepage | Organization |
| Story | Article or NewsArticle (choose based on the publication's content and type) |
| Story breadcrumbs | BreadcrumbList |
| Author | Person, if author information is published and appropriate |
| Video story | VideoObject only when the page genuinely contains an identifiable video |
| About / publication | Organization / relevant entities, only where factual |

### Article schema fields (when applicable)
- `headline`
- `description`
- `image`
- `datePublished`
- `dateModified`
- `author`
- `publisher`
- `mainEntityOfPage`

Schema should match visible content and accurately describe the page.

Do not:
- Add fake ratings or reviews.
- Mark up content that isn't visible.
- Use schema to invent credentials.
- Include irrelevant or misleading properties.
- Expect schema to guarantee a rich result.

Test implementation with Google's Rich Results Test and monitor Search Console where applicable.

---

## 9. Social sharing and Open Graph

Organic search isn't the only discovery channel. Stories may be shared through WhatsApp, Instagram, Discord, X, LinkedIn, Reddit, and other platforms.

Every story should have:

- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `og:type` (typically article for story pages)
- Twitter/X card metadata (commonly `summary_large_image`)
- A consistent, high-quality share image

### Social image direction
- Design a distinct share image per story.
- Use a recognizable Viraaasat visual system.
- Make the title legible at small sizes.
- Avoid overcrowding with text.
- Preserve the photograph's context and integrity.
- Test actual preview cards when possible.

Recommended share image dimensions: use a 1200×630 px starting canvas for broad compatibility. This is an implementation recommendation, not a universal platform requirement.

Don't rely on social platforms rendering the live website's animation. The share preview should work as a static image.

---

## 10. Image SEO and visual discoverability

Images are potential discovery entry points.

### Practices
- Use standard HTML `<img>` elements where possible.
- Provide descriptive filenames.
- Provide meaningful alt text.
- Place images near relevant text.
- Use responsive image markup (`srcset`, `sizes`, `<picture>`).
- Ensure image URLs are crawlable.
- Include images in the sitemap or image sitemap where appropriate.
- Add image metadata on the image landing page when useful.
- Avoid CSS-only background images for important editorial images if image indexing matters.
- Optimize size and format while preserving visual quality.

### Alt-text policy

Alt text should describe the image's relevant information, not stuff keywords.

Examples:
- Good: `Workers unloading sacks of grain at a market yard in Nagpur`
- Poor: `India agriculture farmer market grain India Indian farmers best agriculture`

Alt text should be contextual. A decorative image can have empty alt text (`alt=""`). A complex chart or map may need a longer nearby explanation rather than an alt attribute overloaded with every data point.

### Caption and credit
Captions serve readers and editorial transparency. Alt text is not a replacement for captions, credits, or story context.

---

## 11. Video and immersive-story SEO

Viraaasat may use video, interactive maps, canvas, SVG, 3D, and scroll-driven visual states. These are allowed—but the narrative should not be locked inside them.

### Rules
- Include a visible text explanation for the content of important video/visual sequences.
- Provide a poster image.
- Don't autoplay sound.
- Use captions/transcripts for spoken content.
- Use accessible labels for controls.
- Important maps/diagrams need a text alternative or accompanying explanation.
- Ensure content can be read if an interactive module fails.
- Avoid putting the whole story in one canvas or image.
- Keep navigation and chapter links in HTML.
- Ensure essential story content is not revealed only after scroll-based JavaScript triggers.

### Three.js / WebGL
A 3D experience can be a memorable story module. It should not become the sole delivery mechanism for critical evidence or text.

**Progressive experience:**
1. Story text.
2. Static visual.
3. Basic interactive.
4. Scroll animation.
5. Optional 3D or video.

The story should remain meaningful at the simpler levels.

---

## 12. Core Web Vitals and performance

Performance isn't an SEO trick; it's part of the experience. It matters especially for mobile readers and slower networks.

### Proposed target thresholds (at 75th percentile)
- **LCP:** ≤ 2.5 seconds
- **INP:** ≤ 200 milliseconds
- **CLS:** ≤ 0.1

These are the recommended “good” thresholds for Core Web Vitals.

### Viraaasat performance strategy
- Static/pre-rendered story pages.
- First viewport prioritized.
- Hero image optimized and prioritized.
- Below-fold media lazy loaded.
- Responsive images.
- Reserved dimensions to avoid layout shifts.
- Limit large JS bundles.
- Load story-specific modules only where needed.
- Avoid multiple simultaneous pinned/scrubbed scenes on mobile.
- Defer nonessential 3D.
- Use lightweight fallbacks.
- Test on real mobile hardware and network conditions.

Research 07 remains the broader performance and accessibility reference.

---

## 13. Internal linking and discovery

Internal links should help readers continue their curiosity—not merely manipulate ranking.

### Every story should link to
- 2–4 related stories, when available
- Its topic/collection page
- Relevant places or entities pages (future)
- Sources and methods
- The archive
- Editorial/about pages where relevant

### Homepage
Make published stories crawlable from the homepage, Latest, Stories, topic collections, or other relevant pages.

### Topic pages
A topic page should be a curated, useful introduction to a theme:
- Brief topic description
- Selected stories
- Different angles and types of stories
- Relevant collection/timeline/map when useful
- Links to related topics

Avoid creating dozens of empty or near-identical topic pages.

### Story graph
Over time, build meaningful cross-connections:
- A historical event ↔ present-day consequence
- A place ↔ its infrastructure
- A cultural practice ↔ changing society
- A scientific phenomenon ↔ lived experience

This is an editorial network of knowledge, not a forced keyword-linking scheme.

---

## 14. Topical authority and publishing cadence

A weekly publishing ambition can create a healthy archive over time, but publishing frequency alone is not a ranking strategy.

### Recommendation
- Publish at a sustainable cadence.
- Prioritize original, well-researched, distinctive stories.
- Revisit stories when material facts or context change.
- Build thematic clusters naturally.
- Link related stories.
- Provide transparent authorship and sources.
- Avoid thin pages created only to capture search queries.

Google's documentation emphasizes helpful, reliable, people-first content and unique, well-organized material. SEO success cannot be guaranteed and may take time.

---

## 15. E-E-A-T and trust signals

Experience, expertise, authoritativeness, and trust are useful quality concepts for editorial planning. Do not turn them into a badge or a formula.

### Show the reader how the publication works
Recommended trust signals:
- About Viraaasat
- Editorial Standards
- Authors and contributor bios
- Sources and methodology for each story
- Corrections policy
- Funding and independence disclosures
- Contact information
- Published/updated dates
- Clear distinction between reporting, analysis, opinion, illustration, and reconstruction

### Don't make unsupported claims
Avoid:
- “100% unbiased”
- “The definitive truth”
- “India's most trusted”
- “No agenda”

Demonstrate trust through evidence, transparency, correction practices, and editorial behavior.

---

## 16. Discoverability outside Google

Search is one distribution channel—not the whole audience strategy.

### Potential discovery channels
- Instagram and short-form video
- YouTube
- Newsletter
- WhatsApp opt-in sharing
- Reddit communities (where rules and context permit)
- Discord communities
- Academic/student networks
- Collaborations with photographers, researchers, institutions, and creators
- Direct sharing between readers

Each story should have a distribution package (Research 24):
- Website story
- Social carousel
- Vertical video
- Newsletter segment
- Share card
- Optional behind-the-scenes or explainer

The website remains the canonical destination and the home of the complete story.

---

## 17. Search Console setup and monthly workflow

### Setup at launch
1. Verify domain ownership in Google Search Console.
2. Submit sitemap.
3. Confirm robots.txt.
4. Inspect homepage.
5. Inspect first story URL.
6. Verify canonical tags.
7. Check indexing status.
8. Confirm structured data.
9. Review performance report when data appears.
10. Check security and manual action reports.

### Monthly review
- Indexed pages vs published pages.
- Stories with impressions but low clicks.
- Search queries that reveal reader intent.
- Pages with traffic changes.
- Crawling/indexing issues.
- Mobile and Core Web Vitals.
- Broken links.
- Old stories that need updates.
- Search appearance and social share quality.

Don't obsess over daily rank checks. Search data is delayed and noisy; focus on patterns and actionable problems.

Search Console is the recommended monitoring and diagnostic tool. It offers indexing, sitemap, performance, URL inspection, security, and Core Web Vitals reporting.

---

## 18. Launch SEO checklist

### Technical
- [ ] HTTPS and canonical host configured.
- [ ] Stable URL structure.
- [ ] No accidental `noindex`.
- [ ] robots.txt checked.
- [ ] XML sitemap generated.
- [ ] Sitemap submitted to Search Console.
- [ ] Canonical URLs set.
- [ ] Public routes return correct status codes.
- [ ] Crawlable navigation links.
- [ ] Important pages pre-rendered/static.
- [ ] Custom 404 returns real 404.
- [ ] No broken internal links.
- [ ] Redirects tested.

### Page metadata
- [ ] Unique title.
- [ ] Unique description.
- [ ] One primary heading.
- [ ] Canonical URL.
- [ ] Open Graph title/description/image.
- [ ] Social card metadata.
- [ ] Publish and update dates accurate.

### Content
- [ ] Original and useful.
- [ ] Readable headings.
- [ ] Main story text in HTML.
- [ ] Sources and methods accessible.
- [ ] Claims supported.
- [ ] No keyword stuffing.
- [ ] Related stories linked.

### Images / media
- [ ] Descriptive filenames.
- [ ] Contextual alt text.
- [ ] Captions and credits.
- [ ] Responsive sizes.
- [ ] Correct image formats.
- [ ] Important images crawlable.
- [ ] Image sitemap considered.
- [ ] Hero image prioritized.
- [ ] Below-fold media lazy-loaded.

### Structured data
- [ ] Article schema accurate.
- [ ] Publisher identity accurate.
- [ ] Dates accurate.
- [ ] Author information matches visible content.
- [ ] Image URLs crawlable.
- [ ] Breadcrumbs appropriate.
- [ ] Schema validated.

### Experience
- [ ] Mobile usability.
- [ ] Core Web Vitals checked.
- [ ] Reduced motion.
- [ ] Keyboard accessibility.
- [ ] Story works without animation.
- [ ] No heavy blocking loader.
- [ ] Video/audio controls and fallbacks.

---

## 19. Recommended SEO implementation stack for Viraaasat

### At launch
- Static generation or pre-rendering for public pages.
- Semantic HTML.
- Story metadata stored alongside story content.
- Generated sitemap.
- robots.txt.
- Canonical URL helper.
- Open Graph/Twitter metadata.
- JSON-LD structured data for stories.
- Google Search Console.
- Lightweight analytics (Research 17).
- Performance monitoring via Search Console and lab testing.

### Avoid initially
- SEO plugin ecosystems built for large CMSs.
- Excessive keyword tooling subscriptions.
- Artificial backlink campaigns.
- Mass-generated thin content.
- Duplicate landing pages.
- Auto-generated topic pages with no editorial value.
- Chasing arbitrary keyword density.
- Buying links or ranking guarantees.

---

## 20. Recommended priorities

### P0 — Launch-critical
1. Crawlable, pre-rendered story content.
2. Unique titles and descriptions.
3. Canonical URLs.
4. Sitemap and robots.txt.
5. Search Console setup.
6. Structured data basics.
7. Responsive images and alt text.
8. Internal links.
9. Mobile and performance checks.

### P1 — Early publication phase
1. Improve story titles and snippets based on Search Console queries.
2. Build meaningful topic/collection pages.
3. Create consistent social share cards.
4. Update older stories when facts/context change.
5. Strengthen internal links between stories.

### P2 — As the archive grows
1. Search within Viraaasat.
2. Place/entity pages where editorially justified.
3. Timelines and collections.
4. Image sitemap refinements.
5. Multilingual SEO when translated content launches.
6. Broader external distribution and partnerships.

---

## 21. Final recommendation

Viraaasat should optimize for **discoverability without flattening its editorial identity**.

The site should be technically easy to crawl, semantically clear, fast, accessible, and structured. The stories themselves should remain original, evidence-driven, immersive, and editorially independent.

### The principle

**Don't optimize the story for the algorithm. Make the story clear enough that both humans and search engines can understand what it offers—and compelling enough that humans want to read, finish, and share it.**

---

## Research sources

### Google Search foundations
- Google Search Essentials — https://developers.google.com/search/docs/essentials
- How Google Search Works — https://developers.google.com/search/docs/fundamentals/how-search-works
- SEO Starter Guide — https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- SEO developer guide — https://developers.google.com/search/docs/fundamentals/get-started-developers
- JavaScript SEO basics — https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics

### Technical crawling, indexing, metadata
- Crawling and Indexing — https://developers.google.com/search/docs/crawling-indexing
- Robots meta tag specifications — https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- Sitemap builder — https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

### Images and structured data
- Image SEO best practices — https://developers.google.com/search/docs/appearance/google-images
- Structured data policies — https://developers.google.com/search/docs/appearance/structured-data/sd-policies

### Monitoring
- Search Console getting started — https://developers.google.com/search/docs/monitor-debug/search-console-start
- URL Inspection — https://support.google.com/webmasters/answer/9012289
- Sitemaps report — https://support.google.com/webmasters/answer/7451001

---

## Research distinction

**Source-derived:** Google's published recommendations on people-first content, crawl/index/render behavior, crawlable links, descriptive URLs, canonicalization, sitemaps, metadata, image discoverability, structured data, JavaScript SEO, and Search Console monitoring.

**Viraaasat-specific recommendations:** URL architecture, story page contract, title patterns, SEO metadata fields, schema choices, internal-linking strategy, technical stack direction, launch priorities, review cadence, and discoverability philosophy.

This report is strategic research, not a guarantee of rankings or search traffic. Search engines determine crawling, indexing, and result display.
