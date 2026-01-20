import React, { useEffect, useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  ChevronRight, 
  Download, 
  Terminal, 
  Cpu, 
  Database, 
  Layers,
  ArrowRight,
  Menu,
  X,
  ExternalLink,
  Code
} from 'lucide-react';
import { PROJECTS, TOOLS } from './constants';
import { ProjectCategory } from './types';

// Updated Navbar to receive scrolled state as a prop
const Navbar = ({ scrolled }: { scrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#build' },
    { name: 'Tools', href: '#tools' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-cyan-400 neon-text">
          VIGNESH.A <span className="text-gray-500 font-light">/ AI</span>
        </a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-300">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute top-full left-0 w-full p-6 space-y-4 border-b border-white/10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block text-lg text-gray-300" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{children}</h2>
    {subtitle && <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">{subtitle}</p>}
    <div className="h-1 w-20 bg-cyan-400 mt-4"></div>
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  // Resume direct download link
  const RESUME_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1-RSzSjreyStMxIedXcX5zQH6OwuO-kn3";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />

      {/* 1. HERO SECTION - CENTERED TYPOGRAPHICAL LAYOUT */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
        {/* Background Ambient Effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-cyan-400/50"></div>
              <h4 className="text-cyan-400 font-mono tracking-[0.4em] text-sm font-semibold uppercase">Building Intelligence</h4>
              <div className="w-12 h-px bg-cyan-400/50"></div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] text-white">
              Vignesh A
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-400 font-medium tracking-tight">
              AI/ML Developer | Data Science | Generative AI
            </p>
            
            <div className="max-w-2xl mx-auto pt-4">
              <p className="text-xl text-gray-500 font-light leading-relaxed italic">
                "I build production-ready AI systems — <span className="text-gray-300 font-medium">Generative AI, RAG, and ML</span> — not just demos."
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="#projects" className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-full transition-all flex items-center gap-3 group shadow-2xl shadow-cyan-500/30">
              Explore Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={RESUME_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-5 border border-white/10 hover:border-cyan-400 hover:bg-white/[0.02] rounded-full font-bold transition-all flex items-center gap-3 group">
              Download CV <FileText size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Decorative Indicator */}
          <div className="pt-20 animate-bounce-slow opacity-30">
            <div className="w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent mx-auto"></div>
          </div>
        </div>

        {/* Technical Detail Overlays */}
        <div className="absolute bottom-12 left-12 hidden lg:block">
          <div className="flex items-center gap-3 px-5 py-3 bg-white/[0.03] border border-white/5 rounded-xl backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">System Active: Chennai / IN</span>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME */}
      <section id="about" className="py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Profile">About Me</SectionHeading>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                I’m <span className="text-white font-semibold">Vignesh A</span>, an AI/ML Engineer and Generative AI Developer specializing in building production-ready AI systems that solve real-world problems.
              </p>
              <p>
                I work across the full AI lifecycle — from data analysis and machine learning to Generative AI solutions such as <span className="text-cyan-400">RAG pipelines</span> and <span className="text-cyan-400">agentic AI workflows</span>. My focus is on creating scalable, reliable, and deployable AI applications, not just experiments.
              </p>
              <p>
                I’ve built enterprise-grade RAG systems, autonomous multi-agent platforms, computer vision solutions, and ML analytics applications using Python, LangChain, FAISS, FastAPI, MLflow, Docker, and AWS.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Location', value: 'Chennai, India' },
                { label: 'Experience', value: 'Freelance AI/ML' },
                { label: 'Education', value: 'IITM Data Science Certified' },
                { label: 'Specialty', value: 'NLP and Gen ai' }
              ].map((item) => (
                <div key={item.label} className="p-6 bg-[#161616] border border-white/5 rounded-xl hover:border-cyan-500/30 transition-all">
                  <p className="text-xs font-mono text-cyan-400 uppercase mb-2">{item.label}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT I BUILD */}
      <section id="build" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <SectionHeading subtitle="Capability">What I Build</SectionHeading>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Terminal size={32} />, title: "Enterprise RAG", desc: "Advanced document AI systems with vector search and citation grounding." },
            { icon: <Cpu size={32} />, title: "Agentic AI", desc: "Autonomous multi-agent workflows using state-machines and tools." },
            { icon: <Layers size={32} />, title: "ML/DL Models", desc: "Production-grade predictive analytics and deep learning architectures." },
            { icon: <Database size={32} />, title: "AI APIs", desc: "Scalable backends, Dockerized deployments, and interactive dashboards." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 bg-gradient-to-b from-[#111] to-black border border-white/5 rounded-2xl hover:border-cyan-400/50 transition-all group">
              <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TOOLS */}
      <section id="tools" className="py-24 bg-[#0d0d0d] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Stack">Tools & Technologies</SectionHeading>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
            {TOOLS.map((tool) => (
              <div 
                key={tool.name} 
                className="group relative flex items-center gap-3 px-5 py-3 bg-[#161616] border border-white/5 rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/[0.03]"
                style={{ 
                  borderColor: scrolled ? `${tool.color}33` : 'rgba(255,255,255,0.05)',
                  boxShadow: scrolled ? `0 0 15px ${tool.color}11` : 'none'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 0 20px ${tool.color}44` }}
                ></div>

                <div className="flex-shrink-0">
                  <img 
                    src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color === '#FFFFFF' ? 'white' : tool.color.replace('#', '')}`} 
                    alt={tool.name} 
                    className="w-6 h-6 md:w-7 md:h-7 transition-all duration-300 group-hover:brightness-125"
                  />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROJECTS */}
      <section id="projects" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Portfolio">Key Projects</SectionHeading>
          
          {Object.values(ProjectCategory).map((cat) => (
            <div key={cat} className="mb-24 last:mb-0">
              <h3 className="text-2xl font-bold mb-10 flex items-center gap-4 text-white">
                <span className="w-8 h-px bg-cyan-400"></span>
                {cat}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.filter(p => p.category === cat).map((project, idx) => (
                  <div key={idx} className="flex flex-col bg-[#111] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/50 transition-all group">
                    <div className="relative aspect-[16/9] overflow-hidden bg-[#222]">
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-90 group-hover:brightness-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" className="p-2 bg-black/70 rounded-full hover:bg-cyan-500 hover:text-black transition-all shadow-lg shadow-black/50 backdrop-blur-sm">
                            <ExternalLink size={18} />
                          </a>
                        )}
                        <a href={project.githubUrl} target="_blank" className="p-2 bg-black/70 rounded-full hover:bg-cyan-500 hover:text-black transition-all shadow-lg shadow-black/50 backdrop-blur-sm">
                          <Github size={18} />
                        </a>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                      <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map(s => (
                          <span key={s} className="px-2 py-1 bg-cyan-400/5 text-[10px] text-cyan-400/80 rounded-md font-mono border border-cyan-400/10 uppercase tracking-wider">
                            {s}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto space-y-2 border-t border-white/5 pt-4">
                        {project.details.slice(0, 2).map((detail, dIdx) => (
                          <div key={dIdx} className="flex gap-2 text-xs text-gray-500">
                            <ChevronRight size={14} className="text-cyan-500 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HOW I THINK */}
      <section className="py-24 bg-[#0d0d0d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-2 bg-cyan-400/10 rounded-full mb-8">
            <Code size={32} className="text-cyan-400" />
          </div>
          <SectionHeading subtitle="Philosophy">How I Think</SectionHeading>
          <p className="text-2xl md:text-3xl font-light italic text-gray-300 leading-relaxed mb-12">
            "I approach AI problems with a system-first mindset, focusing on data quality, architecture, scalability, and measurable outcomes rather than isolated models."
          </p>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 font-bold text-3xl mb-2">94%</span>
              <span className="text-gray-500 uppercase text-xs tracking-widest">Accuracy Focus</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 font-bold text-3xl mb-2">40%</span>
              <span className="text-gray-500 uppercase text-xs tracking-widest">Efficiency Gain</span>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="flex flex-col items-center">
              <span className="text-cyan-400 font-bold text-3xl mb-2">RAG</span>
              <span className="text-gray-500 uppercase text-xs tracking-widest">Specialist</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT + RESUME */}
      <section id="contact" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading subtitle="Get In Touch">Contact Info</SectionHeading>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                I'm currently looking for new opportunities in AI/ML engineering and Generative AI roles. Let's build something impactful together.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:vignesh246v@gmail.com" className="flex items-center gap-4 group">
                  <div className="p-4 bg-[#111] rounded-2xl group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                    <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">vignesh246v@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/vignesh246v-ai-engineer/" target="_blank" className="flex items-center gap-4 group">
                  <div className="p-4 bg-[#111] rounded-2xl group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">LinkedIn</p>
                    <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">vignesh246v-ai-engineer</p>
                  </div>
                </a>

                <a href="https://github.com/VIGNESH246A" target="_blank" className="flex items-center gap-4 group">
                  <div className="p-4 bg-[#111] rounded-2xl group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <Github size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">GitHub</p>
                    <p className="text-lg font-medium group-hover:text-cyan-400 transition-colors">VIGNESH246A</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="p-10 bg-gradient-to-br from-[#111] to-black border border-white/10 rounded-3xl neon-border relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <FileText size={32} className="text-cyan-400" />
                  <h3 className="text-2xl font-bold">Resume</h3>
                </div>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Deeply technical profile covering AI/ML full lifecycle, RAG systems, Agentic AI, and Machine Learning applications.
                </p>
                <a href={RESUME_DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-white text-black font-bold rounded-xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
                  <Download size={20} /> Download Resume
                </a>
                <div className="mt-10 pt-10 border-t border-white/5 space-y-2">
                  <p className="text-sm text-gray-400">📍 Chennai, Tamil Nadu, India</p>
                  <p className="text-sm text-gray-400">📞 +91 84892 46246</p>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 blur-[100px] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vignesh A. Built with precision for production AI.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest text-xs font-mono">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
