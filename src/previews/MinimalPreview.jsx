import React from 'react';
import { motion } from 'framer-motion';

const MinimalPreview = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-200">
      <nav className="fixed w-full p-6 flex justify-between items-center bg-white/80 backdrop-blur-sm z-50">
        <span className="text-xl font-medium tracking-tight">mishab.cp</span>
        <div className="space-x-8 text-sm text-gray-500">
          <a href="#" className="hover:text-black transition-colors">Work</a>
          <a href="#" className="hover:text-black transition-colors">About</a>
          <a href="#" className="hover:text-black transition-colors">Contact</a>
        </div>
      </nav>

      <main className="pt-32 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-gray-500 text-lg">Full Stack Developer based in Dubai.</p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter leading-tight">
            Building digital <br />
            <span className="font-serif italic">experiences</span> that matter.
          </h1>
          
          <div className="pt-12 flex gap-8">
            <button className="border-b border-black pb-1 hover:opacity-50 transition-opacity">
              View Projects
            </button>
            <button className="border-b border-gray-300 pb-1 text-gray-500 hover:text-black hover:border-black transition-all">
              Get in Touch
            </button>
          </div>
        </motion.div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 aspect-[4/3] rounded-sm"></div>
          <div className="bg-gray-100 aspect-[4/3] rounded-sm mt-12"></div>
        </div>
      </main>
    </div>
  );
};

export default MinimalPreview;