export type Conference = {
  slug: string;
  year: string;
  name: string;
  city: string;
  country: string;
  role: "talk" | "attendee" | "defense";
  contribution?: string;
  summary: string;
  summaryEs: string;
  abstract?: string;
  abstractEs?: string;
  slidesPdf?: string | null;
  institutions?: string[];
  url?: string;
};

const m15Abstract =
  "Dark matter (DM), a large (~85%) non-baryonic and non-relativistic component of the matter density of the Universe, likely consists of one or several so-far undetected particles hypothesized in theories beyond the Standard Model (SM). One of the most promising approaches to shed light on the nature of DM particles is to search for signatures of their annihilation or decay into SM particles (among which very-high-energy gamma-rays) from regions of the sky believed to be highly DM-dominated, such as the Galactic Center, the clusters of galaxies and local compact objects such as the dwarf spheroidal galaxies and some globular clusters around the Milky Way. In this context, the latter two are among the most promising observational targets due to their relative proximity and lack of astrophysical background sources and are, therefore, paramount targets to be pointed at with Cherenkov telescopes to detect gamma rays produced by DM interactions or at least constrain the particle DM parameter space. In this contribution, I will present new determinations of the DM amount (i.e., the astrophysical factor for DM annihilation) in the M15 halo obtained through the MCMC Jeans analysis of their brightness and kinematic data through the CLUMPY software. I will also compare the different models I use and indicate which one seems to fit better.";

const m15AbstractEs =
  "La materia oscura (MO), un componente mayoritario (~85%) no bariónico y no relativista de la densidad de materia del Universo, probablemente está formada por una o varias partículas aún no detectadas, propuestas en teorías más allá del Modelo Estándar (ME). Uno de los enfoques más prometedores para arrojar luz sobre la naturaleza de las partículas de MO consiste en buscar firmas de su aniquilación o desintegración en partículas del ME (entre ellas, rayos gamma de muy alta energía) provenientes de regiones del cielo consideradas muy dominadas por MO, como el centro galáctico, los cúmulos de galaxias y objetos compactos locales como las galaxias enanas esferoidales y algunos cúmulos globulares en torno a la Vía Láctea. En este contexto, estos dos últimos son de los objetivos observacionales más prometedores por su relativa cercanía y la ausencia de fuentes astrofísicas de fondo y, por tanto, son objetivos clave para apuntar con telescopios Cherenkov y detectar los rayos gamma producidos por interacciones de MO, o al menos restringir el espacio de parámetros de la MO particulada. En esta contribución presentaré nuevas determinaciones de la cantidad de MO (es decir, el factor astrofísico para la aniquilación de MO) en el halo de M15 obtenidas mediante el análisis de Jeans con MCMC de sus datos de brillo y cinemáticos a través del software CLUMPY. También compararé los distintos modelos utilizados e indicaré cuál parece ajustar mejor.";

