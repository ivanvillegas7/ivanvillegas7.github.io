## Goals

1. Add social/profile logos, two CVs, contact email.
2. Project metadata fixes (titles, dates, naming).
3. AI-generated header image, dark mode (system default), Spanish/English toggle.
4. New "Conferences" section.

## 1. Contact & socials

- Update `src/components/socials.tsx`:
  - Email → `ivanvillegasperez@proton.com`.
  - Add inline SVG/Lucide logos next to each label: ORCID, LinkedIn, GitHub, ResearchGate (Lucide doesn't ship ORCID/ResearchGate, so use small inline SVGs for those; Linkedin/Github from Lucide).
- Mirror the same icon row in the hero/contact areas where the handle currently appears.

## 2. CVs

- Keep `/cv.pdf` (regular CV). Add `/cva.pdf` (academic) once you upload.
- Update navbar + hero buttons to offer **CV** and **CVA** as two side-by-side download buttons.
- Add a small note "Academic CV (CVA)" tooltip/label.

## 3. Project data updates (`src/data/projects.ts`)

Fetch official titles from the two handle.net links and replace `title` for:
- **BSc thesis** (kepler-exoplanet-transits) → official title from `hdl.handle.net/10902/30224`. Update period to **"2022 — 2023"** and BSc context to **"BSc in Physics (2019 — 2023) · Universidad de Cantabria (UC)"**.
- **MSc thesis** (m15) → official title from `hdl.handle.net/10852/120910`.
- Replace `reportPdf` for BSc/MSc with the handle.net URL (open in new tab) since the PDFs aren't on GitHub. Inline full-text for these two stays as the curated abstract + key figures already built.
- Normalize naming everywhere: **Universidad de Cantabria (UC)** on first mention per block, then **UC** thereafter (replaces mixes of "UniCan", "University of Cantabria", "Universidad de Cantabria").

## 4. Hero / about copy (`src/routes/index.tsx`)

- "Based in: **Spain**" (replaces Europe).
- Add **cosmology, astrophysics, particle physics** to the interest list (dedupe with existing tags).
- Add the new AI-generated header image to the hero (right column or full-bleed band above the split, depending on space at 360px viewport — will keep mobile clean by stacking).

## 5. AI-generated header image

- Generate one wide hero image: MAGIC + LST telescopes at night, gamma-ray sky glow, faint dark matter halo overlay. Saved to `src/assets/hero-telescopes.jpg` (1920×1024, fast tier first, premium only if quality is off).
- Used as the hero background/illustration on `/` and as a subtle banner on `/projects`.

## 6. Dark mode (system default)

- Add a `ThemeProvider` (light/dark/system, default = system) backed by `localStorage` + `prefers-color-scheme` media query, applied via `class="dark"` on `<html>`.
- Add a small toggle button in `SiteNav` (sun/moon icon, cycles light → dark → system).
- Verify existing `.dark` tokens in `src/styles.css` work with the Paper & Ink palette; tweak dark tokens to a warm ink-on-graphite variant so it doesn't look like default shadcn slate.

## 7. Internationalization (EN/ES, EN default)

- Add lightweight i18n: a `LanguageProvider` + `useT()` hook reading from `src/i18n/en.ts` and `src/i18n/es.ts` dictionaries. No external lib needed (keeps bundle small).
- Persist choice in `localStorage`; default = `en`.
- Add EN/ES toggle in `SiteNav` next to the theme toggle.
- Translate: nav, hero, section headings, contact blurb, project list labels (Supervisors/Co-authors, year, nature, "Download report", etc.), conference section, footer.
- Project **titles, abstracts, supervisors, full-text articles** stay in their original language (English for all five) — too much specialized content to safely auto-translate, and academic CVs/reports are typically kept in source language. The UI chrome around them switches.
- Set `<html lang>` reactively from the provider.

## 8. Conferences section

New file `src/data/conferences.ts` + new route `src/routes/conferences.tsx` linked from the nav.

Data model:

```ts
type Conference = {
  year: string;
  name: string;
  city: string;
  country: string;
  role: "Contributed talk" | "Attendee";
  contribution?: string;      // talk title
  summary: string;            // 2–3 sentence blurb about the conference
  slidesPdf?: string | null;  // /presentations/<slug>.pdf when uploaded
  url?: string;               // official conference page
};
```

Seeded entries:

- **2024 — MAGIC General Meeting**, Łódź, Poland — talk: *Analysis of the dark matter density profile of M15*.
- **2025 — 28th Nordic Particle Physics Meeting**, Svingvoll, Norway — talk: same.
- **2025 — MAGIC+LST Face-to-Face (F2F) Science Meeting**, Garching, Germany — talk: same.
- **2024 — MAGIC Face-to-Face Meeting**, Padova, Italy — attendee.
- **2024 — Nordic Conference on Dark Matter Searches**, Bergen, Norway — attendee.

Layout: two subsections, "Presentations" (with slides download button — disabled until you upload PDFs to `public/presentations/`) and "Other conferences attended" (compact list). Each card has the 2–3 sentence summary, dates, location, and an optional link to the conference website.

Also surface a "Selected talks" teaser on the home page (3 most recent presentations) linking to `/conferences`.

## Technical notes

- I'll use `websearch` / `lov-fetch-website` to pull the exact thesis titles from the two `hdl.handle.net` pages before writing them in.
- Hero AI image generated via `imagegen--generate_image` (fast tier, 1920×1024, jpg).
- Theme + language providers wired in `src/routes/__root.tsx` so they wrap every route.
- i18n keys grouped by area (`nav.*`, `hero.*`, `projects.*`, `conferences.*`, `contact.*`, `footer.*`). All component strings switch to `t("…")`.
- ResearchGate / ORCID logos: small inline `<svg>` components in `src/components/icons/`.
- Will leave a clear `// TODO: replace` comment + README note for the CV/CVA/presentation PDFs you'll upload later.

## What's blocked on you

1. **CV.pdf and CVA.pdf** uploads (I'll wire the buttons; downloads will 404 until uploaded).
2. **Conference slide PDFs** (same — placeholders, no broken links shown to visitors).
3. Anything you'd like to manually correct in the auto-translated Spanish strings later.