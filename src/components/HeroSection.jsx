import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '/src/assets/animation.json';

const HeroSection = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      anim.destroy();
    };
  }, []);

  const onButtonClick = () => {
    const resumeUrl = 'https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/resume.pdf';

    fetch(resumeUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch resume');
        }
        return response.blob();
      })
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
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
        alert('Failed to download resume. Please try again later.');
      });
  };

  return (
    <section className="w-4/5 2xl:w-3/5 h-screen flex justify-center items-center mx-auto">
      <div className='sm:flex sm:items-center sm:gap-8'> 
        <div className="mb-10 sm:mb-0 md:mt-20 lg:mt-10 xl:mt-0 2xl:mt-20 animate-slide-in-opacity w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Mishab CP
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4 font-semibold text-gray-700">
            Full Stack Developer | API Developer
          </p>
          <button onClick={onButtonClick}
            className="bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-bold py-3 px-6 md:py-3 md:px-8 lg:px-10 mt-2 rounded-full shadow-lg hover:shadow-xl inline-block transition-all duration-200"
          >
            Download Resume
          </button>
        </div>  
        <div className="w-full animate-slide-in-from-right" ref={animationContainer}></div>
      </div>
    </section>
  );
};

export default HeroSection;