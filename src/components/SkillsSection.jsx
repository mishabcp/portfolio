import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, Database, Server, Wrench, Zap, Globe,
  CheckCircle
} from 'lucide-react';

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      color: 'from-cyan-400 to-blue-500',
      skills: ['PHP', 'JavaScript', 'Java', 'SQL']
    },
    {
      title: 'Frameworks',
      icon: Server,
      color: 'from-purple-400 to-pink-500',
      skills: ['Laravel', 'CodeIgniter', 'React', 'jQuery', 'Bootstrap', 'Tailwind CSS']
    },
    {
      title: 'API & Database',
      icon: Database,
      color: 'from-green-400 to-cyan-500',
      skills: ['REST API', 'API Integration', 'MySQL', 'Database Design', 'Query Optimization', 'Postman']
    },
    {
      title: 'Tools & Deployment',
      icon: Wrench,
      color: 'from-orange-400 to-red-500',
      skills: ['Git', 'cPanel', 'phpMyAdmin', 'Web3Forms', 'VS Code']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} id="skills-section" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-2xl hover:glow transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-4 bg-gradient-to-r ${category.color} rounded-xl`}>
                  <category.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + skillIndex * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <CheckCircle size={16} className="text-cyan-400 flex-shrink-0" />
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Expertise Level</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { skill: 'Backend Development', level: 90, color: 'from-cyan-400 to-blue-500' },
              { skill: 'API Development', level: 85, color: 'from-purple-400 to-pink-500' },
              { skill: 'Database Design', level: 80, color: 'from-green-400 to-cyan-500' },
              { skill: 'Frontend Development', level: 75, color: 'from-orange-400 to-red-500' },
              { skill: 'System Architecture', level: 70, color: 'from-pink-400 to-purple-500' },
              { skill: 'Performance Optimization', level: 85, color: 'from-blue-400 to-cyan-500' }
            ].map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{item.skill}</span>
                  <span className="text-cyan-400 font-bold">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                    className={`h-3 rounded-full bg-gradient-to-r ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;