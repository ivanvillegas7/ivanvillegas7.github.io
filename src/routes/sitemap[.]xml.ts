import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0" },
          { path: "/projects", priority: "0.9" },
          { path: "/conferences", priority: "0.8" },
          { path: "/projects/m15", priority: "0.7" },
          { path: "/projects/cmb-power-spectrum", priority: "0.7" },
          { path: "/projects/kepler-exoplanet-transits", priority: "0.7" },
          { path: "/projects/calsat-cmb", priority: "0.7" },
          { path: "/projects/schrodinger-equation", priority: "0.7" },
        ];
        const urls = entries
          .map(
            (e) =>
              `  <url><loc>${BASE_URL}${e.path}</loc><priority>${e.priority}</priority></url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});