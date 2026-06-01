import { motion } from 'framer-motion';
import { marketingContent } from '../data/marketingContent';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function ProblemsSection() {
  const { problems } = marketingContent;

  return (
    <motion.section
      id="problems"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="editorial-section problems-section"
    >
      <motion.span variants={fadeUp} className="editorial-eyebrow">
        {problems.eyebrow}
      </motion.span>

      <motion.h2 variants={fadeUp} className="editorial-h2-section problems-section__headline">
        {problems.headline}
      </motion.h2>

      <div className="problems-grid">
        {problems.items.map((item) => (
          <motion.article
            key={item.kicker}
            variants={fadeUp}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="problem-card"
          >
            <div className="problem-card__head">
              <span className="problem-card__kicker">{item.kicker}</span>
              <h3 className="problem-card__title">{item.title}</h3>
            </div>

            <div className="problem-card__row problem-card__row--pain">
              <span className="problem-card__row-label">The pain</span>
              <p className="editorial-body problem-card__row-body">{item.pain}</p>
            </div>

            <div className="problem-card__row problem-card__row--solution">
              <span className="problem-card__row-label">What I do</span>
              <p className="editorial-body problem-card__row-body">{item.solution}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
