# Viraaasat Research 16
## Internationalization, Multilingual India & Localization Architecture

**Mission:** Define a scalable, editorially respectful multilingual strategy for Viraaasat—language and script support, translation workflows, localization architecture, typography, metadata, URLs, language switching, testing and phased rollout.

**Research distinction:** The sources below provide technical standards and examples. The rollout and editorial recommendations are Viraaasat-specific decisions derived from them.

---

## 1. Why multilingual is foundational

India is multilingual and multiscript. Language and script are not interchangeable: one language may be written in more than one script, and multiple languages may share a script. W3C's Indic layout work highlights script-specific requirements for shaping, syllable boundaries, line breaking, Unicode normalization, spacing, and collation. C-DAC GIST also documents Indian language web representation, Unicode, CLDR, CSS formatting and directionality. (Sources 1–4)

**Implication:** Do not bolt language support onto the site after the visual system and content model are fixed. Make room for it in the story schema, design tokens, routing and QA now—even if initial publication is English-only.

---

## 2. Internationalization (i18n) vs localization (l10n)

- **Internationalization (i18n):** Build the product so it can support multiple languages/scripts and locale-specific behavior without rewriting core code.
- **Localization (l10n):** Adapt the content and experience for a particular language, locale and audience—translation, editorial choices, typography, formatting, labels and navigation.

Treat this as an engineering foundation plus an editorial process. A technically translated interface is not automatically a culturally or linguistically sound story.

---

## 3. Viraaasat's phased language strategy

Do not promise ten languages before the team can responsibly produce and review them.

### Proposed rollout

**Phase 0 — English-first, localization-ready**
- English remains the launch content language.
- Story records have locale-aware structure.
- URLs and metadata are prepared for language variants.
- Test samples in Hindi, Marathi and additional scripts early, before building full content translations.

**Phase 1 — Hindi**
- Pilot interface and a small selection of evergreen or high-value stories.
- Human translation and editorial review.
- Establish terminology and translation style guide.

**Phase 2 — Marathi**
- A meaningful first regional language due to team/local context and Maharashtra audience potential.
- Do not assume Marathi can simply reuse Hindi text, typography or language settings.

**Phase 3 — Expand by reader value and editorial capacity**
- Select languages using audience evidence, story relevance, translator/reviewer capacity, community consultation and quality—not just a language checklist.
- Consider Bengali, Tamil, Telugu, Kannada, Gujarati, Malayalam, Punjabi, Odia, Urdu and others when support can be maintained.

This is a recommendation, not a requirement to launch each phase on a fixed date.

---

## 4. Language is not script: content model must reflect the distinction

Use language tags such as BCP 47/Unicode locale identifiers where appropriate. Examples:

- `en` — English
- `hi` — Hindi
- `mr` — Marathi
- `ta` — Tamil
- `ur` — Urdu

Do not hard-code a simplistic `language = script` assumption. Hindi and Marathi typically use Devanagari, but language identity, spelling, vocabulary and editorial voice remain distinct. Urdu generally uses a Perso-Arabic script and right-to-left directionality; directionality should be handled by content/markup, not manual character reordering.

W3C language-tag guidance emphasizes matching locale preferences and fallback, and correctly marking inline language changes. C-DAC and Indian localization guidance discuss script rendering and RTL handling. (Sources 1, 2, 5, 6)

### Technical rules
- Store text as Unicode.
- Do not store transliterated text as a substitute for original script.
- Preserve original language/source when translating quotes.
- Use explicit language metadata for story and inline text.
- Use proper bidi handling for mixed-script text; don't force direction with visual hacks.
- Use Unicode normalization consistently where search, comparison or indexing needs it.
- Avoid letter-spacing rules that break Indic shaping.
- Test punctuation, conjuncts, matras, ligatures, diacritics and mixed Latin/script lines.

---

## 5. Translation is a new editorial version, not a button

