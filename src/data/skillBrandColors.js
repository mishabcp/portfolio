/**
 * Brand colors for skill icons (Simple Icons / common hex values).
 * Generic concepts fall back via getSkillBrandColor → var(--accent).
 */
const skillBrandColors = {
  PHP: '#777BB4',
  Laravel: '#FF2D20',
  CodeIgniter: '#EF4223',
  'Node.js': '#5FA04E',
  NestJS: '#E0234E',
  'RESTful APIs': '#6366F1',
  'API Integration': '#2563EB',
  'Database Design': '#336791',
  'Query Optimization': '#059669',
  React: '#61DAFB',
  'Next.js': '#FFFFFF',
  TypeScript: '#3178C6',
  JavaScript: '#F7DF1E',
  jQuery: '#0769AD',
  Bootstrap: '#7952B3',
  'Tailwind CSS': '#06B6D4',
  'Responsive Web Design': '#0EA5E9',
  MySQL: '#4479A1',
  PostgreSQL: '#4169E1',
  'Prisma ORM': '#C7D2FE',
  Supabase: '#3FCF8E',
  'Google Generative AI': '#4285F4',
  'Groq (LLM)': '#F55036',
  'Puppeteer (PDF)': '#40B5A4',
  'WhatsApp API': '#25D366',
  'Third-party Payment APIs': '#8B5CF6',
  Git: '#F05032',
  Postman: '#FF6C37',
  cPanel: '#FF6C2C',
  Vercel: '#FFFFFF',
  'pnpm Monorepo': '#F69220',
  'System Deployment': '#64748B',
  'Performance Optimization': '#F59E0B',
};

export function getSkillBrandColor(label) {
  const k = (label || '').trim();
  if (!k) return 'var(--accent)';
  if (skillBrandColors[k]) return skillBrandColors[k];
  const keys = Object.keys(skillBrandColors).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (k.startsWith(key)) return skillBrandColors[key];
  }
  return 'var(--accent)';
}
