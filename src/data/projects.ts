/**
 * Each project drives both the listing on /projects and a dedicated page
 * at /projects/$slug. Drop the corresponding report PDF at
 * public/reports/<slug>.pdf and it will render inline + be downloadable.
 *
 * Edit the abstracts, collaborators and tags below to match your work.
 */

export type Project = {
  slug: string;
  year: string;
  title: string;
  titleEs?: string;
  nature: string; // e.g. "Master's thesis", "Course project", "Internship"
  natureEs?: string;
  context: string; // affiliation / programme
  contextEs?: string;
  abstract: string;
  abstractEs?: string;
  collaborators: { name: string; role?: string; roleEs?: string; href?: string }[];
  /** Label used to introduce the people list. Defaults to "Supervisors". */
  peopleLabel?: string;
  tags: string[];
  githubUrl: string;
  /** PDF file under /public/reports/<slug>.pdf. Set to null if not yet available. */
  reportPdf: string | null;
  language?: string;
  /** Institution badges (keys of INSTITUTIONS). */
  institutions?: string[];
  /** Natural language of the report ("en" | "es"). Triggers a mismatch warning. */
  reportLang?: "en" | "es";
  /** When true, the project page renders an inline full-text article
   * (with figures) instead of embedding the PDF viewer. The PDF is still
   * offered as a download. */
  hasFullText?: boolean;
};

