# Homepage media ledger

Accessed 2026-11-24. Museum and documentary assets are preserved with full licensing and provenance. The Curated Asset Pack is extracted to `assets/curated-pack/` and the 4K Scroll Film is preserved in `assets/video/` and root.

## 4K Cinematic Scroll Film

- **File:** `Viraaasat_Scroll_Film_4K.mp4` (Root and `assets/video/Viraaasat_Scroll_Film_4K.mp4`), 81,939,963 bytes.
- **Format:** 3840 × 2160 pixels, 24.0 FPS, H.264 / AAC, 31.875 seconds (765 frames total).
- **Fast-Start:** `moov` header atom at offset 32 (web-optimized progressive streaming).
- **Keyframe alignment:** 8 sync samples spaced at 4.0s (96 frame) intervals, precisely aligned with the 8 narrative scenes.
- **Use:** Core homepage scroll-scrubbed narrative journey, driven via GSAP ScrollTrigger and non-blocking HTML5 media seeking.

## Curated Asset Pack

- **Archive:** `India_Scene_at_the_well.zip` (and alias `Viraaasat_Curated_Asset_Pack.zip`), 25 high-resolution authentic archive stills.
- **Directory:** `assets/curated-pack/`.
- **Use:** Scene posters, fallback art for reduced motion and no-JS modes, and editorial metadata context across all 8 acts:
  1. *Stepwell Architecture*: `India_Scene_at_the_well.jpg`, `Eastern_entrance.jpg`.
  2. *Museum Architecture*: `Albert_Hall_Museum_by_Ameya_Clicks.jpg`, `CSMVS_lawn_and_statue_(46062).jpg`, `Chhatrapati_shivaji_maharaj_...jpg`.
  3. *Rock-Cut Sanctuaries*: `AJANTA_ELLORA_CAVES.jpg`, `007_Ajatasatru_Worships_the_Buddha.jpg`.
  4. *Subcontinent Cartography*: `India_1788.jpg` (James Rennell), `India_in_1785.png`, `Abd_al_Samad_Akbar_and_a_Dervish...jpg`.
  5. *Stone Architecture*: `Hampi_Ruin.jpg`, `01022_Adinatha_temple,_Khajuraho_Madhya_Pradesh_05.jpg`, `A_winter_morning_in_Vijaynagar.jpg`.
  6. *The Taj Mahal*: `India-6117_-_Taj_Mahal_(2215341546).jpg`.
  7. *Varanasi Ghats*: `View_of_the_ghats_at_Varanasi.jpg`, `Ghats_of_Varanasi_2025.jpg`.
  8. *Himalayan Frontier*: `Aerial_photograph_of_the_Himalayas,_Ladakh_01.jpg`, `Entrance_Arch_Kumik_Zanskar_Jun24_A7CR_00957.jpg`, `Chandanwari,...jpg`.

## Physical book rendering

