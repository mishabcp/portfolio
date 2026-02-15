import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PreviewHub = () => {
  const options = [
    {
      title: "Minimalist",
      path: "/preview/minimal",
      description: "Clean, whitespace-heavy, gallery style.",
      color: "bg-gray-100 border-gray-200 hover:border-gray-400 text-gray-900"
    },
    {
      title: "Tech / Cyberpunk",
      path: "/preview/tech",
      description: "Dark mode, neon accents, developer focused.",
      color: "bg-gray-900 text-green-400 border-green-900 hover:border-green-500"
    },
    {
      title: "Creative / Bold",
      path: "/preview/creative",
      description: "Colorful, unique layouts, expressive.",
      color: "bg-purple-100 border-purple-200 hover:border-purple-400 text-purple-900"
    },
    {
      title: "Corporate",
      path: "/preview/corporate",
      description: "Professional, structured, business-first.",
      color: "bg-blue-50 border-blue-200 hover:border-blue-400 text-blue-900"
    },
    {
      title: "Glassmorphism / Aurora",
      path: "/preview/glass",
      description: "Trendy, frosted glass, soft gradients.",
      color: "bg-slate-900 border-slate-700 hover:border-pink-500 text-white"
    },
    {
      title: "Neo-Brutalist",
      path: "/preview/brutalist",
      description: "Raw, high contrast, bold borders.",
      color: "bg-yellow-300 border-black hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black"
    },
    {
      title: "Retro / Windows 95",
      path: "/preview/retro",
      description: "Nostalgic, pixelated, desktop style.",
      color: "bg-[#008080] border-white text-white font-mono"
    },
    {
      title: "Mix 1: Professional Glass",
      path: "/preview/mix1",
      description: "Light mode, clean structure, subtle glass cards.",
      color: "bg-slate-50 border-white text-slate-800"
    },
    {
      title: "Mix 2: Dark Enterprise",
      path: "/preview/mix2",
      description: "Dark blue/slate, glowing accents, structured grid.",
      color: "bg-[#0F172A] border-blue-500/30 text-blue-100"
    },
    {
      title: "Mix 3: Frosted Minimalist",
      path: "/preview/mix3",
      description: "Ultra-clean white, frosted nav, high-end feel.",
      color: "bg-white border-indigo-100 text-indigo-900"
    },
    {
      title: "Mix 4: Modern Fintech",
      path: "/preview/mix4",
      description: "Deep navy gradients, glass borders, secure vibe.",
      color: "bg-[#020617] border-blue-900 text-white"
    },
    {
      title: "Mix 5: Aurora Business",
      path: "/preview/mix5",
      description: "Classic layout, serif typography, soft gradients.",
      color: "bg-slate-50 border-slate-200 text-slate-900 font-serif"
    },
    {
      title: "Red & Dark (Abhay Style)",
      path: "/preview/abhay",
      description: "Deep black, starry background, red accents. The requested look.",
      color: "bg-[#050505] border-[#FF4D4D] text-[#FF4D4D]"
    },
    {
      title: "Dark Mix 1: Purple Haze",
      path: "/preview/dark1",
      description: "Deep black, purple glows, modern gradients.",
      color: "bg-black border-purple-900 text-purple-200"
    },
    {
      title: "Dark Mix 2: Terminal Grid",
      path: "/preview/dark2",
      description: "Matrix/Hacker style, grid background, green accents.",
      color: "bg-black border-green-900 text-green-400 font-mono"
    },
    {
      title: "Dark Mix 3: Orange Bold",
      path: "/preview/dark3",
      description: "Charcoal background, bold typography, orange accents.",
      color: "bg-[#121212] border-orange-900 text-orange-500"
    },
    {
      title: "Dark Mix 4: Monochrome Noise",
      path: "/preview/dark4",
      description: "Grainy texture, high contrast, minimalist black & white.",
      color: "bg-black border-white text-white"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-gray-900">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-2">Design Preview Hub</h1>
        <p className="text-center text-gray-500 mb-12">Select a style to preview the new look.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {options.map((option) => (
            <Link to={option.path} key={option.path}>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className={`p-8 rounded-xl border-2 cursor-pointer transition-all h-full ${option.color}`}
              >
                <h2 className="text-2xl font-bold mb-2">{option.title}</h2>
                <p className="opacity-80">{option.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/" className="text-gray-400 hover:text-gray-600 text-sm">
            ← Back to current site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PreviewHub;