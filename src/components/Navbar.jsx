import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { resumeData } from '../data/resumeData';

const ACCENT = '#4db8a4';
const ACCENT_DIM = 'rgba(77, 184, 164, 0.3)';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: ACCENT,
          transformOrigin: 'left',
          width: progressWidth,
          zIndex: 9999,
        }}
      />

      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          padding: '1rem 2rem',
          background: scrolled ? '#1a1a1a' : 'transparent',
          borderBottom: scrolled ? `1px solid ${ACCENT_DIM}` : 'none',
          transition: 'background 0.3s, border-color 0.3s',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 'var(--navbar-max-width)',
          margin: '0 auto',
        }}
      >
        <a href="#hero" style={{ color: ACCENT, textDecoration: 'none', fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', fontWeight: 600 }}>
          {resumeData.name}
        </a>

        {/* Desktop links */}
        <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="nav-desktop">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.15 }}
              style={{
                color: '#b8b4a8',
                textDecoration: 'none',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                transition: 'color 0.2s',
              }}
              onMouseOver={(e) => { e.currentTarget.style.color = ACCENT; }}
              onMouseOut={(e) => { e.currentTarget.style.color = '#b8b4a8'; }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </motion.a>
          ))}
          <a
            href={resumeData.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '8px 20px',
              border: `1px solid ${ACCENT_DIM}`,
              color: ACCENT,
              textDecoration: 'none',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = ACCENT_DIM; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'flex',
            background: 'none',
            border: 'none',
            color: '#d4d0c8',
            cursor: 'pointer',
            padding: 8,
          }}
          className="nav-mobile-toggle"
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <motion.div
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(20, 20, 20, 0.98)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: '#d4d0c8',
              textDecoration: 'none',
              fontSize: '1.25rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontFamily: "'Cormorant Garamond', serif",
            }}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href={resumeData.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '12px 28px',
            border: `1px solid ${ACCENT}`,
            color: ACCENT,
            textDecoration: 'none',
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginTop: '1rem',
          }}
          onClick={() => setMobileOpen(false)}
        >
          Download Resume
        </a>
      </motion.div>

      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
