import { type ReactNode } from "react";
import { BlockMath, InlineMath } from "react-katex";
import { useT } from "@/i18n/lang-provider";

export function TeX({ children }: { children: string }) {
  return (
    <div className="my-6 overflow-x-auto rounded-sm border border-dashed border-border bg-secondary/40 px-6 py-4 text-center text-foreground/90">
      <BlockMath math={children} />
    </div>
  );
}

export function ITeX({ children }: { children: string }) {
  return <InlineMath math={children} />;
}

/** Render the right string for the current language. */
export function B({ en, es }: { en: ReactNode; es: ReactNode }) {
  const { lang } = useT();
  return <>{lang === "es" ? es : en}</>;
}

export function Figure({
  src,
  num,
  caption,
  className = "",
}: {
  src: string;
  num: number;
  caption: ReactNode;
  className?: string;
}) {
  return (
    <figure className="my-10">
      <div className="overflow-hidden rounded-sm border border-border bg-secondary/30">
        <img
          src={src}
          alt={typeof caption === "string" ? caption : `Figure ${num}`}
          className={`mx-auto block max-h-[520px] w-auto ${className}`}
          loading="lazy"
        />
      </div>
      <figcaption className="mt-3 text-center font-serif text-sm italic text-muted-foreground">
        <span className="font-mono not-italic text-xs uppercase tracking-[0.15em] text-foreground/70">
          Fig. {num}
        </span>{" "}
        — {caption}
      </figcaption>
    </figure>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 mb-4 font-serif text-2xl tracking-tight text-foreground">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 font-serif text-xl italic text-foreground/90">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="my-4 font-serif text-[17px] leading-[1.8] text-foreground/90">
      {children}
    </p>
  );
}

export function Eq({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 overflow-x-auto rounded-sm border border-dashed border-border bg-secondary/40 px-6 py-4 text-center font-serif text-[17px] italic text-foreground/90">
      {children}
    </div>
  );
}

export function Header({
  kicker,
  title,
  byline,
}: {
  kicker: ReactNode;
  title: ReactNode;
  byline?: ReactNode;
}) {
  return (
    <header className="border-b border-border pb-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {kicker}
      </p>
      <h1 className="mt-4 font-serif text-3xl leading-[1.15] tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      {byline && (
        <p className="mt-5 font-serif italic text-muted-foreground">{byline}</p>
      )}
    </header>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-sm border-l-2 border-foreground/40 bg-secondary/40 px-5 py-4 font-serif text-[15px] leading-relaxed text-foreground/80">
      {children}
    </aside>
  );
}