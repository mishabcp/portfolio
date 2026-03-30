import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

export default function ServicesSection() {
  return (
    <motion.section
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="editorial-section"
    >
      <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="editorial-eyebrow">
        Services
      </motion.span>

      <div className="services-grid">
        {resumeData.services.map((service) => (
          <motion.div
            key={service.title}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="service-block service-block--card"
          >
            <div className="service-block__inner">
              <h3 className="editorial-h3 service-block__title" style={{ fontSize: 'clamp(1.2rem, 2.25vw, 1.65rem)' }}>
                {service.title}
              </h3>
              <p className="editorial-body service-block__desc" style={{ margin: 0, maxWidth: 'none' }}>
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
