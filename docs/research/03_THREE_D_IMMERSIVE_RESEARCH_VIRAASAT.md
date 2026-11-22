# Viraaasat Research 03 — WebGL, Three.js & Immersive 3D

**Status:** Research and recommendations; not a locked technology decision  
**Purpose:** Establish when and how Viraaasat should use interactive 3D to make India explorable, without turning the website into a GPU-heavy tech demo.

## Research question

How can 3D make India feel explorable—not merely viewable—and when is it powerful enough to deserve its place in a story?

## 1. 3D philosophy

- Purpose before spectacle: if a photograph, map, illustration, or 2D animation communicates better, use it.
- Use 3D to create spatial understanding: distance, geography, scale, depth, perspective, and relationships.
- Art direction matters more than polygon count: lighting, composition, camera, textures, and atmosphere make a scene feel cinematic.
- Interaction should be natural: rotate, inspect, zoom, or explore only when useful.
- Accessibility and graceful fallback: a visitor should never need a capable GPU or 3D support to understand the story.

## 2. Recommended technology roles

### Three.js — core engine
The underlying JavaScript 3D engine for scenes, cameras, lighting, geometry, materials, textures, models, animation, and rendering.
- Website: https://threejs.org/
- Docs: https://threejs.org/docs/
- Examples: https://threejs.org/examples/

### React Three Fiber (R3F) — React integration
React renderer for Three.js. Recommended for Viraaasat because the website is planned as a React application and scenes can be built as reusable React components, connected to UI state and interactions.
- Docs: https://r3f.docs.pmnd.rs/
- Version compatibility matters: R3F major versions pair with React major versions. Verify current stable versions when implementation begins; avoid adopting alpha APIs without a deliberate reason.

### Drei — helper library
A practical collection of helpers for R3F/Three.js tasks such as controls, loaders, environment, staging, text, and other common scene utilities.
- Docs: https://drei.docs.pmnd.rs/

### Blender — asset creation and optimization
Use when custom assets, scene editing, cleanup, texture/material adjustments, geometry reduction, or export are required.
- Website: https://www.blender.org/

## 3. High-value 3D use cases for Viraaasat

1. **Architectural and heritage exploration:** monuments, buildings, carvings, objects, reconstructions. High storytelling value when the visitor can inspect spatial detail.
2. **Geography and terrain:** relief, valleys, rivers, plateaus, geological features, coastlines, elevation. Strong fit for stories where spatial understanding matters.
3. **Spatial maps:** regional relationships, migration, infrastructure, movement, trade, or geography. High value if 3D materially improves comprehension over a 2D map.
4. **Cutaways and exploded views:** explain a structure, object, machine, or system.
5. **Spatial data:** urban density, infrastructure, water systems, networks, or growth when a spatial view is meaningful—not just decorative bars extruded into 3D.
6. **Historical reconstruction:** rebuild a place, object, or process only where credible sources support it. Clearly distinguish evidence from interpretation and reconstruction.

### Example story concepts

- **Indian city growth:** start with a historical map or reconstructed settlement, transition to present geography, allow era selection, reveal urban expansion, and optionally layer transport, population, or land use.
- **Himalayan landscape:** cinematic terrain, river paths, elevation layers, geological cutaway, or glacial change through time.

These are concept examples, not commitments to build these stories.

## 4. Asset pipeline

Asset sources:

- **Custom-built:** unique hero objects, monuments, diagrams, or bespoke scenes authored in Blender.
- **Existing models:** source from model libraries; inspect technical quality, provenance, and licensing per item.
- **Procedural geometry:** create patterns, terrain, diagrams, particles, or data-driven objects with code.
- **Photogrammetry/scans:** real-world objects and spaces reconstructed from photography or scanning; verify usage rights and source metadata.

Asset discovery starting points:
- Sketchfab: https://sketchfab.com/ — inspect/download models where permitted; check item-specific licenses and attribution.
- Poly Haven: https://polyhaven.com/ — CC0 assets including models, textures, and HDRIs.
- BlenderKit: https://www.blenderkit.com/ — Blender asset library; verify each asset's license.
- Smithsonian Open Access: https://www.si.edu/openaccess — cultural collection discovery and open-access assets; check each item and format.

Do not assume an asset library means every item is free for every use. Track creator, original source, license, attribution, modifications, and download date.

## 5. Web delivery format

**Preferred delivery format: glTF/GLB**, especially `.glb` for packaged binary assets.

| Format | Recommended role |
|---|---|
| `.glb` | Default web delivery where appropriate; often packages geometry, materials, and textures |
| `.gltf` | JSON-based glTF with separate resources; useful when assets are deliberately split |
| `.obj` | Legacy interchange; not the default for modern web delivery |
| `.fbx` | Common interchange/import pipeline; convert/optimize for browser use |
| `.blend` | Authoring/source archive, not served directly as runtime content |

