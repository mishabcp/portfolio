import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { getSkillBrandColor } from '../data/skillBrandColors';
import { skillIcons, getTechIcon } from '../data/techIcons';
import { chunkIntoGroups } from '../utils/chunkIntoGroups';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/** Seconds per full loop; stagger so rows don’t feel synced */
const ROW_DURATIONS_S = [48, 58];
/** When prefers-reduced-motion is on, keep the marquee but slow it (CSS used to force animation: none !important) */
const REDUCED_MOTION_DURATION_MULT = 3.25;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    setReduced(mq.matches);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

function SkillStrip({ labels, rowIndex, duplicate }) {
  return (
    <ul
      className={`skills-marquee__strip${duplicate ? '' : ' skills-marquee__strip--primary'}`}
      role={duplicate ? undefined : 'list'}
      aria-hidden={duplicate ? true : undefined}
    >
      {labels.map((label, idx) => {
        const IconComponent = skillIcons[label] || getTechIcon(label);
        const key = duplicate ? `dup-${rowIndex}-${idx}-${label}` : `${rowIndex}-${idx}-${label}`;
        return (
          <li key={key} className="skills-marquee__tile skills-showcase__tile">
            <span className="skills-showcase__icon-wrap" aria-hidden>
              <IconComponent
                className="skills-showcase__icon"
                style={{ color: getSkillBrandColor(label) }}
              />
            </span>
            <span className="skills-showcase__name">{label}</span>
          </li>
        );
      })}
    </ul>
  );
}

function SkillMarqueeRow({ labels, rowIndex, reduceMotion }) {
  const base = ROW_DURATIONS_S[rowIndex % ROW_DURATIONS_S.length];
  const duration = reduceMotion
    ? Math.max(Math.round(base * REDUCED_MOTION_DURATION_MULT), 96)
    : base;
  const reverse = rowIndex % 2 === 1;

  const trackStyle = {
    animation: reverse
      ? `skills-marquee-scroll ${duration}s linear infinite reverse`
      : `skills-marquee-scroll ${duration}s linear infinite`,
  };

  return (
    <div className="skills-marquee">
      <div className="skills-marquee__viewport">
        <div className="skills-marquee__track" style={trackStyle}>
          <SkillStrip labels={labels} rowIndex={rowIndex} duplicate={false} />
          <SkillStrip labels={labels} rowIndex={rowIndex} duplicate />
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { skills, skillsSectionHeadline, skillsSectionIntro } = resumeData;
  const rows = chunkIntoGroups(skills, 2);
  const reduceMotion = usePrefersReducedMotion();

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      className="editorial-section skills-showcase"
    >
      <motion.div
        className="skills-showcase__shell"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } },
        }}
      >
        <motion.span variants={fadeUp} className="editorial-eyebrow skills-showcase__eyebrow">
          Skills
        </motion.span>

        <motion.div
          className="skills-showcase__frame"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.06, delayChildren: 0 },
            },
          }}
        >
          <motion.header variants={fadeUp} className="skills-showcase__header">
            <h2 className="skills-showcase__headline">{skillsSectionHeadline}</h2>
            <p className="skills-showcase__intro editorial-body">{skillsSectionIntro}</p>
          </motion.header>

          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.45 } } }}
            className="skills-showcase__marquees"
          >
            {rows.map((rowLabels, i) => (
              <SkillMarqueeRow key={i} labels={rowLabels} rowIndex={i} reduceMotion={reduceMotion} />
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
