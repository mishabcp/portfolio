/**
 * Marketing copy + structured data for the freelance landing page.
 * Resume data (resumeData.js) is still the source of truth for personal
 * details, projects, skills. This file owns the *narrative* layer: the
 * value prop, problems, packages, results, FAQ — what a buyer reads.
 */

import { resumeData } from './resumeData';

export const marketingContent = {
  hero: {
    eyebrow: 'Freelance · Available for new work',
    headline: 'Full stack developer building websites and end-to-end web apps.',
    accentWord: 'end-to-end',
    sublineBold: 'Built end-to-end. Performance-tuned. Shipped.',
    sublineBoldMobile: 'End-to-end. Performance-tuned. Shipped.',
    subline:
      "I'm Mishab — a full-stack developer with 2+ years at a Dubai-based company. PHP / Laravel / React / Next.js. I build marketing sites and real products: payment platforms, ERP-style ops tools, and pragmatic LLM features.",
    sublineMobile:
      '2+ years building real products — payment platforms, ops tools, and pragmatic AI features.',
    primaryCta: {
      label: 'Message on WhatsApp',
      href: resumeData.whatsapp,
      external: true,
    },
    secondaryCta: {
      label: 'See case studies',
      sectionId: 'case-studies',
    },
    statsStrip: [
      { value: '2+ yrs', label: 'At a Dubai-based company' },
    ],
  },

  problems: {
    eyebrow: 'Problems I solve',
    headline: "If any of this sounds like your week — that's my job.",
    items: [
      {
        kicker: '01',
        title: 'You have an idea, but no website or web app yet',
        pain: "You can describe it over coffee, but the question of who'll actually build it keeps killing your momentum.",
        solution:
          'I take your idea from one paragraph to a live site or working web app — landing page, login, payments, admin area, whatever it needs. Built three of my own products this way: ClariSpec, BuildOps, LabCore.',
      },
      {
        kicker: '02',
        title: 'Your business runs on spreadsheets',
        pain: "Orders in Excel, customers in another sheet, updates in WhatsApp. Your tools don't talk to each other, and nothing ties together.",
        solution:
          'I build the one internal tool your team runs on, and wire it into the services you already use. Like the ISL Laboratory system — multiple departments, one source of truth.',
      },
      {
        kicker: '03',
        title: 'You need to take payments — safely',
        pain: "Customers want to pay online, but money is the one place you can't afford a bug. Failed charges and duplicates cost trust you don't get back.",
        solution:
          'I build payment flows the careful way — proper receipts, retry logic, clean records. Like PlexPay, the payments platform I built at work.',
      },
      {
        kicker: '04',
        title: 'Your website or web app is slow, dated, and fragile',
        pain: 'The original dev is gone, the agency is silent. Every small change feels risky, the site slows under traffic, and the design looks years older than your brand.',
        solution:
          "I audit honestly, fix the slow parts (up to 80% faster at my day job), and refresh the look when it's time — all without breaking what works.",
      },
    ],
  },

  process: {
    eyebrow: 'How we work together',
    headline: 'No black-box ticket system. Four stages, with clear updates every week.',
    steps: [
      {
        at: 0.0,
        kicker: '01',
        title: 'Discovery',
        body: "A free 30-minute call. We talk through who'll use it, what it needs to do, and what's standing in the way. You leave with a written summary whether or not you decide to hire me.",
      },
      {
        at: 0.25,
        kicker: '02',
        title: 'Planning',
        body: "I write a one-page plan: what gets stored, how the pieces connect, how logins work, where it'll be hosted, and what could go wrong. You approve it before any code is written.",
      },
      {
        at: 0.5,
        kicker: '03',
        title: 'Build',
        body: 'Weekly updates pushed to a private preview link you can click and try. Short written check-ins instead of long meetings. You see real progress every Monday — not just at the end.',
      },
      {
        at: 0.75,
        kicker: '04',
        title: 'Launch & tune',
        body: 'We move it live, tune it for speed, and set up alerts so you know right away if anything breaks. Plus 30 days of free bug fixes after launch — included in every project.',
      },
    ],
  },

  packages: {
    eyebrow: 'Ways to work together',
    headline: 'Four ways to work with me.',
    subline: 'All clearly scoped, with a fixed price wherever possible. Hourly rates available for ongoing work.',
    items: [
      {
        kicker: 'A',
        title: 'Build from scratch',
        timeline: '4–12 weeks',
        forWho: 'For founders and businesses with a clear idea and nothing built yet — a marketing site, a product, or both.',
        deliverables: [
          'A complete website or web app, built on the tools that fit your project best',
          'Sign-up and login, user permissions, payments, and outside integrations as needed',
          'Hosted on reliable services like Vercel and Supabase — set up and ready to go',
          '30 days of free fixes after launch',
        ],
        accent: true,
      },
      {
        kicker: 'B',
        title: 'Performance rescue',
        timeline: '1–3 weeks',
        forWho: 'For teams whose live app has slowed down under real traffic.',
        deliverables: [
          "A clear report on what's actually slowing things down",
          'A ranked list of fixes, with before/after numbers you can check yourself',
          'Hands-on fixes for the biggest issues',
          'Alerts set up so you know the moment something slows down again',
        ],
      },
      {
        kicker: 'C',
        title: 'AI feature add-on',
        timeline: '2–6 weeks',
        forWho: 'For existing products that need one focused AI feature.',
        deliverables: [
          'One focused AI feature (chat, generator, summary, smart search)',
          "Works with multiple AI providers, so you're not locked in or stuck if one goes down",
          "Safety limits so usage stays predictable and costs don't spiral",
          "A simple way to test and improve the AI's answers over time",
        ],
      },
      {
        kicker: 'D',
        title: 'Long-term partnership',
        timeline: 'Monthly plan',
        forWho: 'For teams who want a senior developer on call, without making a permanent hire.',
        deliverables: [
          'A set number of hours each week (10, 20, or 40)',
          'Written updates day-to-day, one short call each week',
          'Help across the whole project — back end, front end, hosting, and AI features',
          'Pause or change your hours with 2 weeks notice',
        ],
      },
    ],
  },

  caseStudies: {
    eyebrow: 'Case studies',
    headline: 'Three projects, told in depth.',
    subline: 'Click any one to see how it was built, the choices I made, and the trade-offs along the way.',
  },

  skills: {
    eyebrow: 'Tools',
    headline: 'What powers the work.',
    subline:
      "I care about what works, not what's trendy. Most of these are tools I use every day; a few I bring in only when the project really needs them.",
  },

  about: {
    eyebrow: 'About me',
    headline: 'Mishab CP — full-stack developer based in Kerala, available for freelance work worldwide.',
    body1:
      "I started at Netplex IT Solutions in 2024 as a full-stack developer. I built PlexPay — a payments app for mobile top-ups, bill payments, and gift vouchers — and a complete operations system for ISL Laboratory, with separate access levels for each department. That's where the 80% speed-boost story comes from.",
    body2:
      "Outside work, I've built three of my own products from scratch — ClariSpec, BuildOps, and LabCore. They keep me sharp on the latest tools (Next.js, NestJS, Prisma, Supabase, Groq, Gemini) and they double as real examples I can show clients.",
    body3:
      "I work across time zones, mostly through written updates so nothing depends on us being online at the same time. One weekly call, daily written updates if you'd like them, and your code on GitHub from day one. I'll also tell you if I think an idea won't work — before I build it.",
  },

  faq: {
    eyebrow: 'Honest answers',
    headline: "Things you'd want to ask before sending a message.",
    items: [
      {
        q: "How do you charge?",
        a: "Every project starts with a free 30-45 minute scoping call. I follow up within 48 hours with a written one-pager - scope, timeline, fixed price. If it's a fit, we start. If it isn't, you keep the doc and use it however you like. No estimates that quietly double mid-project.",
      },
      {
        q: 'Can you take over an existing codebase?',
        a: 'Yes. The first step is a conversation about your requirements and the fixes you have in mind. Then I need a proper look at the codebase before I can promise anything - current condition, hidden debt, and what is realistic to ship in what timeframe. After that you get a written estimate and scope to approve.',
      },
      {
        q: 'How long does a typical project take?',
        a: 'It depends on the scope. A simple landing site or single feature is usually 1-2 weeks, a full MVP with backend, auth, and admin is typically 4-8 weeks, and larger products run 8-12 weeks. A precise timeline only comes after a discovery call where I properly understand your requirements.',
      },
      {
        q: 'Will you maintain the project after launch?',
        a: "Yes. After launch you can keep me on a small monthly retainer for bug fixes, minor changes, and small feature additions. No retainer is required - if you'd rather hand it off to your team later, I'll prepare proper docs so the transition is clean.",
      },
      {
        q: 'What if I only have an idea and no detailed scope yet?',
        a: "Perfectly fine. Most people don't walk in with a finished spec - they walk in with a problem and a rough idea of the solution. We use the discovery call to turn that into something concrete: features, priorities, what's in v1, what's in v2. You leave with clarity.",
      },
    ],
  },

  finalCta: {
    eyebrow: 'Ready when you are',
    headline: "Let's build it.",
    subline:
      "Fastest way to reach me: send a WhatsApp message with a short paragraph about what you're trying to build. I usually reply within a few hours during my day in Kerala (IST). If your project isn't a fit for me, I'll say so honestly and try to point you to someone who is.",
    primaryCta: {
      label: 'Message me on WhatsApp',
      href: resumeData.whatsapp,
      external: true,
    },
    altChannels: [
      { label: 'Email', value: resumeData.email, href: `mailto:${resumeData.email}` },
      { label: 'LinkedIn', value: 'linkedin.com/in/mishab-c-p', href: resumeData.linkedin },
      { label: 'GitHub', value: 'github.com/mishabcp', href: resumeData.github },
    ],
  },
};

export const navSections = [
  { label: 'Home', sectionId: 'hero' },
  { label: 'Process', sectionId: 'process' },
  { label: 'Packages', sectionId: 'packages' },
  { label: 'Case studies', sectionId: 'case-studies' },
  { label: 'About', sectionId: 'about' },
  { label: 'Contact', sectionId: 'final-cta' },
];
