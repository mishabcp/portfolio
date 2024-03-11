// Home.jsx
import React from 'react';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx'; // Import the SkillsSection component
import PortfolioSection from './components/PortfolioSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';

const Home = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />

      {/* Hero Section Component */}
      <HeroSection />

      {/* About Section Component */}
      <AboutSection />

      {/* Skills Section Component */}
      <SkillsSection />

      {/* Portfolio Section Component */}
      <PortfolioSection />

      {/* Contact Section Component */}
      <ContactSection />

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Home;
