import { comparison } from "@/lib/siteContent";

export function Comparison() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">WHY US</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight md:text-5xl">
            Why GeekRabit vs. hiring full-time?
          </h2>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 font-mono text-sm">
            <thead>
              <tr>
                <th className="w-[34%] border-b border-border px-4 py-4 text-left text-xs uppercase tracking-widest text-muted-foreground"></th>
                {comparison.columns.map((c, i) => (
                  <th
                    key={c}
                    className={[
                      "border-b border-border px-4 py-4 text-left text-xs uppercase tracking-widest",
                      i === 2
                        ? "rounded-t-xl border-x border-t border-primary/40 bg-primary/[0.06] text-primary"
                        : "text-muted-foreground",
                    ].join(" ")}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row, ri) => (
                <tr key={row.label}>
                  <td className="border-b border-border/60 px-4 py-4 text-foreground/90">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td
                      key={i}
                      className={[
                        "border-b border-border/60 px-4 py-4 text-muted-foreground",
                        i === 2
                          ? "border-x border-primary/40 bg-primary/[0.06] font-semibold text-foreground"
                          : "",
                        i === 2 && ri === comparison.rows.length - 1 ? "rounded-b-xl border-b" : "",
                      ].join(" ")}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
