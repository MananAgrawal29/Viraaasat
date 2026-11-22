# Viraaasat Research 39 — Pre-launch Audit

**Date:** 22 November 2026  
**Mission:** 39/40  
**Scope:** Audit the project’s researched foundations, identify launch blockers and unresolved decisions, and create a practical go/no-go checklist before implementation and launch.  
**Important:** This is a *readiness framework and audit of planning decisions*. It is not an inspection of the current codebase, live site, deployed infrastructure, actual legal documents, or content assets. Those will need to be verified during implementation.


## Executive assessment

Viraaasat has a strong foundational direction and a broad set of research decisions. The main remaining risk is **execution drift**: trying to implement too many ambitious features before the first story, allowing visual complexity to overwhelm editorial quality, or launching without clear operational ownership.

### Recommended status

- **Direction:** Ready to enter implementation, subject to the team's final decisions.
- **Scope:** Keep the first release intentionally small.
- **Editorial:** Do not launch without at least one fully researched, fact-checked, rights-cleared story approved by the team. Story 01 remains unselected until the team decides.
- **Experience:** Cinematic, but content must remain readable and usable without motion, WebGL, sound, or unusually powerful devices.
- **Technical:** Static-first, search-friendly, progressive enhancement, mobile-first QA.
- **Operations:** Three-person team; establish a realistic cadence based on measured effort rather than a weekly promise.
- **Marketing:** Prepare story-specific distribution, but don't let launch promotion delay publication quality.


## 1. Readiness audit — foundational decisions

| Area | Research direction | Audit conclusion | Status |
|---|---|---|---|
| Purpose | Help people understand India through nuanced, evidence-driven stories | Clear | Ready |
| Editorial identity | Curious, candid, balanced; neither patriotic propaganda nor reflexive cynicism | Clear | Ready |
| Brand | Premium cinematic/editorial visual system | Direction set | Ready |
| Logo | Minimal editorial/archival direction; logo not decided | Decision needed | Open |
| Story selection | Team owns selection; assistant recommends, not decides | Governance clear | Ready |
| Story format | Bespoke, immersive, scroll-led experience | Framework established | Ready |
| Homepage | Story-first publication architecture | Proposed, not necessarily final | Team review |
| Topic taxonomy | Broad topic categories proposed | Needs final editorial approval | Team review |
| Publishing cadence | Flexible; sustainability over public weekly promise | Agreed direction | Ready |
| Monetization | Bootstrap first; no early paywall or intrusive advertising | Direction set | Ready |
| Audience growth | Story-led distribution and outreach | Strategy researched | Ready |
| Tech stack | Static-first React/Vite/TypeScript approach, with story-specific tools | Direction set | Validate in implementation |
| Hosting | Low-cost static hosting candidate | Provider and configuration must be selected | Open |
| Analytics | Privacy-conscious minimal analytics | Tool/configuration to decide | Open |
| CMS | Begin repo-native content workflow; reassess when friction justifies CMS | Direction set | Ready |
| Multilingual | English first, localization-ready; future language pilots | Direction set | Ready |
| Legal | Privacy, copyright, defamation, DPDP-related compliance research completed | Actual policy/legal review still needed | Open |
| Accessibility | WCAG 2.2 AA as target, not a claimed certification | Test plan required | Open |
| SEO | Search-friendly, crawlable story pages; sitemap and metadata | Implementation required | Open |
| Security | Least privilege, MFA, secret protection, dependencies, headers | Configuration and testing required | Open |
| Asset rights | Rights ledger, provenance, credits, no AI photoreal documentary substitutes | Process established | Must apply per asset |
| Team operations | Three people with flexible role-sharing and review | Workflow proposed | Team confirmation |


## 2. Launch scope audit — what belongs in v1

### Must ship

