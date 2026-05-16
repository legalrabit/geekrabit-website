import { motion } from "framer-motion";
import { site } from "@/lib/siteContent";
import { WhatsAppMockup } from "./WhatsAppMockup";

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
