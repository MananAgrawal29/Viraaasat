# Research 04 — Maps, Geospatial Data & Visualization for Viraaasat

**Research question:** How can maps become narrative, evidence, and a means of exploration for Viraaasat—without sacrificing geographic accuracy, editorial clarity, performance, or the visual identity?

**Status:** Research and recommendations, not implementation decisions. Re-check dataset access, license, attribution, terms, and accuracy before each story ships.

---

## 1. Editorial principle: the map is part of the story

A map should answer a question that text or a static image cannot answer as well. For Viraaasat, mapping can:

- Make **scale** understandable (a river basin, city expansion, migration, a road network).
- Make **change** visible (before/after, historical-to-present, season-to-season).
- Reveal **relationships** (distance, connection, clustering, uneven distribution).
- Let readers **explore** a place or dataset at their own pace.
- Anchor a story in geography without turning it into a generic “map dashboard.”

Use a map only when the spatial dimension adds meaning. If a comparison is clearer as a chart, timeline, photograph, or diagram, choose that instead. A map is not automatically the best visual just because the topic involves India.

### Map integrity principles
1. **Question first:** write the map's question in one sentence before designing it.
2. **Evidence first:** map data and geography must be sourced and described.
3. **Context first:** avoid misleading scale, cropped geography, hidden denominators, or color ramps that exaggerate differences.
4. **Map and prose reinforce:** the map should not carry essential information that the story fails to explain.
5. **User control:** exploratory interactions should be obvious, reversible, and never trap the reader.
6. **Editorial honesty:** distinguish measured data, estimates, modeled data, historical reconstruction, and illustrative geography.
7. **Source visible:** provide dataset source, date/version, methodology, caveats, and attribution in the story or map notes.

---

## 2. Recommended web mapping stack

### Primary map renderer: MapLibre GL JS

MapLibre GL JS is the strongest candidate for Viraaasat's custom, cinematic maps. It renders vector tiles in the browser using WebGL and supports data-driven styling, camera movement, terrain, globe views, 3D building extrusions, heatmaps, clusters, and custom layers. It offers a flexible styling specification and does not require adopting a single commercial basemap provider.

**Recommended role:** custom story maps, interactive India maps, camera moves, layered geography, data-driven choropleths, terrain and spatial overlays.

- Official project: https://maplibre.org/projects/gl-js/
- Docs: https://maplibre.org/maplibre-gl-js/docs/
- Examples: https://maplibre.org/maplibre-gl-js/docs/examples/
- Style spec: https://maplibre.org/maplibre-style-spec/

### Lightweight 2D alternative: Leaflet

Leaflet is a mature, straightforward library for interactive 2D maps, tile layers, markers, GeoJSON, and common interactions. It is useful for a simple map where a full GPU vector-map stack would be unnecessary.

**Recommended role:** lightweight location maps, simple story inserts, straightforward point/line/polygon interaction, fallback implementation when sophistication is not needed.

- Docs: https://leafletjs.com/
- API: https://leafletjs.com/reference.html

### Geospatial drawing and visualization: D3 / d3-geo

D3 is not a basemap engine. It is a toolkit for bespoke data visualizations. Its geographic modules can project geographic data, draw custom map outlines, and support maps that are intentionally designed as editorial graphics rather than conventional slippy maps.

**Recommended role:** custom projection maps, small multiples, nonstandard layouts, map-chart hybrids, custom annotations, and story graphics that need exact visual control.

- D3: https://d3js.org/
- D3 Geo: https://d3js.org/d3-geo

### Large / dense data overlays: deck.gl

deck.gl is designed for GPU-accelerated rendering of large datasets and layered visualizations, including aggregation layers and geospatial layers. It integrates with map renderers such as MapLibre.

**Recommended role:** dense point data, flows, arcs, hexagon/bin aggregation, large-scale movement, complex spatial datasets—only when the dataset and story justify the added complexity.

- Docs: https://deck.gl/docs
- Map integration: https://deck.gl/docs/get-started/using-with-map
- Layers: https://deck.gl/docs/api-reference/layers

### Other useful tools
- **Turf.js** — browser-friendly geospatial calculations and geometry operations (distances, buffers, intersections, simplification, etc.). https://turfjs.org/
- **GDAL / ogr2ogr** — command-line conversion, reprojection, raster processing, and GIS data preparation. https://gdal.org/
- **QGIS** — desktop GIS for inspecting, cleaning, styling, validating, and exporting data. https://qgis.org/
- **Tippecanoe** — turn large GeoJSON/CSV-like spatial datasets into vector tiles. https://github.com/felt/tippecanoe
- **PMTiles** — single-file tile archives that can be hosted as static files and read with a supported client protocol. https://pmtiles.io/
- **Maputnik** — visual MapLibre style editor. https://maputnik.github.io/
- **TopoJSON** — compact topology-aware representation useful for shared boundaries and small-scale map shapes. https://topojson.org/