1. Homepage with clear identity and featured story.
2. Stories index/archive with real published stories.
3. Individual story pages with unique stable URLs.
4. Story text accessible and readable outside animated sequences.
5. Responsive mobile layout deliberately designed for small screens.
6. About page describing purpose and team/publication identity.
7. Editorial standards and sourcing/fact-check approach.
8. Corrections/contact route that actually reaches the team.
9. Privacy notice that matches actual data collection.
10. Copyright/credits and media attribution handling.
11. SEO basics: title, description, canonical, social preview, sitemap, robots rules.
12. Analytics only if privacy configuration and event plan are ready.
13. Custom 404 page and basic error states.
14. HTTPS, deployment, and a documented rollback/recovery path.
15. At least one story fully reviewed, fact-checked, and cleared for publication.

### Defer unless the first story truly requires it

- Accounts, profiles, user-generated content, comments, community platform.
- Complex CMS or editorial admin dashboard.
- Full-text search if the launch archive is small.
- Advanced personalization or recommendation systems.
- Multi-language launch if translation and native editorial review are not ready.
- 3D/WebGL on the homepage as a default experience.
- Complex newsletter automation or CRM.
- Paid subscriptions, memberships, or ad systems.
- Large story catalog placeholders.
- General-purpose interactive builder that over-abstracts story modules.

**Scope rule:** An item can be brought into launch scope only when the team can explain why it materially improves the reader's understanding or the publication's ability to operate.


## 3. Story release gate

A story cannot be marked launch-ready merely because the animation and page are finished.

### Editorial and evidence
- [ ] The central question and story angle are explicitly approved by the team.
- [ ] The title, deck, and framing are approved.
- [ ] Key factual claims are recorded in a claim/source ledger.
- [ ] Major claims are corroborated or their uncertainty is disclosed.
- [ ] Data definitions, timeframes, units, and limitations are visible where relevant.
- [ ] Historical interpretations are distinguished from established facts.
- [ ] Sensitive allegations have appropriate corroboration, context, and response handling.
- [ ] Story has been peer-reviewed by someone other than its primary author.
- [ ] Corrections/update procedure is available.

### Narrative and experience
- [ ] Story outline is complete before expensive animation begins.
- [ ] Each chapter has a purpose, question, evidence, visual, and transition.
- [ ] The sequence is coherent with motion disabled.
- [ ] Interactions add understanding, not just novelty.
- [ ] No scroll hijacking or trapping of the reader.
- [ ] The reader can pause, replay, skip, or revisit interactive states where appropriate.
- [ ] A static or reduced-motion alternative exists for every essential animated insight.
- [ ] Mobile has been composed as its own experience, not merely resized.
- [ ] Reading length and scroll distance are not artificially inflated by pinning.

### Assets and rights
- [ ] Each photograph, video, sound, illustration, data source, map, or archive item has an asset ledger entry.
- [ ] Rights, license, permitted use, creator, source URL, credit and restrictions are verified.
- [ ] Consent has been obtained where needed.
- [ ] Reconstructions, illustrations, simulations, and generative assets are clearly labelled.
- [ ] AI-generated photorealistic imagery is not presented as documentary evidence.
- [ ] Credits are included at the relevant placement or in an accessible credits section.
- [ ] Asset exports are optimized, responsive, and sized appropriately.


## 4. Site-wide content and editorial integrity checks

- [ ] No placeholder copy, lorem ipsum, test stories, draft content, or temporary links are exposed.
- [ ] All titles, names, dates, facts, credits, and captions are proofread.
- [ ] Homepage claims are supported and not misleading.
- [ ] About page describes the publication honestly.
- [ ] Editorial standards page is published and reflects actual practice.
- [ ] Corrections page/process is reachable and understandable.
- [ ] Funding/independence information is truthful and current.
- [ ] Contact or feedback route works and has a responsible owner.
- [ ] Sources and methods are present for every story that needs them.
- [ ] Related story links point to real published content, not empty placeholders.
- [ ] All navigation, footer, and in-content links are checked.
- [ ] All visible buttons and controls do something useful.
- [ ] No false urgency, clickbait, or misleading thumbnail/caption framing.


## 5. UX, mobile, and accessibility gate

