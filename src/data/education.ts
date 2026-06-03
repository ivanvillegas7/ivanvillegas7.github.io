export type Course = {
  code?: string;
  title: string;
  titleEs: string;
  ects: number;
  year?: string;
  /** Optional href for course links (e.g. project pages or external sites). */
  href?: string;
  /** Marker for ERASMUS-recognised courses. */
  starred?: boolean;
};

export type Degree = {
  slug: string;
  degree: string;
  degreeEs: string;
  field: string;
  fieldEs: string;
  institution: string;
  institutionEs: string;
  institutionId: string; // institution badge key
  period: string;
  totalEcts: number;
  specialisation: string;
  specialisationEs: string;
  notes?: string;
  notesEs?: string;
  thesisTitle?: string;
  thesisTitleEs?: string;
  /** Optional internal link for the thesis (e.g. project page). */
  thesisHref?: string;
  courses: { groupLabel: string; groupLabelEs: string; items: Course[] }[];
};

export const education: Degree[] = [
  {
    slug: "msc-oslo",
    degree: "M.Sc. in Physics: Nuclear and Particle Physics",
    degreeEs: "Máster en Física Nuclear y de Partículas",
    field: "Nuclear and Particle Physics",
    fieldEs: "Física Nuclear y de Partículas",
    institution: "University of Oslo (UiO)",
    institutionEs: "Universidad de Oslo (UiO)",
    institutionId: "uio",
    period: "2023 — 2025",
    totalEcts: 120,
    specialisation: "Astroparticle physics / high-energy astrophysics",
    specialisationEs: "Física de astropartículas / astrofísica de altas energías",
    thesisTitle:
      "Analysis of the dark matter density profile and J-factor of the globular cluster M15 for indirect dark matter searches with IACTs",
    thesisTitleEs:
      "Análisis del perfil de densidad de materia oscura y del factor J del cúmulo globular M15 para búsquedas indirectas de materia oscura con IACTs",
    thesisHref: "/projects/m15",
    courses: [
      {
        groupLabel: "Coursework",
        groupLabelEs: "Asignaturas",
        items: [
          { code: "FYS4170", title: "Relativistic Quantum Field Theory", titleEs: "Teoría Cuántica de Campos Relativista", ects: 10, year: "Autumn 2023" },
          { code: "FYS4505", title: "Methods and Instrumentation for Nuclear and Particle Physics", titleEs: "Métodos e Instrumentación para Física Nuclear y de Partículas", ects: 10, year: "Autumn 2023" },
          { code: "FYS4555", title: "Particle Physics", titleEs: "Física de Partículas", ects: 10, year: "Autumn 2023" },
          { code: "AST5220", title: "Cosmology II", titleEs: "Cosmología II", ects: 10, year: "Spring 2024" },
          { code: "FYSSP100", title: "Physics, Special Syllabus: Astroparticle Physics", titleEs: "Física, Temario Especial: Astropartículas", ects: 10, year: "Spring 2024" },
          { code: "NORINT0114", title: "Norwegian Language Course", titleEs: "Curso de Lengua Noruega", ects: 0, year: "Spring 2024", href: "https://www.uio.no/studier/emner/hf/iln/NORINT0114/index-eng.html" },
          { code: "AST5240", title: "Bayesian Cosmological Data Analysis", titleEs: "Análisis Bayesiano de Datos Cosmológicos", ects: 5, year: "Autumn 2024" },
          { code: "FYSSP050", title: "Physics, Special Syllabus: MAGIC Shift", titleEs: "Física, Temario Especial: Turno en MAGIC", ects: 5, year: "Autumn 2024" },
        ],
      },
      {
        groupLabel: "Master's thesis",
        groupLabelEs: "Tesis de máster",
        items: [
          { code: "FYS5960", title: "Physics — Master Thesis", titleEs: "Física — Tesis de Máster", ects: 60, year: "Spring 2025", href: "/projects/m15" },
        ],
      },
    ],
  },
  {
    slug: "bsc-cantabria",
    degree: "B.Sc. in Physics",
    degreeEs: "Grado en Física",
    field: "Physics",
    fieldEs: "Física",
    institution: "Universidad de Cantabria (UC)",
    institutionEs: "Universidad de Cantabria (UC)",
    institutionId: "uc",
    period: "2019 — 2023",
    totalEcts: 240,
    specialisation: "Fundamental Physics — focus on astrophysics, cosmology and general relativity",
    specialisationEs: "Física Fundamental — con énfasis en astrofísica, cosmología y relatividad general",
    notes: "Including an ERASMUS exchange at the University of Oslo (3rd year).",
    notesEs: "Incluye un intercambio ERASMUS en la Universidad de Oslo (3.º curso).",
    thesisTitle:
      "Simulation, detection and characterization of exoplanet's transits with the Kepler space mission",
    thesisTitleEs:
      "Simulación, detección y caracterización de tránsitos de exoplanetas con la misión espacial Kepler",
    thesisHref: "/projects/kepler-exoplanet-transits",
    courses: [
      {
        groupLabel: "First year",
        groupLabelEs: "Primer curso",
        items: [
          { title: "Basic Experimental Physics I: Movement, Force, Astronomy", titleEs: "Física Experimental Básica I: Movimiento, Fuerza, Astronomía", ects: 6 },
          { title: "Basic Experimental Physics II: Waves — Light and Sound", titleEs: "Física Experimental Básica II: Ondas — Luz y Sonido", ects: 6 },
          { title: "Basic Experimental Physics III: Matter and its Properties", titleEs: "Física Experimental Básica III: La Materia y sus Propiedades", ects: 6 },
          { title: "Basic Experimental Physics IV: Circuits and Electronics", titleEs: "Física Experimental Básica IV: Circuitos y Electrónica", ects: 6 },
          { title: "Mathematics I: Linear Algebra and Geometry", titleEs: "Matemáticas I: Álgebra Lineal y Geometría", ects: 6 },
          { title: "Mathematics II: Differential Calculus", titleEs: "Matemáticas II: Cálculo Diferencial", ects: 6 },
          { title: "Mathematics III: Integral Calculus", titleEs: "Matemáticas III: Cálculo Integral", ects: 6 },
          { title: "Computational Tools", titleEs: "Herramientas Computacionales", ects: 6 },
          { title: "Multidisciplinary Laboratory", titleEs: "Laboratorio Multidisciplinar", ects: 6 },
          { title: "Programming", titleEs: "Programación", ects: 6 },
        ],
      },
      {
        groupLabel: "Second year",
        groupLabelEs: "Segundo curso",
        items: [
          { title: "English", titleEs: "Inglés", ects: 6 },
          { title: "Cross-curricular Skills, Values and Competences", titleEs: "Competencias Transversales, Valores y Habilidades Personales", ects: 6 },
          { title: "Electricity and Magnetism", titleEs: "Electricidad y Magnetismo", ects: 6 },
          { title: "Quantum Physics I", titleEs: "Física Cuántica I", ects: 6 },
          { title: "Physics Laboratory I", titleEs: "Laboratorio de Física I", ects: 6 },
          { title: "Physics Laboratory II", titleEs: "Laboratorio de Física II", ects: 6 },
          { title: "Classical Mechanics", titleEs: "Mecánica Clásica", ects: 6 },
          { title: "Thermodynamics", titleEs: "Termodinámica", ects: 6 },
          { title: "Mathematical Methods of Physics I", titleEs: "Métodos Matemáticos de la Física I", ects: 6 },
          { title: "Mathematical Methods of Physics II", titleEs: "Métodos Matemáticos de la Física II", ects: 6 },
        ],
      },
      {
        groupLabel: "Third year — recognised through ERASMUS",
        groupLabelEs: "Tercer curso — convalidado por ERASMUS",
        items: [
          { title: "Astronomy", titleEs: "Astronomía", ects: 6, starred: true },
          { title: "Electromagnetism and Optics", titleEs: "Electromagnetismo y Óptica", ects: 6, starred: true },
          { title: "Physics Laboratory III: Experimental Optics", titleEs: "Laboratorio de Física III: Óptica Experimental", ects: 6, starred: true },
          { title: "Quantum Physics II", titleEs: "Física Cuántica II", ects: 6, starred: true },
          { title: "Quantum Physics III", titleEs: "Física Cuántica III", ects: 6, starred: true },
          { title: "Quantum Physics IV", titleEs: "Física Cuántica IV", ects: 6, starred: true },
          { title: "Statistical Physics", titleEs: "Física Estadística", ects: 6, starred: true },
          { title: "History and Panorama of Research and Applications in Physics", titleEs: "Historia y Panorama de la Investigación y Aplicaciones de la Física", ects: 6, starred: true },
          { title: "Numerical Methods", titleEs: "Métodos Numéricos", ects: 6, starred: true },
          { title: "Projects: Conception, Development and Tools", titleEs: "Proyectos: Concepción, Desarrollo y Herramientas", ects: 6, starred: true },
        ],
      },
      {
        groupLabel: "ERASMUS courses taken at University of Oslo",
        groupLabelEs: "Asignaturas cursadas en ERASMUS (Universidad de Oslo)",
        items: [
          { title: "Space Physics and Technology", titleEs: "Física y Tecnología Espacial", ects: 6 },
          { title: "Optics and Light", titleEs: "Óptica y Luz", ects: 6 },
          { title: "Condensed Matter Physics", titleEs: "Física de la Materia Condensada", ects: 6 },
          { title: "Introduction to Nuclear and Particle Physics", titleEs: "Introducción a la Física Nuclear y de Partículas", ects: 6 },
          { title: "Statistical Mechanics", titleEs: "Mecánica Estadística", ects: 6 },
          { title: "Computational Physics", titleEs: "Física Computacional", ects: 6, href: "/projects/schrodinger-equation" },
        ],
      },
      {
        groupLabel: "Fourth year — Mention in Fundamental Physics",
        groupLabelEs: "Cuarto curso — Mención en Física Fundamental",
        items: [
          { title: "Physics Laboratory IV", titleEs: "Laboratorio de Física IV", ects: 6 },
          { title: "Advanced Computation", titleEs: "Computación Avanzada", ects: 6 },
          { title: "Astrophysics", titleEs: "Astrofísica", ects: 6 },
          { title: "Quantum Mechanics", titleEs: "Mecánica Cuántica", ects: 6 },
          { title: "General Relativity", titleEs: "Relatividad General", ects: 6 },
          { title: "Elective recognised as German (B1)", titleEs: "Optativa convalidada por Alemán (B1)", ects: 6 },
          { title: "External Internship at IFCA", titleEs: "Prácticas Externas en el IFCA", ects: 6, href: "/projects/calsat-cmb" },
          { title: "Bachelor Thesis", titleEs: "Trabajo Fin de Grado", ects: 12, href: "/projects/kepler-exoplanet-transits" },
        ],
      },
    ],
  },
];