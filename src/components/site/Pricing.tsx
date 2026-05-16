import { motion } from "framer-motion";
import { pricing, site } from "@/lib/siteContent";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 md:py-36">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">PRICING</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
            What it costs.
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Fixed price. Fixed timeline. No surprises on the invoice.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pricing.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={[
                "glass relative overflow-hidden rounded-2xl p-7",
                p.featured ? "border-primary/60" : "",
              ].join(" ")}
              style={
                p.featured
                  ? {
                      background:
                        "linear-gradient(180deg, color-mix(in oklab, var(--primary) 8%, transparent), transparent 60%)",
                      boxShadow: "var(--shadow-glow)",
                    }
                  : undefined
              }
            >
              {p.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-primary/20 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-primary">
                  most popular
                </div>
              )}
              <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {p.name}
              </div>
              <div className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
                {p.price}
              </div>
              <div className="mt-1 font-mono text-xs text-primary">{p.duration}</div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <a
                href={site.calendly}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center font-mono text-xs text-primary transition-transform hover:translate-x-1"
              >
                Book a call →
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 text-center font-mono text-xs italic text-muted-foreground">
          INR / AED invoicing available. We're a registered Indian Pvt Ltd — proper invoices, GST where applicable, no freelancer drama.
        </p>
      </div>
    </section>
  );
}
