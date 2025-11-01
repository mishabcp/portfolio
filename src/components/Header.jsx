import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClick = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero-section', 'about-section', 'experience-section', 'skills-section', 'Project-Section', 'Contact-Section'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass mx-4 mt-4 rounded-2xl"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MC</span>
            </div>
            <span className="text-white font-bold text-xl neon-text">Mishab CP</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: 'hero-section', label: 'Home' },
              { id: 'about-section', label: 'About' },
              { id: 'experience-section', label: 'Experience' },
              { id: 'skills-section', label: 'Skills' },
              { id: 'Project-Section', label: 'Projects' },
              { id: 'Contact-Section', label: 'Contact' }
            ].map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(item.id, e)}
                className={`relative px-3 py-2 rounded-lg transition-colors ${
                  activeSection === item.id ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg"
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Social Links & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <motion.a 
                href="https://github.com/mishabcp" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="mailto:mishabcp01@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden absolute top-full left-4 right-4 mt-2 glass rounded-2xl overflow-hidden"
          >
            <nav className="p-6 space-y-4">
              {[
                { id: 'hero-section', label: 'Home' },
                { id: 'about-section', label: 'About' },
                { id: 'experience-section', label: 'Experience' },
                { id: 'skills-section', label: 'Skills' },
                { id: 'Project-Section', label: 'Projects' },
                { id: 'Contact-Section', label: 'Contact' }
              ].map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(item.id, e)}
                  className="block py-3 px-4 text-gray-300 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;