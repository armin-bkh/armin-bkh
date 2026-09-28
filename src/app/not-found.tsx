import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Not found — Armin Bakhshi",
  description: "This page does not exist.",
};

export default function NotFound() {
  return (
    <div className="container-x">
      <section className="pt-37.5 pb-2 max-md:pt-32.5">
        <Reveal>
          <div className="eyebrow">404</div>
          <h1 className="text-[clamp(64px,12vw,160px)] leading-[0.95] font-extrabold tracking-[-0.05em]">
            Lost
            <br />
            in space.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-140 text-[17px] leading-[1.65] text-muted">
            This page doesn&apos;t exist or it moved somewhere else. Head back
            home or browse the projects instead.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-primary">
              ← Back home
            </Link>
            <Link href="/projects" className="btn btn-secondary">
              All projects →
            </Link>
          </div>
        </Reveal>
      </section>
      <div className="h-2" />
    </div>
  );
}