### Manual checks
- [ ] Complete the main reader journey using keyboard only.
- [ ] Visible keyboard focus is present and unobscured.
- [ ] Navigation is usable without hover.
- [ ] Text remains readable at zoom and reflow.
- [ ] Text contrast is checked for body, metadata, captions, and interactive states.
- [ ] Meaning is not conveyed by color alone.
- [ ] Informative images have meaningful alternative text; decorative images are handled appropriately.
- [ ] Charts/maps/interactive graphics have text explanations or alternatives.
- [ ] Video has captions and/or transcript appropriate to the content.
- [ ] Audio is opt-in; never autoplay sound.
- [ ] Reduced-motion preference is respected.
- [ ] Motion does not cause essential content to disappear or become inaccessible.
- [ ] Touch targets are comfortably usable on mobile.
- [ ] Sticky and pinned scenes do not cover text or controls.
- [ ] Screen-reader reading order matches the intended story order.
- [ ] Test at least one screen reader/browser pairing.

### Device/browser checks
- [ ] Small mobile viewport.
- [ ] Typical mobile viewport.
- [ ] Tablet viewport.
- [ ] Desktop/laptop viewport.
- [ ] Current Chrome/Chromium.
- [ ] Safari/WebKit if available.
- [ ] Firefox if available.
- [ ] Low-powered/mobile device or throttled CPU/network test.

Accessibility target: work toward WCAG 2.2 AA. Do not publish a blanket compliance claim without an appropriate assessment. Automated audits are helpful but do not replace manual review.


## 6. Performance and technical gate

### Core targets
Use these previously established targets as launch goals, assessed on key page templates and preferably mobile conditions:
- **LCP:** ≤ 2.5 seconds
- **INP:** ≤ 200 milliseconds
- **CLS:** ≤ 0.1

These are Core Web Vitals good thresholds; laboratory tests can provide early diagnostics, while field data may take time and may not be available for a new site.

### Checklist
- [ ] Production build succeeds from a clean checkout.
- [ ] Lockfile and supported runtime versions are documented.
- [ ] No critical console errors on key routes.
- [ ] No unhandled network failures for required assets.
- [ ] Images use responsive sizing/appropriate formats and reserve dimensions.
- [ ] Hero/LCP assets are prioritized appropriately.
- [ ] Below-the-fold media is lazy-loaded where appropriate.
- [ ] Video is not loaded at full cost before the reader needs it.
- [ ] Animation uses efficient properties and is profiled on representative devices.
- [ ] No unnecessary persistent `will-change` or costly full-screen effects.
- [ ] Heavy 3D modules load progressively and have a fallback.
- [ ] Story remains useful if WebGL is unavailable.
- [ ] Third-party scripts are minimized.
- [ ] Cache headers/compression are reviewed for production assets.
- [ ] Test with a constrained network and CPU profile.
- [ ] Lighthouse or similar reports are recorded for homepage and story template.


## 7. SEO and discoverability gate

- [ ] Every public route has a unique, accurate title.
- [ ] Every public route has a useful description.
- [ ] Each story has a stable, human-readable URL.
- [ ] Canonical URLs are correct.
- [ ] Open Graph and social preview metadata exist and are tested.
- [ ] Story body text exists as crawlable page content—not only inside canvas or animation.
- [ ] Navigation and internal links use crawlable links.
- [ ] `robots.txt` does not accidentally block launch content.
- [ ] Sitemap includes only canonical, intended-to-index public URLs.
- [ ] Sitemap is referenced and ready for Search Console submission.
- [ ] No staging `noindex` directive remains on launch pages.
- [ ] Structured data, if used, accurately represents the content.
- [ ] Images have descriptive filenames and context-appropriate alt text.
- [ ] 404 page returns appropriate status behavior.
- [ ] Redirects are intentional and do not create chains/loops.
- [ ] Google Search Console is verified, if available, and sitemap submitted.
- [ ] Search visibility is not treated as guaranteed or instant.


## 8. Security, privacy, and legal gate