### Recommended content model
Each story has a canonical identity and independent language versions.

```ts
type Story = {
  id: string;
  slug: string;
  availableLocales: Locale[];
  defaultLocale: Locale;
  translations: Record<Locale, StoryTranslation>;
};

type StoryTranslation = {
  title: string;
  deck: string;
  author?: string;
  chapters: Chapter[];
  captions?: Caption[];
  altText?: Record<string, string>;
  sources: Source[];
  status: "draft" | "review" | "published";
  translatedFrom?: Locale;
  translator?: string;
  reviewer?: string;
  updatedAt?: string;
};
```

This is illustrative TypeScript—not a finalized project schema. Keep translation records linked to a canonical story so language variants remain aligned while each translation has its own editorial status and update history.

### Translation workflow
1. Original story approved.
2. Translation brief prepared (audience, tone, terms, context).
3. Translator creates draft.
4. Native/fluent reviewer checks meaning and naturalness.
5. Fact-check key claims, names, dates and numbers against source story.
6. Editorial review checks local context and unintended phrasing.
7. UI and typography review in the actual language.
8. Publish variant; track version and source story updates.

### What must be translated
- Headline, deck and body
- Navigation, menus, controls, buttons, errors
- Captions and credits where appropriate
- Chart/map labels, legends, data tables and annotations
- Alt text and accessibility labels
- Audio transcript and descriptions
- Metadata and share previews
- Footnotes, corrections and source explanations
- Interactive instructions and loading/empty states

Do not translate only the article text while leaving the rest of the experience in English.

---

## 6. Translation quality: preserve meaning, not sentence shape

A Viraaasat translation should preserve:
- Meaning and factual claims
- Nuance, uncertainty and qualifications
- Tone (curious, candid, non-preachy)
- Cultural references with appropriate explanation
- Source attribution and quotations
- Units, dates, numbers and data scope

It need not preserve:
- Word order
- Metaphors that don't work in the target language
- English sentence length
- Idioms that sound unnatural when translated literally

### Editorial safeguards
- No machine translation should publish without review.
- Keep names, titles, places and technical terms in a terminology glossary.
- Review regional, caste, community, religious, political and cultural terms with care and context.
- For sensitive topics, use a second reviewer independent of the translator where feasible.
- Record whether the story is translated, adapted or separately authored.
- Avoid representing one language's readers as a homogeneous audience.

Automated translation may be a drafting aid in future, but it is not a substitute for editorial responsibility.

---

## 7. Multilingual typography: design for scripts, not just glyph coverage

A font that technically contains characters may still render a script poorly. Indic writing systems have specific shaping and line-layout requirements. W3C Indic Layout Requirements describes syllable segmentation, line breaking, spacing, letter-spacing and other requirements. (Source 3)

### Font candidates to test

**Anek**
- A multi-script variable type family supporting nine Indian scripts plus Latin.
- Designed collaboratively across scripts with shared visual qualities while retaining script-specific features.
- Its broad script coverage and weight/width axes make it useful to investigate for editorial/display and UI roles. (Sources 7, 8)

**Mukta**
- Humanist multi-script family supporting Devanagari, Gujarati, Gurmukhi, Tamil and Latin.
- Designed to harmonize across scripts without allowing one to dominate; useful as a potential reading/UI family, but test it for each intended language. (Sources 9, 10)

**Noto Sans / script-specific Noto families**
- Broad script support and a practical fallback/testing baseline.
- Government Digital Brand Identity guidance recommends Noto Sans scripts for regional language government content. That guidance is evidence of a public-sector recommendation, not an automatic mandate for Viraaasat. (Sources 11, 12)

### Typography decision
Do not automatically replace the locked Viraaasat English identity. Preserve Cormorant Garamond + Manrope + IBM Plex Mono for English where they perform well. Create script-specific font stacks and editorial hierarchy for each supported language; matching across scripts is a design goal, not a forced identical look.

---

