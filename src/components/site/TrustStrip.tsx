import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { trustFacts } from "@/lib/siteContent";

function CountUp({ to, prefix = "", suffix = "", decimals = 0 }: { to: number; prefix?: string; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const finalText = `${prefix}${to.toFixed(decimals)}${suffix}`;
  // Start at `to` so SSR and link-preview crawlers see the real number, not 0.
  const mv = useMotionValue(to);
  const rounded = useTransform(mv, (v) => `${prefix}${v.toFixed(decimals)}${suffix}`);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    mv.set(0);
  }, [mv]);
  useEffect(() => {
    if (mounted && inView) {
      const controls = animate(mv, to, { duration: 1.4, ease: "easeOut" });
      return controls.stop;
    }
  }, [mounted, inView, mv, to]);
  if (!mounted) return <span ref={ref}>{finalText}</span>;
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function TrustStrip() {
  return (
    <section aria-label="Stats" className="border-y border-border/70 bg-surface/40 py-6 mt-20 md:mt-28">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs md:text-sm">
          {trustFacts.map((f, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="text-muted-foreground">
                {"text" in f ? (
                  <span className="text-foreground">{f.text}</span>
                ) : (
                  <>
                    <span className="text-foreground">
                      <CountUp to={f.value} prefix={f.prefix ?? ""} suffix={f.suffix ?? ""} decimals={f.decimals ?? 0} />
                    </span>{" "}
                    {f.label}
                  </>
                )}
              </span>
              {i < trustFacts.length - 1 && <span className="text-border-strong">·</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
