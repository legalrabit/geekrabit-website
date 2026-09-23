import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { caseStudy } from "@/lib/siteContent";

function StatCountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const finalText = `${to}${suffix}`;
  // motion value starts at the final value so:
  //  - SSR + first-paint hydration show the real number (link previews,
  //    no-JS crawlers, users on slow devices all see "12" not "0")
  //  - if `inView` never fires (user scrolled past, prefers-reduced-motion
  //    blocked observer, etc.), the value stays correct — no broken UI
  // The count-up animation kicks in only when `inView` actually triggers,
  // and the reset-to-zero happens *inside* that same effect so there's no
  // window where the value can be visibly 0 without an animation queued.
  const mv = useMotionValue(to);
  const text = useTransform(mv, (v) => `${Math.round(v)}${suffix}`);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    if (!mounted || !inView) return;
    mv.set(0);
    const c = animate(mv, to, { duration: 1.4, ease: "easeOut" });
    return c.stop;
  }, [mounted, inView, mv, to]);
  if (!mounted) return <span ref={ref}>{finalText}</span>;
  return <motion.span ref={ref}>{text}</motion.span>;
}

/** Stacked screenshot mockups — pure CSS, slow rotation, snap on hover. */
function ScreenStack() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[520px] [perspective:1400px] group">
      {/* WhatsApp screenshot */}
      <MockCard
        className="absolute right-0 top-4 h-[400px] w-[236px]"
        rot="rotate-y-[-14deg] rotate-x-[6deg] rotate-z-[6deg]"
        delay={0.1}
        title="WhatsApp · live intent demo"
      >
        {/* real iPhone recording: customer message in, LLM confirmation back */}
        <video
          src="/thiya-whatsapp.mp4"
          poster="/thiya-whatsapp-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="WhatsApp conversation with Thiya: customer order message, LLM confirmation, vendor acceptance and delivery updates, screen recording"
          className="h-[370px] w-full object-cover object-top"
        />
      </MockCard>


      {/* Vendor mobile dashboard */}
      <MockCard
        className="absolute bottom-0 left-6 h-[400px] w-[212px] rounded-[1.5rem]"
        rot="rotate-y-[-6deg] rotate-x-[-2deg] rotate-z-[4deg]"
        delay={0.4}
        title="Vendor App · onboarding"
      >
        {/* real screen recording of Thiya's vendor onboarding, muted loop */}
        <video
          src="/thiya-onboarding.mp4"
          poster="/thiya-onboarding-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Thiya vendor app onboarding, screen recording"
          className="h-[370px] w-full object-cover object-top"
        />
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
                  <div className="font-display text-2xl font-bold text-primary">
                    <StatCountUp to={s.value} suffix={s.suffix ?? ""} />
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {caseStudy.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="pill pill-ghost"
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </div>
          <div className="relative">
            <ScreenStack />
          </div>
        </div>
      </div>
    </section>
  );
}
