import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { education, type Degree } from "@/data/education";
import { InstitutionBadge } from "@/components/institution-badge";
import { useT } from "@/i18n/lang-provider";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Iván Villegas-Pérez" },
      {
        name: "description",
        content:
          "Academic education of Iván Villegas-Pérez: M.Sc. in Physics (Nuclear and Particle Physics, UiO) and B.Sc. in Physics (Universidad de Cantabria, with ERASMUS at UiO).",
      },
      { property: "og:title", content: "Education — Iván Villegas-Pérez" },
      { property: "og:url", content: "/education" },
    ],
    links: [{ rel: "canonical", href: "/education" }],
  }),
  component: EducationPage,
});

function EducationPage() {
  const { lang } = useT();
  const es = lang === "es";
  return (
    <div className="relative min-h-screen">
      <SiteNav />
      <section className="relative z-10 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            § {es ? "Formación" : "Education"}
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {es ? "Formación académica" : "Academic education"}
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-foreground/85">
            {es
              ? "M.Sc. y B.Sc. en Física, con foco en astropartículas, cosmología y relatividad general."
              : "M.Sc. and B.Sc. in Physics, focused on astroparticle physics, cosmology and general relativity."}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
        {education.map((d) => (
          <DegreeBlock key={d.slug} d={d} es={es} />
        ))}
      </div>

      <SiteFooter />
    </div>
  );
}

function DegreeBlock({ d, es }: { d: Degree; es: boolean }) {
  return (
    <article className="border-t border-border py-12 first:border-t-0 first:pt-4">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <InstitutionBadge id={d.institutionId} size="md" />
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {d.period} · {d.totalEcts} ECTS
            </span>
          </div>
          <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            {es ? d.degreeEs : d.degree}
          </h2>
          <p className="mt-2 font-serif italic text-muted-foreground">
            {es ? d.institutionEs : d.institution}
          </p>
          <p className="mt-3 max-w-2xl font-serif text-[15.5px] leading-relaxed text-foreground/85">
            {es ? (
              <>
                <strong className="font-medium">Especialización:</strong> {d.specialisationEs}.
              </>
            ) : (
              <>
                <strong className="font-medium">Specialisation:</strong> {d.specialisation}.
              </>
            )}
          </p>
          {(d.notes || d.notesEs) && (
            <p className="mt-2 max-w-2xl text-[14.5px] text-muted-foreground">
              {es ? d.notesEs : d.notes}
            </p>
          )}
          {(d.thesisTitle || d.thesisTitleEs) && (
            <p className="mt-3 max-w-2xl font-serif text-[15px] text-foreground/85">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {es ? "Tesis · " : "Thesis · "}
              </span>
              {d.thesisHref ? (
                <a href={d.thesisHref} className="italic underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground">
                  {es ? d.thesisTitleEs : d.thesisTitle}
                </a>
              ) : (
                <em>{es ? d.thesisTitleEs : d.thesisTitle}</em>
              )}
            </p>
          )}
        </div>
      </header>

      <div className="mt-8 space-y-8">
        {d.courses.map((g) => (
          <div key={g.groupLabel}>
            <h3 className="mb-3 border-b border-dashed border-border pb-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {es ? g.groupLabelEs : g.groupLabel}
            </h3>
            <ul className="divide-y divide-border">
              {g.items.map((c) => (
                <li key={c.title} className="flex items-baseline justify-between gap-4 py-2">
                  <span className="font-serif text-[15.5px] text-foreground">
                    {c.code && (
                      <span className="mr-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {c.code}
                      </span>
                    )}
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.href.startsWith("/") ? {} : { target: "_blank", rel: "noreferrer" })}
                        className="underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                      >
                        {es ? c.titleEs : c.title}
                      </a>
                    ) : (
                      <>{es ? c.titleEs : c.title}</>
                    )}
                    {c.starred && <span className="ml-1 text-foreground/70" aria-hidden>★</span>}
                    {c.year && (
                      <span className="ml-2 font-mono text-[11px] italic text-muted-foreground">
                        ({c.year})
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {c.ects > 0 ? `${c.ects} ECTS` : "—"}
                  </span>
                </li>
              ))}
            </ul>
            {g.items.some((c) => c.starred) && (
              <p className="mt-3 text-[12.5px] italic text-muted-foreground">
                {es
                  ? "★ Asignaturas convalidadas por las cursadas durante el ERASMUS."
                  : "★ Courses recognised through the ERASMUS exchange."}
              </p>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}