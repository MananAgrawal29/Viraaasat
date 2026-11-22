# Viraaasat Research 15
## Audio Design, Soundscapes, Music & Sonic Storytelling

**Mission:** Establish a thoughtful audio philosophy for Viraaasat—ambient recordings, music, transitions, sound-led scenes, browser implementation, user controls, accessibility, and performance.

**Editorial north star:** Sound should deepen the reader's sense of place or clarify a story. It should never surprise, obstruct, manipulate, or be required to understand the narrative.

---

## 1. The Viraaasat sound philosophy

### Sound is atmosphere, evidence, and context—but not decoration by default

Viraaasat's sound should feel like **being present in a place**, not like a cinematic trailer playing over an article.

Audio may:
- Place the reader inside a specific environment
- Convey the rhythm of a place, process, or event
- Reveal a detail not visible in the photograph
- Create contrast between chapters
- Make a transition feel spatial or temporal
- Preserve a voice, language, music, or oral memory
- Offer a meaningful alternative experience to reading

Audio should not:
- Autoplay unexpectedly
- Force users to turn sound on
- Distract from reading
- Add emotional pressure through manipulative music
- Loop relentlessly
- Make essential information available only by listening
- Consume data or CPU unnecessarily

**Default:** The story works completely without sound. Audio is an optional layer.

---

## 2. Four audio layers we can use

### A. Location ambience
The authentic sound of a place: traffic, wind, rain, railway stations, riverbanks, markets, workshops, public spaces, birds, room tone.

**Use when:** place and environment are part of the story.

**Treatment:** short loops or gently sustained ambience, low level, no abrupt starts, with a clear user toggle.

### B. Human voice
Interviews, oral histories, brief spoken passages, local voices, excerpts from recorded testimony where permissions and context allow.

**Use when:** a person's voice provides a perspective or evidence that text alone cannot convey.

**Treatment:** clearly attributed; transcript; language identified; playback controls; consent and safety review.

### C. Music
Original compositions, commissioned music, appropriately licensed tracks, or public-domain material after rights and recording status are checked.

**Use when:** music has a narrative function—cultural context, a meaningful transition, or a deliberate chapter motif.

**Treatment:** restrained; optional; no default autoplay; avoid imposing a mood that changes the story's interpretation.

### D. Designed sound
Non-musical sounds designed for transitions, reveals or interactions: a soft pulse, texture, distant mechanical rhythm, tonal cue, or short transition.

**Use when:** the sound helps explain a change, signal an interaction or connect scenes.

**Treatment:** sparse, subtle, not game-like or notification-heavy.

---

## 3. A sound palette for story types

| Story type | Potential sound palette | Avoid |
|---|---|---|
| History | archival audio, room tone, bells, field ambience, carefully sourced recordings | fake archival audio without labeling |
| Geography | wind, water, forest, rain, birds, terrain ambience | generic nature loops that misrepresent the location |
| Cities | transit, traffic, street rhythms, public spaces | overloading the mix with noise |
| Culture | real instruments, singing, process sounds, spoken language | treating cultural sound as exotic decoration |
| Science/technology | machinery, room ambience, procedural sounds, restrained designed tones | science-fiction sound effects presented as real |
| Economy/work | tools, production, work rhythm, workplace ambience | sound that glamorizes or dehumanizes labor |
| Politics/institutions | environmental room tone, speech excerpts when relevant | manipulative dramatic score or fake crowd audio |
| Conflict/crisis | authentic recordings only when verified, safe and necessary | gratuitous distress, sensationalized effects |
| Future/scenarios | clearly designed or synthetic sound palette | presenting imagined sounds as real-world evidence |

**Rule:** A sound must have provenance and context if it is documentary. If illustrative, label it as illustrative.

---

## 4. The opening sound experience

Recommended Viraaasat approach:

1. The page loads **silently**.
2. A small, visible **Sound: Off** control is available (or a clearly labeled “Listen to ambience” invitation for the scene).
3. User explicitly opts in.
4. Sound starts at a restrained level and fades in smoothly.
5. A global control lets users mute/pause at any time.
6. The story remains fully readable if audio is off or unavailable.
7. The choice never traps the user or follows them unexpectedly between stories.