### Suggested selection matrix

| Need | Preferred tool | Why |
|---|---|---|
| Cinematic interactive basemap | MapLibre GL JS | Camera, custom styling, vector layers, terrain, GPU rendering |
| Simple interactive map | Leaflet | Lightweight, familiar, straightforward 2D |
| Custom editorial map graphic | D3 / d3-geo | Exact control over projection, layout, annotations and visual language |
| Dense / large spatial dataset | deck.gl over MapLibre | GPU layer rendering, aggregation, large datasets |
| Geometry calculations | Turf.js | Convenient spatial operations in JS |
| Data cleaning / reprojection | QGIS + GDAL | Reliable desktop and batch GIS workflows |
| Static tile packaging | PMTiles | Portable archive, suitable for static hosting when configured correctly |

**Important:** Map renderer and data provider are separate decisions. MapLibre/Leaflet/D3 draw the map; basemap tiles, satellite imagery, boundary files, terrain and overlays come from data providers with their own licenses, attribution, access rules and usage limits.

---

## 3. India-focused geospatial source landscape

A story-specific dataset hunt should start from the subject and source authority—not from the first downloadable GeoJSON.

### 3.1 Survey of India (SoI)
SoI is an important source for official maps and administrative geography. The current geospatial policy framework states that SoI-published maps or SoI digital boundary data are the standard to use for political maps of India, including national, state and other boundaries. Its portal lists products including administrative boundary databases, village boundaries, digital geographical maps, digital vector products, DEM/ORI products and other map products. Access, formats, and payment conditions vary by product and user category; do not assume all datasets are freely downloadable or unrestricted.

- Online map portal: https://onlinemaps.surveyofindia.gov.in/
- Geospatial guidelines: https://onlinemaps.surveyofindia.gov.in/GeospatialGuidelines.aspx
- FAQs: https://onlinemaps.surveyofindia.gov.in/FAQs.aspx
- About portal/product catalog: https://onlinemaps.surveyofindia.gov.in/AboutPortal.aspx

**Use for:** authoritative political/administrative boundaries where appropriate, state/district/village boundaries, topographic reference, terrain products, and official geography.

### 3.2 Bhuvan / NRSC / ISRO
Bhuvan is ISRO/NRSC's geoportal and can expose satellite imagery, thematic layers, terrain and geospatial information, including administrative boundaries and thematic data. However, the Bhuvan terms state that content rights remain with NRSC/ISRO and/or licensors; viewing access is not the same as permission to download, republish, or use content in a public commercial/editorial site. Check the specific dataset and terms before reuse.

- Bhuvan: https://bhuvan.nrsc.gov.in/
- Bhuvan 2D viewer: https://bhuvan-app1.nrsc.gov.in/bhuvan2d/bhuvan/bhuvan2d.php
- NRSC/ISRO information: https://www.isro.gov.in/

**Use for:** satellite context, thematic environmental layers, land use/land cover, water, agriculture, disaster-related or earth-observation stories—subject to product-specific rights and service restrictions.

### 3.3 Open Government Data Platform — data.gov.in
The Government of India's Open Government Data platform is a discovery point for datasets and APIs across ministries and departments. Use it to locate datasets, then inspect the specific dataset's metadata: publishing agency, release date, update frequency, units, geographic level, schema, and license/terms. A dataset being on the portal does not mean every field or reuse condition is identical.

- https://data.gov.in/

**Use for:** government indicators, demographic/economic data, infrastructure, sectoral statistics, and source discovery. It may be better to pair a tabular dataset from this portal with a boundary dataset sourced separately.

### 3.4 Bharat Maps / National Map Services
Bharat Maps is described as a multi-layer GIS platform combining core base-map data from sources including Survey of India, ISRO, Forest Survey of India and Registrar General of India. Services may have access and authentication requirements. Do not treat a service visible in a viewer as automatically suitable for embedding, bulk extraction, or redistribution.

- National Portal of Map Services: https://www.mapservice.gov.in/
- Bharat Maps: https://bharatmaps.gov.in/

**Use for:** base geography discovery, government GIS services, and potential service-layer research.

