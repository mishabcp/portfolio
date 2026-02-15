import React from 'react';
import { motion } from 'framer-motion';

const DarkMix2 = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-mono selection:bg-green-500 selection:text-black">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <nav className="fixed w-full z-50 px-6 py-4 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold tracking-widest uppercase">Mishab.System</span>
          </div>
          <div className="text-xs text-gray-500">v3.0.1 // ONLINE</div>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 pt-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border border-white/10 bg-[#0A0A0A] p-10 rounded-sm relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
          
          <p className="text-green-500 mb-4 text-sm">
            &gt; Initializing developer profile...
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tighter">
            MISHAB CP
          </h1>
          
          <div className="space-y-4 text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6 mb-8">
            <p>
              <span className="text-white font-bold">Role:</span> Full Stack Developer
            </p>
            <p>
              <span className="text-white font-bold">Stack:</span> React, Node.js, Laravel
            </p>
            <p>
              <span className="text-white font-bold">Focus:</span> Building resilient systems for scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="group relative px-6 py-3 bg-white text-black font-bold overflow-hidden">
              <span className="relative z-10 group-hover:text-white transition-colors">VIEW PROJECTS</span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
            <button className="px-6 py-3 border border-white/20 text-white font-bold hover:bg-white/5 transition-colors">
              GET IN TOUCH
            </button>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-3 gap-4 text-center">
          {[
            { label: 'EXPERIENCE', value: '02+' },
            { label: 'PROJECTS', value: '10+' },
            { label: 'CLIENTS', value: '05+' },
          ].map((stat) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="border border-white/10 bg-[#0A0A0A] p-6"
            >
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DarkMix2;