## 8. Layout expansion and responsive design

Translated text may be longer or shorter than the source. Design must tolerate expansion.

- Never size buttons, cards, tabs or navigation solely for English labels.
- Allow headlines to wrap; avoid fixed-height title containers.
- Ensure chapter titles and metadata can occupy additional lines.
- Recheck pinned and scroll-driven scenes: text expansion must not collide with motion.
- Reflow charts and legends; avoid tiny labels.
- Test mobile first, then desktop.
- Do not assume line breaks from English remain appropriate.
- Avoid clipping or truncating meaningful text.
- RTL language variants require layout and control-direction testing, not merely flipping text alignment.

---

## 9. Language switcher UX

### Recommended placement
- Header: consistent, prominent language control.
- Story page: language selector near story title/metadata and/or accessible in the global header.
- Use language names in their own scripts where possible, not flag icons.

Example labels:
- English
- हिन्दी
- मराठी
- தமிழ்
- বাংলা
- ગુજરાતી
- తెలుగు
- ಕನ್ನಡ
- മലയാളം
- ਪੰਜਾਬੀ
- ଓଡ଼ିଆ
- اردو

### Switching behavior
1. Keep the reader on the equivalent story when that translation exists.
2. Preserve chapter/section context if reasonably possible.
3. If translation is unavailable, don't silently pretend the switch succeeded.
4. Offer the available language version and clearly label the current language.
5. Never auto-redirect solely because of IP or inferred ethnicity/location.
6. Optionally suggest a language based on browser preference, but let the user decide and remember the choice only transparently.

### Avoid
- Country flags as language labels (languages are not countries).
- Abbreviations alone such as `EN | HI | MR` where unfamiliar users can't interpret them.
- Hiding the language selector in deep settings.
- Forced language changes.
- Unclear “translate” controls that imply machine translation when content is human-reviewed.

Government Digital Brand Identity toolkit recommends a visible language selector, ideally in a consistent header position, and language metadata on pages. (Source 13)

---

## 10. URLs, SEO and language identity

### Recommendation
Use distinct URL paths for published language variants. Example:

```text
/en/stories/monsoon-and-the-city
/hi/stories/monsoon-and-the-city
/mr/stories/monsoon-and-the-city
```

These are examples only; final routing should be decided during implementation.

Benefits:
- A shareable link identifies the language.
- Translation can have its own metadata and publication state.
- Search engines and crawlers can discover language variants.
- Readers can bookmark and return to the same version.
- Analytics can distinguish language-specific content performance.

Keep a canonical story ID separate from the localized slug. Localized slugs may be readable in native script or transliterated, but choose a policy consistently. Stable URL mapping is more important than forcing a language-specific slug format.

For multilingual URLs and discoverability, evaluate hreflang/alternate links and sitemap entries during Research 10 implementation follow-up. This mission is about architecture, not a complete SEO specification.

---

## 11. Dates, numbers, units, sorting and locale formatting

Use locale-aware formatting instead of manually hard-coding formats.

JavaScript's `Intl` APIs and CLDR-backed locale data can help format:
- Dates and times
- Numbers and grouping
- Currency
- Units
- Relative time
- Collation and sorting

### Important editorial rule
Formatting may vary by locale, but data meaning must not change. A translated story may use a familiar unit or number convention only if conversion is exact, documented and does not obscure the original figure. For data stories, consider showing both local display and source unit.

Test:
- Indian number grouping (e.g., lakh/crore conventions where appropriate)
- Decimal separators
- Date formats
- Currency labels and symbols
- Unit conversions
- Sorting names and search results
- Digit-shape preferences when applicable

W3C and Unicode CLDR document locale identifiers, number formats, digit shapes, collation, calendars and other locale behavior. (Sources 5, 6)

---

## 12. Multilingual maps, charts and interactive components

Language is not an overlay—it affects the visualization.

