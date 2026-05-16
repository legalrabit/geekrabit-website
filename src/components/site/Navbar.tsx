import { useEffect, useState } from "react";
import { nav, site } from "@/lib/siteContent";

function Wordmark() {
  return (
    <a href="#top" className="group flex items-center gap-2 font-display text-lg font-extrabold tracking-tight">
      <span
        className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground"
        style={{ transform: "rotate(-12deg)" }}
        aria-hidden
      >
        <span style={{ transform: "rotate(12deg)" }}>G</span>
      </span>
      <span>
        eek<span className="text-primary">Rabit</span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      ].join(" ")}
    >
      <div className="container-page">
        <div
          className={[
            "flex items-center justify-between rounded-full px-4 py-2 transition-all duration-300",
            scrolled ? "glass" : "bg-transparent",
          ].join(" ")}
        >
          <Wordmark />
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="pill pill-primary text-sm">
            Start a project
          </a>
        </div>
        <span className="sr-only">{site.brand} — {site.tagline}</span>
      </div>
    </header>
  );
}
