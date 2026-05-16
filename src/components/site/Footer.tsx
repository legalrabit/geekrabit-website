import { Linkedin } from "lucide-react";
import { company, site } from "@/lib/siteContent";

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-14">
      <div className="container-page">
        <div className="grid gap-10 font-mono text-[11px] leading-relaxed text-muted-foreground md:grid-cols-4">
          {/* Company */}
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.18em] text-foreground/80">
              {company.legalName.toUpperCase()}
            </div>
            <div>CIN: {company.cin}</div>
            <div>GSTIN: {company.gstin}</div>
            <div>Incorporated: {company.incorporated}</div>
          </div>

          {/* Offices */}
          {company.offices.map((o) => (
            <div key={o.city}>
              <div className="mb-3 text-[10px] uppercase tracking-[0.18em] text-foreground/80">
                {o.city}
              </div>
              {o.lines.map((l) => (
                <div key={l}>{l}</div>
              ))}
            </div>
          ))}

          {/* Reach */}
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.18em] text-foreground/80">
              REACH US
            </div>
            {company.emails.map((e) => (
              <div key={e.label}>
                <a href={e.href} className="hover:text-primary">
                  {e.label}
                </a>
              </div>
            ))}
            <div>{company.phone}</div>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="mt-3 inline-flex items-center gap-2 hover:text-primary"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground/60">
          © 2026 {company.legalName} · Made by humans, augmented by Claude · Bengaluru · Pune · Bhopal · Remote.
        </div>
      </div>
    </footer>
  );
}