- Map place labels may need local language and transliteration.
- Legends and controls need translation.
- Chart annotations may become longer and need responsive positioning.
- Timeline labels can expand.
- Number formatting may change.
- Search terms and names need multilingual support.
- Data-source labels remain identifiable; don't translate official dataset titles beyond clear contextual rendering.
- Keep original names where necessary, with translated explanation.
- Alt text and textual summaries should exist for each localized visualization.
- Avoid relying on color or glyphs that behave differently across scripts.

For complex interactive scenes, review each language variant as a separate QA target.

---

## 13. Search and content discovery across languages

### Search should be language-aware
- Index localized story versions separately, linked to the same canonical story.
- Support native script input.
- Consider transliteration search only as a complementary layer.
- Avoid treating transliteration as canonical content.
- Preserve diacritics/marks appropriately while testing normalization.
- Use locale-aware sorting where applicable.
- Search should return results in the user's chosen language, then show clearly labeled alternatives.

For an early MVP, simple title/tag/body search across published variants may be enough. Add transliteration or fuzzy search when the collection size and user behavior justify it.

---

## 14. Accessibility and language metadata

- Set the document language correctly on every page.
- Mark inline passages in a different language.
- Use language-aware screen-reader pronunciation where supported.
- Provide transcripts and captions in the language of the audio, plus translation when available.
- Language-switch controls must be keyboard accessible.
- Avoid text embedded in images.
- Ensure focus order and layout work in LTR and RTL.
- Test screen readers, font fallback, zoom and line wrapping.

W3C internationalization guidance states that language metadata affects processing such as rendering, spell checking, line-breaking, voice production, translation and information retrieval. (Sources 5, 6)

---

## 15. Translation status and reader transparency

Each language variant should carry a visible status internally:

- `original`
- `translation-draft`
- `translation-review`
- `published`
- `needs-update`
- `unavailable`

Readers should only see `published` versions. When the original story changes significantly, affected translations should be flagged for review.

### Reader-facing labels (where helpful)
- “Original story in English”
- “Translated and reviewed in Hindi”
- “Marathi edition”
- “Translation updated: [date]”

Avoid misleading claims such as “perfect translation” or generic “AI translated” labels. Be precise about human review and update status.

---

## 16. Translation and localization QA matrix

Test a representative set before releasing a language:

| Area | Test |
|---|---|
| Language identity | Correct `lang` and locale metadata |
| Typography | Shaping, conjuncts, matras, punctuation, font fallback |
| Headline | Long/short, wrapping, no clipping |
| Body | Long paragraphs, mixed English/Indic terms |
| Quotes | Accurate, source linked, translation reviewed |
| Navigation | Labels fit and are understandable |
| Controls | Keyboard and screen reader labels |
| Charts | Labels, units, legends, annotations |
| Maps | Place labels, names, controls |
| RTL | Directionality, mixed numbers/Latin text, control order |
| Search | Native script input and result matching |
| Share | Localized metadata/preview |
| Mobile | Small viewport, portrait/landscape, touch |
| Motion | Expanded text doesn't break pinned scenes |
| Accessibility | Zoom, contrast, keyboard, screen-reader review |
| Content QA | Claim fidelity, context, terminology, reviewer sign-off |

Build a QA fixture page containing a short sample in every script we intend to support. Use realistic text, not only isolated glyphs, because shaping and line-break problems appear in combinations.

---

## 17. Proposed architecture for Viraaasat

### Principles
- Canonical story identity is language-neutral.
- Every language version has its own content, metadata, status and editorial lifecycle.
- UI strings live in localization dictionaries, not inline components.
- Stories use locale-specific assets and captions where required.
- Language support is explicit and visible.
- Translation status is tracked.
- No forced language redirection.
- Original and translated versions link to each other.

### Suggested repository shape (conceptual)

