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
      className={`w-4/5 2xl:w-3/5 mx-auto bg-white mb-10 lg:mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12">About Me</h2>
        <p className="text-md md:text-lg 2xl:text-xl mb-4 md:mb-8">
          I'm a Full Stack Developer with 2 years of professional experience specializing in fintech and Enterprise Resource Planning (ERP) systems. Currently based in Dubai, I have a strong track record of building and maintaining complex web applications using PHP, Laravel, CodeIgniter, JavaScript, and MySQL. My expertise spans backend architecture, RESTful API development and integration, and database optimization.
        </p>
        <p className="text-md md:text-lg 2xl:text-xl mb-4 md:mb-8">
          At Netplex IT Solutions, I've led API development for PlexPay, a UAE-based fintech recharge platform, and built ISL, a comprehensive Laboratory Information Management System. I'm passionate about creating scalable solutions, optimizing performance, and delivering quality software that meets real business needs. Beyond coding, I excel at client communication, technical documentation, and providing end-user training for production systems.
        </p>
      </div>
      <hr className='w-4/5 mx-auto mb-10 mt-10 lg:mb-16 lg:mt-16'/>
    </section>
  );
};

export default AboutSection;