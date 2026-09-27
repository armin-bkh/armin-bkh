import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiRedux,
  SiFramer,
  SiGreensock,
  SiNodedotjs,
  SiTrpc,
  SiGraphql,
  SiPostgresql,
  SiPrisma,
  SiJsonwebtokens,
  SiIpfs,
  SiVitest,
  SiCypress,
  SiTestinglibrary,
  SiWalletconnect,
  SiEthereum,
  SiSolidity,
  SiTanstack,
  SiZod,
  SiClerk,
  SiWagmi,
  SiEthers,
  SiSwr,
  SiApacheecharts,
  SiTailwindcss,
  SiStripe,
  SiSocketdotio,
  SiVercel,
  SiSanity,
  SiReacthookform,
} from "react-icons/si";
import {
  TbApi,
  TbBolt,
  TbWebhook,
  TbShieldCheck,
  TbChartLine,
  TbDatabase,
  TbShieldLock,
  TbKey,
  TbUserShield,
  TbHistory,
  TbFileCode,
  TbGitBranch,
  TbEyeCheck,
  TbRefresh,
  TbStack2,
  TbPencil,
} from "react-icons/tb";

type SkillIcon = { C: IconType; color: string };

const MAP: Record<string, SkillIcon[]> = {
  // Frontend
  TypeScript: [{ C: SiTypescript, color: "#3178C6" }],
  React: [{ C: SiReact, color: "#61DAFB" }],
  "Next.js": [{ C: SiNextdotjs, color: "#000000" }],
  "HTML & CSS": [
    { C: SiHtml5, color: "#E34F26" },
    { C: SiCss, color: "#1572B6" },
  ],
  Redux: [{ C: SiRedux, color: "#764ABC" }],
  "Framer Motion": [{ C: SiFramer, color: "#0055FF" }],
  GSAP: [{ C: SiGreensock, color: "#88CE02" }],
  // Backend
  "Node.js": [{ C: SiNodedotjs, color: "#339933" }],
  tRPC: [{ C: SiTrpc, color: "#2596BE" }],
  REST: [{ C: TbApi, color: "#16A34A" }],
  GraphQL: [{ C: SiGraphql, color: "#E10098" }],
  PostgreSQL: [{ C: SiPostgresql, color: "#4169E1" }],
  Prisma: [{ C: SiPrisma, color: "#2D3748" }],
  "Server Actions": [{ C: TbBolt, color: "#F59E0B" }],
  Webhooks: [{ C: TbWebhook, color: "#8B5CF6" }],
  // Data
  "TanStack Query": [{ C: SiTanstack, color: "#FF4154" }],
  SWR: [{ C: SiSwr, color: "#000000" }],
  Zod: [{ C: SiZod, color: "#3E63DD" }],
  Recharts: [{ C: TbChartLine, color: "#F43F5E" }],
  ECharts: [{ C: SiApacheecharts, color: "#AA344D" }],
  Virtualization: [{ C: TbStack2, color: "#0D9488" }],
  "ISR & Caching": [{ C: TbRefresh, color: "#0284C7" }],
  // Auth
  "NextAuth.js": [{ C: TbShieldLock, color: "#000000" }],
  "OAuth 2.0": [{ C: TbKey, color: "#F59E0B" }],
  JWT: [{ C: SiJsonwebtokens, color: "#000000" }],
  RBAC: [{ C: TbUserShield, color: "#0891B2" }],
  "Session handling": [{ C: TbHistory, color: "#64748B" }],
  Clerk: [{ C: SiClerk, color: "#6C47FF" }],
  // Web3
  wagmi: [{ C: SiWagmi, color: "#18181B" }],
  "ethers.js": [{ C: SiEthers, color: "#2535A0" }],
  WalletConnect: [{ C: SiWalletconnect, color: "#3B99FC" }],
  ENS: [{ C: SiEthereum, color: "#627EEA" }],
  IPFS: [{ C: SiIpfs, color: "#65C2CB" }],
  "Smart-contract reads": [{ C: SiSolidity, color: "#363636" }],
  // Testing
  Vitest: [{ C: SiVitest, color: "#6E9F18" }],
  Cypress: [{ C: SiCypress, color: "#17202C" }],
  "Testing Library": [{ C: SiTestinglibrary, color: "#E33332" }],
  "E2E pipelines": [{ C: TbGitBranch, color: "#EA580C" }],
  "Visual regression": [{ C: TbEyeCheck, color: "#DB2777" }],
  // Generic extras (used if data grows)
  Database: [{ C: TbDatabase, color: "#6366F1" }],
  Validation: [{ C: TbShieldCheck, color: "#3E63DD" }],
  "Smart contracts": [{ C: TbFileCode, color: "#363636" }],
  // Project stacks
  Tailwind: [{ C: SiTailwindcss, color: "#06B6D4" }],
  Stripe: [{ C: SiStripe, color: "#635BFF" }],
  "React Hook Form": [{ C: SiReacthookform, color: "#EC5990" }],
  WebSockets: [{ C: SiSocketdotio, color: "#010101" }],
  Vercel: [{ C: SiVercel, color: "#000000" }],
  "Vercel Edge": [{ C: SiVercel, color: "#000000" }],
  Sanity: [{ C: SiSanity, color: "#F03E2F" }],
  "Draft Mode": [{ C: TbPencil, color: "#D97706" }],
};

/** Colored fallback badge for skills with no brand icon (Zustand, viem, Playwright…). */
const FALLBACK_COLOR: Record<string, string> = {
  Zustand: "#92400E",
  viem: "#F97316",
  Playwright: "#2EAD33",
};

function initials(name: string) {
  const words = name.replace(/[^a-zA-Z0-9 ]/g, "").split(" ").filter(Boolean);
  return ((words[0]?.[0] ?? "?") + (words[1]?.[0] ?? "")).toUpperCase();
}

export default function SkillBadge({
  name,
  size,
}: {
  name: string;
  size?: "sm";
}) {
  const icons = MAP[name];
  return (
    <span className={`skill-chip${size === "sm" ? " skill-chip-sm" : ""}`}>
      {icons ? (
        icons.map(({ C, color }, i) => (
          <C key={i} color={color} aria-hidden="true" />
        ))
      ) : (
        <span
          className="skill-fallback"
          style={{ background: FALLBACK_COLOR[name] ?? "#52525B" }}
          aria-hidden="true"
        >
          {initials(name)}
        </span>
      )}
      {name}
    </span>
  );
}
