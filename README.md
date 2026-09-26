# geekrabit.com

Company website for GeekRabit Private Limited, an applied AI engineering studio. We take GenAI features from pilot to production on Java, Spring Boot and AWS Bedrock, for product teams and agencies.

Live: https://geekrabit.com

## Stack

- TanStack Start (React 19, file based routing, SSR)
- Tailwind CSS 4, framer-motion, Lucide icons
- Deployed as a Cloudflare Worker with static assets

## Structure

- `src/lib/siteContent.ts`: all page copy in one place (hero, services, case study, pricing, footer)
- `src/components/site/`: one component per section; `BedrockFlow.tsx` is the hero visual, `CaseStudy.tsx` holds the three Thiya screen recordings
- `src/routes/__root.tsx`: SEO metadata and Organization JSON-LD
- `public/`: og-image, favicon, badges, Thiya clips, sitemap, robots

## Develop

```
npm install
npm run dev        # http://localhost:8081
npm run build
npx wrangler deploy
```

Deploys are manual with `wrangler deploy` after a merge to `main`.
