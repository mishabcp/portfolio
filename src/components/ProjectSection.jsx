import React, { useRef, useEffect, useState } from 'react';

const ProjectSection = () => {
  const projectRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const projectSection = projectRef.current;

    const handleScroll = () => {
      const top = projectSection.getBoundingClientRect().top;
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
    <div id='Project-Section'
      ref={projectRef}
      className={`container mx-auto w-9/10 mt-8 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
    >
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-10 md:mb-16">Projects</h2>

      {/* Div-1 */}
      <div className="flex flex-col md:flex-row mb-8">
        {/* First Child Element */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-4 md:mb-0">
          <h3 className="text-lg lg:text-xl font-semibold mb-2">Project Name</h3>
          <p className="text-sm text-center mb-2">Project Description</p>
        </div>

        {/* Second Child Element */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Project Card</h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Button</button>
          </div>
        </div>
      </div>

      {/* Div-2 */}
      <div className="flex flex-col md:flex-row">
        {/* First Child Element */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="bg-gray-100 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">Project Card</h3>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Button</button>
          </div>
        </div>

        {/* Second Child Element */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-4 md:mt-0">
          <h3 className="text-lg lg:text-xl font-semibold mb-2">Project Name</h3>
          <p className="text-sm text-center mb-2">Project Description</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
