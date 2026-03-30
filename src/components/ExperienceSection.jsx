import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const ACCENT = '#000000';

export default function ExperienceSection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineOffset = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 15, -10, 0]);

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="editorial-section"
      style={{ position: 'relative' }}
    >
      <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="editorial-eyebrow">
        Experience
      </motion.span>

      <div style={{ position: 'relative', paddingLeft: '1.75rem' }}>
        <motion.div
          style={{
            position: 'absolute',
            left: 4,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'var(--accent-dim)',
            borderRadius: 1,
            y: lineOffset,
          }}
        />

        <motion.h2
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="editorial-display"
          style={{ fontSize: 'var(--text-display-sm)', margin: '0 0 0.35rem' }}
        >
          {resumeData.experience.role}
        </motion.h2>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
          className="editorial-body editorial-body--lg"
          style={{ margin: '0 0 0.2rem', fontWeight: 400 }}
        >
          {resumeData.experience.company}, {resumeData.experience.location}
        </motion.p>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
          className="editorial-body"
          style={{ marginBottom: 'clamp(2rem, 4vw, 2.75rem)', color: 'var(--text-quiet)' }}
        >
          {resumeData.experience.period}
        </motion.p>

        {resumeData.experience.points.map((p, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'relative',
              display: 'flex',
              gap: '1.25rem',
              marginBottom: '1.15rem',
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '-1.75rem',
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: ACCENT,
                marginTop: 5,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
                fontWeight: 400,
                color: '#000000',
                lineHeight: 1,
                minWidth: '1.75rem',
                letterSpacing: 'var(--letter-display-tight)',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <p className="editorial-body" style={{ margin: 0, flex: 1 }}>
              {p}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
