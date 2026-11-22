# Research 06 — Typography, Editorial Design & Digital Reading Experience

**Project:** Viraaasat  
**Mission:** Design a typographic and editorial system that feels like a premium documentary-magazine reading experience, while remaining comfortable, responsive, accessible, and multilingual-ready.  
**Status:** Research and recommendations — existing brand typography remains locked unless the project deliberately revisits it.

---

## 1. Research question

**How can Viraaasat feel like a publication worth reading—not merely a visually impressive website?**

Typography is not just choosing fonts. It includes hierarchy, line length, spacing, reading rhythm, composition, script support, loading strategy, and how the reader moves through long-form content.

For Viraaasat, the reading experience should feel like a meeting of:
- A premium editorial magazine
- A cinematic documentary
- A contemporary digital museum
- An Indian archive with a modern voice

The interface must support immersive storytelling without sacrificing the reader's ability to pause, read, skim, navigate, or return.

## 2. Locked type system — keep the brand intact

Viraaasat's current type choices remain locked:

- **Display / editorial headings:** Cormorant Garamond
- **Body / interface:** Manrope
- **Data / metadata:** IBM Plex Mono

This research does **not** propose replacing them. It explores how to use them better and what additional script support may be needed for multilingual content.

### Roles

| Typeface | Primary role | Supporting roles |
|---|---|---|
| Cormorant Garamond | Headlines, chapter titles, large editorial statements | Pull quotes, selected display moments |
| Manrope | Body copy, interface, captions, controls | Decks, explanatory text |
| IBM Plex Mono | Dates, numbers, source metadata | Kicker labels, data values, small technical annotations |

Avoid adding extra type families without a strong, documented reason. A cohesive system usually comes from disciplined roles rather than a large font collection.

## 3. Typography hierarchy

The reader should recognize the level and purpose of content before reading every word.

### Proposed hierarchy

1. **Hero / display title** — expressive, oversized, carefully composed; short lines.
2. **Story title / H1** — strong editorial headline.
3. **Chapter title / H2** — establishes a narrative section.
4. **Subhead / H3** — introduces a specific point.
5. **Body** — comfortable continuous reading.
6. **Deck / standfirst** — concise summary or opening context.
7. **Pull quote** — a human voice or editorial pause.
8. **Caption** — image context, credit, date, location.
9. **Kicker / metadata** — category, chapter, date, reading time.
10. **UI text** — navigation, buttons, selectors and tool labels.

Use semantic heading structure (H1–H6) in the document, not only visual font sizes. Maintain hierarchy and order for assistive technology and navigation.

## 4. Type scales and fluid sizing

Use a deliberate scale, not scattered font-size values. A fluid scale can use CSS `clamp()` so display sizes adapt between viewport widths.

### Starting values (heuristics to test, not rigid standards)

| Role | Desktop starting range | Mobile starting range | Line height |
|---|---:|---:|---:|
| Hero display | 72–144 px | 44–84 px | 0.95–1.10 |
| Story H1 | 56–88 px | 36–56 px | 1.00–1.12 |
| H2 | 40–56 px | 30–42 px | 1.08–1.18 |
| H3 | 26–36 px | 22–30 px | 1.15–1.25 |
| Standfirst / deck | 20–26 px | 18–22 px | 1.4–1.55 |
| Long-form body | 17–20 px | 16–19 px | 1.55–1.75 |
| Caption | 13–15 px | 12–14 px | 1.35–1.5 |
| Metadata | 11–13 px | 11–12 px | 1.3–1.45 |
| Interface | 14–17 px | 14–17 px | 1.35–1.5 |

These are design starting points. Font metrics, actual content, viewport and testing should determine final values. The U.S. Web Design System recommends a comfortable body size, generally at least 16px, and clear readable measures and spacing.  
Source: https://designsystem.digital.gov/components/typography/

### Example fluid CSS tokens

```css
:root {
  --type-display: clamp(3rem, 8vw, 9rem);
  --type-h1: clamp(2.5rem, 5.5vw, 6rem);
  --type-h2: clamp(2rem, 4vw, 3.5rem);
  --type-h3: clamp(1.4rem, 2.4vw, 2.25rem);
  --type-deck: clamp(1.125rem, 1.7vw, 1.625rem);
  --type-body: clamp(1rem, 1.1vw, 1.2rem);
}
```

