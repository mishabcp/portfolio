import React from 'react';

const HeroSection = () => {
  const onButtonClick = () => {
    fetch('/portfolio/src/assets/resume.pdf')
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
    <section className="bg-gray-900 text-white py-10 md:py-24 h-screen flex flex-col justify-center items-center text-center overflow-hidden relative">
    <div className="container mx-auto text-left sm:pl-4 md:pl-4 lg:pl-0 animate-slide-in-opacity" style={{ paddingLeft: '40px' }}>
      {/* Add left padding for small (sm) screen sizes */}
      <h1 className="text-5xl  md:text-7xl lg:text9xl font-bold mb-4 md:mb-8">Mishab</h1>
      {/* Adjust font sizes for better readability */}
      <p className="text-3xl  md:text-5xl lg:text-7xl mb-4 md:mb-8 font-bold">Full Stack Developer</p>
      {/* Adjust font sizes and padding for the button */}
      <button onClick={onButtonClick} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-8 lg:px-10  mb-0 mt-8 rounded-full shadow-lg">
        Resume
      </button>
    </div>
  </section>
  

  );
};

export default HeroSection;
