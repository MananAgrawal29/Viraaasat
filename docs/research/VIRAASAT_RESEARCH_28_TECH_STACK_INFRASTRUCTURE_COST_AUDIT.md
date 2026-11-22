# Viraaasat Research 28 — Technology Stack Audit, Infrastructure Choices & Long-Term Technical Cost

**Date:** 22 November 2026  
**Project:** Viraaasat.in  
**Purpose:** Turn the earlier research into a practical technology decision set for a three-person team building a cinematic, interactive India storytelling publication.

---


## Executive recommendation

Viraaasat should be **content-first, statically delivered wherever practical, progressively enhanced, and story-specific at the experience layer**. Avoid introducing a backend, CMS, account system, or heavy infrastructure until a demonstrated editorial need justifies it.

### Proposed launch stack

| Layer | Recommendation | Decision |
|---|---|---|
| UI | React + TypeScript | Keep |
| Build/dev | Vite | Keep; fast, straightforward static build |
| Styling | CSS variables/tokens + CSS Modules or a restrained utility approach | Use brand tokens; don't lock every story into one layout |
| Motion | GSAP + ScrollTrigger, with CSS for simple motion | Primary motion toolkit; native scroll remains in control |
| Content | MDX or Markdown in the repository | Start Git-native; content review happens with PRs |
| Routing | React Router or lightweight routing | Keep simple; story routes must be stable and direct-loadable |
| Charts | D3 for bespoke data-driven experiences; native SVG/CSS for simple charts | Add only per story; avoid a chart library for one simple graphic |
| Maps | MapLibre GL JS only when a story truly needs interactive geography | Use a licensed, attribution-compliant tile/data source; provide a non-map alternative |
| 3D | Three.js / React Three Fiber / Drei selectively | Story-only; lazy load; never a homepage default |
| Search | Pagefind after enough archive content exists | Static index; avoid a server search service at launch |
| Analytics | Plausible Analytics or another privacy-conscious, minimal tool | Confirm privacy configuration and cost before install |
| Hosting | Cloudflare static hosting (Pages or current Workers static-assets workflow) | Primary low-operations option for Vite output; verify platform's current recommended path before deployment |
| DNS/security | Cloudflare DNS, HTTPS, carefully configured security/cache rules | Keep registrar access and recovery secure; no overbroad caching rules |
| Image handling | Responsive image sizes, modern formats, explicit dimensions, lazy loading below fold | Use self-hosted/licensed files initially; introduce an image service only if workflow/scale demands it |
| Newsletter | Choose a dedicated newsletter provider after evaluating price, exportability, consent, unsubscribe, and India compliance needs | Do not build email infrastructure yourself at launch |
| Forms | Hosted or simple form endpoint with spam protection and minimal data collection | Avoid custom backend unless required |
| CI/QA | GitHub Actions for checks/build; PR preview deployment | User/team remains in control of Git actions and release decisions |

---

## 1. Architecture: static-first, not static-only

### Why
The first version is primarily a public editorial website. Stories, images, interactive modules, and most navigation do not require per-request server rendering. A static build can be delivered through a CDN, reducing operations and cost. A static approach can still use client-side React for interactive scenes and call third-party services or an API later when needed.

### Proposed shape

```text
Reader
  |
  v
Cloudflare edge / static host
  |
  +-- Viraaasat shell (HTML, CSS, JS)
  +-- Story routes (build-time generated or statically served)
  +-- Images / video posters / fonts (optimized, licensed)
  +-- Story modules (lazy-loaded)
  |
  +-- Optional external services (newsletter, analytics, submissions)
```

**Do not add a custom server by default.** Introduce server-side functionality only for a clear requirement such as private data, user accounts, secure form processing, or content workflows that static files cannot support.

---

## 2. Frontend and build system

### React + TypeScript + Vite — keep

This combination is a good fit for a small team building custom narrative experiences. Vite provides the build/dev workflow, React provides component composition, and TypeScript helps keep story modules and shared UI contracts maintainable.

