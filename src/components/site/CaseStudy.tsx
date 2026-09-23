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

/** Three real screen recordings, each with a one-line caption. Rows on phones, a row of three on md+. */
const CLIPS = [
  {
    src: "/thiya-whatsapp.mp4",
    poster: "/thiya-whatsapp-poster.jpg",
    kicker: "01 · Customer",
    title: "The customer just types.",
    body: "Mixed Hindi and English, no app, no forms. An LLM layer reads the intent, confirms it back, and only then touches the order.",
    alt: "WhatsApp conversation with Thiya: customer order message, LLM confirmation, vendor acceptance and delivery updates",
  },
  {
    src: "/thiya-vendor-order.mp4",
    poster: "/thiya-vendor-order-poster.jpg",
    kicker: "02 · Vendor",
    title: "The vendor sees it as an order.",
    body: "The same message lands in the vendor's app as a line in today's run: quantity, address, delivery slot, one tap to dispatch.",
    alt: "Thiya vendor app: the WhatsApp request accepted as an order, today's run, delivery with jars and payment, marked delivered",
  },
  {
    src: "/thiya-onboarding.mp4",
    poster: "/thiya-onboarding-poster.jpg",
    kicker: "03 · Onboarding",
    title: "A vendor is live in five screens.",
    body: "Profile, what you sell, shop location, delivery radius, done. Built for people who run a business from a phone, not a desk.",
    alt: "Thiya vendor app onboarding, screen recording",
  },
];

function ClipCard({ clip, index }: { clip: (typeof CLIPS)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid grid-cols-[1fr_150px] items-center gap-4 md:block"
    >
      <div className="md:order-2 md:mt-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{clip.kicker}</p>
        <h3 className="mt-1 font-display text-lg font-bold leading-snug text-foreground">{clip.title}</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{clip.body}</p>
      </div>
      <div className="glass overflow-hidden rounded-2xl shadow-[var(--shadow-card)] md:order-1">
        <div className="flex items-center justify-between border-b border-border px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
            <span className="h-2 w-2 rounded-full bg-primary/70" />
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">{clip.kicker.split(" · ")[1]}</span>
        </div>
        {"pending" in clip && clip.pending ? (
          <div className="grid aspect-[9/17.5] w-full place-items-center bg-surface/60 px-4 text-center font-mono text-[11px] text-muted-foreground">
            recording in progress
          </div>
        ) : (
          <video
            src={clip.src}
            poster={clip.poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={clip.alt}
            className="aspect-[9/17.5] w-full object-cover object-top"
          />
        )}
      </div>
    </motion.div>
  );
}

function ScreenStack() {
  return (
    <div className="grid gap-8 md:grid-cols-3 md:gap-5">
      {CLIPS.map((clip, i) => (
        <ClipCard key={clip.src} clip={clip} index={i} />
      ))}
    </div>
  );
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
        <div className="grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
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
