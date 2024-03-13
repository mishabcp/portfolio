import React from 'react';
import { scrollToSection } from './Header'; // Importing the scrollToSection function from the Header component
import '/src/index.css';

const Footer = () => {
  const handleClick = (sectionId, event) => {
    event.preventDefault(); // Prevent default action of anchor tag
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-gray-800 text-white relative rounded-t-3xl"> {/* Apply rounded-t-lg class here */}
      <div className="container mx-auto text-center relative z-10 py-4">
        <p className='mt-10'>&copy; 2024 Your Portfolio. All rights reserved.</p>
        <div className="mb-8 mt-6">
          <a href="#about-section" className="text-blue-500 hover:underline mx-2" onClick={(e) => handleClick('about-section', e)}>About</a>
          <a href="#skills-section" className="text-blue-500 hover:underline mx-2" onClick={(e) => handleClick('skills-section', e)}>Skills</a>
          <a href="#Project-Section" className="text-blue-500 hover:underline mx-2" onClick={(e) => handleClick('Project-Section', e)}>Projects</a>
          <a href="#Contact-Section" className="text-blue-500 hover:underline mx-2" onClick={(e) => handleClick('Contact-Section', e)}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
