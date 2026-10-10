# Resume

# **Adriel Niyodusaba**

**Software Engineer (AI & Backend) -**  [engineeradriel.com](https://engineeradriel.com/)

Seoul, South Korea · Open to roles in Korea & Canada

---

## **SUMMARY**

Software Engineer specializing in **AI-powered backend systems, cloud infrastructure, and applied machine learning**, with 5+ years of experience building and scaling **production products** in media, video, language technology, and on-chain trading. Core builder of **Slid, Summary, and Dipclip**, shipping end-to-end systems spanning **AI pipelines, backend APIs, frontend tools, and infrastructure**. In 2026, co-built **FillerBot**, a Rust UniswapX / 1inch Fusion solver live on Ethereum and BNB Chain that won **1st place at Protocol Camp Cohort 9 (Southeast Asia)**, and led the backend and infrastructure for **DollarParking**. Strong background in **RAG systems, speech & video AI, agent pipelines, and cloud-native deployment**, with growing focus on **security, Web3, and AI safety**. Started the **Georgia Tech OMSCS** (M.S. Computer Science) in Fall 2026.

---

## **CORE TECHNICAL SKILLS**

- **Languages:** Python, TypeScript, JavaScript, Go, Rust, Solidity
- **Backend:** Django, FastAPI, Node.js, Nest Js, Gin, Tokio / Axum
- **AI / ML (Applied):** Langchain, Langgraph, Autogen, TTS, STT, LipSync, RAG, LLMs
- **Infra:** AWS (EKS, RDS, Lambda), GCP, Docker, Kubernetes, Terraform, GitHub Actions, Grafana
- **Datastores:** PostgreSQL, MySQL, Redis, Pinecone, MongoDB
- **Web3:** UniswapX, 1inch Fusion, Foundry, alloy / viem, Wallet Development, DeFi Risk Monitoring
- **Media:** ffmpeg, audio/video processing pipelines

---

## **PROFESSIONAL EXPERIENCE**

**Software Engineer — AI & Backend**
Bebridge · Seoul / Global
Sep 2022 – Present

**Software Engineer (Intern → Full-time)**
Dec 2020 – Aug 2022

Lead engineer on **SaaS products: Slid, Summary, and Dipclip**, shipping production AI systems end to end, later expanding into **B2B media AI**, **client projects**, and **Web3 trading infrastructure**.

---

## **WEB3 TRADING INFRASTRUCTURE (2026)**

### **FillerBot — UniswapX & 1inch Fusion Solver**

**Co-builder (team of 2)** · Jun 2026 – Present · **1st Place, Protocol Camp Cohort 9 (Southeast Asia)**, run by Shard Lab (Hashed)

- Co-built a **Rust solver** that prices and fills intent orders for **Ondo tokenized US equities**; **live on Ethereum mainnet since Jul 2026 and BNB Chain since Oct 2026**.
- Built the **first version of the bot in two days**: order ingestion, Dutch-auction pricing, decision engine, shadow mode, Postgres audit log, and Grafana monitoring.
- Measured burst submissions winning **30.8%** of races vs. **55.6%** when isolated, then designed **independent nonce lanes** across the contracts and bot.
- Owned deployment: **GitHub Actions → AWS EKS / ECR**, Secrets Manager via IRSA, and a **us-east-1 BNB Chain host with ~4x lower fire latency** than Seoul.
- Extended the **Solidity executor contracts** (GM-to-GM fills, inventory restocking, builder payments) and wrote the **pre-deploy security review**.

**Tech:** Rust, Tokio, alloy, Solidity, Foundry, Go, Next.js, PostgreSQL, AWS EKS, Grafana

### **DollarParking — Stablecoins to Tokenized US Stocks**

**Backend & Infrastructure Lead** · Jun 2026 – Aug 2026 · Live on Google Play and [dollarparking.app](https://dollarparking.app)

- Mobile and web app that converts **USDT/USDC into Ondo tokenized US stocks** through gasless UniswapX orders.
- Architected the **Go/Gin backend**: UniswapX order relay, price worker, cached JSON-RPC proxy, order audit trail, and fill reconciler.
- Led the pivot from an on-chain mint contract to a **contract-free, gasless swap flow** across contracts, API, and clients.
- Built the shared **EKS / RDS platform in Terraform** (namespaces with quotas and NetworkPolicy, IRSA, GitHub OIDC deploy roles) that runs DollarParking and FillerBot as **isolated tenants**, with gated production deploys.
- Hardened **price integrity** (server-set pricing, fail-closed stale-feed gate) and resolved launch security-review findings.

**Tech:** Go, Gin, PostgreSQL, Redis, UniswapX, React Native (Expo), Next.js, AWS EKS, Terraform

---

## **PRODUCT EXPERIENCE**

## **Slid — AI-Powered Note-Taking Platform for Online Learning**

**Lead Software Engineer**

Seoul, South Korea | Dec 2020 – Present

- Joined as one of the **first two engineers**; evolved from frontend intern into **lead engineer owning core product systems**.
- **Refactored the Chrome extension frontend** and **designed, built, and shipped** a cross-platform **desktop app (macOS & Windows)** from scratch, handling code signing and releases; desktop app grew to **~50% of active users**.
- Owned the **entire backend and cloud infrastructure** (APIs, databases, background jobs, deployments); built **global infrastructure** that significantly reduced international latency and enabled worldwide usage.
- **Designed and implemented recurring subscription payments**, enabling sustainable monetization and long-term growth.
- Introduced **AI transcription (Whisper)** during an internal hackathon, which became the foundation of Slid's **Auto-Note** feature.
- Represented Slid at **CES 2023 (Las Vegas)**, presenting the product and its AI capabilities to an international audience.

**Tech:** TypeScript, React, Electron, Python, Node.js, FastAPI, PostgreSQL, ffmpeg, Whisper, AWS, Docker

---

## **Summary — AI-Powered Video Digest Mobile App**

**Lead Backend Engineer**

Seoul, South Korea

- Built and owned the **backend and AI pipeline** for a B2C mobile app that delivers **automatic summaries of newly uploaded YouTube videos**.
- Designed a **channel pooling and ingestion system** to monitor thousands of subscribed channels and trigger near-real-time processing on new uploads.
- Implemented end-to-end **AI pipelines**: video ingestion → transcription → LLM-based summarization → storage → user notification.
- Architected scalable backend services and databases to support **~10,000 users** with reliable, low-latency delivery.
- Optimized processing workflows to balance **cost, speed, and quality** in production AI workloads.
- Contributed to product strategy and system design decisions as the platform scaled.
- Represented Summary at **CES 2023 (Las Vegas)**, presenting the product and its AI capabilities to an international audience.

**Tech:** TypeScript, NestJS, React Native, Python, FastAPI, MongoDB, PostgreSQL, Whisper, GPT-4o, AWS Lambda

---

## **DipClip — AI Short-Form Video Generation Platform**

**Lead Backend / AI Engineer**

Seoul, South Korea

- Built the **core AI pipeline** for converting long-form videos into **short, reel-style video segments** optimized for mobile consumption.
- Designed algorithms to **analyze video content**, identify key moments, and generate precise **time-range annotations** representing meaningful clips.
- Implemented backend systems to enable **seamless playback** that dynamically jumps across key segments while preserving narrative flow.
- Led system design and backend development for a **B2C mobile app** serving approximately **5,000 users**.
- Focused on scalable, production-ready AI pipelines balancing **latency, cost, and output quality**.
- Collaborated closely with frontend and product teams to align AI outputs with real user interaction patterns.

**Tech:** TypeScript, React Native, Python, FastAPI, PostgreSQL, Whisper, GPT-4o, AWS Lambda

---

## **B2B MEDIA AI & DUBBING SYSTEMS**

### **Proteus — AI + Human Dubbing Agent**

- Designed and built **Proteus**, an AI agent for multilingual video dubbing.
- End-to-end pipeline:
    - Video ingestion and audio extraction
    - Transcription and translation via LLM agents
    - Web-assisted validation for translation accuracy
    - Voice cloning and translated audio generation
    - Iterative alignment to match **original audio duration** (non-trivial constraint)
- Reduced **human dubbing time by ~90%**, with editors focusing on validation instead of creation.
- System became a **core revenue driver**, generating **over half of company revenue** and securing **10+ B2B contracts**, including long-term clients.
- Tech stack: ffmpeg, ElevenLabs, OpenAI, Gemini, LangGraph, custom orchestration.

---

### **AI-Powered Dubbing Studio (Frontend + Backend)**

- Contributed to a **web-based dubbing studio** used by human editors.
- Integrated outputs from Proteus to allow:
    - Seamless playback and review
    - Rapid corrections and approvals
    - Finalization of high-quality dubbed content
- Demonstrates ability to bridge **AI systems with human-in-the-loop UX**.

---

## **SELECTED CLIENT PROJECTS**

### **KOHI — Course Knowledge Graph & Semantic Search**

- Built a **multi-level graph visualization** for thousands of courses.
- Processed large-scale course data and embedded it into **Pinecone**.
- Enabled **semantic search** alongside graph navigation.
- Combined **data engineering, AI search, and UX-driven system design**.

---

### **3Pro Investor Advisor — Financial AI Chatbot**

- Built a chatbot answering investor questions based on **YouTube interviews with Wall Street experts.**
- Implemented automated ingestion:
    - Detect new videos
    - Transcribe and embed content
    - Store in vector DB
- Designed retrieval to prioritize **fresh content**.
- Responses include **source video links and timestamps**, ensuring transparency and trust.

---

### **Korean TTS Model Research & Deployment (Likelion)** *(Nov 2025)*

- Researched and deployed multiple **open-source Korean TTS models** on GPU servers.
- Benchmarked quality and latency across models including GPT-SoVITS, XTTS-v2, MeloTTS, Fish Audio, and others.
- Helped client select and deploy a **production-ready TTS server**.

---

### **Korean Lip-Sync AI Systems** *(Dec 2025)*

- Researched, deployed, and optimized **MuseTalk** and **LatentSync** for Korean lip-sync.
- Tuned models for client-specific performance and quality needs.

---

## **WEB3 & SECURITY**

### **Crypto Wallet & DeFi Risk Monitoring** *(Jan 2026 – Present)*

- Designing **wallet security mechanisms** and **gas fee optimization**.
- Built a system to monitor **Aave and Compound health metrics in real time**.
- Authored a **fund-rescue smart contract** to protect user funds during abnormal conditions (testing phase).

---

## **OPEN SOURCE, HACKATHONS & COMMUNITY**

- **GoGrid (G2)** — Creator & maintainer of a unified system for developing and orchestrating **production AI agents in Go**. [gogrid.vercel.app](https://gogrid.vercel.app/)
- **Tenuo** — Contributor to an AI agent security framework enforcing **task-scoped authority**; added the **AutoGen AgentChat integration**. [tenuo.dev](https://tenuo.dev/)
- **PowerPulse** *(Frontiers GenAI Hackathon, ALX Kigali, Jul 2026)* — Multilingual power-outage assistant (English / Kinyarwanda) grounded in the national utility's published outage records; the LLM only phrases verified context and never invents restoration times. [powerpulse-africa.vercel.app](https://powerpulse-africa.vercel.app/)
- **GIOS Study** — Native macOS study app (Tauri 2) for Georgia Tech OMSCS CS-6200 with active recall and SM-2 spaced repetition. [GitHub](https://github.com/lonestarx1/gios-study-app)
- **RCA-SK Website** — Built and maintain the website for the Rwandan Community Abroad in South Korea.


---

## **EDUCATION & CERTIFICATIONS**

- **M.S. Computer Science (OMSCS)** — Georgia Institute of Technology (Fall 2026 – Present)
- **BSc Bioengineering** — Yonsei University (Global Top #50, QS 2026) (2017-2022)
- **AWS Solutions Architect – Associate**

---

## **PROFESSIONAL EXPOSURE**

- **CES 2023 Presenter (Las Vegas)**
- **Silicon Valley Immersion (Dec 2025)** — 1 month meeting engineers, founders, and AI product teams

---

## AWARDS

**1st Place, Protocol Camp Cohort 9 (Southeast Asia)** — Shard Lab by Hashed, with FillerBot (2026) · National Science Grand Prize (Physics) · Korean Government Scholarship · Yonsei Academic Excellence · Korean Speech Contest Grand Prize · Slid Hero Award (Transparency) · Bebridge Hero Award (Focusing on Real Value)

---

## LANGUAGES SPOKEN

English (Fluent) · Kinyarwanda (Native) · Korean (Advanced) · French (Intermediate)
