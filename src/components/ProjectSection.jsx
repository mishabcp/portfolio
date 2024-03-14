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
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-10 md:mb-16 text-white">Projects</h2>

      <div className="grid items-center justify-center">
        {/* First Two Divs */}
        <div className="g-col-6 mb-8" style={{ display: 'flex' }}>
          <div className="flex flex-col items-center justify-center mb-4 pr-10">
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">Project Name</h3>
            <p className="text-sm text-center mb-2 text-white">Project Description</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2 text-white">Project Card</h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Button</button>
            </div>
          </div>
        </div>

        {/* Next Two Divs */}
        <div className="g-col-6" style={{ display: 'flex' }}>
          <div className="flex items-center justify-center pr-10">
            <div className="rounded-lg shadow-md p-4">
              <h3 className="text-lg font-semibold mb-2 text-white">Project Card</h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Button</button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">Project Name</h3>
            <p className="text-sm text-center mb-2 text-white">Project Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
