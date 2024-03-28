import React, { useRef, useEffect, useState } from 'react';
import { FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';
import './ContactSection.css'; // Import the CSS file

const ContactSection = () => {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setPopupMessage('Sending....');

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'b118b50d-7294-45cd-9a5e-0b80604cea25');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setPopupMessage('Form Submitted Successfully');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        // Automatically close popup after 3 seconds (adjust as needed)
        setTimeout(() => {
          setPopupMessage('');
        }, 1500);
      } else {
        console.log('Error', data);
        setPopupMessage(data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setPopupMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section
      id='Contact-Section'
      ref={contactRef}
      className={`container mx-auto w-3/4 lg:w-1/2 mb-20 lg:mb-40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out `}
    >
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-10 md:mb-12">Contact</h2>
      <div className="flex flex-col md:flex-row justify-between mx-auto">
        {/* First Div */}
        <div className="flex md:flex-col items-center mb-16 md:mb-0 mr-0 md:mr-3 w-full md:w-1/3 pr-6 pl-6 sm:pr-10 sm:pl-10 md:pr-0 md:pl-0">
          <div className="flex flex-row items-center justify-center h-full md:mb-3 mr-2 border border-gray-300 rounded-lg shadow-all-sides w-full pt-3 pb-3">
            <a href="https://github.com/mishabcp" target="_blank" rel="noopener noreferrer" className="hover:underline text-white">
              <FaGithub className="w-10 h-10 text-blue-500 mr-2" />
            </a>
          </div>
          <div className="flex flex-row items-center justify-center h-full md:mb-3 mr-2 border border-gray-300 rounded-lg shadow-all-sides w-full pt-3 pb-3">
            <a href="tel:+918848659419" className="hover:underline text-white">
              <FaPhone className="w-10 h-10 text-blue-500 mr-2" />
            </a>
          </div>
          <div className="flex flex-row items-center justify-center h-full border border-gray-300 rounded-lg shadow-all-sides w-full pt-3  pb-3">
            <a href="mailto:mishabcp01@gmail.com" className="hover:underline text-white">
              <FaEnvelope className="w-10 h-10 text-blue-500 mr-2" />
            </a>
          </div>
        </div>

        {/* Second Div */}
        <div className="flex flex-col items-center ml-0 md:ml-3 w-full md:w-2/3 border shadow-all-sides border-gray-300 rounded-lg p-10">
          <form onSubmit={onSubmit} className="flex flex-col items-center w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="input-field rounded-lg px-4 py-2 mb-4 w-full border border-gray-300 focus:border-blue-500 text-black"
              required  // Add the required attribute
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="input-field rounded-lg px-4 py-2 mb-4 w-full border border-gray-300 focus:border-blue-500 text-black"
              required  // Add the required attribute
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="4"
              className="input-field rounded-lg px-4 py-2 mb-4 w-full border border-gray-300 focus:border-blue-500 text-black"
              required  // Add the required attribute
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white custom-shadow font-bold py-2 px-4 rounded-full mt-4 disabled:opacity-50 disabled:pointer-events-none"
            >
              Send Message
            </button>
          </form>

          {popupMessage && (
            <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 flex items-center justify-center">
              <div className="bg-white  p-4 rounded-xl shadow-2xl">
                <p className="text-lg text-black">{popupMessage}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