export const conferences: Conference[] = [
  {
    slug: "magic-lst-f2f-garching-2025",
    year: "2025",
    name: "MAGIC + LST Face-to-Face (F2F) Science Meeting",
    city: "Garching",
    country: "Germany",
    role: "talk",
    contribution: "Analysis of the dark matter density profile of M15",
    summary:
      "Joint science meeting bringing together the MAGIC and LST (CTAO) collaborations to coordinate ongoing analyses and joint observation programmes at the Roque de los Muchachos Observatory, with a strong focus on dark matter searches and multi-messenger follow-up.",
    summaryEs:
      "Reunión científica conjunta de las colaboraciones MAGIC y LST (CTAO) para coordinar los análisis en curso y los programas de observación conjuntos en el Observatorio del Roque de los Muchachos, con especial énfasis en búsquedas de materia oscura y seguimiento multi-mensajero.",
    abstract: m15Abstract,
    abstractEs: m15AbstractEs,
    slidesPdf: "/presentations/m15-garching-2025.pdf",
    institutions: ["uio", "magic"],
  },
  {
    slug: "nordic-particle-physics-2025",
    year: "2025",
    name: "28th Nordic Particle Physics Meeting",
    city: "Svingvoll",
    country: "Norway",
    role: "talk",
    contribution: "Analysis of the dark matter density profile of M15",
    summary:
      "Annual meeting of the Nordic particle physics community covering collider physics, neutrinos, astroparticle physics and dark matter, with contributed talks from PhD students and early-career researchers across the Nordic institutions.",
    summaryEs:
      "Encuentro anual de la comunidad nórdica de física de partículas que reúne física de colisionadores, neutrinos, astropartículas y materia oscura, con contribuciones de estudiantes de doctorado e investigadores noveles de las instituciones nórdicas.",
    abstract: m15Abstract,
    abstractEs: m15AbstractEs,
    slidesPdf: "/presentations/m15-svingvoll-2025.pdf",
    institutions: ["uio", "magic"],
  },
  {
    slug: "magic-general-meeting-lodz-2024",
    year: "2024",
    name: "MAGIC General Meeting",
    city: "Łódź",
    country: "Poland",
    role: "talk",
    contribution: "Analysis of the dark matter density profile of M15",
    summary:
      "Plenary meeting of the MAGIC Collaboration where working groups present analysis status, instrument performance and upcoming science strategy for the two 17-m Imaging Atmospheric Cherenkov Telescopes at La Palma.",
    summaryEs:
      "Reunión plenaria de la colaboración MAGIC, en la que los grupos de trabajo presentan el estado de los análisis, el rendimiento del instrumento y la estrategia científica de los dos telescopios Cherenkov de 17 m de MAGIC en La Palma.",
    abstract: m15Abstract,
    abstractEs: m15AbstractEs,
    slidesPdf: "/presentations/m15-lodz-2024.pdf",
    institutions: ["uio", "magic"],
  },
  {
    slug: "msc-thesis-defense-2025",
    year: "2025",
    name: "M.Sc. thesis defense",
    city: "Oslo",
    country: "Norway",
    role: "defense",
    contribution:
      "Analysis of the dark matter density profile and J-factor of the globular cluster M15 for indirect dark matter searches with IACTs",
    summary:
      "Public defense of my M.Sc. thesis at the University of Oslo, presenting the Bayesian Jeans analysis of M15 with CLUMPY and the resulting J-factor estimates for indirect dark matter searches with IACTs.",
    summaryEs:
      "Defensa pública de mi tesis de máster en la Universidad de Oslo, presentando el análisis bayesiano de Jeans de M15 con CLUMPY y las correspondientes estimaciones del factor J para búsquedas indirectas de materia oscura con IACTs.",
    slidesPdf: null,
    institutions: ["uio", "magic"],
  },
  {
    slug: "nordic-dm-bergen-2024",
    year: "2024",
    name: "Nordic Conference on Dark Matter Searches",
    city: "Bergen",
    country: "Norway",
    role: "attendee",
    summary:
      "Nordic-scale conference bringing together direct, indirect and collider dark matter searches, with a programme spanning theory, phenomenology and experimental status updates from leading international experiments.",
    summaryEs:
      "Conferencia a escala nórdica que reúne búsquedas directas, indirectas y en colisionadores de materia oscura, con un programa que abarca teoría, fenomenología y actualizaciones experimentales de los principales experimentos internacionales.",
  },
  {
    slug: "magic-f2f-padova-2024",
    year: "2024",
    name: "MAGIC Face-to-Face Meeting",
    city: "Padova",
    country: "Italy",
    role: "attendee",
    summary:
      "Working face-to-face meeting of the MAGIC Collaboration, dedicated to in-depth discussion of analysis pipelines, hardware status and joint efforts with the LST programme of CTAO.",
    summaryEs:
      "Reunión presencial de trabajo de la colaboración MAGIC, dedicada a la discusión en profundidad de las cadenas de análisis, el estado del hardware y los esfuerzos conjuntos con el programa LST de CTAO.",
  },
];