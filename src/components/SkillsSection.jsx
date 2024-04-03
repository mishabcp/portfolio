import React, { useRef, useEffect, useState } from 'react';
import './SkillSection.css'; // Import the CSS file for SkillsSection

const SkillsSection = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [skillsPerRow, setSkillsPerRow] = useState(3); // Default skills per row for smaller screens

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

    // Update skills per row based on screen size
    // Update skills per row based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        if (skillsPerRow !== 4) {
          setSkillsPerRow(4); 
        }
      } else {
        if (skillsPerRow !== 3) {
          setSkillsPerRow(2); 
        }
      }
    };


    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Dynamically calculate width for each skill item based on skills per row
  const getSkillWidth = () => {
    if (window.innerWidth >= 1024) {
      return `${100 / 5}%`; 
    } else {
      return `${100 / 4}%`; 
    }
  };

  const skillIcons = [
    'html.svg', 'react.svg', 'css.svg', 'tailwind.svg', 'javascript.svg', 'mysql.svg', 'java.svg'
  ];

  const getImageUrl = (icon) => {
    return `https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/${icon}`;
  };

  return (
    <section
      ref={skillsRef}
      id="skills-section"
      className={`skills-section-container bg-white w-4/5 2xl:w-3/5 mx-auto mb-10 lg:mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out `}
    >
      <div className="container mx-auto">
        <h2 className="skills-section-heading text-4xl md:text-6xl font-bold mb-20 md:mb-24 text-center">Skills</h2>
        <div className="skills-container flex flex-wrap justify-center  gap-2">
          {skillIcons.map((icon, index) => (
            <div key={index} className="skill-item  flex justify-center items-center mb-8 md:mb-16 " style={{ width: getSkillWidth() }}>
               <img src={getImageUrl(icon)} alt={`Skill ${index + 1}`} className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          ))}
        </div>
      </div>
      <hr className="w-4/5 mx-auto mb-10 mt-10 lg:mb-16 lg:mt-16" />
    </section>
  );
};

export default SkillsSection;