Suggested pipeline:
1. Find or create the asset.
2. Verify source and rights.
3. Clean up in Blender if necessary.
4. Reduce geometry, materials, and texture sizes appropriately.
5. Export GLB/glTF.
6. Load progressively in the web experience.
7. Test loading, rendering, interaction, and fallback behavior on target devices.

## 6. Performance guidance

3D scenes are ongoing rendering workloads that consume GPU resources, memory, battery, and thermal headroom.

- Load 3D only when it adds meaningful value.
- Avoid a global 3D scene on the homepage by default.
- Progressive/nested loading: lightweight first state, higher detail only when needed.
- Set a sensible render pixel ratio; don't blindly render at maximum device DPR.
- Reduce geometry, texture resolution, lights, shadows, and post-processing when appropriate.
- Use instancing for large repeated geometry where suitable.
- Reduce or stop rendering when scenes are idle or not visible.
- Provide loading states, error states, and a non-3D fallback.
- Adapt quality to actual device performance, not simplistic device labels alone.
- Measure performance in browser tools on real hardware; don't assume a scene is performant because it runs on a developer's machine.

R3F performance guide: https://r3f.docs.pmnd.rs/advanced/scaling-performance
It discusses performance monitoring, quality regression during demanding movement, and progressive/nested loading strategies.

## 7. Where 3D belongs

- **Homepage:** mostly 2D editorial imagery, typography, video, and composition. Avoid a permanently heavy 3D scene without a strong concept.
- **Special stories:** use 3D for spatial reconstructions, monument exploration, and spatial narratives when evidence and assets justify it.
- **Exploration tools:** 3D can be especially useful for terrain, geographic data, and connected locations.
- **Explanatory scenes:** use selectively for cutaways, mechanisms, or visual systems that benefit from spatial representation.

3D should be an occasional event. If every story uses it, it loses impact. A story should choose its visual medium based on subject and editorial purpose.

## 8. Recommended learning resources

- Three.js: https://threejs.org/ and https://threejs.org/docs/
- React Three Fiber: https://r3f.docs.pmnd.rs/
- Drei: https://drei.docs.pmnd.rs/
- Discover Three.js: https://discoverthreejs.com/ (foundations and practical tips)
- Three.js examples: https://threejs.org/examples/
- React Three Fiber examples gallery: https://pmndrs.github.io/react-three-examples/ — examples of R3F techniques; check versions/requirements before adapting.

## 9. Recommendations for Viraaasat (not yet locked)

- React Three Fiber + Three.js is the likely implementation pairing if the selected frontend stack remains React.
- Drei is a likely helper dependency, adopted selectively.
- Blender is our custom asset/optimization tool, not a requirement for every story.
- Prefer GLB/glTF for browser-delivered models.
- Do not place 3D on the homepage by default; keep it for stories where spatial exploration adds real understanding.
- Never let a 3D-only interaction gate access to factual content.
- Use lower-complexity/mobile-adapted scenes and a meaningful fallback.
- Keep the scene's evidence, provenance, and reconstruction uncertainty visible where relevant.
- Avoid alpha versions and experimental renderer APIs for production unless consciously tested and justified.

## 10. Agent implementation checklist

Before proposing or implementing 3D, the agent should answer:
1. What specific understanding does 3D add that a 2D alternative would not?
2. Is the model/scene source and license recorded?
3. Is this a real representation, schematic, or reconstruction—and is that communicated accurately?
4. What is the intended interaction and is it intuitive?
5. What is the asset budget (geometry, textures, download size)?
6. What is the loading/fallback state?
7. How does it adapt to mobile, reduced motion, and low performance?
8. Is rendering reduced or stopped when not needed?
9. Has it been tested on realistic target hardware and with browser performance tools?
10. Does it fit Viraaasat's editorial/cinematic identity, or is it merely showing off technology?

## Research sources

- React Three Fiber introduction: https://r3f.docs.pmnd.rs/ — R3F's React renderer positioning, version compatibility, learning path, and ecosystem.
- R3F scaling performance: https://r3f.docs.pmnd.rs/advanced/scaling-performance — performance monitoring, quality regression, and progressive loading patterns.
- R3F examples gallery: https://pmndrs.github.io/react-three-examples/ — practical implementation examples; verify current versions before using.
- Three.js docs and examples: https://threejs.org/docs/ and https://threejs.org/examples/

---

**Decision status:** Research completed. The stack and specific use of 3D are recommendations only; not locked until consolidated with other research and implementation planning.
