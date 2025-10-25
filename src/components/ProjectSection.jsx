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
    <section
      id="Project-Section"
      ref={projectRef}
      className={`container w-4/5 2xl:w-3/5 bg-white mx-auto mb-10 lg:mb-20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } transition-all duration-1000 ease-in-out`}
    >
      <h2 className="text-center text-4xl md:text-6xl font-bold mb-12 md:mb-16">Projects</h2>

      <div className="space-y-6">
        {/* Project 1 */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
          <div className="md:flex gap-6">
            <div className="flex w-full md:w-1/2 items-center justify-center mb-6 md:mb-0">
              <div className="w-full xl:w-4/5">
                <img
                  src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/TO.png"
                  alt="Task Organizer"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <div className="flex justify-center gap-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
                    onClick={handleLiveLinkClick1}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
                    onClick={handleGithubLinkClick1}
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Task Organizer</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                Task Organizer is a React-based app for <span className="text-blue-500">efficient task management</span>. Users can{' '}
                <span className="text-blue-500">add, edit, delete tasks</span>, <span className="text-blue-500">mark them as completed</span>, and{' '}
                <span className="text-blue-500">organize by category</span>. It offers <span className="text-blue-500">sorting and filtering options</span>,{' '}
                <span className="text-blue-500">visual progress tracking via pie charts</span>, and a{' '}
                <span className="text-blue-500">calendar view</span> for managing tasks based on <span className="text-blue-500">due dates</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
          <div className="md:flex gap-6">
            <div className="flex flex-col w-full md:w-1/2 justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">AlgoViz</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                AlgoViz is a React project designed to visually demonstrate fundamental sorting (Bubble, Merge, Quick) and searching (Linear, Binary)
                algorithms. Through interactive simulations, users can input custom arrays or use random data to observe these algorithms in action,
                gaining insights into their efficiency and functionality.
              </p>
            </div>
            <div className="flex w-full md:w-1/2 items-center justify-center mt-6 md:mt-0">
              <div className="w-full xl:w-4/5">
                <img
                  src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/sas.png"
                  alt="AlgoViz"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <div className="flex justify-center gap-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
                    onClick={handleLiveLinkClick2}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
                    onClick={handleGithubLinkClick2}
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
          <div className="md:flex gap-6">
            <div className="flex w-full md:w-1/2 items-center justify-center mb-6 md:mb-0">
              <div className="w-full xl:w-4/5">
                <img
                  src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/fda.png"
                  alt="Swift Eats"
                  className="w-full h-auto rounded-lg mb-4"
                />
                <div className="flex justify-center gap-4">
                  <Link to="/new-page">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
                      <FaExternalLinkAlt className="mr-2" />
                      Live
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center"
                    onClick={handleGithubLinkClick3}
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-1/2 justify-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Swift Eats</h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                A full-stack web app for food delivery, featuring an intuitive front end with HTML, Tailwind CSS, and JavaScript. Backed by Java Servlets
                and JDBC for server-side logic and MySQL for data storage. Enables users to browse menus, place orders securely, and enjoy responsive design
                across devices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-4/5 mx-auto mb-10 mt-10 lg:mb-16 lg:mt-16" />
    </section>
  );
};

export default ProjectSection;