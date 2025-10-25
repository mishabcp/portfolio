import React, { useState, useRef, useEffect } from 'react';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Optional: Adjust for fixed header (e.g., 80px height)
    const headerOffset = 80;
    const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: sectionPosition - headerOffset,
      behavior: 'smooth',
    });
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (sectionId, event) => {
    event.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header className="bg-white py-4 md:py-6 px-8 md:px-8 fixed top-0 left-0 right-0 mx-auto shadow-xl rounded-b-xl z-50">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className={`flex items-center ${isMenuOpen ? 'hidden' : 'block'}`}>
          <a href="#" onClick={() => window.location.reload()}>
            <img
              src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/portfolio-logo.png"
              alt="Logo"
              className="h-8 w-auto mr-2"
            />
          </a>
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
              <a
                href="#about-section"
                onClick={(e) => handleClick('about-section', e)}
                className="hover:text-gray-300 text-base md:text-lg"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience-section"
                onClick={(e) => handleClick('experience-section', e)}
                className="hover:text-gray-300 text-base md:text-lg"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills-section"
                onClick={(e) => handleClick('skills-section', e)}
                className="hover:text-gray-300 text-base md:text-lg"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#Project-Section"
                onClick={(e) => handleClick('Project-Section', e)}
                className="hover:text-gray-300 text-base md:text-lg"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Contact-Section"
                onClick={(e) => handleClick('Contact-Section', e)}
                className="hover:text-gray-300 text-base md:text-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { scrollToSection };
export default Header;