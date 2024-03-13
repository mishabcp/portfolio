import React, { useRef, useEffect, useState } from 'react';

const SkillsSection = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const skillsSection = skillsRef.current;

    const handleScroll = () => {
      const top = skillsSection.getBoundingClientRect().top;
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
      ref={skillsRef}
      id="skills-section"
      className={` bg-white pl-8 pr-8 md:pl-12 md:pr-12 mt-6 mb-24 md:mb-40 md:mt-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 md:mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3">Frontend</h3>
            <ul className="list-disc list-inside">
              <li className="text-md md:text-lg">HTML</li>
              <li className="text-md md:text-lg">CSS</li>
              <li className="text-md md:text-lg">JAVASCRIPT</li>
              <li className="text-md md:text-lg">REACT.JS</li>
              <li className="text-md md:text-lg">TAILWIND CSS</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3">Backend</h3>
            <ul className="list-disc list-inside">
              <li className="text-md md:text-lg">JAVA</li>
              <li className="text-md md:text-lg">JDBC</li>
              <li className="text-md md:text-lg">HIBERNATE</li>
              <li className="text-md md:text-lg">SERVLETS</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold mb-3">Other</h3>
            <ul className="list-disc list-inside">
              <li className="text-md md:text-lg">MySQL</li>
              <li className="text-md md:text-lg">FIGMA</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
