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
      className={`container w-4/5 lg:w-3/5 mx-auto mb-20 lg:mb-40 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
    >
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-12 md:mb-20 text-white">Projects</h2>

      <div className="items-center justify-center">
        {/* First Two Divs */}
        <div className=" mb-20" style={{ display: 'flex' }}>
          <div className="flex flex-col w-full justify-center ">
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">Task Organizer</h3>
            <p className="text-md md:text-lg text-white">Task Organizer is a React-based web application for <span className="text-blue-500">efficient task management</span>. Users can add, edit, and delete tasks, mark them as completed, and organize tasks by category. The app includes <span className="text-blue-500">sorting and filtering options</span>, along with visual progress tracking using <span className="text-blue-500">pie charts</span>. The <span className="text-blue-500">calendar view</span> helps users manage tasks based on <span className="text-blue-500">due dates</span>, ensuring a streamlined task management experience.</p>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-white">Project Card</h3>
              <a href="https://mishabcp.github.io/ToDoList/" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Button</a>
            </div>
          </div>
        </div>

        {/* Next Two Divs */}
        <div className="" style={{ display: 'flex' }}>
          <div className="w-full flex items-center justify-center">
            <div className="rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-white">Project Card</h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Button</button>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <h3 className="text-lg lg:text-xl font-semibold mb-2 text-white">project 2</h3>
            <p className="text-sm text-center text-white">description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
