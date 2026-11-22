# Research 05 — Data Visualization, Charts & Visual Journalism

**Project:** Viraaasat  
**Mission:** Establish a visual-analytics and data-storytelling foundation for evidence-led, interactive India stories.  
**Status:** Research and recommendations — not implementation decisions.

---

## 1. The central question

**How can Viraaasat turn data into a story that people understand, remember, question, and explore—without distorting evidence or overwhelming them?**

A chart is not decoration added after research. It is part of the argument and part of the reader's experience. Strong visualization connects:

1. A question worth answering.
2. Data that can support an answer.
3. A visual encoding suited to that data.
4. A clear interpretation.
5. Context, limitations, and provenance.

Digital.gov's introductory guidance recommends starting with the research question, checking sources, cleaning and exploring data, choosing a visual that matches the question, checking bias, designing accessibly, and testing with the intended audience.  
Source: https://digital.gov/resources/an-introduction-to-data-visualization

## 2. Viraaasat's visual journalism philosophy

### Principles

- **Insight before chart type:** Don't start by asking which chart looks impressive. Start with what the reader needs to understand.
- **One primary message per graphic:** A visualization can support nuance, but its focal point should be clear.
- **Context before interpretation:** Provide units, dates, geographic coverage, definitions, and relevant comparison.
- **Accuracy is part of art direction:** No aesthetic choice should distort the evidence.
- **The chart should stand on its own:** Interactions may reveal detail, but readers should not have to hover or click to understand the main finding.
- **Exploration is optional, not compulsory:** An interactive graphic must still communicate its central takeaway without requiring participation.
- **Cite the data:** Source, method, and limitations should be discoverable.
- **Don't confuse visual complexity with depth:** An uncomplicated chart can carry a complex idea if its framing and annotation are strong.

This aligns with Digital.gov, USWDS, University of Washington accessibility guidance, and research on visual data communication.  
Sources:
- https://digital.gov/resources/an-introduction-to-data-visualization
- https://designsystem.digital.gov/components/data-visualizations/
- https://www.washington.edu/accesstech/dataviz/
- https://journals.sagepub.com/doi/full/10.1177/15291006211051956

## 3. Chart selection: choose by question

Use this quick decision framework before designing a chart.

| The reader needs to… | Strong starting chart | Notes |
|---|---|---|
| Compare categories | Bar / dot plot | Sort where meaningful; direct labels when possible |
| Compare rankings | Horizontal bars | Keep labels readable; emphasize a purposeful subset |
| Show change over time | Line chart | Time should be ordered; preserve honest scale |
| Compare two time periods | Slope chart / paired bars | Limit series; clearly identify endpoints |
| Show distribution | Histogram / box plot / density plot | Explain bins or summary statistics where needed |
| Show relationship | Scatter plot | Avoid implying causation; annotate notable patterns |
| Show part-to-whole | Stacked bars / 100% bars | Use pie/donut only for a small number of categories and simple proportions |
| Show composition changing over time | Stacked area / small multiples | Avoid stacked areas when comparison of middle series is important |
| Show flow or transfers | Sankey / flow diagram | Use only if flows and units are well-defined; can become cluttered |
| Show a process | Diagram / flowchart | A chart may be more appropriate than a statistical plot |
| Show geographic variation | Map | Geographic location is itself relevant; pair with a chart/table for precise comparisons |
| Show uncertainty | Interval/range, distribution, scenario, or annotated uncertainty | Make uncertainty interpretable, not ornamental |
| Show multiple dimensions | Small multiples / carefully chosen linked views | Avoid a single overloaded chart |

This table is a starting point, not a rigid taxonomy. Chart choices should be reviewed against audience, data structure, and intended inference.

## 4. The chart library toolbox

### Recommended default for Viraaasat: D3 + Observable Plot, selectively

**D3**
- Best for custom, art-directed visualization.
- Flexible for bespoke axes, annotations, transitions, unusual layouts, and editorial graphics.
- More implementation work; avoid building a custom chart system unnecessarily.

Official: https://d3js.org/

**Observable Plot**
- Higher-level plotting library built for concise, expressive data graphics.
- Good for standard charts, quick prototypes, and graphics that need thoughtful custom styling without writing all chart infrastructure.
- Consider it for data stories where the chart is not deeply custom.

Official: https://observablehq.com/plot/

### Other options

