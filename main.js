/**
 * Viraaasat — Cinematic Scroll Journey Engine
 * Refinement Pass: Zero-Jitter Scroll Synchronization, Bespoke Transitions, and Layout Integrity
 */

(() => {
  // Respect user preference and check library availability
  if (!window.gsap || !window.ScrollTrigger) {
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const motion = gsap.matchMedia();

  motion.add(
    {
      enabled: "(prefers-reduced-motion: no-preference)",
      isMobile: "(max-width: 800px)",
      isTablet: "(max-width: 1024px)",
    },
    ({ conditions }) => {
      if (!conditions.enabled) {
        return;
      }

      const isMobile = conditions.isMobile;
      const stage = document.querySelector(".museum-stage");
      const sceneLayers = [...document.querySelectorAll(".scene-layer")];
      const actTag = document.querySelector(".stage-act");
      const locationTag = document.querySelector(".stage-location");
      const counterCurrent = document.querySelector(".counter-current");
      const timelineProgress = document.querySelector(".timeline-progress");
      const markers = [...document.querySelectorAll(".timeline-markers .marker")];
      const indicator = document.querySelector(".film-scroll-indicator");
      const acts = [...document.querySelectorAll(".act")];
      const cards = acts.map((act) => act.querySelector(".act-card"));

      if (!stage || sceneLayers.length < 8) return;

      // 8 Scenes metadata with narrative continuity
      const SCENES = [
        { act: "ACT I", location: "THE THRESHOLD", title: "Stepwell & Jali Latticework" },
        { act: "ACT II", location: "THE LIVING ARCHIVE", title: "Museum Corridors" },
        { act: "ACT III", location: "THE ROCK-CUT SANCTUARIES", title: "Ajanta & Ellora" },
        { act: "ACT IV", location: "CARTOGRAPHY OF THE SUBCONTINENT", title: "1788 Rennell Map" },
        { act: "ACT V", location: "THE STONE REALM", title: "Hampi & Khajuraho" },
        { act: "ACT VI", location: "THE MONUMENT", title: "The Taj Mahal" },
        { act: "ACT VII", location: "THE SACRED CURRENT", title: "Ghats of Varanasi" },
        { act: "ACT VIII", location: "THE HORIZON", title: "The Himalayan Frontier" },
      ];

      // Mark body as motion-ready
      document.body.classList.add("motion-ready");
      gsap.set(stage, { autoAlpha: 1 });

      // Initialize scene visual layers: Scene 0 visible, others hidden
      sceneLayers.forEach((layer, idx) => {
        if (idx === 0) {
          gsap.set(layer, { autoAlpha: 1 });
        } else {
          gsap.set(layer, { autoAlpha: 0 });
        }
      });

      // Initialize cards: Card 0 visible, others hidden
      cards.forEach((card, idx) => {
        if (!card) return;
        if (idx === 0) {
          gsap.set(card, { autoAlpha: 1, y: 0 });
        } else {
          gsap.set(card, { autoAlpha: 0, y: isMobile ? 12 : 18 });
        }
      });

      // Update active HUD elements
      let currentActiveIndex = -1;
      const activateScene = (index) => {
        if (index === currentActiveIndex) return;
        if (index < 0 || index >= SCENES.length) return;
        currentActiveIndex = index;
        const scene = SCENES[index];

        if (actTag) actTag.textContent = scene.act;
        if (locationTag) locationTag.textContent = scene.location;
        if (counterCurrent) counterCurrent.textContent = String(index + 1).padStart(2, "0");

        markers.forEach((m, idx) => {
          if (idx === index) {
            m.classList.add("active");
          } else {
            m.classList.remove("active");
          }
        });
      };

      // Set initial HUD
      activateScene(0);

      // Marker click smooth navigation
      markers.forEach((marker, idx) => {
        marker.addEventListener("click", () => {
          if (acts[idx]) {
            acts[idx].scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      // -----------------------------------------------------------------
      // Master Unified Scroll Timeline (8.0 duration units = 1.0 per act)
      // -----------------------------------------------------------------
      const story = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: ".journey",
          start: "top top",
          end: "bottom top",
          scrub: isMobile ? 0.3 : 0.45,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            // Update HUD progress bar
            if (timelineProgress) {
              timelineProgress.style.width = `${progress * 100}%`;
            }
            // Hide mouse indicator after user starts scrolling
            if (indicator) {
              indicator.style.opacity = progress > 0.02 ? "0" : "1";
            }
            // Update active scene indicator based on progress
            const actIdx = Math.min(7, Math.max(0, Math.floor(progress * 8.0 - 0.001)));
            activateScene(actIdx);
          },
        },
      });

      // =================================================================
      // BESPOKE SCENE CHOREOGRAPHY & CINEMATIC TRANSITIONS
      // =================================================================

      // Scene 0: The Threshold (Architecture & Jali Lattice)
      const media0 = sceneLayers[0].querySelector(".scene-media");
      story.to(media0, { scale: 1.06, yPercent: -2, duration: 0.9 }, 0);
      if (cards[0]) {
        story.to(cards[0], { autoAlpha: 0, y: -16, duration: 0.28, ease: "power1.in" }, 0.72);
      }

      // Transition 0 -> 1: Architectural Portal Zoom (Center circular mask reveal)
      const layer1 = sceneLayers[1];
      const media1 = layer1.querySelector(".scene-media");
      story.fromTo(
        layer1,
        { autoAlpha: 0, clipPath: "circle(0% at 50% 50%)", scale: 1.08 },
        { autoAlpha: 1, clipPath: "circle(125% at 50% 50%)", scale: 1, duration: 0.45, ease: "power2.inOut" },
        0.75
      );
      story.to(media0, { opacity: 0.15, scale: 1.15, duration: 0.4 }, 0.8);
      story.set(sceneLayers[0], { autoAlpha: 0 }, 1.2);
      if (cards[1]) {
        story.fromTo(cards[1], { autoAlpha: 0, y: isMobile ? 12 : 18 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }, 0.95);
        story.to(cards[1], { autoAlpha: 0, y: -16, duration: 0.28, ease: "power1.in" }, 1.72);
      }

      // Scene 1: The Living Archive (Museum Corridors)
      story.to(media1, { xPercent: -3, scale: 1.05, duration: 0.85 }, 1.05);

      // Transition 1 -> 2: Directional Basalt Shadow Wipe (Left-to-right wipe)
      const layer2 = sceneLayers[2];
      const media2 = layer2.querySelector(".scene-media");
      story.fromTo(
        layer2,
        { autoAlpha: 0, clipPath: "inset(0 0 0 100%)", xPercent: 5 },
        { autoAlpha: 1, clipPath: "inset(0 0 0 0%)", xPercent: 0, duration: 0.45, ease: "power2.out" },
        1.75
      );
      story.to(media1, { xPercent: -6, opacity: 0.2, duration: 0.4 }, 1.78);
      story.set(layer1, { autoAlpha: 0 }, 2.2);
      if (cards[2]) {
        story.fromTo(cards[2], { autoAlpha: 0, y: isMobile ? 12 : 18 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }, 1.95);
        story.to(cards[2], { autoAlpha: 0, y: -16, duration: 0.28, ease: "power1.in" }, 2.72);
      }

      // Scene 2: The Rock-Cut Sanctuaries (Ajanta & Ellora)
      story.to(media2, { scale: 1.05, xPercent: 2, duration: 0.85 }, 2.05);

      // Transition 2 -> 3: Parchment Luminance Dissolve (Stone to historic map)
      const layer3 = sceneLayers[3];
      const media3 = layer3.querySelector(".scene-media");
      story.fromTo(
        layer3,
        { autoAlpha: 0, scale: 1.08, filter: "brightness(0.7) contrast(1.15)" },
        { autoAlpha: 1, scale: 1, filter: "brightness(0.95) contrast(1.05)", duration: 0.45, ease: "power1.inOut" },
        2.75
      );
      story.to(media2, { opacity: 0, scale: 1.1, duration: 0.4 }, 2.78);
      story.set(layer2, { autoAlpha: 0 }, 3.2);
      if (cards[3]) {
        story.fromTo(cards[3], { autoAlpha: 0, y: isMobile ? 12 : 18 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }, 2.95);
        story.to(cards[3], { autoAlpha: 0, y: -16, duration: 0.28, ease: "power1.in" }, 3.72);
      }

      // Scene 3: Cartography of the Subcontinent (1788 Rennell Map)
      story.to(media3, { scale: 1.04, yPercent: -3, duration: 0.85 }, 3.05);

      // Transition 3 -> 4: Topographic Elevation Reveal (Bottom-to-top reveal into Hampi boulders)
      const layer4 = sceneLayers[4];
      const media4 = layer4.querySelector(".scene-media");
      story.fromTo(
        layer4,
        { autoAlpha: 0, clipPath: "inset(100% 0 0 0)", yPercent: 4 },
        { autoAlpha: 1, clipPath: "inset(0 0 0 0)", yPercent: 0, duration: 0.45, ease: "power2.out" },
        3.75
      );
      story.to(media3, { opacity: 0.15, duration: 0.38 }, 3.8);
      story.set(layer3, { autoAlpha: 0 }, 4.2);
      if (cards[4]) {
        story.fromTo(cards[4], { autoAlpha: 0, y: isMobile ? 12 : 18 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }, 3.95);
        story.to(cards[4], { autoAlpha: 0, y: -16, duration: 0.28, ease: "power1.in" }, 4.72);
      }

      // Scene 4: The Stone Realm (Hampi Ruins & Granite Boulders)
      story.to(media4, { xPercent: -2.5, scale: 1.05, duration: 0.85 }, 4.05);

      // Transition 4 -> 5: River Mist Soft Cross-Dissolve (Hampi to Taj Mahal reflection)
      const layer5 = sceneLayers[5];
      const media5 = layer5.querySelector(".scene-media");
      story.fromTo(
        layer5,
        { autoAlpha: 0, scale: 1.06 },
        { autoAlpha: 1, scale: 1, duration: 0.45, ease: "power1.inOut" },
        4.75
      );
      story.to(media4, { opacity: 0, duration: 0.42 }, 4.78);
      story.set(layer4, { autoAlpha: 0 }, 5.2);
      if (cards[5]) {
        story.fromTo(cards[5], { autoAlpha: 0, y: isMobile ? 12 : 18 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }, 4.95);
        story.to(cards[5], { autoAlpha: 0, y: -16, duration: 0.28, ease: "power1.in" }, 5.72);
      }

      // Scene 5: The Monument (Taj Mahal)
      story.to(media5, { scale: 1.05, yPercent: -1.5, duration: 0.85 }, 5.05);

      // Transition 5 -> 6: Water-Flow Cross-Dissolve (Yamuna water into Varanasi Ganga ghats)
      const layer6 = sceneLayers[6];
      const media6 = layer6.querySelector(".scene-media");
      story.fromTo(
        layer6,
        { autoAlpha: 0, yPercent: 3, scale: 1.04 },
        { autoAlpha: 1, yPercent: 0, scale: 1, duration: 0.45, ease: "power2.out" },
        5.75
      );
      story.to(media5, { opacity: 0, duration: 0.4 }, 5.78);
      story.set(layer5, { autoAlpha: 0 }, 6.2);
      if (cards[6]) {
        story.fromTo(cards[6], { autoAlpha: 0, y: isMobile ? 12 : 18 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }, 5.95);
        story.to(cards[6], { autoAlpha: 0, y: -16, duration: 0.28, ease: "power1.in" }, 6.72);
      }

      // Scene 6: The Sacred Current (Varanasi Dawn Ghats)
      story.to(media6, { xPercent: 2.5, scale: 1.04, duration: 0.85 }, 6.05);

      // Transition 6 -> 7: Altitude Crane Lift (Rising from mist into Himalayan summits)
      const layer7 = sceneLayers[7];
      const media7 = layer7.querySelector(".scene-media");
      story.fromTo(
        layer7,
        { autoAlpha: 0, yPercent: -5, scale: 1.07 },
        { autoAlpha: 1, yPercent: 0, scale: 1, duration: 0.48, ease: "power2.out" },
        6.75
      );
      story.to(media6, { yPercent: 5, opacity: 0, duration: 0.42 }, 6.78);
      story.set(layer6, { autoAlpha: 0 }, 7.2);
      if (cards[7]) {
        story.fromTo(cards[7], { autoAlpha: 0, y: isMobile ? 12 : 18 }, { autoAlpha: 1, y: 0, duration: 0.3, ease: "power2.out" }, 6.95);
      }

      // Scene 7: The Horizon (Himalayan Frontier, Ladakh & Zanskar)
      story.to(media7, { scale: 1.05, yPercent: -2, duration: 0.75 }, 7.05);

      // Transition 7 -> Journal: Warm atmospheric fade into Archive Ivory
      story.to(
        ".stage-cinematic-veil",
        {
          backgroundColor: "#F1EBDD",
          opacity: 1,
          duration: 0.42,
          ease: "power1.in",
        },
        7.55
      );

      story.to(
        [".stage-header", ".stage-timeline", ".stage-counter", ".stage-frame"],
        {
          autoAlpha: 0,
          duration: 0.25,
          ease: "power1.out",
        },
        7.6
      );

      story.to(
        stage,
        {
          autoAlpha: 0,
          duration: 0.35,
          ease: "power2.in",
        },
        7.8
      );

      // Refresh ScrollTrigger once fonts load to ensure exact pixel triggers
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => ScrollTrigger.refresh());
      }

      // Cleanup on resize/mode change
      return () => {
        story.scrollTrigger?.kill();
        story.kill();
        document.body.classList.remove("motion-ready");
      };
    }
  );
})();
