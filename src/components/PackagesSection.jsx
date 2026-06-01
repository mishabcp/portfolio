import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { marketingContent } from '../data/marketingContent';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function PackagesSection() {
  const { packages } = marketingContent;
  const { finalCta } = marketingContent;

  return (
    <motion.section
      id="packages"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="editorial-section packages-section"
    >
      <motion.span variants={fadeUp} className="editorial-eyebrow">
        {packages.eyebrow}
      </motion.span>

      <motion.h2 variants={fadeUp} className="editorial-h2-section packages-section__headline">
        {packages.headline}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="editorial-body packages-section__subline"
      >
        {packages.subline}
      </motion.p>

      <div className="packages-grid">
        {packages.items.map((pkg) => (
          <motion.article
            key={pkg.kicker}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className={`package-card${pkg.accent ? ' package-card--accent' : ''}`}
          >
            <div className="package-card__head">
              <span className="package-card__kicker" aria-hidden>
                {pkg.kicker}
              </span>
              <div className="package-card__head-text">
                <h3 className="package-card__title">{pkg.title}</h3>
                <span className="package-card__timeline">{pkg.timeline}</span>
              </div>
            </div>

            <p className="editorial-body package-card__forwho">{pkg.forWho}</p>

            <div className="package-card__divider" aria-hidden />

            <ul className="package-card__list">
              {pkg.deliverables.map((line) => (
                <li key={line} className="package-card__line">
                  <span className="package-card__line-tick" aria-hidden>
                    →
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <a
              href={finalCta.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="package-card__cta"
            >
              <FaWhatsapp aria-hidden /> Discuss on WhatsApp
            </a>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
