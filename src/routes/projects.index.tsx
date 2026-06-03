import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ProjectList } from "@/components/project-list";
import { projects } from "@/data/projects";
import { useT } from "@/i18n/lang-provider";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Iván Villegas-Pérez" },
      {
        name: "description",
        content:
          "Scientific projects by Iván Villegas-Pérez: Master's thesis on the M15 J-factor, CMB power spectrum, Kepler exoplanet transits, CalSat for CMB experiments and Schrödinger equation numerics.",
      },
      { property: "og:title", content: "Projects — Iván Villegas-Pérez" },
      {
        property: "og:description",
        content:
          "Pinned scientific projects: thesis work, course projects and research internships in astroparticle physics and cosmology.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const { t } = useT();
  return (
    <div className="relative min-h-screen">
      <SiteNav />
      <section className="relative z-10 border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {t("projects.indexKicker")}
          </p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl">
            {t("projects.indexTitleBefore")} <em className="italic">{t("projects.indexTitleEm")}</em>.
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-lg leading-relaxed text-foreground/85">
            {t("projects.indexLede")}
          </p>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 md:px-10">
        <ProjectList items={projects} />
      </section>

      <SiteFooter />
    </div>
  );
}