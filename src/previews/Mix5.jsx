import React from 'react';
import { motion } from 'framer-motion';

const Mix5 = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="border-b border-slate-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold italic text-slate-900">M.CP</div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-slate-500">
            <a href="#" className="hover:text-black transition-colors">WORK</a>
            <a href="#" className="hover:text-black transition-colors">EXPERTISE</a>
            <a href="#" className="hover:text-black transition-colors">PROFILE</a>
          </div>
          <button className="text-sm font-bold border-b-2 border-black pb-0.5 hover:opacity-70 transition-opacity">
            GET IN TOUCH
          </button>
        </div>
      </nav>

      {/* Hero Section with Aurora Mesh */}
      <div className="relative overflow-hidden h-[90vh] flex items-center justify-center bg-slate-50">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-rose-200/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <span className="bg-white/50 backdrop-blur-sm border border-white/60 px-6 py-2 rounded-full text-slate-600 text-sm font-medium">
              Based in Dubai, UAE
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-slate-900 mb-8"
          >
            Sophisticated <br/>
            <span className="italic text-slate-600">Digital Solutions</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-xl mx-auto leading-relaxed mb-12"
          >
            Specializing in high-end web application development. 
            Merging technical excellence with refined visual aesthetics.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl text-center border border-white/50 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">2+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years Exp</div>
            </div>
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl text-center border border-white/50 shadow-sm">
              <div className="text-2xl font-bold text-slate-900">10+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mix5;