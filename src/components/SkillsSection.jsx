// SkillsSection.jsx
import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills-section" className="py-20 bg-gray-100 mt-20">
      <div className="container mx-auto text-center"> {/* Center align the heading "Skills" */}
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
      </div>
      <div className="container mx-auto"> {/* Adjust space between boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="mb-6"> {/* Add margin to the bottom of each box */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside">
                <li>HTML</li>
                <li>CSS / SCSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Vue.js</li>
                {/* Add more frontend skills as needed */}
              </ul>
            </div>
          </div>
          <div className="mb-6"> {/* Add margin to the bottom of each box */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="list-disc list-inside">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Python</li>
                <li>Django</li>
                <li>PHP</li>
                {/* Add more backend skills as needed */}
              </ul>
            </div>
          </div>
          <div className="mb-6"> {/* Add margin to the bottom of each box */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">Other</h3>
              <ul className="list-disc list-inside">
                <li>Git</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Database Management (SQL / NoSQL)</li>
                <li>Responsive Web Design</li>
                {/* Add more skills as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
