# MooreDev Technologies LLC — Website
[![Netlify Status](https://api.netlify.com/api/v1/badges/52d6aa31-ec04-4e24-a2e0-d3e9acf326e6/deploy-status)](https://app.netlify.com/projects/profound-starship-188bf9/deploys)

Marketing and landing page for [MooreDev Technologies LLC](https://github.com/MooreDevTechnologiesLLC). A single-page React app built with Vite and TypeScript.

## Tech Stack

- **React 19** — functional components, hooks
- **TypeScript** (strict mode)
- **Vite 8** — dev server and bundler
- **SCSS** (scoped CSS Modules) — Amber Design System tokens
- **Vitest + React Testing Library** — unit testing
- **ESLint + Prettier** — linting and formatting

## Project Structure

```
src/
  components/
    Header/         # Fixed top nav with theme toggle and anchor links
    Hero/           # Full-viewport landing section with CTAs
    About/          # Company mission, values, and background
    Apps/           # App showcase grid (current + coming soon)
    Contact/        # Email and GitHub contact links
    Footer/         # Site footer
    Logo/           # SVG logo mark component
  styles/
    _tokens.scss    # Design tokens — colors, spacing, typography, shadows
    main.scss       # Global resets and base styles
scripts/
  generate-logo-assets.mjs   # Generates favicon/icon assets from the SVG logo
```

## Getting Started

```bash
npm install
npm run dev        # Start dev server at http://localhost:5173
npm run build      # Type-check and build for production
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

## Logo Asset Generation

Favicon and icon assets are generated from the SVG logo source using `@resvg/resvg-js`:

```bash
npm run generate-logo-assets
```

## Theming

The site supports three themes switchable at runtime via `data-theme` on `<html>`:

| Value       | Description                                  |
| ----------- | -------------------------------------------- |
| *(default)* | Light — warm linen background, amber accents |
| `dark`      | Dark — warm brown-black, amber + lavender    |

All theme values are defined as CSS custom properties in `src/styles/_tokens.scss`.
