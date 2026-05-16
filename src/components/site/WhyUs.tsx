import { motion } from "framer-motion";
import { whyUs } from "@/lib/siteContent";

export function WhyUs() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">WHY GEEKRABIT</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-bold leading-tight md:text-6xl">
            Three things we believe.
          </h2>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass hover-glow rounded-2xl p-7"
            >
              <h3 className="font-display text-2xl font-bold leading-snug">
                {w.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">{w.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
