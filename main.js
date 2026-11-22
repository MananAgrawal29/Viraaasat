if (!window.gsap || !window.ScrollTrigger) {
  // The page stays readable if the optional motion runtime is unavailable.
} else {
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const motionMedia = gsap.matchMedia();

  motionMedia.add({
    motion: "(prefers-reduced-motion: no-preference)",
    mobile: "(max-width: 800px)",
  }, ({ conditions }) => {
    if (!conditions.motion) return;

    document.body.classList.add("motion-ready");

    const hero = document.querySelector(".opening");
    const stage = document.querySelector(".folio-stage");
    const vellum = document.querySelector(".folio--vellum");
    const oxide = document.querySelector(".folio--oxide");
    const forest = document.querySelector(".folio--forest");
    const heroCopy = document.querySelector(".opening-copy");
    const heroWash = document.querySelector(".hero-wash");
    const sun = document.querySelector(".art-sun");
    const contours = document.querySelector(".contours");
    const verticalNote = document.querySelector(".vertical-note");
    const intro = document.querySelector(".introduction");
    const glyph = document.querySelector(".intro-glyph");
    const featured = document.querySelector(".featured");
    const frame = document.querySelector(".feature-frame");
    const footer = document.querySelector(".site-footer");
    const mobile = conditions.mobile;

    const positions = () => ({
      vellum: { x: window.innerWidth * (mobile ? 0.16 : 0.38), y: window.innerHeight * (mobile ? -0.2 : -0.14), z: 100, rotation: 8, rotateX: -5, rotateY: -10, scale: 1 },
      oxide: { x: window.innerWidth * (mobile ? 0.24 : 0.44), y: window.innerHeight * (mobile ? -0.16 : -0.1), z: 0, rotation: 21, rotateX: 10, rotateY: 22, scale: 0.94 },
      forest: { x: window.innerWidth * (mobile ? 0.16 : 0.38), y: window.innerHeight * (mobile ? -0.15 : -0.04), z: -110, rotation: -15, rotateX: -10, rotateY: -20, scale: 0.87 },
    });

    const rest = positions();
    gsap.set(stage, { perspective: mobile ? 850 : 1300, autoAlpha: 1 });
    gsap.set([vellum, oxide, forest], { xPercent: -50, yPercent: -50, transformOrigin: "50% 50%", transformStyle: "preserve-3d" });
    gsap.set(vellum, rest.vellum);
    gsap.set(oxide, rest.oxide);
    gsap.set(forest, rest.forest);
    let entrance = null;

    const coverScale = () => {
      return Math.max(window.innerWidth / vellum.offsetWidth, window.innerHeight / vellum.offsetHeight) * (mobile ? 1.3 : 1.18);
    };

    const heroScroll = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: () => `+=${Math.round(window.innerHeight * (mobile ? 0.98 : 1.04))}`,
        scrub: 0.28,
        invalidateOnRefresh: true,
        onUpdate(self) {
          if (self.progress > 0.015 && entrance?.isActive()) entrance.kill();
        },
      },
    });

    heroScroll.to(heroCopy, { yPercent: -76, xPercent: mobile ? -8 : -5, rotation: -3.5, scale: 0.82, autoAlpha: 0 }, 0.02);
    heroScroll.to(verticalNote, { y: -80, autoAlpha: 0 }, 0.03);
    heroScroll.to(sun, { x: mobile ? -70 : -185, y: mobile ? 125 : 220, scale: mobile ? 1.75 : 2.15, rotation: -65, opacity: 0.24 }, 0.04);
    heroScroll.to(contours, { x: mobile ? 48 : 120, yPercent: mobile ? 32 : 45, rotation: mobile ? -2 : -1, opacity: 0.23 }, 0.04);

    // A sheet turns through the stack; the other two shear away at different depths.
    heroScroll.to(oxide, { x: mobile ? -window.innerWidth * 0.22 : -window.innerWidth * 0.28, y: window.innerHeight * 0.22, z: 180, rotation: -16, rotateX: mobile ? 12 : -8, rotateY: 202, scale: mobile ? 0.91 : 1.03 }, 0.08);
    heroScroll.to(forest, { x: mobile ? -window.innerWidth * 0.46 : -window.innerWidth * 0.42, y: -window.innerHeight * 0.42, z: -260, rotation: -34, rotateX: mobile ? 22 : 34, rotateY: 42, scale: 0.7 }, 0.12);

    // The pale folio unfolds until it becomes the full-screen ivory between chapters.
    heroScroll.to(vellum, { x: 0, y: 0, z: 260, rotation: 0, rotateX: 0, rotateY: 0, scale: coverScale }, 0.37);
    heroScroll.to(heroWash, { opacity: 1 }, 0.68);
    heroScroll.to(stage, { autoAlpha: 0 }, 0.965);

    entrance = gsap.timeline({ defaults: { overwrite: "auto" } });
    entrance.fromTo(stage, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.22, ease: "power1.out" }, 0);
    entrance.fromTo(
      vellum,
      { x: window.innerWidth * 0.48, y: -window.innerHeight * 0.82, z: 300, rotation: -18, rotateX: 58, rotateY: 28, scale: 0.74 },
      { ...rest.vellum, y: rest.vellum.y - 9, duration: 0.76, ease: "power3.in" },
      0.04,
    );
    entrance.to(vellum, { y: rest.vellum.y + 2, duration: 0.26, ease: "power2.out" }, 0.8);
    entrance.to(vellum, { y: rest.vellum.y, duration: 0.32, ease: "power1.out" }, 1.06);
    entrance.fromTo(
      oxide,
      { x: -window.innerWidth * 0.72, y: -window.innerHeight * 0.28, z: 240, rotation: -27, rotateX: 35, rotateY: 154, scale: 0.78 },
      { ...rest.oxide, duration: 0.92, ease: "power3.out" },
      0.18,
    );
    entrance.fromTo(
      forest,
      { x: window.innerWidth * 0.75, y: window.innerHeight * 0.96, z: -280, rotation: 31, rotateX: -48, rotateY: -52, scale: 0.7 },
      { ...rest.forest, duration: 0.9, ease: "power3.out" },
      0.38,
    );

    ScrollTrigger.create({
      trigger: intro,
      start: "top 86%",
      once: true,
      onEnter: () => intro.classList.add("is-visible"),
    });

    gsap.fromTo(
      glyph,
      { x: mobile ? -72 : -150, y: 56, rotation: -22, scale: 0.66, autoAlpha: 0 },
      {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        autoAlpha: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: intro, start: "top 88%", end: "top 35%", scrub: 0.5, invalidateOnRefresh: true },
      },
    );

    ScrollTrigger.create({
      trigger: featured,
      start: "top 82%",
      once: true,
      onEnter: () => featured.classList.add("is-visible"),
    });

    gsap.fromTo(
      frame,
      { y: mobile ? 48 : 86, rotationX: mobile ? -9 : -17, rotation: mobile ? 1.5 : 3.5, scale: mobile ? 0.96 : 0.92, transformPerspective: 1200 },
      {
        y: 0,
        rotationX: 0,
        rotation: 0,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: featured, start: "top 78%", end: "top 24%", scrub: 0.55, invalidateOnRefresh: true },
      },
    );

    ScrollTrigger.create({
      trigger: footer,
      start: "top 92%",
      once: true,
      onEnter: () => footer.classList.add("is-visible"),
    });

    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      document.body.classList.remove("motion-ready");
      intro.classList.remove("is-visible");
      featured.classList.remove("is-visible");
      footer.classList.remove("is-visible");
    };
  });
}
