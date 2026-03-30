/** Pixels above section targets — sticky nav; Lenis uses getBoundingClientRect (ignores scroll-margin). */
export const NAV_SCROLL_OFFSET = 72;

/**
 * Scroll to an element by id (with rAF retries for lazy-mounted sections).
 * @param {unknown} lenis - Lenis instance or null
 * @param {string} sectionId - DOM id without #
 * @param {{ maxAttempts?: number; onComplete?: () => void }} [options]
 */
export function scrollToSectionById(lenis, sectionId, options = {}) {
  const { maxAttempts = 45, onComplete } = options;
  let attempts = 0;
  let finished = false;

  const finish = () => {
    if (finished) return;
    finished = true;
    onComplete?.();
  };

  const run = () => {
    const el = document.getElementById(sectionId);
    if (el) {
      if (lenis) {
        lenis.scrollTo(el, {
          offset: -NAV_SCROLL_OFFSET,
          lerp: 0.05,
        });
      } else {
        const top =
          el.getBoundingClientRect().top +
          window.scrollY -
          NAV_SCROLL_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
      }
      finish();
      return;
    }
    attempts += 1;
    if (attempts < maxAttempts) {
      requestAnimationFrame(run);
    } else {
      finish();
    }
  };

  run();
}
