import React, { useState } from 'react';
import {
  Award,
  Briefcase,
  ExternalLink,
  FileText,
  Globe,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Shield,
  X,
} from 'lucide-react';

const stats = [
  {
    value: '4+ years',
    label: 'Building production AI and backend systems',
  },
  {
    value: '~50%',
    label: 'Active users on the Slid desktop app after rebuild',
  },
  {
    value: '~90%',
    label: 'Reduction in human dubbing time with Proteus',
  },
  {
    value: '10k+ users',
    label: 'Scale supported on the Summary mobile app',
  },
];

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Rust'],
  },
  {
    title: 'Backend',
    items: ['Django', 'FastAPI', 'Node.js', 'NestJS', 'Gin'],
  },
  {
    title: 'AI / ML (Applied)',
    items: ['LangChain', 'LangGraph', 'Autogen', 'RAG', 'TTS / STT', 'LLMs', 'Lip Sync'],
  },
  {
    title: 'Infra',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'],
  },
  {
    title: 'Datastores',
    items: ['PostgreSQL', 'MySQL', 'Redis', 'Pinecone', 'MongoDB'],
  },
  {
    title: 'Media',
    items: ['ffmpeg', 'Audio/video processing pipelines'],
  },
  {
    title: 'Web3',
    items: ['Wallet development', 'DeFi risk monitoring'],
  },
];

const experience = [
  {
    role: 'Software Engineer - AI & Backend',
    company: 'Bebridge',
    period: 'Sep 2022 - Present',
    location: 'Seoul / Global',
    highlights: [
      'Lead engineer on SaaS products: Slid, Summary, and DipClip, shipping production AI systems end to end.',
      'Owned backend and cloud infrastructure, enabling global performance improvements.',
      'Designed recurring subscription payments to drive sustainable monetization.',
      'Introduced Whisper-based transcription that became the Auto-Note foundation.',
      'Onboarded and mentored new hires and interns, helping them ramp quickly and contribute to production systems.',
    ],
  },
  {
    role: 'Software Engineer (Intern - Full-time)',
    company: 'Bebridge',
    period: 'Dec 2020 - Aug 2022',
    location: 'Seoul, South Korea',
    highlights: [
      'Designed, built, and shipped the cross-platform Slid desktop app (macOS/Windows), including code signing and releases; grew to ~50% of active users.',
      'Helped build Slid\'s early video note-taking features and internal tooling.',
      'Supported migrations to modern React/TypeScript frontend stacks.',
      'Contributed to early AWS infrastructure and deployment workflows.',
    ],
  },
];

const products = [
  {
    title: 'Slid - AI-Powered Note-Taking for Online Learning',
    role: 'Lead Software Engineer',
    timeframe: 'Dec 2020 - Present',
    bullets: [
      'Rebuilt the Chrome extension UI and shipped a macOS/Windows desktop app with code signing.',
      'Desktop app adoption grew to roughly 50% of active users.',
      'Owned backend infrastructure and global deployments to reduce international latency.',
      'Implemented recurring subscriptions and introduced Whisper-based Auto-Note.',
    ],
    stack: ['TypeScript', 'React', 'Electron', 'Python', 'FastAPI', 'PostgreSQL', 'AWS'],
  },
  {
    title: 'Summary - AI Video Digest Mobile App',
    role: 'Lead Backend Engineer',
    timeframe: '2022 - 2024',
    bullets: [
      'Built and owned the backend and AI pipeline for summarizing new YouTube uploads.',
      'Designed channel pooling and ingestion for thousands of subscribed channels.',
      'Delivered scalable services supporting around 10,000 users.',
      'Balanced latency, cost, and quality in production AI workflows.',
    ],
    stack: ['TypeScript', 'NestJS', 'Python', 'FastAPI', 'MongoDB', 'PostgreSQL', 'AWS Lambda'],
  },
  {
    title: 'DipClip - Short-Form Video Generation',
    role: 'Lead Backend / AI Engineer',
    timeframe: '2023 - 2024',
    bullets: [
      'Built the AI pipeline that converts long-form video into short, mobile-first clips.',
      'Designed algorithms to identify key moments and generate precise time-range annotations.',
      'Led backend development for a B2C app serving approximately 5,000 users.',
    ],
    stack: ['TypeScript', 'React Native', 'Python', 'FastAPI', 'PostgreSQL', 'AWS Lambda'],
  },
];

