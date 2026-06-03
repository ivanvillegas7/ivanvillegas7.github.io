import { cn } from "@/lib/utils";
import uioPos from "@/assets/institutions/UiO_pos.png.asset.json";
import uioNeg from "@/assets/institutions/UiO_neg.png.asset.json";
import ucLogo from "@/assets/institutions/UC.png.asset.json";
import umPos from "@/assets/institutions/SelloUMU-positivo.png.asset.json";
import umNeg from "@/assets/institutions/SelloUMU-negativo.png.asset.json";
import ifcaLogo from "@/assets/institutions/IFCA.png.asset.json";
import magicLogo from "@/assets/institutions/MAGIC_logo.jpg.asset.json";

type Institution = {
  fullName: string;
  href: string;
  light: string;
  dark?: string; // optional alternative logo for dark mode
};

export const INSTITUTIONS: Record<string, Institution> = {
  uio: { fullName: "University of Oslo", href: "https://www.uio.no/english/", light: uioPos.url, dark: uioNeg.url },
  uc: { fullName: "Universidad de Cantabria", href: "https://web.unican.es/en", light: ucLogo.url },
  um: { fullName: "Universidad de Murcia", href: "https://www.um.es/en", light: umPos.url, dark: umNeg.url },
  ifca: { fullName: "Instituto de Física de Cantabria (CSIC — UC)", href: "https://ifca.unican.es/en-us", light: ifcaLogo.url },
  magic: { fullName: "MAGIC Collaboration", href: "https://magic.mpp.mpg.de/", light: magicLogo.url },
};

export function InstitutionBadge({ id, size = "sm" }: { id: string; size?: "sm" | "md" }) {
  const inst = INSTITUTIONS[id];
  if (!inst) return null;
  const dim = size === "md" ? "h-10" : "h-7";
  return (
    <a
      href={inst.href}
      target="_blank"
      rel="noreferrer"
      title={inst.fullName}
      aria-label={inst.fullName}
      className={cn(
        "inline-flex items-center justify-center transition-opacity hover:opacity-75",
        dim,
      )}
    >
      {inst.dark ? (
        <>
          <img src={inst.light} alt={inst.fullName} className={cn("block w-auto object-contain dark:hidden", dim)} />
          <img src={inst.dark} alt={inst.fullName} className={cn("hidden w-auto object-contain dark:block", dim)} />
        </>
      ) : (
        <img src={inst.light} alt={inst.fullName} className={cn("w-auto object-contain", dim)} />
      )}
    </a>
  );
}

export function InstitutionBadges({ ids, size = "sm" }: { ids?: string[]; size?: "sm" | "md" }) {
  if (!ids || ids.length === 0) return null;
  return (
    <span className="inline-flex flex-wrap items-center gap-3">
      {ids.map((id) => (
        <InstitutionBadge key={id} id={id} size={size} />
      ))}
    </span>
  );
}