**Apache ECharts**
- Feature-rich charting library.
- Good for interactive, responsive charts and a wider set of standard chart types.
- Candidate for complex interactive charts when custom D3 would be excessive.

Official: https://echarts.apache.org/

**Vega-Lite**
- Declarative grammar for interactive graphics.
- Useful for specifying chart encodings and interactions in a structured way.
- Strong candidate for repeatable chart patterns and experimentation.

Official: https://vega.github.io/vega-lite/

**Chart.js**
- Straightforward common charts with a relatively approachable API.
- Best suited to conventional charts; may not be the first choice for bespoke editorial storytelling.

Official: https://www.chartjs.org/

**Flourish**
- Useful for prototypes and certain polished data-story formats without custom engineering.
- Evaluate embed, branding, export, access, and licensing constraints before adopting in production.

Official: https://flourish.studio/

### Recommendation

Do not install all chart libraries. Start with **D3 for bespoke visuals and Observable Plot for simpler plots**, then introduce another library only when a specific story or implementation need justifies it.

## 5. Narrative visualization: author-led story and reader-led exploration

Narrative visualization sits on a spectrum between a story controlled by the author and exploration controlled by the reader.

The research framework from Segel and Heer describes narrative genres including magazine-style graphics, annotated charts, partitioned posters, flow charts, comic strips, slideshows, and video, with combinations of narrative structure and interactivity.  
Paper: https://vis.stanford.edu/files/2010-Narrative-InfoVis.pdf

### Viraaasat's preferred story patterns

#### A. Annotated chart
One main graphic, with labels and editorial annotations explaining the important moments.

Best for:
- A clear finding.
- A trend that needs context.
- A surprising comparison.

#### B. Scroll-led chart sequence
The visualization remains in view while narrative chapters change the highlight, scale, annotation, or data state.

Best for:
- A gradual revelation.
- A sequence of connected insights.
- A story with a strong editorial arc.

#### C. Interactive explorer
Readers filter, select, compare, or inspect the data.

Best for:
- Regional comparisons.
- Multiple categories.
- Questions readers may approach differently.

#### D. Small multiples
Several consistent charts arranged together to compare regions, periods, or categories.

Best for:
- Comparisons that are difficult to understand in one combined chart.
- Avoiding visual clutter.

#### E. Data + human story
A chart establishes the pattern; photography, interviews, reporting, or case studies reveal what that pattern means to people.

Best for Viraaasat's editorial identity: evidence and human context together.

#### F. Data portrait / poster
A single designed visual containing a structured collection of statistics, comparisons, labels, and annotations.

Best for:
- A compact overview.
- A shareable editorial graphic.
- A concluding synthesis.

## 6. A repeatable data-story arc

A possible structure for a Viraaasat data-driven story:

1. **Question:** Introduce the question—not the dataset.
2. **Scale:** Establish the magnitude or national context.
3. **Pattern:** Reveal the primary trend or comparison.
4. **Contrast:** Show variation, exceptions, or unequal outcomes.
5. **Context:** Explain definitions, historical factors, or limitations.
6. **Human consequence:** Connect data to lived experience, reporting, or a concrete place.
7. **Exploration:** Offer a useful interactive layer where the reader can inspect more.
8. **Synthesis:** State what the evidence supports—and what it does not.
9. **Sources:** Publish data, methodology, dates, and caveats.

This is a proposed editorial framework, not a formula. Stories may skip, combine, or rearrange chapters.

## 7. Visual encodings and design choices

### Position
Usually the most reliable encoding for precise comparison. Use aligned axes when comparing values.

### Length
Useful for bars, but bars should have honest baselines when representing magnitude.

### Area and size
People compare areas less precisely than positions or lengths. When using circles or bubbles, map values to **area**, not diameter, so the visual magnitude is not exaggerated.

### Color
- Use a sequential palette for ordered low-to-high values.
- Use diverging colors when there is a meaningful midpoint or threshold.
- Use categorical colors for distinct groups, not an arbitrary rainbow.
- Avoid color-only communication.
- Keep meanings consistent within a story, but do not reuse colors for unrelated variables in ways that confuse readers.

### Shape and pattern
Can add redundancy for accessibility or distinguish categories, but should not create unnecessary complexity.

### Direct labels
Where possible, label series or important data directly instead of making readers repeatedly decode a distant legend.