const projects = [
  {
    title: 'Proteus - AI + Human Dubbing Agent',
    summary: 'End-to-end pipeline for multilingual dubbing with human validation.',
    bullets: [
      'Built transcription, translation, and voice cloning workflows with duration alignment.',
      'Reduced human dubbing time by roughly 90%.',
      'System became a core revenue driver with 10+ B2B contracts.',
    ],
    stack: ['ffmpeg', 'ElevenLabs', 'OpenAI', 'Gemini', 'LangGraph'],
  },
  {
    title: 'AI-Powered Dubbing Studio',
    summary: 'Web-based studio for human editors to review and finalize dubbing output.',
    bullets: [
      'Integrated Proteus outputs for seamless playback, correction, and approvals.',
      'Bridged AI systems with human-in-the-loop workflows.',
    ],
    stack: ['Web app', 'Playback tooling', 'Review UX'],
  },
  {
    title: 'KOHI - Course Knowledge Graph & Semantic Search',
    summary: 'Graph visualization and semantic search for large course catalogs.',
    bullets: [
      'Built multi-level graph visualization for thousands of courses.',
      'Processed course data and embedded it into Pinecone for semantic search.',
    ],
    stack: ['Visualization', 'Pinecone', 'FastAPI'],
  },
  {
    title: '3Pro Investor Advisor - Financial AI Chatbot',
    summary: 'RAG chatbot answering investor questions from YouTube expert interviews.',
    bullets: [
      'Automated ingestion, transcription, embedding, and vector storage.',
      'Responses include source video links and timestamps for transparency.',
    ],
    stack: ['RAG', 'Vector DB', 'YouTube ingestion'],
  },
  {
    title: 'Korean TTS Model Research & Deployment',
    summary: 'Benchmarked open-source TTS models and deployed GPU inference servers.',
    bullets: [
      'Evaluated GPT-SoVITS, XTTS-v2, MeloTTS, Fish Audio, and others.',
      'Delivered a production-ready TTS server recommendation.',
    ],
    stack: ['GPU deployment', 'TTS', 'Benchmarking'],
  },
  {
    title: 'Korean Lip-Sync AI Systems',
    summary: 'Research and deployment of MuseTalk and LatentSync for Korean lip-sync.',
    bullets: ['Optimized models for client-specific latency and quality targets.'],
    stack: ['MuseTalk', 'LatentSync', 'Model tuning'],
  },
  {
    title: 'Crypto Wallet & DeFi Risk Monitoring',
    summary: 'Recent work on security systems for DeFi and wallet safety.',
    bullets: [
      'Designed wallet security mechanisms and gas optimization workflows.',
      'Built real-time monitoring for Aave and Compound health metrics.',
      'Authored a fund-rescue smart contract (testing phase).',
    ],
    stack: ['Web3', 'Security', 'Monitoring'],
  },
];

const openSource = [
  {
    title: 'GoGrid (G2)',
    description: 'A unified system for developing and orchestrating production AI agents in Go. Creator & maintainer.',
    link: 'https://gogrid.vercel.app/',
  },
  {
    title: 'Tenuo',
    description: 'AI agent security framework enforcing task-scoped authority. Contributor.',
    link: 'https://tenuo.dev/',
  },
];

const awards = [
  'National Science Grand Prize (Physics)',
  'Korean Government Scholarship',
  'Yonsei Academic Excellence',
  'Korean Speech Contest Grand Prize',
  'Slid Hero Award (Transparency)',
  'Bebridge Hero Award (Focusing on Real Value)',
];

const education = [
  {
    title: 'BSc Bioengineering',
    org: 'Yonsei University (Global Top #50, QS 2026)',
    timeframe: '2017 - 2022',
  },
  {
    title: 'AWS Solutions Architect - Associate',
    org: 'Amazon Web Services',
    timeframe: 'Issued May 2022',
  },
];

const exposure = [
  'CES 2023 Presenter (Las Vegas)',
  'Silicon Valley Immersion (Dec 2025)',
];

