import { Link } from "@tanstack/react-router";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme, type Theme } from "@/components/theme-provider";
import { useT } from "@/i18n/lang-provider";

export function SiteNav() {
  const { t, lang, setLang } = useT();
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    const order: Theme[] = ["system", "light", "dark"];
    const i = order.indexOf(theme);
    setTheme(order[(i + 1) % order.length]);
  };

  const ThemeIcon = theme === "dark" ? Moon : theme === "light" ? Sun : Monitor;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-y-3 px-6 py-5">
        <Link to="/" className="font-serif text-lg tracking-tight text-foreground">
          <span className="italic">Iván</span> Villegas-Pérez
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground [&.active]:text-foreground">
            {t("nav.about")}
          </Link>
          <Link to="/projects" className="transition-colors hover:text-foreground [&.active]:text-foreground">
            {t("nav.projects")}
          </Link>
          <Link to="/education" className="transition-colors hover:text-foreground [&.active]:text-foreground">
            {t("nav.education")}
          </Link>
          <Link to="/conferences" className="transition-colors hover:text-foreground [&.active]:text-foreground">
            {t("nav.conferences")}
          </Link>
          <a href="/#news" className="transition-colors hover:text-foreground">
            {t("nav.news")}
          </a>
          <a href="/#contact" className="transition-colors hover:text-foreground">
            {t("nav.contact")}
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              title={t("nav.cv.download")}
              className="inline-flex items-center gap-1.5 rounded-sm border border-foreground/80 px-3 py-1.5 text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {t("nav.cv")} ↓
            </a>
            <a
              href="/cva.pdf"
              title={t("nav.cva.download")}
              className="inline-flex items-center gap-1.5 rounded-sm border border-foreground/80 px-3 py-1.5 text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              {t("nav.cva")} ↓
            </a>
          </div>
          <div className="flex items-center gap-1 rounded-sm border border-border bg-secondary/50 p-0.5 font-mono text-[11px] uppercase tracking-wider">
            <button
              onClick={() => setLang("en")}
              className={`rounded-[3px] px-2 py-1 transition-colors ${lang === "en" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`rounded-[3px] px-2 py-1 transition-colors ${lang === "es" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}
              aria-pressed={lang === "es"}
            >
              ES
            </button>
          </div>
          <button
            onClick={cycleTheme}
            aria-label={`Theme: ${theme}`}
            title={`Theme: ${theme}`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-sm border border-border text-foreground/80 transition-colors hover:bg-foreground hover:text-background"
          >
            <ThemeIcon size={15} />
          </button>
        </nav>
      </div>
    </header>
  );
}