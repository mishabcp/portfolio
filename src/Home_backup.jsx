import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const stars = Array.from({ length: 100 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.2 + 0.1,
      opacity: Math.random()
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      
      stars.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none opacity-50"
    />
  );
};

const NavBar = () => (
  <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
    <div className="bg-[#121212]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl">
      <span className="text-white font-bold text-lg tracking-tight">Mishab<span className="text-[#FF4D4D]">.</span></span>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
        {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <a href="#" className="text-[#FF4D4D] text-sm font-medium hover:text-[#ff8080] transition-colors">
        Resume
      </a>
    </div>
  </nav>
);

const ProjectCard = ({ title, desc, tags, highlight }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`p-8 rounded-2xl border ${highlight ? 'border-[#FF4D4D]/50 bg-[#FF4D4D]/5' : 'border-white/10 bg-[#121212]'} transition-colors group`}
  >
    <h3 className={`text-2xl font-bold mb-4 ${highlight ? 'text-[#FF4D4D]' : 'text-white'}`}>{title}</h3>
    <p className="text-gray-400 mb-6 leading-relaxed">
      {desc}
    </p>
    <div className="flex flex-wrap gap-2 mb-8">
      {tags.map(tag => (
        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex items-center gap-4 text-sm font-medium">
      <a href="#" className="flex items-center gap-2 text-white hover:text-[#FF4D4D] transition-colors">
        <Github size={16} /> Code
      </a>
      <a href="#" className="flex items-center gap-2 text-white hover:text-[#FF4D4D] transition-colors">
        <ExternalLink size={16} /> Live Demo
      </a>
    </div>
  </motion.div>
);

const ExperienceItem = ({ role, company, period, desc, skills }) => (
  <div className="relative pl-12 pb-12 border-l border-white/10 last:border-0 last:pb-0">
    <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-[#FF4D4D] ring-4 ring-black"></div>
    <div className="bg-[#121212] border border-white/10 p-8 rounded-2xl hover:border-white/20 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
        <div>
          <h3 className="text-xl font-bold text-white">{role}</h3>
          <p className="text-[#FF4D4D] font-medium">{company}</p>
        </div>
        <span className="text-sm text-gray-500 font-mono">{period}</span>
      </div>
      <ul className="space-y-2 text-gray-400 mb-6 list-disc list-inside">
        {desc.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <span key={skill} className="px-2 py-1 rounded bg-white/5 text-xs text-gray-500 border border-white/5">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF4D4D] selection:text-white">
      <StarBackground />
      <NavBar />

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-4 text-lg">Hey, I'm</p>
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
            MISHAB CP
          </h1>
          <div className="inline-block bg-[#FF4D4D] text-white px-4 py-1.5 rounded-full text-sm font-bold mb-8">
            Full Stack Developer
          </div>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
            I build and craft digital experiences <br/>
            that deliver <span className="text-[#FF4D4D] italic font-serif">real impact</span>.
          </p>
          
          <div className="flex items-center justify-center gap-6">
            <button className="bg-[#FF4D4D] hover:bg-[#ff3333] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_30px_rgba(255,77,77,0.3)] hover:shadow-[0_0_50px_rgba(255,77,77,0.5)] flex items-center gap-2">
              Let's Connect <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium">
              <Mail size={18} /> mishabcp01@gmail.com
            </button>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects<span className="text-[#FF4D4D]">.</span></h2>
            <p className="text-gray-400">A selection of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="PlexPay Platform" 
              desc="A comprehensive fintech solution for the UAE market, handling secure transactions, third-party integrations, and real-time reporting."
              tags={['React', 'Node.js', 'MongoDB', 'Docker']}
              highlight={false}
            />
            <ProjectCard 
              title="ISL Management" 
              desc="Laboratory Information Management System built for scalability. Features automated reporting, patient tracking, and secure data handling."
              tags={['Laravel', 'MySQL', 'Vue.js', 'Redis']}
              highlight={true}
            />
            <ProjectCard 
              title="TaskNova" 
              desc="Advanced project management tool with real-time collaboration features, drag-and-drop interfaces, and team analytics."
              tags={['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL']}
              highlight={false}
            />
            <ProjectCard 
              title="AlgoViz" 
              desc="Interactive algorithm visualizer for educational purposes. Demonstrates complex sorting and pathfinding algorithms in real-time."
              tags={['React', 'D3.js', 'Framer Motion']}
              highlight={false}
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience<span className="text-[#FF4D4D]">.</span></h2>
            <p className="text-gray-400">My professional journey</p>
          </div>

          <div className="space-y-12">
            <ExperienceItem 
              role="Full Stack Developer"
              company="Netplex IT Solutions"
              period="May 2024 - Present"
              desc={[
                "Led API development for PlexPay, a UAE-based fintech recharge platform.",
                "Built ISL, a comprehensive Laboratory Information Management System.",
                "Optimized database queries improving reporting speed by 40%."
              ]}
              skills={['Laravel', 'React', 'API Design', 'MySQL']}
            />
            <ExperienceItem 
              role="Junior Developer"
              company="Freelance & Projects"
              period="2023 - 2024"
              desc={[
                "Developed custom web solutions for various international clients.",
                "Collaborated with UI/UX designers to implement pixel-perfect interfaces.",
                "Maintained and updated legacy codebases for performance improvements."
              ]}
              skills={['JavaScript', 'PHP', 'WordPress', 'CSS3']}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center border-t border-white/10 text-gray-500 text-sm">
        <p>© 2024 Mishab CP. Crafted with code.</p>
      </footer>
    </div>
  );
};

export default Home;