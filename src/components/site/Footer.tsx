import { Github, Linkedin, Twitter } from "lucide-react";
import { nav, site } from "@/lib/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-12">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="font-display text-lg font-extrabold">
            <span
              className="mr-2 inline-grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground align-middle"
              style={{ transform: "rotate(-12deg)" }}
              aria-hidden
            >
              <span style={{ transform: "rotate(12deg)" }}>G</span>
            </span>
            eek<span className="text-primary">Rabit</span>
          </div>
          <nav className="flex gap-7 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {nav.filter((n) => n.label !== "Services").map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin size={18} /></a>
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary"><Github size={18} /></a>
            <a href={site.twitter} target="_blank" rel="noreferrer" aria-label="X / Twitter" className="hover:text-primary"><Twitter size={18} /></a>
          </div>
        </div>
        <div className="mt-8 border-t border-border/60 pt-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
          © 2026 {site.brand} Private Limited · Made by humans, augmented by Claude · {site.location}
        </div>
      </div>
    </footer>
  );
}
