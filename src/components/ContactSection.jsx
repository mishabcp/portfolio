import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

const ACCENT = '#4db8a4';
const ACCENT_DIM = 'rgba(77, 184, 164, 0.3)';

// Replace with your Web3Forms access key: https://web3forms.com
const WEB3FORMS_ACCESS_KEY = 'b118b50d-7294-45cd-9a5e-0b80604cea25';

export default function ContactSection() {
  const [formState, setFormState] = useState({ status: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormState({ status: null, message: '' });
    const form = e.target;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setFormState({ status: 'success', message: 'Thanks! I\'ll get back to you soon.' });
        form.reset();
      } else {
        setFormState({ status: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch (err) {
      setFormState({ status: 'error', message: 'Failed to send. Please email me directly.' });
    }
    setLoading(false);
  };

  const links = [
    { label: 'Email', href: `mailto:${resumeData.email}`, icon: HiMail, value: resumeData.email },
    { label: 'Phone', href: `tel:${resumeData.phone}`, icon: HiPhone, value: resumeData.phone },
    { label: 'Location', href: '#', icon: HiLocationMarker, value: resumeData.location },
  ];

  const social = [
    { label: 'LinkedIn', href: resumeData.linkedin, icon: FaLinkedin },
    { label: 'GitHub', href: resumeData.github, icon: FaGithub },
    { label: 'WhatsApp', href: resumeData.whatsapp, icon: FaWhatsapp },
  ];

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      style={{
        padding: '5rem 2rem 7rem',
        textAlign: 'center',
      }}
    >
      <motion.span
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        style={{
          display: 'block',
          marginBottom: '1.5rem',
          fontSize: '0.6rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: ACCENT_DIM,
          fontWeight: 500,
        }}
      >
        Contact
      </motion.span>

      <motion.h2
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(3rem, 7vw, 5.5rem)',
          fontWeight: 300,
          margin: '0 0 1rem',
          color: ACCENT,
          fontStyle: 'italic',
        }}
      >
        Let's Connect
      </motion.h2>
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        style={{ width: 40, height: 1, background: ACCENT, margin: '0 auto 2.5rem' }}
      />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {links.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
            style={{ color: '#b8b4a8', textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}
          >
            <item.icon size={22} style={{ color: ACCENT_DIM }} />
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: ACCENT_DIM, textTransform: 'uppercase' }}>{item.label}</span>
            <span style={{ fontSize: '0.85rem' }}>{item.value}</span>
          </motion.a>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
        {social.map((item) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
            style={{
              padding: '12px 20px',
              border: `1px solid ${ACCENT_DIM}`,
              color: ACCENT,
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.85rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = ACCENT_DIM; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
          >
            <item.icon size={20} /> {item.label}
          </motion.a>
        ))}
      </div>

      <motion.form
        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        onSubmit={handleSubmit}
        style={{
          maxWidth: '480px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'left',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          style={{
            padding: '12px 16px',
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${ACCENT_DIM}`,
            borderRadius: '6px',
            color: '#d4d0c8',
            fontSize: '0.9rem',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          style={{
            padding: '12px 16px',
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${ACCENT_DIM}`,
            borderRadius: '6px',
            color: '#d4d0c8',
            fontSize: '0.9rem',
          }}
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          required
          style={{
            padding: '12px 16px',
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${ACCENT_DIM}`,
            borderRadius: '6px',
            color: '#d4d0c8',
            fontSize: '0.9rem',
            resize: 'vertical',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '12px 28px',
            background: 'transparent',
            border: `1px solid ${ACCENT}`,
            color: ACCENT,
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: loading ? 'wait' : 'pointer',
            alignSelf: 'flex-start',
            transition: 'all 0.2s',
          }}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {formState.message && (
          <p style={{ fontSize: '0.85rem', color: formState.status === 'success' ? ACCENT : '#e07a5f', margin: 0 }}>
            {formState.message}
          </p>
        )}
      </motion.form>
    </motion.section>
  );
}
