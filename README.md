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

## Contact form

The Contact page posts to a third-party form endpoint (no backend on a
static Vite site). Copy `.env.example` to `.env` and set
`VITE_CONTACT_FORM_ENDPOINT` to a form endpoint (e.g. a Formspree form)
that forwards submissions by email. Without it configured, the form will
show an error on submit.

## Deployment (Hostinger)

1. Connect this GitHub repo to Hostinger's hosting panel (Website →
   Auto Deploy / Git).
2. Confirm the build output directory is set to `dist` (Vite's default) —
   not `build`, which is Create React App's folder name.
3. Set the `VITE_CONTACT_FORM_ENDPOINT` build environment variable in the
   Hostinger panel.
4. Every push to `main` auto-redeploys.

## Assets

- `public/Laura-Olivarez-Resume.pdf` — downloaded only on deliberate click
  of the Recruiter-mode "Download resume" button, never automatically.
- `src/assets/images/laura-olivarez-portrait.jpg` — About page avatar.

## Content

All shared content (evidence stats, projects, product stories, essays,
lab items, timeline) lives in `src/data/content.js`. Update it there — it's
the single source every mode and page reads from.
