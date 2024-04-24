import React from 'react';
import Header from '../components/P3-Header';
import Footer from '../components/Footer';

const Project3 = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Use flexbox to make sure the footer sticks to the bottom */}
      <Header />
      <main className="w-4/5 2xl:w-3/5 mx-auto flex-1">
        <h1 className='mt-24'>Project 3 Page</h1>
        <div className="items-center justify-center">
        {/* First Two Divs */}
        <div className="md:flex mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg bg-white md:shadow-none ">
          <div className="flex w-full items-center justify-center">
          <div className="xl:w-4/5 flex flex-col items-center justify-center mb-3 px-2">
            <img
              src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/user flow.png"
              alt="Project Image"
              className="mb-3 w-full h-auto rounded-lg"
            />
          </div>

          </div>
          <div className="flex flex-col w-full rounded-xl justify-center lg:mb-10">
            <h2 className="text-xl 2xl:text-2xl md:ml-10 font-bold lg:ml-16 xl:ml-20 m-3">Task Organizer</h2>
            <p className="text-md 2xl:text-xl m-2 xl:text-lg md:ml-10 lg:ml-16 xl:ml-20">Task Organizer is a React-based app for <span className="text-blue-500">efficient task management</span>. Users can <span className="text-blue-500">add, edit, delete tasks</span>, <span className="text-blue-500">mark them as completed</span>, and <span className="text-blue-500">organize by category</span>. It offers <span className="text-blue-500">sorting and filtering options</span>, <span className="text-blue-500">visual progress tracking via pie charts</span>, and a <span className="text-blue-500">calendar view</span> for managing tasks based on <span className="text-blue-500">due dates</span>.</p>
          </div>
        </div>

        {/* Next Two Divs */}
        <div className="md:flex bg-white mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg md:shadow-none ">
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
            </div>

          </div>
        </div>

        {/* next two divs */}
        <div className="md:flex bg-white mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg md:shadow-none ">
          <div className="flex w-full items-center justify-center">
          <div className="xl:w-4/5 flex flex-col items-center justify-center mb-3 px-2">
            <img
              src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/fda.png"
              alt="Project Image"
              className="mb-3 w-full h-auto rounded-lg"
            />
          </div>
          </div>
          <div className="flex flex-col w-full rounded-xl justify-center lg:mb-10">
            <h2 className="text-xl 2xl:text-2xl md:ml-10 font-bold lg:ml-16 xl:ml-20 m-3">Swift Eats</h2>
            <p className="text-md 2xl:text-xl m-2 xl:text-lg md:ml-10 lg:ml-16 xl:ml-20">A full-stack web app for food delivery, featuring an intuitive front end with HTML, Tailwind CSS, and JavaScript. Backed by Java Servlets and JDBC for server-side logic and MySQL for data storage. Enables users to browse menus, place orders securely, and enjoy responsive design across devices.</p>
          </div>
        </div>
        {/* First Two Divs */}
        <div className="md:flex mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg bg-white md:shadow-none ">
          <div className="flex w-full items-center justify-center">
          <div className="xl:w-4/5 flex flex-col items-center justify-center mb-3 px-2">
            <img
              src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/TO.png"
              alt="Project Image"
              className="mb-3 w-full h-auto rounded-lg"
            />
          </div>

          </div>
          <div className="flex flex-col w-full rounded-xl justify-center lg:mb-10">
            <h2 className="text-xl 2xl:text-2xl md:ml-10 font-bold lg:ml-16 xl:ml-20 m-3">Task Organizer</h2>
            <p className="text-md 2xl:text-xl m-2 xl:text-lg md:ml-10 lg:ml-16 xl:ml-20">Task Organizer is a React-based app for <span className="text-blue-500">efficient task management</span>. Users can <span className="text-blue-500">add, edit, delete tasks</span>, <span className="text-blue-500">mark them as completed</span>, and <span className="text-blue-500">organize by category</span>. It offers <span className="text-blue-500">sorting and filtering options</span>, <span className="text-blue-500">visual progress tracking via pie charts</span>, and a <span className="text-blue-500">calendar view</span> for managing tasks based on <span className="text-blue-500">due dates</span>.</p>
          </div>
        </div>

        {/* Next Two Divs */}
        <div className="md:flex bg-white mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg md:shadow-none ">
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
            </div>

          </div>
        </div>

        {/* next two divs */}
        <div className="md:flex bg-white mb-20 pb-4 pt-2 md:pb-0 md:pt-0 md:py-0 rounded-lg md:rounded-none shadow-all-sides shadow-lg md:shadow-none ">
          <div className="flex w-full items-center justify-center">
          <div className="xl:w-4/5 flex flex-col items-center justify-center mb-3 px-2">
            <img
              src="https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/fda.png"
              alt="Project Image"
              className="mb-3 w-full h-auto rounded-lg"
            />
          </div>
          </div>
          <div className="flex flex-col w-full rounded-xl justify-center lg:mb-10">
            <h2 className="text-xl 2xl:text-2xl md:ml-10 font-bold lg:ml-16 xl:ml-20 m-3">Swift Eats</h2>
            <p className="text-md 2xl:text-xl m-2 xl:text-lg md:ml-10 lg:ml-16 xl:ml-20">A full-stack web app for food delivery, featuring an intuitive front end with HTML, Tailwind CSS, and JavaScript. Backed by Java Servlets and JDBC for server-side logic and MySQL for data storage. Enables users to browse menus, place orders securely, and enjoy responsive design across devices.</p>
          </div>
        </div>
        
      </div>
      </main>
    </div>
  );
};

export default Project3;
