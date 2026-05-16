import { motion } from "framer-motion";
import { site } from "@/lib/siteContent";

/** Animated WhatsApp NLP demo inside a glass phone mockup. Pure SVG/CSS — no video asset. */
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[340px] animate-float-slow">
      <div
        className="relative aspect-[9/19] rounded-[2.4rem] border border-border-strong p-2 shadow-[var(--shadow-card)]"
        style={{ background: "linear-gradient(180deg, oklch(0.22 0.03 260), oklch(0.16 0.025 260))" }}
      >
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-background/80" />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-background p-3 pt-9">
          <div className="mb-3 flex items-center gap-2 border-b border-border pb-3">
            <div className="h-7 w-7 rounded-full bg-primary/30" />
            <div className="flex-1">
              <div className="font-mono text-[10px] text-muted-foreground">VENDOR</div>
              <div className="text-xs font-semibold">Sharma Dairy</div>
            </div>
            <div className="font-mono text-[10px] text-primary">live</div>
          </div>
          <div className="flex flex-col gap-2 text-[11px]">
            <Bubble side="left" delay={0.2}>kal dudh nahi bhejna 🙏</Bubble>
            <IntentCard delay={1.0} />
            <Bubble side="right" delay={2.0}>
              ✓ Skipped milk for tomorrow. ₹0 charged.
            </Bubble>
            <Bubble side="left" delay={3.2}>thanks!</Bubble>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 4, delay: 4, repeat: Infinity, repeatDelay: 1 }}
              className="self-end font-mono text-[10px] text-muted-foreground"
            >
              ~248ms
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, delay, children }: { side: "left" | "right"; delay: number; children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: [0, 1, 1, 0], y: [6, 0, 0, -2] }}
      transition={{ duration: 6, delay, repeat: Infinity, repeatDelay: 0 }}
      className={[
        "max-w-[80%] rounded-2xl px-3 py-2",
        side === "left"
          ? "self-start rounded-bl-sm bg-surface-elevated text-foreground"
          : "self-end rounded-br-sm bg-primary/90 text-primary-foreground",
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
}

function IntentCard({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: [0, 1, 1, 0], scale: [0.96, 1, 1, 0.98] }}
      transition={{ duration: 6, delay, repeat: Infinity }}
      className="glass self-start rounded-xl p-2 font-mono text-[10px]"
    >
      <div className="text-muted-foreground">intent.extracted</div>
      <div className="mt-1 grid grid-cols-3 gap-1">
        <span className="rounded bg-primary/15 px-1.5 py-0.5 text-primary">skip</span>
        <span className="rounded bg-primary/15 px-1.5 py-0.5 text-primary">tomorrow</span>
        <span className="rounded bg-primary/15 px-1.5 py-0.5 text-primary">milk</span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 hero-glow" />
      <div className="absolute inset-0 -z-10 dot-grid-bg opacity-60" />
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow"
            >
              AI-FIRST PRODUCT STUDIO · {site.location.toUpperCase()}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 font-display font-extrabold leading-[1.02] text-balance"
              style={{ fontSize: "clamp(2.8rem, 6.2vw, 6rem)" }}
            >
              We ship AI features that{" "}
              <span className="relative inline-block text-primary">
                actually run
                <span
                  aria-hidden
                  className="absolute -bottom-1 left-0 right-0 h-[6px] rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 60%, transparent), transparent)",
                    filter: "blur(4px)",
                  }}
                />
              </span>{" "}
              in production.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-[52ch] text-base text-muted-foreground md:text-lg"
            >
              {site.sub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a href="#work" className="pill pill-primary">
                See our work →
              </a>
              <a href="#contact" className="pill pill-ghost">
                Start a project
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-full opacity-70 blur-3xl"
              style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent), transparent 60%)" }}
            />
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
