import React from 'react';
import { motion } from 'framer-motion';

const BrutalistPreview = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black font-mono selection:bg-yellow-400">
      <nav className="border-b-4 border-black p-6 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="font-black text-2xl tracking-tighter uppercase hover:bg-yellow-400 cursor-pointer px-2 transition-colors">
          Mishab_CP.dev
        </div>
        <button className="border-2 border-black bg-black text-white px-6 py-2 font-bold hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
          MENU
        </button>
      </nav>

      <main className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="border-4 border-black bg-white p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12"
            >
              <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.85] mb-6">
                Full<br />Stack<br /><span className="text-stroke text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-600" style={{ WebkitTextStroke: '2px black' }}>Dev</span>eloper
              </h1>
              <p className="text-xl font-bold border-l-4 border-black pl-6 py-2 bg-yellow-300 inline-block">
                Building raw, honest software.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-4 border-black bg-[#FF6B6B] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                <h2 className="text-3xl font-black mb-4 uppercase">Projects</h2>
                <p className="font-bold">Check out what I've built recently.</p>
              </div>
              <div className="border-4 border-black bg-[#4ECDC4] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
                <h2 className="text-3xl font-black mb-4 uppercase">Contact</h2>
                <p className="font-bold">Let's work together.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-black text-xl mb-4 border-b-4 border-black pb-2">SKILL_SET</h3>
              <ul className="space-y-2 font-bold">
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black"></div> REACT / NEXT.JS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black"></div> TYPESCRIPT
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black"></div> NODE.JS
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black"></div> POSTGRESQL
                </li>
              </ul>
            </div>

            <div className="border-4 border-black p-6 bg-black text-white shadow-[8px_8px_0px_0px_#888]">
              <p className="font-mono text-sm leading-relaxed">
                "Simplicity is the ultimate sophistication." <br/>
                -- But make it bold.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BrutalistPreview;