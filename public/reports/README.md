# Project reports

Drop one PDF per project here, named after the project slug used in
`src/data/projects.ts`. For each one, also set the `reportPdf` field on
that project so the page embeds it and offers a download.

Expected files (one per pinned project):

- `m15.pdf`                          → /projects/m15
- `cmb-power-spectrum.pdf`           → /projects/cmb-power-spectrum
- `kepler-exoplanet-transits.pdf`    → /projects/kepler-exoplanet-transits
- `calsat-cmb.pdf`                   → /projects/calsat-cmb
- `schrodinger-equation.pdf`         → /projects/schrodinger-equation

Then in `src/data/projects.ts`, replace `reportPdf: null` with
`reportPdf: "/reports/<slug>.pdf"` for each project.