import { motion } from "framer-motion";
import { services } from "@/lib/siteContent";

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">SERVICES</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
            What we build.
          </h2>
          <p className="mt-4 max-w-prose text-muted-foreground md:text-lg">
            Six things we do better than anyone else in our weight class. Pick one, or stack them.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={`mailto:info@geekrabit.com?subject=${encodeURIComponent(s.subject)}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group glass hover-glow relative block overflow-hidden rounded-2xl p-6"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-surface-elevated text-2xl">
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <div className="mt-6 flex items-center font-mono text-xs text-primary transition-transform duration-300 group-hover:translate-x-1">
                Learn more <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 40%, transparent), transparent 70%)" }}
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