- [ ] HTTPS is enabled and HTTP redirects to the canonical HTTPS host.
- [ ] Hosting, domain, GitHub and other accounts have MFA enabled where possible.
- [ ] Team access follows least privilege.
- [ ] No secrets, tokens, `.env` files, private keys, or credentials are committed or deployed.
- [ ] Secret scanning/dependency audit is run.
- [ ] Dependencies are current enough and known vulnerabilities reviewed.
- [ ] Public error pages do not expose stack traces, paths, or secrets.
- [ ] Security headers are reviewed for the deployment environment.
- [ ] Privacy policy reflects actual analytics, contact, newsletter, and third-party behavior.
- [ ] No unnecessary tracking/cookies are included.
- [ ] Contact submissions have a retention and access plan.
- [ ] Terms/disclaimers, where appropriate, are reviewed.
- [ ] Copyright and media permissions are checked.
- [ ] Publication risks (defamation, privacy, allegations, sensitive data) are reviewed story-by-story.
- [ ] Team knows who can access inboxes/submissions and how they are secured.


## 9. Deployment, recovery, and operational gate

- [ ] Domain is controlled by the team and renewal is tracked.
- [ ] Production and preview/staging are clearly separated.
- [ ] Production environment variables are documented and secured.
- [ ] Deployment is reproducible.
- [ ] A rollback path is documented.
- [ ] A previous known-good build can be redeployed.
- [ ] A source backup exists; for a static site, repository plus asset backup may be sufficient, but confirm all original media and records are recoverable.
- [ ] A backup/restore exercise is performed for any data or content system that requires it.
- [ ] Uptime or availability monitoring is configured to a level the team can maintain.
- [ ] Error reporting is enabled or a manual log review process exists.
- [ ] A person is assigned to check the site after deployment.
- [ ] Launch-day team communication channel and roles are defined.
- [ ] If a problem occurs, the team knows who makes the rollback decision.


## 10. Newsletter and audience relationship gate (if included at launch)

- [ ] Signup works on desktop and mobile.
- [ ] Confirmation and unsubscribe flow works.
- [ ] Signup expectations are explicit (frequency/content).
- [ ] Privacy notice explains how email addresses are handled.
- [ ] Data is stored with an appropriate provider and access controls.
- [ ] The first newsletter has been proofread and links tested.
- [ ] No newsletter signup is displayed as functional if it is not connected.
- [ ] If newsletter is deferred, no fake form or dead CTA remains.


## 11. Analytics and privacy-conscious measurement

- [ ] Analytics tool is chosen and configured.
- [ ] Event plan is small and meaningful.
- [ ] Events tested on a real production-like environment.
- [ ] No sensitive or personally identifying event payloads are sent unnecessarily.
- [ ] Analytics does not block reading or story interaction.
- [ ] Team knows who reviews metrics and how often.
- [ ] Metrics are interpreted with context; low traffic or low interaction on one story is not treated as editorial failure.
- [ ] If analytics is deferred, avoid fake dashboard or tracking claims.


## 12. Launch-day runbook

### Before the switch/public announcement
1. Freeze the release candidate.
2. Confirm team sign-off for story, site, legal, assets, and technical checks.
3. Deploy the production candidate.
4. Verify domain and HTTPS.
5. Test homepage and one deep story URL.
6. Test navigation, footer, source links, contact/correction route, newsletter if enabled.
7. Test mobile and reduced motion.
8. Confirm sitemap, robots, canonical, social preview, and indexing settings.
9. Confirm monitoring/error visibility and rollback path.
10. Record the release build/version and known limitations.

### First hours
- [ ] Open homepage and story from a clean browser/session.
- [ ] Test the link from social preview.
- [ ] Verify page load and key assets.
- [ ] Check the story at mobile dimensions.
- [ ] Check contact/feedback submission.
- [ ] Check analytics events if used.
- [ ] Watch for unexpected errors, broken assets, and reports from readers.

### First week
- [ ] Check broken links/404s.
- [ ] Check Search Console coverage/indexing signals (without expecting immediate indexing).
- [ ] Review performance and any real-user signals available.
- [ ] Read feedback and corrections carefully.
- [ ] Check that the team is not overburdened by the cadence.
- [ ] Document what broke, what was missed, and what should change in the next story.


## 13. Go / No-Go criteria

