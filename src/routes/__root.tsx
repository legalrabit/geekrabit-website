import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const SITE_URL = "https://geekrabit.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;
const SITE_TITLE = "GeekRabit — AI features that actually run in production";
const SITE_DESC =
  "AI-first product engineering studio. WhatsApp NLP, voice agents, vision AI, native mobile, microservices. From idea to live in 6 weeks. Bengaluru + Remote.";

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "GeekRabit Private Limited",
  alternateName: "GeekRabit",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: OG_IMAGE,
  description: SITE_DESC,
  founder: { "@type": "Person", name: "Abhash Shrivastava" },
  foundingDate: "2022-08-20",
  email: "info@geekrabit.com",
  telephone: "+91-20-44227566",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Office No. 14, 2nd Floor, B.A. Hub, Wagholi",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "412207",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "A-01/204, Atlantis Fortune, Soumya Katara Hills, Misrod",
      addressLocality: "Bhopal",
      addressRegion: "MP",
      postalCode: "462026",
      addressCountry: "IN",
    },
  ],
  identifier: [
    { "@type": "PropertyValue", propertyID: "CIN", value: "U72900MP2022PTC062322" },
    { "@type": "PropertyValue", propertyID: "GSTIN", value: "23AAJCG9892L1ZU" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/geekrabit",
    "https://github.com/legalrabit",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "GeekRabit Private Limited" },
      { name: "robots", content: "index, follow" },
      // Open Graph
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "GeekRabit" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "GeekRabit — We ship AI features that actually run." },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORG_JSON_LD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
