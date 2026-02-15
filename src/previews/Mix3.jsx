import React from 'react';
import { motion } from 'framer-motion';

const Mix3 = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans relative">
      <div className="fixed top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50"></div>
      
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl z-40">
        <div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-lg shadow-gray-200/50 rounded-full px-8 py-4 flex justify-between items-center">
          <span className="font-bold text-lg tracking-tight">mishab<span className="text-indigo-600">.cp</span></span>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Work</a>
            <a href="#" className="hover:text-black transition-colors">Experience</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </div>
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
            <div className="w-4 h-0.5 bg-black"></div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-48 pb-24 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide uppercase">
            Full Stack Developer
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-gray-900 mb-8">
            Crafting Digital <br/>
            <span className="relative inline-block">
              <span className="relative z-10">Perfection</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-indigo-200/50 -z-0"></span>
            </span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            I help companies build scalable, secure, and beautiful web applications. 
            From complex backends to pixel-perfect frontends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-gray-200"
          >
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 bg-white/90 backdrop-blur-md border-t border-white/50">
              <h3 className="text-2xl font-bold mb-2">Fintech Dashboard</h3>
              <p className="text-gray-500">React, Node.js, PostgreSQL</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer shadow-2xl shadow-gray-200 mt-0 md:mt-12"
          >
            <div className="absolute inset-0 bg-white"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-orange-500/5 group-hover:from-pink-500/10 group-hover:to-orange-500/10 transition-colors"></div>
            <div className="absolute bottom-0 left-0 w-full p-8 bg-white/90 backdrop-blur-md border-t border-white/50">
              <h3 className="text-2xl font-bold mb-2">E-Commerce API</h3>
              <p className="text-gray-500">Laravel, Redis, Docker</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Mix3;