import React, { useRef, useEffect, useState } from 'react';
import { FaGithub, FaPhone, FaEnvelope } from 'react-icons/fa';

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
      id="Contact-Section"
      ref={contactRef}
      className={`container mx-auto px-4 sm:px-6 w-full sm:w-11/12 md:w-3/4 lg:w-1/2 mb-8 sm:mb-10 lg:mb-12 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-1000 ease-in-out`}
    >
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12">Contact</h2>
      <div className="flex flex-col gap-6">
        {/* Social Links */}
        <div className="flex flex-row flex-wrap justify-center gap-4 sm:gap-6 w-full">
          <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg w-full sm:w-48 pt-3 pb-3 hover:shadow-md transition-all duration-300">
            <a
              href="https://github.com/mishabcp"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center hover:underline text-gray-800 text-sm sm:text-base"
            >
              <FaGithub className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mr-2" />
              GitHub
            </a>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg w-full sm:w-48 pt-3 pb-3 hover:shadow-md transition-all duration-300">
            <a href="tel:+918848659419" className="flex items-center justify-center hover:underline text-gray-800 text-sm sm:text-base">
              <FaPhone className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mr-2" />
              Phone
            </a>
          </div>
          <div className="flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg w-full sm:w-48 pt-3 pb-3 hover:shadow-md transition-all duration-300">
            <a href="mailto:mishabcp01@gmail.com" className="flex items-center justify-center hover:underline text-gray-800 text-sm sm:text-base">
              <FaEnvelope className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 mr-2" />
              Email
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col items-center w-full bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300">
          <form onSubmit={onSubmit} className="flex flex-col items-center w-full">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="input-field rounded-lg px-4 py-2 mb-4 w-full border border-gray-300 focus:border-blue-500 text-black text-sm sm:text-base"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="input-field rounded-lg px-4 py-2 mb-4 w-full border border-gray-300 focus:border-blue-500 text-black text-sm sm:text-base"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows="4"
              className="input-field rounded-lg px-4 py-2 mb-4 w-full border border-gray-300 focus:border-blue-500 text-black text-sm sm:text-base"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white shadow-md font-bold py-2 px-4 rounded-full mt-4 disabled:opacity-50 disabled:pointer-events-none text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>

          {popupMessage && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-2xl max-w-sm w-full">
                <p className="text-base sm:text-lg text-black text-center">{popupMessage}</p>
                <button
                  onClick={() => setPopupMessage('')}
                  className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded-full text-sm sm:text-base"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="w-full sm:w-4/5 mx-auto mb-8 sm:mb-10 mt-8 sm:mt-10 lg:mb-12 lg:mt-12" />
    </section>
  );
};

export default ContactSection;