- **Files:** `three.min.js` (Three.js r160 UMD build); `THREE-LICENSE.txt` (MIT license); `book-renderer.js` (project-authored model and renderer).
- **Use:** One progressive-enhancement WebGL scene for the opening book. The model uses beveled cover boards, a rounded spine, layered page blocks, curved folio surfaces, a contact shadow and hinged cover movement. It is a Viraaasat framing object, not a historical artifact.
- **Material files:** `book-material/brown-leather-albedo-2k.jpg` and `book-material/brown-leather-normal-gl-2k.jpg`, both 2048 × 2048 pixels.
- **Material source:** [Poly Haven — Brown Leather](https://polyhaven.com/a/brown_leather), texture by Rob Tuytel. The downloaded 2K albedo and OpenGL normal maps are used as supplied; their source is not enlarged. Poly Haven marks the asset CC0.
- **Folio surfaces:** The book uses the retained 3400-pixel CMA scans for the Kalpa-sutra and Gita Govinda page images; each is fit inside a paper margin without stretching.
- **Runtime note:** Three.js is loaded only when motion is enabled. Renderer pixel ratio is capped, reduced on mobile, and the editorial fallback does not depend on WebGL.

## Physical map and contemporary continuation

- **File:** `subcontinent-physical-map.svg` (projected SVG, 1500 × 1240 viewBox; vector output, not a raster-resolution claim).
- **Source datasets:** [Natural Earth 1:10m physical vectors](https://www.naturalearthdata.com/downloads/10m-physical-vectors/) — land polygons (v5.1.1) and river/lake centerlines (v5.0.0). Natural Earth data is public domain.
- **Map treatment:** Land, coastlines and selected major river centerlines are clipped to 59°–103°E and 4°S–40.5°N in an equirectangular frame. No political boundaries or period borders are shown. The map is explicitly identified as a contemporary physical-geography reference, not a historical state map.
- **Generator:** `tools/build-subcontinent-map.py`; uses Python's standard library and the Natural Earth GeoJSON source files linked in the script.
- **Source original:** `source-originals/nightlights_flat_series_stills_india_8k_compare.02023.jpg` (7680 × 4320 pixels; 4,569,360 bytes), the single 2023 India-centered still from NASA SVS visualization 5276's annual time-series frame set. [NASA SVS frame set](https://svs.gsfc.nasa.gov/vis/a000000/a005200/a005276/frames/7680x4320_16x9_3p/nightlights_flat_2012-2023_india/) and [asset record](https://svs.gsfc.nasa.gov/5276/).
- **Web derivative:** `nightlights-india-2023-4k.jpg` (3840 × 2160 pixels; 1,054,995 bytes), resized from the verified 8K still with high-quality bicubic filtering and JPEG quality 90. The browser uses this derivative; the 8K source remains in `assets/source-originals/`.
- **Creators / data:** NASA Scientific Visualization Studio; visualization by Kel Elkins (USRA). NASA lists scientists Zhuosen Wang, Miguel Román, Ranjay Shrestha, Srija Chakraborty and Virginia Kalb. The VIIRS data credit is NASA Earth Observatory images by Joshua Stevens, using Suomi NPP VIIRS data from Miguel Román, NASA GSFC. The on-screen register and this ledger retain NASA/NOAA attribution.
- **Rights:** NASA's [Images and Media Usage Guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) state NASA content is generally not subject to U.S. copyright, require source acknowledgment, and prohibit implying NASA endorsement. No NASA insignia or logo is used.
- **Context:** It is used as an observational view of annual-average night-time light in 2023, not as a measure of all human activity or as a political map.

## Manuscript folio

- **Files:** `kalpa-sutra-folio.jpg` (CMA print image, 3400 × 1547); `kalpa-sutra-folio-1800.jpg` (1800 × 819 display derivative).
- **Object:** *Kalpa-sutra manuscript with 24 illuminations*, c. 1475–1500.
- **Creator:** Not identified in CMA record.
- **Source / object record:** [Cleveland Museum of Art, 1932.119](https://www.clevelandart.org/art/1932.119); [Open Access image](https://openaccess-cdn.clevelandart.org/1932.119/1932.119_print.jpg).
- **Rights:** CMA Open Access / CC0, subject to item-level record. Attribution is not required; citation retained here.
- **Use:** Archive opening and manuscript spread; the object is named in context and is not claimed as a complete book.
- **Context:** CMA identifies the work as a manuscript with 24 illuminations, dated c. 1475–1500.

## Painted folio

- **Files:** `gita-govinda-folio.jpg` (CMA print image, 3400 × 2781); `gita-govinda-folio-1800.jpg` (1800 × 1472 display derivative).
- **Object:** *Radha Awaiting Reconciliation with Krishna, from a Gita Govinda of Jayadeva*, c. 1680; Northwestern India, Rajasthan, Rajput Kingdom of Mewar; gum tempera and gold on paper.
- **Creator:** Not identified in CMA record.
- **Source / object record:** [Cleveland Museum of Art, 1990.41](https://www.clevelandart.org/art/1990.41); [Open Access image](https://openaccess-cdn.clevelandart.org/1990.41/1990.41_print.jpg).
- **Rights:** CMA Open Access / CC0, subject to item-level record.
- **Use:** Pages of time and gallery transition. The artwork is shown as a flat digitized object; no scene has been fabricated from it.
- **Context:** The exact title, period, region and medium follow the museum record.

## Carved stone exhibit

- **Files:** `mathura-railing-pillar.jpg` (CMA print image, 2132 × 3400); `mathura-railing-pillar-1800.jpg` (1129 × 1800 display derivative).
- **Object:** *Corner Railing Pillar with Drinking Scenes, Yakshis, and Musicians*, c. 100 CE; India, Mathura, Kushan period.
- **Creator:** Not identified in CMA record.
- **Source / object record:** [Cleveland Museum of Art, 1977.34](https://www.clevelandart.org/art/1977.34); [Open Access image](https://openaccess-cdn.clevelandart.org/1977.34/1977.34_print.jpg).
- **Rights:** CMA Open Access / CC0, subject to item-level record.
- **Use:** Pages of time and gallery. It is labeled as a photographed collection object, not a reconstructed sculpture.

## Interpretive Mewar map — retained, inactive

- **File:** `mewar-map-interpretive.svg`, 1639 × 1852 nominal source canvas, 564,220 bytes.
- **Work:** *Indian Kingdom of Mewar map*, created 2024; a modern interpretive map, not a period document.
- **Creator:** Nikel3012.
- **Source:** [Wikimedia Commons file record](https://commons.wikimedia.org/wiki/File:Indian_Kingdom_of_Mewar_map.svg).
- **License:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Credit: “Map by Nikel3012, CC BY 4.0.” No edits made to the SVG.
- **Use:** Not referenced by the current homepage. Retained as an asset from the prior iteration; it has been removed from the map-room sequence.
- **Context:** The file record states it is the uploader’s own work, dated 17 April 2024. It does not identify a period represented, so the homepage does not assign one.

## Retained earlier landing-page assets

These files remain in the folder from the prior iteration; the six-act page does not place them in its active scene sequence:

- `adalaj-stepwell.jpg` / `adalaj-stepwell-1600.webp`: Prasanta Kr Dutta, [Unsplash image record](https://unsplash.com/photos/low-angle-photography-of-brown-concrete-building-oODtsFye6lQ), Adalaj Stepwell, Gujarat.
- `gangotri-river.jpg` / `gangotri-river-1600.webp`: Rishu Bhosale, [Unsplash image record](https://unsplash.com/photos/a-river-running-through-a-valley-between-mountains-Y-J6SnpvgTQ), Gangotri, Uttarakhand.
- `gita-govinda-miniature.jpg` / `gita-govinda-miniature-1600.webp`: Cleveland Museum of Art upload, [Unsplash image record](https://unsplash.com/photos/indian-miniature-painting-of-people-in-a-garden-WDCdA1n4QpQ), [CMA object 1990.41](https://www.clevelandart.org/art/1990.41).

## Motion runtime

- **Files:** `gsap.min.js`, `ScrollTrigger.min.js`; GSAP 3.15.1.
- **Source:** [GSAP](https://gsap.com/).
- **License:** GreenSock Standard License; notices retained in each distribution. Confirm applicable license for intended production/commercial use before launch.

- **Book renderer:** Three.js r160, local UMD build in `assets/three.min.js`, [official release source](https://github.com/mrdoob/three.js/tree/r160), MIT license in `assets/THREE-LICENSE.txt`.
