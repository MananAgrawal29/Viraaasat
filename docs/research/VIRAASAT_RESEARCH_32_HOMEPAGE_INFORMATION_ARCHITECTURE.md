# Viraaasat Research 32
## Homepage & Information Architecture
**Research date:** 22 November 2026  
**Scope:** Homepage structure, navigation, content discovery, archive taxonomy, page hierarchy, and first-visit/return-visit journeys  
**Status:** Research synthesis + Viraaasat-specific recommendation

---

## Executive summary

Viraaasat should not be structured like a conventional news portal, and it should not be an art-directed landing page that hides its stories behind cinematic spectacle.

The homepage has two jobs that must coexist:
1. **Make Viraaasat's identity and editorial promise immediately understandable.**
2. **Help readers discover a story worth entering—and find other stories when they return.**

The recommended architecture is a **story-first editorial homepage with a shallow, predictable navigation system and a strong archive**. The opening may be cinematic, but the site should quickly reveal its current story, a way to explore the collection, and a route to understand the publication.

Research from Yale usability guidance, Nielsen Norman Group (NN/g), Harvard Medical School's usability guidance, Iowa State, Arizona State University, and India's UX4G guidelines supports several practical principles:
- Organize around user mental models and reader needs, not the internal team structure.
- Use concise, recognizable labels.
- Keep primary navigation limited and purposeful.
- Avoid unnecessary hierarchy and excessive depth.
- Ensure interior pages remain navigable because visitors often arrive from search, links, or social—not the homepage.
- Plan mobile navigation and direct-entry context from the beginning.
- The homepage should showcase useful content and avoid an overly long intro or competing priorities.
- Sitemap and taxonomy are planning tools that should evolve as content grows.

Sources: Yale IA guide; NN/g IA study guide; Harvard website usability; Iowa State web IA guidelines; ASU IA strategy; UX4G Indian government design guidelines. See source list.

---

## 1. The homepage's job

The homepage should answer these questions quickly and naturally:

### For a first-time visitor
- What is Viraaasat?
- What kind of stories does it tell?
- Why should I care?
- What is the current/featured story?
- Where can I explore more?

### For a returning visitor
- What is new?
- What stories have I missed?
- Can I find a topic/place/time that interests me?
- Can I revisit something I read?

### The homepage must not
- Start with a long manifesto before showing any story.
- Require the reader to understand the brand concept before navigating.
- Present every category, link, project, and social destination at once.
- Use motion to block access to content.
- Make the archive a secondary afterthought.
- Hide utility navigation inside obscure interactions.

**Design principle:** identity is communicated through the opening experience and editorial choices; utility is always reachable.

---

## 2. Recommended primary navigation

Keep it to four primary items, plus a compact utility route.

### Proposed navigation
- **Stories** — the main archive/browse view
- **Explore** — topic, place, timeline, or thematic browsing
- **About** — mission, team, editorial standards, trust and policies
- **Latest** — recent releases in chronological order

Plus:
- Viraaasat wordmark → homepage
- Search (can be deferred until content volume justifies it)
- Newsletter / follow (if launched)
- Compact mobile menu

### Why these labels
- “Stories” is immediately understandable.
- “Explore” invites discovery without requiring a category taxonomy to be fully mature.
- “About” is standard and predictable.
- “Latest” gives returning readers a chronological route.
- Avoid unusual branded labels for core navigation; creative naming can live in visual/storytelling language, not usability-critical controls.

**Recommendation:** Search need not be prominent at launch with a small archive. Add it when readers need it (e.g., when archive size and topic coverage make search materially useful).

---

## 3. Proposed site map

```text
Viraaasat
├── Home
├── Stories
│   ├── All Stories (archive)
│   ├── Latest
│   ├── Story detail
│   └── Topic / collection pages (as useful)
├── Explore
│   ├── By topic
│   ├── By place (India map/geography browsing, later)
│   ├── By time (timeline/history, later)
│   └── Featured collections (editorial, not a fixed taxonomy)
├── About
│   ├── About Viraaasat
│   ├── Editorial Standards
│   ├── Corrections & Updates
│   ├── Funding & Independence
│   └── Team (may be part of About at launch)
├── Follow / Newsletter (optional at launch)
├── Contact / Feedback
├── Privacy
├── Terms
└── Copyright / Permissions
```

