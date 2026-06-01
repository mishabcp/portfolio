import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';
import { navSections } from '../data/marketingContent';
import { useSectionScrollNav } from '../hooks/useSectionScrollNav';

const MotionButton = motion.button;

const navLinks = navSections;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const goToSection = useSectionScrollNav();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Publish the live navbar height as a CSS variable so sections like the
     hero can size themselves to (viewport - navbar) without hard-coding. */
  useEffect(() => {
    const el = navRef.current;
    if (!el) return undefined;
    const root = document.documentElement;
    const write = () => {
      root.style.setProperty('--navbar-height', `${el.offsetHeight}px`);
    };
    write();
    const ro = new ResizeObserver(write);
    ro.observe(el);
    window.addEventListener('resize', write);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', write);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const onNavSection = (sectionId) => {
    setMobileOpen(false);
    goToSection(sectionId);
  };

  return (
    <>
      <nav ref={navRef} className={`nav-shell${scrolled ? ' nav-shell--scrolled' : ''}`}>
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
              href={resumeData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-resume nav-resume--whatsapp"
            >
              <FaWhatsapp aria-hidden style={{ marginRight: '0.4rem', verticalAlign: '-2px' }} />
              WhatsApp
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
        className="nav-mobile-overlay"
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, pointerEvents: mobileOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.2 }}
      >
        {navLinks.map((link) => (
          <button
            key={link.sectionId}
            type="button"
            className="nav-link nav-link--section nav-mobile-overlay__link"
            onClick={() => onNavSection(link.sectionId)}
          >
            {link.label}
          </button>
        ))}
        <a
          href={resumeData.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume nav-resume--whatsapp nav-mobile-overlay__resume"
          onClick={() => setMobileOpen(false)}
        >
          <FaWhatsapp aria-hidden style={{ marginRight: '0.5rem', verticalAlign: '-2px' }} />
          Message on WhatsApp
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