```text
src/
  i18n/
    locales.ts
    routing.ts
    formatters.ts
    messages/
      en.json
      hi.json
      mr.json
  stories/
    registry.ts
    monsoon-and-the-city/
      story.ts
      locales/
        en/
          content.mdx
          metadata.ts
        hi/
          content.mdx
          metadata.ts
        mr/
          content.mdx
          metadata.ts
      assets/
  components/
    LanguageSwitcher.tsx
    LocalizedLink.tsx
```

This is a proposal, not a requirement to create all files now.

---

## 18. Viraaasat multilingual promise

> We do not treat language as a translation layer added at the end. Stories should be written, translated, reviewed and designed with the people who read them in mind. We preserve meaning and nuance, respect scripts and language-specific typography, and make each published version understandable in its own context. Language choice belongs to the reader.

---

## 19. Research sources

1. **Government of India — Best Practices for Localization of e-Governance Applications in Indian Languages**  
   https://egovstandards.gov.in/sites/default/files/2021-07/Best%20Practices%20for%20Localisation%20of%20e-Governance%20Applications%20in%20Indian%20Languages%20Ver5.7.pdf  
   Unicode, storage/rendering, CLDR, input, CSS, directionality, localization workflow and terminology.

2. **Government of India — Best Practices for Localization of Mobile Web Applications in Indian Languages**  
   https://egovstandards.gov.in/sites/default/files/2021-07/Best%20Practices%20for%20Localization%20of%20Mobile%20Web%20Applications%20in%20Indian%20Languages.pdf  
   Indian language localization, mobile web, Unicode, CLDR, CSS and RTL handling.

3. **W3C — Indic Layout Requirements**  
   https://www.w3.org/TR/Indic-req/  
   Script-specific text layout, Unicode normalization, segmentation, line breaking, spacing and collation.

4. **C-DAC GIST — Language Standardization Research**  
   https://www.cdac.gov.in/index.aspx?id=mlc_gist_standardisation  
   Indian language representation, Unicode, CLDR, formatting and directionality.

5. **W3C — Internationalization Best Practices for Spec Developers**  
   https://www.w3.org/TR/international-specs/  
   Language metadata, inline language changes, BCP 47 tags and internationalization patterns.

6. **W3C — Language Tags and Locale Identifiers for the Web**  
   https://www.w3.org/TR/ltli/  
   Locale identifiers, script/region subtags, canonicalization and CLDR/Intl framework.

7. **Google Design — Anek: Multiple Scripts for Multilingual India**  
   https://design.google/library/anek-multiscript  
   Multiscript design, collaborative type design, 10-script family and visual equity.

8. **Ek Type — Anek**  
   https://github.com/EkType/Anek  
   Variable type-family, weight/width axes, nine Indic scripts plus Latin.

9. **Google Fonts — Mukta**  
   https://fonts.google.com/specimen/Mukta  
   Multi-script family design and font specimens.

10. **Google Design — Mukta and Indian Type Design**  
    https://design.google/library/new-wave-indian-type-design  
    Multiscript typography, script-specific visual needs, design principles.

11. **Digital Brand Identity Manual (DBIM) — Multilingual support**  
    https://dbimtoolkit.digifootprint.gov.in/dbim-chapters?slug=content  
    Language selector visibility, language metadata and Indian multilingual web experience.

12. **Digital Brand Identity Manual — Noto Sans scripts**  
    https://dbimtoolkit.digifootprint.gov.in/static/uploads/2025/11/03a34d4eb92afc50f48800511d22c297.pdf  
    Script-specific font guidance for regional languages in government websites.

13. **DBIM Toolkit — Improving multilingual visibility**  
    https://dbimtoolkit.digifootprint.gov.in/dbim-chapters?slug=content  
    Language selector placement and page language metadata.

---

## Final takeaway

**Viraaasat should not merely translate India. It should make India accessible through the languages in which people experience it.**

Start small enough to maintain quality. Architect broadly enough not to trap the project in English-only assumptions. Preserve the original voice, invest in human review, respect every script, and let readers choose their language.
