const en = {
  nav: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
    toggleMenu: 'Toggle navigation',
    switchLabel: '한국어',
    switchAria: 'View this page in Korean',
    switchHref: '/ko/',
  },

  hero: {
    eyebrow: 'AI Engineer · Software Engineer',
    intro:
      'I build production AI systems and the backends that run them. Over 5+ years at Bebridge I led engineering for Slid, Summary, and DipClip, and built Proteus, an AI dubbing agent that cut human dubbing time by ~90% and grew into more than half of company revenue. I also created GoGrid, an open-source framework for production AI agents in Go, and in 2026 co-built a low-latency Rust trading service that won 1st place at Protocol Camp Cohort 9.',
    focus:
      'Strengths include LLM applications and agents, RAG, speech and video AI pipelines, and the backend and cloud infrastructure (AWS, Kubernetes, Terraform) that keeps them reliable in production. I started the Georgia Tech OMSCS (M.S. Computer Science) program in Fall 2026.',
    location: 'Seoul, South Korea',
    availability: 'Open to roles in Korea & Canada',
    personal: '28 years old, Rwandan',
    email: 'Email',
    resumeShort: 'Resume (1 Page)',
    resumeShortHref: '/docs/Adriel_resume_1pager.pdf',
    resumeLong: 'Resume (Full)',
    resumeLongHref: '/docs/Adriel_resume.pdf',
    linkedin: 'LinkedIn',
    photoAlt: 'Adriel Niyodusaba',
  },

  stats: [
    {
      value: '~90%',
      label: 'Reduction in human dubbing time with the Proteus AI agent',
    },
    {
      value: '>50%',
      label: 'Of company revenue driven by Proteus, across 10+ B2B contracts',
    },
    {
      value: '10k+ users',
      label: 'Served by the Summary AI video digest app',
    },
    {
      value: '5+ years',
      label: 'Shipping production AI, backend, and infrastructure systems',
    },
  ],

  sections: {
    skills: {
      title: 'Core Technical Skills',
      description: 'Applied AI on top of solid backend and production infrastructure.',
    },
    experience: {
      title: 'Professional Experience',
      description: 'End-to-end ownership across AI pipelines, backend architecture, infrastructure, and product delivery.',
    },
    products: {
      title: 'Product Highlights',
      description: 'AI products I led from prototype to production, plus recent backend and infrastructure work.',
    },
    projects: {
      title: 'Selected Projects & Clients',
      description: 'Client AI engagements, RAG and search systems, and applied speech and video research.',
    },
    openSource: {
      title: 'Open Source',
      description: 'Building production-grade AI agent infrastructure and safety tooling.',
    },
    education: {
      title: 'Education, Certifications, and Recognition',
      description: 'Academic background, awards, and professional exposure.',
    },
  },

  skillGroups: [
    {
      title: 'AI / ML (Applied)',
      items: ['LLMs (OpenAI, Anthropic, Gemini)', 'LangGraph', 'LangChain', 'AutoGen', 'RAG', 'Whisper / STT', 'TTS & voice cloning', 'Lip sync'],
    },
    {
      title: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Rust'],
    },
    {
      title: 'Backend',
      items: ['FastAPI', 'Django', 'Node.js', 'NestJS', 'Gin', 'Tokio / Axum'],
    },
    {
      title: 'Infra',
      items: ['AWS (EKS, RDS, Lambda)', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
    },
    {
      title: 'Datastores',
      items: ['PostgreSQL', 'MySQL', 'Redis', 'Pinecone', 'MongoDB'],
    },
    {
      title: 'Media',
      items: ['ffmpeg', 'Audio/video processing pipelines'],
    },
  ],

  experience: [
    {
      role: 'Software Engineer - AI & Backend',
      company: 'Bebridge',
      period: 'Sep 2022 - Present',
      location: 'Seoul / Global',
      highlights: [
        'Built Proteus, an AI + human dubbing agent (transcription, translation, voice cloning, duration alignment) that cut human dubbing time by ~90% and drove over half of company revenue through 10+ B2B contracts.',
        'Lead engineer on SaaS products: Slid, Summary, and DipClip, shipping production LLM and speech/video AI pipelines end to end.',
        'Introduced Whisper-based transcription that became the foundation of Slid\'s Auto-Note feature.',
        'Delivered client AI systems: RAG chatbot, semantic course search, and Korean TTS and lip-sync deployments on GPU servers.',
        'Owned backend and cloud infrastructure, and designed recurring subscription payments.',
        'In 2026, co-built FillerBot, a low-latency Rust trading service (1st place, Protocol Camp Cohort 9), and led the Go backend and multi-tenant AWS EKS platform (Terraform) for the DollarParking app.',
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
  ],

  featuredProducts: [
    {
      title: 'Proteus - AI + Human Dubbing Agent',
      role: 'Lead AI Engineer',
      timeframe: 'B2B media AI',
      bullets: [
        'Agentic pipeline: video ingestion, transcription, LLM translation with web-assisted validation, voice cloning, and dubbed audio generation.',
        'Iterative alignment so translated speech matches the original audio duration, a hard constraint for dubbing.',
        'Cut human dubbing time by ~90%; editors moved from creating dubs to validating them.',
        'Became a core revenue driver: over half of company revenue and 10+ B2B contracts, including long-term clients.',
      ],
      stack: ['Python', 'LangGraph', 'OpenAI', 'Gemini', 'ElevenLabs', 'ffmpeg'],
    },
    {
      title: 'Slid - AI-Powered Note-Taking for Online Learning',
      role: 'Lead Software Engineer',
      timeframe: 'Dec 2020 - Present',
      bullets: [
        'Joined as one of the first two engineers and grew into the lead engineer owning core product systems.',
        'Introduced Whisper-based transcription at an internal hackathon; it became the foundation of the Auto-Note feature.',
        'Shipped the macOS/Windows desktop app with code signing; it grew to ~50% of active users.',
        'Owned backend and global cloud infrastructure, and implemented recurring subscriptions.',
      ],
      stack: ['Python', 'FastAPI', 'Whisper', 'TypeScript', 'React', 'Electron', 'PostgreSQL', 'AWS'],
    },
  ],

  products: [
    {
      title: 'Summary - AI Video Digest Mobile App',
      role: 'Lead Backend Engineer',
      timeframe: '2022 - 2024',
      bullets: [
        'Built the AI pipeline: ingestion, transcription, LLM summarization, storage, and user notification for new YouTube uploads.',
        'Designed channel pooling and ingestion for thousands of subscribed channels.',
        'Served around 10,000 users while balancing latency, cost, and quality.',
      ],
      stack: ['Python', 'FastAPI', 'Whisper', 'GPT-4o', 'NestJS', 'MongoDB', 'AWS Lambda'],
    },
    {
      title: 'DipClip - AI Short-Form Video Generation',
      role: 'Lead Backend / AI Engineer',
      timeframe: '2023 - 2024',
      bullets: [
        'Built the AI pipeline that converts long-form video into short, mobile-first clips.',
        'Designed algorithms to identify key moments and generate precise time-range annotations.',
        'Led backend development for a B2C app serving approximately 5,000 users.',
      ],
      stack: ['Python', 'FastAPI', 'Whisper', 'GPT-4o', 'PostgreSQL', 'AWS Lambda'],
    },
    {
      title: 'FillerBot - Low-Latency Trading Service',
      role: 'Co-builder (team of 2)',
      timeframe: 'Jun 2026 - Present',
      badge: '1st Place · Protocol Camp Cohort 9 (Southeast Asia)',
      bullets: [
        'Rust/Tokio service that prices and fills tokenized-equity orders in real time; in production on two networks.',
        'Built the first version in two days: ingestion, pricing, decision engine, shadow mode, Postgres audit log, and Grafana.',
        'Measured contention between concurrent submissions and redesigned for independent submission lanes; moved hosting to cut latency ~4x.',
      ],
      stack: ['Rust', 'Tokio', 'Go', 'PostgreSQL', 'AWS EKS', 'Grafana'],
    },
    {
      title: 'DollarParking - Mobile Investing App',
      role: 'Backend & Infrastructure Lead',
      timeframe: 'Jun 2026 - Aug 2026',
      link: 'https://dollarparking.app',
      bullets: [
        'Architected the Go/Gin backend: order relay, price worker, cached RPC proxy, audit trail, and fill reconciler.',
        'Built the shared multi-tenant AWS EKS / RDS platform in Terraform with GitHub Actions OIDC deploys and gated production approvals.',
        'Hardened price integrity with server-set pricing and a fail-closed stale-feed gate.',
      ],
      stack: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'AWS EKS', 'Terraform'],
    },
  ],

  projects: [
    {
      title: 'AI-Powered Dubbing Studio',
      summary: 'Web-based studio for human editors to review and finalize Proteus output.',
      bullets: [
        'Integrated Proteus outputs for seamless playback, correction, and approvals.',
        'Bridged AI systems with human-in-the-loop workflows.',
      ],
      stack: ['Human-in-the-loop', 'Playback tooling', 'Review UX'],
    },
    {
      title: '3Pro Investor Advisor - Financial AI Chatbot',
      summary: 'RAG chatbot answering investor questions from YouTube expert interviews.',
      bullets: [
        'Automated ingestion, transcription, embedding, and vector storage.',
        'Retrieval prioritizes fresh content; responses cite source video links and timestamps.',
      ],
      stack: ['RAG', 'Vector DB', 'Whisper', 'YouTube ingestion'],
    },
    {
      title: 'KOHI - Course Knowledge Graph & Semantic Search',
      summary: 'Graph visualization and semantic search for large course catalogs.',
      bullets: [
        'Built multi-level graph visualization for thousands of courses.',
        'Processed course data and embedded it into Pinecone for semantic search.',
      ],
      stack: ['Embeddings', 'Pinecone', 'FastAPI', 'Visualization'],
    },
    {
      title: 'Korean TTS Model Research & Deployment',
      summary: 'Benchmarked open-source TTS models and deployed GPU inference servers.',
      bullets: [
        'Evaluated GPT-SoVITS, XTTS-v2, MeloTTS, Fish Audio, and others on quality and latency.',
        'Delivered a production-ready TTS server recommendation and deployment.',
      ],
      stack: ['GPU inference', 'TTS', 'Benchmarking'],
    },
    {
      title: 'Korean Lip-Sync AI Systems',
      summary: 'Research and deployment of MuseTalk and LatentSync for Korean lip-sync.',
      bullets: ['Optimized models for client-specific latency and quality targets.'],
      stack: ['MuseTalk', 'LatentSync', 'Model tuning'],
    },
  ],

  openSource: [
    {
      title: 'GoGrid (G2)',
      description: 'A unified system for developing and orchestrating production AI agents in Go.',
      role: 'Creator & maintainer',
      link: 'https://gogrid.vercel.app/',
    },
    {
      title: 'Tenuo',
      description: 'Capability engine for AI agents with cryptographically attenuated, task-scoped authority (Rust core).',
      role: 'Contributor: added the AutoGen AgentChat integration',
      link: 'https://tenuo.dev/',
    },
  ],

  education: [
    {
      title: 'M.S. Computer Science (OMSCS)',
      org: 'Georgia Institute of Technology',
      timeframe: 'Fall 2026 - Present',
    },
    {
      title: 'BSc Bioengineering',
      org: 'Yonsei University (Global Top #50, QS 2026)',
      timeframe: 'Mar 2017 - Aug 2022',
    },
    {
      title: 'AWS Solutions Architect - Associate',
      org: 'Amazon Web Services',
      timeframe: 'Issued May 2022',
    },
  ],

  awards: [
    '1st Place, Protocol Camp Cohort 9 (Southeast Asia), Shard Lab by Hashed, with FillerBot (2026)',
    'National Science Grand Prize, Physics (KOICA & Rwanda Ministry of Education, 2014)',
    'Korean Government Scholarship',
    'Yonsei Academic Excellence',
    'Korean Speech Contest Grand Prize (Silla University, 2016)',
    'Slid Hero Award (Transparency)',
    'Bebridge Hero Award (Focusing on Real Value)',
  ],

  exposure: ['CES 2023 Presenter (Las Vegas)', 'Silicon Valley Immersion (Dec 2025)'],

  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Kinyarwanda', level: 'Native' },
    { name: 'Korean', level: 'Advanced (TOPIK 5)' },
    { name: 'French', level: 'Intermediate' },
  ],

  labels: {
    visit: 'Visit',
    educationCard: 'Education & Certifications',
    awardsCard: 'Awards',
    exposureCard: 'Professional Exposure & Languages',
    exposure: 'Exposure',
    languages: 'Languages',
  },

  contact: {
    title: "Let's build something durable.",
    body: 'I am looking for AI engineering and software engineering roles in Korea and Canada, where I can own production systems end to end and deliver measurable business impact.',
    linkedin: 'Connect on LinkedIn',
    download: 'Download resume (PDF)',
    downloadHref: '/docs/Adriel_resume.pdf',
  },

  footer: {
    location: 'Seoul, South Korea · Open to roles in Korea & Canada',
  },
};

export default en;
