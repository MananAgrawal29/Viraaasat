# Viraaasat Research 17
## Analytics, Privacy, Measurement & Audience Intelligence

**Mission:** Build a meaningful way for Viraaasat to understand readership, story engagement, discovery, performance and retention—without invasive tracking, vanity metrics or allowing metrics to dictate editorial decisions.

**Research date:** November 2026. Vendor features change; this research emphasizes product capabilities and principles over price snapshots.

---

## Executive summary

Viraaasat is not an ecommerce funnel. It is an editorial storytelling project that publishes immersive, interactive stories—ideally one story each week. Analytics should help us answer:

- Are people discovering Viraaasat?
- Which stories are attracting readers?
- Do readers stay with the narrative?
- Which interactive scenes actually add value?
- Where are readers abandoning or getting stuck?
- Are readers returning for new stories?
- Does the experience work on mobile and slower devices?
- Which channels help us find the right audience?

The recommended approach:

1. **Start with privacy-first analytics**, not surveillance-style analytics.
2. Track aggregated traffic and a small set of meaningful story events.
3. Measure scroll depth as a signal—not as a proxy for comprehension.
4. Use chapter/scene progression to understand immersive stories.
5. Do not collect names, email addresses, raw user content or personal identifiers for analytics.
6. Avoid session recordings and heatmaps at launch.
7. Review analytics weekly/monthly, not obsessively in real time.
8. Make editorial decisions from evidence plus human judgment—not by optimizing for clicks.

**Proposed launch choice: Plausible Analytics**, with **Umami** as the self-hosting alternative to evaluate if Viraaasat wants full control of infrastructure. Plausible offers top pages, sources, scroll depth, custom events/goals, funnels and user journeys. Its own privacy claims should be independently evaluated against our configuration, legal requirements and data flows; “privacy-friendly” is not a substitute for a legal review. Sources 1–4, 10.

---

## 1. Define the measurement philosophy

### The reader is not the product

Analytics should observe the experience at a level that lets the team improve it, without building detailed individual profiles.

Our guiding rules:

- Collect only data that serves a defined editorial or product question.
- Avoid persistent cross-site or cross-device identification.
- Avoid personal information in event properties.
- Do not infer sensitive traits from behavior.
- Do not track the content of text inputs or private interactions.
- Don't use analytics to pressure readers or personalize political/social content.
- Do not add tracking simply because a vendor makes it easy.
- Set a retention period and access policy.
- Treat reader privacy as part of editorial trust.

---

## 2. Analytics goals: what we actually want to learn

### A. Reach / discovery

**Questions**
- How many readers arrive?
- How do they discover the site?
- Which stories get attention?
- Which channels or campaigns drive visits?

**Metrics**
- Visitors (vendor-specific definition)
- Pageviews
- Landing pages
- Referrers/source/medium
- Campaign traffic
- Story views per published story
- Search traffic, where available and appropriately configured

**Use**
Understand distribution and discoverability. Do not equate reach with quality.

### B. Narrative engagement

**Questions**
- Do readers progress beyond the opening?
- Which chapters or scenes retain attention?
- Are they reaching the central reveal or evidence?
- Are they abandoning before a key context section?

**Metrics**
- Scroll-depth distribution (e.g. 25%, 50%, 75%, 100%)
- Chapter/scene reached
- Story-specific key scene reached
- Active/engagement time, if available and measured responsibly
- Completion proxy

**Use**
Diagnose story pacing and structure. These signals cannot prove that readers understood, agreed with, or remembered the story.

### C. Interactive engagement

**Questions**
- Are interactive elements being used?
- Are they useful or confusing?
- Does a map, timeline or comparison contribute to the story?

**Metrics**
- Interactive module viewed (only if view visibility is meaningful)
- Interaction started
- Interaction completed or meaningful action
- Optional controls activated
- Source/detail panel opened
- Audio explicitly started
- Map/timeline control used (coarse event only)

**Use**
Compare interaction engagement to its narrative purpose, not to maximize interaction counts.