The final type scale should be centralized in design tokens. Do not scatter one-off values throughout components.

## 5. Reading measure (line length)

Line length is one of the most consequential long-form design choices.

- A useful target for long-form prose is around **60–75 characters per line**.
- The U.S. Web Design System cites a readable range of roughly 45–90 characters, with about 66 as a good long-text target.
- Constrain body width using `ch` where practical, then test with the actual font.
- Avoid long text spanning an entire large desktop viewport.
- Short captions, intro paragraphs and display titles may intentionally have different measures.

### Suggested starting token

```css
.prose {
  max-width: 68ch;
}
```

This is a starting point, not a universal measure. The actual width depends on the font and composition.

Source: https://designsystem.digital.gov/components/typography/

## 6. Line height, paragraph spacing and rhythm

### Body text
- Start around 1.55–1.75 line height for long reading.
- Tune against the actual Manrope size, weight and width.
- Avoid dense paragraphs and large unbroken blocks.

### Headings
- Use tighter leading for large display headlines—often around 0.95–1.15.
- Keep heading line breaks intentional.
- Don't compress multi-line headings until letters collide or reading becomes difficult.

### Paragraph spacing
- Separate paragraphs with space, not first-line indentation.
- Use consistent spacing tokens.
- Give lists enough breathing room.
- Keep headings closer to the content they introduce than to the content above them.

The USWDS guidance recommends clear whitespace relationships, comfortable line height for longer text, and left-aligned text for a predictable reading edge.  
Source: https://designsystem.digital.gov/components/typography/

## 7. Editorial grid and composition

A grid creates structure without forcing every story into a uniform template.

### Desktop
Potential layout patterns:
- **Single-column reading:** narrow, focused long-form.
- **Editorial two-column:** primary story + secondary annotation/aside.
- **Asymmetric split:** image or data occupying a wider column than text.
- **Full-bleed scene:** photography, video, maps or visualizations break the reading grid.
- **Sidebar / marginalia:** sources, captions, notes, timeline details.

### Mobile
- One primary reading column.
- Sidebars become inline notes or collapsible sections only when appropriate.
- Full-bleed imagery may break the reading measure.
- Avoid dense multi-column text.
- Keep captions and controls inside safe margins.

### Suggested grid logic

- Desktop: 12-column grid for layout composition.
- Tablet: 6- or 8-column adaptation, depending on content.
- Mobile: 4-column grid, often with a single main content span.

These grid counts are implementation heuristics, not design mandates. The story's composition should decide how columns are used.

## 8. Reading rhythm: the page as a score

Long-form stories need variation—but variation should be intentional.

### A possible rhythm

1. **Opening scene** — full-bleed photo/video and display title.
2. **Pause** — standfirst or a short editorial statement.
3. **Reading** — focused text.
4. **Visual interruption** — full-bleed image, archival artifact or map.
5. **Reading** — context and explanation.
6. **Interactive moment** — map, chart, timeline or object.
7. **Pause** — pull quote or human voice.
8. **Reading** — evidence, counterpoint and nuance.
9. **Synthesis** — closing statement.
10. **Sources** — transparent, structured references.

Don't use every pattern in every story. Repetition can establish a signature rhythm; variation keeps the reader engaged.

## 9. Headlines, decks and narrative text

### Headlines
- Strong and specific.
- Expressive typography is welcome.
- Avoid excessive length or over-complex line breaks.
- Headlines should not promise a claim the story doesn't substantiate.
- Consider a deliberate break between headline lines, not automatic wrapping alone.

### Deck / standfirst
A short introduction that gives the reader orientation: what the story is about, why now, or what question it explores. Don't repeat the headline.

### Body
- Plain language without flattening complexity.
- Paragraphs with a clear idea.
- Use subheads as wayfinding.
- Avoid excessive bold, italics or all caps.
- Break up dense passages with meaningful visual material, not arbitrary decorations.

