import React, { useRef, useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectSection = () => {
  const projectRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleLiveLinkClick = () => {
    window.open('https://mishabcp.github.io/ToDoList/', '_blank');
  };
  
  const handleGithubLinkClick = () => {
    window.open('https://github.com/mishabcp/ToDoList', '_blank');
  };
  

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
      className={`container w-4/5 2xl:w-3/5 bg-white mx-auto mb-20 lg:mb-32 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
    >
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-12 md:mb-20">Projects</h2>

      <div className="items-center justify-center">
        {/* First Two Divs */}
        <div className="md:flex mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg md:shadow-none ">
          <div className="flex w-full items-center justify-center">
          <div className="xl:w-4/5 flex flex-col items-center justify-center mb-3 px-2">
            <img
              src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/TO.png"
              alt="Project Image"
              className="mb-3 w-full h-auto rounded-lg"
            />
            <div className="flex space-x-40">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={handleLiveLinkClick}>
                <FaExternalLinkAlt className="mr-2" />
              </button>

              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full" onClick={handleGithubLinkClick}>
                <FaGithub className="mr-2" />
              </button>
            </div>
          </div>

          </div>
          <div className="flex flex-col w-full rounded-xl justify-center lg:mb-10">
            <h2 className="text-xl 2xl:text-2xl md:ml-10 font-bold lg:ml-16 xl:ml-20 m-3">Task Organizer</h2>
            <p className="text-md 2xl:text-xl m-2 xl:text-lg md:ml-10 lg:ml-16 xl:ml-20">Task Organizer is a React-based app for <span className="text-blue-500">efficient task management</span>. Users can <span className="text-blue-500">add, edit, delete tasks</span>, <span className="text-blue-500">mark them as completed</span>, and <span className="text-blue-500">organize by category</span>. It offers <span className="text-blue-500">sorting and filtering options</span>, <span className="text-blue-500">visual progress tracking via pie charts</span>, and a <span className="text-blue-500">calendar view</span> for managing tasks based on <span className="text-blue-500">due dates</span>.</p>
          </div>
        </div>

        {/* Next Two Divs */}
        <div className="" style={{ display: 'flex' }}>
          <div className="w-full flex border items-center justify-center">
            <div className="rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2">Project Card</h3>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Button</button>
            </div>
          </div>
          <div className="w-full border flex flex-col items-center justify-center">
            <h3 className="text-lg lg:text-xl font-semibold mb-2">project 2</h3>
            <p className="text-sm text-center text-white">description</p>
          </div>
        </div>
      </div>
      <hr className='w-4/5 mx-auto mb-20 mt-20 lg:mb-24 lg:mt-28'/>
    </div>
  );
};

export default ProjectSection;
