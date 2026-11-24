if (!window.gsap || !window.ScrollTrigger) {
  // The editorial fallback remains available without either motion library.
} else {
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const motion = gsap.matchMedia();
  motion.add(
    {
      enabled: "(prefers-reduced-motion: no-preference)",
      mobile: "(max-width: 800px)",
    },
    ({ conditions }) => {
      if (!conditions.enabled) return;

      const mobile = conditions.mobile;
      const stage = document.querySelector(".museum-stage");
      const world = document.querySelector(".stage-world");
      const bookStage = document.querySelector(".book-stage");
      const pages = document.querySelector(".time-pages");
      const gallery = document.querySelector(".gallery-room");
      const folio = document.querySelector(".continuity-folio");
      const gallerySurfaces = [
        ".gallery-ceiling",
        ".gallery-left-wall",
        ".gallery-back-wall",
        ".gallery-side-wall",
        ".gallery-floor",
        ".gallery-doorway",
        ".exhibit--one",
        ".exhibit--three",
      ];
      const mapRoom = document.querySelector(".map-room");
      const physicalMap = document.querySelector(".physical-map");
      const nightMap = document.querySelector(".night-map");
      const mapPlate = document.querySelector(".map-plate");
      const mapTable = document.querySelector(".map-table");
      const physicalRegister = document.querySelector(".map-register--physical");
      const nightRegister = document.querySelector(".map-register--night");
      const actTag = document.querySelector(".stage-act");
      const locationTag = document.querySelector(".stage-location");
      const counter = document.querySelector(".stage-counter span:first-child");
      const acts = [...document.querySelectorAll(".act")];
      const copyPanels = acts.map((act) => act.querySelector(".act-copy-inner"));
      const chapterNames = ["I", "II", "III", "IV", "V", "VI"];
      const labels = [
        "THE ARCHIVE AWAKENS",
        "PAGES OF TIME",
        "THE MUSEUM COMES ALIVE",
        "THE MAP ROOM",
        "HISTORY IS STILL HAPPENING",
        "THE OPEN BOOK",
      ];

      const loadImage = (image) => {
        if (!image || image.dataset.loaded || !image.dataset.sceneSrc) return;
        image.dataset.loaded = "true";
        image.decoding = "async";
        if (image.dataset.sceneSrcset) {
          image.sizes = image.dataset.sceneSizes || "70vw";
          image.srcset = image.dataset.sceneSrcset;
        }
        image.src = image.dataset.sceneSrc;
      };
      const loadScene = (selector) =>
        document.querySelectorAll(selector).forEach(loadImage);
      const loadScript = (path) => new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = path;
        script.async = true;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Could not load ${path}`));
        document.head.append(script);
      });

      document.body.classList.add("motion-ready");
      gsap.set(stage, { autoAlpha: 1 });
      gsap.set([pages, gallery, mapRoom], { autoAlpha: 0 });
      gsap.set(gallerySurfaces, { autoAlpha: 0 });
      gsap.set([folio, nightMap], { autoAlpha: 0 });
      gsap.set(copyPanels[0], { autoAlpha: 1, y: 0 });

      const bookState = { progress: 0 };
      const bookReady = loadScript("./assets/three.min.js")
        .then(() => loadScript("./assets/book-renderer.js"))
        .catch((error) => {
          // The CSS poster remains as a visual fallback when WebGL is unavailable.
          console.info("The physical book renderer is unavailable; using its poster fallback.", error);
        });

      const story = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: ".journey",
          start: "top top",
          end: "bottom top",
          scrub: mobile ? 0.35 : 0.45,
          invalidateOnRefresh: true,
          onUpdate: ({ progress }) => {
            if (progress > 0.12) loadScene(".time-page img, .continuity-folio img");
            if (progress > 0.25) loadScene(".exhibit img");
            if (progress > 0.47) loadImage(physicalMap);
            if (progress > 0.66) loadImage(nightMap);
          },
        },
      });

      bookReady.then(() => {
        if (window.viraaasatBook) window.viraaasatBook.setProgress(bookState.progress);
      });

      // I — the cover lifts at the spine; the left leaf unfurls as the book
      // settles into a balanced spread. No camera or scroll is pinned beyond
      // the existing natural-scroll chapter stage.
      story.to(bookState, {
        progress: 1,
        duration: 0.78,
        onUpdate: () => window.viraaasatBook?.setProgress(bookState.progress),
      }, 0);
      story.to(world, { backgroundColor: "#29251f", duration: 0.38 }, 0.42);

      // II — the printed folios become loose archive plates. The familiar
      // Mathura and Kalpa-sutra images carry forward from the actual page.
      story.to(bookStage, {
        autoAlpha: 0,
        scale: mobile ? 1.04 : 1.08,
        transformOrigin: mobile ? "50% 34%" : "68% 48%",
        duration: 0.25,
        ease: "power2.in",
      }, 0.86);
      story.fromTo(pages,
        { autoAlpha: 0, scale: 0.94, yPercent: 8 },
        { autoAlpha: 1, scale: 1, yPercent: 0, duration: 0.5, ease: "power2.out" },
        0.96,
      );
      story.fromTo(".time-page--stone",
        { xPercent: mobile ? -16 : -23, yPercent: 8, rotateY: -17, z: -180 },
        { xPercent: 0, yPercent: 0, rotateY: -4, z: 70, duration: 0.54, ease: "power2.out" },
        1.04,
      );
      story.fromTo(".time-page--manuscript",
        { xPercent: mobile ? 18 : 24, yPercent: -8, rotateY: 18, z: -140 },
        { xPercent: 0, yPercent: 0, rotateY: 3, z: 90, duration: 0.58, ease: "power2.out" },
        1.22,
      );
      story.to(pages, {
        autoAlpha: 0,
        scale: 1.1,
        rotateY: -11,
        duration: 0.27,
        ease: "power2.in",
      }, 1.83);

      // III — the Gita Govinda image from the opened spread persists as the
      // room's dominant exhibit. Architecture opens around that same object.
      story.fromTo(gallery,
        { autoAlpha: 0, scale: 1.035 },
        { autoAlpha: 1, scale: 1, duration: 0.25, ease: "power1.out" },
        1.98,
      );
      story.fromTo(".gallery-back-wall",
        { autoAlpha: 0, clipPath: "inset(0 44% 0 44%)", z: -460 },
        { autoAlpha: 1, clipPath: "inset(0)", z: -330, duration: 0.55, ease: "power2.out" },
        2.02,
      );
      story.fromTo(".gallery-ceiling",
        { autoAlpha: 0, yPercent: -18 },
        { autoAlpha: 1, yPercent: 0, duration: 0.42, ease: "power2.out" },
        2.06,
      );
      story.fromTo(".gallery-left-wall",
        { autoAlpha: 0, rotateY: 58, xPercent: -8 },
        { autoAlpha: 1, rotateY: 45, xPercent: 0, duration: 0.48, ease: "power2.out" },
        2.08,
      );
      story.fromTo(".gallery-side-wall",
        { autoAlpha: 0, rotateY: -54, xPercent: 8 },
        { autoAlpha: 1, rotateY: -38, xPercent: 0, duration: 0.48, ease: "power2.out" },
        2.1,
      );
      story.fromTo(".gallery-floor",
        { autoAlpha: 0, yPercent: 12 },
        { autoAlpha: 1, yPercent: 0, duration: 0.48, ease: "power2.out" },
        2.1,
      );
      story.fromTo(folio,
        { autoAlpha: 0, xPercent: mobile ? 25 : 31, yPercent: mobile ? 5 : 13, scale: 0.7, rotateY: 9 },
        { autoAlpha: 1, xPercent: 0, yPercent: 0, scale: 1, rotateY: 0, duration: 0.7, ease: "power2.inOut" },
        1.98,
      );
      story.fromTo(".exhibit--one",
        { autoAlpha: 0, xPercent: -22, z: 120, rotateY: 15 },
        { autoAlpha: 1, xPercent: 0, z: 100, rotateY: 11, duration: 0.43, ease: "power2.out" },
        2.3,
      );
      story.fromTo(".exhibit--three",
        { autoAlpha: 0, xPercent: 18, z: -300, rotateY: -9 },
        { autoAlpha: 1, xPercent: 0, z: -220, rotateY: -5, duration: 0.46, ease: "power2.out" },
        2.52,
      );
      story.fromTo(".gallery-doorway",
        { autoAlpha: 0, scaleX: 0.62, scaleY: 0.92 },
        { autoAlpha: 1, scaleX: 1, scaleY: 1, duration: 0.45, ease: "power2.out" },
        2.42,
      );
      story.to(gallery, { xPercent: mobile ? -5 : -8, rotateY: mobile ? -2 : -3 }, 2.86);
      story.to(".gallery-doorway", { scale: mobile ? 1.2 : 1.28, z: 200 }, 2.9);

      // IV — the doorway is the destination: its dark aperture becomes a
      // broad, unbordered physical map on the same reading surface.
      story.fromTo(mapRoom,
        { autoAlpha: 0, scale: 0.94, clipPath: "inset(4% 34% 4% 34%)" },
        { autoAlpha: 1, scale: 1, clipPath: "inset(0)", duration: 0.5, ease: "power2.inOut" },
        3.1,
      );
      story.to(gallery, { autoAlpha: 0, scale: 0.98, duration: 0.28, ease: "power1.in" }, 3.27);
      story.fromTo(mapPlate,
        { autoAlpha: 0, clipPath: "inset(45% 0)", rotateX: 22, rotateZ: -3 },
        { autoAlpha: 1, clipPath: "inset(0)", rotateX: 7, rotateZ: -1.5, duration: 0.55, ease: "power2.out" },
        3.3,
      );
      story.to(mapPlate, { rotateX: 3, scale: 1.015, duration: 0.52 }, 3.92);

      // V — a single clean wipe converts the land-and-river plate into NASA's
      // India-centered 2023 night-lights composite. The map is the continuity.
      story.fromTo(nightMap,
        { autoAlpha: 1, clipPath: "inset(0 100% 0 0)" },
        { clipPath: "inset(0 0% 0 0)", duration: 0.68, ease: "none" },
        4.18,
      );
      story.to(physicalMap, { clipPath: "inset(0 0 0 100%)", duration: 0.68, ease: "none" }, 4.18);
      story.to(mapTable, { filter: "brightness(.58)", duration: 0.68 }, 4.18);
      story.to(physicalRegister, { autoAlpha: 0, duration: 0.18 }, 4.34);
      story.to(nightRegister, { autoAlpha: 1, duration: 0.18 }, 4.66);
      story.to(world, { backgroundColor: "#101311", duration: 0.62 }, 4.18);

      // VI — the night view holds, then clears into the publication's ivory
      // surface. The framing device does not return after the archive opens.
      story.to(mapRoom, { autoAlpha: 0, scale: 0.99, duration: 0.34, ease: "power1.in" }, 5.22);
      story.to(world, { backgroundColor: "#F1EBDD", duration: 0.45 }, 5.22);
      story.to([".stage-header", ".stage-counter"], { autoAlpha: 0, duration: 0.18 }, 5.22);
      story.to(stage, { autoAlpha: 0, duration: 0.25, ease: "power1.in" }, 5.6);

      acts.forEach((act, index) => {
        const panel = copyPanels[index];
        const activate = () => {
          actTag.textContent = `ACT ${chapterNames[index]}`;
          locationTag.textContent = labels[index];
          counter.textContent = String(index + 1).padStart(2, "0");
        };

        if (index === 0) {
          activate();
          ScrollTrigger.create({
            trigger: act,
            start: "top top",
            end: "bottom 8%",
            onEnter: activate,
            onEnterBack: activate,
          });
          return;
        }

        gsap.fromTo(panel,
          { autoAlpha: 0, y: mobile ? 12 : 7 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.48,
            ease: "power2.out",
            scrollTrigger: {
              trigger: act,
              start: mobile ? "top -8%" : "top -10%",
              end: "bottom 8%",
              toggleActions: "play reverse play reverse",
              onEnter: activate,
              onEnterBack: activate,
            },
          },
        );
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      return () => {
        story.scrollTrigger?.kill();
        story.kill();
        document.body.classList.remove("motion-ready");
        window.viraaasatBook = undefined;
      };
    },
  );
}