**Rules for implementation:**
- Use semantic HTML; interactions must work without requiring animation.
- Use story-level code splitting. Heavy map, chart, and 3D modules should load only for the stories that need them.
- Don't turn the project into an SPA that unnecessarily downloads every story module on first visit.
- Keep story-specific visual choreography local; reuse primitives and editorial patterns, not entire narrative layouts.
- Provide static fallbacks for interactive visualizations.
- Ensure nested story URLs load directly and refresh correctly on the hosting platform.

### Styling

Use the locked design tokens as CSS custom properties. Pick one consistent component styling strategy and avoid mixing multiple systems without a reason. CSS Modules or a light utility approach are both workable; the decision should be based on the repo's current setup and team familiarity rather than novelty.

**Avoid:** adding a large component library that forces the archive/editorial experience into generic SaaS patterns.

---

## 3. Motion stack

### GSAP + ScrollTrigger — recommended

GSAP timelines and ScrollTrigger are suitable for Viraaasat's scroll choreography: reveal sequences, pinned scenes, scrubbed timelines, horizontal panels, image masks, and transitions. The official docs describe trigger, pin, scrub, snap, responsive configuration, and refresh behavior.

**Use the following hierarchy:**
1. CSS transitions/animations for simple hover, focus, fade, and micro-interaction.
2. Intersection Observer for one-time visibility/reveal cases where a full timeline isn't needed.
3. GSAP for complex coordinated sequences and scroll-linked scenes.
4. Native scrolling stays intact. No scroll-jacking.

**Engineering requirements:**
- Respect `prefers-reduced-motion` and offer static states.
- Scope GSAP work and clean it up when React components unmount.
- Avoid pinning on small screens when it harms reading or navigation.
- Don't animate layout properties unnecessarily; prefer transform and opacity.
- Test resize/refresh behavior; ScrollTrigger calculates trigger positions and may need refresh when layout changes.
- Make motion optional for essential information: the story remains readable with motion disabled.

**Source:** GSAP ScrollTrigger docs — https://gsap.com/docs/v3/Plugins/ScrollTrigger/ ; GSAP overview — https://gsap.com/docs/v3/

---

## 4. Content system and CMS decision

### Launch: Markdown/MDX in Git

For a three-person editorial team with custom story layouts, repository-native content is the simplest first system. It allows source review, version history, corrections, preview deployments, and custom story structures without paying for or maintaining a CMS.

Recommended approach:
- Keep each story's metadata and text structured and easy to review.
- Use MDX only where embedded React components or expressions are intentionally needed; remember MDX is executable content and should only be trusted/reviewed.
- Maintain the story template as guidance, not a mandatory visual template.
- Store claim/source ledger, asset-rights register, and story brief with each story or in clearly linked records.
- Treat publishing as a reviewed deployment, not merely a content save.

### When to reconsider a CMS

Re-evaluate if the team experiences a persistent problem with:
- Nontechnical editing or publishing bottlenecks
- Editorial review/approval workflow
- Managing many contributors or localized versions
- Repeated metadata/content duplication
- Asset organization and reuse
- Scheduled publishing

**Possible future options:** Decap CMS (Git-based), Sanity (hosted structured content), or another CMS that meets the real workflow. Don't migrate because the site has a certain number of stories alone; migrate because the workflow hurts.

---

## 5. Hosting decision

### Primary recommendation: Cloudflare static hosting

For a Vite static build, Cloudflare's static hosting and edge delivery are a strong low-cost, low-operations fit. The precise product pathway (Pages versus Workers with static assets) should be verified against current Cloudflare guidance at the time deployment; the ecosystem is evolving and Cloudflare now emphasizes Workers for new application workflows.

**Advantages:**
- Static assets can be served without maintaining an application server.
- CDN delivery and DNS/security capabilities in one ecosystem.
- Low-cost path for an editorial site with mostly static pages.
- Can add edge/server functionality later if a real need appears.

**Cautions:**
- Don't assume every feature is free or unlimited. Functions, compute, image processing, and other services can have quotas/pricing.
- Verify SPA routing, direct story-route refresh, redirects, cache headers, and preview behavior.
- Keep platform-specific features isolated to make future migration easier.

