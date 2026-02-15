import React from 'react';
import { motion } from 'framer-motion';

const DarkMix1 = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-black to-black"></div>
      
      {/* Animated Glows */}
      <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse animation-delay-2000"></div>

      <nav className="fixed w-full z-50 px-6 py-6 backdrop-blur-sm bg-black/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            MISHAB
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            {['Work', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 pt-40 min-h-screen flex flex-col justify-center">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6 px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wider uppercase">
              Full Stack Engineer
            </div>
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
              Building <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-white">
                Digital Velocity
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-lg">
              Specialized in high-performance architectures and seamless user experiences for the fintech sector.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                View Projects
              </button>
              <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl"></div>
                <div>
                  <h3 className="font-bold text-lg">Latest Deployment</h3>
                  <p className="text-xs text-gray-400">Just shipped v2.0</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-white/10 rounded-full w-3/4"></div>
                <div className="h-2 bg-white/10 rounded-full w-1/2"></div>
                <div className="h-2 bg-white/10 rounded-full w-5/6"></div>
              </div>
            </div>
            
            <div className="absolute top-10 -right-10 w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl -z-10 blur-xl"></div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DarkMix1;