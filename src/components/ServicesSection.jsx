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
        {resumeData.services.map((service, i) => (
          <motion.div
            key={service.title}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="service-block"
          >
            <div className="editorial-index-num service-block__index">{String(i + 1).padStart(2, '0')}</div>
            <h3 className="editorial-h3" style={{ fontSize: 'clamp(1.35rem, 2.5vw, 1.85rem)' }}>
              {service.title}
            </h3>
            <p className="editorial-body" style={{ margin: 0, maxWidth: '32rem' }}>
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
