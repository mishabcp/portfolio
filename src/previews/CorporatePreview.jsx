import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Mail, Linkedin } from 'lucide-react';

const CorporatePreview = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold text-slate-900">Mishab CP</span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-700">Resume</a>
            <a href="#" className="hover:text-blue-700">Portfolio</a>
            <a href="#" className="hover:text-blue-700">Experience</a>
            <a href="#" className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      <header className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-blue-700 font-semibold bg-blue-50 px-3 py-1 rounded-full text-sm">
              <Briefcase size={14} />
              <span>Full Stack Developer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Professional Software Solutions for Enterprise Growth
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Specialized in building scalable fintech platforms and ERP systems. 
              Delivering robust, secure, and efficient code for modern businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-slate-900 text-white font-medium rounded shadow-lg hover:bg-slate-800 transition-colors">
                View My Work
              </button>
              <button className="px-8 py-3 bg-white border border-slate-300 text-slate-700 font-medium rounded hover:bg-slate-50 transition-colors">
                Download CV
              </button>
            </div>

            <div className="flex items-center gap-6 pt-8 text-slate-500 text-sm border-t border-slate-200">
              <div className="flex items-center gap-2">
                <MapPin size={16} /> Dubai, UAE
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} /> mishabcp01@gmail.com
              </div>
            </div>
          </motion.div>

          <div className="relative h-96 bg-slate-200 rounded-lg overflow-hidden shadow-inner flex items-center justify-center">
            <span className="text-slate-400 font-medium">Professional Headshot Area</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default CorporatePreview;