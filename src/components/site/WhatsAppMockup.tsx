import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * High-fidelity WhatsApp dark-mode mockup with looped conversation animation
 * and a subtle 3D parallax tilt on cursor movement.
 */
export function WhatsAppMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 14 });
  const sy = useSpring(my, { stiffness: 120, damping: 14 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);

  function onMove(e: React.MouseEvent) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto w-full max-w-[360px] [perspective:1200px]"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        {/* Phone frame */}
        <div
          className="relative aspect-[9/19] rounded-[2.6rem] border border-white/10 p-2 shadow-[var(--shadow-card)]"
          style={{
            background: "linear-gradient(180deg, #1a1a1f, #0d0d10)",
          }}
        >
          {/* Notch */}
          <div className="absolute left-1/2 top-2.5 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-black" />
          {/* Screen */}
          <div
            className="relative h-full w-full overflow-hidden rounded-[2.1rem]"
            style={{ background: "#0B141A" }}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold text-white/90">
              <span>10:42</span>
              <span className="flex items-center gap-1 opacity-80">
                <span>●●●●</span>
                <span>5G</span>
              </span>
            </div>

            {/* WhatsApp header — official #075E54 */}
            <div
              className="mt-2 flex items-center gap-3 px-3 py-2.5"
              style={{ background: "#075E54" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/90">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white text-center font-bold leading-9 text-[#075E54]">
                S
                <span
                  className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#075E54] bg-[#25D366]"
                  aria-hidden
                />
              </div>
              <div className="flex-1">
                <div className="text-[13px] font-semibold leading-tight text-white">Sharma Dairy</div>
                <div className="text-[10px] leading-tight text-white/70">online</div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 5.5h-7C7.12 5.5 6 6.62 6 8v8c0 1.38 1.12 2.5 2.5 2.5h7c1.38 0 2.5-1.12 2.5-2.5V8c0-1.38-1.12-2.5-2.5-2.5z" /></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1 1 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a1 1 0 00.25-1.01A11.36 11.36 0 018.5 4a1 1 0 00-1-1H4a1 1 0 00-1 1 17 17 0 0017 17 1 1 0 001-1v-3.5a1 1 0 00-1-1z" /></svg>
                <span className="text-lg leading-none">⋮</span>
              </div>
            </div>

            {/* Chat area — WA dark bg with subtle pattern */}
            <div
              className="relative flex-1 px-3 pb-4 pt-4"
              style={{
                background:
                  "#0B141A radial-gradient(circle at 20% 30%, rgba(255,255,255,0.02) 0, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.02) 0, transparent 40%)",
                minHeight: "70%",
              }}
            >
              <div className="mx-auto mb-3 w-fit rounded-md bg-white/[0.06] px-2 py-0.5 text-center font-mono text-[9px] text-white/60">
                TODAY
              </div>

              {/* Looped conversation */}
              <ChatLoop />
            </div>
          </div>
        </div>

        {/* Annotation arrows */}
        <Annotation
          className="hidden md:flex absolute -left-44 top-[32%] w-40"
          align="right"
          label="INTENT EXTRACTED · ~180ms"
        />
        <Annotation
          className="hidden md:flex absolute -right-44 top-[48%] w-40"
          align="left"
          label="SUBSCRIPTION UPDATED · auto"
        />
        <Annotation
          className="hidden md:flex absolute -left-44 top-[68%] w-40"
          align="right"
          label="REPLY SENT · ~248ms total"
        />
      </motion.div>
    </div>
  );
}

function ChatLoop() {
  // 8s loop total
  return (
    <motion.div
      key="loop"
      initial="initial"
      animate="animate"
      className="flex flex-col gap-1.5"
    >
      {/* Incoming */}
      <motion.div
        animate={{ opacity: [0, 0, 1, 1, 1, 1, 1, 0], y: [4, 4, 0, 0, 0, 0, 0, 0] }}
        transition={{ duration: 8, times: [0, 0.05, 0.12, 0.3, 0.5, 0.7, 0.9, 1], repeat: Infinity }}
        className="max-w-[80%] self-start rounded-lg rounded-tl-sm px-2.5 py-1.5 text-[11px] text-white"
        style={{ background: "#1F2C34", boxShadow: "0 1px 1px rgba(0,0,0,0.2)" }}
      >
        kal dudh nahi bhejna
        <div className="mt-0.5 text-right text-[8px] text-white/50">10:42 AM</div>
      </motion.div>

      {/* Typing indicator */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 1, 1, 0, 0, 0] }}
        transition={{ duration: 8, times: [0, 0.25, 0.3, 0.35, 0.45, 0.5, 0.55, 1], repeat: Infinity }}
        className="self-end rounded-lg rounded-tr-sm px-2.5 py-1.5"
        style={{ background: "#005C4B" }}
      >
        <div className="flex gap-1">
          <Dot delay={0} />
          <Dot delay={0.15} />
          <Dot delay={0.3} />
        </div>
      </motion.div>

      {/* Outgoing reply */}
      <motion.div
        animate={{ opacity: [0, 0, 0, 0, 0, 1, 1, 0], y: [4, 4, 4, 4, 4, 0, 0, 0] }}
        transition={{ duration: 8, times: [0, 0.4, 0.5, 0.55, 0.58, 0.62, 0.95, 1], repeat: Infinity }}
        className="max-w-[85%] self-end rounded-lg rounded-tr-sm px-2.5 py-1.5 text-[11px] text-white"
        style={{ background: "#005C4B", boxShadow: "0 1px 1px rgba(0,0,0,0.2)" }}
      >
        Okay! Tomorrow's milk delivery is paused. You'll be charged for 29 days this month instead of 30.
        <div className="mt-0.5 flex items-center justify-end gap-1 text-[8px] text-white/60">
          <span>10:42 AM</span>
          <DoubleTick />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <motion.span
      animate={{ opacity: [0.3, 1, 0.3], y: [0, -1, 0] }}
      transition={{ duration: 0.9, repeat: Infinity, delay }}
      className="block h-1.5 w-1.5 rounded-full bg-white/80"
    />
  );
}

function DoubleTick() {
  return (
    <svg width="14" height="10" viewBox="0 0 16 12" fill="none">
      <path d="M1 6.5l3 3 6-7" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 6.5l3 3 6-7" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Annotation({
  className,
  align,
  label,
}: {
  className?: string;
  align: "left" | "right";
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className={`items-center gap-2 ${className ?? ""}`}
    >
      {align === "left" && <Arrow direction="left" />}
      <span className="rounded-md border border-primary/40 bg-primary/10 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-primary">
        {label}
      </span>
      {align === "right" && <Arrow direction="right" />}
    </motion.div>
  );
}

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="34" height="10" viewBox="0 0 34 10" fill="none" className="text-primary/70 shrink-0">
      {direction === "right" ? (
        <>
          <path d="M0 5 H30" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M26 1 L32 5 L26 9" stroke="currentColor" strokeWidth="1" fill="none" />
        </>
      ) : (
        <>
          <path d="M4 5 H34" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
          <path d="M8 1 L2 5 L8 9" stroke="currentColor" strokeWidth="1" fill="none" />
        </>
      )}
    </svg>
  );
}
