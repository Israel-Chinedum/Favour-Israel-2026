# Portfolio

React + TypeScript + Vite + Tailwind CSS v4.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build into dist/
```

## Edit your content
- `src/data/site.ts` — name, email, GitHub, LinkedIn, WhatsApp (empty values are hidden automatically)
- `src/data/projects.ts` — projects, stacks, `demoUrl`, `sourceUrl`, `image`, `status`
- `src/data/experience.ts` — experience entries and dates
- `src/data/skills.ts`, `src/data/services.ts`

## Notes
- `cn()` lives in `src/lib/utils.ts`. If your existing project already has one, delete this file and update the `@/lib/utils` imports.
- Theme tokens are in the `@theme` block of `src/index.css`.
- To add a screenshot: put it in `public/` (e.g. `/screens/hublink.png`) and set `image` on the project.
- Deploys as a static site (`dist/`) to Netlify, Vercel, Cloudflare Pages, GitHub Pages, etc.
