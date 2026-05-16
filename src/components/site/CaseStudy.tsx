import { motion } from "framer-motion";
import { caseStudy } from "@/lib/siteContent";

/** Stacked screenshot mockups — pure CSS, slow rotation, snap on hover. */
function ScreenStack() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[520px] [perspective:1400px] group">
      {/* WhatsApp screenshot */}
      <MockCard
        className="absolute right-0 top-0 h-[320px] w-[210px]"
        rot="rotate-y-[-14deg] rotate-x-[6deg] rotate-z-[6deg]"
        delay={0.1}
        title="WhatsApp"
      >
        <div className="space-y-2 p-3">
          <div className="h-3 w-2/3 rounded bg-surface-elevated" />
          <div className="ml-auto h-8 w-3/4 rounded-lg bg-primary/80" />
          <div className="h-10 w-4/5 rounded-lg bg-surface-elevated" />
          <div className="ml-auto h-6 w-1/2 rounded-lg bg-primary/70" />
          <div className="h-12 w-full rounded-lg border border-primary/40 bg-primary/10" />
        </div>
      </MockCard>

      {/* Admin portal */}
      <MockCard
        className="absolute left-0 top-12 h-[280px] w-[360px]"
        rot="rotate-y-[10deg] rotate-x-[4deg] rotate-z-[-3deg]"
        delay={0.25}
        title="Admin Portal"
      >
        <div className="grid grid-cols-4 gap-2 p-3">
          <div className="col-span-1 space-y-1.5">
            <div className="h-3 rounded bg-primary/60" />
            <div className="h-3 rounded bg-surface-elevated" />
            <div className="h-3 rounded bg-surface-elevated" />
            <div className="h-3 rounded bg-surface-elevated" />
          </div>
          <div className="col-span-3 space-y-2">
            <div className="grid grid-cols-3 gap-2">
              <div className="h-12 rounded bg-surface-elevated" />
              <div className="h-12 rounded bg-surface-elevated" />
              <div className="h-12 rounded bg-primary/30" />
            </div>
            <div className="h-20 rounded bg-surface-elevated/70" />
            <div className="h-14 rounded bg-surface-elevated/70" />
          </div>
        </div>
      </MockCard>

      {/* Vendor mobile dashboard */}
      <MockCard
        className="absolute bottom-0 left-12 h-[300px] w-[180px] rounded-[1.5rem]"
        rot="rotate-y-[-6deg] rotate-x-[-2deg] rotate-z-[4deg]"
        delay={0.4}
        title="Vendor App"
      >
        <div className="space-y-2 p-3">
          <div className="h-16 rounded-lg bg-gradient-to-br from-primary/70 to-primary/30" />
          <div className="grid grid-cols-2 gap-2">
            <div className="h-14 rounded-md bg-surface-elevated" />
            <div className="h-14 rounded-md bg-surface-elevated" />
          </div>
          <div className="h-10 rounded-md bg-surface-elevated" />
          <div className="h-10 rounded-md bg-surface-elevated" />
        </div>
      </MockCard>
    </div>
  );
}

function MockCard({
  className,
  rot,
  delay,
  title,
  children,
}: {
  className?: string;
  rot: string;
  delay: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className={`${className} group-hover:[transform:none] transition-transform duration-700 ease-out`}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className={`glass h-full w-full overflow-hidden rounded-2xl shadow-[var(--shadow-card)] ${rot}`}
        style={{ transform: rotToInline(rot) }}
      >
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            <span className="h-2 w-2 rounded-full bg-primary/70" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">{title}</span>
        </div>
        {children}
      </div>
    </motion.div>
  );
}

// Map Tailwind-like arbitrary rot strings to CSS transforms (since arbitrary rotate-y not in core)
function rotToInline(rot: string): string {
  const parts: string[] = [];
  const m = rot.matchAll(/rotate-([xyz])-\[(-?[\d.]+)deg\]/g);
  for (const r of m) parts.push(`rotate${r[1].toUpperCase()}(${r[2]}deg)`);
  return parts.join(" ");
}

export function CaseStudy() {
  return (
    <section id="work" className="relative overflow-hidden py-28 md:py-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(900px 500px at 80% 30%, color-mix(in oklab, var(--primary) 14%, transparent), transparent 60%)",
        }}
      />
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">{caseStudy.eyebrow}</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
              {caseStudy.title}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              {caseStudy.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {caseStudy.stats.map((s) => (
                <div key={s.label} className="glass rounded-xl p-4">
                  <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center font-mono text-sm text-primary transition-transform hover:translate-x-1"
            >
              Read the full breakdown →
            </a>
          </div>
          <div className="relative">
            <ScreenStack />
          </div>
        </div>
      </div>
    </section>
  );
}
