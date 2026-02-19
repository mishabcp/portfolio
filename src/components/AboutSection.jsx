import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const ACCENT = '#4db8a4';
const ACCENT_DIM = 'rgba(77, 184, 164, 0.3)';

function useCountUp(end, duration, start) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

function AnimatedCounter({ end, suffix = '', duration = 1500, start }) {
  const count = useCountUp(end, duration, start);
  return <span>{count}{suffix}</span>;
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
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
        About
      </motion.span>

      <motion.p
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6 }}
        style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#9a9588', marginBottom: '2rem', fontWeight: 300 }}
      >
        {resumeData.summary}
      </motion.p>

      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        transition={{ duration: 0.6 }}
        style={{
          borderLeft: `3px solid ${ACCENT}`,
          paddingLeft: '1.5rem',
          marginBottom: '2.5rem',
        }}
      >
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: '#b8b4a8', margin: 0, fontStyle: 'italic' }}>
          {resumeData.passionStatement}
        </p>
      </motion.div>

      {/* Animated counters */}
      <motion.div
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem' }}
      >
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: ACCENT }}>
            <AnimatedCounter end={2} suffix="+" duration={1200} start={inView} />
          </div>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT_DIM, marginTop: 4 }}>Years Experience</div>
        </div>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: ACCENT }}>
            <AnimatedCounter end={80} suffix="%" duration={1500} start={inView} />
          </div>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT_DIM, marginTop: 4 }}>Performance Gain</div>
        </div>
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: ACCENT }}>
            <AnimatedCounter end={3} suffix="+" duration={800} start={inView} />
          </div>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT_DIM, marginTop: 4 }}>Projects Delivered</div>
        </div>
      </motion.div>
    </motion.section>
  );
}