This is a **conceptual map**, not a requirement to build every page immediately. Launch can be lean; routes can be added when content warrants.

---

## 4. Homepage: recommended sequence

The homepage should be a carefully paced editorial journey—not a dashboard.

### Section 0 — Navigation
Minimal persistent header:
- wordmark
- Stories
- Explore
- Latest
- About
- optional follow button
- menu/search on mobile as appropriate

### Section 1 — Cinematic opening
A short, art-directed introduction to India and Viraaasat:
- immersive but lightweight
- striking visual and type
- no long forced intro
- motion respects reduced-motion
- reader can continue/skip without waiting

This should express brand, not hide the publication.

### Section 2 — The featured story / current issue
One story gets the strongest editorial presentation:
- title
- compelling standfirst
- category or story type
- date
- hero media
- clear entry link

**At launch, if only one story exists, don't pretend there is a large editorial selection. Let that story lead.**

### Section 3 — What is Viraaasat?
A compact statement—one or two lines, not the full manifesto:
- India, examined with curiosity and nuance.
- Stories across history, society, culture, science, geography, politics, and more.

Link to About and editorial standards.

### Section 4 — Story collection / archive preview
Show a small, deliberate selection:
- newest
- editor's selection
- related stories
- thematic groupings when enough content exists

Avoid a generic 12-card grid with every story competing equally.

### Section 5 — Explore India
A discovery layer that can grow:
- topics
- places
- time
- curated collections

At launch, this can be simple thematic links rather than a fully interactive map.

### Section 6 — A small editorial invitation
Newsletter or reader participation:
- receive the weekly story
- suggest a topic
- send context/correction

Keep it purposeful and not intrusive.

### Section 7 — Footer
- About
- Editorial Standards
- Corrections
- Funding/Independence
- Contact
- Privacy/Terms
- Copyright
- social links (if active)

---

## 5. Homepage visual hierarchy

Suggested hierarchy:

1. **Identity/atmosphere** — opening frame
2. **Story** — featured editorial
3. **Discovery** — latest/selected stories
4. **Context** — what Viraaasat is and what it covers
5. **Exploration** — topics, places, collections
6. **Relationship** — newsletter/feedback
7. **Trust/utilities** — policies and contact

The homepage shouldn't give all sections equal weight. Use editorial hierarchy, whitespace, image scale, and typography.

---

## 6. Story archive design

The archive should become the site's memory.

### Launch archive
- Chronological list/grid
- Clear date and story title
- Topic or type label
- Optional short description
- Filter by topic only if there are enough stories to justify it

### Growing archive
Introduce:
- topic filters
- place filters
- format/story-type filters
- featured collections
- search

### Mature archive
Potentially:
- map exploration
- timelines
- thematic journeys
- “Start here” collections
- reading paths

Do not launch with an empty search box, dozens of filters, or categories with one story each.

---

## 7. Taxonomy recommendation

Taxonomy should support multiple discovery dimensions without turning into a rigid folder system.

### Editorial topics (proposed initial vocabulary)
These are broad editorial domains, not permanent silos:
- History
- Society
- Culture
- Geography & Environment
- Science & Technology
- Economy & Work
- Politics & Public Life
- Cities & Infrastructure
- Ideas & Identity
- India’s Future

Avoid making every story fit only one box. Stories may carry:
- one primary topic
- optional secondary topics
- place tags
- period/time tags
- story format labels
- curated collection membership

### Story metadata (internal model)
```ts
type StoryMetadata = {
  id: string;
  title: string;
  slug: string;
  standfirst: string;
  publishedAt: string;
  updatedAt?: string;
  authorIds: string[];
  storyType: "reported" | "explainer" | "analysis" | "opinion" | "visual-essay" | "data-story";
  primaryTopic: string;
  secondaryTopics?: string[];
  places?: string[];
  timePeriod?: string[];
  featured?: boolean;
  status: "draft" | "review" | "published";
};
```

