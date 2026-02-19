import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const ACCENT = '#4db8a4';
const ACCENT_DIM = 'rgba(77, 184, 164, 0.3)';
const ACCENT_FAINT = 'rgba(77, 184, 164, 0.08)';

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      style={{
        padding: '5rem 2rem',
      }}
    >
      <motion.span
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        style={{
          display: 'block',
          marginBottom: '2.5rem',
          fontSize: '0.6rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: ACCENT_DIM,
          fontWeight: 500,
        }}
      >
        Selected Works
      </motion.span>

      <div style={{ display: 'grid', gap: '1.5rem' }}>
        {resumeData.projects.map((proj, i) => (
          <motion.div
            key={proj.name}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            transition={{ duration: 0.5 }}
            style={{
              border: `1px solid ${ACCENT_DIM}`,
              borderRadius: '8px',
              padding: '2rem',
              transition: 'background 0.3s, border-color 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = ACCENT;
              e.currentTarget.style.background = ACCENT_FAINT;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = ACCENT_DIM;
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 400, margin: 0, color: ACCENT }}>
                {proj.name}
              </h3>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 300, color: ACCENT_FAINT, lineHeight: 1, fontStyle: 'italic' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#5a5448', marginBottom: '1.5rem' }}>
              {proj.tech}
            </p>

            {proj.problem && (
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: ACCENT_DIM, marginBottom: '0.35rem' }}>Challenge</div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#8a8578', margin: 0, fontWeight: 300 }}>{proj.problem}</p>
              </div>
            )}
            {proj.solution && (
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: ACCENT_DIM, marginBottom: '0.35rem' }}>Solution</div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#8a8578', margin: 0, fontWeight: 300 }}>{proj.solution}</p>
              </div>
            )}
            {proj.outcome && (
              <div>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: ACCENT_DIM, marginBottom: '0.35rem' }}>Impact</div>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#9a9588', margin: 0, fontWeight: 300 }}>{proj.outcome}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
