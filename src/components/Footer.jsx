import React from 'react';
import { resumeData } from '../data/resumeData';

const ACCENT = '#4db8a4';
const ACCENT_DIM = 'rgba(77, 184, 164, 0.3)';

const quickLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${ACCENT_DIM}`,
        padding: '2.5rem 2rem',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
        <p style={{ fontSize: '0.8rem', color: '#5a5448', margin: 0 }}>
          © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                color: ACCENT_DIM,
                textDecoration: 'none',
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={resumeData.resumePdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            padding: '8px 20px',
            border: `1px solid ${ACCENT_DIM}`,
            color: ACCENT,
            textDecoration: 'none',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Download Resume
        </a>
      </div>
    </footer>
  );
}
