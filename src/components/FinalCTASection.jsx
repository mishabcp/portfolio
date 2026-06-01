import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { marketingContent } from '../data/marketingContent';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function FinalCTASection() {
  const { finalCta } = marketingContent;

  return (
    <motion.section
      id="final-cta"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="editorial-section final-cta-section"
    >
      <div className="final-cta-section__glow" aria-hidden />

      <div className="final-cta-section__content">
        <motion.span variants={fadeUp} className="editorial-eyebrow final-cta-section__eyebrow">
          <span className="hero-marketing__pulse" aria-hidden />
          {finalCta.eyebrow}
        </motion.span>

        <motion.h2 variants={fadeUp} className="final-cta-section__headline">
          {finalCta.headline}
        </motion.h2>

        <motion.p variants={fadeUp} className="editorial-body final-cta-section__subline">
          {finalCta.subline}
        </motion.p>

        <motion.div variants={fadeUp} className="final-cta-section__primary">
          <a
            href={finalCta.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary cta-primary--large"
          >
            <FaWhatsapp aria-hidden className="cta-primary__icon" />
            <span>{finalCta.primaryCta.label}</span>
            <span className="cta-primary__arrow" aria-hidden>
              →
            </span>
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="final-cta-section__alts">
          <span className="editorial-meta final-cta-section__alts-label">Or reach me at</span>
          <div className="final-cta-section__alts-list">
            {finalCta.altChannels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="final-cta-section__alt"
              >
                <span className="final-cta-section__alt-label">{ch.label}</span>
                <span className="final-cta-section__alt-value">{ch.value}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