Treat this as a starting model; do not build filters or tags solely because a field exists. Metadata should be editorially maintained and used in visible features.

---

## 8. Explore page: a separate discovery experience

**Explore** should not merely duplicate the archive.

Its purpose is to reveal connections across stories.

### Launch version
A curated page with:
- broad topics
- selected stories
- a few “Start here” reading paths
- featured collections, if editorially useful

### Future evolution
When story count and data justify it:
- interactive India map with story locations
- chronological timeline
- cross-topic connections
- place/topic filters
- curated pathways

### Important guardrail
The interactive map and timeline should not be forced into every story. Build them only when they create meaningful understanding or discovery.

---

## 9. Story page IA

Every story is an independent experience, but readers should never lose their context.

### Persistent basics
- wordmark/home
- Stories / Explore access
- chapter/reading progress where appropriate
- a clear exit/back route to archive or related stories

### Story-specific content hierarchy
1. Kicker / topic / story type
2. Title
3. Standfirst
4. Byline, date, credits
5. Hero
6. Opening
7. Narrative chapters
8. Visual/interactive scenes
9. Context or synthesis
10. Sources/methods/disclosures
11. Correction/update note if applicable
12. Related stories
13. Next story / archive invitation

Not every story must follow this template. It is a navigational baseline; story format may vary.

---

## 10. Mobile information architecture

Mobile is not a desktop site compressed.

### Navigation
- compact header
- wordmark
- menu with clear labels
- visible return-to-home/archive
- no hover-dependent interactions

### Homepage
- short opening
- featured story immediately available
- one-column reading flow
- minimal simultaneous choices

### Discovery
- clear topic and latest routes
- filters use simple controls
- map/timeline can have text-list alternative

### Story experience
- pinned scenes shortened or removed if they create fatigue
- interactions touch-first
- chapter navigation accessible
- reduce media/motion complexity
- ensure no horizontal overflow except deliberate modules

---

## 11. Direct-entry journeys

The homepage isn't the only entry point.

A reader might arrive from:
- search
- social media
- a shared link
- newsletter
- a story citation
- another website

Every story page should therefore:
- clearly identify Viraaasat
- provide the story title and type
- show an easy path to the archive
- offer related content
- expose sources/context
- maintain navigational consistency

Do not assume readers will “start at the beginning.”

---

## 12. Homepage motion and pacing

Use the established motion research to choreograph the home page, but keep the structure visible and usable.

### Recommended motion
- opening: short reveal, not a long intro
- featured story: image/title reveal, subtle parallax if performant
- transition into archive: visual chapter cut or image wipe
- story cards: restrained hover/focus motion
- topic exploration: small reveal or count animation only when meaningful

### Avoid
- scroll hijacking
- long pinned hero that delays content
- repeated animation on every card
- motion blocking navigation
- heavy background WebGL on the homepage
- auto-playing audio
- content only accessible through animation

Reduced-motion mode should turn cinematic transitions into simple static/low-motion changes.

---

## 13. Launch versus future: scope discipline

### MVP launch
- Homepage
- Featured story
- Stories/archive
- Story pages
- About
- Editorial Standards
- Corrections/contact
- Funding disclosure
- Privacy/Terms/Copyright
- basic topics
- newsletter only if operationally ready

### Phase 2
- Topic hubs
- Collections
- search
- story map
- timeline index
- reader suggestions workflow
- archive filters

### Phase 3
- interactive map of India and story locations
- editorial reading paths
- cross-story timeline
- multilingual discovery
- deeper archive visualization

---

## 14. Proposed sitemap (clean version)

```text
/
├── /stories
│   ├── /stories/:slug
│   └── /stories/topic/:topic
├── /explore
│   ├── /explore/topics
│   ├── /explore/places       [future]
│   ├── /explore/timeline     [future]
│   └── /explore/collections
├── /latest
├── /about
│   ├── /about/editorial-standards
│   ├── /about/corrections
│   └── /about/funding
├── /contact
├── /newsletter                [optional]
├── /privacy
├── /terms
└── /copyright
```

