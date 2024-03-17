import React, { useState, useRef, useEffect } from 'react';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // Increase the yOffset value to move the section higher within the viewport
    const yOffset = -window.innerHeight / 2 + section.offsetHeight / 2 + 200; // Adjust as needed
    section.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    window.scrollBy({ top: yOffset, behavior: 'smooth' });
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to handle clicks outside the dropdown menu
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to detect clicks outside the dropdown menu
    document.addEventListener('mousedown', handleClickOutside);
    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-white py-4 md:py-6 px-8 md:px-8 fixed top-0 left-0 w-full shadow-xl rounded-b-xl z-50" style={{ background: 'rgb(0, 0, 22)' }}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className={`flex items-center ${isMenuOpen ? 'hidden' : 'block'}`}>
          <a href="#" onClick={() => window.location.reload()}>
            <img src="/assets/images/logo.png" alt="Logo" className="h-6 md:h-8 w-auto mr-2" />
          </a>
          {/* Replace "Your Brand" with your brand name if you don't have a logo */}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none focus:text-gray-400"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.293 7.293a1 1 0 011.414-1.414L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2zm0 5h16a1 1 0 110 2H4a1 1 0 110-2z"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} ref={dropdownRef}>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10">
            <li>
              <button onClick={() => scrollToSection('about-section')} className="hover:text-gray-300 text-base md:text-lg">
                About
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('skills-section')} className="hover:text-gray-300 text-base md:text-lg">
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('Project-Section')} className="hover:text-gray-300 text-base md:text-lg">
                Projects
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection('Contact-Section')} className="hover:text-gray-300 text-base md:text-lg">
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { scrollToSection };
export default Header;
