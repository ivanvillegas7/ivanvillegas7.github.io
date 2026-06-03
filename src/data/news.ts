export type NewsItem = {
  date: string; // YYYY-MM-DD
  title: string;
  titleEs?: string;
  summary: string;
  summaryEs?: string;
  url: string; // LinkedIn post URL
  kind?: "post" | "repost";
};

/**
 * Latest LinkedIn posts / reposts.
 * Add a new entry at the top whenever you publish on LinkedIn.
 * The LinkedIn API does not expose a public feed for personal accounts,
 * so this list is maintained manually.
 */
export const news: NewsItem[] = [
  {
    date: "2025-06-13",
    title: "🎓 Master’s degree: complete!",
    titleEs: "🎓 Master: ¡completado!",
    summary:
      "Completed Master's in Physics at University of Oslo, specializing in high-energy astrophysics with MAGIC Collaboration.",
    summaryEs:
      "Completé mi Máster en Física en la Universidad de Oslo, especializándome en astrofísica de altas energías con la Colaboración MAGIC.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7341530506536050689/",
    kind: "post",
  },
  {
    date: "2025-06-11",
    title: "🎓 Master’s thesis: done!",
    titleEs: "🎓 TFM: ¡terminado!",
    summary:
      "Successfully defended Master's thesis on dark matter density profile of globular cluster M15 in high-energy astrophysics.",
    summaryEs:
      "Defendí exitosamente mi tesis de Máster sobre el perfil de densidad de materia oscura del cúmulo globular M15 en astrofísica de altas energías.",
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7341529298362687488/",
    kind: "post",
  },
{
    date: "2025-01-30",
    title: "🌟 Exciting milestone alert! 🌟",
    titleEs: "🌟 ¡Alerta de hito emocionante! 🌟",
    summary:
      "Presented preliminary Master's thesis results on dark matter at Nordic Conference on Particle Physics and MAGIC+LST F2F meeting.",
    summaryEs:
      "Presenté resultados preliminares de mi tesis de Máster sobre materia oscura en la Conferencia Nórdica de Física de Partículas y la reunión MAGIC+LST F2F.",
    url: "https://www.linkedin.com/posts/iv%C3%A1nvillegasp%C3%A9rez_exciting-milestone-alert-this-month-ugcPost-7285603409972318208-Gw66/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlkq7UB7YMAOTO6mgE7JjW33I2yrG-FZ5o",
    kind: "post",
  },
  {
    date: "2024-07-21",
    title: "My first scietific presentation!",
    titleEs: "¡Mi primera presentación científica!",
    summary:
      "Attended three major conferences in 2024 and presented Master's thesis preliminary results at MAGIC General Meeting in Łódź.",
    summaryEs:
      "Asistí a tres conferencias importantes en 2024 y presenté resultados preliminares de mi tesis de Máster en la Reunión General MAGIC en Łódź.",
    url: "https://www.linkedin.com/posts/iv%C3%A1nvillegasp%C3%A9rez_reflecting-on-an-exciting-year-in-2024-i-ugcPost-7264272979214131200-YrLs/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADlkq7UB7YMAOTO6mgE7JjW33I2yrG-FZ5o",
    kind: "post",
  },
];