### Alternatives

| Provider | Use when | Watch-outs |
|---|---|---|
| Vercel | Team prefers its polished Git/preview workflow or later adopts Next.js | Plan limits, usage billing, image/function costs; verify plan eligibility for the project |
| Netlify | Team prefers its workflow/forms/previews for static editorial projects | Usage/credit and feature plan details change; review current limits |
| GitHub Pages | Simple documentation/project page | Not the preferred platform for a more interactive publication, operational/business needs, or advanced routing |
| AWS/S3/CloudFront | Team already knows AWS or has a reason to control infrastructure | More configuration and operational responsibility than needed at launch |

**Cost rule:** choose the host for the actual rendering model, not a hypothetical future application. Viraaasat does not currently need SSR merely to make stories immersive.

---

## 6. Domain, DNS, and security

### Domain and access
- Keep the domain registered under a trusted registrar account with MFA.
- Enable registrar lock where appropriate and keep recovery codes securely stored.
- Maintain at least two trusted team recovery paths, without sharing personal credentials.
- Keep registrar, DNS, hosting, analytics, email, and GitHub ownership documented.
- Avoid losing domain control due to a single person/account dependency.

### Baseline protections
- HTTPS everywhere.
- Redirect canonical host consistently (`www` or apex; choose one).
- Security headers: CSP, HSTS, `X-Content-Type-Options`, Referrer Policy, and Permissions Policy as appropriate.
- Start CSP in report-only mode where practical, then tighten and enforce after testing.
- Don't embed secrets in frontend environment variables or client bundles.
- Avoid rendering untrusted HTML. Review MDX carefully because it can execute code.
- Keep dependencies, lockfile, and CI permissions reviewed.
- No user accounts, uploads, or comments at launch unless there is a specific requirement and threat model.

---

## 7. Images, video, and media delivery

Images are likely to be Viraaasat's largest performance and rights-management concern—not the hosting framework.

### Launch workflow
1. Source an image/asset and verify item-level rights.
2. Record source, creator, license, required attribution, permitted edits, restrictions, and story placement.
3. Edit only within the integrity policy.
4. Export suitable sizes and formats (modern formats where browser support and pipeline allow).
5. Provide responsive variants using `srcset`/`sizes` or equivalent.
6. Set width, height, or aspect ratio to avoid layout shifts.
7. Prioritize the first-screen hero image; lazy-load later imagery.
8. Use video posters, captions/transcripts, and user-controlled playback; no sound autoplay.
9. Test image and media weight on mobile and slower networks.

### Don't buy an image CDN immediately
Self-host optimized assets on the static host initially. Consider Cloudflare Images, a dedicated image CDN, or another managed pipeline if image processing, transformations, workflow, or traffic makes the service worth its cost. Review pricing, storage, delivery, cache behavior, rights, and portability before adopting.

### Recommended media principles
- Keep originals and rights records safely stored.
- Don't put huge original files in the user-facing build if optimized variants are sufficient.
- Avoid background video as default decoration.
- Use preload sparingly; preload only media that is clearly critical to the initial experience.

---

## 8. Maps and geospatial data

Use maps only when geography contributes to the story's meaning.

### Recommended choices
- **MapLibre GL JS:** modern interactive vector-map renderer when custom map interaction/style is needed.
- **Static map / SVG / custom illustration:** for a simple geographic explanation; often lighter and easier to make accessible.
- **D3 or native SVG:** for a bespoke geographic diagram that is not a navigable map.

### Map rules
- Confirm map tile, boundary, imagery, and dataset licensing separately.
- Show attribution and date/scale/data limitations.
- Avoid maps implying precision where boundaries or data are disputed or uncertain.
- Provide a text-based location list or table alternative.
- Load map code and assets only on the relevant story.
- Avoid requiring a reader to drag/zoom to obtain the main finding.

MapLibre documentation: https://maplibre.org/maplibre-gl-js/docs/

