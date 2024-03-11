import React from 'react';
import axios from 'axios';
import fileDownload from 'js-file-download';

const HeroSection = () => {
  // Function to handle resume download
  const handleDownloadResume = () => {
    axios.get('/assets/resume.pdf', {
      responseType: 'blob',
    })
    .then((res) => {
      fileDownload(res.data, 'Mishab_Resume.pdf');
    })
    .catch((error) => {
      console.error('Error downloading resume:', error);
    });
  };

  return (
    <section className="bg-gray-900 text-white py-40 mt-0 h-screen flex flex-col justify-center items-center text-center overflow-hidden relative">
      <div className="container mx-auto text-left animate-slide-in-opacity">
        <h1 className="text-6xl font-bold mb-4">Mishab</h1>
        <p className="text-8xl mb-8 font-bold">Full Stack Developer</p>
        {/* Use handleDownloadResume function for onClick event */}
        <button onClick={handleDownloadResume} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
