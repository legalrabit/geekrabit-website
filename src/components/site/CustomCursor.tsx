import { useEffect, useRef, useState } from "react";

/** Subtle ring cursor that grows on hover over clickables. Hidden on touch. */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);
    let raf = 0;
    let x = 0, y = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const t = e.target as HTMLElement | null;
      const interactive = !!t?.closest("a,button,[role='button'],input,textarea,select,label");
      setHover(interactive);
    };
    const tick = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${x - 14}px, ${y - 14}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={ringRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-7 w-7 rounded-full border border-primary/70 transition-[width,height,opacity,background] duration-200 md:block"
      style={{
        mixBlendMode: "difference",
        width: hover ? 40 : 28,
        height: hover ? 40 : 28,
        marginLeft: hover ? -6 : 0,
        marginTop: hover ? -6 : 0,
        backgroundColor: hover ? "color-mix(in oklab, var(--primary) 18%, transparent)" : "transparent",
        boxShadow: "0 0 20px color-mix(in oklab, var(--primary) 50%, transparent)",
      }}
    />
  );
}
