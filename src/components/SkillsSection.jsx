import React from 'react';
import { motion } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import { resumeData } from '../data/resumeData';
import { skillIcons } from '../data/techIcons';

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      className="editorial-section"
    >
      <motion.span
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        className="editorial-eyebrow"
        style={{ marginBottom: 'clamp(2rem, 4vw, 3rem)' }}
      >
        Expertise
      </motion.span>

      {resumeData.skillCategories.map((cat) => (
        <motion.div key={cat.name} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} style={{ marginBottom: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
          <div className="editorial-meta" style={{ marginBottom: '0.85rem', letterSpacing: '0.28em' }}>
            {cat.name}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {cat.skills.map((s) => {
              const IconComponent = skillIcons[s] || HiCode;
              return (
                <motion.span
                  key={s}
                  variants={{ hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.3 }}
                  className="skill-chip"
                >
                  <IconComponent style={{ fontSize: '0.9rem', flexShrink: 0 }} aria-hidden />
                  <span>{s}</span>
                </motion.span>
              );
            })}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}
