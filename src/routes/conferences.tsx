import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Link } from "@tanstack/react-router";
import { conferences, type Conference } from "@/data/conferences";
import { useT } from "@/i18n/lang-provider";
import { InstitutionBadges } from "@/components/institution-badge";

export const Route = createFileRoute("/conferences")({
  head: () => ({
    meta: [
      { title: "Conferences — Iván Villegas-Pérez" },
      {
        name: "description",
        content:
          "International conferences attended and talks given by Iván Villegas-Pérez on dark matter, γ-ray astrophysics and particle physics.",
      },
      { property: "og:title", content: "Conferences — Iván Villegas-Pérez" },
      {
        property: "og:description",
        content: "Contributed talks and attended conferences in astroparticle physics.",
      },
      { property: "og:url", content: "/conferences" },
    ],
    links: [{ rel: "canonical", href: "/conferences" }],
  }),
  component: ConferencesPage,
});

function ConferencesPage() {
  const { t, lang } = useT();
  const talks = conferences.filter((c) => c.role === "talk");
  const attended = conferences.filter((c) => c.role === "attendee");
  const defenses = conferences.filter((c) => c.role === "defense");

  return (
    <div className="relative min-h-screen">
      <SiteNav />
      <section className="relative z-10 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("conferences.kicker")}
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {t("conferences.titleBefore")} <em className="italic">{t("conferences.titleEm")}</em>.
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-foreground/85">
            {t("conferences.lede")}
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10">
        <h2 className="mb-8 border-b border-border pb-4 font-serif text-3xl text-foreground">
          {t("conferences.presentations")}
        </h2>
        <ul className="divide-y divide-border">
          {talks.map((c) => (
            <ConferenceCard key={c.slug} c={c} lang={lang} t={t} />
          ))}
        </ul>
      </section>

      {defenses.length > 0 && (
        <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10">
          <h2 className="mb-8 border-b border-border pb-4 font-serif text-3xl text-foreground">
            {t("conferences.defenses")}
          </h2>
          <ul className="divide-y divide-border">
            {defenses.map((c) => (
              <ConferenceCard key={c.slug} c={c} lang={lang} t={t} />
            ))}
          </ul>
        </section>
      )}

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-10">
        <h2 className="mb-8 border-b border-border pb-4 font-serif text-3xl text-foreground">
          {t("conferences.attended")}
        </h2>
        <ul className="divide-y divide-border">
          {attended.map((c) => (
            <ConferenceCard key={c.slug} c={c} lang={lang} t={t} />
          ))}
        </ul>
      </section>

      <SiteFooter />
    </div>
  );
}

function ConferenceCard({ c, lang, t }: { c: Conference; lang: "en" | "es"; t: (k: any) => string }) {
  const roleLabel =
    c.role === "talk"
      ? t("conferences.role.talk")
      : c.role === "defense"
      ? t("conferences.role.defense")
      : t("conferences.role.attendee");
  return (
    <li className="grid grid-cols-12 gap-6 py-8">
      <div className="col-span-12 md:col-span-2">
        <div className="font-mono text-xs text-muted-foreground">{c.year}</div>
        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70">
          {roleLabel}
        </div>
      </div>
      <div className="col-span-12 md:col-span-10">
        <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
          <h3 className="font-serif text-2xl leading-snug text-foreground">{c.name}</h3>
          <span className="mt-1.5"><InstitutionBadges ids={c.institutions} /></span>
        </div>
        <p className="mt-1 font-serif italic text-muted-foreground">
          {c.city}, {c.country}
        </p>
        {c.contribution && (
          <p className="mt-3 max-w-2xl font-serif text-[16px] leading-relaxed text-foreground/90">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              {roleLabel} ·{" "}
            </span>
            <em>{c.contribution}</em>
          </p>
        )}
        <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-foreground/80">
          {lang === "es" ? c.summaryEs : c.summary}
        </p>
        {(c.role === "talk" || c.role === "defense" || c.url) && (
          <div className="mt-5 flex flex-wrap items-center gap-4 font-mono text-xs">
            {(c.role === "talk" || c.role === "defense") &&
              (c.slidesPdf ? (
                <>
                  <Link
                    to="/presentations/$slug"
                    params={{ slug: c.slug }}
                    className="text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                  >
                    {t("conferences.viewSlides")}
                  </Link>
                  <a
                    href={c.slidesPdf}
                    download
                    className="text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                  >
                    {t("conferences.slides")}
                  </a>
                </>
              ) : (
                <span className="text-muted-foreground italic">{t("conferences.noSlides")}</span>
              ))}
            {c.url && (
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground underline decoration-muted-foreground/30 underline-offset-4 hover:text-foreground"
              >
                {t("conferences.website")}
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  );
}