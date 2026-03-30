import React, { Suspense, lazy } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from './components/HeroSection';

const AboutSection = lazy(() => import('./components/AboutSection'));
const ServicesSection = lazy(() => import('./components/ServicesSection'));
const SkillsSection = lazy(() => import('./components/SkillsSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));

function Divider() {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={inView ? { scaleX: 1, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="editorial-rule"
      style={{
        transformOrigin: 'center',
      }}
    />
  );
}

function SectionFallback() {
  return (
    <div style={{ minHeight: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: 24, height: 24, border: '2px solid rgba(0,0,0,0.12)',
        borderTopColor: '#000000', borderRadius: '50%',
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
      style={{ minHeight: '100vh', background: 'var(--bg-base)', color: 'var(--text-primary)' }}
    >
      <main className="content-container content-container--full">
        <HeroSection />
        <Divider />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
          <Divider />
          <ServicesSection />
          <Divider />
          <SkillsSection />
          <Divider />
          <ExperienceSection />
          <Divider />
          <ProjectsSection />
          <Divider />
          <ContactSection />
        </Suspense>
      </main>
    </motion.div>
  );
}
