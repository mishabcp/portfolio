// Home.jsx
import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import WorkExperienceSection from './components/WorkExperienceSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectSection from './components/ProjectSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <SkillsSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;