import React from 'react';
import { motion } from 'framer-motion';

const CreativePreview = () => {
  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black overflow-hidden font-sans">
      <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <nav className="relative z-10 p-8 flex justify-between items-center">
        <div className="text-2xl font-black bg-black text-white px-4 py-2 rotate-[-2deg]">MISHAB</div>
        <button className="bg-black text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform">
          Let's Talk
        </button>
      </nav>

      <main className="relative z-10 container mx-auto px-6 pt-12 text-center">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.9]"
        >
          CREATIVE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
            DEVELOPER
          </span>
        </motion.h1>
        
        <p className="mt-8 text-xl md:text-2xl font-medium max-w-2xl mx-auto text-gray-700">
          I turn complex problems into beautiful, interactive experiences.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <div className="w-64 h-80 bg-black rounded-3xl rotate-[-3deg] overflow-hidden relative group cursor-pointer transition-all hover:rotate-0 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-600 p-6 flex flex-col justify-end">
              <h3 className="text-white font-bold text-xl">Projects</h3>
            </div>
          </div>
          <div className="w-64 h-80 bg-white rounded-3xl rotate-[3deg] shadow-xl overflow-hidden relative group cursor-pointer transition-all hover:rotate-0 hover:scale-105">
             <div className="absolute inset-0 bg-white p-6 flex flex-col justify-end">
              <h3 className="text-black font-bold text-xl">About Me</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreativePreview;