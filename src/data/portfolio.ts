export const profile = {
  name: "Armin Bakhshi",
  firstName: "Armin",
  role: "Frontend Developer",
  stack: "TypeScript · React · Next.js",
  tagline:
    "I build fast, accessible web apps with TypeScript, React and Next.js — from Web3 dashboards to CMS, E2E and B2B products.",
  summary:
    "Frontend developer with deep expertise in TypeScript, React and Next.js. I have hands-on experience integrating backend services and shipping Web3, CMS, end-to-end and B2B products used by real customers.",
  email: "arminbkh0921@gmail.com",
  location: "Remote · Worldwide",
  avatar: "/me.jpeg",
  availability: "Open to work",
  bookingUrl: "https://cal.com/armin-bakhshi",
  github: "https://github.com/armin-bkh",
  linkedin: "https://www.linkedin.com/in/armin-bakhshi/",
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  tagline: string;
  description: string[];
  stack: string[];
  role: string;
  timeline: string;
  liveUrl: string;
  repoUrl: string;
  hue: number;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "pulse-web3-dashboard",
    title: "Pulse — Web3 Portfolio Dashboard",
    year: "2025",
    category: "Web3 · Next.js",
    tagline:
      "A multi-wallet Web3 dashboard with live prices, transaction history and gas-aware UX across Ethereum and L2s...",
    description: [
      "Pulse is a multi-wallet Web3 portfolio dashboard built with Next.js and TypeScript. It aggregates balances, live prices and transaction history across Ethereum and major L2s into a single fast interface.",
      "I owned the frontend end to end: wallet connection flows with wagmi and viem, server-cached price feeds with stale-while-revalidate, and a transaction table virtualized for tens of thousands of rows. I also worked closely with backend services for indexing and webhook delivery.",
      "The result was a sub-second interactive experience with optimistic UI, skeleton states and full keyboard accessibility.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "wagmi",
      "viem",
      "TanStack Query",
      "Tailwind",
    ],
    role: "Senior Frontend Developer",
    timeline: "Jan 2025 — Jun 2025",
    liveUrl: "#",
    repoUrl: "#",
    hue: 222,
    highlights: [
      "Multi-wallet connect with ENS resolution and network switching",
      "Virtualized transaction history for 50k+ rows",
      "SWR-cached price feeds with 5s revalidation",
      "Gas-aware transaction composer with simulation preview",
    ],
  },
  {
    slug: "northwind-headless-cms",
    title: "Northwind — Headless CMS Platform",
    year: "2024",
    category: "CMS · B2B",
    tagline:
      "A headless CMS with visual page builder, role-based access and instant preview for marketing teams...",
    description: [
      "Northwind is a headless CMS platform for marketing teams: collections, a visual page builder, role-based access and instant preview, all backed by a typed content API.",
      "I built the studio frontend in React and Next.js — drag-and-drop block editing, live preview via draft mode, and a schema builder that generates TypeScript types for consumers. I integrated the backend content APIs and webhook-based revalidation.",
      "Editors publish pages without developers while engineers keep full type safety from schema to render.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "tRPC",
      "PostgreSQL",
      "Draft Mode",
      "Zod",
    ],
    role: "Frontend Developer",
    timeline: "Mar 2024 — Nov 2024",
    liveUrl: "#",
    repoUrl: "#",
    hue: 160,
    highlights: [
      "Drag-and-drop page builder with undo/redo history",
      "Instant draft preview with on-demand revalidation",
      "Schema builder generating end-to-end TypeScript types",
      "RBAC with per-collection permissions",
    ],
  },
  {
    slug: "tradelink-b2b-marketplace",
    title: "TradeLink — B2B Marketplace",
    year: "2024",
    category: "B2B · E2E",
    tagline:
      "An end-to-end B2B marketplace: quotes, bulk ordering, invoicing and a seller portal in one codebase...",
    description: [
      "TradeLink is an end-to-end B2B marketplace coveringRFQ, bulk ordering, invoicing and a seller portal. It serves buyers and sellers from a single Next.js codebase with strict performance budgets.",
      "I implemented the quote-to-order flow, bulk cart with tiered pricing, and the seller dashboard with order analytics. I worked with backend services for payments, invoicing and notifications, keeping every mutation optimistic with rollback.",
      "Conversion on quote acceptance rose after a redesign of the checkout into a guided, three-step flow.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Stripe",
      "React Hook Form",
      "Recharts",
    ],
    role: "Senior Frontend Developer",
    timeline: "Jun 2024 — Dec 2024",
    liveUrl: "#",
    repoUrl: "#",
    hue: 28,
    highlights: [
      "Guided quote-to-order flow with tiered bulk pricing",
      "Seller portal with order analytics and exports",
      "Optimistic mutations with rollback everywhere",
      "PDF invoice rendering on the edge",
    ],
  },
  {
    slug: "insight-saas-analytics",
    title: "Insight — B2B SaaS Analytics",
    year: "2023",
    category: "B2B · Data",
    tagline:
      "Self-serve product analytics for B2B teams: funnels, cohorts and dashboards that load in milliseconds...",
    description: [
      "Insight gives B2B teams self-serve product analytics — funnels, cohorts and shareable dashboards — with millisecond loads over large event volumes.",
      "I built the dashboarding frontend: a chart system on top of a typed query builder, URL-serializable dashboard state for sharing, and virtualized tables for raw event inspection. I collaborated with backend engineers on aggregation APIs and caching.",
      "Dashboard load times dropped by 60% after introducing edge caching and incremental static regeneration for shared views.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "ECharts",
      "Zustand",
      "Playwright",
    ],
    role: "Frontend Developer",
    timeline: "Feb 2023 — Oct 2023",
    liveUrl: "#",
    repoUrl: "#",
    hue: 265,
    highlights: [
      "Typed visual query builder with URL-shareable state",
      "Virtualized event tables for million-row datasets",
      "Shareable dashboards with edge caching",
      "Full E2E coverage with Playwright",
    ],
  },
  {
    slug: "mintyard-nft-storefront",
    title: "Mintyard — NFT Storefront",
    year: "2023",
    category: "Web3 · E2E",
    tagline:
      "An end-to-end NFT storefront with minting, auctions and creator royalties, tuned for mobile wallets...",
    description: [
      "Mintyard is an end-to-end NFT storefront: collection pages, minting, timed auctions and creator royalties, tuned for mobile wallets and low-end devices.",
      "I built the minting flows with simulation and clear failure states, the auction UI with live countdowns over websockets, and media pipelines with lazy loading and blur-up placeholders. Backend services handled metadata indexing and royalty distribution.",
      "Mobile conversion improved significantly after cutting JS payload by 40% and moving media to edge-optimized formats.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "ethers.js",
      "WebSockets",
      "Vercel Edge",
      "Vitest",
    ],
    role: "Frontend Developer",
    timeline: "Jul 2023 — Dec 2023",
    liveUrl: "#",
    repoUrl: "#",
    hue: 330,
    highlights: [
      "Minting flows with pre-flight simulation",
      "Live auctions over websockets with countdown sync",
      "Edge-optimized media with blur-up loading",
      "40% smaller JS payload for mobile wallets",
    ],
  },
  {
    slug: "ledgerly-commerce-suite",
    title: "Ledgerly — E2E Commerce Suite",
    year: "2022",
    category: "E2E · CMS",
    tagline:
      "An end-to-end commerce suite: storefront, CMS-driven landing pages and order management for SMBs...",
    description: [
      "Ledgerly is an end-to-end commerce suite for SMBs: a fast storefront, CMS-driven landing pages and a lightweight order manager.",
      "I built the storefront with ISR for product pages, the CMS landing renderer with A/B slots, and checkout with address validation and tax estimation. I integrated backend services for inventory, orders and email receipts.",
      "Lighthouse scores stayed above 95 while supporting fully editor-controlled landing pages.",
    ],
    stack: ["TypeScript", "React", "Next.js", "Sanity", "Cypress", "Vercel"],
    role: "Frontend Developer",
    timeline: "Jan 2022 — Nov 2022",
    liveUrl: "#",
    repoUrl: "#",
    hue: 190,
    highlights: [
      "ISR storefront with 95+ Lighthouse scores",
      "CMS landing renderer with A/B slots",
      "Checkout with address validation and tax estimates",
      "Cypress E2E suite on every deploy",
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Novacart · B2B Commerce",
    role: "Senior Frontend Developer",
    period: "2023 — Present",
    location: "Remote",
    summary:
      "Lead frontend for a B2B ordering platform serving distributors and retailers.",
    bullets: [
      "Own the Next.js + TypeScript storefront and seller portal used by 2,000+ business buyers.",
      "Rebuilt quote-to-order into a guided flow; increased quote acceptance by 24%.",
      "Introduced design-system components, visual regression tests and a 200ms interaction budget.",
      "Integrate backend services for pricing, invoicing, payments and notifications with optimistic UI.",
    ],
  },
  {
    company: "Chainlabs · Web3",
    role: "Frontend Developer",
    period: "2022 — 2023",
    location: "Remote",
    summary: "Built wallet-facing Web3 products across Ethereum and L2s.",
    bullets: [
      "Shipped multi-wallet dashboards and NFT minting flows with wagmi, viem and ethers.js.",
      "Cut mobile JS payload by 40% via route-level code splitting and edge media.",
      "Built websocket-driven auction UIs with synced countdowns and outbid alerts.",
      "Added Vitest + Playwright coverage that caught regressions before mainnet releases.",
    ],
  },
  {
    company: "Pagestudio · CMS",
    role: "Frontend Developer",
    period: "2021 — 2022",
    location: "Hybrid",
    summary: "Worked on a headless CMS studio for marketing teams.",
    bullets: [
      "Built drag-and-drop page builder blocks with undo/redo and live draft preview.",
      "Generated end-to-end TypeScript types from content schemas with Zod.",
      "Worked with backend engineers on webhook revalidation and preview infrastructure.",
      "Raised Lighthouse scores above 95 across all studio-generated sites.",
    ],
  },
  {
    company: "Freelance & Agency",
    role: "Junior Web Developer",
    period: "2020 — 2021",
    location: "On-site",
    summary:
      "Delivered marketing sites, shops and dashboards for agency clients.",
    bullets: [
      "Shipped 12+ responsive sites in React and Next.js for SMB and startup clients.",
      "Integrated REST/GraphQL backends, auth flows and CMS content.",
      "Set up analytics, SEO basics and E2E smoke tests with Cypress.",
    ],
  },
];

