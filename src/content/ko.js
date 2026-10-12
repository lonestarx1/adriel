const ko = {
  nav: {
    about: '소개',
    skills: '기술',
    experience: '경력',
    projects: '프로젝트',
    education: '학력',
    contact: '연락하기',
    toggleMenu: '메뉴 열기/닫기',
    switchLabel: 'English',
    switchAria: 'View this page in English',
    switchHref: '/',
  },

  hero: {
    eyebrow: 'AI 엔지니어 · 소프트웨어 엔지니어',
    intro:
      '프로덕션 환경에서 동작하는 AI 시스템과 이를 뒷받침하는 백엔드를 만듭니다. 비브리지(Bebridge)에서 5년 넘게 Slid, Summary, DipClip 개발을 이끌었고, 사람의 더빙 작업 시간을 약 90% 줄이고 회사 매출의 절반 이상을 차지하게 된 AI 더빙 에이전트 Proteus를 개발했습니다. Go 기반 프로덕션 AI 에이전트 프레임워크 GoGrid를 오픈소스로 만들고 있으며, 2026년에는 저지연 Rust 트레이딩 서비스를 공동 개발해 프로토콜 캠프 9기에서 1위를 차지했습니다.',
    focus:
      'LLM 애플리케이션과 에이전트, RAG, 음성·영상 AI 파이프라인, 그리고 이를 안정적으로 운영하기 위한 백엔드와 클라우드 인프라(AWS, 쿠버네티스, Terraform)에 강점이 있습니다. 2026년 가을 학기부터 조지아공대(Georgia Tech) 온라인 컴퓨터공학 석사 과정(OMSCS)을 병행하고 있습니다.',
    location: '대한민국 서울',
    availability: '한국 · 캐나다 근무 희망',
    personal: '28세 · 르완다 국적 · F-2 비자',
    email: '이메일',
    resumeShort: '이력서 · 경력기술서 (PDF)',
    resumeShortHref: '/docs/Adriel_resume_ko.pdf',
    resumeLong: 'Resume (English)',
    resumeLongHref: '/docs/Adriel_resume.pdf',
    linkedin: 'LinkedIn',
    photoAlt: 'Adriel Niyodusaba',
  },

  stats: [
    {
      value: '약 90%',
      label: 'AI 더빙 에이전트 Proteus로 단축한 사람의 더빙 작업 시간',
    },
    {
      value: '50% 이상',
      label: 'Proteus가 차지한 회사 매출 비중 (B2B 계약 10건 이상)',
    },
    {
      value: '1만+ 명',
      label: 'AI 영상 요약 앱 Summary 사용자 규모',
    },
    {
      value: '5년+',
      label: '프로덕션 AI · 백엔드 · 인프라 시스템 구축 경력',
    },
  ],

  sections: {
    skills: {
      title: '핵심 기술 역량',
      description: '탄탄한 백엔드와 프로덕션 인프라 위에서 동작하는 응용 AI에 집중합니다.',
    },
    experience: {
      title: '경력',
      description: 'AI 파이프라인, 백엔드 아키텍처, 인프라, 제품 출시까지 엔드투엔드로 책임져 왔습니다.',
    },
    products: {
      title: '주요 제품',
      description: '프로토타입부터 프로덕션까지 이끈 AI 제품과 최근의 백엔드 · 인프라 작업입니다.',
    },
    projects: {
      title: '주요 프로젝트 및 고객사',
      description: '고객사 AI 프로젝트, RAG · 검색 시스템, 음성 · 영상 AI 응용 연구 사례입니다.',
    },
    openSource: {
      title: '오픈소스',
      description: '프로덕션급 AI 에이전트 인프라와 안전성 도구를 만듭니다.',
    },
    education: {
      title: '학력, 자격증 및 수상',
      description: '학력, 수상 경력, 대외 활동입니다.',
    },
  },

  skillGroups: [
    {
      title: 'AI / ML (응용)',
      items: ['LLM (OpenAI, Anthropic, Gemini)', 'LangGraph', 'LangChain', 'AutoGen', 'RAG', 'Whisper / STT', 'TTS · 보이스 클로닝', '립싱크'],
    },
    {
      title: '프로그래밍 언어',
      items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Rust'],
    },
    {
      title: '백엔드',
      items: ['FastAPI', 'Django', 'Node.js', 'NestJS', 'Gin', 'Tokio / Axum'],
    },
    {
      title: '인프라',
      items: ['AWS (EKS, RDS, Lambda)', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
    },
    {
      title: '데이터 저장소',
      items: ['PostgreSQL', 'MySQL', 'Redis', 'Pinecone', 'MongoDB'],
    },
    {
      title: '미디어',
      items: ['ffmpeg', '오디오·비디오 처리 파이프라인'],
    },
  ],

  experience: [
    {
      role: '소프트웨어 엔지니어 - AI & 백엔드',
      company: '비브리지 (Bebridge)',
      period: '2022.09 - 현재',
      location: '서울 / 글로벌',
      highlights: [
        '음성 인식, 번역, 보이스 클로닝, 길이 정렬을 결합한 AI + 사람 협업 더빙 에이전트 Proteus를 개발해 사람의 더빙 작업 시간을 약 90% 단축하고, 10건 이상의 B2B 계약으로 회사 매출의 절반 이상을 차지하는 핵심 사업으로 성장',
        'SaaS 제품 Slid, Summary, DipClip의 리드 엔지니어로서 LLM 및 음성·영상 AI 파이프라인을 엔드투엔드로 개발·출시',
        'Whisper 기반 음성 인식을 도입해 Slid Auto-Note 기능의 기반 구축',
        'RAG 챗봇, 강좌 시맨틱 검색, GPU 서버 기반 한국어 TTS · 립싱크 배포 등 고객사 AI 시스템 납품',
        '백엔드 및 클라우드 인프라를 총괄하고 정기 구독 결제 시스템 설계',
        '2026년 저지연 Rust 트레이딩 서비스 FillerBot을 공동 개발(프로토콜 캠프 9기 1위)하고, DollarParking 앱의 Go 백엔드와 Terraform 기반 멀티 테넌트 AWS EKS 플랫폼 구축을 리드',
        '신규 입사자와 인턴의 온보딩 및 멘토링을 맡아 빠르게 프로덕션 시스템에 기여하도록 지원',
      ],
    },
    {
      role: '소프트웨어 엔지니어 (인턴 - 풀타임)',
      company: '비브리지 (Bebridge)',
      period: '2020.12 - 2022.08',
      location: '대한민국 서울',
      highlights: [
        '크로스플랫폼 Slid 데스크톱 앱(macOS/Windows)을 코드 서명과 릴리스까지 포함해 설계·개발·출시, 활성 사용자의 약 50%가 사용하는 앱으로 성장',
        'Slid 초기 영상 노트 필기 기능과 사내 도구 개발에 참여',
        '최신 React/TypeScript 프론트엔드 스택으로의 마이그레이션 지원',
        '초기 AWS 인프라 및 배포 워크플로 구축에 기여',
      ],
    },
  ],

  featuredProducts: [
    {
      title: 'Proteus - AI + 사람 협업 더빙 에이전트',
      role: '리드 AI 엔지니어',
      timeframe: 'B2B 미디어 AI',
      bullets: [
        '영상 수집, 음성 인식, 웹 검증을 곁들인 LLM 번역, 보이스 클로닝, 더빙 음성 생성까지 이어지는 에이전트 파이프라인',
        '번역된 음성이 원본 길이에 맞도록 반복 정렬하는 구조 설계 (더빙의 까다로운 제약 조건)',
        '사람의 더빙 작업 시간을 약 90% 단축해 편집자가 제작 대신 검수에 집중하도록 전환',
        '회사 매출의 절반 이상, 장기 고객사를 포함한 10건 이상의 B2B 계약을 이끈 핵심 매출원으로 성장',
      ],
      stack: ['Python', 'LangGraph', 'OpenAI', 'Gemini', 'ElevenLabs', 'ffmpeg'],
    },
    {
      title: 'Slid - 온라인 학습을 위한 AI 노트 필기 서비스',
      role: '리드 소프트웨어 엔지니어',
      timeframe: '2020.12 - 현재',
      bullets: [
        '초기 엔지니어 2명 중 한 명으로 합류해 핵심 제품 시스템을 책임지는 리드 엔지니어로 성장',
        '사내 해커톤에서 Whisper 기반 음성 인식을 도입했고, 이것이 Auto-Note 기능의 기반이 됨',
        '코드 서명을 적용한 macOS/Windows 데스크톱 앱을 출시해 활성 사용자의 약 50%가 사용',
        '백엔드와 글로벌 클라우드 인프라를 총괄하고 정기 구독 결제 구현',
      ],
      stack: ['Python', 'FastAPI', 'Whisper', 'TypeScript', 'React', 'Electron', 'PostgreSQL', 'AWS'],
    },
  ],

  products: [
    {
      title: 'Summary - AI 영상 요약 모바일 앱',
      role: '리드 백엔드 엔지니어',
      timeframe: '2022 - 2024',
      bullets: [
        '새 YouTube 영상의 수집, 음성 인식, LLM 요약, 저장, 사용자 알림까지 이어지는 AI 파이프라인 구축',
        '구독 중인 수천 개 채널을 위한 채널 풀링 및 수집 구조 설계',
        '지연 시간, 비용, 품질의 균형을 맞추며 약 1만 명의 사용자에게 서비스',
      ],
      stack: ['Python', 'FastAPI', 'Whisper', 'GPT-4o', 'NestJS', 'MongoDB', 'AWS Lambda'],
    },
    {
      title: 'DipClip - AI 숏폼 영상 생성',
      role: '리드 백엔드 / AI 엔지니어',
      timeframe: '2023 - 2024',
      bullets: [
        '긴 영상을 모바일용 짧은 클립으로 변환하는 AI 파이프라인 구축',
        '핵심 장면을 찾아 정밀한 구간 주석을 생성하는 알고리즘 설계',
        '약 5,000명이 사용하는 B2C 앱의 백엔드 개발 리드',
      ],
      stack: ['Python', 'FastAPI', 'Whisper', 'GPT-4o', 'PostgreSQL', 'AWS Lambda'],
    },
    {
      title: 'FillerBot - 저지연 트레이딩 서비스',
      role: '공동 개발 (2인 팀)',
      timeframe: '2026.06 - 현재',
      badge: '프로토콜 캠프 9기 (동남아시아) 1위',
      bullets: [
        '토큰화 주식 주문의 가격을 실시간으로 산정하고 체결하는 Rust/Tokio 서비스로, 두 개 네트워크에서 운영 중',
        '수집, 가격 계산, 의사결정 엔진, 섀도 모드, Postgres 감사 로그, Grafana를 갖춘 첫 버전을 이틀 만에 구축',
        '동시 제출 간 경합을 측정해 독립 제출 레인 구조로 재설계하고, 호스팅 위치를 옮겨 지연 시간을 약 4배 단축',
      ],
      stack: ['Rust', 'Tokio', 'Go', 'PostgreSQL', 'AWS EKS', 'Grafana'],
    },
    {
      title: 'DollarParking - 모바일 투자 앱',
      role: '백엔드 · 인프라 리드',
      timeframe: '2026.06 - 2026.08',
      link: 'https://dollarparking.app',
      bullets: [
        'Go/Gin 백엔드 설계: 주문 릴레이, 가격 워커, 캐시 RPC 프록시, 감사 로그, 체결 대사(reconciler)',
        'Terraform으로 멀티 테넌트 AWS EKS · RDS 공용 플랫폼을 구축하고, 프로덕션 승인 단계를 포함한 GitHub Actions OIDC 배포 구성',
        '서버 측 가격 설정과 시세 지연 시 거래를 차단하는 장치로 가격 무결성 강화',
      ],
      stack: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'AWS EKS', 'Terraform'],
    },
  ],

  projects: [
    {
      title: 'AI 더빙 스튜디오',
      summary: '편집자가 Proteus 결과물을 검토하고 확정하는 웹 기반 스튜디오.',
      bullets: [
        'Proteus 결과물을 연동해 재생, 수정, 승인을 매끄럽게 처리',
        'AI 시스템과 휴먼 인 더 루프(Human-in-the-loop) 워크플로를 연결',
      ],
      stack: ['휴먼 인 더 루프', '재생 도구', '검수 UX'],
    },
    {
      title: '3Pro 투자 자문 - 금융 AI 챗봇',
      summary: 'YouTube 전문가 인터뷰를 기반으로 투자자 질문에 답하는 RAG 챗봇.',
      bullets: [
        '수집, 음성 인식, 임베딩, 벡터 저장 과정을 자동화',
        '최신 콘텐츠를 우선 검색하고, 답변에 출처 영상 링크와 타임스탬프 제공',
      ],
      stack: ['RAG', '벡터 DB', 'Whisper', 'YouTube 수집'],
    },
    {
      title: 'KOHI - 강좌 지식 그래프 및 시맨틱 검색',
      summary: '대규모 강좌 카탈로그를 위한 그래프 시각화와 시맨틱 검색.',
      bullets: [
        '수천 개 강좌에 대한 다단계 그래프 시각화 구축',
        '강좌 데이터를 가공해 Pinecone에 임베딩하고 시맨틱 검색 구현',
      ],
      stack: ['임베딩', 'Pinecone', 'FastAPI', '시각화'],
    },
    {
      title: '한국어 TTS 모델 연구 및 배포',
      summary: '오픈소스 TTS 모델을 벤치마크하고 GPU 추론 서버 배포.',
      bullets: [
        'GPT-SoVITS, XTTS-v2, MeloTTS, Fish Audio 등을 품질과 지연 시간 기준으로 평가',
        '프로덕션용 TTS 서버 구성안 제시 및 배포',
      ],
      stack: ['GPU 추론', 'TTS', '벤치마킹'],
    },
    {
      title: '한국어 립싱크 AI 시스템',
      summary: '한국어 립싱크를 위한 MuseTalk, LatentSync 연구 및 배포.',
      bullets: ['고객사별 지연 시간 및 품질 목표에 맞춰 모델 최적화'],
      stack: ['MuseTalk', 'LatentSync', '모델 튜닝'],
    },
  ],

  openSource: [
    {
      title: 'GoGrid (G2)',
      description: 'Go로 프로덕션 AI 에이전트를 개발하고 오케스트레이션하는 통합 시스템.',
      role: '제작자 · 메인테이너',
      link: 'https://gogrid.vercel.app/',
    },
    {
      title: 'Tenuo',
      description: '암호학적으로 범위가 제한된 작업 단위 권한을 AI 에이전트에 부여하는 권한 엔진 (Rust 코어).',
      role: '컨트리뷰터: AutoGen AgentChat 연동 기능 추가',
      link: 'https://tenuo.dev/',
    },
  ],

  education: [
    {
      title: '컴퓨터공학 석사 (OMSCS, 온라인 과정)',
      org: '조지아공과대학교 (Georgia Institute of Technology)',
      timeframe: '2026년 가을 학기 입학 · 재학 중',
    },
    {
      title: '학사 (BSc Bioengineering)',
      org: '연세대학교 (QS 2026 세계 50위권)',
      timeframe: '2017 - 2022',
    },
    {
      title: 'AWS Certified Solutions Architect - Associate',
      org: 'Amazon Web Services',
      timeframe: '2022년 5월 취득',
    },
  ],

  awards: [
    '프로토콜 캠프 9기 (동남아시아) 1위, 해시드 샤드랩 주관, FillerBot (2026)',
    '국가 과학 경진대회 물리 부문 대상 (KOICA · 르완다 교육부, 2014)',
    '한국 정부초청 장학생',
    '연세대학교 학업 우수상',
    '한국어 말하기 대회 대상 (신라대학교, 2016)',
    'Slid Hero Award (투명성)',
    'Bebridge Hero Award (본질적 가치에 집중)',
  ],

  exposure: ['CES 2023 발표 (라스베이거스)', '실리콘밸리 이머전 프로그램 (2025년 12월)'],

  languages: [
    { name: '영어', level: '유창' },
    { name: '키냐르완다어', level: '모국어' },
    { name: '한국어', level: '고급 (TOPIK 5급)' },
    { name: '프랑스어', level: '중급' },
  ],

  labels: {
    visit: '바로가기',
    educationCard: '학력 및 자격증',
    awardsCard: '수상',
    exposureCard: '대외 활동 및 언어',
    exposure: '대외 활동',
    languages: '언어',
  },

  contact: {
    title: '오래 가는 시스템을 함께 만들어요.',
    body: '한국과 캐나다에서 AI 엔지니어 및 소프트웨어 엔지니어 포지션을 찾고 있습니다. 프로덕션 시스템을 엔드투엔드로 책임지고 측정 가능한 비즈니스 성과를 낼 수 있는 역할이라면 편하게 연락 주세요.',
    linkedin: 'LinkedIn으로 연결하기',
    download: '이력서 · 경력기술서 다운로드 (PDF)',
    downloadHref: '/docs/Adriel_resume_ko.pdf',
  },

  footer: {
    location: '대한민국 서울 · 한국 · 캐나다 근무 희망',
  },
};

export default ko;
