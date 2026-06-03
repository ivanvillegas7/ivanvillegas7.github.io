import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { useT } from "@/i18n/lang-provider";
import { InstitutionBadges } from "@/components/institution-badge";

export function ProjectList({ items }: { items: Project[] }) {
  const { t, lang } = useT();
  const es = lang === "es";
  return (
    <ol className="divide-y divide-border">
      {items.map((p) => (
        <li key={p.slug} className="grid grid-cols-12 gap-6 py-10">
          <div className="col-span-12 md:col-span-2">
            <div className="font-mono text-xs text-muted-foreground">{p.year}</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/70">
              {es && p.natureEs ? p.natureEs : p.nature}
            </div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div className="flex flex-wrap items-start gap-x-3 gap-y-2">
              <h3 className="font-serif text-2xl leading-snug text-foreground">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="underline decoration-foreground/20 underline-offset-[6px] transition-colors hover:decoration-foreground"
                >
                  {es && p.titleEs ? p.titleEs : p.title}
                </Link>
              </h3>
              <span className="mt-2"><InstitutionBadges ids={p.institutions} /></span>
            </div>
            <p className="mt-1 font-serif italic text-muted-foreground">{es && p.contextEs ? p.contextEs : p.context}</p>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-foreground/85">
              {es && p.abstractEs ? p.abstractEs : p.abstract}
            </p>

            {p.collaborators.length > 0 && (
              <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
                <span className="font-serif italic">
                  {p.peopleLabel === "Co-authors" ? t("projects.coauthors") : t("projects.supervisors")} ·{" "}
                </span>
                {p.collaborators.map((c, idx) => (
                  <span key={c.name}>
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground hover:text-foreground"
                      >
                        {c.name}
                      </a>
                    ) : (
                      <span className="text-foreground/80">{c.name}</span>
                    )}
                    {c.role && (
                      <span className="text-muted-foreground"> ({es && c.roleEs ? c.roleEs : c.role})</span>
                    )}
                    {idx < p.collaborators.length - 1 ? "; " : "."}
                  </span>
                ))}
              </p>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-border bg-secondary px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-muted-foreground"
                >
                  {t}
                </span>
              ))}
              <div className="ml-auto flex items-center gap-4 font-mono text-xs">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground"
                >
                  {t("projects.readReport")}
                </Link>
                <a
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground underline decoration-muted-foreground/30 underline-offset-4 hover:text-foreground"
                >
                  {t("projects.github")}
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}