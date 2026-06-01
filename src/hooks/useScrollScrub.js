import { useEffect, useRef, useState } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';

/**
 * Tie a <video> element's `currentTime` to the scroll progress of a target
 * section. The section should be tall enough to give the video room to scrub
 * (typically 200–300vh). The video itself is `position: sticky` inside.
 *
 * Progress is run through a spring before driving the video seek and being
 * returned to callers — so video frames, opacity fades, and rail fills all
 * inherit the same eased motion (no jolts on fast scrolls).
 *
 * Browsers cannot reliably seek on a non-buffered video, so we:
 *   1. preload="auto" + .load() to start buffering on mount
 *   2. track `readyState` so we don't seek before we have data
 *   3. throttle seeks to rAF (the browser is already rAF-paced via scroll)
 */
export function useScrollScrub({
  sectionRef,
  videoRef,
  scrollLength = 2,
  smooth = true,
  spring = { stiffness: 120, damping: 30, mass: 0.55, restDelta: 0.0005 },
} = {}) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const smoothed = useSpring(scrollYProgress, spring);
  const progress = smooth ? smoothed : scrollYProgress;

  const [ready, setReady] = useState(false);
  const durationRef = useRef(0);
  const seekRequestedRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const v = videoRef?.current;
    if (!v) return undefined;

    const onMeta = () => {
      durationRef.current = Number.isFinite(v.duration) ? v.duration : 0;
    };
    const onCanPlay = () => {
      setReady(true);
      onMeta();
    };

    v.muted = true;
    v.playsInline = true;
    v.preload = 'auto';

    v.addEventListener('loadedmetadata', onMeta);
    v.addEventListener('canplay', onCanPlay);

    try {
      v.pause();
      v.load();
    } catch {
      /* noop */
    }

    return () => {
      v.removeEventListener('loadedmetadata', onMeta);
      v.removeEventListener('canplay', onCanPlay);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [videoRef]);

  useEffect(() => {
    const unsubscribe = progress.on('change', (p) => {
      seekRequestedRef.current = p;
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const v = videoRef?.current;
        const dur = durationRef.current;
        const target = seekRequestedRef.current;
        if (!v || !dur || target == null) return;
        const clamped = Math.max(0, Math.min(1, target));
        const next = clamped * dur;
        if (Math.abs((v.currentTime || 0) - next) > 0.02) {
          try {
            v.currentTime = next;
          } catch {
            /* seeking failed silently — browser will retry on next tick */
          }
        }
      });
    });
    return unsubscribe;
  }, [progress, videoRef]);

  return { progress, ready, scrollLength };
}

/**
 * Returns an opacity MotionValue that is 1 between `start` and `end` (with a
 * crossfade window on either side) and 0 elsewhere. Use to fade overlay text
 * during a specific scrub window.
 */
export function useScrubStageOpacity(progress, start, end, fadeWidth = 0.06) {
  return useTransform(
    progress,
    [
      Math.max(0, start - fadeWidth),
      start,
      end,
      Math.min(1, end + fadeWidth),
    ],
    [0, 1, 1, 0],
    { clamp: true },
  );
}
