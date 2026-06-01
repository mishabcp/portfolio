import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectBySlug } from '../data/projects';
import { getTechIcon } from '../data/techIcons';
import { getSkillBrandColor } from '../data/skillBrandColors';
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

const narrativeSectionTitles = new Set(['Challenges & solutions', 'Learnings']);
const hiddenFromTechnicalDetails = new Set(['Overview / problem']);

function ProjectContentSection({ section }) {
  return (
    <motion.section
      style={{ position: 'relative', marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}
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

function ProjectLinks({ links }) {
  if (!links || links.length === 0) return null;

  return (
    <>
      {links.map((link) =>
        link.href ? (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-outline-btn"
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
    </>
  );
}

function ProjectAtAGlance({ project, stackItems, slug }) {
  const summary = project.atAGlance || {
    problem: project.description,
    solution: project.detailTagline,
    role: 'Full-stack build',
    status: 'Case study',
  };

  return (
    <motion.section
      className="project-at-glance"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={sectionReveal}
    >
      <motion.div className="project-at-glance__eyebrow" variants={childReveal}>
        At a glance
      </motion.div>
      <div className="project-at-glance__grid">
        <motion.div className="project-at-glance__cell project-at-glance__cell--wide" variants={childReveal}>
          <span>Problem</span>
          <p>{summary.problem}</p>
        </motion.div>
        <motion.div className="project-at-glance__cell project-at-glance__cell--wide" variants={childReveal}>
          <span>Solution</span>
          <p>{summary.solution}</p>
        </motion.div>
        <motion.div className="project-at-glance__cell" variants={childReveal}>
          <span>Role</span>
          <p>{summary.role}</p>
        </motion.div>
        <motion.div className="project-at-glance__cell" variants={childReveal}>
          <span>Status</span>
          <p>{summary.status}</p>
        </motion.div>
        <motion.div className="project-at-glance__cell project-at-glance__cell--stack" variants={childReveal}>
          <span>Stack</span>
          <div className="project-at-glance__stack">
            {stackItems.slice(0, 6).map((item) => {
              const Icon = getTechIcon(item);
              return (
                <span key={`${slug}-glance-${item}`} className="editorial-tag editorial-tag--with-icon">
                  <Icon
                    style={{
                      fontSize: '1rem',
                      flexShrink: 0,
                      color: getSkillBrandColor(item),
                    }}
                    aria-hidden
                  />
                  <span>{item}</span>
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function ProjectGalleryDeck({ images, currentIndex, deckSpreadPct }) {
  if (images.length === 0) return null;

  const imageCount = images.length;

  return (
    <motion.div
      className="project-gallery-deck editorial-bleed"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="deck-container">
        {images.map((card, i) => {
          const offset = (i - (currentIndex % imageCount) + imageCount) % imageCount;
          const pos = offset > Math.floor(imageCount / 2) ? offset - imageCount : offset;
          const absPos = Math.abs(pos);
          const isJumping = absPos >= Math.floor(imageCount / 2);

          let xValue = `${pos * deckSpreadPct}%`;
          let scaleValue = 1 - absPos * 0.07;
          let zIndexValue = 10 - absPos;

          if (isJumping) {
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
  );
}

function ProjectHighlights({ highlights }) {
  if (!highlights || highlights.length === 0) return null;

  return (
    <motion.section
      className="project-highlights"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={sectionReveal}
    >
      <motion.div className="project-detail-divider-title" variants={childReveal}>
        <span />
        <strong>Key highlights</strong>
        <span />
      </motion.div>
      <div className="project-highlights__grid">
        {highlights.map((item, index) => (
          <motion.article key={item.title} className="project-highlight-card" variants={childReveal}>
            <span className="project-highlight-card__index">{String(index + 1).padStart(2, '0')}</span>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

function ProjectTechnicalDetails({ sections }) {
  if (sections.length === 0) return null;

  return (
    <motion.section
      className="project-detail-technical"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={sectionReveal}
    >
      <motion.details className="project-detail-accordion" variants={childReveal}>
        <summary>
          <span>Technical details</span>
          <small>features, architecture, performance, security, deployment</small>
        </summary>
        <div className="project-detail-accordion__content">
          {sections.map((section) => (
            <ProjectContentSection key={section.title} section={section} />
          ))}
        </div>
      </motion.details>
    </motion.section>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const goToSection = useSectionScrollNav();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const gridImages = project?.gallery || [];

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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [deckSpreadPct, setDeckSpreadPct] = useState(14);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 600px)');
    const apply = () => setDeckSpreadPct(mql.matches ? 8 : 14);
    apply();
    mql.addEventListener('change', apply);
    return () => mql.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    if (!expandedImages.length) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2800);
    return () => clearInterval(timer);
  }, [expandedImages.length]);

  if (!project) {
    return (
      <main className="content-container project-detail-content" style={{ paddingTop: 'clamp(5rem, 15vh, 8rem)', textAlign: 'center' }}>
        <h1 className="editorial-h2-section" style={{ fontSize: 'clamp(1.55rem, 3.6vw, 2.2rem)' }}>
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
  const stackItems = (project.tech || heroTech).split(' · ').map((s) => s.trim()).filter(Boolean);
  const narrativeSections = project.sections.filter((section) => narrativeSectionTitles.has(section.title));
  const technicalSections = project.sections.filter(
    (section) => !narrativeSectionTitles.has(section.title) && !hiddenFromTechnicalDetails.has(section.title),
  );

  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: 'easeOut' }} style={{ paddingBottom: 'clamp(3rem, 8vw, 5rem)' }}>
      <div className="content-container">
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

          {project.links && project.links.length > 0 && (
            <motion.div className="project-detail-actions" variants={childReveal}>
              <ProjectLinks links={project.links} />
            </motion.div>
          )}
        </motion.header>

        <div className="project-detail-content project-detail-content--intro">
          <ProjectAtAGlance project={project} stackItems={stackItems} slug={slug} />
        </div>
      </div>

      <ProjectGalleryDeck images={expandedImages} currentIndex={currentIndex} deckSpreadPct={deckSpreadPct} />

      <div className="content-container">
        <div className="project-detail-content project-detail-content--after-gallery">
          <ProjectHighlights highlights={project.highlights} />

          {narrativeSections.length > 0 && (
            <div className="project-detail-narrative">
              {narrativeSections.map((section) => (
                <ProjectContentSection key={section.title} section={section} />
              ))}
            </div>
          )}

          <ProjectTechnicalDetails sections={technicalSections} />

          <motion.div
            className="project-detail-bottom-actions"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={sectionReveal}
          >
            <motion.button
              type="button"
              className="project-detail-back project-detail-back--bottom"
              onClick={() => goToSection('projects')}
              variants={childReveal}
            >
              ← All projects
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