### D. Return readership

**Questions**
- Are readers returning to another story?
- Does the weekly publishing rhythm build a habit?
- Do readers discover the archive?

**Metrics**
- Returning visitors, if the analytics product provides a privacy-preserving definition
- Visits by week
- Stories per visit
- Archive views
- Cross-story navigation
- Newsletter/social follow click-throughs (only if these links exist and the event is useful)

**Use**
Look at trend direction over time; avoid overly precise individual-level retention claims when the tool does not identify users.

### E. Technical quality

**Questions**
- Is the site usable on phones?
- Does heavy media hurt performance?
- Are errors or broken routes affecting readers?

**Metrics**
- Core Web Vitals
- Device/browser breakdowns at an aggregate level
- 404s
- Failed embeds or media where measurable without collecting excess data
- Load/performance metrics
- Deployment regressions

---

## 3. Vanity metrics vs useful metrics

| Vanity / misleading | Better question or signal |
|---|---|
| Raw pageviews alone | Which stories attract meaningful readership? |
| Average scroll depth alone | Which chapters/scenes are reached, and where is drop-off? |
| “Time on site” without context | How long is the page actively in focus, and is that measurement reliable? |
| Interaction count | Did an interaction support understanding? |
| Follower count | Are followers actually discovering stories and returning? |
| Viral traffic spike | Did it reach the intended audience? Did readers find the story useful? |
| Bounce rate treated as failure | Did the landing page answer the reader's question? |
| Completion percentage as “understood” | Did the narrative reach the intended end? Comprehension requires different evidence. |

A metric becomes useful only when connected to a question and an action. Avoid building dashboards that reward attention without understanding.

---

## 4. Scroll depth: use it carefully

Plausible supports scroll-depth tracking and page-level scroll-depth reports. It can also configure scroll-depth goals. This can help see whether readers reach the lower portions of a story. Sources 1, 5, 6.

### Proposed thresholds
- 25% — opening/context
- 50% — middle of the narrative
- 75% — later evidence/reveal
- 100% — page end

### Limitations
- Story lengths vary.
- A page can be long because of interactive scenes rather than text.
- Scrolling does not equal reading.
- Fast scrolling, browser resizing and dynamic content affect interpretation.
- Readers may skip to a specific section.
- Reaching 100% doesn't prove they read the sources or understood the story.

**Recommendation:** use scroll depth as a coarse signal and complement it with chapter/scene progression for important stories.

---

## 5. Story-level event taxonomy

Keep the taxonomy small, stable and documented. Events should describe a reader's meaningful interaction, not capture every movement.

### Proposed core events

| Event | When | Purpose |
|---|---|---|
| `story_view` | Story page loaded/entered | Reach |
| `story_chapter_reached` | Chapter becomes visible or is entered | Narrative progression |
| `story_scroll_threshold` | Selected threshold reached | Coarse scroll progress |
| `story_interaction_start` | Reader meaningfully begins a module | Interaction engagement |
| `story_interaction_complete` | Reader finishes the module's key action | Module usefulness signal |
| `story_source_open` | Source link clicked | Evidence exploration |
| `story_audio_start` | Reader opts into audio | Audio feature use |
| `archive_search` | Search submitted | Content discovery |
| `language_switch` | Reader changes language | Localization demand |
| `story_share_click` | Share action clicked | Distribution intent |
| `external_link_click` | Selected external link clicked | Outbound behavior |
| `not_found_view` | 404 page shown | Broken route monitoring |

### Event properties (allowlisted)

Only coarse, non-identifying values, such as:
- `story_id`
- `story_category`
- `chapter_id`
- `module_type` (map/timeline/chart/comparison)
- `threshold` (25/50/75/100)
- `language`
- `link_type` (source/social/other)
- `device_class` only if useful and aggregate

### Never send

- Name, email, phone or account identifiers
- Full IP addresses
- Free-text search queries by default (these may reveal sensitive interests)
- User-entered content
- Political, religious, health or other sensitive inferred attributes
- Raw URL query strings that may contain personal data
- Exact geolocation
- Full content of clicked source links as custom properties
- Persistent cross-site identifiers

