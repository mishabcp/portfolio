import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Globe, Server } from 'lucide-react';

const Mix4 = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-blue-600">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <nav className="relative z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]"></div>
          MISHAB
        </div>
        <div className="hidden md:flex gap-1">
          {['Home', 'Projects', 'Stack', 'Contact'].map((item) => (
            <a key={item} href="#" className="px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all">
              {item}
            </a>
          ))}
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-full text-sm font-semibold shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
          Hire Me
        </button>
      </nav>

      <main className="relative z-10 container mx-auto px-6 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block mb-8"
        >
          <div className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-300 text-sm font-medium">
            🚀 Elevating Fintech Experiences
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent"
        >
          Modern.<br/>Secure.<br/>Scalable.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto mb-16"
        >
          I engineer robust backend systems and fluid frontend interfaces for the next generation of financial technology.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Frontend", icon: Globe, color: "from-pink-500 to-rose-500" },
            { title: "Backend", icon: Server, color: "from-blue-500 to-cyan-500" },
            { title: "Architecture", icon: Layers, color: "from-violet-500 to-purple-500" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl backdrop-blur-md relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity`}></div>
              <item.icon className="w-10 h-10 mb-6 text-slate-300" />
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm">Specialized development with focus on performance and security.</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Mix4;