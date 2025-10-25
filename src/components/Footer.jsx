import React from 'react';
import { scrollToSection } from './Header';
import '/src/index.css';

const Footer = () => {
  const handleClick = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl hover:shadow-xl transition-all duration-300">
      <hr className="w-4/5 mx-auto mb-10 mt-10 lg:mb-16 lg:mt-16" />
      <div className="container mx-auto text-center p-6 md:p-8">
        <p className="text-gray-700 text-sm md:text-base font-medium mt-4 mb-4">
          &copy; Mishab CP | Portfolio 2025
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#about-section"
            className="text-gray-800 hover:text-blue-500 font-medium mx-2"
            onClick={(e) => handleClick('about-section', e)}
          >
            About
          </a>
          <a
            href="#skills-section"
            className="text-gray-800 hover:text-blue-500 font-medium mx-2"
            onClick={(e) => handleClick('skills-section', e)}
          >
            Skills
          </a>
          <a
            href="#experience-section"
            className="text-gray-800 hover:text-blue-500 font-medium mx-2"
            onClick={(e) => handleClick('experience-section', e)}
          >
            Experience
          </a>
          <a
            href="#Project-Section"
            className="text-gray-800 hover:text-blue-500 font-medium mx-2"
            onClick={(e) => handleClick('Project-Section', e)}
          >
            Projects
          </a>
          <a
            href="#Contact-Section"
            className="text-gray-800 hover:text-blue-500 font-medium mx-2"
            onClick={(e) => handleClick('Contact-Section', e)}
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;