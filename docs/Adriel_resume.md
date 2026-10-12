# Resume

# **Adriel Niyodusaba**

**AI Engineer / Software Engineer -**  [engineeradriel.com](https://engineeradriel.com/)

Seoul, South Korea · Open to roles in Korea & Canada

---

## **SUMMARY**

AI and Software Engineer with 5+ years building **production AI systems and the backends that run them**. Built **Proteus**, an AI + human dubbing agent that **cut human dubbing time by ~90%** and grew to **over half of company revenue** across **10+ B2B contracts**. Core builder of **Slid, Summary, and DipClip**, shipping LLM and speech/video AI pipelines end to end, from **ingestion and inference to APIs, infrastructure, and product**. Creator of **GoGrid**, an open-source framework for production AI agents in Go. Strong background in **LLM agents, RAG, speech & video AI, and cloud-native deployment** (AWS, Kubernetes, Terraform). Started the **Georgia Tech OMSCS** (M.S. Computer Science) in Fall 2026.

---

## **CORE TECHNICAL SKILLS**

- **AI / ML (Applied):** LLMs (OpenAI, Anthropic, Gemini), LangGraph, LangChain, AutoGen, RAG, Whisper / STT, TTS & voice cloning, LipSync
- **Languages:** Python, TypeScript, JavaScript, Go, Rust
- **Backend:** FastAPI, Django, Node.js, NestJS, Gin, Tokio / Axum
- **Infra:** AWS (EKS, RDS, Lambda), GCP, Docker, Kubernetes, Terraform, GitHub Actions, Grafana
- **Datastores:** PostgreSQL, MySQL, Redis, Pinecone, MongoDB
- **Media:** ffmpeg, audio/video processing pipelines

---

## **PROFESSIONAL EXPERIENCE**

**Software Engineer — AI & Backend**
Bebridge · Seoul / Global
Sep 2022 – Present

**Software Engineer (Intern → Full-time)**
Dec 2020 – Aug 2022

Lead engineer on **SaaS products: Slid, Summary, and DipClip**, shipping production AI systems end to end, later expanding into **B2B media AI**, **client AI projects**, and **backend and infrastructure** for new products.

---

## **AI PRODUCTS & SYSTEMS**

### **Proteus — AI + Human Dubbing Agent**

**Lead AI Engineer** · B2B media AI

- Designed and built **Proteus**, an AI agent for multilingual video dubbing.
- End-to-end pipeline:
    - Video ingestion and audio extraction
    - Transcription and translation via LLM agents
    - Web-assisted validation for translation accuracy
    - Voice cloning and translated audio generation
    - Iterative alignment to match **original audio duration** (non-trivial constraint)
- Reduced **human dubbing time by ~90%**, with editors focusing on validation instead of creation.
- System became a **core revenue driver**, generating **over half of company revenue** and securing **10+ B2B contracts**, including long-term clients.

**Tech:** Python, LangGraph, OpenAI, Gemini, ElevenLabs, ffmpeg, custom orchestration

### **AI-Powered Dubbing Studio (Frontend + Backend)**

- Contributed to a **web-based dubbing studio** where human editors review, correct, and approve Proteus output.
- Bridges **AI systems with human-in-the-loop UX**: seamless playback, rapid corrections, and finalization of dubbed content.

---

### **Slid — AI-Powered Note-Taking Platform for Online Learning**

**Lead Software Engineer** · Seoul, South Korea · Dec 2020 – Present

- Joined as one of the **first two engineers**; evolved from frontend intern into **lead engineer owning core product systems**.
- Introduced **AI transcription (Whisper)** during an internal hackathon, which became the foundation of Slid's **Auto-Note** feature.
- **Refactored the Chrome extension frontend** and **designed, built, and shipped** a cross-platform **desktop app (macOS & Windows)** from scratch, handling code signing and releases; desktop app grew to **~50% of active users**.
- Owned the **entire backend and cloud infrastructure** (APIs, databases, background jobs, deployments); built **global infrastructure** that significantly reduced international latency.
- **Designed and implemented recurring subscription payments**, enabling sustainable monetization.
- Represented Slid at **CES 2023 (Las Vegas)**, presenting the product and its AI capabilities to an international audience.

**Tech:** Python, FastAPI, Whisper, TypeScript, React, Electron, Node.js, PostgreSQL, ffmpeg, AWS, Docker

---

### **Summary — AI-Powered Video Digest Mobile App**

**Lead Backend Engineer** · Seoul, South Korea · 2022 – 2024

- Built and owned the **backend and AI pipeline** for a B2C mobile app that delivers **automatic summaries of newly uploaded YouTube videos**.
- Implemented end-to-end **AI pipelines**: video ingestion → transcription → LLM-based summarization → storage → user notification.
- Designed a **channel pooling and ingestion system** to monitor thousands of subscribed channels and trigger near-real-time processing on new uploads.
- Architected scalable backend services and databases to support **~10,000 users**, balancing **cost, speed, and quality** in production AI workloads.
- Represented Summary at **CES 2023 (Las Vegas)**.

**Tech:** Python, FastAPI, Whisper, GPT-4o, TypeScript, NestJS, React Native, MongoDB, PostgreSQL, AWS Lambda

---

### **DipClip — AI Short-Form Video Generation Platform**

**Lead Backend / AI Engineer** · Seoul, South Korea · 2023 – 2024

- Built the **core AI pipeline** for converting long-form videos into **short, reel-style segments** optimized for mobile consumption.
- Designed algorithms to **analyze video content**, identify key moments, and generate precise **time-range annotations** representing meaningful clips.
- Implemented backend systems for **seamless playback** that jumps across key segments while preserving narrative flow.
- Led system design and backend development for a **B2C mobile app** serving approximately **5,000 users**.

**Tech:** Python, FastAPI, Whisper, GPT-4o, TypeScript, React Native, PostgreSQL, AWS Lambda

---

## **CLIENT AI PROJECTS**

### **3Pro Investor Advisor — Financial RAG Chatbot**

- Built a chatbot answering investor questions based on **YouTube interviews with Wall Street experts**.
- Automated ingestion: detect new videos, transcribe, embed, and store in a vector DB.
- Designed retrieval to prioritize **fresh content**; responses include **source video links and timestamps** for transparency and trust.

### **KOHI — Course Knowledge Graph & Semantic Search**

- Built a **multi-level graph visualization** for thousands of courses.
- Processed large-scale course data and embedded it into **Pinecone** to enable **semantic search** alongside graph navigation.

### **Korean TTS Model Research & Deployment (Likelion)** *(Nov 2025)*

- Researched and deployed multiple **open-source Korean TTS models** on GPU servers.
- Benchmarked quality and latency across GPT-SoVITS, XTTS-v2, MeloTTS, Fish Audio, and others; helped the client select and deploy a **production-ready TTS server**.

### **Korean Lip-Sync AI Systems** *(Dec 2025)*

- Researched, deployed, and optimized **MuseTalk** and **LatentSync** for Korean lip-sync, tuned to client-specific latency and quality needs.

---

## **OPEN SOURCE**

- **GoGrid (G2)** — Creator & maintainer of a unified system for developing and orchestrating **production AI agents in Go**. [gogrid.vercel.app](https://gogrid.vercel.app/)
- **Tenuo** — Contributor to an AI agent security framework enforcing **task-scoped authority**; added the **AutoGen AgentChat integration**. [tenuo.dev](https://tenuo.dev/)

---

## **BACKEND & INFRASTRUCTURE (2026)**

### **FillerBot — Low-Latency Trading Service**

**Co-builder (team of 2)** · Jun 2026 – Present · **1st Place, Protocol Camp Cohort 9 (Southeast Asia)**, run by Shard Lab (Hashed)

- Co-built a **Rust / Tokio service** that prices and fills tokenized-equity orders in real time; **in production on two networks**.
- Built the **first version in two days**: ingestion, pricing, decision engine, shadow mode, Postgres audit log, and Grafana monitoring.
- Measured contention between concurrent submissions (**30.8%** vs. **55.6%** win rate) and redesigned around **independent submission lanes**; moved hosting to cut latency **~4x**.

**Tech:** Rust, Tokio, Go, PostgreSQL, AWS EKS, GitHub Actions, Grafana

### **DollarParking — Mobile Investing App**

**Backend & Infrastructure Lead** · Jun 2026 – Aug 2026 · Live on Google Play and [dollarparking.app](https://dollarparking.app)

- Architected the **Go/Gin backend**: order relay, price worker, cached RPC proxy, order audit trail, and fill reconciler.
- Built the shared **multi-tenant EKS / RDS platform in Terraform** (namespaces with quotas and NetworkPolicy, IRSA, GitHub OIDC deploy roles) with gated production deploys.
- Hardened **price integrity** (server-set pricing, fail-closed stale-feed gate) and resolved launch security-review findings.

**Tech:** Go, Gin, PostgreSQL, Redis, React Native (Expo), AWS EKS, Terraform

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

English (Fluent) · Kinyarwanda (Native) · Korean (Advanced, TOPIK 5) · French (Intermediate)
