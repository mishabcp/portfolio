// Footer.jsx
import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Your Portfolio. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-blue-500 hover:underline mx-2">Home</a>
          <a href="#" className="text-blue-500 hover:underline mx-2">About</a>
          <a href="#" className="text-blue-500 hover:underline mx-2">Skills</a>
          <a href="#" className="text-blue-500 hover:underline mx-2" onClick={() => scrollToSection('portfolio-section')}>Projects</a>
          <a href="#" className="text-blue-500 hover:underline mx-2">Contact</a>
        </div>
        <div className="mt-4">
          {/* Add social media icons here */}
          <a href="#" className="text-blue-500 hover:text-blue-600 mx-2"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-blue-500 hover:text-blue-600 mx-2"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-blue-500 hover:text-blue-600 mx-2"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-blue-500 hover:text-blue-600 mx-2"><i className="fab fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
