import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Socials } from "@/components/socials";
import { ProjectList } from "@/components/project-list";
import { projects } from "@/data/projects";
import { conferences } from "@/data/conferences";
import { news } from "@/data/news";
import { useT } from "@/i18n/lang-provider";
import heroImage from "@/assets/hero-telescopes.jpg";
import { InstitutionBadges } from "@/components/institution-badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iván Villegas-Pérez — Astroparticle Physicist" },
      {
        name: "description",
        content:
          "M.Sc. physicist working on indirect dark matter searches with Imaging Atmospheric Cherenkov Telescopes. PhD candidate in astroparticle physics.",
      },
      { property: "og:title", content: "Iván Villegas-Pérez — Astroparticle Physicist" },
      {
        property: "og:description",
        content:
          "Bayesian modelling of dark matter density profiles, J-factor computations and γ-ray astrophysics within the MAGIC Collaboration.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <SiteNav />
      <Hero />
      <SelectedWork />
      <SelectedTalks />
      <NewsSection />
      <Contact />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  const { t } = useT();
  return (
    <section className="relative z-10 border-b border-border">
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-border bg-background md:aspect-[16/6]">
        <img
          src={heroImage}
          alt="MAGIC telescopes and CTAO LSTs at night under the Milky Way, with a faint γ-ray and dark-matter halo glow."
          width={1920}
          height={1080}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 px-0 md:grid-cols-2">
        {/* Left — manuscript */}
        <div className="border-border px-6 py-16 md:border-r md:px-10 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("hero.kicker")}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {t("hero.title.before")} <em className="italic">{t("hero.title.em")}</em> {t("hero.title.after")}
          </h1>
          <p className="mt-8 max-w-md font-serif text-lg leading-relaxed text-foreground/85">
            {t("hero.lede")}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 rounded-sm bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-foreground/85"
            >
              {t("hero.download")} <span aria-hidden>↓</span>
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-sm border border-foreground/80 px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {t("hero.viewProjects")}
            </Link>
          </div>
        </div>

        {/* Right — abstract */}
        <div className="bg-secondary/50 px-6 py-16 md:px-10 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("hero.abstract")}
          </p>
          <div className="mt-6 space-y-5 font-serif text-[15px] leading-[1.75] text-foreground/85">
            <p>{t("hero.p1")}</p>
            <p>{t("hero.p2")}</p>
            <p className="border-l-2 border-foreground/70 pl-4 italic text-foreground">{t("hero.p3")}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-6 font-mono text-xs sm:grid-cols-2">
            <div>
              <p className="uppercase tracking-wider text-muted-foreground">{t("hero.stat.intro")}</p>
              <ul className="mt-3 space-y-1.5 font-serif text-base not-italic text-foreground">
                <li>{t("hero.field.astroparticle")}</li>
                <li>{t("hero.field.cosmology")}</li>
                <li>{t("hero.field.particle")}</li>
                <li>{t("hero.field.exoplanets")}</li>
              </ul>
            </div>
            <dl className="space-y-5">
              <Stat label={t("hero.stat.status")} value={t("hero.stat.statusValue")} />
              <Stat label={t("hero.stat.based")} value={t("hero.stat.basedValue")} />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className="mt-1 font-serif text-base not-italic text-foreground">{value}</dd>
    </div>
  );
}

function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline justify-between border-b border-border pb-4">
      <h2 className="font-serif text-3xl text-foreground md:text-4xl">{title}</h2>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        § {kicker}
      </span>
    </div>
  );
}

function SelectedWork() {
  const { t } = useT();
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading kicker={t("selectedWork.section")} title={t("selectedWork.title")} />
      <ProjectList items={projects.slice(0, 3)} />
      <div className="mt-10 text-center">
        <Link
          to="/projects"
          className="font-mono text-xs uppercase tracking-[0.2em] text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
        >
          {t("selectedWork.viewAll")}
        </Link>
      </div>
    </section>
  );
}

function SelectedTalks() {
  const { t, lang } = useT();
  const talks = conferences.filter((c) => c.role === "talk").slice(0, 3);
  return (
    <section className="relative z-10 border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading kicker={t("talks.section")} title={t("talks.title")} />
        <ul className="divide-y divide-border">
          {talks.map((c) => (
            <li key={c.slug} className="grid grid-cols-12 gap-6 py-8">
              <div className="col-span-12 md:col-span-2">
                <div className="font-mono text-xs text-muted-foreground">{c.year}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                  {t("conferences.role.talk")}
                </div>
              </div>
              <div className="col-span-12 md:col-span-10">
                <div className="flex flex-wrap items-start gap-x-3 gap-y-1">
                  <p className="font-serif text-xl text-foreground">{c.contribution}</p>
                  <span className="mt-1"><InstitutionBadges ids={c.institutions} /></span>
                </div>
                <p className="mt-1 font-serif italic text-muted-foreground">
                  {c.name} · {c.city}, {c.country}
                </p>
                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-foreground/80">
                  {lang === "es" ? c.summaryEs : c.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <Link
            to="/conferences"
            className="font-mono text-xs uppercase tracking-[0.2em] text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
          >
            {t("talks.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useT();
  return (
    <section id="contact" className="relative z-10 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading kicker={t("contact.section")} title={t("contact.title")} />
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="font-serif text-lg leading-relaxed text-foreground/85">{t("contact.blurb")}</p>
            <p className="mt-6 font-serif italic text-muted-foreground">{t("contact.note")}</p>
          </div>
          <div className="md:col-span-3">
            <Socials />
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  const { t, lang } = useT();
  const items = news.slice(0, 5);
  if (items.length === 0) return null;
  const fmt = (iso: string) =>
    new Date(iso).toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  return (
    <section id="news" className="relative z-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
        <SectionHeading kicker={t("news.section")} title={t("news.title")} />
        <p className="mb-8 max-w-2xl font-serif text-lg leading-relaxed text-foreground/85">
          {t("news.lede")}
        </p>
        <ul className="divide-y divide-border">
          {items.map((n) => (
            <li key={n.url + n.date} className="grid grid-cols-12 gap-6 py-6">
              <div className="col-span-12 md:col-span-2">
                <div className="font-mono text-xs text-muted-foreground">{fmt(n.date)}</div>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70">
                  {n.kind === "repost" ? t("news.kind.repost") : t("news.kind.post")}
                </div>
              </div>
              <div className="col-span-12 md:col-span-10">
                <a
                  href={n.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-serif text-xl text-foreground underline decoration-foreground/20 underline-offset-4 hover:decoration-foreground"
                >
                  {lang === "es" && n.titleEs ? n.titleEs : n.title}
                </a>
                <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-foreground/80">
                  {lang === "es" && n.summaryEs ? n.summaryEs : n.summary}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <a
            href="https://www.linkedin.com/in/Iv%C3%A1nVillegasP%C3%A9rez/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
          >
            {t("news.viewAll")}
          </a>
        </div>
      </div>
    </section>
  );
}
