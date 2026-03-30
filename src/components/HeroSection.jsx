import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { resumeData } from '../data/resumeData';
import { useSectionScrollNav } from '../hooks/useSectionScrollNav';
import HeroBackdrop from './HeroBackdrop';

const letterVariants = {
  hidden: { opacity: 0, y: 48, filter: 'blur(8px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, delay: i * 0.045 },
  }),
};

const MAGNETIC_MAX = 6;

function MagneticWrap({ children, reducedMotion }) {
  const ref = React.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 380, damping: 24, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 380, damping: 24, mass: 0.35 });

  const onMove = (e) => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const hx = r.left + r.width / 2;
    const hy = r.top + r.height / 2;
    const dx = (e.clientX - hx) / (r.width / 2);
    const dy = (e.clientY - hy) / (r.height / 2);
    x.set(dx * MAGNETIC_MAX);
    y.set(dy * MAGNETIC_MAX);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        display: 'inline-block',
        x: reducedMotion ? 0 : sx,
        y: reducedMotion ? 0 : sy,
      }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

function clampSheen01(v) {
  return 0.35 + Math.min(1, Math.max(0, v)) * 0.3;
}

export default function HeroSection() {
  const goToSection = useSectionScrollNav();
  const heroRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const [reduceMotion, setReduceMotion] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  React.useEffect(() => {
    if (reduceMotion) return undefined;
    const el = heroRef.current;
    if (!el) return undefined;

    let raf = 0;
    let pending = null;

    const flush = () => {
      raf = 0;
      const e = pending;
      pending = null;
      if (!e) return;
      const rect = el.getBoundingClientRect();
      const rx = (e.clientX - rect.left) / rect.width;
      const ry = (e.clientY - rect.top) / rect.height;
      el.style.setProperty('--hero-px', String(clampSheen01(rx)));
      el.style.setProperty('--hero-py', String(clampSheen01(ry)));
    };

    const onMove = (e) => {
      pending = e;
      if (!raf) raf = requestAnimationFrame(flush);
    };

    el.addEventListener('mousemove', onMove);
    return () => {
      el.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  const phrases = resumeData.heroRotatingPhrases?.filter(Boolean) ?? [];
  const [phraseIndex, setPhraseIndex] = React.useState(0);

  React.useEffect(() => {
    if (phrases.length < 2) return undefined;
    const id = window.setInterval(() => {
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [phrases.length]);

  React.useEffect(() => {
    if (reduceMotion && phrases.length > 1) {
      setPhraseIndex(0);
    }
  }, [reduceMotion, phrases.length]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="editorial-section editorial-section--hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <HeroBackdrop />

      <motion.div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          width: '100%',
          maxWidth: '100%',
          y: heroParallaxY,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="editorial-eyebrow"
          style={{ marginBottom: 'clamp(1.25rem, 3vw, 2rem)' }}
        >
          {resumeData.title}
        </motion.p>

        <motion.h1
          className="editorial-display editorial-display--hero"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.02em',
          }}
        >
          {resumeData.name.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              custom={i}
              style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.55, delay: 0.45 }}
          style={{ width: 48, height: 1, background: 'var(--accent)', margin: 'clamp(1.75rem, 4vw, 2.5rem) auto' }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="editorial-body editorial-body--lg"
          style={{ maxWidth: 'min(var(--read-max-width), 92vw)', margin: '0 auto' }}
        >
          {resumeData.tagline}
        </motion.p>

        {resumeData.heroSubline && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="editorial-meta"
            style={{ maxWidth: 'min(var(--read-max-width), 92vw)', margin: '1.5rem auto 0', lineHeight: 1.65 }}
          >
            {resumeData.heroSubline}
          </motion.p>
        )}

        {phrases.length > 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.78 }}
            className="hero-rotating-line"
            aria-live={reduceMotion ? 'off' : 'polite'}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={reduceMotion ? 0 : phraseIndex}
                className="editorial-body"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              >
                {phrases[reduceMotion ? 0 : phraseIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        ) : (
          resumeData.heroTechLine && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.78 }}
              className="editorial-body"
              style={{ maxWidth: 'min(var(--read-max-width), 92vw)', margin: '1rem auto 0', color: 'var(--text-muted)' }}
            >
              {resumeData.heroTechLine}
            </motion.p>
          )
        )}

        <motion.nav
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="hero-cta-row"
          aria-label="Primary actions"
        >
          <MagneticWrap reducedMotion={reduceMotion}>
            <button
              type="button"
              className="editorial-outline-btn"
              onClick={() => goToSection('projects')}
            >
              View work
            </button>
          </MagneticWrap>
          <MagneticWrap reducedMotion={reduceMotion}>
            <button
              type="button"
              className="editorial-outline-btn"
              onClick={() => goToSection('contact')}
            >
              Contact
            </button>
          </MagneticWrap>
          <MagneticWrap reducedMotion={reduceMotion}>
            <a
              href={resumeData.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
            >
              Resume
            </a>
          </MagneticWrap>
        </motion.nav>
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="editorial-meta hero-scroll-btn"
        onClick={() => goToSection('about')}
        aria-label="Scroll to About section"
        style={{
          position: 'absolute',
          bottom: 'clamp(1.5rem, 4vh, 2.5rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          color: 'var(--text-primary)',
          letterSpacing: '0.22em',
        }}
      >
        <motion.span
          animate={reduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <HiChevronDown size={24} aria-hidden />
        </motion.span>
        Scroll
      </motion.button>
    </section>
  );
}
