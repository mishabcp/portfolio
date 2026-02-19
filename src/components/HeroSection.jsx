import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { HiChevronDown } from 'react-icons/hi';
import { resumeData } from '../data/resumeData';

const ACCENT = '#4db8a4';
const ACCENT_DIM = 'rgba(77, 184, 164, 0.3)';

const letterVariants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < breakpoint
  );
  React.useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);
  return isMobile;
}

export default function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesOptions = {
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    particles: {
      number: { value: isMobile ? 15 : 40 },
      color: { value: ACCENT },
      opacity: { value: { min: 0.1, max: 0.4 } },
      size: { value: { min: 1, max: 3 } },
      move: {
        enable: true,
        speed: isMobile ? 0.6 : 1,
        direction: 'none',
        random: true,
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: !isMobile, mode: 'grab' },
      },
      modes: { grab: { distance: 120, links: { opacity: 0.2 } } },
    },
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem 4rem',
        overflow: 'hidden',
      }}
      onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
    >
      {/* Cursor glow */}
      <div
        className="cursor-glow"
        style={{
          left: mouse.x,
          top: mouse.y,
        }}
      />

      {/* Particles */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Particles id="hero-particles" init={particlesInit} options={particlesOptions} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(77, 184, 164, 0.9)',
            fontWeight: 500,
            marginBottom: '1.5rem',
          }}
        >
          {resumeData.title}
        </motion.p>

        <motion.h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
            fontWeight: 300,
            lineHeight: 0.95,
            margin: 0,
            letterSpacing: '-0.02em',
            color: ACCENT,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.02em',
          }}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {resumeData.name.split('').map((char, i) => (
            <motion.span key={i} variants={letterVariants} custom={i} style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{ width: 60, height: 1, background: ACCENT, margin: '2rem auto' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            fontSize: '1.05rem',
            fontWeight: 300,
            color: '#8a8578',
            maxWidth: '520px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          {resumeData.tagline}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: ACCENT_DIM,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          textDecoration: 'none',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
        }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HiChevronDown size={28} />
        </motion.span>
        Scroll
      </motion.a>
    </section>
  );
}
