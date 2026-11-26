# Chinenye Gift website

Next.js (App Router) + Tailwind v4. Sanity CMS comes next.

    npm install
    npm run dev

- Design tokens: `src/app/globals.css`
- Site config, nav, feature flags: `src/lib/site.ts`
- Put the hero portrait in `public/images/` and pass `src` to `<ArchPortrait />` in `src/app/page.tsx`
- Guide section and legal links stay hidden until `flags.guideReady` / `flags.legalReady` are true
