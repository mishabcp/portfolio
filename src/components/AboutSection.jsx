import { motion } from 'framer-motion';
import { marketingContent } from '../data/marketingContent';
import { resumeData } from '../data/resumeData';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const { about } = marketingContent;
  const { experience } = resumeData;

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      className="editorial-section about-section"
    >
      <motion.span variants={fadeUp} className="editorial-eyebrow">
        {about.eyebrow}
      </motion.span>

      <div className="about-section__grid">
        <div className="about-section__lede">
          <motion.h2 variants={fadeUp} className="about-section__headline">
            {about.headline}
          </motion.h2>

          <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="editorial-body about-section__body">
            {about.body1}
          </motion.p>
          <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="editorial-body about-section__body">
            {about.body2}
          </motion.p>
          <motion.p variants={fadeUp} transition={{ duration: 0.55 }} className="editorial-body about-section__body about-section__body--quiet">
            {about.body3}
          </motion.p>
        </div>

        <motion.aside variants={fadeUp} className="about-section__rail" aria-label="Current role">
          <span className="editorial-meta about-section__rail-label">Currently</span>
          <p className="about-section__rail-role">{experience.role}</p>
          <p className="about-section__rail-company">
            {experience.company}, {experience.location}
          </p>
          <p className="editorial-meta about-section__rail-period">{experience.period}</p>

          <ul className="about-section__rail-points">
            {experience.points.map((point, i) => (
              <li key={i} className="about-section__rail-point">
                <span className="about-section__rail-bullet" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </motion.section>
  );
}
