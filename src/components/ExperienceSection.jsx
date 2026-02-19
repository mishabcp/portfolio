import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const ACCENT = '#4db8a4';
const ACCENT_DIM = 'rgba(77, 184, 164, 0.3)';

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
      style={{
        padding: '5rem 2rem',
        position: 'relative',
      }}
    >
      <motion.span
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        style={{
          display: 'block',
          marginBottom: '2rem',
          fontSize: '0.6rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: ACCENT_DIM,
          fontWeight: 500,
        }}
      >
        Experience
      </motion.span>

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Timeline line with parallax */}
        <motion.div
          style={{
            position: 'absolute',
            left: 6,
            top: 0,
            bottom: 0,
            width: 2,
            background: ACCENT_DIM,
            borderRadius: 1,
            y: lineOffset,
          }}
        />

        <motion.h2
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 300,
            margin: '0 0 0.25rem',
            color: ACCENT,
          }}
        >
          {resumeData.experience.company}
        </motion.h2>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
          style={{ fontSize: '0.85rem', color: '#5a5448', marginBottom: '2rem', fontStyle: 'italic' }}
        >
          {resumeData.experience.role} · {resumeData.experience.period}
        </motion.p>

        {resumeData.experience.points.map((p, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'relative',
              display: 'flex',
              gap: '1.5rem',
              marginBottom: '1.25rem',
              alignItems: 'flex-start',
            }}
          >
            <span
              style={{
                position: 'absolute',
                left: '-2rem',
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: ACCENT,
                marginTop: 6,
                flexShrink: 0,
              }}
            />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: 300, color: ACCENT_DIM, lineHeight: 1, minWidth: '2rem' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#9a9588', margin: 0, fontWeight: 300 }}>{p}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
