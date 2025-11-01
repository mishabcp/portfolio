import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, Code, Smartphone, Database } from 'lucide-react';

const ProjectSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Task Organizer',
      description: 'A comprehensive task management application built with React, featuring task creation, editing, deletion, and progress tracking with interactive charts.',
      longDescription: 'Task Organizer is a React-based app for efficient task management. Users can add, edit, delete tasks, mark them as completed, and organize by category. It offers sorting and filtering options, visual progress tracking via pie charts, and a calendar view for managing tasks based on due dates.',
      image: 'https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/TO.png',
      technologies: ['React', 'JavaScript', 'CSS', 'Chart.js'],
      features: ['Task CRUD operations', 'Category organization', 'Progress visualization', 'Calendar integration'],
      liveUrl: 'https://mishabcp.github.io/ToDoList/',
      githubUrl: 'https://github.com/mishabcp/ToDoList',
      icon: Code,
      gradient: 'from-cyan-400 to-blue-500'
    },
    {
      id: 2,
      title: 'AlgoViz',
      description: 'Interactive algorithm visualization tool demonstrating sorting and searching algorithms with real-time animations and custom data input.',
      longDescription: 'AlgoViz is a React project designed to visually demonstrate fundamental sorting (Bubble, Merge, Quick) and searching (Linear, Binary) algorithms. Through interactive simulations, users can input custom arrays or use random data to observe these algorithms in action, gaining insights into their efficiency and functionality.',
      image: 'https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/sas.png',
      technologies: ['React', 'JavaScript', 'CSS', 'Algorithms'],
      features: ['Multiple algorithm visualizations', 'Custom data input', 'Real-time animations', 'Performance comparison'],
      liveUrl: 'https://mishabcp.github.io/AlgoViz/',
      githubUrl: 'https://github.com/mishabcp/AlgoViz',
      icon: Code,
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 3,
      title: 'Swift Eats',
      description: 'Full-stack food delivery platform with secure user authentication, restaurant browsing, cart management, and order processing.',
      longDescription: 'A full-stack web app for food delivery, featuring an intuitive front end with HTML, Tailwind CSS, and JavaScript. Backed by Java Servlets and JDBC for server-side logic and MySQL for data storage. Enables users to browse menus, place orders securely, and enjoy responsive design across devices.',
      image: 'https://raw.githubusercontent.com/mishabcp/portfolio/main/src/assets/fda.png',
      technologies: ['Java', 'Servlets', 'JDBC', 'MySQL', 'HTML', 'Tailwind CSS', 'JavaScript'],
      features: ['User authentication', 'Restaurant browsing', 'Cart management', 'Order processing', 'Admin dashboard'],
      githubUrl: 'https://github.com/mishabcp/FoodDeliveryApp',
      icon: Smartphone,
      gradient: 'from-green-400 to-cyan-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} id="Project-Section" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my work and technical expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden hover:glow transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className={`absolute top-4 right-4 p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                  <project.icon size={20} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-600 text-gray-300 text-xs rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Live</span>
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full rounded-xl mb-6"
                    />
                    <div className="flex space-x-4">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 glass px-4 py-2 rounded-lg text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>View Live</span>
                        </a>
                      )}
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 glass px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedProject.longDescription}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 text-cyan-400 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2 text-gray-300">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectSection;