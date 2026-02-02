# Resume

# **Adriel Niyodusaba**

**Software Engineer (AI & Backend) -**  [engineeradriel.com](https://engineeradriel.com/)

Seoul, South Korea · Open to US / Canada / Korea / Remote

---

## **SUMMARY**

Software Engineer specializing in **AI-powered backend systems and applied machine learning**, with 4+ years of experience building and scaling **production products** in media, video, and language technology. Core builder of **Slid, Summary, and Dipclip**, shipping end-to-end systems spanning **AI pipelines, backend APIs, frontend tools, and infrastructure**. Strong background in **RAG systems, speech & video AI, agent pipelines, and cloud-native deployment**, with growing focus on **security, Web3, and AI safety**.

---

## **CORE TECHNICAL SKILLS**

- **Languages:** Python, TypeScript, JavaScript, Go, Rust
- **Backend:** Django, FastAPI, Node.js, Nest Js, Gin
- **AI / ML (Applied):** Langchain, Langgraph, Autogen, TTS, STT, LipSync, RAG, LLMs
- **Infra:** AWS, GCP, Docker, Kubernetes, Terraform
- **Datastores:** PostgreSQL, MySQL, Redis, Pinecone, MongoDB
- **Web3:** Wallet Development
- **Media:** ffmpeg, audio/video processing pipelines

---

## **PROFESSIONAL EXPERIENCE**

**Software Engineer — AI & Backend**
Bebridge · Seoul / Global
Sep 2022 – Present

**Software Engineer (Intern → Full-time)**
Dec 2020 – Aug 2022

Lead engineer on **SaaS products: Slid, Summary, and Dipclip**, shipping production AI systems end to end, later expanding into **B2B media AI**, **client projects**, and **Web3 initiatives**.

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

## **WEB3 & SECURITY (RECENT)**

### **Crypto Wallet & DeFi Risk Monitoring** *(Jan 2026 – Present)*

- Designing **wallet security mechanisms** and **gas fee optimization**.
- Built a system to monitor **Aave and Compound health metrics in real time**.
- Authored a **fund-rescue smart contract** to protect user funds during abnormal conditions (testing phase).

---

## **OPEN SOURCE CONTRIBUTION**

- **Tenuo** — AI agent security framework enforcing **task-scoped authority**
    
    [https://tenuo.dev/](https://tenuo.dev/)
    

---

## **EDUCATION & CERTIFICATIONS**

- **BSc Bioengineering** — Yonsei University (Global Top #50, QS 2026) (2017-2022)
- **AWS Solutions Architect – Associate**

---

## **PROFESSIONAL EXPOSURE**

- **CES 2023 Presenter (Las Vegas)**
- **Silicon Valley Immersion (Dec 2025)** — 1 month meeting engineers, founders, and AI product teams

---

## AWARDS

National Science Grand Prize (Physics) · Korean Government Scholarship · Yonsei Academic Excellence · Korean Speech Contest Grand Prize · Slid Hero Award (Transparency) · Bebridge Hero Award (Focusing on Real Value)

---

## LANGUAGES SPOKEN

English (Fluent) · Kinyarwanda (Native) · Korean (Advanced) · French (Intermediate)