---

## 6. Chapter and scene measurement for scrollytelling

Viraaasat stories are cinematic, scroll-driven experiences. A single scroll metric won't explain the narrative.

### Recommended method

For each story, map its narrative sections:

| Chapter/scene | Editorial purpose | Measurement |
|---|---|---|
| Opening | Hook | Reach / view |
| Context | Establish baseline | Chapter reached |
| Evidence | Present facts | Chapter reached |
| Reveal | Core insight | Chapter reached |
| Human perspective | Ground narrative | Chapter reached |
| Interactive scene | Explore | Interaction started/completed |
| Synthesis | Reframe | Chapter reached |
| Sources | Transparency | Sources opened |

Use `story_chapter_reached` with a chapter identifier, but avoid firing repeated events on every scroll tick. A chapter should count as reached once per page visit/session according to the chosen implementation. Thresholds and chapter markers should be designed with editorial purpose, not placed arbitrarily.

---

## 7. The analytics dashboard we actually need

### Weekly editorial dashboard

**Top row**
- Visitors
- Story views
- Published stories
- Returning visitors (if supported)
- Referrals

**Story performance table**
- Story title
- Visitors
- 25% reached
- 50% reached
- 75% reached
- 100% reached
- Key chapter reached
- Sources opened
- Interaction rate (only where applicable)

**Discovery**
- Top referrers
- Search/social/direct mix
- Campaign performance
- Archive discovery

**Technical**
- Core Web Vitals
- Device mix
- 404s
- Slow/broken stories

Keep the dashboard focused. Don't create 30 charts just because the analytics tool can.

---

## 8. Metrics definitions and calculations

### Scroll reach rate
\[
\text{Scroll reach rate at }x\% =
\frac{\text{Visits reaching }x\%}{\text{Eligible story visits}}\times100
\]

### Chapter reach rate
\[
\text{Chapter reach rate} =
\frac{\text{Visits reaching chapter}}{\text{Story visits}}\times100
\]

### Interactive engagement rate
\[
\text{Interaction rate} =
\frac{\text{Visits with meaningful interaction}}{\text{Visits where module was eligible/visible}}\times100
\]

### Return visit rate
Use the vendor's definition and timeframe. Do not attempt to reconstruct individual identity if the platform intentionally avoids persistent identifiers.

**Important:** Definitions must be documented. Event counts may count repeated actions while unique visitors/visits are deduplicated differently.

---

## 9. Privacy-first analytics tools

### Plausible Analytics — recommended for Viraaasat

**Why it fits**
- Simple, readable dashboard
- Privacy-focused, cookieless approach according to its documentation
- Scroll depth built in
- Custom events and goals
- Funnels and user journeys
- Outbound link and download tracking
- Lightweight script
- Open source
- Managed hosting or self-hosted Community Edition

Its documentation includes page-level scroll depth, custom goals, event properties and visitor journeys. Sources 1, 2, 5, 6, 7.

**Trade-offs**
- Less advanced analysis than product-analytics platforms
- Paid managed service
- Self-hosting means Viraaasat takes on operations, security, upgrades, uptime and backups
- Vendor privacy claims must be checked against actual configuration and applicable law

### Umami — alternative to evaluate

- Open-source analytics option
- Self-hostable
- Useful if the team wants infrastructure control
- Requires hosting, upgrades, security, backups and maintenance

Evaluate its current privacy behavior, hosting model and feature set before choosing. Don't assume self-hosting automatically means privacy or security.

### Matomo — probably too much initially

- More feature-rich
- Can be self-hosted
- Offers deeper reports and optional tools such as heatmaps and session recordings
- More operational and configuration complexity

Potentially useful if Viraaasat later needs deeper analytics, but likely unnecessary for the initial weekly publishing workflow.

### PostHog — product analytics, not our first need

