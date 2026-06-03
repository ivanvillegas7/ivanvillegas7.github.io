import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// Lazy import to avoid SSR issues with pdfjs-dist worker
type PdfDoc = {
  numPages: number;
  getPage: (n: number) => Promise<{
    getViewport: (opts: { scale: number }) => { width: number; height: number };
    render: (opts: { canvasContext: CanvasRenderingContext2D; viewport: unknown }) => { promise: Promise<void> };
  }>;
};

let pdfjsPromise: Promise<typeof import("pdfjs-dist")> | null = null;
function loadPdfjs() {
  if (!pdfjsPromise) {
    pdfjsPromise = import("pdfjs-dist").then(async (mod) => {
      const workerUrl = (await import("pdfjs-dist/build/pdf.worker.min.mjs?url")).default;
      mod.GlobalWorkerOptions.workerSrc = workerUrl;
      return mod;
    });
  }
  return pdfjsPromise;
}

export function SlideDeck({ url, lang }: { url: string; lang: "en" | "es" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [doc, setDoc] = useState<PdfDoc | null>(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    loadPdfjs()
      .then((pdfjs) => pdfjs.getDocument({ url }).promise)
      .then((d) => {
        if (cancelled) return;
        setDoc(d as unknown as PdfDoc);
        setPage(1);
        setLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        setError(String(e?.message ?? e));
        setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [url]);

  // Render current page
  useEffect(() => {
    if (!doc || !canvasRef.current) return;
    let cancelled = false;
    (async () => {
      const pg = await doc.getPage(page);
      if (cancelled) return;
      const canvas = canvasRef.current!;
      const container = containerRef.current!;
      const cssWidth = Math.min(container.clientWidth, 1400);
      const baseViewport = pg.getViewport({ scale: 1 });
      const scale = cssWidth / baseViewport.width;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const viewport = pg.getViewport({ scale: scale * dpr });
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      canvas.style.width = `${viewport.width / dpr}px`;
      canvas.style.height = `${viewport.height / dpr}px`;
      const ctx = canvas.getContext("2d")!;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      await pg.render({ canvasContext: ctx, viewport }).promise;
    })().catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [doc, page]);

  const total = doc?.numPages ?? 0;
  const prev = useCallback(() => setPage((p) => Math.max(1, p - 1)), []);
  const next = useCallback(() => setPage((p) => Math.min(total || 1, p + 1)), [total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "PageUp") prev();
      if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const goFullscreen = async () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) await document.exitFullscreen();
    else await containerRef.current.requestFullscreen();
  };

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center overflow-hidden rounded-sm border border-border bg-black"
      >
        {loading && (
          <div className="flex h-[60vh] w-full items-center justify-center font-mono text-xs uppercase tracking-wider text-white/70">
            {lang === "es" ? "Cargando diapositivas…" : "Loading slides…"}
          </div>
        )}
        {error && (
          <div className="flex h-[40vh] w-full items-center justify-center px-6 text-center font-mono text-xs text-red-300">
            {error}
          </div>
        )}
        {!loading && !error && (
          <canvas ref={canvasRef} className="mx-auto block bg-white" />
        )}

        {/* Floating nav inside the slide stage */}
        {!loading && !error && total > 0 && (
          <>
            <button
              onClick={prev}
              disabled={page <= 1}
              aria-label={lang === "es" ? "Diapositiva anterior" : "Previous slide"}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-sm bg-white/85 p-2 text-black shadow transition-opacity hover:bg-white disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              disabled={page >= total}
              aria-label={lang === "es" ? "Siguiente diapositiva" : "Next slide"}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm bg-white/85 p-2 text-black shadow transition-opacity hover:bg-white disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            disabled={page <= 1}
            className="inline-flex items-center gap-1 rounded-sm border border-foreground/70 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={14} /> {lang === "es" ? "Anterior" : "Prev"}
          </button>
          <span className="font-mono text-xs tabular-nums text-muted-foreground">
            {page} / {total || "—"}
          </span>
          <button
            onClick={next}
            disabled={page >= total}
            className="inline-flex items-center gap-1 rounded-sm border border-foreground/70 px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-40"
          >
            {lang === "es" ? "Siguiente" : "Next"} <ChevronRight size={14} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            max={total || 1}
            value={page}
            onChange={(e) => {
              const v = Number(e.target.value);
              if (!Number.isNaN(v)) setPage(Math.min(total || 1, Math.max(1, v)));
            }}
            className="w-16 rounded-sm border border-border bg-background px-2 py-1 font-mono text-xs text-foreground"
            aria-label={lang === "es" ? "Ir a la diapositiva" : "Go to slide"}
          />
          <button
            onClick={goFullscreen}
            className="inline-flex items-center gap-1 rounded-sm bg-foreground px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-background transition-colors hover:bg-foreground/85"
          >
            <Maximize2 size={13} /> {lang === "es" ? "Presentar" : "Present"}
          </button>
        </div>
      </div>
      <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {lang === "es" ? "Usa ← → para navegar." : "Use ← → keys to navigate."}
      </p>
    </div>
  );
}