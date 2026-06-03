import { GitHubIcon, LinkedInIcon, MailIcon, OrcidIcon, ResearchGateIcon } from "@/components/icons/brand-icons";
import type { ComponentType, SVGProps } from "react";

const links: { label: string; href: string; handle: string; Icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { label: "Email", href: "mailto:ivanvillegasperez@protonmail.com", handle: "ivanvillegasperez@protonmail.com", Icon: MailIcon },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/Iv%C3%A1nVillegasP%C3%A9rez/",
    handle: "/in/IvánVillegasPérez",
    Icon: LinkedInIcon,
  },
  { label: "GitHub", href: "https://github.com/ivanvillegas7", handle: "@ivanvillegas7", Icon: GitHubIcon },
  {
    label: "ORCID",
    href: "https://orcid.org/0009-0001-2300-603X",
    handle: "0009-0001-2300-603X",
    Icon: OrcidIcon,
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Ivan-Villegas-Perez",
    handle: "Ivan-Villegas-Perez",
    Icon: ResearchGateIcon,
  },
];

export function Socials() {
  return (
    <dl className="grid grid-cols-1 gap-y-3">
      {links.map((l) => (
        <div key={l.label} className="flex items-baseline justify-between gap-4 border-b border-dashed border-border pb-2">
          <dt className="flex items-center gap-2 font-serif italic text-muted-foreground">
            <l.Icon className="h-4 w-4 text-foreground/70" />
            <span>{l.label}</span>
          </dt>
          <dd>
            <a
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              {l.handle} ↗
            </a>
          </dd>
        </div>
      ))}
    </dl>
  );
}