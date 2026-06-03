import { useT } from "@/i18n/lang-provider";

export function SiteFooter() {
  const { t, lang } = useT();
  return (
    <footer className="relative z-10 mt-32 border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Iván Villegas-Pérez. {t("footer.set")}</p>
        <p className="font-mono text-xs">
          {t("footer.updated")} ·{" "}
          {new Date().toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </footer>
  );
}