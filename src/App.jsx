import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  FileText, 
  Download, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  Globe, 
  Zap, 
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Adriel.dev
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted hover:text-text transition-colors">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#contact" className="px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors">
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-text p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
            <a href="#about" onClick={toggleMenu} className="text-lg font-medium">About</a>
            <a href="#experience" onClick={toggleMenu} className="text-lg font-medium">Experience</a>
            <a href="#projects" onClick={toggleMenu} className="text-lg font-medium">Projects</a>
            <a href="#skills" onClick={toggleMenu} className="text-lg font-medium">Skills</a>
            <a href="#contact" onClick={toggleMenu} className="text-lg font-medium text-primary">Hire Me</a>
          </div>
        )}
      </nav>

      <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <section id="about" className="py-12 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Senior Software Engineer based in Seoul
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Building <span className="text-primary">AI pipelines</span> & <br />
              <span className="text-secondary">Cloud infrastructure</span>.
            </h1>
            
            <p className="text-lg text-muted max-w-xl leading-relaxed">
              I’m <strong>Adriel Niyodusaba</strong>. I build scalable full-stack systems and global cloud infrastructure, with a specialized focus on <strong>AI-powered solutions</strong>. I deliver reliability and impact across the entire stack—optimizing performance, cost, and developer velocity.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="/docs/Adriel%20Niyodusaba%20Resume.pdf" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all shadow-lg shadow-primary/25">
                <Download size={18} />
                Download Resume
              </a>
              <a href="https://www.linkedin.com/in/adriel-niyodusaba-993a01120/" target="_blank" className="flex items-center gap-2 px-6 py-3 bg-surface border border-white/10 hover:border-white/20 text-text rounded-lg font-medium transition-all">
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
            <div className="relative bg-surface border border-white/10 p-6 md:p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Terminal size={20} className="text-secondary" />
                Key Highlights
              </h3>
              <ul className="space-y-4 text-muted text-sm md:text-base">
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Built RAG chatbot reducing costs by <strong>~90%</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Architected AWS/GCP infra reducing latency by <strong>&gt;50%</strong>.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Doubled deployment frequency via CI/CD & DORA metrics.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-secondary mt-1">✓</span>
                  <span>Built recurring payments system processing <strong>&gt;50%</strong> of revenue.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-16 border-t border-white/5">
          <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <SkillColumn 
              title="Languages" 
              icon={<Terminal size={20} className="text-primary" />}
              items={["Python", "JavaScript / TypeScript", "SQL", "Rust (Exposure)", "Go (Exposure)"]} 
            />
            <SkillColumn 
              title="Backend & AI" 
              icon={<Cpu size={20} className="text-primary" />}
              items={["FastAPI / Django", "Node.js", "LangChain / RAG", "OpenAI / Pinecone", "Whisper / LLMs"]} 
            />
            <SkillColumn 
              title="Cloud & Infra" 
              icon={<Globe size={20} className="text-primary" />}
              items={["AWS (Lambda, S3)", "GCP (Cloud Run)", "Serverless", "Docker / CI/CD", "FinOps"]} 
            />
            <SkillColumn 
              title="Frontend & Apps" 
              icon={<Zap size={20} className="text-primary" />}
              items={["React / Next.js", "Electron", "Tailwind CSS", "React Native", "Cypress"]} 
            />
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="py-16 border-t border-white/5">
          <div className="flex flex-col md:flex-row gap-4 mb-12 items-start md:items-center justify-between">
            <h2 className="text-3xl font-bold">Experience</h2>
            <a href="/docs/Adriel%20Niyodusaba%20Resume.pdf" target="_blank" className="text-sm text-primary hover:underline flex items-center gap-1">
              View Full Resume <ExternalLink size={14} />
            </a>
          </div>

          <div className="space-y-12">
            <ExperienceItem 
              role="Senior Software Engineer"
              company="BEBRIDGE AI"
              period="Dec 2020 – Present"
              location="Seoul, South Korea"
            >
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-text mb-2 uppercase tracking-wider">AI Solutions Development</h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted">
                    <li>Developed a reliable <strong>RAG Chatbot</strong> answering questions from video content; implemented caching to lower costs by <strong>90%</strong> and secured B2B contracts.</li>
                    <li>Created an <strong>AI-powered Video-to-Article pipeline</strong> generating high-quality blog articles, leading to 3+ contracts with major content companies (Hunet, 3Pro).</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-text mb-2 uppercase tracking-wider">Infrastructure & DevOps</h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted">
                    <li>Designed global infrastructure (AWS/GCP) for Slid, reducing latency by <strong>&gt;50%</strong> in US/Europe.</li>
                    <li>Optimized deployment processes and introduced DORA metrics, reducing deployment times by <strong>90%</strong> and doubling frequency.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-text mb-2 uppercase tracking-wider">Backend & Frontend</h4>
                  <ul className="list-disc pl-5 space-y-2 text-muted">
                    <li>Built recurring payments platform processing <strong>&gt;50%</strong> of revenue and usage-based pricing models (+20% conversion).</li>
                    <li>Developed feature-rich admin panels boosting support efficiency by 40%.</li>
                    <li>Shipped cross-platform desktop apps (Electron) with 17 releases in 7 months, serving 33% of user base.</li>
                  </ul>
                </div>
              </div>
            </ExperienceItem>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-16 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="RAG Investor Advisor Chatbot"
              tags={["RAG", "Python", "Pinecone", "AWS"]}
              desc="Pipeline that watches YouTube channels, transcribes videos, stores embeddings, and answers finance questions with citations."
              metric="Reduced costs by ~90% & enabled B2B adoption."
            />
            <ProjectCard 
              title="Video → Article Pipeline"
              tags={["FastAPI", "GPT-4", "FFMPEG"]}
              desc="Automated system converting video/manuscripts into SEO-ready HTML articles with images. Delivered via webhooks to client CMS."
              metric="Secured multiple content company contracts."
            />
            <ProjectCard 
              title="Multi-Language Dubbing"
              tags={["Cloud Run", "Whisper", "Voice Cloning"]}
              desc="End-to-end pipeline: Transcription → Agentic Translation (timed) → Voice Cloning → TTS alignment."
              metric="High-quality voice preservation for global demos."
            />
            <ProjectCard 
              title="KOHI Content Mind Map"
              tags={["Next.js", "FastAPI", "Visualization"]}
              desc="Hierarchical visualization for course discovery using auto-transcriptions and topic extraction."
              metric="Improved discovery across 100+ courses."
            />
          </div>
        </section>

        {/* EDUCATION & AWARDS */}
        <section className="py-16 grid md:grid-cols-3 gap-8 border-t border-white/5">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="bg-surface p-6 rounded-xl border border-white/10 h-full">
              <h3 className="font-bold text-lg">B.Sc., Biotechnology</h3>
              <p className="text-primary">Yonsei University</p>
              <p className="text-sm text-muted mt-1">2017 – 2022</p>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="font-semibold text-sm mb-3">Awards</p>
                <ul className="text-sm text-muted space-y-2">
                  <li className="flex gap-2">
                    <span className="text-primary">★</span>
                    <span>Grand Prize, National Science Competition (Physics) - Rwanda (2014)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">★</span>
                    <span>Academic Excellence Award, Yonsei University (2019)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">★</span>
                    <span>Korean Government Scholarship (2016)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            <div className="bg-surface p-6 rounded-xl border border-white/10 h-full">
              <h3 className="font-bold text-lg">AWS Certified Solutions Architect</h3>
              <p className="text-primary">Associate</p>
              <p className="text-sm text-muted mt-1">Issued May 2022 — Valid until May 2025</p>
            </div>
          </div>

          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Languages</h2>
            <div className="bg-surface p-6 rounded-xl border border-white/10 h-full">
              <ul className="space-y-4">
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">English</span>
                    <span className="text-muted text-sm">Fluent</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full"></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Kinyarwanda</span>
                    <span className="text-muted text-sm">Native/Fluent</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full"></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Korean</span>
                    <span className="text-muted text-sm">Intermediate</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[60%]"></div>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">French</span>
                    <span className="text-muted text-sm">Intermediate</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-[50%]"></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together.</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-10">
            I’m looking for roles where I can build reliable systems, scale AI products, or lead engineering teams. 
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="mailto:siradriel@gmail.com" className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all">
              <Mail size={20} />
              siradriel@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/adriel-niyodusaba-993a01120/" target="_blank" className="w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-surface border border-white/10 text-text rounded-xl font-bold hover:bg-surface/80 transition-all">
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted">
            <a href="/docs/Adriel%20Niyodusaba%20Resume.pdf" target="_blank" className="hover:text-primary flex items-center gap-1">
              <FileText size={14} /> Resume (PDF)
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

