import React from 'react';
import { motion } from 'framer-motion';

const DarkMix3 = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-orange-500 selection:text-white">
      <nav className="p-8 flex justify-between items-center max-w-7xl mx-auto">
        <span className="text-2xl font-black tracking-tighter">M/CP</span>
        <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
        </button>
      </nav>

      <main className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <h1 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter mb-12">
              CODE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                CRAFT
              </span>
            </h1>
            
            <div className="space-y-8">
              <div className="border-t border-white/10 pt-8">
                <h3 className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">About</h3>
                <p className="text-2xl font-medium leading-tight max-w-md">
                  I'm Mishab, a Full Stack Developer creating robust digital products in Dubai.
                </p>
              </div>
              
              <div className="border-t border-white/10 pt-8">
                 <h3 className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-widest">Expertise</h3>
                 <div className="flex flex-wrap gap-2">
                   {['React', 'Laravel', 'Node.js', 'API Design', 'Fintech'].map(tag => (
                     <span key={tag} className="px-4 py-2 rounded-full border border-white/20 text-sm hover:border-orange-500 hover:text-orange-500 transition-colors cursor-default">
                       {tag}
                     </span>
                   ))}
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="aspect-[3/4] bg-[#1a1a1a] rounded-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
              {/* Placeholder for abstract 3D element or photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-tr from-orange-500 to-purple-600 rounded-full blur-[80px] opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>
              
              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-sm text-gray-400 mb-2">Featured Project</p>
                <h2 className="text-3xl font-bold mb-4">Fintech Dashboard</h2>
                <a href="#" className="inline-flex items-center gap-2 text-orange-500 font-bold hover:gap-4 transition-all">
                  View Case Study <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DarkMix3;