Do not assume a user wants sound because they clicked, scrolled, or stayed on a page. Explicit audio opt-in is the most respectful default.

---

## 5. Scroll and sound choreography

Audio can support scroll storytelling, but avoid automatically triggering loud, distinct or consequential sounds as the reader scrolls.

### Suggested choreography patterns

#### Ambient bed
A short scene-specific ambience fades in only after the user explicitly enables sound. It may remain while a chapter is in view, but fades out when the story section ends or the user mutes.

#### Chapter transition
A brief soft transition (or silence) marks a chapter change. Do not play a sound at every scroll threshold.

#### Reveal
A sound can emphasize a reveal when the user is already listening, but the visual and text reveal must still make sense without it.

#### Sound-led pause
A brief environmental moment may offer an optional listening pause—e.g., “Listen to the station for 12 seconds”—with a visible skip/continue control and no autoplay.

#### Audio evidence
A short excerpt of a real recording may be presented as evidence, with attribution, transcript, date/context and controls. Avoid unnecessary loops.

**Design principle:** Silence is a valid transition. Do not fill every pause.

---

## 6. Sound levels and mixing

No universal decibel target fits all speakers, devices, headphones and ambient scenes. Mix for clarity and test on real playback devices.

### Suggested editorial mix principles
- Ambient beds should sit comfortably below narration and meaningful foreground sound.
- Speech must remain clear; music and ambience should not mask it.
- Avoid excessive bass, sharp high-frequency textures, sudden loud peaks or startling transitions.
- Normalize clip loudness consistently enough that users do not need to constantly adjust volume between scenes.
- Use fades rather than abrupt cuts where appropriate.
- Avoid heavy compression that makes quiet ambience unnaturally loud.
- Provide independent controls for audio content when feasible, and always allow mute/pause.

W3C's accessibility guidance recommends keeping background audio low when it accompanies speech, allowing processing time and avoiding distracting audio. It includes a specific WCAG AAA recommendation for background audio substantially below foreground speech; treat this as a reference for speech mixes, not a universal target for every soundscape.

---

## 7. Recording authentic Indian sound

Original recordings can become a distinctive part of Viraaasat's identity.

### Practical recording checklist
- Use a suitable mic or portable recorder where possible.
- Record a few seconds of quiet room tone before/after the scene.
- Capture multiple distances: wide ambience, close process detail, distinct sound.
- Monitor clipping, wind, handling noise and unintended speech.
- Note location, date, recording device, mic, conditions and consent.
- Record only where permitted; avoid exposing private conversations or vulnerable individuals.
- Use headphones to review recordings before editing.
- Keep the original file; edit a copy.
- Use a clear filename and asset ID.

### Sound capture notes
Record at least:
- **Bed:** 30–90 seconds of continuous environment where safe and useful
- **Detail:** short focused sounds (tool, movement, water, machine)
- **Room tone:** 10–30 seconds of stable ambient tone
- **Perspective:** a second recording position or distance if it adds context

These are practical starting ranges, not technical requirements. A good recording may be shorter or longer depending on the scene.

---

## 8. Sound sourcing and rights

Audio has its own rights and provenance register, just like photography.

### Sourcing options
1. Original field recordings by the team
2. Commissioned recordings
3. Licensed sound libraries with suitable web/editorial rights
4. Creative Commons sounds after license-by-license verification
5. Public-domain recordings only after verifying the recording and underlying work status

### Record for every audio asset
- Asset ID
- Story slug and placement
- File name and format
- Creator/performer/recordist
- Source and original URL
- Recording date and location, when known
- License/permission and restrictions
- Required credit
- Consent or privacy notes
- Edit notes
- Verification notes
- Reviewer and approval

Music copyright and sound recording rights can be separate. A public-domain composition does not automatically make every modern recording of it public domain. Verify the specific recording and rights.

---

## 9. Audio accessibility

W3C WAI guidance recommends planning media accessibility from the start, providing captions for speech and meaningful non-speech audio, transcripts, descriptions of relevant visual information, and accessible media controls.