### GO — all must be true
- [ ] The team explicitly approves the launch scope.
- [ ] At least one story is approved and its evidence and media rights are cleared.
- [ ] Core pages and routes are functional.
- [ ] The reader can access the story without essential motion or advanced hardware.
- [ ] Mobile experience is usable.
- [ ] No unresolved critical accessibility, security, or performance issue blocks launch.
- [ ] Public content is accurate, proofread, and has sources/credits where needed.
- [ ] Contact/corrections route works.
- [ ] Privacy/legal pages reflect actual operation.
- [ ] SEO/indexing configuration is correct.
- [ ] HTTPS works.
- [ ] Deployment and rollback/recovery are understood.
- [ ] Team has a named post-launch owner and realistic next steps.

### NO-GO — any one is enough
- A critical story claim is unverified or challenged without resolution.
- Media rights/consent are unclear for a key visual.
- A core reader journey is broken.
- Essential story content is inaccessible without animation or interaction.
- Site is not usable on mobile.
- Secrets are exposed or a serious security issue remains.
- Privacy behavior differs materially from the published policy.
- No one can recover/redeploy the site if launch fails.
- The site still contains draft/test content or misleading nonfunctional controls.


## 14. Priority levels for remediation

### P0 — Launch blocker
Accuracy, rights, broken core routes, accessibility of essential content, privacy/security critical issues, HTTPS, deploy/recovery readiness.\n
### P1 — Fix before or immediately after launch
Metadata/social preview defects, major performance regressions, noncritical layout bugs, missing analytics validation, minor accessibility defects that don't block core use but should be corrected quickly.

### P2 — Post-launch backlog
Enhancements, advanced interactions, search improvements, richer archive, translations, more ambitious motion/3D, advanced marketing automation.


## 15. Team sign-off template

Each launch should record the following in a short release note:

- **Story/edition:**
- **Release candidate/build:**
- **Editorial approval:**
- **Evidence and fact-check approval:**
- **Asset rights/credits approval:**
- **Accessibility review:**
- **Mobile and device review:**
- **Technical/performance review:**
- **Privacy/legal review:**
- **Deployment/rollback owner:**
- **Post-launch monitoring owner:**
- **Known issues accepted:**
- **Go/No-Go decision and date:**


## 16. Research-based conclusions and sources

This audit draws on the completed Viraaasat research missions and current external guidance. The checklist is adapted to Viraaasat's story-first, static-first, cinematic editorial approach; it is not a copy of any single external checklist.


### External references

- Google Search technical requirements: https://developers.google.com/search/docs/essentials/technical
- Google Search Essentials: https://developers.google.com/search/docs/essentials
- Google Search SEO techniques: https://developers.google.com/search/docs/fundamentals/get-started
- Google sitemap guidance: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- Google robots meta specification: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- Website Launch Checklist (Web Standards Consortium): https://webstandardsconsortium.com/checklists/website-launch-checklist/
- Pre-launch website checklist (Apex Logic): https://www.apex-logic.net/news/website-launch-checklist-2026
- Pre-launch QA checklist (Verlua): https://www.verlua.com/resources/pre-launch-qa-checklist
- Website launch checklist (Shipcheck): https://shipcheck.site/guides/website-launch-checklist
- Pre-launch technical checklist (Apex Labs): https://www.apxlabs.tech/insights/pre-launch-technical-checklist
- WCAG 2.2 checklist resources: https://accessible.org/wcag/

### Key sourced takeaways

- Google requires crawl access, a working page, and indexable content for eligibility; eligibility does not guarantee indexing.
- Sitemap submissions help discovery but do not guarantee crawl or indexation.
- Important editorial content should be represented in text, not only in graphic or canvas layers.
- Launch checks should be performed in the final environment, not just development mode.
- Accessibility testing needs both automated and manual checks; keyboard and screen-reader journeys matter.
- A checklist should assign ownership and verify each item, rather than simply marking assumptions as complete.


## Final verdict

**Viraaasat is ready to transition from foundational research into implementation planning and build execution.** The project is not yet launch-ready merely because the research is complete. The next phase should turn the decisions above into an implementation backlog, validate the actual website against these gates, and preserve editorial ownership of every story choice.

The launch bar should be: **a smaller, finished, trustworthy Viraaasat—not a larger unfinished one.**
