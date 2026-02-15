import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout } from 'lucide-react';

const Mix2 = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-300 font-sans selection:bg-cyan-900 selection:text-white overflow-hidden relative">
      {/* Dark Aurora */}
      <div className="absolute top-[-10%] left-[20%] w-[80vw] h-[40vw] bg-blue-900/20 rounded-full filter blur-[100px] opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[20%] w-[60vw] h-[40vw] bg-cyan-900/10 rounded-full filter blur-[100px] opacity-50"></div>

      <nav className="relative z-50 border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg"></div>
            <span className="font-bold text-xl text-white tracking-wide">Mishab.Dev</span>
          </div>
          <button className="text-sm font-medium text-white border border-white/20 px-4 py-2 rounded hover:bg-white/10 transition-colors">
            Download CV
          </button>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open to Work
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Building the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Digital Backbone
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 max-w-lg leading-relaxed border-l-2 border-white/10 pl-6">
              Full Stack Developer specializing in high-performance APIs and secure fintech infrastructure.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-900/20 transition-all flex items-center gap-2 group">
                View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-lg backdrop-blur-sm transition-all">
                Contact Me
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-[#1E293B]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-white font-semibold mb-6">Tech Stack</h3>
              <div className="space-y-4">
                {[
                  { name: "Frontend", icon: Layout, width: "85%", color: "bg-blue-500" },
                  { name: "Backend API", icon: Database, width: "95%", color: "bg-cyan-500" },
                  { name: "System Arch", icon: Code, width: "90%", color: "bg-teal-500" }
                ].map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="flex items-center gap-2 text-white"><skill.icon size={14}/> {skill.name}</span>
                      <span className="text-slate-400">{skill.width}</span>
                    </div>
                    <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: skill.width }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className={`h-full ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Mix2;