### Viraaasat standards
- Sound is never essential to understanding the story.
- Standalone speech/audio has a transcript.
- Meaningful sound events are described in captions/transcripts.
- Audio controls have accessible names and are keyboard operable.
- Users can adjust volume independently of system volume where feasible.
- No autoplay with sound.
- Captions do not obscure important visual information.
- Visual information conveyed by video is described when needed.
- Story has a silent/reduced-motion alternative.
- Do not rely on sound alone for status, instruction, or feedback.
- Avoid sudden peaks, startling sounds, or repetitive high-pitched effects.

### Transcript format
For a field recording or soundscape, a descriptive transcript may include:

- [Rail station ambience: train brakes, announcements in the distance, footsteps]
- [A vendor calls out in Marathi]
- **Speaker (if known and appropriate):** Exact speech or translation
- [Train departs; sound gradually fades]

Do not invent transcript details that aren't actually audible. Translations should be reviewed where meaning matters.

---

## 10. Browser audio architecture

### Start simple
Use the HTML `<audio>` element for ordinary playback, full-length tracks and simple controls. It has built-in media semantics, playback controls and streaming behavior.

Use the Web Audio API when there is a genuine need for:
- Mixing multiple sources
- Volume automation/fades
- Panning
- Filters
- Spatial sound
- Audio-reactive visualizations
- Precise timing/scheduling

### Proposed Viraaasat implementation approach
- Native audio playback for story ambience and excerpts initially.
- A small shared audio controller for user state and controls.
- Web Audio API added only when advanced mixing or transitions require it.
- Consider a lightweight audio library such as Howler only if cross-browser complexity or multi-sound management becomes substantial.
- Avoid adding an audio library for a simple handful of tracks.

### Browser restrictions
Browsers commonly block audible autoplay unless user interaction or other browser-specific conditions permit it. Create/resume an audio context from a user gesture and handle play failures gracefully.

**Do not build the design around autoplay succeeding.**

---

## 11. Audio loading and performance

- Avoid loading large audio files before the user opts in.
- Use streaming `<audio>` for longer tracks.
- Use decoded buffers only when the effect requires it.
- Use appropriate compressed formats and test quality/size; do not assume one codec works identically everywhere.
- Consider multiple encodings only if compatibility testing justifies it.
- Preload metadata or small assets selectively; avoid blanket preloading.
- Lazy-load audio near the relevant scene or after opt-in.
- Pause or stop offscreen audio when it is no longer relevant.
- Avoid dozens of concurrent audio sources.
- Keep CPU-intensive processing and effects minimal.
- Provide a fallback for failed network requests.

### Practical asset formats
Common options include:
- **MP3:** broad compatibility, practical for narration/music
- **AAC/M4A:** efficient, broadly supported depending on container/browser
- **Opus:** strong efficiency for web audio, but check target browser and delivery compatibility
- **WAV:** useful for recording/editing masters, usually too large for web delivery without a specific reason

Keep lossless originals for archival/editing; publish optimized delivery copies.

---

## 12. Audio controls and UX

### Recommended minimal control
A compact global story control with:
- Sound On/Off
- Pause/Resume (when a soundscape is playing)
- Volume slider (optional if simple ambience only; more important for mixed audio)
- A visible state and accessible label

Avoid a complex mixing console unless a story actually uses multiple audio layers.

### User settings
The sound choice should be local to the story or session at first. Do not unexpectedly persist sound preferences across stories unless the behavior is explicit, discoverable and easy to change.

---

## 13. A story audio brief

Every story with audio should include a small brief:

| Field | Question |
|---|---|
| Purpose | What does audio add that visuals/text do not? |
| Type | Ambience, voice, music, sound design? |
| Source | Original, licensed, archival, synthetic? |
| Provenance | Who recorded it? When? Where? |
| Placement | Which scene and why? |
| Trigger | User play, scene entry, or manual action? |
| Duration | How long is it? Does it loop? |
| Mix | What should be foreground/background? |
| Accessibility | Transcript/captions and alternative |
| Rights | License, consent, credit |
| Performance | File size, format, loading strategy |
| Review | Who checked it? |

---

## 14. Recommended sound workflow

**Story brief → sonic brief → field recording/source search → rights & provenance check → edit → mix → transcript/captions → web optimization → placement → QA**

