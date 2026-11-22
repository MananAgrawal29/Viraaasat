const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const hero = document.querySelector(".opening");
const intro = document.querySelector(".introduction");
const glyph = document.querySelector(".intro-glyph");
const featured = document.querySelector(".featured");
const frame = document.querySelector(".feature-frame");
const sun = hero.querySelector(".art-sun");
const contours = hero.querySelector(".contours");
const footer = document.querySelector(".site-footer");
const revealSections = [intro, featured, footer];

let revealObserver;
let frameRequest = 0;
let heroTravel = 1;
let introTop = 0;
let introHeight = 1;
let featuredFrameTop = 0;
let featuredFrameHeight = 1;

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const smoothstep = (value) => {
  const progress = clamp(value);
  return progress * progress * (3 - 2 * progress);
};

function measureSections() {
  const scrollY = window.scrollY;

  heroTravel = Math.max(1, hero.offsetHeight * 0.92);
  introTop = intro.getBoundingClientRect().top + scrollY;
  introHeight = Math.max(1, intro.offsetHeight);
  featuredFrameTop = frame.getBoundingClientRect().top + scrollY;
  featuredFrameHeight = Math.max(1, frame.offsetHeight);
}

function updateScrollScene() {
  frameRequest = 0;

  if (motionPreference.matches) return;

  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;
  const heroProgress = clamp(scrollY / heroTravel);
  const transition = smoothstep((heroProgress - 0.12) / 0.88);
  const headlineExit = smoothstep((heroProgress - 0.05) / 0.34);
  const copyExit = smoothstep((heroProgress - 0.04) / 0.34);

  // The ivory wash bridges the opening into the next section while the title clears.
  hero.style.setProperty("--hero-transition", transition.toFixed(3));
  hero.style.setProperty("--headline-opacity", (1 - headlineExit).toFixed(3));
  hero.style.setProperty("--headline-shift", `${(-headlineExit * viewportHeight * 0.13).toFixed(1)}px`);
  hero.style.setProperty("--copy-opacity", (1 - copyExit).toFixed(3));

  // The orbit and contour field travel at different rates to create a shallow sense of depth.
  const artProgress = smoothstep((heroProgress - 0.08) / 0.9);
  sun.style.translate = `${(-artProgress * viewportHeight * 0.12).toFixed(1)}px ${(artProgress * viewportHeight * 0.11).toFixed(1)}px`;
  contours.style.translate = `0 ${(artProgress * viewportHeight * 0.16).toFixed(1)}px`;

  const introProgress = smoothstep((scrollY + viewportHeight - introTop) / (viewportHeight + introHeight));
  glyph.style.setProperty("--glyph-shift", `${((0.5 - introProgress) * 34).toFixed(1)}px`);

  const frameProgress = smoothstep(
    (scrollY + viewportHeight * 0.9 - featuredFrameTop) / (viewportHeight * 0.9 + featuredFrameHeight),
  );
  frame.style.setProperty("--frame-scale", (0.985 + frameProgress * 0.015).toFixed(4));
  frame.style.setProperty("--frame-opacity", (0.78 + frameProgress * 0.22).toFixed(3));
}

function scheduleScrollScene() {
  if (!frameRequest && !motionPreference.matches) {
    frameRequest = window.requestAnimationFrame(updateScrollScene);
  }
}

function revealSectionsInView() {
  const viewportHeight = window.innerHeight;

  for (const section of revealSections) {
    const bounds = section.getBoundingClientRect();

    // A restored scroll position may already be past a section; never leave it in a reveal state.
    if (bounds.bottom <= 0 || (bounds.top < viewportHeight * 0.9 && bounds.bottom > 0)) {
      section.classList.add("is-visible");
    } else if (revealObserver) {
      revealObserver.observe(section);
    } else {
      section.classList.add("is-visible");
    }
  }
}

function enableMotion() {
  if (motionPreference.matches) return;

  if ("IntersectionObserver" in window) {
    try {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
      );
    } catch {
      revealObserver = undefined;
    }
  }

  document.body.classList.add("motion-ready");
  revealSectionsInView();
  measureSections();
  window.addEventListener("scroll", scheduleScrollScene, { passive: true });
  window.addEventListener("resize", handleResize, { passive: true });
  scheduleScrollScene();
}

function clearScrollStyles() {
  hero.style.removeProperty("--hero-transition");
  hero.style.removeProperty("--headline-opacity");
  hero.style.removeProperty("--headline-shift");
  hero.style.removeProperty("--copy-opacity");
  sun.style.removeProperty("translate");
  contours.style.removeProperty("translate");
  glyph.style.removeProperty("--glyph-shift");
  frame.style.removeProperty("--frame-scale");
  frame.style.removeProperty("--frame-opacity");
}

function disableMotion() {
  document.body.classList.remove("motion-ready");
  window.removeEventListener("scroll", scheduleScrollScene);
  window.removeEventListener("resize", handleResize);
  revealObserver?.disconnect();
  revealObserver = undefined;

  if (frameRequest) window.cancelAnimationFrame(frameRequest);
  frameRequest = 0;
  clearScrollStyles();
}

function handleResize() {
  measureSections();
  scheduleScrollScene();
}

motionPreference.addEventListener("change", (event) => {
  if (event.matches) disableMotion();
  else enableMotion();
});

enableMotion();
document.fonts?.ready.then(handleResize);
