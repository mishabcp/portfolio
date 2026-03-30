import { HiCode, HiServer, HiDatabase, HiChartBar, HiBeaker, HiDesktopComputer, HiCloudUpload, HiLightningBolt, HiPuzzle, HiCreditCard } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import {
  SiPhp,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiJavascript,
  SiReact,
  SiJquery,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiPostman,
  SiCpanel,
  SiNodedotjs,
  SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiVercel,
  SiPnpm,
  SiPuppeteer,
  SiGoogle,
  SiVite,
  SiExpress,
} from 'react-icons/si';

/** Labels from resume skill categories + short names used in project `tech` strings */
export const skillIcons = {
  PHP: SiPhp,
  Laravel: SiLaravel,
  CodeIgniter: SiCodeigniter,
  'Node.js': SiNodedotjs,
  NestJS: SiNestjs,
  MySQL: SiMysql,
  'RESTful APIs': HiCode,
  'API Integration': HiPuzzle,
  'Backend Development': HiServer,
  'Database Design': HiDatabase,
  'Query Optimization': HiChartBar,
  jQuery: SiJquery,
  'API Testing': HiBeaker,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Bootstrap: SiBootstrap,
  'Tailwind CSS': SiTailwindcss,
  Tailwind: SiTailwindcss,
  'Responsive Web Design': HiDesktopComputer,
  PostgreSQL: SiPostgresql,
  'Prisma ORM': SiPrisma,
  Prisma: SiPrisma,
  Supabase: SiSupabase,
  'Google Generative AI': SiGoogle,
  'Google AI': SiGoogle,
  'Groq (LLM)': HiLightningBolt,
  Groq: HiLightningBolt,
  'Puppeteer (PDF)': SiPuppeteer,
  'WhatsApp API': FaWhatsapp,
  'Third-party Payment APIs': HiCreditCard,
  Git: SiGit,
  Postman: SiPostman,
  cPanel: SiCpanel,
  Vercel: SiVercel,
  'pnpm Monorepo': SiPnpm,
  'Software Testing': HiBeaker,
  'System Deployment': HiCloudUpload,
  'Performance Optimization': HiLightningBolt,
  Vite: SiVite,
  Express: SiExpress,
};

export function getTechIcon(label) {
  const k = (label || '').trim();
  if (!k) return HiCode;
  if (skillIcons[k]) return skillIcons[k];
  const head = k.split(/[\s(/+]/)[0];
  if (head && skillIcons[head]) return skillIcons[head];
  const keys = Object.keys(skillIcons).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    if (k.startsWith(key)) return skillIcons[key];
  }
  return HiCode;
}
