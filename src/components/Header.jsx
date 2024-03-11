// Header.jsx
import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-gray-800 text-white py-4 px-6 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/assets/images/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
          {/* Replace "Your Brand" with your brand name if you don't have a logo */}
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex">
            <li className="ml-8"><button onClick={() => scrollToSection('about-section')} className="hover:text-gray-300">About</button></li> {/* Increased margin */}
            <li className="ml-8"><button onClick={() => scrollToSection('skills-section')} className="hover:text-gray-300">Skills</button></li> {/* Increased margin */}
            <li className="ml-8"><button onClick={() => scrollToSection('portfolio-section')} className="hover:text-gray-300">Projects</button></li> {/* Increased margin */}
            <li className="ml-8"><button onClick={() => scrollToSection('contact-section')} className="hover:text-gray-300">Contact</button></li> {/* Increased margin */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
