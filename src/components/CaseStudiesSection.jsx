import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { marketingContent } from '../data/marketingContent';
import { resumeData } from '../data/resumeData';
import { getTechIcon } from '../data/techIcons';
import { getSkillBrandColor } from '../data/skillBrandColors';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function CaseStudiesSection() {
  const { caseStudies } = marketingContent;
  const projects = resumeData.projects;

  return (
    <motion.section
      id="case-studies"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="editorial-section case-studies-section"
    >
      <motion.span variants={fadeUp} className="editorial-eyebrow">
        {caseStudies.eyebrow}
      </motion.span>

      <motion.h2 variants={fadeUp} className="editorial-h2-section">
        {caseStudies.headline}
      </motion.h2>

      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="editorial-body case-studies-section__subline"
      >
        {caseStudies.subline}
      </motion.p>

      <div className="case-studies-list">
        {projects.map((proj, i) => (
          <motion.article key={proj.slug} variants={fadeUp} transition={{ duration: 0.5 }}>
            <Link to={`/projects/${proj.slug}`} className="case-card">
              <div className="case-card__head">
                <span className="case-card__index" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="case-card__heading">
                  <h3 className="case-card__title">{proj.name}</h3>
                  {proj.description && (
                    <p className="editorial-body case-card__desc">{proj.description}</p>
                  )}
                </div>
                <span className="case-card__arrow" aria-hidden>
                  →
                </span>
              </div>

              {proj.tech && (
                <div className="case-card__tech">
                  {proj.tech.split(' · ').map((item) => {
                    const label = item.trim();
                    const Icon = getTechIcon(label);
                    return (
                      <span
                        key={`${proj.slug}-${label}`}
                        className="editorial-tag editorial-tag--with-icon"
                      >
                        <Icon
                          style={{
                            fontSize: '1.05rem',
                            flexShrink: 0,
                            color: getSkillBrandColor(label),
                          }}
                          aria-hidden
                        />
                        <span>{label}</span>
                      </span>
                    );
                  })}
                </div>
              )}

              <div className="case-card__cta editorial-meta">Read full case study →</div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
