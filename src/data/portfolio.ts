export const profile = {
  name: "Armin Bakhshi",
  role: "Frontend Developer",
  stack: "TypeScript · React · Next.js",
  email: "arminbkh0921@gmail.com",
  location: "Remote · Worldwide",
  avatar: "/me.jpeg",
  bookingUrl: "https://cal.com/armin-bakhshi",
  github: "https://github.com/armin-bkh",
  linkedin: "https://www.linkedin.com/in/armin-bakhshi/",
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
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
};

export const projects: Project[] = [
  {
    slug: "prc-pixel-race-club",
    title: "PRC — Pixel Race Club",
    year: "2025",
    category: "Web3 · Gaming",
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
    timeline: "2025",
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
  },
  {
    slug: "aih-all-in-hype",
    title: "AIH — All In Hype",
    year: "2025",
    category: "Web3 · DeFi",
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
  },
  {
    slug: "sunday-solar-landing",
    title: "Sunday Solar — Backend-Driven Landing",
    year: "2025",
    category: "Backend · B2C",
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
  },
  {
    slug: "treejer-ranger-app",
    title: "Treejer — Ranger App",
    year: "2024",
    category: "Web3 · Mobile",
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
  },
];

export type Experience = {
  key: string;
  company: string;
  role: string;
  period: string;
  location: string;
};

export const experience: Experience[] = [
  {
    key: "freelance",
    company: "Freelance",
    role: "Frontend Developer",
    period: "2023 — Present",
    location: "Remote",
  },
  {
    key: "planit",
    company: "Planit · Web3",
    role: "Frontend Developer",
    period: "2025",
    location: "Remote",
  },
  {
    key: "treejer",
    company: "Treejer · Climate Finance",
    role: "Frontend Developer · Frontend Lead",
    period: "2022 — 2024",
    location: "Remote",
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
    key: "softwareEngineering",
    school: "B.Sc. Software Engineering",
    org: "Undergraduate studies",
    period: "2023 — Present",
  },
];

export const nav = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "resume", href: "/resume" },
  { key: "profile", href: "/profile" },
];
