import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail, HiArrowUp } from 'react-icons/hi';
import { resumeData } from '../data/resumeData';
import { navSections } from '../data/marketingContent';
import { useSectionScrollNav } from '../hooks/useSectionScrollNav';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Footer() {
  const goToSection = useSectionScrollNav();
  const year = new Date().getFullYear();

  const scrollTop = () => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-shell">
      <span className="footer-shell__rail" aria-hidden />
      <span className="footer-shell__glow" aria-hidden />

      <motion.div
        className="footer-inner content-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {/* TOP — brand block + CTA cluster */}
        <motion.div className="footer-top" variants={fadeUp}>
          <div className="footer-brand">
            <span className="footer-brand__status">
              <span className="footer-brand__pulse" aria-hidden />
              Available for new work
            </span>
            <h2 className="footer-brand__name">{resumeData.name}</h2>
            <p className="footer-brand__sub">
              {resumeData.title} — based in {resumeData.location}.
              <br />
              Built end-to-end. Performance-tuned. Shipped.
            </p>
          </div>

          <div className="footer-cta">
            <a
              href={resumeData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta__primary"
            >
              <FaWhatsapp aria-hidden className="footer-cta__icon" />
              <span>Message on WhatsApp</span>
              <span className="footer-cta__arrow" aria-hidden>
                →
              </span>
            </a>
            <a
              href={resumeData.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-cta__secondary"
            >
              Download resume
            </a>
          </div>
        </motion.div>

        <span className="footer-rule" aria-hidden />

        {/* MIDDLE — 3-column link grid */}
        <motion.div className="footer-grid" variants={fadeUp}>
          <div className="footer-col">
            <h3 className="footer-col__label">Navigate</h3>
            <ul className="footer-col__links">
              {navSections.map((link) => (
                <li key={link.sectionId}>
                  <button
                    type="button"
                    className="footer-link"
                    onClick={() => goToSection(link.sectionId)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-col__label">Connect</h3>
            <ul className="footer-col__links">
              <li>
                <a className="footer-link" href={`mailto:${resumeData.email}`}>
                  Email
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href={resumeData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href={resumeData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href={resumeData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-col--contact">
            <h3 className="footer-col__label">Reach out</h3>
            <ul className="footer-contact">
              <li>
                <span className="footer-contact__label">Email</span>
                <a className="footer-contact__value" href={`mailto:${resumeData.email}`}>
                  {resumeData.email}
                </a>
              </li>
              <li>
                <span className="footer-contact__label">WhatsApp</span>
                <a
                  className="footer-contact__value"
                  href={resumeData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resumeData.whatsappDisplay}
                </a>
              </li>
              <li>
                <span className="footer-contact__label">Location</span>
                <span className="footer-contact__value">{resumeData.location}</span>
              </li>
            </ul>

            <div className="footer-socials" aria-label="Social links">
              <a
                href={resumeData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn aria-hidden />
              </a>
              <a
                href={resumeData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="GitHub"
              >
                <FaGithub aria-hidden />
              </a>
              <a
                href={resumeData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social"
                aria-label="WhatsApp"
              >
                <FaWhatsapp aria-hidden />
              </a>
              <a href={`mailto:${resumeData.email}`} className="footer-social" aria-label="Email">
                <HiOutlineMail aria-hidden />
              </a>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM — meta row */}
        <motion.div className="footer-meta" variants={fadeUp}>
          <span className="footer-meta__copy">
            © {year} {resumeData.name}. All rights reserved.
          </span>
          <span className="footer-meta__credit">
            Crafted in {resumeData.location} — React · Vite · Framer Motion
          </span>
          <button
            type="button"
            className="footer-totop"
            onClick={scrollTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <HiArrowUp aria-hidden />
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}
