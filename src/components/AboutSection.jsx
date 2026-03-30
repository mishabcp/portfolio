import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const ACCENT = '#000000';

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="editorial-section"
    >
      <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="editorial-eyebrow">
        Who I Am
      </motion.span>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(3rem, 8vw, 6rem)',
          alignItems: 'start',
        }}
      >
        <div>
          <motion.h2
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="about-headline"
          >
            <span className="about-headline__primary">{resumeData.aboutHeadline}</span>
          </motion.h2>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.6 }}
            className="editorial-body"
            style={{ marginBottom: '1.25rem', maxWidth: 'var(--read-max-width)' }}
          >
            {resumeData.summary}
          </motion.p>
          {resumeData.aboutContinuation && (
            <motion.p
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.6 }}
              className="editorial-body"
              style={{ marginBottom: 0, maxWidth: 'var(--read-max-width)' }}
            >
              {resumeData.aboutContinuation}
            </motion.p>
          )}
        </div>

        <motion.div variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }} className="about-panel">
          <h3 className="editorial-h3 about-panel__heading">How I Work</h3>

          <div className="about-panel__steps">
            {resumeData.process.map((step, i) => (
              <div key={i} className="about-panel__step">
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '0.15rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-caption)',
                    fontWeight: 600,
                    color: ACCENT,
                    opacity: 0.45,
                    letterSpacing: '0.08em',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-body-lg)',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    margin: '0 0 0.4rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  {step.title}
                </h4>
                <p className="editorial-body" style={{ margin: 0, maxWidth: 'none' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
