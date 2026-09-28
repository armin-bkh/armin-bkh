export const profile = {
  name: "Armin Bakhshi",
  firstName: "Armin",
  role: "Frontend Developer",
  stack: "TypeScript · React · Next.js",
  tagline:
    "I build fast, accessible web apps with TypeScript, React and Next.js — from Web3 games and trading apps to backend-driven platforms.",
  summary:
    "Frontend developer with deep expertise in TypeScript, React and Next.js. I have hands-on experience integrating backend services and shipping Web3, DeFi and backend-driven products used by real customers.",
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
  cover?: string;
  gallery?: string[];
  status?: "offline";
  links?: { label: string; href: string }[];
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "prc-pixel-race-club",
    title: "PRC — Pixel Race Club",
    year: "2025",
    category: "Web3 · Gaming",
    tagline:
      "A play-to-earn pixel racing game with XP, coins, mint eligibility and a full player dashboard — Unity WebGL powered by wagmi on Abstract...",
    description: [
      "PRC (Pixel Race Club) is a Web3 play-to-earn racing game: players race in Unity, earn XP and coins, and unlock eligibility to mint NFTs. Around the game sits a powerful player dashboard for profile management, NFT inventory, staking, leaderboard and match history.",
      "I owned the frontend and Web3 integration: launched the Unity build in the browser with react-unity-webgl, wired wallet sessions and game events to the web app with wagmi and viem, and integrated Abstract Network smart contracts for minting and stake/unstake. I built the dashboard — editable profile data, NFT gallery with stake/unstake flows, leaderboard and matches list — with optimistic UI and contract-state syncing.",
      "The result was a single seamless loop: connect wallet → play races → see XP/coins update → check mint eligibility → manage and stake NFTs — all without leaving the app.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Unity",
      "react-unity-webgl",
      "wagmi",
      "viem",
      "Abstract Network",
      "TanStack Query",
      "Tailwind",
    ],
    role: "Frontend Developer · Web3 Integration",
    timeline: "Jan 2025 — Sep 2025",
    liveUrl: "https://x.com/PixelRaceClub",
    repoUrl: "#",
    hue: 8,
    cover: "/prc/cover.png",
    gallery: [
      "/prc/8.jpeg",
      "/prc/1.png",
      "/prc/2.png",
      "/prc/3.png",
      "/prc/4.png",
      "/prc/5.png",
      "/prc/6.png",
      "/prc/7.png",
    ],
    highlights: [
      "Unity WebGL game embedded via react-unity-webgl with wallet-gated sessions",
      "Play-to-earn loop: XP, coins and on-chain mint eligibility synced to dashboard",
      "Dashboard with profile management, NFT inventory and stake/unstake flows",
      "Leaderboard and matches list with live ranks, plus Abstract mint integration",
    ],
  },
  {
    slug: "aih-all-in-hype",
    title: "AIH — All In Hype",
    year: "2025",
    category: "Web3 · DeFi",
    tagline:
      "A professional Hyperliquid trading app as a Telegram Mini App — wallet, spot, perps, transfers and rewards, mirroring the trading bot...",
    description: [
      "AIH (All In Hype) is a professional trading app built on Hyperliquid and delivered as a Telegram Mini App inside a trading bot. Users create an account once and get every bot feature in the app: wallet, asset management, deposit, withdraw, transfer, spot and perpetual trading, plus a rewarding system.",
      "I owned frontend development and the Telegram Mini App integration: the full app shell with Telegram theme, viewport and back-button behavior, wallet and asset screens, money-movement flows with clear pending/success states, spot and perp trading interfaces over live market data, and the rewards experience — all calling Hyperliquid-backed services with optimistic UI.",
      "The result was a complete trading terminal living inside Telegram: no installs, no context switching between bot and app, and a mobile-first flow from account creation to first trade in minutes.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Telegram Mini Apps SDK",
      "Hyperliquid",
      "TanStack Query",
      "Tailwind",
    ],
    role: "Frontend Developer · Telegram Mini App",
    timeline: "2025",
    liveUrl: "#",
    repoUrl: "#",
    hue: 140,
    status: "offline",
    cover: "/aih/cover.png",
    gallery: [
      "/aih/1.png",
      "/aih/2.jpeg",
      "/aih/3.jpeg",
      "/aih/4.jpeg",
      "/aih/demo-1.mp4",
      "/aih/demo-2.mp4",
    ],
    highlights: [
      "Telegram Mini App with native theme, viewport and navigation behavior",
      "Wallet and asset management with deposit, withdraw and transfer flows",
      "Spot and perpetual trading interfaces over live Hyperliquid markets",
      "Rewarding system with points, history and claim flows",
    ],
  },
  {
    slug: "sunday-solar-landing",
    title: "Sunday Solar — Backend-Driven Landing",
    year: "2025",
    category: "Backend · B2C",
    tagline:
      "A fully backend-driven landing page for a solar installer — every text, image and section served from Strapi with PostgreSQL, zero static copy...",
    description: [
      "Sunday Solar designs and installs intelligent, integrated systems of solar panels, heat pumps and battery storage for maximum energy independence and minimal energy costs — from initial consultation and planning through to turnkey installation. The marketing site is a professional landing page where literally every piece of content comes from the backend.",
      "I built the Next.js frontend on top of a Strapi + PostgreSQL backend: dynamic landing sections, rich-text blocks via the Strapi Blocks renderer, multilingual content with next-intl, and validated lead/quote forms with reCAPTCHA and Maps integration. Not a single text in the frontend is static — everything resolves through typed API queries.",
      "Content editors publish and translate pages without touching code, while the frontend stays fast with lazy-loaded scripts and media, image optimization and strict TypeScript end to end.",
    ],
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "Strapi",
      "PostgreSQL",
      "next-intl",
      "Tailwind",
      "React Hook Form",
    ],
    role: "Frontend Developer",
    timeline: "2025",
    liveUrl: "https://sundaysolar.de",
    repoUrl: "#",
    hue: 55,
    cover: "/sundaysolar/cover.png",
    gallery: [
      "/sundaysolar/4.png",
      "/sundaysolar/1.png",
      "/sundaysolar/2.png",
      "/sundaysolar/3.png",
    ],
    highlights: [
      "100% backend-driven content — zero static copy in the frontend",
      "Dynamic landing sections with Strapi rich-text Blocks rendering",
      "Multilingual site with next-intl locale routing",
      "Lead and quote forms with validation, reCAPTCHA and Maps",
    ],
  },
  {
    slug: "treejer-ranger-app",
    title: "Treejer — Ranger App",
    year: "2024",
    category: "Web3 · Mobile",
    tagline:
      "A cross-platform climate-finance app connecting tree funders with rural planters — DeFi, NFTs and smart contracts, shipped to Android and web from one codebase...",
    description: [
      "Treejer is an open protocol that connects tree funders to rural planters worldwide, using DeFi, NFTs and smart contracts to unlock climate finance and rural development. Unlike plant-and-forget schemes, its incentive design sustains trees after plantation and builds toward a hyper-liquid global carbon market — work that extended to local communities in Iran with UNICEF Iran.",
      "I built the Ranger app cross-platform with React Native and react-native-web: a single codebase published to Android and the web. I integrated wallets and smart-contract interactions with web3.js — funding flows, NFT trees with their stories, and impact claims — keeping the experience usable for rural communities with limited connectivity and banking access.",
      "One codebase, two platforms: planters and funders share the same traceable trees, and businesses can integrate planting into their own products, from per-sale planting to checkout-page gifts.",
    ],
    stack: [
      "TypeScript",
      "React",
      "React Native",
      "react-native-web",
      "expo",
      "ethers.js",
      "web3.js",
    ],
    role: "Frontend Developer · Cross-Platform",
    timeline: "2022 — 2024",
    liveUrl: "#",
    repoUrl: "#",
    hue: 105,
    cover: "/rangertreejer/cover.webp",
    links: [
      {
        label: "UNICEF",
        href: "https://www.unicefventurefund.org/portfolio/treejer-protocol-connecting-tree-funders-rural-planters-worldwide",
      },
      { label: "LinkedIn", href: "https://www.linkedin.com/company/treejer" },
      { label: "GitHub", href: "https://github.com/treejer" },
    ],
    gallery: [
      "/rangertreejer/1.jpeg",
      "/rangertreejer/2.jpeg",
      "/rangertreejer/3.jpeg",
      "/rangertreejer/4.jpeg",
      "/rangertreejer/5.jpeg",
    ],
    highlights: [
      "One React Native + react-native-web + Expo codebase shipped to Android and web",
      "Wallet connection and contract interactions via web3.js",
      "NFT trees, funding flows and impact claims in-app",
      "Designed for rural, low-bandwidth and unbanked users",
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
    company: "Freelance",
    role: "Frontend Developer",
    period: "2023 — Present",
    location: "Remote",
    summary:
      "Professional client projects across Web3, DeFi, backend-driven web and mobile — currently open for new work.",
    bullets: [
      "Ship production frontends for clients needing senior-level execution.",
      "Own projects end to end: UI implementation, Web3 integration and backend service wiring.",
      "Available for full-project builds, from first screen to deployed release.",
    ],
  },
  {
    company: "Planit · Web3",
    role: "Frontend Developer",
    period: "2025",
    location: "Remote",
    summary:
      "Frontend developer for Web3 and smart-contract projects across gaming, trading and more.",
    bullets: [
      "Implemented UI for Web3 projects across gaming, trading and other categories.",
      "Integrated Unity WebGL builds with React, wired to wallet sessions.",
      "Built customer dashboards, landing pages and live cryptocurrency charts.",
      "Added GSAP and Framer Motion animation throughout the products.",
      "Set up multichain Web3 configuration across networks and contracts.",
    ],
  },
  {
    company: "Treejer · Climate Finance",
    role: "Frontend Developer · Frontend Lead",
    period: "2022 — 2024",
    location: "Remote",
    summary:
      "Frontend developer on the Ranger app, leading the frontend team from 2023.",
    bullets: [
      "Implemented UI for the cross-platform Ranger app.",
      "Launched Android and web apps from one codebase with React Native and Expo.",
      "Integrated Web3 and smart contracts with multichain configuration.",
      "Wired APIs with Redux Saga for predictable data flow.",
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
      "next-intl",
      "HTML & CSS",
      "Zustand",
      "Redux",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    area: "Backend",
    items: ["Node.js", "NestJs", "REST"],
  },
  {
    area: "Data",
    items: ["TanStack Query", "SWR", "Zod", "Recharts", "ISR & Caching"],
  },
  {
    area: "Auth",
    items: ["NextAuth.js", "OAuth 2.0", "JWT", "Session handling"],
  },
  {
    area: "Web3",
    items: [
      "wagmi",
      "viem",
      "ethers.js",
      "ENS",
      "IPFS",
      "Smart-contract reads & writes",
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
    school: "B.Sc. Software Engineering",
    org: "Undergraduate studies",
    period: "2023 — Present",
    detail:
      "Software engineering fundamentals — data structures, databases and networks — alongside professional frontend work.",
  },
];

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Profile", href: "/profile" },
];