### Pull quotes
Use to create a pause, highlight a voice, or mark an important statement. A quote should remain faithful to its source and not be used to make a speaker appear to endorse a different argument.

### Captions
Captions can provide location, date, context, credits and what the reader should notice. They are not just image labels.

### Kicker / metadata
Small uppercase or monospaced labels can work for story number, section, date or reading time—but keep them short, legible and secondary.

## 10. Multilingual India: scripts are not a fallback

Viraaasat may begin in English, but its identity and future content involve India’s many languages and writing systems.

### Requirements
- Use Unicode text, not image-based lettering for normal content.
- Test scripts in actual browsers and devices.
- Check font coverage, shaping, ligatures, punctuation, line breaks and fallback.
- Don't assume that Latin typography rules translate directly to Indic scripts.
- Test mixed-script headlines and paragraphs.
- Allow for different line heights and text expansion.
- Keep layouts flexible enough for translations.
- Make the language choice accessible.

### Multiscript font families to investigate

**Mukta**
- Designed with a shared visual grammar across Devanagari, Gujarati, Gurmukhi, Tamil and Latin.
- Useful when those scripts need to appear together.
- Designed to balance visual harmony while preserving script-specific characteristics.

**Anek**
- Multiscript variable font family covering 10 writing systems including Latin and nine Indic scripts.
- Multiple weights and widths provide flexibility.
- Especially relevant for future Indian-language editorial stories or multilingual campaign assets.

**Noto**
- Broad script coverage and a reliable fallback family.
- Different script-specific and UI variants can help balance vertical metrics in interface versus continuous reading.

Google Design's articles on Mukta and Anek explain the design challenges and collaborative work behind harmonizing scripts without erasing their unique features.  
Sources:
- https://design.google/library/new-wave-indian-type-design
- https://design.google/library/anek-multiscript

Noto's documentation notes that connected and Indic scripts often require more generous line height for continuous reading, while script-specific UI variants can have more compact vertical metrics.  
Source: https://github.com/notofonts/noto-docs/blob/main/docs/website/use.md

## 11. Pairing Latin and Indian scripts

Never assume that two typefaces pair harmoniously because their names, styles or visual weights seem similar.

Test real mixed-script samples, for example:

- English heading with a Devanagari subtitle.
- Hindi body text with Latin numerals and dates.
- Marathi text with English UI labels.
- A name or place written in more than one script.
- A line containing punctuation, numerals, diacritics or transliteration.

Evaluate:
- Relative size and perceived weight.
- Baseline alignment.
- Character density.
- Vertical spacing and line height.
- Script-specific glyph behavior.
- Fallback transitions.
- Readability at mobile sizes.

A multilingual typography system should respect each script's conventions rather than force identical metrics.

## 12. Image, caption and text relationships

### Full-bleed photography
- Use as a chapter transition or emotional anchor.
- Caption and credit remain discoverable.
- Provide appropriate alt text for informative images.
- If an image is purely decorative, use an empty alt treatment.

### Inline image
- Keep it connected to the nearby narrative.
- Avoid placing too many images back-to-back without context.

### Image + text split
- Useful for a person, place or artifact.
- Align to the editorial grid but allow intentional asymmetry.

### Archival artifacts
- Provide source, date, context and limitations.
- Use an annotation layer only when it improves understanding.
- Do not treat reconstructed or illustrative artifacts as primary historical evidence.

## 13. Accessibility and reader control

Typography and editorial layout must support zoom, reflow, contrast, spacing and user preferences.

- Text must resize up to 200% without loss of content or functionality, as required by WCAG 1.4.4.
- Test increased line height, paragraph spacing, letter spacing and word spacing.
- Avoid justified paragraphs that create uneven word spacing.
- Use semantic heading structure.
- Ensure visible keyboard focus.
- Keep links distinguishable beyond color alone.
- Avoid text embedded in images for essential content.
- Ensure the reading layout survives narrow screens and zoom.
- Respect reduced-motion preferences in transitions between chapters.

Indian government web guidelines specifically emphasize Unicode for regional languages, browser testing for layout consistency, resizable text, and avoiding long blocks of uppercase or italic text.  
Source: https://darpg.gov.in/sites/default/files/Guidelines%20for%20Indian%20Govt%20Websites%20-%20GIGW2018_Released%20version%20%281%29.pdf

