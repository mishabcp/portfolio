import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Award, TrendingUp } from 'lucide-react';

const WorkExperienceSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const workExperience = {
    company: 'Netplex IT Solutions',
    location: 'Kannur, Kerala',
    position: 'Full Stack Developer | API Developer',
    period: 'May 2024 - Present',
    achievements: [
      {
        title: 'PlexPay Fintech Platform',
        description: 'Led API development for UAE-based fintech recharge platform with secure transactions and third-party provider integrations',
        icon: TrendingUp,
        color: 'from-cyan-400 to-blue-500'
      },
      {
        title: 'ISL Laboratory Management System',
        description: 'Built comprehensive LIMS using Laravel with optimized database design and backend architecture',
        icon: Award,
        color: 'from-purple-400 to-pink-500'
      },
      {
        title: 'Performance Optimization',
        description: 'Improved backend query performance by up to 80% through strategic database optimization and caching',
        icon: TrendingUp,
        color: 'from-green-400 to-cyan-500'
      },
      {
        title: 'Client Support & Training',
        description: 'Provided ongoing technical support and end-user training for production systems across multiple clients',
        icon: Award,
        color: 'from-orange-400 to-red-500'
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={ref} id="experience-section" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional journey and key achievements
          </p>
        </motion.div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-8 rounded-2xl mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">{workExperience.position}</h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Award size={18} className="text-cyan-400" />
                  <span className="font-semibold">{workExperience.company}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={18} className="text-purple-400" />
                  <span>{workExperience.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} className="text-pink-400" />
                  <span>{workExperience.period}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {workExperience.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-6 rounded-xl hover:glow transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 bg-gradient-to-r ${achievement.color} rounded-lg flex-shrink-0`}>
                  <achievement.icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-3">{achievement.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Career Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>

            <div className="space-y-8">
              {[
                { year: '2024', title: 'Full Stack Developer', company: 'Netplex IT Solutions', status: 'current' },
                { year: '2023', title: 'Started Professional Journey', company: 'Self-Learning & Projects', status: 'past' },
                { year: '2023', title: 'B.Tech Computer Science', company: 'Graduation', status: 'past' }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="relative flex items-center space-x-6"
                >
                  <div className={`w-4 h-4 rounded-full ${
                    milestone.status === 'current' 
                      ? 'bg-cyan-400 animate-pulse-glow' 
                      : 'bg-purple-400'
                  } border-4 border-gray-800`}></div>
                  <div className="glass p-4 rounded-lg flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-400 font-bold">{milestone.year}</span>
                      {milestone.status === 'current' && (
                        <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full">Current</span>
                      )}
                    </div>
                    <h4 className="text-white font-semibold mb-1">{milestone.title}</h4>
                    <p className="text-gray-400 text-sm">{milestone.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;