### 3.5 Census and statistical sources
For population, housing, language, migration, urbanization, and social/economic topics, use the official statistical source or the dataset's actual publisher. Census tables and district/state statistical products need their own release dates and geographic definitions. Do not combine data from different census years or geographic vintages without harmonizing boundaries and clearly explaining it.

**Use for:** population density, urban growth, age structure, literacy, language, housing, migration, and social indicators—when the underlying table and geographic unit are documented.

### 3.6 OpenStreetMap (OSM)
OSM is a collaborative geographic database useful for roads, paths, places, buildings, points of interest and other mapped features. It is valuable for map context and routing-like visual stories, but completeness and quality vary by geography, feature type, and time. OSM data is licensed under the ODbL and requires attribution; check the applicable attribution and share-alike obligations for the way you use or distribute data. Tile services have separate usage policies.

- https://www.openstreetmap.org/
- Copyright/attribution: https://www.openstreetmap.org/copyright

**Use for:** street/road networks, local context, landmarks, urban form, and place-based exploratory maps. Always record the extraction date and attribution.

### 3.7 Natural Earth
Natural Earth provides public-domain global vector and raster map data at small scales (1:10m, 1:50m, 1:110m). It is useful for global or national context and for small-scale map graphics; it is not detailed enough for district, street, or local geographic analysis.

- https://www.naturalearthdata.com/
- Data overview: https://www.naturalearthdata.com/downloads/

**Use for:** world maps, broad regional context, countries, coastlines, large rivers, and small-scale editorial maps. Not a substitute for authoritative Indian administrative boundary data.

### 3.8 Terrain and elevation
Potential sources include NASA SRTM, Copernicus DEM, Mapterhorn-derived tiles, AWS Terrain Tiles, and GEBCO for land/ocean elevation. Source resolution, geographic coverage, vertical datum, processing and license differ.

- NASA SRTM: https://www.earthdata.nasa.gov/data/instruments/srtm
- Copernicus DEM: https://spacedata.copernicus.eu/collections/copernicus-digital-elevation-model
- Mapterhorn: https://mapterhorn.com/
- GEBCO: https://www.gebco.net/

**Use for:** Himalayan terrain, watersheds, elevation, mountain passes, coastal/sea-floor context, and 3D relief. Do not use terrain imagery as precise elevation evidence without the underlying metadata.

---

## 4. Geospatial data formats — what agents should understand

| Format | Best use | Notes |
|---|---|---|
| GeoJSON | Small-to-medium vector features; browser-friendly | Easy to inspect; can become heavy at large feature counts |
| Shapefile (SHP) | Common GIS exchange | Usually several companion files; not a web-native format; check encoding and projection |
| GeoPackage (GPKG) | Portable GIS database | Useful source/working format; may require conversion or tiling for web delivery |
| GeoTIFF / COG | Raster imagery, elevation, thematic grids | COG supports efficient partial reads when hosted/configured appropriately |
| MVT | Vector tiles | Efficient multiscale rendering; commonly used for basemaps and tiled overlays |
| PMTiles | Archive of tiles in one file | Efficient static hosting and range requests; requires compatible client/protocol and hosting setup |
| MBTiles | SQLite tile archive | Often needs conversion or a compatible serving setup for browser use |
| TopoJSON | Topology-aware simplified geographic shapes | Useful for shared boundaries and compact map shapes; often used with D3 |
| CSV | Tabular data with coordinate columns or join keys | Requires validation, geocoding or a spatial join; not inherently spatial without location fields |

### Data preparation pipeline

**Find → Inspect → Clean → Join → Transform → Simplify → Tile/Package → Test → Document**

1. **Find:** identify the actual publisher and primary dataset, not just a mirror.
2. **Inspect:** schema, geographic coverage, resolution, coordinate system, date, missing values, license.
3. **Clean:** fix invalid geometries, duplicates, field names, encodings and nulls; retain an untouched original.
4. **Join:** match tables to geographic features using stable codes rather than fuzzy names wherever possible.
5. **Transform:** reproject when needed; choose a projection suitable for the analytical or narrative purpose.
6. **Simplify:** reduce geometry detail at display scales without altering the meaning or topology in harmful ways.
7. **Tile/package:** GeoJSON for small data; vector tiles/PMTiles for large or multiscale layers; raster tiles/COGs for raster data.
8. **Test:** compare against known geography, inspect at intended zooms, check joins and values.
9. **Document:** source, version/date, transformations, assumptions, license, attribution, caveats and story owner.