### Annotation
Use concise notes to explain what matters, why it matters, and where the reader should look. Annotations are part of the graphic's editorial voice.

Research-backed guidance emphasizes familiar conventions, direct annotation, visual grouping, attention guidance, and avoiding visual illusions.  
Source: https://journals.sagepub.com/doi/full/10.1177/15291006211051956

## 8. Visual integrity: how charts can mislead

### Baseline and axis choices
- Bar charts generally should begin at zero because truncated baselines exaggerate length differences.
- A line chart may use a non-zero range when appropriate to reveal variation, but disclose it clearly and don't visually overstate changes.
- Never hide a scale change during an animation.

### Comparisons
- Ensure categories and units are comparable.
- Explain when data definitions change over time.
- Don't compare rates to counts without clear explanation.
- Use consistent scales when viewers are comparing multiple panels.

### Percentages and denominators
A percentage is incomplete without its denominator and population definition. Where possible, explain the denominator, sample, and time period.

### Aggregation
Totals can hide regional or demographic differences. Use disaggregation where it is relevant and supported, but avoid creating an overload of small categories.

### Correlation vs. causation
A relationship in a scatterplot or geographic pattern does not establish causation. Don't write causal headlines unless the evidence and methods support the claim.

### Uncertainty
Represent estimates, confidence, missing data, projections, and uncertainty honestly. Avoid presenting uncertain values with false precision.

### 3D charts
Avoid 3D chart effects when they distort perception or make comparisons harder. Use 3D only when spatial structure is the actual subject—not to add spectacle to a simple bar or pie chart.

Reference: U.S. Department of Labor visualization checklist: https://www.dol.gov/sites/dolgov/files/OASP/evaluation/pdf/E2A/E2A-Tool-Kit-Ch6-508.pdf

## 9. Motion in data visualization

Viraaasat is cinematic, but data animation must be more restrained than decorative page motion.

### Good uses
- Reveal one series or one comparison at a time.
- Show a value changing over time when the temporal dimension is real.
- Transition between states to maintain context.
- Highlight a selected category or region.
- Animate a cumulative process when it helps explain how the total is built.

### Risky uses
- Race-style charts when the movement distracts from precise comparisons.
- Animating every bar on entry.
- Rapidly shifting axes.
- Moving data without labels or explanation.
- Smooth interpolation that suggests data exists at every moment when only discrete snapshots are available.
- Animation that makes the story impossible to follow at the reader's pace.

### Motion principles
- Reader-controlled where possible.
- Pause and replay for meaningful sequences.
- Keep labels stable.
- Preserve context during transitions.
- Honor `prefers-reduced-motion`.
- Ensure the final state is understandable without animation.

Evidence reviews warn that animation can introduce confusion, and static views or annotation may be more effective for precise comparisons. Animation should be chosen for a narrative or explanatory reason and evaluated for comprehension.

## 10. Interaction patterns

Interactions should reveal information, not conceal it.

### Filter
Use only when it answers a meaningful reader question. Clearly indicate active filters and provide a reset.

### Select / highlight
A click selects a category or datapoint; related views can update. Maintain a visible selection state.

### Compare
Let users compare two regions, years, categories, or values. Keep scales consistent where direct comparison is intended.

### Scrub timeline
Useful for time series or historical datasets. Show current time/year and allow manual control. Play mode should be optional.

### Drill-down
Move from overview to detail—country, region, state, district—only where data quality and interaction design support it.

### Tooltip
Supplementary, concise, and keyboard accessible. Essential findings must not be tooltip-only.

### Linked views
Selecting a region on a map updates a chart or table. Use only if the relationship is clear and the interface communicates what changed.

### Download / data table
Offer a text/table alternative and, when appropriate, raw data. The table should not replace the narrative interpretation.

## 11. Accessibility requirements

Accessible visualizations are designed from the start.

- Provide a concise title and description of the chart's purpose.
- Add a plain-language summary of the key insight.
- Use readable labels, units, and sufficient contrast.
- Do not rely on color alone.
- Ensure keyboard access to interactive elements.
- Make hover information available via keyboard and other assistive technology.
- Provide a table or alternative representation for underlying data.
- For larger datasets, consider a representative table or downloadable data rather than forcing the entire dataset into the page.
- Provide equivalent textual information for dynamic changes.
- Avoid requiring horizontal scrolling on narrow screens where practical.
- Test manually, not only with automated checks.