Useful for product analytics, feature usage, funnels and experimentation. But Viraaasat's main question isn't how to optimize a SaaS onboarding funnel. It is how to improve editorial storytelling.

**Conclusion:** Plausible is the best initial fit for the project's editorial measurement needs. Umami is the self-hosting alternative worth benchmarking.

---

## 10. Privacy principles and configuration

Privacy-first analytics is a design choice, not a vendor label.

### Before selecting a tool, verify:
- What data is collected?
- Does it use cookies?
- Are persistent identifiers used?
- Is IP address stored, processed, or discarded?
- How is visitor data anonymized?
- What data is sent to vendor infrastructure?
- Where is it processed and stored?
- What is the retention period?
- Can data be exported and deleted?
- Is any data shared with third parties?
- What legal obligations apply to Viraaasat and its audience?

### Recommended privacy baseline
- No analytics cookies or persistent identifiers unless genuinely needed and properly governed.
- Avoid session recording and heatmaps at launch.
- No third-party advertising pixels.
- No tracking across sites.
- No sensitive user profiling.
- No free-text analytics collection.
- Minimal event properties.
- Document analytics configuration and privacy notice.
- Reassess if adding forms, accounts, comments or personalization.

A cookieless tool does not automatically exempt a website from every consent, disclosure or privacy obligation in every jurisdiction.

---

## 11. Audience intelligence: what readers tell us indirectly

Analytics can help form hypotheses:

- A story gets lots of visits but low chapter progression → opening may overpromise, story may be too long, or traffic may be poorly targeted.
- A story gets moderate reach but strong depth → audience quality or topic resonance may be high.
- Readers frequently interact with a map → the map may genuinely help, or the interaction may be confusing. Inspect it qualitatively.
- Readers open many source links → evidence presentation may be compelling.
- Archive views increase → readers may be exploring beyond the latest story.
- Returning readership rises after several weekly releases → publishing cadence may be working.

These are **hypotheses**, not causal conclusions. Review the actual story, traffic sources and technical behavior before making changes.

---

## 12. Editorial decisions should never be automated by analytics

Analytics may inform:
- Which story formats to improve
- Whether a visual is too heavy
- Whether an opening scene is confusing
- Which topics readers discover
- Whether the weekly cadence is sustainable
- Whether readers use the archive
- Whether language or accessibility features are in demand

Analytics must not decide:
- Which political view gets more coverage
- Whether a controversial story is “worth telling” purely by clicks
- Whether difficult or complex stories are discarded because they're slower
- Which communities are targeted based on inferred sensitive traits
- Whether editorial nuance is removed to increase retention

**A low-performing story is not necessarily a bad story.**

---

## 13. Performance and user experience measurement

Measure technical performance alongside editorial engagement.

### Core Web Vitals
Use real-user measurements where feasible and privacy-appropriate:
- Largest Contentful Paint (LCP)
- Interaction to Next Paint (INP)
- Cumulative Layout Shift (CLS)

The existing performance mission recommends the standard “good” thresholds at the 75th percentile:
- LCP ≤ 2.5 s
- INP ≤ 200 ms
- CLS ≤ 0.1

Keep page experience from becoming a secondary concern beneath analytics. If a cinematic scene doesn't load on a mobile device, engagement data may reflect performance failure rather than editorial quality.

---

## 14. Weekly review ritual

A 30–45 minute review once per week is enough initially.

### Suggested meeting

**1. Audience (5 min)**
- How many people found the site?
- Where did they come from?

**2. Stories (10 min)**
- Which stories are most read?
- Which story has strong progression?
- Any surprising pattern?

**3. Narrative (10 min)**
- Where do readers drop?
- Is the chapter placement or scroll pacing likely contributing?
- Does an interaction support the story?

**4. Technical (5 min)**
- Performance
- 404s
- Failed media
- Mobile issues

**5. Actions (10 min)**
- Pick at most 1–3 improvements.
- Record the hypothesis.
- Implement and observe.

Avoid checking real-time analytics repeatedly. A weekly rhythm creates distance and reduces reactive decisions.

