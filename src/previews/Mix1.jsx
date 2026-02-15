import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, Users } from 'lucide-react';

const Mix1 = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden relative">
      {/* Subtle Background Blobs */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>

      <nav className="fixed w-full z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto bg-white/70 backdrop-blur-md border border-white/40 rounded-xl px-6 py-4 flex justify-between items-center shadow-sm">
          <span className="font-bold text-xl text-slate-800 tracking-tight">Mishab CP</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#" className="hover:text-blue-600 transition-colors">About</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-md shadow-blue-200">
            Contact Me
          </button>
        </div>
      </nav>

      <main className="relative z-10 container mx-auto px-6 pt-40 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
          >
            Enterprise Solutions, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Beautifully Engineered.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
          >
            I combine robust architectural patterns with modern aesthetics to build scalable fintech and ERP systems.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { icon: Shield, title: "Secure Architecture", desc: "Bank-grade security standards for fintech applications." },
              { icon: TrendingUp, title: "Scalable Performance", desc: "Optimized for high-concurrency enterprise environments." },
              { icon: Users, title: "User-Centric Design", desc: "Intuitive interfaces that simplify complex workflows." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                className="bg-white/60 backdrop-blur-sm border border-white/60 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:bg-white/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Mix1;