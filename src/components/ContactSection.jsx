import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { resumeData } from '../data/resumeData';

const WEB3FORMS_ACCESS_KEY = 'b118b50d-7294-45cd-9a5e-0b80604cea25';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
        setFormState({ status: 'success', message: "Thanks! I'll get back to you soon." });
        form.reset();
      } else {
        setFormState({ status: 'error', message: data.message || 'Something went wrong.' });
      }
    } catch {
      setFormState({ status: 'error', message: 'Failed to send. Please email me directly.' });
    }
    setLoading(false);
  };

  const contactItems = [
    { kind: 'link', label: 'Email', href: `mailto:${resumeData.email}`, icon: HiMail, value: resumeData.email },
    ...resumeData.phone.map((num) => ({
      kind: 'link',
      label: 'Phone',
      href: `tel:${num.replace(/\s/g, '')}`,
      icon: HiPhone,
      value: num,
    })),
    { kind: 'static', label: 'Location', icon: HiLocationMarker, value: resumeData.location },
    {
      kind: 'link',
      label: 'WhatsApp',
      href: resumeData.whatsapp,
      icon: FaWhatsapp,
      value: resumeData.whatsappDisplay,
    },
  ];

  const social = [
    { label: 'LinkedIn', href: resumeData.linkedin, icon: FaLinkedin },
    { label: 'GitHub', href: resumeData.github, icon: FaGithub },
  ];

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className="editorial-section"
    >
      <div className="contact-frame">
        <motion.span variants={fadeUp} className="editorial-eyebrow">
          Contact
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="editorial-display"
          style={{ fontSize: 'var(--text-display-sm)', margin: '0 0 clamp(1rem, 2vw, 1.5rem)' }}
        >
          Let&apos;s connect
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="editorial-body"
          style={{ marginBottom: 'clamp(2rem, 4vw, 2.75rem)', maxWidth: 'var(--read-max-width)' }}
        >
          Have a project in mind or just want to say hello? I&apos;m available for freelance work and always open to
          interesting opportunities.
        </motion.p>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="contact-frame__main contact-board"
        >
          <motion.div className="contact-board__form" variants={fadeUp}>
            <div className="contact-form-shell">
              <form onSubmit={handleSubmit} className="contact-form-panel contact-form-panel--memo">
                <h3 className="editorial-h3 contact-form-panel__title">Say something</h3>

                <div className="contact-form-memo__duo">
                  <div className="contact-form-field">
                    <label htmlFor="contact-name" className="editorial-meta contact-form-label">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      className="contact-form-input"
                      placeholder="Jane Doe"
                      autoComplete="name"
                      required
                    />
                  </div>
                  <div className="contact-form-field">
                    <label htmlFor="contact-email" className="editorial-meta contact-form-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      className="contact-form-input"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-field contact-form-field--memo-message">
                  <label htmlFor="contact-message" className="editorial-meta contact-form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="contact-form-input contact-form-input--message contact-form-input--memo-expand"
                    placeholder="A line or two is enough — expands when you focus."
                    rows={2}
                    required
                  />
                </div>

                <div className="contact-form-memo__foot">
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className={`editorial-meta contact-form-submit contact-form-submit--memo${loading ? ' contact-form-submit--loading' : ''}`}
                    whileHover={loading ? undefined : { scale: 1.02, y: -1 }}
                    whileTap={loading ? undefined : { scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                  >
                    {loading ? 'Sending…' : 'Send →'}
                  </motion.button>
                </div>

                {formState.message && (
                  <p
                    className={`editorial-body contact-form-feedback contact-form-feedback--memo ${
                      formState.status === 'success' ? 'contact-form-feedback--success' : 'contact-form-feedback--error'
                    }`}
                    role="status"
                    aria-live="polite"
                  >
                    {formState.message}
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          <motion.aside
            variants={fadeUp}
            className="contact-board__aside contact-frame__rail"
            aria-label="Direct contact and social links"
          >
            <p className="editorial-meta contact-board__aside-label">Direct</p>
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
              className="contact-channels"
            >
              {contactItems.map((item) => {
                const Icon = item.icon;
                const rowBody = (
                  <>
                    <span className="contact-channel__icon" aria-hidden>
                      <Icon size={15} />
                    </span>
                    <span className="contact-channel__body">
                      <span className="editorial-meta contact-channel__label">{item.label}</span>
                      <span className="editorial-body contact-channel__value">{item.value}</span>
                    </span>
                  </>
                );
                const key = `${item.label}-${item.value}`;
                if (item.kind === 'static') {
                  return (
                    <motion.div key={key} variants={fadeUp} className="contact-channel contact-channel--static">
                      {rowBody}
                    </motion.div>
                  );
                }
                return (
                  <motion.a
                    key={key}
                    variants={fadeUp}
                    href={item.href}
                    className="contact-channel"
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 3, transition: { type: 'spring', stiffness: 400, damping: 22 } }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {rowBody}
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp} className="contact-social contact-social--board">
              {social.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="contact-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 24 }}
                >
                  <item.icon size={15} className="contact-social-link__icon" aria-hidden />
                  <span className="contact-social-link__label">{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        </motion.div>
      </div>
    </motion.section>
  );
}