A data transformation is not just a technical detail. If it affects the story's conclusions, it belongs in the methodology.

---

## 5. Map types and story patterns

### A. Choropleth — “Where is this higher or lower?”
Use fill color to show a normalized value across areas (states, districts, etc.).

**Good for:** rates, percentages, density, indices, per-capita measures.

**Rules:**
- Prefer rates/normalized measures when raw counts mostly reflect population size.
- Show units, legend, classification method and date.
- Use sequential ramps for low-to-high; diverging ramps only when a meaningful midpoint exists.
- Avoid a rainbow palette.
- Explain missing areas—do not style missing data as zero.
- Beware of large regions visually dominating small regions; consider small multiples, inset maps, or a companion ranked chart.

### B. Proportional symbols / bubbles — “How much is here?”
Symbols encode magnitude, usually circles. Useful for absolute counts and point locations.

**Risks:** overlap, visual clutter, misleading area-vs-radius scaling. Size circles by area proportional to value when the encoding is meant to be proportional.

### C. Point maps — “Where are these places?”
Use for individual sites, events, institutions, or locations.

**Patterns:** reveal clusters, sequence events, allow filtering by type, and highlight a selected point. Avoid putting a large number of unlabeled markers on the map.

### D. Density / heatmaps — “Where are things concentrated?”
Use density surfaces or aggregation when the underlying data is dense. A heatmap is a visual aggregation—not an exact count of events in every pixel. State the measure, kernel/weighting or aggregation method where relevant.

### E. Flow maps — “What moves from where to where?”
Use lines/arcs for migration, trade, transport, supply chains, or movement. Keep direction and quantity encodings understandable. For complex flows, filter, animate, or aggregate instead of drawing every line at once.

### F. Route / network maps — “How are places connected?”
Use road, rail, river, or other networks when connectivity is the story. Highlight only the key route or compare networks with context; do not obscure the underlying geography.

### G. Terrain / 3D relief — “How does physical geography shape this?”
Use terrain only when elevation and physical form are important. A dramatic camera tilt should not be mistaken for a data claim. Keep a 2D reference view or scale/context available.

### H. Change-over-time / historical maps
Use a time slider, discrete year selector, swipe comparison, small multiples, or animated transitions.

**Strong practice:** when values or boundaries change, explain whether the change is in the data, the geography, the definition, or the visual scale. If map boundaries are not comparable across years, harmonize them or clearly flag the limitation.

### I. Map + chart hybrid
Maps are often strongest when paired with a ranked list, bar chart, timeline, or narrative annotation. The map answers “where”; the companion chart answers “how much” or “how does it rank?”

---

## 6. Interaction vocabulary for cinematic map stories

Choose one or two interaction patterns that fit the narrative; avoid giving every map every control.

### Camera and spatial movement
- **Fly-to:** camera moves to a place after a user selection or narrative cue.
- **Zoom ladder:** India → state → district → city, with clear breadcrumbs/back controls.
- **Tilt / bearing:** only when perspective adds meaningful spatial understanding.
- **Camera lock / focus:** temporarily center on a selected story point, with an obvious reset.

### Layer controls
- Toggle only layers that help answer a clear question.
- Use clear plain-language labels, not GIS jargon.
- Keep the number of simultaneously visible layers limited.
- Provide “reset map” or “clear selection” affordance.

### Time controls
- Discrete dates/years are usually more honest than continuous sliders for annual datasets.
- If the dataset is monthly, seasonal, or continuous, match the control to the sampling interval.
- Always display the selected time period.
- When animating, keep play/pause, speed and current-year visible; allow scrubbing.

### Hover, click, and touch
- Hover is supplemental; critical information must be accessible by click/tap and keyboard.
- Touch users need targets large enough to use and a clear selected-state.
- A selected feature should have an obvious visual emphasis and a nearby details panel.
- Use tooltip or popover content sparingly; long information belongs in a panel or story text.

### Scroll-linked map storytelling
- A narrative scroll can change camera, active layers, year, annotation, or map framing as the reader progresses.
- Use **story chapters as map states**, not as a fragile chain of arbitrary scroll percentages.
- Keep the map state synchronized with a visible chapter label and supporting text.
- Make scroll-triggered changes non-essential: map controls remain available.
- Avoid trapping scroll inside the map; map navigation and page navigation should not compete.
- On mobile, replace long pinned desktop sequences with shorter scenes, map snapshots, or user-triggered steps.

### Interaction example (conceptual)

