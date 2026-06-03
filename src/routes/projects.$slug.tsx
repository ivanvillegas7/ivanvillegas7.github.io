import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import type { ReactElement } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { getProject, projects, type Project } from "@/data/projects";
import { SchrodingerFullText } from "@/components/full-texts/schrodinger";
import { CalSatFullText } from "@/components/full-texts/calsat";
import { CMBFullText } from "@/components/full-texts/cmb";
import { M15FullText } from "@/components/full-texts/m15";
import { KeplerFullText } from "@/components/full-texts/kepler";
import { useT } from "@/i18n/lang-provider";
import { InstitutionBadges } from "@/components/institution-badge";
import { AlertTriangle } from "lucide-react";

const fullTextBySlug: Record<string, () => ReactElement> = {
  "schrodinger-equation": SchrodingerFullText,
  "calsat-cmb": CalSatFullText,
  "cmb-power-spectrum": CMBFullText,
  "m15": M15FullText,
  "kepler-exoplanet-transits": KeplerFullText,
};

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Iván Villegas-Pérez` : "Project — Iván Villegas-Pérez";
    const description = p?.abstract ?? "Scientific project by Iván Villegas-Pérez.";
    const path = p ? `/projects/${p.slug}` : "/projects";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: path },
      ],
      links: [{ rel: "canonical", href: path }],
    };
  },
  notFoundComponent: () => (
    <div className="relative min-h-screen">
      <SiteNav />
      <div className="mx-auto max-w-3xl px-6 py-28 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 font-serif text-4xl text-foreground">
          Project not found
        </h1>
        <p className="mt-4 text-muted-foreground">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          to="/projects"
          className="mt-8 inline-flex items-center gap-2 rounded-sm border border-foreground/80 px-5 py-2.5 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          ← All projects
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    console.error(error);
    return (
      <div className="relative min-h-screen">
        <SiteNav />
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <h1 className="font-serif text-3xl text-foreground">
            This project didn&apos;t load
          </h1>
          <button
            onClick={reset}
            className="mt-6 rounded-sm bg-foreground px-5 py-2.5 text-sm text-background transition-colors hover:bg-foreground/85"
          >
            Try again
          </button>
        </div>
      </div>
    );
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { t, lang } = useT();
  const es = lang === "es";
  const { project: p } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];
  const isExternal = !!p.reportPdf && /^https?:\/\//.test(p.reportPdf);

  return (
    <div className="relative min-h-screen">
      <SiteNav />

      {/* Header / metadata */}
      <article className="relative z-10 mx-auto max-w-5xl px-6 pt-16 md:px-10 md:pt-24">
        <Link
          to="/projects"
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
        >
          {t("projects.back")}
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
          <span>{p.year}</span>
          <span>·</span>
          <span className="uppercase tracking-[0.18em] text-foreground/80">{es && p.natureEs ? p.natureEs : p.nature}</span>
          {p.language && (
            <>
              <span>·</span>
              <span>{p.language}</span>
            </>
          )}
        </div>

        <h1 className="mt-5 font-serif text-4xl leading-[1.1] tracking-tight text-foreground md:text-5xl">
          {es && p.titleEs ? p.titleEs : p.title}
        </h1>
        <p className="mt-3 font-serif italic text-lg text-muted-foreground">
          {es && p.contextEs ? p.contextEs : p.context}
        </p>
        {p.institutions && p.institutions.length > 0 && (
          <div className="mt-4">
            <InstitutionBadges ids={p.institutions} size="md" />
          </div>
        )}
        {p.reportPdf && p.reportLang && p.reportLang !== lang && (
          <div className="mt-6 flex items-start gap-3 rounded-sm border-l-2 border-amber-500 bg-amber-500/10 px-4 py-3 text-sm text-foreground/90">
            <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber-500" />
            <p>
              {lang === "es"
                ? `Aviso: el informe original está escrito en ${p.reportLang === "en" ? "inglés" : "español"}. El resumen y los textos de esta página están en español.`
                : `Note: the original report is written in ${p.reportLang === "es" ? "Spanish" : "English"}. The abstract and texts on this page are in English.`}
            </p>
          </div>
        )}

        {/* Abstract + side panel */}
        <div className="mt-12 grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("projects.abstract")}
            </h2>
            <p className="mt-4 font-serif text-[17px] leading-[1.75] text-foreground/90">
              {es && p.abstractEs ? p.abstractEs : p.abstract}
            </p>
          </div>

          <aside className="space-y-8 md:border-l md:border-border md:pl-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {p.peopleLabel === "Co-authors" ? t("projects.coauthors") : t("projects.supervisors")}
              </h3>
              <ul className="mt-3 space-y-2 font-serif text-[15px] text-foreground/90">
                {p.collaborators.map((c) => (
                  <li key={c.name}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                      >
                        {c.name}
                      </a>
                    ) : (
                      c.name
                    )}
                    {c.role && (
                      <span className="block font-sans text-xs italic text-muted-foreground">
                        {es && c.roleEs ? c.roleEs : c.role}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t("projects.tags")}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 font-mono text-xs">
              {p.reportPdf && (
                <a
                  href={p.reportPdf}
                  {...(isExternal ? { target: "_blank", rel: "noreferrer" } : { download: true })}
                  className="inline-flex items-center justify-between rounded-sm bg-foreground px-4 py-2.5 text-background transition-colors hover:bg-foreground/85"
                >
                  <span>{isExternal ? t("projects.openOnline") : t("projects.downloadPdf")}</span>
                  <span aria-hidden>{isExternal ? "↗" : "↓"}</span>
                </a>
              )}
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-between rounded-sm border border-foreground/80 px-4 py-2.5 text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                <span>{t("projects.viewGithub")}</span> <span aria-hidden>↗</span>
              </a>
            </div>
          </aside>
        </div>
      </article>

      {/* Full report viewer */}
      <section className="relative z-10 mx-auto mt-16 max-w-5xl px-6 md:px-10">
        <div className="flex items-baseline justify-between border-b border-border pb-4">
          <h2 className="font-serif text-2xl text-foreground">{t("projects.fullReport")}</h2>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {p.hasFullText ? t("projects.inlineFigures") : t("projects.withFigures")}
          </span>
        </div>

        {p.hasFullText && fullTextBySlug[p.slug] ? (
          <div className="mt-10">{fullTextBySlug[p.slug]()}</div>
        ) : p.reportPdf && !isExternal ? (
          <div className="mt-6 overflow-hidden rounded-sm border border-border bg-background shadow-sm">
            <object
              data={`${p.reportPdf}#view=FitH&toolbar=1`}
              type="application/pdf"
              className="block h-[85vh] w-full"
              aria-label={`PDF report: ${p.title}`}
            >
              <div className="p-10 text-center text-sm text-muted-foreground">
                Your browser can&apos;t display embedded PDFs.{" "}
                <a
                  href={p.reportPdf}
                  className="underline decoration-foreground/40 underline-offset-4 hover:text-foreground"
                >
                  Download the report
                </a>{" "}
                instead.
              </div>
            </object>
          </div>
        ) : (
          <div className="mt-6 rounded-sm border border-dashed border-border bg-secondary/40 p-10 text-center">
            <p className="font-serif italic text-muted-foreground">
              The PDF report isn&apos;t attached yet.
            </p>
            <p className="mt-3 max-w-xl mx-auto text-sm text-muted-foreground">
              Drop the file at{" "}
              <code className="rounded-sm bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">
                public/reports/{p.slug}.pdf
              </code>{" "}
              and set{" "}
              <code className="rounded-sm bg-background px-1.5 py-0.5 font-mono text-xs text-foreground">
                reportPdf: &quot;/reports/{p.slug}.pdf&quot;
              </code>{" "}
              in <code className="font-mono text-xs">src/data/projects.ts</code>.
            </p>
          </div>
        )}
      </section>

      {/* Footer nav */}
      <section className="relative z-10 mx-auto mt-24 max-w-5xl border-t border-border px-6 py-10 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            to="/projects"
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            {t("projects.allBack")}
          </Link>
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="font-mono text-xs uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground"
          >
            {t("projects.next")} · {es && next.titleEs ? next.titleEs : next.title} →
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}