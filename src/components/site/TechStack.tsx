import { techStack } from "@/lib/siteContent";

export function TechStack() {
  return (
    <section className="border-y border-border/70 bg-surface/40 py-16">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {techStack.map((t) => (
            <span
              key={t}
              className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-6 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          We pick the right tool, not the trendy one.
        </p>
      </div>
    </section>
  );
}
