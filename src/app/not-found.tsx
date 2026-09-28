import Link from "next/link";
import { getTranslations } from "next-intl/server";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Not found — Armin Bakhshi",
  description: "This page does not exist.",
};

export default async function NotFound() {
  const t = await getTranslations("NotFound");
  const tCommon = await getTranslations("Common");

  return (
    <div className="container-x">
      <section className="pt-37.5 pb-2 max-md:pt-32.5">
        <Reveal>
          <div className="eyebrow">{t("eyebrow")}</div>
          <h1 className="text-[clamp(64px,12vw,160px)] leading-[0.95] font-extrabold tracking-[-0.05em]">
            {t("titleA")}
            <br />
            {t("titleB")}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-140 text-[17px] leading-[1.65] text-muted">
            {t("body")}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/" className="btn btn-primary">
              ← {tCommon("backHome")}
            </Link>
            <Link href="/projects" className="btn btn-secondary">
              {tCommon("allProjects")}
            </Link>
          </div>
        </Reveal>
      </section>
      <div className="h-2" />
    </div>
  );
}
