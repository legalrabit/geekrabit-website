import { site } from "@/lib/siteContent";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 md:py-44">
      <div aria-hidden className="absolute inset-0 -z-10 mesh-glow animate-mesh opacity-90" />
      <div aria-hidden className="absolute inset-0 -z-10 dot-grid-bg opacity-40" />
      <div className="container-page text-center">
        <p className="eyebrow">READY?</p>
        <h2
          className="mx-auto mt-4 max-w-4xl text-balance font-display font-extrabold leading-[1.05]"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 5.5rem)" }}
        >
          Let's build the AI feature your competitors{" "}
          <span className="text-primary">haven't shipped</span> yet.
        </h2>
        <div className="mt-12 flex flex-col items-center justify-center gap-5">
          <a
            href={`mailto:${site.email}?subject=Start%20a%20project`}
            className="pill pill-primary animate-breathe text-base"
          >
            Start a project →
          </a>
          <a
            href={`mailto:${site.email}?subject=Just%20saying%20hi`}
            className="font-mono text-sm text-muted-foreground hover:text-primary"
          >
            Or just say hi →
          </a>
        </div>
      </div>
    </section>
  );
}