1. **India in context:** full-country map, one quiet question.
2. **Focus:** zoom to a region/state as the story shifts.
3. **Reveal:** toggle a relevant dataset or compare two periods.
4. **Inspect:** user taps a location to read an annotation.
5. **Return:** reset to national view and connect the local story back to India-wide context.

This is a reusable storytelling pattern, not a template every story must follow.

---

## 7. Cinematic cartography and Viraaasat's visual language

### Map palette integration
Maps should inherit the brand's editorial palette while retaining readable, conventional geographic encodings where needed.

- **Archive Ivory `#F1EBDD`:** default editorial map background / paper-like map panels.
- **Ink Charcoal `#191B18`:** dark immersive scenes, labels, roads, outlines.
- **Terracotta `#B66A46`:** human, cultural, selected story locations, emphasis.
- **Forest `#68745C`:** ecology, terrain, vegetation, water-related story accents (do not force it to mean “good”).
- **Old Brass `#C6A66B`:** time, chronology, secondary highlights, focus rings.
- **Oxide Red `#7D3430`:** conflict or urgent emphasis only; not an automatic “bad data” color.

### Visual craft
- Use muted, desaturated basemap layers; the data/story layer gets priority.
- Use custom typography and labels outside the map where possible. Map labels should be legible, not overly decorative.
- Preserve whitespace and editorial framing.
- Use textures sparingly; never texture a choropleth so heavily that data differences become hard to compare.
- Prefer intentional map crops over default full-screen maps.
- Use map captions and section titles to frame the question.
- Build hierarchy: geography/context → story layer → annotation → legend → source/method.
- Avoid cliché Indian cartographic treatments (flag-color fills, patriotic glow, decorative tricolor trails). India should feel present through actual place, story, typography, and material—not visual shorthand.

### Cinematic ≠ inaccurate
Cinematic framing can use contrast, typography, movement, sound, and reveal timing. It must not distort boundary shapes, hide uncertainty, imply unsupported precision, or mislead with scale. Use a recognizable geographic reference and a conventional overview whenever the map makes a factual claim.

---

## 8. Map projections and boundaries: editorial decisions

### Projection selection
No projection is neutral for every purpose. Choose a projection for the map's scope and message:
- **Web Mercator:** convenient for interactive tiled maps and street-scale navigation; distorts area at high latitudes, so not ideal for area comparisons across the globe.
- **Equal-area projections:** better when comparing area; choose an appropriate regional/national projection for the data and map extent.
- **Conformal projections:** preserve local shape/angles but may distort area or distance.
- **Azimuthal projections:** useful for radial/centered or polar stories, but not general-purpose India maps by default.
- **Custom D3 projections:** useful for static, designed editorial maps where projection is part of the art direction.

Agents should explain projection choices for analytical maps. For an India-centered story, choose the projection based on the geographic extent and map purpose rather than copying a global web basemap.

### Political boundaries and sensitive geography
- Use Survey of India maps or SoI digital boundary data as the standard for political maps of India, per the official geospatial guidelines.
- Do not silently combine different boundary vintages or sources.
- Do not casually redraw, simplify, omit, or recolor boundary segments in ways that alter political meaning.
- Distinguish administrative borders, disputed/claimed areas, international boundaries, line-of-control/claim lines, and schematic boundaries in the legend or source note when relevant.
- For a story involving contested geography, the editorial team must make an explicit, documented decision on depiction and labeling before design implementation.
- If a map is not intended to show political boundaries, minimize boundary detail and avoid accidentally implying a position.

This section is an editorial safety and accuracy checklist, not a legal interpretation of every mapping requirement.

---

## 9. Data storytelling and quantitative honesty

### Before styling
- What is the measure? Count, rate, share, index, estimate, model output?
- What is the denominator? Per person, per household, per area, or none?
- What geographic level? State, district, block, village, point, grid?
- What time period and collection date?
- Are there missing values, suppressed values, or zeroes?
- Is the data comparable across regions or years?
- What are the classification bins and why were they chosen?

### Visual encoding choices
- **Sequential:** one direction, low → high.
- **Diverging:** meaningful midpoint (e.g. below/above a benchmark), with symmetric or explained limits.
- **Categorical:** distinct classes with no implied order.
- **Size:** encode magnitude; area scaling must be considered.
- **Opacity:** avoid stacking many layers that make values difficult to compare.
- **Labels:** show a limited number at once; use selection/hover for detail.

