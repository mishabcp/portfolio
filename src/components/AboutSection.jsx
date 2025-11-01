import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section ref={ref} id="about-section" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            About Me
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer creating innovative solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-1 gap-8">
            <div className="glass p-8 rounded-2xl">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a Full Stack Developer with 2 years of professional experience specializing in fintech and Enterprise Resource Planning (ERP) systems. Currently based in Dubai, I have a strong track record of building and maintaining complex web applications using PHP, Laravel, CodeIgniter, JavaScript, and MySQL.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                At Netplex IT Solutions, I've led API development for PlexPay, a UAE-based fintech recharge platform, and built ISL, a comprehensive Laboratory Information Management System. I'm passionate about creating scalable solutions, optimizing performance, and delivering quality software that meets real business needs. Beyond coding, I excel at client communication, technical documentation, and providing end-user training for production systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;