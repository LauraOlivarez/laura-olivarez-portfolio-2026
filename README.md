# Laura Olivarez — Portfolio

Senior Product & UX Designer portfolio. "Complexity in. Clarity out."

Built with React + Vite. Three visitor modes (Recruiter / Design-Product /
Explore) share a single content layer (`src/data/content.js`) — selecting a
mode on the entry screen just changes what's prioritized and how it's
framed, not the underlying data.

## Stack

- React 19 + Vite
- React Router (client-side routing)
- Plain CSS with design tokens (`src/styles/tokens.css`) — no UI framework,
  by design: the visual system is editorial, not component-library-driven.

## Local development

```bash
npm install
npm run dev
```

## Contact

The Contact page is a single LinkedIn link — no form, no backend.

## Deployment (Vercel)

1. Import this GitHub repo into Vercel as a new project.
2. Vercel auto-detects the Vite framework preset — confirm the build
   command is `vite build` and the output directory is `dist` (Vite's
   default) — not `build`, which is Create React App's folder name.
3. Every push to `main` auto-redeploys.

## Assets

- `public/Laura-Olivarez-Resume.pdf` — downloaded only on deliberate click
  of the Recruiter-mode "Download resume" button, never automatically.
- `src/assets/images/laura-olivarez-portrait.jpg` — About page avatar.

## Content

All shared content (evidence stats, projects, product stories, essays,
lab items, timeline) lives in `src/data/content.js`. Update it there — it's
the single source every mode and page reads from.