---

## 15. Experimentation: learn without turning stories into clickbait

Experiments can be useful, but only when they answer a legitimate design question.

Good questions:
- Does a shorter intro help readers reach the story's first evidence section?
- Is the language switcher easier to find in the header?
- Does a static map fallback work better on mobile?
- Does an annotated chart clarify a point?

Bad questions:
- Which sensational headline gets the most clicks?
- Which emotional manipulation increases completion?
- How can we keep readers scrolling regardless of value?

### Suggested experiment process
1. State the question.
2. Record the current behavior.
3. Change one meaningful thing.
4. Define the success signal in advance.
5. Review the outcome and caveats.
6. Keep or revert.
7. Document what was learned.

Don't overinterpret small sample sizes. A few dozen visitors can generate noisy data.

---

## 16. Implementation recommendation

### Launch stack

- **Analytics:** Plausible (managed service as default candidate)
- **Page tracking:** story routes, archive, homepage
- **Scroll depth:** coarse thresholds, optionally built-in
- **Events:** small, documented taxonomy
- **Dashboard:** weekly editorial view
- **Privacy:** no personal identifiers, no session recording, no ad trackers
- **Review:** weekly, not daily obsession

### Proposed event map

```text
Site
├── page_view
├── story_view
├── story_chapter_reached
├── story_scroll_threshold
├── story_interaction_start
├── story_interaction_complete
├── story_source_open
├── story_audio_start
├── archive_search
├── language_switch
├── story_share_click
├── external_link_click
└── not_found_view
```

Start with only a subset. Every event should have a written purpose before implementation.

---

## 17. Research sources

1. **Plausible Analytics Documentation** — https://plausible.io/docs  
   Pageviews, scroll depth, goals, funnels, user journeys, sources, reports, and custom events.

2. **Plausible Scroll Depth Tracking** — https://plausible.io/docs/scroll-depth  
   How scroll depth is reported and how threshold goals can be configured.

3. **Plausible Metrics Definitions** — https://plausible.io/docs/metrics-definitions  
   Definitions of time on page, scroll depth, exit rate, funnels, user journeys and custom properties.

4. **Plausible Open Source Repository** — https://github.com/plausible/analytics  
   Product philosophy, self-hosted and managed versions, privacy approach and feature details.

5. **Plausible Custom Event Goals** — https://plausible.io/docs/custom-event-goals  
   Event tracking, event names and properties, goals and conversion reporting.

6. **Plausible Pageview Goals** — https://plausible.io/docs/pageview-goals  
   Page path goals, filters and page grouping.

7. **Plausible Goal Conversions** — https://plausible.io/docs/goal-conversions  
   Goals, custom events, funnels, user journeys and conversion tracking.

8. **Google Analytics — Engagement Rate and Bounce Rate** — https://support.google.com/analytics/answer/12195621  
   GA4's definition of engaged sessions and engagement rate. Useful as a comparison, not necessarily the metric set Viraaasat should adopt.

9. **Google Analytics — User Engagement** — https://support.google.com/analytics/answer/11109416  
   How engagement time is defined and sent in GA4.

10. **Privacy-first Analytics Platforms (comparison)** — https://www.itechguides.com/privacy-first-analytics-platforms-7-options-and-how-to-choose/  
    Comparison of simpler privacy-focused tools and more comprehensive analytics products. Vendor feature claims should be verified directly.

11. **Plausible — Privacy-friendly analytics selection guide** — https://plausible.io/privacy-friendly-web-analytics  
    Privacy criteria such as data collection, storage, processing and vendor incentives. This is a vendor-authored guide and should be read critically.

---

## Final takeaway

**Measure the experience, not the person.**

Viraaasat needs to understand whether its stories reach people, whether its narrative works, whether interactive scenes add value, whether readers return, and whether the site performs well.

It does not need to know who each reader is.

The analytics system should be small, privacy-respecting, editorially useful—and quiet enough that the stories remain the focus.
