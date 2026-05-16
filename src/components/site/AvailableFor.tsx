import { availableMarkets } from "@/lib/siteContent";

export function AvailableFor() {
  return (
    <section className="py-10 md:py-14">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span className="text-foreground/70">Available for projects in</span>
          <span className="text-border-strong">·</span>
          {availableMarkets.map((m, i) => (
            <div key={m.name} className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <span className="grayscale opacity-80" aria-hidden>
                  {m.flag}
                </span>
                <span>{m.name}</span>
              </span>
              {i < availableMarkets.length - 1 && <span className="text-border-strong">·</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