// Sub-components for cleaner code
function SkillColumn({ title, icon, items }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4 text-text font-semibold">
        {icon}
        <h3>{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-muted text-sm border-l-2 border-white/10 pl-3 hover:border-primary transition-colors">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceItem({ role, company, period, location, children }) {
  return (
    <div className="relative pl-8 md:pl-0">
      <div className="md:grid md:grid-cols-[1fr_2px_1fr] md:gap-8">
        <div className="md:text-right md:pt-1">
          <h3 className="text-xl font-bold text-text">{company}</h3>
          <p className="text-primary font-medium">{role}</p>
          <p className="text-sm text-muted mt-1">{period}</p>
          <p className="text-xs text-muted/60">{location}</p>
        </div>
        
        <div className="hidden md:flex flex-col items-center">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <div className="flex-1 w-0.5 bg-gradient-to-b from-primary/50 to-transparent my-2"></div>
        </div>

        <div className="mt-4 md:mt-0 pb-12">
           {children}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ title, desc, tags, metric }) {
  return (
    <div className="group bg-surface border border-white/10 p-6 rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1">
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted text-sm mb-4 leading-relaxed">{desc}</p>
      
      {metric && (
        <div className="mb-5 px-3 py-2 bg-background/50 rounded-lg border border-white/5 text-sm">
          <span className="text-secondary font-semibold">Impact:</span> {metric}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
          <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-muted font-medium border border-white/5">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

