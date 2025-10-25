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

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['PHP', 'JavaScript', 'Java'],
      color: 'border-blue-200 bg-blue-50'
    },
    {
      title: 'Frameworks',
      skills: ['Laravel', 'CodeIgniter', 'React', 'jQuery', 'Bootstrap', 'Tailwind CSS'],
      color: 'border-purple-200 bg-purple-50'
    },
    {
      title: 'API & Database',
      skills: ['REST API', 'API Integration', 'MySQL', 'Database Design', 'Query Optimization', 'Postman'],
      color: 'border-green-200 bg-green-50'
    },
    {
      title: 'Tools & Deployment',
      skills: ['Git', 'cPanel', 'phpMyAdmin', 'Web3Forms'],
      color: 'border-orange-200 bg-orange-50'
    }
  ];

  return (
    <section
      ref={skillsRef}
      id="skills-section"
      className={`bg-white w-4/5 2xl:w-3/5 mx-auto mb-10 lg:mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center">Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`${category.color} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105`}
            >
              <h3 className="font-bold text-xl md:text-2xl mb-4 text-gray-800">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-white text-gray-700 px-3 py-2 rounded-lg text-sm md:text-base font-medium shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-4/5 mx-auto mb-10 mt-10 lg:mb-16 lg:mt-16" />
    </section>
  );
};

export default SkillsSection;