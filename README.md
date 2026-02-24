# 임정빈 포트폴리오

[![Vercel Deploy](https://img.shields.io/badge/Vercel-배포중-black?logo=vercel)](https://jeong-bin.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

> 🔗 **배포 주소**: https://jeong-bin.vercel.app

---

## 소개

프론트엔드 개발자 임정빈의 포트폴리오 사이트입니다.
Velog 블로그 글을 실시간으로 연동하여 새 글 작성 시 자동으로 포트폴리오에 반영됩니다.

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | Vite 6, React 18, React Router DOM v6 |
| Style | Tailwind CSS 4 |
| Animation | GSAP, Split Type |
| Blog 연동 | Velog GraphQL API, react-markdown, react-syntax-highlighter |
| Deploy | Vercel (Serverless Function 포함) |

---

## 주요 기능

- **홈** — 소개·프로젝트·스킬·깃허브 카드, 마우스 패럴랙스 배경 애니메이션
- **블로그** — Velog API 실시간 연동 (새 글 작성 시 자동 반영, 마크다운 렌더링)
- **프로젝트** — 로컬 마크다운 파일로 프로젝트 상세 내용 렌더링
- **소개** — 경력·교육·수상·자격 이력 테이블
- **스킬** — 보유 기술 스택 카드

---

## 프로젝트 구조

```
├── api/
│   └── velog.js          # Vercel Serverless Function (Velog CORS 프록시)
├── content/
│   └── portfolio/        # 프로젝트 상세 마크다운 파일
├── src/
│   ├── components/       # 재사용 컴포넌트
│   ├── pages/            # 라우트 단위 페이지
│   ├── styles/           # 전역 CSS
│   └── utils/
│       └── portfolio.js  # 마크다운 파싱 유틸
├── static/               # 폰트 등 정적 파일
├── index.html
├── vite.config.js
└── vercel.json
```

---

## 로컬 실행

```bash
npm install
npm start     # → http://localhost:5173
```

---

## 배포

GitHub `master` 브랜치에 push 시 Vercel 자동 배포
