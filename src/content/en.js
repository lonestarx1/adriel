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
    eyebrow: 'Software Engineer (AI & Backend)',
    intro:
      'I build production backend, AI, and infrastructure systems. Over 5+ years at Bebridge I led delivery for Slid, Summary, and DipClip, and in 2026 I moved into on-chain trading infrastructure: co-building FillerBot, a Rust solver live on Ethereum and BNB Chain that won 1st place at Protocol Camp Cohort 9 (Southeast Asia), and owning the backend for DollarParking, a stablecoin-to-tokenized-stocks mobile app.',
    focus:
      'Strengths include distributed backend services, cloud-native infrastructure on AWS and Kubernetes, RAG and speech/video AI pipelines, and Web3 execution systems. I started the Georgia Tech OMSCS (M.S. Computer Science) program in Fall 2026.',
    location: 'Seoul, South Korea',
    availability: 'Open to roles in Korea & Canada',
    personal: '28 years old, Rwandan',
    email: 'Email',
    resumeShort: 'Resume (1 Page)',
    resumeLong: 'Resume (5 Pages)',
    linkedin: 'LinkedIn',
    photoAlt: 'Adriel Niyodusaba',
  },

  stats: [
    {
      value: '5+ years',
      label: 'Building production AI, backend, and infrastructure systems',
    },
    {
      value: '1st Place',
      label: 'Protocol Camp Cohort 9 (Southeast Asia) with FillerBot',
    },
    {
      value: '~90%',
      label: 'Reduction in human dubbing time with Proteus',
    },
    {
      value: '10k+ users',
      label: 'Scale supported on the Summary mobile app',
    },
  ],

  sections: {
    skills: {
      title: 'Core Technical Skills',
      description: 'A focused stack across backend, AI systems, Web3, and production infrastructure.',
    },
    experience: {
      title: 'Professional Experience',
      description: 'End-to-end ownership across AI pipelines, backend architecture, infrastructure, and product delivery.',
    },
    products: {
      title: 'Product Highlights',
      description: 'Recent on-chain trading infrastructure, plus long-running leadership across Slid, Summary, and DipClip.',
    },
    projects: {
      title: 'Selected Projects & Clients',
      description: 'B2B systems, client engagements, hackathons, and applied research deployments.',
    },
    openSource: {
      title: 'Open Source & Community',
      description: 'Production-grade AI infrastructure, safety tooling, and tools for the communities I belong to.',
    },
    education: {
      title: 'Education, Certifications, and Recognition',
      description: 'Academic background, awards, and professional exposure.',
    },
  },

  skillGroups: [
    {
      title: 'Languages',
      items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Rust', 'Solidity'],
    },
    {
      title: 'Backend',
      items: ['Django', 'FastAPI', 'Node.js', 'NestJS', 'Gin', 'Tokio / Axum'],
    },
    {
      title: 'AI / ML (Applied)',
      items: ['LangChain', 'LangGraph', 'Autogen', 'RAG', 'TTS / STT', 'LLMs', 'Lip Sync'],
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
    {
      title: 'Web3',
      items: ['UniswapX', '1inch Fusion', 'Foundry', 'alloy / viem', 'Wallet development', 'DeFi risk monitoring'],
    },
  ],

  experience: [
    {
      role: 'Software Engineer - AI & Backend',
      company: 'Bebridge',
      period: 'Sep 2022 - Present',
      location: 'Seoul / Global',
      highlights: [
        'Co-built FillerBot, a Rust solver for UniswapX and 1inch Fusion orders, in a two-person team; live on Ethereum mainnet since Jul 2026 and BNB Chain since Oct 2026, and 1st place at Protocol Camp Cohort 9 (Southeast Asia), run by Hashed\'s Shard Lab.',
        'Owned the Go API, AWS infrastructure, and CI/CD for DollarParking, a mobile app that turns USDT/USDC directly into tokenized US stocks (live on Google Play and the web).',
        'Built the shared AWS EKS platform in Terraform that runs DollarParking and FillerBot as isolated tenants.',
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
  ],

  featuredProducts: [
    {
      title: 'FillerBot - UniswapX & 1inch Fusion Solver',
      role: 'Co-builder (team of 2)',
      timeframe: 'Jun 2026 - Present',
      badge: '1st Place · Protocol Camp Cohort 9 (Southeast Asia)',
      bullets: [
        'Prices and fills intent orders for Ondo tokenized US equities; live on Ethereum mainnet and BNB Chain.',
        'Built the first version of the bot in two days: order ingestion, Dutch-auction pricing, decision engine, shadow mode, Postgres audit log, and Grafana.',
        'Measured burst submissions winning 30.8% of races vs. 55.6% when isolated, then designed independent nonce lanes across the contracts and bot.',
        'Owned deployment: GitHub Actions to AWS EKS, Secrets Manager via IRSA, and a us-east-1 BNB Chain host with ~4x lower fire latency than Seoul.',
        'Extended the Solidity executor contracts (GM-to-GM fills, inventory restocking, builder payments) and wrote the pre-deploy security review.',
      ],
      stack: ['Rust', 'Tokio', 'alloy', 'Solidity', 'Foundry', 'Go', 'PostgreSQL', 'AWS EKS', 'Grafana'],
    },
    {
      title: 'DollarParking - Stablecoins to Tokenized US Stocks',
      role: 'Backend & Infrastructure Lead',
      timeframe: 'Jun 2026 - Aug 2026',
      link: 'https://dollarparking.app',
      bullets: [
        'Mobile and web app that converts USDT/USDC into Ondo tokenized US stocks through gasless UniswapX orders; live on Google Play and the web.',
        'Architected the Go/Gin backend: UniswapX order relay, price worker, cached JSON-RPC proxy, order audit trail, and fill reconciler.',
        'Led the pivot from an on-chain mint contract to a contract-free, gasless swap flow across contracts, API, and clients.',
        'Provisioned EKS and RDS with Terraform and shipped GitHub Actions OIDC deploys with gated production approvals.',
        'Hardened price integrity (server-set pricing, fail-closed stale-feed gate) and resolved launch security-review findings.',
      ],
      stack: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'UniswapX', 'React Native (Expo)', 'Next.js', 'AWS EKS', 'Terraform'],
    },
  ],

  products: [
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
  ],

  projects: [
    {
      title: 'PowerPulse - Multilingual Power-Outage Assistant',
      summary: 'Built at the Frontiers GenAI Hackathon (ALX Kigali, Jul 2026) with a team of six.',
      link: 'https://powerpulse-africa.vercel.app/',
      bullets: [
        'Answers outage questions typed in English, Kinyarwanda, or a code-switched mix, grounded in Rwanda Energy Group\'s published outage records.',
        'Code resolves the place, outage window, and history; the LLM only phrases and personalizes verified context, so it never invents restoration times.',
        'Scored on a deterministic 33-question benchmark that includes out-of-scope questions it must decline.',
      ],
      stack: ['Next.js', 'TypeScript', 'Gemini', 'Vercel AI SDK'],
    },
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
      summary: 'Security systems for DeFi and wallet safety.',
      bullets: [
        'Designed wallet security mechanisms and gas optimization workflows.',
        'Built real-time monitoring for Aave and Compound health metrics.',
        'Authored a fund-rescue smart contract (testing phase).',
      ],
      stack: ['Web3', 'Security', 'Monitoring'],
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
    {
      title: 'GIOS Study',
      description:
        'Native macOS study app (Tauri 2) for Georgia Tech OMSCS CS-6200, with active recall, SM-2 spaced repetition, and a bundled OSTEP corpus.',
      role: 'Creator',
      link: 'https://github.com/lonestarx1/gios-study-app',
    },
    {
      title: 'RCA-SK Website',
      description: 'Website for the Rwandan Community Abroad in South Korea.',
      role: 'Built and maintain',
      link: 'https://rca-sk-website-2024.vercel.app/',
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
      timeframe: '2017 - 2022',
    },
    {
      title: 'AWS Solutions Architect - Associate',
      org: 'Amazon Web Services',
      timeframe: 'Issued May 2022',
    },
  ],

  awards: [
    '1st Place, Protocol Camp Cohort 9 (Southeast Asia), Shard Lab by Hashed, with FillerBot (2026)',
    'National Science Grand Prize (Physics)',
    'Korean Government Scholarship',
    'Yonsei Academic Excellence',
    'Korean Speech Contest Grand Prize',
    'Slid Hero Award (Transparency)',
    'Bebridge Hero Award (Focusing on Real Value)',
  ],

  exposure: ['CES 2023 Presenter (Las Vegas)', 'Silicon Valley Immersion (Dec 2025)'],

  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Kinyarwanda', level: 'Native' },
    { name: 'Korean', level: 'Advanced' },
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
    body: 'I am looking for backend, infrastructure, and AI engineering roles in Korea and Canada, where I can own production systems end to end and deliver measurable business impact.',
    linkedin: 'Connect on LinkedIn',
    download: 'Download resume (PDF)',
  },

  footer: {
    location: 'Seoul, South Korea · Open to roles in Korea & Canada',
  },
};

export default en;