### Asset status
- Needed
- Recorded/found
- Provenance verified
- Rights verified
- Selected
- Edited/mixed
- Transcript prepared
- Optimized
- Placed
- QA approved

---

## 15. QA checklist

### Experience
- [ ] Story loads silently.
- [ ] Sound is opt-in.
- [ ] Mute/pause is easy to find.
- [ ] Sound doesn't start unexpectedly during scrolling.
- [ ] No abrupt or startling transitions.
- [ ] Audio is optional and doesn't block reading.
- [ ] Mobile controls are reachable.

### Accessibility
- [ ] Controls work with keyboard.
- [ ] Controls have accessible labels.
- [ ] Transcript/captions provided where needed.
- [ ] Important sound events are described.
- [ ] Audio isn't the only way to convey information.
- [ ] Speech and music/ambience are mixed for intelligibility.
- [ ] Reduced-motion/silent experience remains coherent.

### Performance
- [ ] Audio isn't downloaded unnecessarily before opt-in.
- [ ] Assets are compressed and appropriate.
- [ ] Playback failure has a graceful fallback.
- [ ] No excessive concurrent sounds.
- [ ] Offscreen scenes don't unnecessarily keep audio active.

### Editorial integrity
- [ ] Documentary sound has verified provenance.
- [ ] Illustrative or synthetic audio is labeled.
- [ ] No fake ambience used to imply a specific location/event.
- [ ] Music doesn't predetermine interpretation.
- [ ] Rights and consent are documented.

---

## 16. Proposed Viraaasat audio promise

> Sound on Viraaasat is optional. We use audio to deepen context, preserve voices and environments, and create meaningful transitions—not to force an emotional response. Documentary recordings are sourced and contextualized; illustrative or synthetic audio is identified. Stories remain understandable without sound, and audio is accompanied by appropriate transcripts, captions and controls.

---

## 17. Research sources

1. **MDN — Web Audio API: Using Web Audio**  
   https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API  
   Media elements, audio graph, play/pause, volume, panning, user controls and autoplay context.

2. **MDN — Web Audio API Best Practices**  
   https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Best_practices  
   Audio file loading, HTMLMediaElement versus buffers, autoplay policy, user controls and browser support.

3. **MDN — Autoplay Guide for Media and Web Audio APIs**  
   https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay  
   Browser autoplay restrictions and handling playback when blocked.

4. **MDN — HTML `<audio>` element**  
   https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/audio  
   Media controls, autoplay opt-in, preload and native media element.

5. **W3C WAI — Making Audio and Video Media Accessible**  
   https://www.w3.org/WAI/media/av/  
   Planning, transcripts, captions, audio descriptions, accessible players and sign language considerations.

6. **W3C WAI — Audio and Video Content Accessibility**  
   https://www.w3.org/WAI/media/av/av-content/  
   Recording and production guidance, low background audio, clarity, processing time, text contrast, visual descriptions and sensory alternatives.

7. **W3C WAI — Audio Accessibility**  
   https://www.w3.org/WAI/people-use-web/abilities-barriers/auditory/  
   Volume controls, not relying on sound alone, captions and alternatives.

8. **W3C — WCAG 2.2 Techniques for Audio Description**  
   https://www.w3.org/WAI/WCAG22/Techniques/general/G78  
   User-selectable audio description tracks.

9. **W3C — Audio Description Techniques**  
   https://www.w3.org/WAI/WCAG22/Techniques/general/G173  
   Integrating narration/audio descriptions into the main soundtrack.

10. **BBC Research & Development — Accessible Object-Based Audio**  
    https://downloads.bbc.co.uk/rd/pubs/whp/whp-pdf-files/WHP395.pdf  
    Research on adaptive audio mixing, narrative importance and user personalization.

11. **Australian Government Style Manual — Video and Audio**  
    https://www.stylemanual.gov.au/content-types/video-and-audio  
    Media alternatives, captions, transcripts, accessibility and production considerations.

---

## Final takeaway

**Sound should make the reader feel closer to the story, not less in control of the experience.**

Viraaasat can use the sounds of India as a powerful signature—real places, real voices, real environments—but it should always be a choice.

Silence is not a fallback. Sometimes silence is the best design.
