import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { getTechIcon } from '../data/techIcons';

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      style={{ padding: 'var(--section-y) 0' }}
    >
      <div style={{ padding: '0 var(--pad-x)', marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
        <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="editorial-eyebrow" style={{ marginBottom: 0 }}>
          Personal projects
        </motion.span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {resumeData.projects.map((proj, i) => (
          <motion.article
            key={proj.slug}
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 0.45 }}
          >
            <Link to={`/projects/${proj.slug}`} className="project-card">
                <div className="project-card__body">
                  <div className="project-card__row">
                    <span className="editorial-index-num project-card__index" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="project-card__stack">
                      <h2 className="project-card__title">{proj.name}</h2>
                      {proj.description && (
                        <p className="editorial-body" style={{ margin: '0 0 1.25rem', maxWidth: '42rem' }}>
                          {proj.description}
                        </p>
                      )}
                      {proj.tech && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                          {proj.tech.split(' · ').map((item) => {
                            const label = item.trim();
                            const Icon = getTechIcon(label);
                            return (
                              <span key={`${proj.slug}-${label}`} className="editorial-tag editorial-tag--with-icon">
                                <Icon style={{ fontSize: '0.95rem', flexShrink: 0 }} aria-hidden />
                                <span>{label}</span>
                              </span>
                            );
                          })}
                        </div>
                      )}
                      <span className="project-card__cta">View case study →</span>
                    </div>
                  </div>
                </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
