import React from 'react';

const HeroSection = () => {
  const onButtonClick = () => {
    const baseUrl = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
    const resumeUrl = `${baseUrl}/src/assets/resume.pdf`;
    fetch(resumeUrl)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Mishab_Resume.pdf');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error fetching PDF:', error);
      });
  };

  return (
    <section className="bg-gray-900 text-white py-40 mt-0 h-screen flex flex-col justify-center items-center text-center overflow-hidden relative">
      <div className="container mx-auto text-left animate-slide-in-opacity">
        <h1 className="text-5xl font-bold mb-4">Mishab</h1>
        <p className="text-7xl mb-8 font-bold">Full Stack Developer</p>
        <button onClick={onButtonClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