export const skills: { area: string; items: string[] }[] = [
  {
    area: "Frontend",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "HTML & CSS",
      "Zustand",
      "Redux",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    area: "Backend",
    items: [
      "Node.js",
      "tRPC",
      "REST",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
      "Server Actions",
      "Webhooks",
    ],
  },
  {
    area: "Data",
    items: [
      "TanStack Query",
      "SWR",
      "Zod",
      "Recharts",
      "ECharts",
      "Virtualization",
      "ISR & Caching",
    ],
  },
  {
    area: "Auth",
    items: [
      "NextAuth.js",
      "OAuth 2.0",
      "JWT",
      "RBAC",
      "Session handling",
      "Clerk",
    ],
  },
  {
    area: "Web3",
    items: [
      "wagmi",
      "viem",
      "ethers.js",
      "WalletConnect",
      "ENS",
      "IPFS",
      "Smart-contract reads",
    ],
  },
  {
    area: "Testing",
    items: [
      "Vitest",
      "Playwright",
      "Cypress",
      "Testing Library",
      "E2E pipelines",
      "Visual regression",
    ],
  },
];

export const education = [
  {
    school: "B.Sc. Computer Engineering",
    org: "University — placeholder",
    period: "2016 — 2020",
    detail:
      "Focus on software engineering, databases and computer networks. Replace with your real degree.",
  },
  {
    school: "Meta Front-End Developer Professional Certificate",
    org: "Coursera — placeholder",
    period: "2021",
    detail:
      "Advanced React, testing and UI principles. Replace with your real certificates.",
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];
