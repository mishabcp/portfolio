import React, { useState, useEffect } from 'react';

const RetroPreview = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#008080] font-sans text-sm selection:bg-[#000080] selection:text-white">
      {/* Desktop Icons */}
      <div className="p-4 grid grid-cols-1 gap-6 w-24 text-center text-white">
        <div className="group cursor-pointer">
          <div className="w-12 h-12 mx-auto mb-1 bg-white border border-black relative shadow-sm group-hover:opacity-80">
            <div className="absolute top-1 left-1 right-1 h-1 bg-blue-800"></div>
          </div>
          <span className="bg-[#008080] group-hover:bg-[#000080] px-1 dotted-border">My Computer</span>
        </div>
        <div className="group cursor-pointer">
          <div className="w-12 h-12 mx-auto mb-1 bg-yellow-200 border border-black relative shadow-sm group-hover:opacity-80">
            <div className="absolute top-2 left-0 right-0 h-[1px] bg-black/10"></div>
          </div>
          <span className="bg-[#008080] group-hover:bg-[#000080] px-1 dotted-border">Projects</span>
        </div>
        <div className="group cursor-pointer">
          <div className="w-12 h-12 mx-auto mb-1 bg-white border border-black relative shadow-sm group-hover:opacity-80 flex items-center justify-center text-black font-serif text-2xl font-bold">
            W
          </div>
          <span className="bg-[#008080] group-hover:bg-[#000080] px-1 dotted-border">Resume.doc</span>
        </div>
      </div>

      {/* Window */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-[#C0C0C0] border-2 border-[#FFFFFF] border-b-[#000000] border-r-[#000000] shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
        {/* Title Bar */}
        <div className="bg-[#000080] px-2 py-1 flex justify-between items-center text-white">
          <div className="font-bold flex items-center gap-2">
            <span className="w-4 h-4 bg-white rounded-sm inline-block"></span>
            Welcome to Mishab's Portfolio
          </div>
          <div className="flex gap-1">
            <button className="w-5 h-5 bg-[#C0C0C0] border-t border-l border-[#FFFFFF] border-b border-r border-[#000000] text-black font-bold text-xs leading-none active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#FFFFFF] active:border-r-[#FFFFFF]">_</button>
            <button className="w-5 h-5 bg-[#C0C0C0] border-t border-l border-[#FFFFFF] border-b border-r border-[#000000] text-black font-bold text-xs leading-none active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#FFFFFF] active:border-r-[#FFFFFF]">□</button>
            <button className="w-5 h-5 bg-[#C0C0C0] border-t border-l border-[#FFFFFF] border-b border-r border-[#000000] text-black font-bold text-xs leading-none active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#FFFFFF] active:border-r-[#FFFFFF]">×</button>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="flex gap-4 px-2 py-1 border-b border-[#808080] mb-1">
          <span className="underline cursor-pointer">F</span>ile
          <span className="underline cursor-pointer">E</span>dit
          <span className="underline cursor-pointer">V</span>iew
          <span className="underline cursor-pointer">H</span>elp
        </div>

        {/* Content Area */}
        <div className="p-6 bg-white border-2 border-[#808080] border-b-[#FFFFFF] border-r-[#FFFFFF] m-1 h-96 overflow-y-auto">
          <h1 className="text-3xl font-serif font-bold mb-4">Hi, I'm Mishab CP</h1>
          
          <div className="flex gap-6 mb-6">
            <img src="https://via.placeholder.com/150" alt="Profile" className="border-2 border-[#000000] w-32 h-32 object-cover grayscale" />
            <div>
              <p className="mb-4 font-serif text-lg">
                Full Stack Developer & API Specialist based in Dubai.
              </p>
              <ul className="list-disc pl-5 font-serif space-y-1">
                <li>Expert in React & Laravel</li>
                <li>Fintech Systems Architecture</li>
                <li>Retro computing enthusiast</li>
              </ul>
            </div>
          </div>

          <hr className="border-t-2 border-[#000000] my-6" />

          <div className="flex justify-center gap-4">
            <button className="px-6 py-2 bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#000000] active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#FFFFFF] active:border-r-[#FFFFFF] font-bold">
              View Projects
            </button>
            <button className="px-6 py-2 bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#000000] active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#FFFFFF] active:border-r-[#FFFFFF] font-bold">
              Email Me
            </button>
          </div>
        </div>
        
        {/* Status Bar */}
        <div className="bg-[#C0C0C0] border-t border-[#FFFFFF] px-2 py-1 text-xs text-[#808080] flex justify-between">
          <span>1 object(s) selected</span>
          <span>45KB</span>
        </div>
      </div>

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 w-full h-10 bg-[#C0C0C0] border-t-2 border-[#FFFFFF] flex items-center px-1 py-1 z-50">
        <button className="h-full px-4 flex items-center gap-2 bg-[#C0C0C0] border-t-2 border-l-2 border-[#FFFFFF] border-b-2 border-r-2 border-[#000000] active:border-t-[#000000] active:border-l-[#000000] active:border-b-[#FFFFFF] active:border-r-[#FFFFFF] font-bold mr-2">
          <div className="w-4 h-4 bg-black"></div> Start
        </button>
        <div className="h-full px-4 flex items-center gap-2 bg-[#C0C0C0] border-t-2 border-l-2 border-[#000000] border-b-2 border-r-2 border-[#FFFFFF] active:bg-[#FFFFFF] font-bold w-48">
          Mishab Portfolio
        </div>
        <div className="ml-auto h-full px-4 flex items-center bg-[#C0C0C0] border-t-2 border-l-2 border-[#808080] border-b-2 border-r-2 border-[#FFFFFF]">
          {time}
        </div>
      </div>
    </div>
  );
};

export default RetroPreview;