import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { trustFacts } from "@/lib/siteContent";

function CountUp({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const finalText = `${prefix}${to.toFixed(decimals)}${suffix}`;
  const mv = useMotionValue(to);
  const rounded = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!mounted || !inView) return;
    mv.set(0);
    const controls = animate(mv, to, { duration: 1.4, ease: "easeOut" });
    return controls.stop;
  }, [mounted, inView, mv, to]);
  if (!mounted) return <span ref={ref}>{finalText}</span>;
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

/** Credentials band: four proof tiles directly under the hero. Numbers, not adjectives. */
export function TrustStrip() {
  return (
    <section aria-label="Credentials" className="relative pt-14 pb-4 md:pt-20">
      <div className="container-page">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustFacts.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass hover-glow flex min-h-[148px] flex-col justify-between rounded-2xl p-5"
            >
              {"kind" in f ? (
                <div className="flex items-center gap-3">
                  <img src="/badges/genai-dev-pro.png" alt="AWS Certified Generative AI Developer Professional" width={64} height={64} className="h-16 w-16" loading="lazy" />
                  <img src="/badges/sa-associate.png" alt="AWS Certified Solutions Architect Associate" width={64} height={64} className="h-16 w-16" loading="lazy" />
                </div>
              ) : (
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold leading-none text-foreground md:text-5xl">
                    <CountUp to={f.value} prefix={f.prefix ?? ""} suffix={f.suffix ?? ""} decimals={f.decimals ?? 0} />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-primary">{f.unit}</span>
                </div>
              )}
              <p className="mt-4 text-[12.5px] leading-snug text-muted-foreground">{f.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
