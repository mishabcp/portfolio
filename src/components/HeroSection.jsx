import React from 'react';

const HeroSection = () => {
  const handleDownloadResume = () => {
    window.open('/assets/resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="bg-gray-900 text-white py-40 mt-0 h-screen flex flex-col justify-center items-center text-center overflow-hidden relative">
      <div className="container mx-auto text-left animate-slide-in-opacity">
        <h1 className="text-6xl font-bold mb-4">Mishab</h1>
        <p className="text-8xl mb-8 font-bold">Full Stack Developer</p>
        {/* Use handleDownloadResume function for onClick event */}
        <a href="/assets/resume.pdf" download="Mishab_Resume.pdf" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
