import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="bg-white py-4 md:py-6 px-8 md:px-8 fixed top-0 left-0 right-0 mx-auto shadow-xl rounded-b-xl z-50">
      <div className="container flex items-center justify-between mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          {/* Update the onClick event handler to navigate to the Home page */}
          <Link to="/">
            <img
              src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/portfolio-logo.png"
              alt="Logo"
              className="h-10 w-auto mr-2"
            />
          </Link>
          {/* Replace "Your Brand" with your brand name if you don't have a logo */}
        </div>

        {/* Navigation Links */}
        <nav className="md:flex md:items-center md:w-auto">
          <ul className="flex flex-col md:flex-row gap-6 md:gap-10">
            <li>
              {/* Update the Link to point to the Home page */}
              <Link to="/" className="hover:text-gray-300 text-base font-bold md:text-lg">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
