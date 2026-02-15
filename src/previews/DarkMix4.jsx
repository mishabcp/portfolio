import React from 'react';
import { motion } from 'framer-motion';

const DarkMix4 = () => {
  return (
    <div className="min-h-screen bg-[#000] text-[#e0e0e0] font-sans selection:bg-[#333] selection:text-white">
      <div className="fixed top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

      <nav className="fixed w-full z-50 px-8 py-6 mix-blend-difference text-white">
        <div className="flex justify-between items-end border-b border-white/20 pb-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] mb-1 opacity-50">Portfolio</div>
            <div className="text-xl font-bold tracking-tight">MISHAB CP</div>
          </div>
          <div className="text-xs uppercase tracking-[0.2em] opacity-50">Dubai, UAE</div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-40 pb-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[12vw] leading-[0.85] font-bold tracking-tighter mb-12 mix-blend-difference text-white">
              DIGITAL <br/>
              <span className="outline-text text-transparent stroke-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.5)' }}>ARCHITECT</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-12">
            <div className="md:col-span-4">
              <p className="text-xl leading-relaxed text-gray-400">
                I build scalable web applications with a focus on clean code and performance. Currently specializing in Fintech solutions.
              </p>
            </div>
            
            <div className="md:col-span-8 space-y-8">
              {[
                { name: 'PlexPay Platform', year: '2024', cat: 'Fintech' },
                { name: 'ISL Management', year: '2023', cat: 'Enterprise' },
                { name: 'TaskNova', year: '2023', cat: 'Productivity' }
              ].map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="group flex items-end justify-between border-b border-white/10 pb-8 cursor-pointer hover:border-white transition-colors"
                >
                  <div>
                    <div className="text-xs text-gray-500 mb-2">{project.cat}</div>
                    <h2 className="text-4xl md:text-5xl font-light group-hover:translate-x-4 transition-transform duration-500">{project.name}</h2>
                  </div>
                  <div className="text-sm font-mono opacity-50 group-hover:opacity-100">{project.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DarkMix4;