## 14. Web font performance and implementation

### Font-loading strategy
- Load only the weights and styles actually used.
- Prefer optimized font files and subset where licensing and tooling permit.
- Use variable fonts when they reduce requests and support the needed axes.
- Use `font-display` thoughtfully to avoid invisible text.
- Preload only fonts needed for the initial view; don't preload every family.
- Consider self-hosting for predictable performance and privacy, but check licensing and update workflow.
- Ensure fallback fonts are metric-compatible enough to reduce layout shift.
- Test the experience with slow networks and blocked font requests.

### Variable fonts
Variable fonts can provide continuous weight, width, optical-size or other axes in one file, depending on the family. They can reduce file/request overhead but may still be large; actual bytes transferred, subset coverage and caching matter.

HTTP Archive's 2025 Web Almanac reports increasing variable-font use on the web, including a growth in adoption from 2022 to 2025.  
Source: https://cdn.httparchive.org/v1/static/almanac/ebooks/web_almanac_2025_en.pdf

### CSS architecture
Centralize:
- Font-family stacks.
- Font sizes and fluid scale.
- Weights.
- Line heights.
- Measures.
- Tracking.
- Paragraph spacing.
- Heading spacing.
- Script fallback.
- Responsive adjustments.

Don't scatter typography values throughout components.

## 15. Typography tokens: proposed architecture

Conceptual CSS structure:

```css
:root {
  /* Families */
  --font-display: "Cormorant Garamond", Georgia, serif;
  --font-ui: "Manrope", system-ui, sans-serif;
  --font-data: "IBM Plex Mono", ui-monospace, monospace;

  /* Fluid display */
  --text-display: clamp(3rem, 8vw, 9rem);
  --text-h1: clamp(2.5rem, 5.5vw, 6rem);
  --text-h2: clamp(2rem, 4vw, 3.5rem);
  --text-h3: clamp(1.4rem, 2.4vw, 2.25rem);
  --text-deck: clamp(1.125rem, 1.7vw, 1.625rem);
  --text-body: clamp(1rem, 1.1vw, 1.2rem);

  /* Reading rhythm */
  --leading-display: 1.02;
  --leading-heading: 1.15;
  --leading-body: 1.65;
  --leading-caption: 1.4;

  /* Measures */
  --measure-reading: 68ch;
  --measure-deck: 48ch;
  --measure-caption: 60ch;

  /* Spacing */
  --space-paragraph: 1.15em;
}
```

The values are proposed starting points and must be tested in the actual design.

## 16. Typography testing matrix

Before locking the implemented system, test:

| Test | What to evaluate |
|---|---|
| Long article, desktop | Sustained readability, measure, rhythm |
| Long article, phone | Font size, margins, line breaks |
| Large display title | Scale, line breaks, clipping |
| Short labels | Clarity at small sizes |
| Data labels | Numeral legibility, alignment |
| Captions and credits | Readable but secondary |
| Hindi / Devanagari | Glyph coverage, shaping, line spacing |
| Marathi | Coverage and mixed-script handling |
| Other Indic scripts | Correct fonts, fallback, shaping |
| 200% text zoom | No lost content or functionality |
| Slow network | Font loading and fallback stability |
| Font unavailable | Layout remains usable |
| Reduced motion | Transitions don't interfere with reading |

## 17. Editorial layout components to consider

These are possible building blocks, not a required universal article template:

- `StoryHeader`
- `StoryKicker`
- `StoryTitle`
- `StoryDeck`
- `AuthorByline`
- `StoryMetadata`
- `ChapterHeading`
- `ReadingColumn`
- `EditorialAside`
- `PullQuote`
- `ImageCaption`
- `ImageCredit`
- `Footnote`
- `SourceList`
- `InlineAnnotation`
- `ReadingProgress`
- `ChapterNavigation`

Build components around repeated editorial patterns, but allow stories to compose them differently.

## 18. Research references

