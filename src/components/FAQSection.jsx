import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { marketingContent } from '../data/marketingContent';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

function FAQItem({ q, a, index, openIndex, setOpenIndex }) {
  const open = openIndex === index;
  const Icon = open ? HiMinus : HiPlus;

  return (
    <motion.div variants={fadeUp} className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button
        type="button"
        className="faq-item__trigger"
        aria-expanded={open}
        onClick={() => setOpenIndex(open ? -1 : index)}
      >
        <span className="faq-item__index" aria-hidden>
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="faq-item__question">{q}</span>
        <Icon className="faq-item__icon" aria-hidden />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="faq-item__body-wrap"
          >
            <p className="editorial-body faq-item__body">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const { faq } = marketingContent;
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <motion.section
      id="faq"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      className="editorial-section faq-section"
    >
      <motion.span variants={fadeUp} className="editorial-eyebrow">
        {faq.eyebrow}
      </motion.span>

      <motion.h2 variants={fadeUp} className="editorial-h2-section faq-section__headline">
        {faq.headline}
      </motion.h2>

      <div className="faq-list">
        {faq.items.map((item, i) => (
          <FAQItem
            key={item.q}
            q={item.q}
            a={item.a}
            index={i}
            openIndex={openIndex}
            setOpenIndex={setOpenIndex}
          />
        ))}
      </div>
    </motion.section>
  );
}
