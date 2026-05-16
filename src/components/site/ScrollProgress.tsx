import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setP(Math.min(1, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-primary transition-[width] duration-75"
        style={{ width: `${p * 100}%`, boxShadow: "0 0 12px var(--primary)" }}
      />
    </div>
  );
}