const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Kinyarwanda', level: 'Native' },
  { name: 'Korean', level: 'Advanced' },
  { name: 'French', level: 'Intermediate' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-text font-sans">
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#about" className="text-lg font-semibold tracking-tight">
            Adriel Niyodusaba
          </a>

          <div className="hidden md:flex items-center gap-6 text-sm text-muted">
            <a href="#about" className="hover:text-text transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-text transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-text transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-text transition-colors">
              Projects
            </a>
            <a
              href="#contact"
              className="px-3 py-1.5 border border-slate-300 rounded-full text-text hover:border-primary hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden text-text p-2"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-slate-200 px-6 py-5 shadow-lg">
            <div className="flex flex-col gap-4 text-sm text-muted">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-text">
                About
              </a>
              <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-text">
                Skills
              </a>
              <a href="#experience" onClick={() => setIsMenuOpen(false)} className="hover:text-text">
                Experience
              </a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-text">
                Projects
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-primary">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-24 pb-20 px-6 max-w-6xl mx-auto">
        <section id="about" className="py-12 md:py-20">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted">
                <Briefcase size={14} /> Software Engineer (AI & Backend)
              </div>
              <div className="space-y-3">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                  Adriel Niyodusaba
                </h1>
                <p className="text-lg text-muted">
                  I build AI-powered backend systems and applied ML products that ship to production. With 4+ years of
                  experience across media, video, and language technology, I led delivery for Slid, Summary, and DipClip
                  across AI pipelines, backend APIs, frontend tools, and cloud infrastructure.
                </p>
                <p className="text-base text-muted">
                  Strengths include RAG systems, speech and video AI, agent pipelines, and cloud-native deployment, with
                  recent focus on security, Web3, and AI safety.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} /> Seoul, South Korea
                </span>
                <span className="inline-flex items-center gap-2">
                  <Globe size={16} /> Open to US / Canada / Korea / Remote
                </span>
                <span className="text-muted/70">28 years old, Rwandan</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:siradriel@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Mail size={16} /> Email
                </a>
                <a
                  href="/docs/Adriel_resume_1pager.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <FileText size={16} /> Resume (1 Page)
                </a>
                <a
                  href="/docs/Adriel_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <FileText size={16} /> Resume (4 Pages)
                </a>
                <a
                  href="https://www.linkedin.com/in/adriel-niyodusaba-993a01120/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-surface border border-slate-200 rounded-3xl p-4 shadow-sm">
                <img
                  src="/adriel2.png"
                  alt="Adriel Niyodusaba"
                  className="w-full max-w-xs rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface border border-slate-200 rounded-2xl p-5 shadow-sm"
              >
                <div className="text-xl font-semibold text-text">{stat.value}</div>
                <p className="text-sm text-muted mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-16 border-t border-slate-200">
          <SectionHeader
            title="Core Technical Skills"
            description="A focused stack across backend, AI systems, and production infrastructure."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-base font-semibold mb-3">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-slate-100 text-sm text-muted border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="py-16 border-t border-slate-200">
          <SectionHeader
            title="Professional Experience"
            description="End-to-end ownership across AI pipelines, backend architecture, and product delivery."
          />
          <div className="space-y-6">
            {experience.map((role) => (
              <div key={role.role} className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{role.role}</h3>
                    <p className="text-sm text-muted">{role.company}</p>
                  </div>
                  <div className="text-sm text-muted">
                    {role.period} · {role.location}
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted list-disc pl-5">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="py-16 border-t border-slate-200">
          <SectionHeader
            title="Product Highlights"
            description="Leadership across Slid, Summary, and DipClip with measurable product impact."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {products.map((product) => (
              <DetailCard
                key={product.title}
                title={product.title}
                subtitle={`${product.role} · ${product.timeframe}`}
                bullets={product.bullets}
                tags={product.stack}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="py-16 border-t border-slate-200">
          <SectionHeader
            title="Selected Projects & Clients"
            description="B2B systems, client engagements, and applied research deployments."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <DetailCard
                key={project.title}
                title={project.title}
                subtitle={project.summary}
                bullets={project.bullets}
                tags={project.stack}
              />
            ))}
          </div>
        </section>

        <section id="open-source" className="py-16 border-t border-slate-200">
          <SectionHeader
            title="Open Source"
            description="Building production-grade AI infrastructure and safety tooling."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {openSource.map((project) => (
              <div key={project.title} className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted mt-2">{project.description}</p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary text-sm inline-flex items-center gap-1"
                  >
                    Visit <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="py-16 border-t border-slate-200">
          <SectionHeader
            title="Education, Certifications, and Recognition"
            description="Academic background, awards, and professional exposure."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <GraduationCap size={18} /> Education & Certifications
              </h3>
              <div className="mt-4 space-y-4 text-sm text-muted">
                {education.map((item) => (
                  <div key={item.title}>
                    <p className="font-medium text-text">{item.title}</p>
                    <p>{item.org}</p>
                    <p className="text-xs text-muted">{item.timeframe}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <Award size={18} /> Awards
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted list-disc pl-5">
                {awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </div>

            <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-base font-semibold flex items-center gap-2">
                <Shield size={18} /> Professional Exposure & Languages
              </h3>
              <div className="mt-4 space-y-4 text-sm text-muted">
                <div>
                  <p className="font-medium text-text">Exposure</p>
                  <ul className="mt-2 space-y-2 list-disc pl-5">
                    {exposure.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-text">Languages</p>
                  <ul className="mt-2 space-y-2">
                    {languages.map((language) => (
                      <li key={language.name} className="flex items-center justify-between">
                        <span>{language.name}</span>
                        <span className="text-xs text-muted">{language.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 border-t border-slate-200 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Let's build something durable.</h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            I am open to roles where I can lead AI and backend systems, scale production infrastructure, and deliver
            products with measurable business impact.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:siradriel@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail size={16} /> siradriel@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/adriel-niyodusaba-993a01120/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={16} /> Connect on LinkedIn
            </a>
          </div>
          <div className="mt-8 text-sm text-muted flex items-center justify-center gap-3">
            <FileText size={14} />
            <a href="/docs/Adriel_resume.pdf" target="_blank" rel="noreferrer" className="hover:text-primary">
              Download resume (PDF)
            </a>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 text-sm text-muted flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Engineeradriel.com</span>
          <span>Seoul, South Korea · Open to US / Canada / Korea / Remote</span>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title, description }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      <p className="text-muted mt-3 max-w-3xl">{description}</p>
    </div>
  );
}

function DetailCard({ title, subtitle, bullets, tags }) {
  return (
    <div className="bg-surface border border-slate-200 rounded-2xl p-6 shadow-sm h-full flex flex-col">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted mt-2">{subtitle}</p>
      <ul className="mt-4 space-y-2 text-sm text-muted list-disc pl-5">
        {bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full bg-slate-100 text-xs text-muted border border-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
