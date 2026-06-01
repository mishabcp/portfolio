import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { marketingContent } from '../data/marketingContent';
import { resumeData } from '../data/resumeData';
import { useSectionScrollNav } from '../hooks/useSectionScrollNav';
import { usePlayOnView } from '../hooks/usePlayOnView';
import HeroBackdrop from './HeroBackdrop';

const MAGNETIC_MAX = 5;

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
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
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
      style={{ display: 'inline-block', x: reducedMotion ? 0 : sx, y: reducedMotion ? 0 : sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}

const headlineWord = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function HeroSection() {
  const goToSection = useSectionScrollNav();
  const heroRef = React.useRef(null);
  const videoRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  usePlayOnView({ sectionRef: heroRef, videoRef, threshold: 0.15 });

  /* Crossfade the loop seam: ramp opacity up over the first ~0.8s and
     down over the last 2s. With rAF we get a smooth curve regardless of
     how often `timeupdate` fires. Pauses freeze at the current value. */
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return undefined;
    const FADE_IN = 0.8;
    const FADE_OUT = 2.0;
    const smooth = (t) => t * t * (3 - 2 * t);
    let rafId = null;
    const compute = () => {
      const dur = v.duration;
      if (!dur || !Number.isFinite(dur) || dur <= FADE_IN + FADE_OUT) return;
      const t = v.currentTime;
      let opacity = 1;
      if (t < FADE_IN) opacity = smooth(t / FADE_IN);
      else if (t > dur - FADE_OUT) opacity = smooth(Math.max(0, (dur - t) / FADE_OUT));
      v.style.opacity = String(opacity);
    };
    const loop = () => {
      compute();
      rafId = requestAnimationFrame(loop);
    };
    const start = () => {
      if (rafId == null) rafId = requestAnimationFrame(loop);
    };
    const stop = () => {
      if (rafId != null) cancelAnimationFrame(rafId);
      rafId = null;
      compute();
    };
    v.addEventListener('play', start);
    v.addEventListener('pause', stop);
    v.addEventListener('loadedmetadata', compute);
    compute();
    return () => {
      stop();
      v.removeEventListener('play', start);
      v.removeEventListener('pause', stop);
      v.removeEventListener('loadedmetadata', compute);
    };
  }, []);

  const [reduceMotion, setReduceMotion] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const { hero } = marketingContent;
  const headlineWords = hero.headline.split(' ');

  return (
    <section
      ref={heroRef}
      id="hero"
      className="editorial-section editorial-section--hero hero-marketing"
    >
      <HeroBackdrop />

      <motion.div className="hero-marketing__layout" style={{ y: parallaxY }}>
      <div className="hero-marketing__content">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="editorial-eyebrow hero-marketing__eyebrow"
        >
          <span className="hero-marketing__pulse" aria-hidden />
          {hero.eyebrow}
        </motion.p>

        <motion.div
          className="hero-marketing__signature"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="hero-marketing__signature-prefix">I&rsquo;m</span>
          <span className="editorial-display editorial-display--hero hero-marketing__signature-name">
            {resumeData.name.split('').map((char, i) => (
              <span
                key={i}
                style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
              >
                {char}
              </span>
            ))}
          </span>
        </motion.div>

        <motion.h1
          className="hero-marketing__headline"
          initial="hidden"
          animate="visible"
        >
          {headlineWords.map((word, i) => {
            const isAccent =
              word.toLowerCase().replace(/[^a-z-]/g, '') === hero.accentWord.toLowerCase();
            const isLast = i === headlineWords.length - 1;
            return (
              <React.Fragment key={`${word}-${i}`}>
                <span className="hero-marketing__word-wrap">
                  <motion.span
                    custom={i}
                    variants={headlineWord}
                    className={`hero-marketing__word${isAccent ? ' hero-marketing__word--accent' : ''}`}
                  >
                    {word}
                  </motion.span>
                </span>
                {!isLast && '\u00A0'}
              </React.Fragment>
            );
          })}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          className="hero-marketing__subline-bold"
        >
          {hero.sublineBold}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85 }}
          className="editorial-body hero-marketing__subline"
        >
          {hero.subline}
        </motion.p>

        <motion.nav
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="hero-marketing__ctas"
          aria-label="Primary actions"
        >
          <MagneticWrap reducedMotion={reduceMotion}>
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary"
            >
              <FaWhatsapp aria-hidden className="cta-primary__icon" />
              <span>{hero.primaryCta.label}</span>
              <span className="cta-primary__arrow" aria-hidden>→</span>
            </a>
          </MagneticWrap>
          <MagneticWrap reducedMotion={reduceMotion}>
            <button
              type="button"
              className="cta-secondary"
              onClick={() => goToSection(hero.secondaryCta.sectionId)}
            >
              {hero.secondaryCta.label}
            </button>
          </MagneticWrap>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.15 }}
          className="hero-marketing__stats"
          role="list"
        >
          {hero.statsStrip.map((stat) => (
            <div key={stat.label} className="hero-marketing__stat" role="listitem">
              <div className="hero-marketing__stat-value">{stat.value}</div>
              <div className="hero-marketing__stat-label">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

        <motion.div
          className="hero-marketing__media"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        >
          <video
            ref={videoRef}
            className="hero-marketing__media-video"
            src="/hero.mp4"
            muted
            playsInline
            loop
            preload="auto"
            aria-hidden
          />
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.35 }}
        className="editorial-meta hero-scroll-btn hero-marketing__scroll"
        onClick={() => goToSection('problems')}
        aria-label="Scroll to next section"
      >
        <motion.span
          animate={reduceMotion ? { y: 0 } : { y: [0, 8, 0] }}
          transition={
            reduceMotion ? { duration: 0 } : { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
          }
        >
          <HiChevronDown size={22} aria-hidden />
        </motion.span>
        Scroll
      </motion.button>
    </section>
  );
}