---

## 15. Research-derived principles vs project recommendations

### Research-derived
- IA should reflect user mental models and goals, not internal organization.
- Clear labels and predictable hierarchy support findability.
- Avoid unnecessary depth and excessive breadth.
- Navigation must work on mobile.
- Internal pages need contextual navigation because direct-entry traffic is common.
- Homepage should prioritize useful content and avoid clutter/intro overload.
- Content structure should be planned as a sitemap and maintained over time.

### Viraaasat-specific recommendations
- Story-first, not news-dashboard-first.
- Four primary nav labels: Stories, Explore, Latest, About.
- Short cinematic opening followed by a visible story.
- Archive as the long-term memory of the publication.
- Explore as connection/discovery, not a duplicate archive.
- Start with simple categories; build map/timeline only when archive depth warrants.
- Editorial trust signals embedded in stories and policy pages.
- Keep launch scope lean and visually distinctive.

### Inference / assumptions to test
- New readers will respond better to a short cinematic identity section than a long manifesto.
- Returning readers will value Latest and archive access.
- Topic/place/time browsing will become useful as the archive grows.
- A curated “Start here” or collection layer may outperform a rigid category tree for a small archive.

---

## 16. Practical testing plan before finalizing

Conduct lightweight testing with 5–8 people, preferably not all close friends or tech-savvy users.

Ask them to:
1. Explain what Viraaasat is after 5 seconds on the homepage.
2. Find the newest story.
3. Find a story about a topic they care about.
4. Explain how they would report a factual error.
5. Find the About/Editorial Standards page.
6. Return to the archive from a story.
7. Find another story related to the one they just read.

Observe—not coach. Note hesitation, labels they misinterpret, and routes they expect.

Repeat with mobile users. Test first-time and returning-reader journeys.

---

## 17. Final recommendation

**Build the homepage as an editorial entrance, not a brand trailer.**

It should feel cinematic, unmistakably Viraaasat, and emotionally resonant—but within a few seconds, readers should see the publication's work and know how to continue.

The architecture should remain simple:
- **Stories** for reading.
- **Explore** for discovering connections.
- **Latest** for chronological updates.
- **About** for identity and trust.

Let the storytelling be complex. Let the navigation be simple.

---

## Sources

1. Yale University, Usability & Digital Accessibility — Site Mapping and Information Architecture: https://usability.yale.edu/ux/plan/establish-structure-findability/site-mapping-and-information-architecture
2. Nielsen Norman Group — Information Architecture: Study Guide (reviewed Aug. 20, 2026): https://www.nngroup.com/articles/ia-study-guide/
3. Harvard Medical School Identity Guide — Website Usability and Navigation: https://identityguide.hms.harvard.edu/multimedia/websites
4. Iowa State University — Web Theme Guidelines: Information Architecture: https://www.theme.iastate.edu/files/documents/2022-08/Web_Story_and_Style_Guide.pdf
5. Arizona State University — Information Architecture, Content and Navigation Strategy: https://brandguide.asu.edu/elements-guidelines/web/content/information-architecture
6. UX4G, Government of India — Design Guidelines 1.0: https://www.ux4g.gov.in/assets/img/pdf/UX4G-Design-Guidelines-1.0.pdf
7. Website Unpacked — Best Magazine Websites of 2026 (inspiration and comparative examples, not usability standards): https://websiteunpacked.com/magazine-publisher-website-design
8. Themex Studio — How to Style a Publication Homepage That Reads Well: https://themex.studio/guides/how-to-style-a-publication-homepage-that-reads-well/

## Evidence limitations
- Several IA principles are general usability guidance rather than studies specific to editorial storytelling publications.
- Magazine-site collections and design blogs are inspiration sources, not controlled evidence.
- The proposed labels, sitemap, taxonomy, and homepage sequence are recommendations for Viraaasat; they require validation with actual readers.
