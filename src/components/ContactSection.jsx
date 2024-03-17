import React, { useRef, useEffect, useState } from 'react';
import { FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import './ContactSection.css'; // Import the CSS file

const ContactSection = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const contactSection = contactRef.current;

    const handleScroll = () => {
      const top = contactSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    form.reset(); // Reset the form fields
  };

  return (
    <section
      id='Contact-Section'
      ref={contactRef}
      className={`container mx-auto  pr-6 pl-6  lg:py-10 pt-6 pb-6 w-3/4 lg:w-1/2 mt-20 mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out `}
    >

      <h2 className="text-center text-4xl md:text-6xl font-bold mb-6 md:mb-10 text-white">Contact</h2>
      <div className="flex flex-col md:flex-row justify-between mx-auto">
        {/* First Div */}
        <div className="flex flex-col items-center mb-16 md:mb-0 mr-0 md:mr-3 w-full md:w-1/3 pr-6 pl-6 sm:pr-10 sm:pl-10 md:pr-0 md:pl-0">
          <div className="flex flex-row items-center justify-center h-full mb-3 border border-gray-300 rounded-lg custom-shadow w-full pt-3 pb-3">
            <a href="https://github.com/mishabcp" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
            <FaGithub className="w-10 h-10 text-blue-500 mr-2" />
            </a>
          </div>
          <div className="flex flex-row items-center justify-center h-full mb-3 border border-gray-300 rounded-lg custom-shadow w-full pt-3 pb-3">
            <a href="tel:+918848659419" className="hover:underline text-white">
            <FaPhone className="w-10 h-10 text-blue-500 mr-2" />
            </a>
          </div>
          <div className="flex flex-row items-center justify-center h-full border border-gray-300 rounded-lg custom-shadow w-full pt-3 pb-3">
            <a href="mailto:mishabcp01@gmail.com" className="hover:underline text-white">
            <FaEnvelope className="w-10 h-10 text-blue-500 mr-2" />
            </a>
          </div>
        </div>

        {/* Second Div */}
        <div className="flex flex-col items-center ml-0 md:ml-3 w-full md:w-2/3 border custom-shadow border-gray-300 rounded-lg p-10">
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <input type="text" name="name" placeholder="Name" className="input-field rounded-lg px-4 py-2 mb-4 w-full border border-gray-300 focus:border-blue-500 text-black" />
            <input type="email" name="email" placeholder="Email" className="input-field rounded-lg px-4 py-2 mb-4 w-full border border-gray-300 focus:border-blue-500 text-black" />
            <textarea name="message" placeholder="Message" rows="4" className="input-field rounded-lg px-4 py-2 mb-4 w-full border border-gray-300 focus:border-blue-500 text-black"></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white custom-shadow font-bold py-2 px-4 rounded-full mt-4 disabled:opacity-50 disabled:pointer-events-none">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
