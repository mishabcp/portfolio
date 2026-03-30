import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { resumeData } from '../data/resumeData';
import { useSectionScrollNav } from '../hooks/useSectionScrollNav';

const MotionButton = motion.button;

const navLinks = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'About', sectionId: 'about' },
  { label: 'Services', sectionId: 'services' },
  { label: 'Skills', sectionId: 'skills' },
  { label: 'Experience', sectionId: 'experience' },
  { label: 'Projects', sectionId: 'projects' },
  { label: 'Contact', sectionId: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const goToSection = useSectionScrollNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onNavSection = (sectionId) => {
    setMobileOpen(false);
    goToSection(sectionId);
  };

  return (
    <>
      <nav className={`nav-shell${scrolled ? ' nav-shell--scrolled' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-brand">
            {resumeData.name}
          </Link>

          <div style={{ display: 'none', gap: '1.75rem', alignItems: 'center' }} className="nav-desktop">
            {navLinks.map((link) => (
              <MotionButton
                key={link.sectionId}
                type="button"
                className="nav-link nav-link--section"
                transition={{ duration: 0.15 }}
                onClick={() => onNavSection(link.sectionId)}
              >
                {link.label}
              </MotionButton>
            ))}
            <a
              href={resumeData.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume"
            >
              Resume
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'flex',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              minWidth: 44,
              minHeight: 44,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className="nav-mobile-toggle"
          >
            {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </nav>

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
          background: 'var(--bg-overlay)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.25rem',
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.sectionId}
            type="button"
            className="nav-link nav-link--section"
            style={{ fontSize: '0.8rem', padding: '0.5rem' }}
            onClick={() => onNavSection(link.sectionId)}
          >
            {link.label}
          </button>
        ))}
        <a
          href={resumeData.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume"
          style={{ marginTop: '0.5rem' }}
          onClick={() => setMobileOpen(false)}
        >
          Download Resume
        </a>
      </motion.div>

      <style>{`
        @media (min-width: 1240px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
