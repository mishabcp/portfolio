import React, { useRef, useEffect, useState } from 'react';

const AboutSection = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const aboutSection = aboutRef.current;

    const handleScroll = () => {
      const top = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight * 0.75) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about-section"
      className={`w-4/5 2xl:w-3/5 mx-auto bg-white mb-20 lg:mb-32 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12">About Me</h2>
        <p className="text-md md:text-lg 2xl:text-xl mb-4 md:mb-8">
          As a recent B.Tech graduate with a passion for full-stack web development, I am constantly seeking opportunities to expand my skill set and stay up-to-date with evolving web technologies. With a strong foundation in both frontend and backend development, I am well-equipped to tackle challenges and drive innovation in the ever-changing landscape of web development.
        </p>
        <p className="text-md md:text-lg 2xl:text-xl mb-4 md:mb-8">
          I am proficient in React.js, a powerful frontend library that allows me to create dynamic and interactive web applications with ease. My experience with React has enabled me to build efficient and scalable frontend solutions, leveraging its component-based architecture and state management capabilities.
        </p>
      </div>
      <hr className='w-4/5 mx-auto mb-20 mt-20 lg:mb-24 lg:mt-28'/>
    </section>
  );
};

export default AboutSection;
