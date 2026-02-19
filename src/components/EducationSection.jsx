import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const ACCENT = '#4db8a4';
const ACCENT_DIM = 'rgba(77, 184, 164, 0.3)';

export default function EducationSection() {
  return (
    <motion.section
      id="education"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      style={{
        padding: '5rem 2rem',
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
        Education
      </motion.span>

      <div style={{ display: 'grid', gap: '1.25rem' }}>
        {resumeData.education.map((item, i) => (
          <motion.div
            key={item.degree}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={{
              border: `1px solid ${ACCENT_DIM}`,
              borderRadius: '6px',
              padding: '1.5rem',
            }}
          >
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 400, margin: '0 0 0.35rem', color: ACCENT }}>
              {item.degree}
            </h3>
            <p style={{ fontSize: '0.9rem', color: '#8a8578', margin: '0 0 0.25rem' }}>{item.institution} · {item.location}</p>
            <p style={{ fontSize: '0.8rem', color: '#5a5448', margin: 0 }}>{item.period}</p>
          </motion.div>
        ))}
      </div>

      {resumeData.certifications && resumeData.certifications.length > 0 && (
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          style={{
            marginTop: '2rem',
            padding: '1rem 1.5rem',
            borderLeft: `3px solid ${ACCENT}`,
            background: ACCENT_DIM.replace('0.3', '0.06'),
            borderRadius: '4px',
          }}
        >
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: ACCENT_DIM, marginBottom: '0.5rem', textTransform: 'uppercase' }}>Certification</div>
          <p style={{ fontSize: '0.95rem', color: '#b8b4a8', margin: 0, fontWeight: 500 }}>{resumeData.certifications[0]}</p>
        </motion.div>
      )}
    </motion.section>
  );
}