---

## 9. Charts and data storytelling

### Recommendation: use the smallest tool that can express the insight
- Native HTML/CSS/SVG for simple diagrams or small chart types.
- D3 when a bespoke, data-driven visualization is justified.
- Don't load D3 across the entire site if only one story uses it.
- Provide the same data in a table or text summary.
- Keep data source, definition, denominator, date, method, and caveat near the graphic.
- Don't use animation to hide data or force conclusions.

For charts, prioritize narrative clarity, responsive behavior, keyboard and screen-reader access, and static alternatives over novelty.

---

## 10. 3D and WebGL

### Keep Three.js/R3F in the toolbox—not in the default bundle

Use 3D only where spatial understanding materially improves the story: architecture, terrain, infrastructure, historical reconstruction (clearly labeled), or a physical system.

**Rules:**
- Lazy-load the entire 3D route/module.
- Start with a poster/static fallback and loading/error states.
- Reduce texture size, geometry, lights, shadows, and draw calls according to device capability.
- Pause or reduce rendering when offscreen or idle.
- Test low-end mobile and battery/thermal behavior.
- Never make essential information depend on a WebGL scene.
- Clearly label reconstructions, simulations, and conceptual imagery.

---

## 11. Analytics

### Recommendation: Plausible as an initial candidate

The previous Viraaasat analytics research recommended Plausible as an initial privacy-conscious analytics option. Before launch, verify the current plan/pricing, privacy configuration, event support, retention, and legal requirements. Cloudflare Web Analytics is also a candidate if simplicity and platform consolidation matter.

Use a small, defined event list only:
- Story viewed
- Chapter reached
- Interactive module started/completed
- Source opened
- Newsletter signup completed
- Story shared
- Language switched (when available)

Don't use session replay, invasive heatmaps, ad pixels, persistent cross-site IDs, or sensitive profiling at launch. Analytics should answer editorial questions—not drive outrage or narrow coverage.

Plausible: https://plausible.io/
Cloudflare Web Analytics: https://www.cloudflare.com/web-analytics/

---

## 12. Newsletter and email

Use a specialist service for newsletter delivery rather than implementing mail infrastructure. Shortlist services only after comparing:
- Subscriber and sending-volume pricing
- Exportability and portability
- Signup confirmation/consent tools
- Unsubscribe compliance and suppression lists
- Domain authentication (SPF, DKIM, DMARC)
- Templates and design control
- India-specific legal/privacy requirements
- Ease of integrating with the website

Don't collect newsletter emails in a custom database at launch unless the team is prepared to secure, maintain, and operate it.

---

## 13. Search

### Launch: no complex search engine

A small archive can be browsed through categories, dates, tags, and curated featured stories. If the archive becomes large enough for search, Pagefind is a good static-site candidate: build-time indexing, no search server to operate, and can be loaded on demand.

Search should support sensible story titles, categories, tags, and eventually multilingual normalization. Don't add search merely to make the homepage look more complete.

---

## 14. Forms and reader participation

For launch, the team needs only a correction/contact route and, if useful, a simple story suggestion form.

**Requirements:**
- Ask for the minimum information needed.
- Avoid collecting sensitive personal information.
- Provide a clear purpose and privacy explanation.
- Protect against spam and malicious input.
- Don't allow direct public uploads initially.
- Set realistic expectations about response time.
- Use a maintained form provider or small, secure endpoint rather than building a bespoke backend prematurely.

---

## 15. CI, preview, and quality gates

Use GitHub Actions or the existing repo's CI to automate:
- Dependency installation with lockfile integrity
- Type-checking
- Linting
- Unit tests where meaningful
- Production build
- Link/route checks where practical

Each story PR should have a preview deployment. Review the preview on desktop and mobile before publishing. Keep deployment secrets minimal, review workflow permissions, and pin actions to trusted versions/SHA where practical.

