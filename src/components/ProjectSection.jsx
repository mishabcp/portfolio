import React, { useRef, useEffect, useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const ProjectSection = () => {
  const projectRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleLiveLinkClick1 = () => {
    window.open('https://mishabcp.github.io/ToDoList/', '_blank');
  };
  
  const handleGithubLinkClick1 = () => {
    window.open('https://github.com/mishabcp/ToDoList', '_blank');
  };

  const handleLiveLinkClick2 = () => {
    window.open('https://mishabcp.github.io/AlgoViz/', '_blank');
  };
  
  const handleGithubLinkClick2 = () => {
    window.open('https://github.com/mishabcp/AlgoViz', '_blank');
  };

  const handleGithubLinkClick3 = () => {
    window.open('https://github.com/mishabcp/FoodDeliveryApp', '_blank');
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
      className={`container w-4/5 2xl:w-3/5 bg-white mx-auto mb-10 lg:mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
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
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={handleLiveLinkClick1}>
                <FaExternalLinkAlt className="mr-2" />
              </button>

              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full" onClick={handleGithubLinkClick1}>
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
        <div className="md:flex mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg md:shadow-none ">
          <div className="flex flex-col w-full rounded-xl justify-center lg:mb-10">
            <h2 className="text-xl 2xl:text-2xl md:ml-10 font-bold lg:ml-16 xl:ml-20 m-3">AlgoViz</h2>
            <p className="text-md 2xl:text-xl m-2 xl:text-lg md:ml-10 lg:ml-16 xl:ml-20">AlgoViz is a React project designed to visually demonstrate fundamental sorting (Bubble, Merge, Quick) and searching (Linear, Binary) algorithms. Through interactive simulations, users can input custom arrays or use random data to observe these algorithms in action, gaining insights into their efficiency and functionality.</p>
          </div>
          <div className="flex w-full items-center justify-center">
            <div className="xl:w-4/5 flex flex-col items-center justify-center mb-3 px-2">
              <img
                src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/sas.png"
                alt="Project Image"
                className="mb-3 w-full h-auto rounded-lg"
              />
              <div className="flex space-x-40">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full" onClick={handleLiveLinkClick2}>
                  <FaExternalLinkAlt className="mr-2" />
                </button>

                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full" onClick={handleGithubLinkClick2}>
                  <FaGithub className="mr-2" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* next two divs */}
        <div className="md:flex mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg md:shadow-none ">
          <div className="flex w-full items-center justify-center">
          <div className="xl:w-4/5 flex flex-col items-center justify-center mb-3 px-2">
            <img
              src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/fda.png"
              alt="Project Image"
              className="mb-3 w-full h-auto rounded-lg"
            />
            <div className="flex space-x-40">
              <Link to="/new-page">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
                  <FaExternalLinkAlt className="mr-2" />
                </button>
              </Link>

              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full" onClick={handleGithubLinkClick3}>
                <FaGithub className="mr-2" />
              </button>
            </div>
          </div>

          </div>
          <div className="flex flex-col w-full rounded-xl justify-center lg:mb-10">
            <h2 className="text-xl 2xl:text-2xl md:ml-10 font-bold lg:ml-16 xl:ml-20 m-3">Swift Eats</h2>
            <p className="text-md 2xl:text-xl m-2 xl:text-lg md:ml-10 lg:ml-16 xl:ml-20">A full-stack web app for food delivery, featuring an intuitive front end with HTML, Tailwind CSS, and JavaScript. Backed by Java Servlets and JDBC for server-side logic and MySQL for data storage. Enables users to browse menus, place orders securely, and enjoy responsive design across devices.</p>
          </div>
        </div>
        
      </div>
      <hr className='w-4/5 mx-auto mb-10 mt-10 lg:mb-16 lg:mt-16'/>
    </div>
  );
};

export default ProjectSection;