Sources:
- https://www.washington.edu/accesstech/dataviz/
- https://designsystem.digital.gov/components/data-visualizations/
- https://www.csps-efpc.gc.ca/tools/articles/data-visualization-eng.aspx

## 12. Mobile data storytelling

Don't simply shrink a desktop chart.

- Shorten labels and simplify the graphic.
- Prefer small multiples or single-focus charts when dense visuals become difficult.
- Increase touch target sizes.
- Avoid hover-dependent interactions.
- Use scroll-driven highlights carefully and don't block page scroll.
- Use controls that can be reached and operated with one hand where practical.
- Make data labels readable without pinch zoom.
- Provide a simplified overview with optional deeper inspection.
- Test portrait and landscape layouts.

Mobile may need a different narrative treatment rather than a smaller version of the same chart.

## 13. Viraaasat chart art direction

### Palette
Use the locked Viraaasat palette as the foundation:

- Ink / Charcoal `#191B18`
- Archive Ivory `#F1EBDD`
- Terracotta `#B66A46`
- Forest `#68745C`
- Old Brass `#C6A66B`
- Oxide Red `#7D3430`

Color should encode meaning consistently within the graphic, not merely fill a palette.

### Typography
- Headlines and key statements: Cormorant Garamond.
- Explanatory text and labels: Manrope.
- Data labels, dates, values, units: IBM Plex Mono.

### Graphic style
- Editorial typography and generous whitespace.
- Clean axes and minimal gridlines.
- Direct labels where practical.
- A single focal highlight.
- Restrained annotation.
- Subtle transitions.
- No gratuitous shadows, gradients, glass effects, or 3D extrusion.

### Story-dependent expression
- Historical: archive texture and dates, with evidence annotations.
- Culture: composition and category comparison; human context.
- Economy: clear units, comparisons, trends, and uncertainty.
- Politics: restrained emphasis, neutral language, transparent sourcing.
- Environment: temporal and geographic context.
- Science: precise scales, diagrams, and explanatory labels.

The brand's visual identity remains consistent, but each story selects a suitable visual language.

## 14. Data preparation and analysis workflow

Before chart implementation:

1. Record the research question.
2. Identify the dataset and its source.
3. Verify dates, units, definitions, population, coverage, and license.
4. Inspect data for missingness, outliers, inconsistencies, and structural changes.
5. Clean and normalize carefully; retain raw data.
6. Explore distributions and comparisons before selecting the final chart.
7. Determine whether counts, rates, percentages, indices, or estimates are appropriate.
8. Select chart type and encodings.
9. Write the takeaway in plain language.
10. Add annotations and context.
11. Validate against source data.
12. Review for bias, misleading scales, and uncertainty.
13. Test accessibility and mobile.
14. Publish source, method, limitations, and data version.

## 15. Proposed Viraaasat visualization components

Reusable primitives may be useful, but don't build a generic dashboard framework too early.

- `DataStorySection` — narrative section with a chart and explanatory text.
- `ChartFrame` — title, description, graphic, notes, source.
- `ChartAnnotation` — editorial annotations.
- `ChartLegend` — accessible legend.
- `ChartTooltip` — supplementary detail.
- `ChartControls` — filters, selection, time controls.
- `ChartSummary` — plain-language key insight.
- `DataTable` — table alternative.
- `DataSourceNote` — sources and methodology.
- `ComparisonPanel` — consistent side-by-side views.
- `TimelineControl` — discrete temporal navigation.

Each story should compose these selectively.

## 16. Story examples for Viraaasat

Ideas that can benefit from visualization:

### India's demographic transformation
- Population over time.
- Age structure and dependency.
- Urban vs rural.
- Regional differences.
- Use: line chart, population pyramid, small multiples, annotated timeline.

### The economic divide
- Absolute values versus per-capita values.
- State comparisons.
- Growth and inequality.
- Use: ranked bars, scatterplot, distribution chart, small multiples.

### Education across India
- Access, enrollment, outcomes, gender and region.
- Use: maps + ranked comparisons + trends, with clear denominators.

### India's energy transition
- Sources of energy over time.
- Capacity versus generation.
- Demand, reliability, geography.
- Use: stacked bars/area where appropriate, annotated timeline, map.

