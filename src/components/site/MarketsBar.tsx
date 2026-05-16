import { marketsBar } from "@/lib/siteContent";

export function MarketsBar() {
  return (
    <section aria-label="Markets we ship into" className="border-y border-border/70 bg-surface/40 py-4">
      <div className="container-page overflow-hidden">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
          {marketsBar.map((m, i) => (
            <div key={m} className="flex items-center gap-6">
              <span className="text-foreground/80">{m}</span>
              {i < marketsBar.length - 1 && <span className="text-border-strong">·</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
