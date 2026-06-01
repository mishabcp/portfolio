import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { useSectionScrollNav } from '../hooks/useSectionScrollNav';

const quickLinks = [
  { label: 'Process', sectionId: 'process' },
  { label: 'Packages', sectionId: 'packages' },
  { label: 'Case studies', sectionId: 'case-studies' },
  { label: 'About', sectionId: 'about' },
  { label: 'FAQ', sectionId: 'faq' },
  { label: 'Contact', sectionId: 'final-cta' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Footer() {
  const goToSection = useSectionScrollNav();

  return (
    <footer className="footer-shell">
      <motion.div
        className="footer-inner content-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div className="footer-giant-hero" variants={fadeUp}>
          <p className="editorial-eyebrow footer-giant-eyebrow">Thanks for visiting</p>
          <p className="footer-giant-name">{resumeData.name}</p>
          <p className="footer-giant-sub">{resumeData.title}</p>
        </motion.div>

        <motion.div
          className="footer-giant-grid"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div className="footer-giant-block" variants={fadeUp}>
            <h3 className="footer-giant-label">On this site</h3>
            <ul className="footer-giant-links">
              {quickLinks.map((link) => (
                <li key={link.sectionId}>
                  <button
                    type="button"
                    className="footer-giant-link"
                    onClick={() => goToSection(link.sectionId)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="footer-giant-block" variants={fadeUp}>
            <h3 className="footer-giant-label">Connect</h3>
            <ul className="footer-giant-links">
              <li>
                <a href={`mailto:${resumeData.email}`} className="footer-giant-link">
                  {resumeData.email}
                </a>
              </li>
              <li>
                <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="footer-giant-link">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="footer-giant-link">
                  GitHub
                </a>
              </li>
              <li className="footer-giant-resume-row">
                <a href={resumeData.resumePdf} target="_blank" rel="noopener noreferrer" className="nav-resume">
                  Download resume
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