### Water and agriculture
- Rainfall, irrigation, crop choices, groundwater and region.
- Use: maps, seasonal timelines, charts, and reported human stories.

### Cities and urbanization
- Growth, density, housing, transport, air quality.
- Use: map, time series, comparison, satellite images, district-level context.

### India's languages
- Language distribution and linguistic diversity.
- Use: geographic visualizations, category comparisons, scripts, audio, and careful explanation of definitions.

These are concept examples. Data quality and reporting determine whether a particular chart is warranted.

## 17. Research-inspired references and learning

### Principles and public-sector guides
- Digital.gov — Introduction to data visualization: https://digital.gov/resources/an-introduction-to-data-visualization
- U.S. Web Design System — Data visualizations: https://designsystem.digital.gov/components/data-visualizations/
- University of Washington — Making data visualizations accessible: https://www.washington.edu/accesstech/dataviz/
- Canadian School of Public Service — Data visualization best practices: https://www.csps-efpc.gc.ca/tools/articles/data-visualization-eng.aspx
- GWU guide — Data visualization best practices: https://libguides.gwu.edu/dataviz/best_practices
- American Progress — Data Visualization Guide: https://dataviz.americanprogress.org/

### Research papers
- Franconeri et al. — *The Science of Visual Data Communication: What Works*: https://journals.sagepub.com/doi/full/10.1177/15291006211051956
- Segel & Heer — *Narrative Visualization: Telling Stories with Data*: https://vis.stanford.edu/files/2010-Narrative-InfoVis.pdf
- MIT CSAIL — *Rich Screen Reader Experiences for Accessible Data Visualization*: https://vis.csail.mit.edu/pubs/rich-screen-reader-vis-experiences/

### Libraries and tools
- D3: https://d3js.org/
- Observable Plot: https://observablehq.com/plot/
- Vega-Lite: https://vega.github.io/vega-lite/
- Apache ECharts: https://echarts.apache.org/
- Chart.js: https://www.chartjs.org/
- Flourish: https://flourish.studio/

## 18. Agent checklist

Before shipping a visualization:

### Editorial
- [ ] What is the question?
- [ ] What is the primary insight?
- [ ] Is this visual the best way to communicate it?
- [ ] Is the story contextualized and not overclaimed?

### Data
- [ ] Sources recorded and cross-checked?
- [ ] Date, unit, denominator and definitions clear?
- [ ] Missing data handled transparently?
- [ ] Raw data preserved?
- [ ] Transformation and calculations documented?
- [ ] Uncertainty and limitations represented?

### Design
- [ ] Clear title, labels, units, and summary?
- [ ] Appropriate visual encoding?
- [ ] Accurate scale?
- [ ] Minimal noise?
- [ ] Direct annotation where helpful?
- [ ] Consistent colors and accessible contrast?

### Interaction
- [ ] Does interaction improve understanding?
- [ ] Main message visible without interacting?
- [ ] Controls clear and reversible?
- [ ] No essential hover-only information?
- [ ] Reset / clear state available?

### Accessibility and mobile
- [ ] Keyboard operable?
- [ ] Screen reader context provided?
- [ ] Data table or alternative representation?
- [ ] Color not the only encoding?
- [ ] Reduced motion honored?
- [ ] Mobile version designed, not merely scaled?
- [ ] Manual testing performed?

### Integrity
- [ ] Avoids misleading axes or area encoding?
- [ ] Does not imply correlation is causation?
- [ ] Comparison scales consistent?
- [ ] No unsupported precision?
- [ ] Does the graphic faithfully reflect the data?

## 19. Recommended decisions

1. **D3** is the primary toolkit for bespoke editorial visualizations.
2. **Observable Plot** is the preferred lightweight starting point for conventional plots.
3. **No universal chart component system at project start.** Build reusable primitives only as repeated patterns emerge.
4. **Narrative + human context** is the default editorial strength: data reveals a pattern; reporting explains its meaning.
5. **Every chart must have an authored takeaway** in plain language.
6. **Every interactive graphic must have a static summary and accessible alternative.**
7. **Source, methodology, definitions, and limitations are mandatory** for data-driven stories.
8. **Motion is explanatory, not decorative.**
9. **Mobile is a first-class design target.**
10. **Visual accuracy outranks visual spectacle.**

---

## Final principle

Viraaasat should not ask the reader to admire a chart.

It should help them see something they didn't see before—and understand why it matters.