### Do not
- Use raw counts when the story is about relative risk/impact without explaining population differences.
- Change legend scales between frames in an animation without telling the user.
- Color missing data as “zero.”
- Use 3D extrusions that exaggerate small differences without scale cues.
- Make interpolated data appear as observations.
- Claim correlation, causation, or a trend from a map alone.
- Use an unclear or truncated legend.

### Companion visualization
For maps that involve rankings or comparisons, consider a ranked bar chart alongside the map. This helps users distinguish geographic pattern from magnitude and prevents the map from being the only comparison tool.

---

## 10. Performance and delivery strategy

### Use the right representation for data volume
- **Small data:** GeoJSON is convenient and easy to maintain.
- **Medium data:** GeoJSON can still work, but test load time, rendering and interaction; simplify geometry and filter features.
- **Large or multiscale data:** vector tiles or raster tiles are usually preferable; use PMTiles where a static tile archive fits the hosting and access pattern.
- **Dense overlays:** consider deck.gl aggregation rather than drawing every feature as a DOM object.
- **Raster/imagery:** tile or use COG-compatible workflows where appropriate; don't ship full-resolution raster files to the browser unnecessarily.

### Performance guidelines
1. Lazy-load maps when the story reaches them or the user opens the map.
2. Avoid multiple active maps on one page unless they are essential.
3. Use vector tiles for large boundaries or networks at multiple zooms.
4. Simplify geometries according to scale; retain topology where shared borders matter.
5. Keep map sources/layers purposeful; remove or hide inactive layers carefully.
6. Use GPU effects, terrain, extrusion, and animation selectively.
7. Avoid continuous render/update loops for static scenes.
8. Use progressive loading and clear loading/error states.
9. Test with slow network, low-power hardware, mobile devices, and reduced-motion settings.
10. Track actual performance; do not assume a map is fast because it works on the development laptop.

### Hosting and tile-provider caution
- Don't assume public tile servers are free, unlimited, or intended for production traffic.
- Review tile provider policies, caching rules, attribution requirements, and commercial restrictions.
- For a long-lived story, consider hosting/packaging the required data (where licensing permits) rather than depending on undocumented or fragile third-party endpoints.
- Use API keys only when required; never expose secret credentials in the client.
- Keep attribution visible and legible, not buried in a tiny tooltip.

---

## 11. Accessibility and responsive behavior

- Provide a keyboard-accessible equivalent for map interactions where feasible.
- Ensure selected locations and layer states are communicated beyond color alone.
- Provide a textual explanation, table, or key findings alongside data maps.
- Keep legends readable at mobile widths; collapse into a clear expandable legend if necessary.
- Do not rely on hover to expose facts.
- Provide a reset/overview button and visible selection state.
- Respect `prefers-reduced-motion`; disable or reduce camera animation and scroll choreography.
- For keyboard users, make map controls focusable with meaningful labels and avoid inaccessible canvas-only information.
- For screen readers, expose summaries and relevant data through surrounding HTML. A complex map may not be fully narratable as a single canvas; the story must still be understandable without it.
- On mobile: reduce layer complexity, avoid tiny controls, minimize camera pitch and long auto-animation, and make map interactions intentional.

---

## 12. Licensing, provenance, and research documentation

