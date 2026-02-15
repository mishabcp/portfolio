import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, ArrowRight } from 'lucide-react';

const StarBackground = () => {  const canvasRef = useRef(null);

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
      <a href={resumePdf} download="Mishab_CP_Resume.pdf" className="text-[#FF4D4D] text-sm font-medium hover:text-[#ff8080] transition-colors">
        Resume
      </a>
    </div>
  </nav>
);

const ProjectCard = ({ title, desc, tags, highlight, github, demo }) => (
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
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#FF4D4D] transition-colors">
          <Github size={16} /> Code
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-[#FF4D4D] transition-colors">
          <ExternalLink size={16} /> Live Demo
        </a>
      )}
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

const SkillsSection = () => {
  const skills = [
    {
      category: "Languages",
      items: ['PHP', 'JavaScript', 'Java', 'SQL']
    },
    {
      category: "Frameworks",
      items: ['Laravel', 'CodeIgniter', 'React', 'jQuery', 'Bootstrap', 'Tailwind CSS']
    },
    {
      category: "API & Database",
      items: ['REST API', 'API Integration', 'MySQL', 'Database Design', 'Query Optimization', 'Postman']
    },
    {
      category: "Tools & Deployment",
      items: ['Git', 'cPanel', 'phpMyAdmin', 'Web3Forms', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="relative z-10 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills<span className="text-[#FF4D4D]">.</span></h2>
          <p className="text-gray-400">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-[#121212] border border-white/10 p-8 rounded-2xl hover:border-[#FF4D4D]/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'b118b50d-7294-45cd-9a5e-0b80604cea25');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });
      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-32 px-6 bg-gradient-to-t from-[#0a0a0a] to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch<span className="text-[#FF4D4D]">.</span></h2>
          <p className="text-gray-400">Let's discuss your project ideas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-[#121212] p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-4">
                <a href="mailto:mishabcp01@gmail.com" className="flex items-center gap-4 text-gray-400 hover:text-[#FF4D4D] transition-colors">
                  <Mail size={20} /> mishabcp01@gmail.com
                </a>
                <a href="tel:+971554531717" className="flex items-center gap-4 text-gray-400 hover:text-[#FF4D4D] transition-colors">
                  <ExternalLink size={20} /> +971-554-531-717
                </a>
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  </div>
                  <span>Available for new projects</span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-[#121212] border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF4D4D] transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-[#121212] border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF4D4D] transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                required
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#121212] border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#FF4D4D] transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#FF4D4D] hover:bg-[#ff3333] text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(255,77,77,0.2)] hover:shadow-[0_0_30px_rgba(255,77,77,0.4)] disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-500 text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-center">Failed to send message.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#FF4D4D] selection:text-white">
      <StarBackground />
      <NavBar />
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
      <section id="about" className="relative z-10 py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#121212] border border-white/10 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold mb-6">About Me<span className="text-[#FF4D4D]">.</span></h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                I'm a Full Stack Developer with 2 years of professional experience specializing in fintech and Enterprise Resource Planning (ERP) systems. Currently based in Dubai, I have a strong track record of building and maintaining complex web applications using PHP, Laravel, CodeIgniter, JavaScript, and MySQL.
              </p>
              <p>
                At Netplex IT Solutions, I've led API development for PlexPay, a UAE-based fintech recharge platform, and built ISL, a comprehensive Laboratory Information Management System. I'm passionate about creating scalable solutions, optimizing performance, and delivering quality software that meets real business needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SkillsSection />
      <section id="projects" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects<span className="text-[#FF4D4D]">.</span></h2>
            <p className="text-gray-400">A selection of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="PlexPay Platform" 
              desc="Led API development for UAE-based fintech recharge platform with secure transactions and third-party provider integrations."
              tags={['React', 'Node.js', 'MongoDB', 'Docker']}
              highlight={false}
            />
            <ProjectCard 
              title="ISL Management" 
              desc="Built comprehensive LIMS using Laravel with optimized database design and backend architecture."
              tags={['Laravel', 'MySQL', 'Vue.js', 'Redis']}
              highlight={true}
            />
            <ProjectCard 
              title="TaskNova" 
              desc="A futuristic task manager built with React featuring advanced creation, editing, deletion, and multi-view productivity tools."
              tags={['React', 'Vite', 'Zustand', 'Tailwind']}
              highlight={false}
              github="https://github.com/mishabcp/TaskNova"
              demo="https://mishabcp.github.io/TaskNova/"
            />
            <ProjectCard 
              title="AlgoViz" 
              desc="Interactive algorithm visualization tool demonstrating sorting and searching algorithms with real-time animations."
              tags={['React', 'JavaScript', 'CSS', 'Algorithms']}
              highlight={false}
              github="https://github.com/mishabcp/AlgoViz"
              demo="https://mishabcp.github.io/AlgoViz/"
            />
             <ProjectCard 
              title="Swift Eats" 
              desc="Full-stack food delivery platform with secure user authentication, restaurant browsing, cart management, and order processing."
              tags={['Java', 'Servlets', 'JDBC', 'MySQL', 'Tailwind CSS']}
              highlight={false}
              github="https://github.com/mishabcp/FoodDeliveryApp"
            />
          </div>
        </div>
      </section>
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
      <ContactSection />
      <footer className="relative z-10 py-12 text-center border-t border-white/10 text-gray-500 text-sm">
        <p>© 2024 Mishab CP. Crafted with code.</p>
      </footer>
    </div>
  );
};

export default Home;