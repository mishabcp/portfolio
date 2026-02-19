import React, { Suspense, lazy } from 'react';
import { motion, useInView } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const AboutSection = lazy(() => import('./components/AboutSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const EducationSection = lazy(() => import('./components/EducationSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

const ACCENT_DIM = 'rgba(77, 184, 164, 0.3)';

function Divider() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={inView ? { scaleX: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        height: 1,
        background: `linear-gradient(90deg, transparent, ${ACCENT_DIM}, transparent)`,
        width: '100%',
        transformOrigin: 'center',
      }}
    />
  );
}

function SectionFallback() {
  return (
    <div style={{ minHeight: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 24, height: 24, border: '2px solid rgba(77,184,164,0.2)',
        borderTopColor: '#4db8a4', borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
    </div>
  );
}

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ minHeight: '100vh', background: '#141414', color: '#d4d0c8' }}
    >
      <Navbar />
      <main className="content-container">
        <HeroSection />
        <Divider />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
          <Divider />
          <SkillsSection />
          <Divider />
          <ExperienceSection />
          <Divider />
          <ProjectsSection />
          <Divider />
          <EducationSection />
          <Divider />
          <ContactSection />
          <Footer />
        </Suspense>
      </main>
    </motion.div>
  );
}
