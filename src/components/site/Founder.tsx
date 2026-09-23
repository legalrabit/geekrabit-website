import { Linkedin, Mail } from "lucide-react";
import { founder, site } from "@/lib/siteContent";

export function Founder() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="mx-auto flex max-w-3xl flex-col items-start gap-6 md:flex-row md:items-center">
          <img
            src="/founder.jpg"
            alt={founder.name}
            width={96}
            height={96}
            loading="lazy"
            className="h-24 w-24 shrink-0 rounded-full object-cover"
            style={{ boxShadow: "0 0 0 3px color-mix(in oklab, var(--primary) 35%, transparent), var(--shadow-glow)" }}
          />
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {founder.name}
            </div>
            <p className="mt-2 italic text-foreground/90 md:text-lg">
              “{founder.note}”
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
              <a href={site.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 hover:text-primary">
                <Mail size={16} /> {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
