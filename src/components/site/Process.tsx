import { motion } from "framer-motion";
import { process } from "@/lib/siteContent";

export function Process() {
  return (
    <section id="approach" className="relative py-28 md:py-36">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">APPROACH</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
            How we work.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Six weeks. One feature. Live in production. No discovery phase that lasts a quarter.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* horizontal connector */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent md:block" />
          {process.map((p, i) => (
            <motion.li
              key={p.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-border-strong bg-background font-mono text-sm text-primary">
                  {p.step}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {p.week}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