export const projects: Project[] = [
  {
    slug: "m15",
    year: "2023 — 2025",
    title:
      "Analysis of the dark matter density profile and J-factor of the globular cluster M15 for indirect dark matter searches with IACTs",
    titleEs:
      "Análisis del perfil de densidad de materia oscura y del factor J del cúmulo globular M15 para búsquedas indirectas de materia oscura con IACTs",
    nature: "Master's thesis",
    natureEs: "Tesis de máster",
    context: "M.Sc. in Physics · University of Oslo (UiO) · MAGIC Collaboration",
    contextEs: "Máster en Física · Universidad de Oslo (UiO) · Colaboración MAGIC",
    abstract:
      "Computation of the dark matter density profile and integrated J-factor of the globular cluster M15, intended as input for indirect dark matter searches with Imaging Atmospheric Cherenkov Telescopes (IACTs). The repository hosts the full simulation pipeline, intermediate results and figures produced during the thesis work.",
    abstractEs:
      "Cálculo del perfil de densidad de materia oscura y del factor J integrado del cúmulo globular M15, pensado como entrada para búsquedas indirectas de materia oscura con telescopios Cherenkov atmosféricos de imagen (IACTs). El repositorio contiene toda la cadena de simulación, los resultados intermedios y las figuras producidas durante la tesis.",
    collaborators: [
      { name: "Prof. Heidi Sandaker", role: "University of Oslo (UiO)", roleEs: "Universidad de Oslo (UiO)" },
      { name: "Dr. Giacomo D'Amico", role: "then University of Bergen (UiB) · now IFAE", roleEs: "entonces Universidad de Bergen (UiB) · ahora IFAE" },
      { name: "Dr. Julia I. Djuvsland", role: "formerly University of Bergen (UiB) · since left academia", roleEs: "anteriormente en la Universidad de Bergen (UiB) · ha dejado la academia" },
      { name: "Dr. Francesco G. Saturni", role: "INAF — Osservatorio Astronomico di Roma (OAR)", roleEs: "INAF — Observatorio Astronómico de Roma (OAR)" },
    ],
    peopleLabel: "Supervisors",
    tags: ["Dark matter", "J-factor", "MAGIC", "Globular cluster"],
    githubUrl: "https://github.com/ivanvillegas7/M15",
    reportPdf: "https://hdl.handle.net/10852/120910",
    language: "Python",
    institutions: ["uio", "magic"],
    reportLang: "en",
    hasFullText: true,
  },
  {
    slug: "cmb-power-spectrum",
    year: "2024",
    title: "Computation of the CMB power spectrum",
    titleEs: "Cálculo del espectro de potencias del fondo cósmico de microondas",
    nature: "Course project",
    natureEs: "Proyecto de asignatura",
    context: "AST5220 — Cosmology II · University of Oslo (UiO)",
    contextEs: "AST5220 — Cosmología II · Universidad de Oslo (UiO)",
    abstract:
      "End-to-end implementation of the cosmic microwave background angular power spectrum, from background cosmology and recombination history through perturbation theory and line-of-sight integration. Written in C++ following the structure proposed in the AST5220 course at UiO.",
    abstractEs:
      "Implementación de extremo a extremo del espectro angular de potencias del fondo cósmico de microondas, desde la cosmología de fondo y la historia de la recombinación hasta la teoría de perturbaciones y la integración a lo largo de la línea de visión. Escrito en C++ siguiendo la estructura propuesta en la asignatura AST5220 de la UiO.",
    collaborators: [
      { name: "Prof. David F. Mota", role: "University of Oslo (UiO)", roleEs: "Universidad de Oslo (UiO)" },
      { name: "Dr. Hans A. Winther", role: "University of Oslo (UiO)", roleEs: "Universidad de Oslo (UiO)" },
    ],
    peopleLabel: "Supervisors",
    tags: ["CMB", "Cosmology", "C++", "Perturbation theory"],
    githubUrl: "https://github.com/ivanvillegas7/CMB_power_spectrum",
    reportPdf: "/reports/cmb-power-spectrum.pdf",
    language: "C++",
    institutions: ["uio"],
    reportLang: "en",
    hasFullText: true,
  },
  {
    slug: "kepler-exoplanet-transits",
    year: "2022 — 2023",
    title:
      "Simulación, detección y caracterización de tránsitos de exoplanetas con la misión espacial Kepler",
    titleEs:
      "Simulación, detección y caracterización de tránsitos de exoplanetas con la misión espacial Kepler",
    nature: "Bachelor's degree project",
    natureEs: "Trabajo de fin de grado",
    context: "B.Sc. in Physics (2019 — 2023) · Universidad de Cantabria (UC)",
    contextEs: "Grado en Física (2019 — 2023) · Universidad de Cantabria (UC)",
    abstract:
      "Final degree project on the simulation, detection and characterization of exoplanetary transits using public Kepler data. Includes a forward model of transit light curves, a detection pipeline based on box-least-squares search, and a characterization step yielding planetary radius, orbital period and impact parameter estimates.",
    abstractEs:
      "Trabajo de fin de grado sobre la simulación, detección y caracterización de tránsitos de exoplanetas con datos públicos de Kepler. Incluye un modelo directo de curvas de luz de tránsito, una cadena de detección basada en búsqueda box-least-squares y una etapa de caracterización que proporciona estimaciones del radio planetario, el periodo orbital y el parámetro de impacto.",
    collaborators: [
      { name: "Prof. Diego Herranz Muñoz", role: "IFCA (CSIC — UC)", roleEs: "IFCA (CSIC — UC)" },
      { name: "Dr. Rosa María Domínguez Quintero", role: "IFCA (CSIC — UC)", roleEs: "IFCA (CSIC — UC)" },
    ],
    peopleLabel: "Supervisors",
    tags: ["Exoplanets", "Kepler", "Transit photometry", "Python"],
    githubUrl:
      "https://github.com/ivanvillegas7/Simulation-detection-and-characterization-of-exoplanet-transits-with-Kepler-space-mission",
    reportPdf: "https://hdl.handle.net/10902/30224",
    language: "Python",
    institutions: ["ifca", "uc"],
    reportLang: "es",
    hasFullText: true,
  },
  {
    slug: "calsat-cmb",
    year: "2023",
    title: "Calibration satellites for ground-based CMB experiments",
    titleEs: "Satélites de calibración para experimentos de CMB desde tierra",
    nature: "Research internship",
    natureEs: "Prácticas de investigación",
    context: "Instituto de Física de Cantabria (IFCA) · CSIC — UC",
    contextEs: "Instituto de Física de Cantabria (IFCA) · CSIC — UC",
    abstract:
      "Internship work at IFCA reviewing and extending the calibration calculations for a proposed calibration satellite (CalSat) targeting ground-based CMB polarization experiments. Contains the codes and plots produced while revisiting an earlier Master's thesis on the topic.",
    abstractEs:
      "Trabajo de prácticas en el IFCA revisando y ampliando los cálculos de calibración de un satélite de calibración propuesto (CalSat) destinado a experimentos de polarización del CMB desde tierra. Contiene los códigos y figuras producidos al revisitar una tesis de máster previa sobre el tema.",
    collaborators: [
      { name: "Dr. Francisco Javier Casas Reinares", role: "Instituto de Física de Cantabria (IFCA)", roleEs: "Instituto de Física de Cantabria (IFCA)" },
    ],
    peopleLabel: "Supervisor",
    tags: ["CMB", "Calibration", "Polarization", "Instrumentation"],
    githubUrl: "https://github.com/ivanvillegas7/CalSat_for_Ground-based_CMB_experiments",
    reportPdf: "/reports/calsat-cmb.pdf",
    language: "Python",
    institutions: ["ifca", "uc"],
    reportLang: "en",
    hasFullText: true,
  },
  {
    slug: "schrodinger-equation",
    year: "2021",
    title:
      "Application of Schrödinger's equation in a box using a single, double and triple slit configuration",
    titleEs:
      "Aplicación de la ecuación de Schrödinger en una caja con configuraciones de una, dos y tres rendijas",
    nature: "Course project",
    natureEs: "Proyecto de asignatura",
    context: "ERASMUS exchange · University of Oslo (UiO)",
    contextEs: "Intercambio ERASMUS · Universidad de Oslo (UiO)",
    abstract:
      "Simulation of the 2D time-dependent Schrödinger equation in a box, applied to single-, double- and triple-slit configurations. The Crank–Nicolson algorithm was implemented in C++ to evolve a Gaussian wave packet through n-slit potentials, and Python was used to visualise the time evolution of the probability density and of the real and imaginary parts of the wave function. The work recovers the expected diffraction patterns predicted by Huygens' principle and quantifies the precision of the Crank–Nicolson scheme via the deviation of the total probability from one.",
    abstractEs:
      "Simulación de la ecuación de Schrödinger 2D dependiente del tiempo en una caja, aplicada a configuraciones de una, dos y tres rendijas. Se implementó el algoritmo de Crank–Nicolson en C++ para evolucionar un paquete de ondas gaussiano a través de potenciales de n rendijas, y se utilizó Python para visualizar la evolución temporal de la densidad de probabilidad y de las partes real e imaginaria de la función de onda. El trabajo recupera los patrones de difracción esperados por el principio de Huygens y cuantifica la precisión del esquema de Crank–Nicolson a partir de la desviación de la probabilidad total respecto a uno.",
    collaborators: [
      { name: "Julián Guerrero Cánovas", role: "then ERASMUS student at UiO (home: Universidad de Murcia) · now at CIEMAT", roleEs: "entonces estudiante ERASMUS en la UiO (origen: Universidad de Murcia) · ahora en el CIEMAT" },
      { name: "María Pérez Martínez", role: "then ERASMUS student at UiO (home: UC)", roleEs: "entonces estudiante ERASMUS en la UiO (origen: UC)" },
      { name: "Elena Pujante Martínez", role: "then ERASMUS student at UiO (home: Universidad de Murcia)", roleEs: "entonces estudiante ERASMUS en la UiO (origen: Universidad de Murcia)" },
      { name: "Iván Villegas-Pérez", role: "then ERASMUS student at UiO (home: UC)", roleEs: "entonces estudiante ERASMUS en la UiO (origen: UC)" },
    ],
    peopleLabel: "Co-authors",
    tags: ["Quantum mechanics", "Crank–Nicolson", "Diffraction", "C++", "Python"],
    githubUrl: "https://github.com/ivanvillegas7/Schrodinger_equation",
    reportPdf: "/reports/schrodinger-equation.pdf",
    language: "Python",
    institutions: ["uio", "uc", "um"],
    reportLang: "en",
    hasFullText: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}