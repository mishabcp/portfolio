import { useEffect, useState } from 'react';
import { useMotionValue } from 'framer-motion';

/**
 * Autoplay a <video> when its section enters the viewport, pause when it
 * leaves. Emits a `progress` MotionValue (0..1) driven by the video's own
 * playback time — so callers can use the SAME useScrubStageOpacity helper
 * to fade captions in sync with what's actually on screen (robust against
 * buffering pauses, unlike a setTimeout).
 *
 * Same return shape as useScrollScrub so call sites are interchangeable.
 */
export function usePlayOnView({ sectionRef, videoRef, threshold = 0.35 } = {}) {
  const progress = useMotionValue(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const v = videoRef?.current;
    if (!v) return undefined;

    const onMeta = () => setReady(true);
    const onTimeUpdate = () => {
      const dur = v.duration;
      if (dur && Number.isFinite(dur) && dur > 0) {
        progress.set(Math.max(0, Math.min(1, v.currentTime / dur)));
      }
    };
    const onEnded = () => {
      progress.set(1);
    };

    v.muted = true;
    v.playsInline = true;
    v.preload = 'auto';

    v.addEventListener('loadedmetadata', onMeta);
    v.addEventListener('timeupdate', onTimeUpdate);
    v.addEventListener('ended', onEnded);

    try {
      v.load();
    } catch {
      /* noop */
    }

    return () => {
      v.removeEventListener('loadedmetadata', onMeta);
      v.removeEventListener('timeupdate', onTimeUpdate);
      v.removeEventListener('ended', onEnded);
    };
  }, [videoRef, progress]);

  useEffect(() => {
    const section = sectionRef?.current;
    const v = videoRef?.current;
    if (!section || !v) return undefined;

    let intersectingNow = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        intersectingNow = entry.isIntersecting;
        if (intersectingNow) {
          const playPromise = v.play();
          if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {
              /* autoplay blocked — user will see the static last frame */
            });
          }
        } else {
          v.pause();
        }
      },
      { threshold },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [sectionRef, videoRef, threshold]);

  return { progress, ready };
}