**Release tests:**
- Direct load and refresh on story URLs
- Navigation and back/forward
- Mobile and tablet layouts
- Reduced motion
- Keyboard-only navigation and focus
- Contrast and readable text
- Images and fonts loading/fallback
- Map/chart alternatives
- 404 and redirects
- Canonical metadata, social previews, title/description
- Performance on throttled network
- Production smoke test after deployment

---

## 16. Cost audit: keep the initial recurring bill near zero

### Cost categories to budget

| Category | Launch posture | Cost risk |
|---|---|---|
| Domain | Already purchased/annual renewal | Fixed annual renewal; registrar-dependent |
| Static hosting/CDN | Free tier or low-cost plan, subject to terms | Traffic, builds, functions, provider limits |
| DNS/security | Free baseline where appropriate | Paid features or operational needs later |
| Image delivery | Optimized self-hosted assets | Storage/bandwidth or image processing at scale |
| Analytics | Free/low-cost tier after verification | Paid traffic/feature tiers |
| Newsletter | Free tier while small, if appropriate | Subscriber count/sending volume/plan limits |
| Form provider | Free/low-cost tier | Submissions, spam, advanced integrations |
| Maps | Avoid paid tiles at launch unless essential | Requests, provider pricing, attribution/license conditions |
| 3D | No separate service; client-side assets | Development, media size, bandwidth, hardware performance |
| Monitoring | Basic/free tools | Paid uptime/performance monitoring as needs grow |
| Paid software | Use existing tools first | Seat-based recurring fees can accumulate |

**Budget recommendation:** set a team-approved monthly ceiling before subscribing to anything. Review every recurring charge quarterly. Never select a service without understanding its free-tier restrictions, billing unit, overage policy, export options, and cancellation path.

This is not a price quote. Vendor prices, free tiers, and terms change; verify the official current pricing pages before commitment.

---

## 17. What we should not build yet

Do not launch with:
- User accounts or profiles
- A custom CMS
- Backend API solely for story content
- Database for static stories
- Comment system or forum
- Reader uploads
- Full-text search service
- Recommendation engine
- Custom email delivery infrastructure
- Complex personalization
- Universal 3D globe or map on the homepage
- A bespoke animation framework
- Session replay or ad tracking
- Multiple analytics platforms
- Paid image CDN before proving the need

These are not banned forever. They are postponed until an actual problem justifies their complexity.

---

## 18. Architecture principles for long-term maintainability

1. **Story-first:** the story owns the narrative and choreography.
2. **Shared foundations:** reuse tokens, typography, accessible controls, metadata, and common editorial elements.
3. **Progressive enhancement:** static content first; interactions enhance it.
4. **Lazy by default:** heavy modules load only when needed.
5. **Portable content:** keep story text, sources, and media records exportable and not locked to a proprietary CMS.
6. **Minimal services:** each third-party dependency has an owner, purpose, cost, and exit plan.
7. **Graceful failure:** content still works if analytics, maps, newsletter, or WebGL fail.
8. **Accessible motion:** no essential content behind animation.
9. **Performance budget:** set budgets per story, particularly for hero media and heavy modules.
10. **Cost awareness:** monitor both money and founder time.

---

## 19. Recommended implementation order

### Foundation
- Confirm the repo stack and build pipeline.
- Define design tokens and shared shell.
- Implement routes, metadata, 404, navigation, archive skeleton.
- Set up preview deployment and CI.

### Editorial primitives
- Story header, deck, metadata, reading column, chapter headings, captions, credits, quotes, source list, correction note.
- Reading progress and chapter navigation only if they improve usability.

### Motion foundation
- Motion utilities and reduced-motion policy.
- A small set of reliable patterns; don't create a motion framework.

### Story modules
- Add one timeline/map/chart module at a time, driven by the first story's actual needs.
- Create abstractions only after a second use confirms the pattern.

### Launch story
- Complete source ledger and fact review.
- Asset rights register.
- Narrative and scene plan.
- Build, test, and preview.

### Launch readiness
- Accessibility, mobile, performance, security, links, metadata, corrections route, privacy, newsletter, production check.

---

## 20. Stack decisions — final proposed status

