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
              {process.steps.map((step, i) => (
                <motion.li
                  key={step.kicker}
                  className="process-stage"
                  variants={stageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  custom={i}
                >
                  <span className="process-stage__kicker">{step.kicker}</span>
                  <h3 className="process-stage__title">{step.title}</h3>
                  <p className="editorial-body process-stage__body">{step.body}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
