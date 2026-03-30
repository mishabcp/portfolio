import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';
import { getTechIcon } from '../data/techIcons';
import { useSectionScrollNav } from '../hooks/useSectionScrollNav';

const ACCENT_DIM = 'rgba(0, 0, 0, 0.22)';

const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.08
    },
  },
};

const childReveal = {
  hidden: { opacity: 0, y: 18, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  },
};

function ProjectContentSection({ section }) {
  return (
    <motion.section
      style={{ marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={sectionReveal}
    >
      <motion.h2 className="project-detail-section-title" variants={childReveal}>
        {section.title}
      </motion.h2>
      {section.paragraphs &&
        section.paragraphs.map((p, pi) => (
          <motion.p key={pi} className="project-detail-prose" variants={childReveal}>
            {p}
          </motion.p>
        ))}
      {section.bullets && (
        <motion.ul
          className="project-detail-prose project-detail-prose--list"
          style={{ paddingLeft: '1.1rem', margin: 0 }}
          variants={childReveal}
        >
          {section.bullets.map((item, bi) => (
            <li key={bi} style={{ marginBottom: '0.45rem' }}>
              {item}
            </li>
          ))}
        </motion.ul>
      )}
    </motion.section>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const goToSection = useSectionScrollNav();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return (
      <main className="content-container content-container--full project-detail-content" style={{ paddingTop: 'clamp(5rem, 15vh, 8rem)', textAlign: 'center' }}>
        <h1 className="editorial-h2-section" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>
          Project not found
        </h1>
        <p className="editorial-body" style={{ marginBottom: '1.5rem' }}>No project matches this URL.</p>
        <Link to="/" className="editorial-link-quiet">
          Back to home
        </Link>
      </main>
    );
  }

  const heroTech = project.detailTech || project.tech;
  const techItems = heroTech.split(' · ').map((s) => s.trim()).filter(Boolean);
  const gridImages = project.gallery || [];

  // Expand images if there are too few to fill 7 symmetric fan slots (-3…3). The while loop
  // overshoots for some lengths (e.g. 4 images → 8); cap at 7 so N stays odd and the pos map stays symmetric.
  let expandedImages = [...gridImages];
  if (expandedImages.length > 0) {
    while (expandedImages.length < 7) {
      expandedImages = [...expandedImages, ...gridImages];
    }
    if (gridImages.length < 7) {
      expandedImages = expandedImages.slice(0, 7);
    }
  }

  const featuresIndex = project.sections.findIndex((s) => s.title === 'Features');
  const sectionsBeforeGallery = featuresIndex >= 0 ? project.sections.slice(0, featuresIndex + 1) : project.sections;
  const sectionsAfterGallery = featuresIndex >= 0 ? project.sections.slice(featuresIndex + 1) : [];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!expandedImages.length) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2800);
    return () => clearInterval(timer);
  }, [expandedImages.length]);

  const N = expandedImages.length;

  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: 'easeOut' }} style={{ paddingBottom: 'clamp(3rem, 8vw, 5rem)' }}>
      <div className="content-container content-container--full">
        <motion.header
          className="project-detail-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={childReveal}>
            <button
              type="button"
              className="project-detail-back"
              onClick={() => goToSection('projects')}
            >
              ← All projects
            </button>
          </motion.div>

          <motion.span
            className="editorial-meta"
            style={{ display: 'block', marginBottom: '1rem', letterSpacing: '0.32em' }}
            variants={childReveal}
          >
            Project
          </motion.span>
          <motion.h1 className="project-detail-h1" variants={childReveal}>
            {project.detailTitle}
          </motion.h1>
          {project.detailTagline && (
            <motion.p className="project-detail-tagline" variants={childReveal}>
              {project.detailTagline}
            </motion.p>
          )}

          <motion.div 
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }} 
            variants={childReveal}
          >
            {techItems.map((item, idx) => {
              const Icon = getTechIcon(item);
              // Each tag drifts differently
              const drift = (idx % 3 - 1) * 12; 
              return (
                <motion.span 
                  key={`${slug}-${item}`} 
                  className="editorial-tag editorial-tag--with-icon"
                  whileHover={{ y: -2, backgroundColor: 'rgba(0,0,0,0.08)' }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon style={{ fontSize: '0.95rem', flexShrink: 0 }} aria-hidden />
                  <span>{item}</span>
                </motion.span>
              );
            })}
          </motion.div>

          {project.links && project.links.length > 0 && (
            <motion.div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', marginTop: 'clamp(1.5rem, 3vw, 2rem)' }} variants={childReveal}>
              {project.links.map((link) =>
                link.href ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-outline-btn"
                    style={{ display: 'inline-block' }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <span
                    key={link.label}
                    className="editorial-meta"
                    style={{
                      padding: '0.45rem 1rem',
                      border: `1px dashed ${ACCENT_DIM}`,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {link.label} — coming soon
                  </span>
                ),
              )}
            </motion.div>
          )}
        </motion.header>

        <div className="project-detail-content">
          {sectionsBeforeGallery.map((section) => (
            <ProjectContentSection key={section.title} section={section} />
          ))}

          <motion.section
            style={{ marginTop: 'clamp(2rem, 5vw, 3rem)', marginBottom: 0 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={sectionReveal}
          >
            <motion.h2 className="project-detail-section-title" style={{ marginBottom: 0 }} variants={childReveal}>
              Gallery
            </motion.h2>
          </motion.section>
        </div>
      </div>

      <motion.div
        className="project-gallery-deck editorial-bleed"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="deck-container">
          {expandedImages.map((card, i) => {
            const offset = (i - (currentIndex % N) + N) % N;
            // Map offset linearly into symmetric steps (e.g. -3, -2, -1, 0, 1, 2, 3)
            const pos = offset > Math.floor(N / 2) ? offset - N : offset;
            const absPos = Math.abs(pos);
            const isJumping = absPos >= Math.floor(N / 2);

            let xValue = `${pos * 14}%`;
            let scaleValue = 1 - absPos * 0.07;
            let zIndexValue = 10 - absPos;

            if (isJumping) {
              // Ensure the card traversing the background remains fully tucked behind
              zIndexValue = 1;
            }

            return (
              <motion.figure
                key={`${card.src}-${i}`}
                className="deck-card"
                data-depth={Math.min(absPos, 6)}
                initial={false}
                animate={{
                  x: xValue,
                  scale: scaleValue,
                  zIndex: zIndexValue,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img src={card.src} alt={card.alt} loading="lazy" />
              </motion.figure>
            );
          })}
        </div>
      </motion.div>

      {sectionsAfterGallery.length > 0 && (
        <div className="content-container content-container--full">
          <div className="project-detail-content" style={{ paddingTop: 'clamp(2rem, 5vw, 3rem)' }}>
            {sectionsAfterGallery.map((section) => (
              <ProjectContentSection key={section.title} section={section} />
            ))}
          </div>
        </div>
      )}
    </motion.article>
  );
}
