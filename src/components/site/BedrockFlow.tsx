import { motion } from "framer-motion";

/**
 * Hero visual: the actual offer as a flow. Your Spring Boot service → Amazon
 * Bedrock (Knowledge Base + model) → guardrails and evaluation → production.
 * Pure CSS/Tailwind + framer-motion, same glass language as the rest of the site.
 */
const STAGES = [
  { k: "01", title: "Your Spring Boot service", sub: "Existing auth, data, deploys. No rewrite.", tag: "Java · Spring AI" },
  { k: "02", title: "Amazon Bedrock", sub: "Knowledge Base retrieval + model call.", tag: "RAG · Claude · Titan" },
  { k: "03", title: "Guardrails + evaluation", sub: "Test set, scoring, cost per request.", tag: "evals · observability" },
  { k: "04", title: "Production", sub: "Monitored, forecastable, yours to run.", tag: "AWS · your account" },
];

const STATS = [
  { label: "retrieval accuracy on eval set", value: "measured" },
  { label: "cost per request", value: "tracked" },
  { label: "p95 latency", value: "budgeted" },
];

export function BedrockFlow() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="glass relative overflow-hidden rounded-3xl p-5 shadow-[var(--shadow-card)]"
      >
        {/* window chrome */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            <span className="h-2 w-2 rounded-full bg-primary/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            pilot → production
          </span>
        </div>

        {/* stages with a travelling pulse on the connector */}
        <div className="relative">
          <div className="absolute bottom-6 left-[19px] top-6 w-px bg-border-strong/70" aria-hidden />
          <motion.span
            aria-hidden
            className="absolute left-[16px] h-[7px] w-[7px] rounded-full bg-primary shadow-[0_0_14px_2px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
            animate={{ top: ["8%", "88%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
          />
          <ol className="space-y-3">
            {STAGES.map((s, i) => (
              <motion.li
                key={s.k}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 + i * 0.12 }}
                className="relative flex items-start gap-3"
              >
                <span
                  className={[
                    "relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full border font-mono text-[11px]",
                    i === 1
                      ? "border-primary/60 bg-primary/15 text-primary"
                      : "border-border-strong bg-background text-muted-foreground",
                  ].join(" ")}
                >
                  {s.k}
                </span>
                <div className="min-w-0 flex-1 rounded-xl border border-border/70 bg-surface/60 px-3.5 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-[13.5px] font-bold text-foreground">{s.title}</span>
                    <span className="hidden shrink-0 rounded-md bg-surface-elevated px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground sm:inline">
                      {s.tag}
                    </span>
                  </div>
                  <div className="mt-0.5 text-[11.5px] leading-snug text-muted-foreground">{s.sub}</div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* stat strip */}
        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border/70 pt-4">
          {STATS.map((st, i) => (
            <motion.div
              key={st.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + i * 0.1 }}
              className="rounded-lg bg-surface-elevated/60 px-2 py-2 text-center"
            >
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-primary">{st.value}</div>
              <div className="mt-0.5 text-[9.5px] leading-tight text-muted-foreground">{st.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="absolute -right-3 -top-3 rounded-full border border-primary/40 bg-background/90 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-primary shadow-[var(--shadow-glow)]"
      >
        runs in your AWS account
      </motion.div>
    </div>
  );
}
