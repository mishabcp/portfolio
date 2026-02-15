import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu } from 'lucide-react';

const TechPreview = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-green-400 font-mono selection:bg-green-900 selection:text-white">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 animate-pulse"></div>
      
      <nav className="p-6 border-b border-green-900/30 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal size={20} />
          <span className="text-sm">~/mishab-cp</span>
        </div>
        <div className="text-xs text-green-600">v2.0.24</div>
      </nav>

      <main className="container mx-auto px-6 pt-24 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 border border-green-800 rounded-full text-xs bg-green-900/10">
              System Status: Online
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
              <span className="text-green-500">&lt;</span>Code<span className="text-green-500">/&gt;</span>
              <br />
              Is My Craft
            </h1>
            <p className="text-gray-400 max-w-md border-l-2 border-green-800 pl-4">
              Full Stack Developer specializing in high-performance API architectures and scalable fintech solutions.
            </p>
            
            <div className="flex gap-4 pt-4">
              <button className="px-6 py-3 bg-green-600 text-black font-bold hover:bg-green-500 transition-colors flex items-center gap-2">
                <Code size={18} /> Initialize Project
              </button>
              <button className="px-6 py-3 border border-green-800 hover:border-green-500 hover:bg-green-900/20 transition-all text-gray-300">
                View Documentation
              </button>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full"></div>
            <div className="relative bg-[#111] border border-green-900/50 p-6 rounded-lg shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <code className="text-sm opacity-80 block whitespace-pre">
                <span className="text-purple-400">const</span> developer = {'{'}
                {'\n'}  name: <span className="text-yellow-300">"Mishab CP"</span>,
                {'\n'}  role: <span className="text-yellow-300">"Full Stack Dev"</span>,
                {'\n'}  stack: [<span className="text-yellow-300">"React"</span>, <span className="text-yellow-300">"Node"</span>, <span className="text-yellow-300">"Laravel"</span>],
                {'\n'}  location: <span className="text-yellow-300">"Dubai, UAE"</span>
                {'\n'}{'}'};
              </code>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TechPreview;