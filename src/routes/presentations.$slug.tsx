import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Download, ArrowLeft } from "lucide-react";
import { conferences } from "@/data/conferences";
import { useT } from "@/i18n/lang-provider";
import { InstitutionBadges } from "@/components/institution-badge";
import { SlideDeck } from "@/components/slide-deck";

export const Route = createFileRoute("/presentations/$slug")({
  loader: ({ params }) => {
    const c = conferences.find((x) => x.slug === params.slug);
    if (!c || !c.slidesPdf) throw notFound();
    return { c };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.c.contribution ?? loaderData?.c.name} — Slides` },
      { name: "description", content: loaderData?.c.summary ?? "" },
    ],
  }),
  component: PresentationPage,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <p className="font-serif text-xl text-foreground">Presentation not found.</p>
        <Link to="/conferences" className="mt-4 inline-block font-mono text-xs uppercase tracking-[0.2em] underline">
          ← Back to conferences
        </Link>
      </div>
    </div>
  ),
});

function PresentationPage() {
  const { c } = Route.useLoaderData();
  const { lang } = useT();
  const pdfUrl = c.slidesPdf!;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3">
          <Link
            to="/conferences"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={14} /> {lang === "es" ? "Congresos" : "Conferences"}
          </Link>
          <div className="order-3 flex w-full flex-wrap items-center gap-x-3 gap-y-1 md:order-2 md:w-auto">
            <h1 className="font-serif text-base leading-snug text-foreground md:text-lg">
              <em>{c.contribution ?? c.name}</em>{" "}
              <span className="text-muted-foreground">· {c.city}, {c.country} · {c.year}</span>
            </h1>
            <InstitutionBadges ids={c.institutions} />
          </div>
          <div className="order-2 flex items-center gap-2 md:order-3">
            <a
              href={pdfUrl}
              download
              className="inline-flex items-center gap-1.5 rounded-sm bg-foreground px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-background transition-colors hover:bg-foreground/85"
            >
              <Download size={13} /> PDF
            </a>
          </div>
        </div>
      </header>
      {c.abstract && (
        <section className="mx-auto w-full max-w-4xl px-6 pt-10">
          <h2 className="mb-4 border-b border-border pb-3 font-serif text-2xl text-foreground">
            {lang === "es" ? "Resumen" : "Abstract"}
          </h2>
          <p className="font-serif text-[15.5px] leading-[1.75] text-foreground/85">
            {lang === "es" ? c.abstractEs : c.abstract}
          </p>
        </section>
      )}
      <section className="mx-auto w-full max-w-5xl px-6 py-10">
        <h2 className="mb-4 border-b border-border pb-3 font-serif text-2xl text-foreground">
          {lang === "es" ? "Diapositivas" : "Slides"}
        </h2>
        <SlideDeck url={pdfUrl} lang={lang} />
      </section>
    </div>
  );
}