### Adopt now
- React + TypeScript + Vite
- CSS tokens / restrained component styling
- GSAP + ScrollTrigger for complex motion
- MD/MDX in Git
- Static-first CDN hosting
- GitHub CI and PR preview
- Responsive, optimized self-hosted media
- Privacy-conscious analytics candidate (Plausible; verify)

### Use selectively
- D3
- MapLibre
- Three.js / React Three Fiber / Drei
- Pagefind
- Newsletter provider
- Form provider
- Image CDN

### Postpone
- CMS migration
- Backend/database
- Accounts
- Comments/community platform
- Search service
- Personalization
- Paid media processing services
- Advanced monitoring stack

---

## 21. Decision checklist before any new dependency

Before installing or subscribing to a new tool, answer:

- What specific Viraaasat problem does it solve?
- Can we solve it with the current stack or a smaller native feature?
- Is it needed for the next story or only a hypothetical future story?
- What is the performance impact on the initial page?
- What is the cost now and at likely growth?
- What data does it collect or process?
- Is the licensing/usage appropriate?
- How will we maintain it?
- Can we export or replace it later?
- Who owns the dependency and monitors changes?

If the benefit isn't clear, don't add it.

---

## 22. Sources and verification notes

The recommendations combine prior Viraaasat research and current web research. The sources below are vendor/technical references and comparison material; they should be revisited before purchase or deployment because product names, pricing, free tiers, and guidance can change.

1. GSAP ScrollTrigger documentation — https://gsap.com/docs/v3/Plugins/ScrollTrigger/ — official capabilities, triggers, pinning, scrubbing, responsive behavior, refresh and cleanup considerations.
2. GSAP documentation — https://gsap.com/docs/v3/ — core animation APIs and capabilities.
3. Cloudflare Workers static-assets migration guidance — https://developers.cloudflare.com/workers/static-assets/migration-guides/vercel-to-workers/ — platform evolution and static-asset deployment/migration context.
4. Vercel pricing — https://vercel.com/pricing — current plan/usage details; verify before choosing.
5. MapLibre GL JS docs — https://maplibre.org/maplibre-gl-js/docs/ — interactive map rendering; underlying tiles/data still require their own licensing and terms.
6. Plausible Analytics — https://plausible.io/ — candidate analytics vendor; verify current plan, features, and privacy configuration.
7. Cloudflare Web Analytics — https://www.cloudflare.com/web-analytics/ — alternative analytics candidate.
8. Pagefind — https://pagefind.app/ — static search candidate.
9. MDX — https://mdxjs.com/ — Markdown with JSX; treat as trusted code in the content pipeline.
10. React — https://react.dev/ — UI framework documentation.
11. Vite — https://vite.dev/ — build tooling documentation.

### Current-web findings used in this mission
- Static Vite/React builds can be hosted as static files; a server runtime is not necessary for a static SPA, but routing behavior and any API needs must be configured correctly. Hosting comparison evidence is secondary; validate official platform docs for final decisions.
- Cloudflare is evolving its application platform; its current Workers/static-assets migration docs support treating Workers as the current platform direction while Pages remains relevant. Confirm the deployment path for Viraaasat at implementation time.
- Vercel's official pricing page currently lists Hobby at $0/month and Pro at $20/month (shown in USD, taxes excluded); this is a comparison point, not a recommendation to upgrade. Review account eligibility and usage details.
- GSAP ScrollTrigger supports scroll-linked animation, pinning, scrubbing, snap, responsive setup, and trigger refresh; Viraaasat should use these selectively, with native scroll and reduced-motion alternatives.

---

## Final recommendation

**Viraaasat's first version should be a fast, static-first editorial publication with React, Vite, TypeScript, MDX/Markdown, GSAP for selective cinematic motion, and Cloudflare delivery. D3, MapLibre, and Three.js are story-specific tools, not global dependencies. Start without a CMS, backend, database, accounts, search server, or paid image CDN.**

Spend the team's complexity budget on the reporting, art direction, narrative, and interactive experience of each story—not on infrastructure that the publication does not yet need.
