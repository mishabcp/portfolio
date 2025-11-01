import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'About', id: 'about-section' },
    { name: 'Experience', id: 'experience-section' },
    { name: 'Skills', id: 'skills-section' },
    { name: 'Projects', id: 'Project-Section' },
    { name: 'Contact', id: 'Contact-Section' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mishabcp',
      label: 'GitHub'
    },
    {
      icon: Mail,
      href: 'mailto:mishabcp01@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="glass mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MC</span>
              </div>
              <span className="text-white font-bold text-xl neon-text">Mishab CP</span>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; 2025 Mishab CP. All rights reserved.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {footerLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social Links & Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  className="p-2 glass rounded-lg text-gray-400 hover:text-cyan-400 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass px-4 py-2 rounded-lg text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 mx-auto md:mx-0"
            >
              <ArrowUp size={16} />
              <span className="text-sm font-medium">Back to Top</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700/50 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm flex items-center justify-center space-x-2">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="text-red-400" size={16} fill="currentColor" />
            </motion.div>
            <span>using React & Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;