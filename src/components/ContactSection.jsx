import React, { useRef, useEffect, useState } from 'react';
import { FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

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
      className={`container mx-auto py-12 lg:py-20 bg-white mt-20 mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
    >
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-10 md:mb-16">Contact</h2>
      <div className="flex flex-col md:flex-row justify-between w-11/12 mx-auto">
        {/* First Div */}
        <div className="flex flex-col items-center justify-center mb-16 md:mb-24 md:w-1/2">
          <h3 className="text-lg md:text-2xl font-semibold mb-6">Get in Touch</h3>
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-3">
              <FaGithub className="w-5 h-5 text-blue-500 mr-2" />
              <a href="https://github.com/mishabcp" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mishabcp</a>
            </div>
            <div className="flex items-center mb-3">
              <FaPhone className="w-5 h-5 text-blue-500 mr-2" />
              <a href="tel:+918848659419" className="text-blue-500 hover:underline">+91 88486 59419</a>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="w-5 h-5 text-blue-500 mr-2" />
              <a href="mailto:mishabcp01@gmail.com" className="text-blue-500 hover:underline">mishabcp01@gmail.com</a>
            </div>
          </div>
        </div>
        {/* Second Div */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <input type="text" name="name" placeholder="Name" className="input-field rounded-lg px-4 py-2 mb-4 border border-gray-300 focus:border-blue-500" />
            <input type="email" name="email" placeholder="Email" className="input-field rounded-lg px-4 py-2 mb-4 border border-gray-300 focus:border-blue-500" />
            <textarea name="message" placeholder="Message" rows="4" className="input-field rounded-lg px-4 py-2 mb-4 border border-gray-300 focus:border-blue-500"></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 disabled:opacity-50 disabled:pointer-events-none">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