Every story map should have a **Map Data Record** (stored alongside story research or in the story's sources file).

### Map Data Record template

- **Map/story title:**
- **Map question:**
- **Dataset name:**
- **Publisher/owner:**
- **Dataset URL / download or API endpoint:**
- **Dataset version / publication date:**
- **Date accessed:**
- **Geographic coverage / scale:**
- **Coordinate reference system / projection:**
- **License / terms of use:**
- **Required attribution:**
- **Fields used:**
- **Join key / matching method:**
- **Data cleaning / transformations:**
- **Classification / visual encoding:**
- **Known limitations / missing values:**
- **Political-boundary review (if applicable):**
- **Asset owner / story editor responsible:**

### Sources and rights rules
- Never assume that “government,” “open,” “viewable,” or “downloadable” means free for every reuse.
- Check dataset-level license and source attribution.
- Check tile service terms separately from underlying data license.
- Preserve source links, date accessed, versions, and processing notes.
- For third-party imagery, record usage rights and attribution just like other assets.
- If legal terms are unclear, choose another dataset or seek clarification rather than silently proceeding.

---

## 13. Viraaasat map story concepts

These are illustrative concepts, not data or story commitments.

### 1. India’s changing cities
- Start with a quiet national map.
- Select a city and reveal urban growth through year layers or swipe comparison.
- Overlay population, built-up area, or transport expansion only when data definitions align.
- Pair with a short timeline and a ranked city comparison.
- Avoid a single “growth” metric that hides displacement, inequality, or density differences.

### 2. The rivers that shape India
- Highlight one river system, then follow it upstream/downstream.
- Add tributaries, basin boundaries, settlements, dams, water-use context as relevant.
- A route/camera journey can move from source region to delta.
- Use hydrological data sources and clearly distinguish river geometry from flow/quality measurements.

### 3. Languages across geography
- State/district map with language shares or distribution.
- Allow the reader to select a language and compare geography.
- Pair with script samples and audio only when editorially sourced and rights-cleared.
- Explain census categories and multilingual realities; don't treat linguistic identity as mutually exclusive if the data doesn't.

### 4. India’s climate and monsoon
- Animated or step-based seasonal rainfall/monsoon progression.
- Layer wind direction or rainfall only when sourced and properly time-aggregated.
- Use a seasonal timeline and explanatory annotations.
- Avoid a false sense of smoothness by interpolating only when scientifically justified.

### 5. Railways as a national network
- Reveal trunk lines and major connections in stages.
- Select a corridor and travel along it.
- Use historical/modern layers where data can be reconciled.
- Show stations or infrastructure details with OSM or official data and source notes.

### 6. Himalayan geography
- Switch from national context to terrain.
- Tilt the map into a relief view, highlight valleys, passes, river systems, or glacier regions.
- Use elevation and imagery with metadata.
- Provide a flat map fallback and avoid making the 3D terrain a substitute for precise measurements.

### 7. The story of a border
- Historical boundary context and the human story, not a boundary-only spectacle.
- Multiple map states with dated sources, careful labels, and explicit editorial review.
- Keep the map's claim lines, administrative lines, and disputed areas differentiated.

### 8. A district's inequality / development story
- Use a district map with an indicator, then move to a local story or photo.
- Compare values with a ranked chart and reveal what the measure does—and does not—represent.
- Avoid equating a district-level average with individual lived experience.

---

## 14. Recommended implementation strategy for Viraaasat

### Phase A — Foundation
1. Build a small, reusable **MapStory** wrapper around MapLibre, but don't make every map share a rigid visual template.
2. Create reusable primitives: `MapFrame`, `MapLegend`, `MapSourceNote`, `MapControls`, `MapTooltip/Details`, `MapStoryChapter`, and a `MapReset` control.
3. Define data-loading, loading/error states, reduced-motion behavior, responsive behavior, and attribution rules once.
4. Use a brand-aligned map style that is quiet by default and supports story-specific data styling.
5. Keep source datasets separate from UI code and story content.

### Phase B — First stories
- Begin with 2D interactive maps.
- Use simple GeoJSON and D3 maps for low-volume datasets.
- Test one MapLibre camera-driven scroll story.
- Avoid adding deck.gl until a dataset actually needs high-volume GPU rendering.
- Avoid adding terrain/3D to the first map story unless elevation is the story's core value.

### Phase C — Scale and special cases
- Add vector-tile/PMTiles workflows for larger datasets.
- Add deck.gl for dense or aggregated spatial data.
- Add terrain, 3D, and custom projections as story-specific modules.
- Create a data-validation workflow and Map Data Record requirement.

### Recommended defaults
- **Renderer:** MapLibre GL JS for most interactive story maps.
- **Data:** GeoJSON for small, curated datasets; tiles for large datasets.
- **Geometry prep:** QGIS/GDAL for inspecting, cleaning, reprojection, and export.
- **Spatial operations:** Turf.js when the operation is suitable for client-side work.
- **Custom editorial graphics:** D3/d3-geo.
- **Large overlays:** deck.gl, added only when justified.
- **Static map data delivery:** evaluate PMTiles.
- **Map style editor:** Maputnik.

This is a recommended starting stack, not a locked technology choice. The first implementation should validate the stack with a real Viraaasat story and the actual dataset.


---

## 15. Map quality checklist for AI agents

Before handing off a map story, answer:

### Story and clarity
- [ ] Is the map answering a clear story question?
- [ ] Is spatial context necessary, or would a chart/photo/diagram be clearer?
- [ ] Does the reader understand what to look for?
- [ ] Is there a companion explanation or comparison when needed?

### Data and integrity
- [ ] Primary source or trustworthy source documented?
- [ ] Dataset date, version, units, geography and coverage checked?
- [ ] License, attribution, terms and access requirements verified?
- [ ] Missing data, uncertainty, definitions and methodology documented?
- [ ] Join keys and transformation steps checked?
- [ ] Boundaries/projection appropriate and reviewed?
- [ ] Political map/boundary depiction reviewed if applicable?

### Visual design and interaction
- [ ] Map styling is consistent with Viraaasat's editorial identity?
- [ ] Legend, units, title and source note are readable?
- [ ] Color encodings are semantically and quantitatively appropriate?
- [ ] Map labels aren't overwhelming?
- [ ] Controls are clear, limited, and resettable?
- [ ] No essential information is hover-only?

### Performance and accessibility
- [ ] Data size appropriate for chosen format?
- [ ] Map lazy-loaded and not needlessly duplicated?
- [ ] Tested at realistic zooms and viewport sizes?
- [ ] Mobile interaction works?
- [ ] Keyboard/focus and text alternative considered?
- [ ] Reduced motion handled?
- [ ] Low-performance devices/network tested?
- [ ] Fallback exists if the map fails or is unavailable?

### Editorial and production
- [ ] Source and methodology record included?
- [ ] Story has an editor/owner?
- [ ] Map makes no unsupported causal or precision claim?
- [ ] The map adds narrative value instead of merely demonstrating a technology?

---

## 16. Research conclusions

The strongest approach for Viraaasat is **not a GIS-heavy platform everywhere**. It is an editorial storytelling toolkit that can use geography at different levels of fidelity and interaction.

1. **MapLibre GL JS is the leading candidate for interactive, cinematic maps.**
2. **D3/d3-geo should complement it for custom editorial maps and bespoke graphics.**
3. **Leaflet remains a simple 2D option—not an inferior choice when complexity is unnecessary.**
4. **deck.gl is reserved for large or dense spatial visualization.**
5. **QGIS and GDAL should be part of the data preparation workflow, even if the web team primarily writes React.**
6. **India-specific boundaries and political maps require explicit sourcing and editorial care; Survey of India guidance is a key reference.**
7. **Bhuvan/ISRO, SoI, data.gov.in, Bharat Maps, OSM, Natural Earth, and terrain providers form a source landscape—not a blanket license to reuse every layer.**
8. **Maps should be story-specific: quiet when evidence needs focus, cinematic when geography is the narrative, interactive when exploration adds value.**
9. **Data provenance, accessibility, performance, and boundary accuracy are requirements—not polish added later.**
10. **The goal is for readers to understand India through geography, not merely to be impressed by a moving map.**

---

## 17. Reference links

### Mapping technology
- MapLibre GL JS — https://maplibre.org/maplibre-gl-js/docs/
- MapLibre examples — https://maplibre.org/maplibre-gl-js/docs/examples/
- MapLibre Style Specification — https://maplibre.org/maplibre-style-spec/
- Leaflet — https://leafletjs.com/
- D3 Geo — https://d3js.org/d3-geo
- deck.gl — https://deck.gl/docs
- Turf.js — https://turfjs.org/
- QGIS — https://qgis.org/
- GDAL — https://gdal.org/
- Tippecanoe — https://github.com/felt/tippecanoe
- PMTiles — https://pmtiles.io/
- Maputnik — https://maputnik.github.io/
- TopoJSON — https://topojson.org/

### India / source discovery
- Survey of India — https://surveyofindia.gov.in/
- SoI Online Maps — https://onlinemaps.surveyofindia.gov.in/
- SoI geospatial guidelines — https://onlinemaps.surveyofindia.gov.in/GeospatialGuidelines.aspx
- SoI FAQs — https://onlinemaps.surveyofindia.gov.in/FAQs.aspx
- Bhuvan / NRSC — https://bhuvan.nrsc.gov.in/
- Bhuvan 2D — https://bhuvan-app1.nrsc.gov.in/bhuvan2d/bhuvan/bhuvan2d.php
- Data.gov.in — https://data.gov.in/
- Bharat Maps / Map Services — https://www.mapservice.gov.in/
- Natural Earth — https://www.naturalearthdata.com/
- OpenStreetMap — https://www.openstreetmap.org/
- OSM copyright/attribution — https://www.openstreetmap.org/copyright
- NASA Earthdata — https://www.earthdata.nasa.gov/
- Copernicus Data Space — https://dataspace.copernicus.eu/
- GEBCO — https://www.gebco.net/

---

**Research 04 complete.** This document is intended to become `research/maps-and-data/MAPS_GEOSPATIAL_RESEARCH_VIRAASAT.md` in the project repository after the research series is consolidated and reviewed.
