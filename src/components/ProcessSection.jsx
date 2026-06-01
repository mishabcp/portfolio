import React from 'react';
import { motion } from 'framer-motion';
import { marketingContent } from '../data/marketingContent';
import { usePlayOnView } from '../hooks/usePlayOnView';

const stageVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function ProcessSection() {
  const { process } = marketingContent;
  const sectionRef = React.useRef(null);
  const videoRef = React.useRef(null);

  usePlayOnView({ sectionRef, videoRef, threshold: 0.2 });

  /* Mobile (<960px) stacks all stages in one grid cell and crossfades the
     "active" one — desktop renders all four with the original entrance
     animation. We disable framer-motion variants on mobile so its inline
     opacity doesn't fight the CSS data-active opacity. */
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const mq = window.matchMedia('(max-width: 959px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  /* Active step is derived from the video's playback progress. Steps in
     marketingContent each carry an `at` threshold (0, 0.25, 0.5, 0.75) —
     whichever step's threshold the current progress most recently crossed
     becomes active. React skips re-renders when the index is unchanged. */
  const [activeIndex, setActiveIndex] = React.useState(0);
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;
    const steps = process.steps;
    const compute = () => {
      const d = v.duration;
      if (!d || !Number.isFinite(d) || d <= 0) return;
      const p = v.currentTime / d;
      let i = 0;
      for (let j = 0; j < steps.length; j += 1) {
        if (p >= steps[j].at) i = j;
      }
      setActiveIndex(i);
    };
    v.addEventListener('timeupdate', compute);
    v.addEventListener('seeked', compute);
    v.addEventListener('loadedmetadata', compute);
    compute();
    return () => {
      v.removeEventListener('timeupdate', compute);
      v.removeEventListener('seeked', compute);
      v.removeEventListener('loadedmetadata', compute);
    };
  }, [process.steps]);

  return (
    <section id="process" ref={sectionRef} className="process-section">
      <div className="process-section__inner">
        <header className="process-section__header">
          <span className="editorial-eyebrow">{process.eyebrow}</span>
          <h2 className="editorial-h2-section process-section__headline">
            {process.headline}
          </h2>
        </header>

        <div className="process-section__layout">
          <div className="process-section__video-pane">
            <video
              ref={videoRef}
              className="process-section__video"
              src="/process.mp4"
              muted
              playsInline
              loop
              preload="auto"
              aria-hidden
            />
          </div>

          <div className="process-section__copy-pane">
            <ol className="process-stages">
              {process.steps.map((step, i) => {
                const isActive = i === activeIndex;
                const stageContent = (
                  <>
                    <span className="process-stage__kicker">{step.kicker}</span>
                    <h3 className="process-stage__title">{step.title}</h3>
                    <p className="editorial-body process-stage__body">{step.body}</p>
                  </>
                );
                if (isMobile) {
                  return (
                    <li
                      key={step.kicker}
                      className="process-stage"
                      data-active={isActive ? 'true' : 'false'}
                      aria-hidden={!isActive ? 'true' : undefined}
                    >
                      {stageContent}
                    </li>
                  );
                }
                return (
                  <motion.li
                    key={step.kicker}
                    className="process-stage"
                    data-active={isActive ? 'true' : 'false'}
                    variants={stageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    custom={i}
                  >
                    {stageContent}
                  </motion.li>
                );
              })}
            </ol>

            {isMobile && (
              <div className="process-stages__dots" aria-hidden>
                {process.steps.map((step, i) => (
                  <span
                    key={step.kicker}
                    className={`process-stages__dot${i === activeIndex ? ' process-stages__dot--active' : ''}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