### Typography and readability
- U.S. Web Design System — Typography: https://designsystem.digital.gov/components/typography/
- Google Design — How to Choose a Web Font: https://design.google/library/choosing-web-fonts-beginners-guide
- Figma — Typography Fundamentals: https://www.figma.com/resource-library/typography-in-design/
- Typography Handbook — Web typography reference: https://typographyhandbook.com/

### Multiscript and Indian typography
- Google Design — The New Wave of Indian Type: https://design.google/library/new-wave-indian-type-design
- Google Design — Anek Multiscript Font: https://design.google/library/anek-multiscript
- Noto Fonts documentation: https://github.com/notofonts/noto-docs/blob/main/docs/website/use.md
- W3C — Language Enablement Index: https://www.w3.org/TR/2024/DNOTE-typography-20240705/
- Research and Practice in Designing Type for Diverse Writing Systems: https://centaur.reading.ac.uk/109227/1/China_Research%20and%20Practice%20in%20Designing%20Type%20for%20Diverse%20Writing%20Systems%20%20%20%20%20Fiona%20Ross.pdf

### Web fonts and performance
- HTTP Archive — 2025 Web Almanac, Fonts: https://cdn.httparchive.org/v1/static/almanac/ebooks/web_almanac_2025_en.pdf
- Google Fonts: https://fonts.google.com/

### Accessibility and India-specific guidance
- Guidelines for Indian Government Websites (GIGW): https://darpg.gov.in/sites/default/files/Guidelines%20for%20Indian%20Govt%20Websites%20-%20GIGW2018_Released%20version%20%281%29.pdf
- UX4G Handbook: https://www.ux4g.gov.in/assets/img/pdf/UX4G-Hanbook.pdf

## 19. Agent checklist

Before delivering an editorial page or typography-heavy story:

### Hierarchy
- [ ] Clear visual and semantic heading hierarchy?
- [ ] Headline, deck, body and metadata distinct?
- [ ] No excessive font families or weights?
- [ ] Line breaks intentionally composed?

### Readability
- [ ] Body size comfortable?
- [ ] Line length constrained?
- [ ] Line height appropriate?
- [ ] Paragraph spacing consistent?
- [ ] Left alignment used for long reading?
- [ ] Long italic, bold or uppercase blocks avoided?

### Layout
- [ ] Editorial grid is consistent?
- [ ] Text measure preserved on wide screens?
- [ ] Mobile reading column comfortable?
- [ ] Images and captions connected?
- [ ] Asymmetry intentional, not accidental?

### Multilingual
- [ ] Required scripts supported?
- [ ] Unicode text used?
- [ ] Browser/device tests completed?
- [ ] Mixed-script alignment checked?
- [ ] Text expansion and line height handled?

### Accessibility
- [ ] Semantic HTML?
- [ ] Zoom and reflow?
- [ ] Contrast?
- [ ] Keyboard navigation?
- [ ] Focus states?
- [ ] Reduced motion?
- [ ] Content remains usable if fonts fail?

### Performance
- [ ] Only necessary font files/weights loaded?
- [ ] Initial-view fonts prioritized appropriately?
- [ ] Font fallback tested?
- [ ] Layout shift minimized?
- [ ] Licensing checked?

## 20. Recommended decisions

1. Preserve Viraaasat's locked font choices: Cormorant Garamond, Manrope, IBM Plex Mono.
2. Define a formal typography token system rather than scattered CSS values.
3. Use a restrained hierarchy and no more than three primary font families without a strong reason.
4. Start long-form body text around 17–20px desktop and 16–19px mobile; test actual reading comfort.
5. Target approximately 60–75 characters per line for continuous reading; refine based on font and viewport.
6. Use whitespace, line height and chapter composition to create rhythm.
7. Treat the article as a sequence of reading, visual, interactive and pause moments.
8. Preserve India’s multilingual potential: plan script coverage and mixed-script testing early.
9. Treat font loading and fallback as performance and accessibility concerns.
10. Make typography and editorial layout adaptable—not brittle fixed-size designs.

---

## Final principle

**The reader should notice the story, not struggle with the page.**

Typography creates the voice.  
Layout creates the rhythm.  
Whitespace creates the pause.  
Photography creates the atmosphere.  
Evidence creates trust.

Viraaasat's editorial design should bring all five together.
