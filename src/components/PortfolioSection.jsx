// PortfolioSection.jsx
import React from 'react';

const PortfolioSection = () => {
  return (
    <section id="portfolio-section" className="py-20 bg-gray-100 mt-20">
      <div className="container mx-auto"> {/* Added container mx-auto */}
        <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Individual project cards */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600 mb-4">Description of Project 1.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600 mb-4">Description of Project 2.</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
