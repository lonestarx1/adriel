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
    eyebrow: '소프트웨어 엔지니어 (AI · 백엔드)',
    intro:
      '프로덕션 환경에서 동작하는 백엔드, AI, 인프라 시스템을 만듭니다. 비브리지(Bebridge)에서 5년 넘게 Slid, Summary, DipClip 개발을 이끌었고, 2026년부터는 온체인 트레이딩 인프라로 영역을 넓혔습니다. 이더리움과 BNB 체인 메인넷에서 운영 중인 Rust 기반 솔버 FillerBot을 공동 개발해 해시드 샤드랩의 프로토콜 캠프 9기(동남아시아)에서 1위를 차지했고, 스테이블코인으로 미국 토큰화 주식을 거래하는 모바일 앱 DollarParking의 백엔드를 책임졌습니다.',
    focus:
      '분산 백엔드 서비스, AWS·쿠버네티스 기반 클라우드 인프라, RAG 및 음성·영상 AI 파이프라인, Web3 체결 시스템에 강점이 있습니다. 2026년 가을 학기부터 조지아공대(Georgia Tech) 온라인 컴퓨터공학 석사 과정(OMSCS)을 병행하고 있습니다.',
    location: '대한민국 서울',
    availability: '한국 · 캐나다 근무 희망',
    personal: '28세 · 르완다 국적',
    email: '이메일',
    resumeShort: '이력서 (1페이지, 영문)',
    resumeLong: '이력서 (5페이지, 영문)',
    linkedin: 'LinkedIn',
    photoAlt: 'Adriel Niyodusaba',
  },

  stats: [
    {
      value: '5년+',
      label: '프로덕션 AI · 백엔드 · 인프라 시스템 구축 경력',
    },
    {
      value: '1위',
      label: '프로토콜 캠프 9기 (동남아시아), FillerBot',
    },
    {
      value: '약 90%',
      label: 'Proteus 도입으로 단축한 사람의 더빙 작업 시간',
    },
    {
      value: '1만+ 명',
      label: 'Summary 모바일 앱이 지원한 사용자 규모',
    },
  ],

  sections: {
    skills: {
      title: '핵심 기술 역량',
      description: '백엔드, AI 시스템, Web3, 프로덕션 인프라에 집중한 기술 스택입니다.',
    },
    experience: {
      title: '경력',
      description: 'AI 파이프라인, 백엔드 아키텍처, 인프라, 제품 출시까지 엔드투엔드로 책임져 왔습니다.',
    },
    products: {
      title: '주요 제품',
      description: '최근의 온체인 트레이딩 인프라와 Slid, Summary, DipClip을 장기간 이끈 경험입니다.',
    },
    projects: {
      title: '주요 프로젝트 및 고객사',
      description: 'B2B 시스템, 고객사 프로젝트, 해커톤, 응용 연구 배포 사례입니다.',
    },
    openSource: {
      title: '오픈소스',
      description: '프로덕션급 AI 인프라와 안전성 도구를 만듭니다.',
    },
    education: {
      title: '학력, 자격증 및 수상',
      description: '학력, 수상 경력, 대외 활동입니다.',
    },
  },

  skillGroups: [
    {
      title: '프로그래밍 언어',
      items: ['Python', 'TypeScript', 'JavaScript', 'Go', 'Rust', 'Solidity'],
    },
    {
      title: '백엔드',
      items: ['Django', 'FastAPI', 'Node.js', 'NestJS', 'Gin', 'Tokio / Axum'],
    },
    {
      title: 'AI / ML (응용)',
      items: ['LangChain', 'LangGraph', 'Autogen', 'RAG', 'TTS / STT', 'LLM', '립싱크'],
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
    {
      title: 'Web3',
      items: ['UniswapX', '1inch Fusion', 'Foundry', 'alloy / viem', '지갑 개발', 'DeFi 리스크 모니터링'],
    },
  ],

  experience: [
    {
      role: '소프트웨어 엔지니어 - AI & 백엔드',
      company: '비브리지 (Bebridge)',
      period: '2022.09 - 현재',
      location: '서울 / 글로벌',
      highlights: [
        'UniswapX·1inch Fusion 주문을 체결하는 Rust 기반 솔버 FillerBot을 2인 팀으로 공동 개발. 2026년 7월부터 이더리움 메인넷, 10월부터 BNB 체인에서 운영 중이며, 해시드 샤드랩이 주관한 프로토콜 캠프 9기(동남아시아) 1위 수상',
        'USDT·USDC를 미국 토큰화 주식으로 바로 전환하는 모바일 앱 DollarParking의 Go API, AWS 인프라, CI/CD 담당 (Google Play 및 웹 출시)',
        'DollarParking과 FillerBot을 격리된 테넌트로 운영하는 사내 공용 AWS EKS 플랫폼을 Terraform으로 구축',
        'SaaS 제품 Slid, Summary, DipClip의 리드 엔지니어로서 프로덕션 AI 시스템을 엔드투엔드로 개발·출시',
        '백엔드 및 클라우드 인프라를 총괄하며 글로벌 서비스 성능 개선',
        '정기 구독 결제 시스템을 설계해 지속 가능한 수익화 기반 마련',
        'Whisper 기반 음성 인식을 도입해 Auto-Note 기능의 기반 구축',
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
      title: 'FillerBot - UniswapX · 1inch Fusion 솔버',
      role: '공동 개발 (2인 팀)',
      timeframe: '2026.06 - 현재',
      badge: '프로토콜 캠프 9기 (동남아시아) 1위',
      bullets: [
        'Ondo 토큰화 미국 주식에 대한 인텐트 주문의 가격을 산정하고 체결하는 솔버로, 이더리움 메인넷과 BNB 체인에서 운영 중',
        '주문 수집, 더치 옥션 가격 계산, 의사결정 엔진, 섀도 모드, Postgres 감사 로그, Grafana를 갖춘 봇 첫 버전을 이틀 만에 구축',
        '연속(burst) 제출 시 체결 경쟁 승률 30.8%, 단독 제출 시 55.6%임을 측정한 뒤 컨트랙트와 봇 전반에 독립적인 논스 레인 구조 설계',
        'GitHub Actions 기반 AWS EKS 배포, IRSA를 통한 Secrets Manager 연동, 서울 대비 체결 지연이 약 4배 낮은 us-east-1 BNB 체인 호스트 운영',
        'Solidity 실행 컨트랙트 확장 (GM 간 체결, 인벤토리 재고 보충, 빌더 결제) 및 배포 전 보안 리뷰 작성',
      ],
      stack: ['Rust', 'Tokio', 'alloy', 'Solidity', 'Foundry', 'Go', 'PostgreSQL', 'AWS EKS', 'Grafana'],
    },
    {
      title: 'DollarParking - 스테이블코인으로 사는 미국 토큰화 주식',
      role: '백엔드 · 인프라 리드',
      timeframe: '2026.06 - 2026.08',
      link: 'https://dollarparking.app',
      bullets: [
        'USDT·USDC를 가스비 없는 UniswapX 주문으로 Ondo 미국 토큰화 주식으로 전환하는 모바일·웹 서비스 (Google Play 및 웹 출시)',
        'Go/Gin 백엔드 설계: UniswapX 주문 릴레이, 가격 워커, 캐시 JSON-RPC 프록시, 주문 감사 로그, 체결 대사(reconciler)',
        '온체인 민팅 컨트랙트 방식에서 컨트랙트 없는 가스리스 스왑 방식으로의 전환을 컨트랙트·API·클라이언트 전반에 걸쳐 주도',
        'Terraform으로 EKS·RDS를 프로비저닝하고, 프로덕션 승인 단계를 포함한 GitHub Actions OIDC 배포 파이프라인 구축',
        '가격 무결성 강화 (서버 측 가격 설정, 시세 지연 시 거래 차단) 및 출시 전 보안 리뷰 지적 사항 해결',
      ],
      stack: ['Go', 'Gin', 'PostgreSQL', 'Redis', 'UniswapX', 'React Native (Expo)', 'Next.js', 'AWS EKS', 'Terraform'],
    },
  ],

  products: [
    {
      title: 'Slid - 온라인 학습을 위한 AI 노트 필기 서비스',
      role: '리드 소프트웨어 엔지니어',
      timeframe: '2020.12 - 현재',
      bullets: [
        'Chrome 확장 프로그램 UI를 재구축하고 코드 서명을 적용한 macOS/Windows 데스크톱 앱 출시',
        '데스크톱 앱 사용 비중이 활성 사용자의 약 50%로 성장',
        '해외 지연 시간을 줄이기 위한 백엔드 인프라 및 글로벌 배포 총괄',
        '정기 구독 결제 구현 및 Whisper 기반 Auto-Note 도입',
      ],
      stack: ['TypeScript', 'React', 'Electron', 'Python', 'FastAPI', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Summary - AI 영상 요약 모바일 앱',
      role: '리드 백엔드 엔지니어',
      timeframe: '2022 - 2024',
      bullets: [
        '새로 업로드된 YouTube 영상을 요약하는 백엔드와 AI 파이프라인 구축 및 운영',
        '구독 중인 수천 개 채널을 위한 채널 풀링 및 수집 구조 설계',
        '약 1만 명의 사용자를 지원하는 확장 가능한 서비스 제공',
        '프로덕션 AI 워크플로에서 지연 시간, 비용, 품질 간 균형 최적화',
      ],
      stack: ['TypeScript', 'NestJS', 'Python', 'FastAPI', 'MongoDB', 'PostgreSQL', 'AWS Lambda'],
    },
    {
      title: 'DipClip - 숏폼 영상 생성',
      role: '리드 백엔드 / AI 엔지니어',
      timeframe: '2023 - 2024',
      bullets: [
        '긴 영상을 모바일용 짧은 클립으로 변환하는 AI 파이프라인 구축',
        '핵심 장면을 찾아 정밀한 구간 주석을 생성하는 알고리즘 설계',
        '약 5,000명이 사용하는 B2C 앱의 백엔드 개발 리드',
      ],
      stack: ['TypeScript', 'React Native', 'Python', 'FastAPI', 'PostgreSQL', 'AWS Lambda'],
    },
  ],

  projects: [
    {
      title: 'PowerPulse - 다국어 정전 안내 어시스턴트',
      summary: 'Frontiers GenAI 해커톤 (ALX 키갈리, 2026년 7월)에서 6인 팀으로 개발.',
      link: 'https://powerpulse-africa.vercel.app/',
      bullets: [
        '영어, 키냐르완다어 또는 두 언어를 섞어 쓴 질문에도 르완다 전력공사(REG)가 공개한 정전 기록을 근거로 답변',
        '위치, 정전 시간대, 과거 이력은 코드로 계산하고 LLM은 검증된 정보를 표현·개인화하는 역할만 맡아 복구 시간을 지어내지 않음',
        '답변하지 말아야 할 범위 밖 질문을 포함한 33문항 결정론적 벤치마크로 평가',
      ],
      stack: ['Next.js', 'TypeScript', 'Gemini', 'Vercel AI SDK'],
    },
    {
      title: 'Proteus - AI + 사람 협업 더빙 에이전트',
      summary: '사람의 검수를 결합한 다국어 더빙 엔드투엔드 파이프라인.',
      bullets: [
        '음성 인식, 번역, 보이스 클로닝 워크플로를 길이 정렬과 함께 구축',
        '사람이 하는 더빙 작업 시간을 약 90% 단축',
        '10건 이상의 B2B 계약을 이끈 핵심 매출원으로 성장',
      ],
      stack: ['ffmpeg', 'ElevenLabs', 'OpenAI', 'Gemini', 'LangGraph'],
    },
    {
      title: 'AI 더빙 스튜디오',
      summary: '편집자가 더빙 결과물을 검토하고 확정하는 웹 기반 스튜디오.',
      bullets: [
        'Proteus 결과물을 연동해 재생, 수정, 승인을 매끄럽게 처리',
        'AI 시스템과 휴먼 인 더 루프(Human-in-the-loop) 워크플로를 연결',
      ],
      stack: ['웹 앱', '재생 도구', '검수 UX'],
    },
    {
      title: 'KOHI - 강좌 지식 그래프 및 시맨틱 검색',
      summary: '대규모 강좌 카탈로그를 위한 그래프 시각화와 시맨틱 검색.',
      bullets: [
        '수천 개 강좌에 대한 다단계 그래프 시각화 구축',
        '강좌 데이터를 가공해 Pinecone에 임베딩하고 시맨틱 검색 구현',
      ],
      stack: ['시각화', 'Pinecone', 'FastAPI'],
    },
    {
      title: '3Pro 투자 자문 - 금융 AI 챗봇',
      summary: 'YouTube 전문가 인터뷰를 기반으로 투자자 질문에 답하는 RAG 챗봇.',
      bullets: [
        '수집, 음성 인식, 임베딩, 벡터 저장 과정을 자동화',
        '투명성을 위해 답변에 출처 영상 링크와 타임스탬프 제공',
      ],
      stack: ['RAG', '벡터 DB', 'YouTube 수집'],
    },
    {
      title: '한국어 TTS 모델 연구 및 배포',
      summary: '오픈소스 TTS 모델을 벤치마크하고 GPU 추론 서버 배포.',
      bullets: [
        'GPT-SoVITS, XTTS-v2, MeloTTS, Fish Audio 등 평가',
        '프로덕션용 TTS 서버 구성안 제시',
      ],
      stack: ['GPU 배포', 'TTS', '벤치마킹'],
    },
    {
      title: '한국어 립싱크 AI 시스템',
      summary: '한국어 립싱크를 위한 MuseTalk, LatentSync 연구 및 배포.',
      bullets: ['고객사별 지연 시간 및 품질 목표에 맞춰 모델 최적화'],
      stack: ['MuseTalk', 'LatentSync', '모델 튜닝'],
    },
    {
      title: '크립토 지갑 및 DeFi 리스크 모니터링',
      summary: 'DeFi와 지갑 안전을 위한 보안 시스템.',
      bullets: [
        '지갑 보안 메커니즘 및 가스 최적화 워크플로 설계',
        'Aave, Compound 건전성 지표 실시간 모니터링 구축',
        '자금 구출(fund-rescue) 스마트 컨트랙트 작성 (테스트 단계)',
      ],
      stack: ['Web3', '보안', '모니터링'],
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
    '국가 과학 경진대회 대상 (물리 부문)',
    '한국 정부초청 장학생',
    '연세대학교 학업 우수상',
    '한국어 말하기 대회 대상',
    'Slid Hero Award (투명성)',
    'Bebridge Hero Award (본질적 가치에 집중)',
  ],

  exposure: ['CES 2023 발표 (라스베이거스)', '실리콘밸리 이머전 프로그램 (2025년 12월)'],

  languages: [
    { name: '영어', level: '유창' },
    { name: '키냐르완다어', level: '모국어' },
    { name: '한국어', level: '고급' },
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
    body: '한국과 캐나다에서 백엔드, 인프라, AI 엔지니어링 포지션을 찾고 있습니다. 프로덕션 시스템을 엔드투엔드로 책임지고 측정 가능한 비즈니스 성과를 낼 수 있는 역할이라면 편하게 연락 주세요.',
    linkedin: 'LinkedIn으로 연결하기',
    download: '이력서 다운로드 (PDF, 영문)',
  },

  footer: {
    location: '대한민국 서울 · 한국 · 캐나다 근무 희망',
  },
};

export default ko;
