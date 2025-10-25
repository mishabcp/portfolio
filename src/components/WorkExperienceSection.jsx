import React, { useRef, useEffect, useState } from 'react';

const WorkExperienceSection = () => {
  const experienceRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const experienceSection = experienceRef.current;

    const handleScroll = () => {
      const top = experienceSection.getBoundingClientRect().top;
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

  const workExperience = {
    company: 'Netplex IT Solutions',
    location: 'Kannur, Kerala',
    position: 'Full Stack Developer | API Developer',
    period: 'May 2024 - Present',
    responsibilities: [
      'Built and maintained ISL, a Laravel-based Laboratory Information Management System (LIMS) with optimized database design and backend structure',
      'Designed project documentation and technical structure for multi-module enterprise applications',
      'Provided software support, client training, and issue resolution for deployed production systems',
      'Led API development for PlexPay, a UAE-based fintech recharge platform—integrated third-party provider APIs, ensured secure transactions, and managed debugging',
      'Collaborated with clients to gather business requirements, offer real-time technical support, and ensure smooth system operations',
      'Managed deployments through cPanel, optimized backend queries, and improved performance by up to 80%'
    ]
  };

  return (
    <section
      ref={experienceRef}
      id="experience-section"
      className={`bg-white w-4/5 2xl:w-3/5 mx-auto mb-10 lg:mb-20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000 ease-in-out`}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 md:mb-16 text-center">Work Experience</h2>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {workExperience.position}
            </h3>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 text-gray-700">
              <p className="text-lg font-semibold">{workExperience.company}</p>
              <p className="text-sm md:text-base">{workExperience.location}</p>
            </div>
            <p className="text-sm md:text-base text-blue-600 font-medium mt-2">
              {workExperience.period}
            </p>
          </div>

          <div className="space-y-3">
            {workExperience.responsibilities.map((responsibility, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-blue-600 font-bold mt-1 flex-shrink-0">•</span>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {responsibility}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-4/5 mx-auto mb-10 mt-10 lg:mb-16 lg:mt-16" />
    </section>
  );
};

export default WorkExperienceSection;