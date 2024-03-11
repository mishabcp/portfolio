// ContactSection.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact-section" className="py-20 bg-gray-200 mt-20">
      <div className="container mx-auto"> {/* Added container mx-auto */}
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
            <p className="text-gray-600 mb-4">Feel free to contact me if you have any questions or collaboration opportunities.</p>
            <ul>
              <li className="flex items-center mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9zm0 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-.18-7.28a1 1 0 1 0-1.64 1.14l1.57 2.09a.5.5 0 0 0 .85-.5l-1.57-2.08z"/>
                </svg>
                example@example.com
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 1a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9s9-4.03 9-9a9 9 0 0 0-9-9zm0 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-.18-7.28a1 1 0 1 0-1.64 1.14l1.57 2.09a.5.5 0 0 0 .85-.5l-1.57-2.08z"/>
                </svg>
                +1 123 456 7890
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Form</h3>
            {/* Add your contact form component here */}
            <p className="text-gray-600">Alternatively, you can fill out the contact form below:</p>
            <form>
              {/* Form fields go here */}
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
