import React from 'react';
import { motion } from 'framer-motion';

const GlassmorphismPreview = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-hidden relative selection:bg-pink-500 selection:text-white">
      {/* Aurora Backgrounds */}
      <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-pink-600 rounded-full mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000"></div>

      <nav className="fixed w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl px-6 py-4 flex justify-between items-center shadow-lg">
          <span className="font-bold text-xl tracking-wide">MISHAB</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-200">
            <a href="#" className="hover:text-white transition-colors">Work</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Notes</a>
          </div>
          <button className="bg-white/10 hover:bg-white/20 border border-white/10 px-5 py-2 rounded-xl text-sm font-medium transition-all backdrop-blur-md">
            Contact
          </button>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 pt-40 min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-white/10 backdrop-blur-md text-sm font-medium text-pink-200"
          >
            ✨ Available for new projects
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
          >
            Designing the future of <br /> digital interaction.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I craft immersive web experiences with a focus on motion, aesthetics, and seamless functionality.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
          >
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 duration-300 group cursor-pointer shadow-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl mb-4 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-white/20 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Project {item}</h3>
                <p className="text-gray-400 text-sm">A brief description of this amazing project and the tech stack used.</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default GlassmorphismPreview;