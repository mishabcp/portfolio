import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '/src/assets/animation.json'; // Import your Lottie animation JSON file

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
    <section className="w-4/5 lg:w-3/5  h-screen flex justify-center items-center mx-auto">
      <div className='sm:flex '> 
        <div className="mb-10 sm:mb-0 md:mt-20 lg:mt-10 xl:mt-0 2xl:mt-20 animate-slide-in-opacity w-full">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-8">Mishab</h1>
          <p className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 md:mb-2 font-bold">Full Stack Developer</p>
          <button onClick={onButtonClick}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 md:py-3 md:px-8 lg:px-10  mt-8 rounded-full shadow-lg inline-block"
          >
            Download Resume
          </button>
        </div>  
        <div className="w-full animate-slide-in-from-right " ref={animationContainer}></div>
      </div>
    </section>
  );
};

export default HeroSection;
