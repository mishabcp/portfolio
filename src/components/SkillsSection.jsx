import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiServer, HiDatabase, HiChartBar, HiBeaker, HiDesktopComputer, HiCloudUpload, HiLightningBolt, HiPuzzle } from 'react-icons/hi';
import { SiPhp, SiLaravel, SiCodeigniter, SiMysql, SiJavascript, SiReact, SiJquery, SiBootstrap, SiTailwindcss, SiGit, SiPostman, SiCpanel } from 'react-icons/si';
import { resumeData } from '../data/resumeData';

const ACCENT = '#4db8a4';
const ACCENT_DIM = 'rgba(77, 184, 164, 0.3)';
const ACCENT_FAINT = 'rgba(77, 184, 164, 0.08)';

const backendKeywords = ['PHP', 'Laravel', 'CodeIgniter', 'MySQL', 'RESTful', 'API', 'Backend', 'Database', 'Query', 'Integration'];
const frontendKeywords = ['JavaScript', 'React', 'jQuery', 'Bootstrap', 'Tailwind', 'Responsive', 'Web Design'];

function groupSkills(skills) {
  const backend = [];
  const frontend = [];
  const tools = [];
  skills.forEach((s) => {
    if (backendKeywords.some((k) => s.includes(k))) backend.push(s);
    else if (frontendKeywords.some((k) => s.includes(k))) frontend.push(s);
    else tools.push(s);
  });
  return { backend, frontend, tools };
}

const skillIcons = {
  PHP: SiPhp,
  Laravel: SiLaravel,
  CodeIgniter: SiCodeigniter,
  MySQL: SiMysql,
  'RESTful APIs': HiCode,
  'API Integration': HiPuzzle,
  'Backend Development': HiServer,
  'Database Design': HiDatabase,
  'Query Optimization': HiChartBar,
  jQuery: SiJquery,
  'API Testing': HiBeaker,
  JavaScript: SiJavascript,
  React: SiReact,
  Bootstrap: SiBootstrap,
  'Tailwind CSS': SiTailwindcss,
  'Responsive Web Design': HiDesktopComputer,
  Git: SiGit,
  Postman: SiPostman,
  cPanel: SiCpanel,
  'Software Testing': HiBeaker,
  'System Deployment': HiCloudUpload,
  'Performance Optimization': HiLightningBolt,
};

const categoryConfig = [
  { key: 'backend', label: 'Backend', listKey: 'backend' },
  { key: 'frontend', label: 'Frontend', listKey: 'frontend' },
  { key: 'tools', label: 'Tools & DevOps', listKey: 'tools' },
];

export default function SkillsSection() {
  const { backend, frontend, tools } = groupSkills(resumeData.skills);

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      style={{
        padding: '5rem 2rem',
      }}
    >
      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '0.5rem' }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: ACCENT_DIM, fontWeight: 500 }}>Expertise</span>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontStyle: 'italic', color: '#5a5448' }}>{resumeData.skills.length} skills</span>
      </motion.div>

      {categoryConfig.map(({ key, label, listKey }) => {
        const list = { backend, frontend, tools }[listKey];
        return (
        <motion.div key={key} variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }} style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: ACCENT_DIM, marginBottom: '1rem', textTransform: 'uppercase' }}>{label}</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {list.map((s) => {
              const IconComponent = skillIcons[s] || HiCode;
              return (
              <motion.span
                key={s}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '6px 14px',
                  border: `1px solid ${ACCENT_DIM}`,
                  borderRadius: '2px',
                  fontSize: '0.8rem',
                  color: ACCENT,
                  cursor: 'default',
                  transition: 'background 0.3s, border-color 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = ACCENT_FAINT; e.currentTarget.style.borderColor = ACCENT; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = ACCENT_DIM; }}
              >
                <IconComponent style={{ fontSize: '1rem', flexShrink: 0 }} />
                <span>{s}</span>
              </motion.span>
              );
            })}
          </div>
        </motion.div>
        );
      })}
    </motion.section>
  );
}
