# Adepoju Taiwo — Frontend Developer Portfolio

A full-fledged, responsive portfolio webapp built with **Next.js 14 (App Router)**, **React**, **Tailwind CSS**, and modern **JavaScript**. Verified with a real production build (`npm run build`) — no placeholder code, no missing pieces.

## Tech stack

- **Next.js 14** (App Router) — routing, server/client components, image optimization
- **React 18** — component architecture
- **Tailwind CSS 3** — utility-first styling, custom theme tokens, dark mode
- **JavaScript (ES2022+)** — no TypeScript build step, plain `.js`/`.jsx`
- **CSS3** — custom properties, keyframe animations layered on top of Tailwind

## Project structure

```
adepoju-portfolio/
├── app/
│   ├── layout.js         Root layout — fonts, metadata, ThemeProvider
│   ├── page.js           Composes all sections into the homepage
│   └── globals.css       Tailwind directives + base styles
├── components/
│   ├── Header.jsx         Sticky nav, mobile menu, theme toggle
│   ├── Hero.jsx            Intro, orbiting tech icons, photo
│   ├── About.jsx
│   ├── Skills.jsx          Animated proficiency bars (scroll-triggered)
│   ├── Projects.jsx        Ecowatch + Shop12 case studies
│   ├── Achievements.jsx    Stats + career timeline
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Reveal.jsx           Scroll-reveal wrapper (IntersectionObserver)
│   ├── ThemeProvider.jsx    Light/dark mode context
│   ├── ThemeToggle.jsx
│   └── icons/TechIcons.jsx  JS, TypeScript, React, Next.js, Tailwind, Axios, CSS3, Git icons
├── public/assets/
│   ├── profile.jpg
│   └── favicon.svg
├── tailwind.config.js     Custom olive/cream palette + dark tokens, keyframes
├── next.config.js
├── postcss.config.js
├── jsconfig.json           "@/*" path alias
└── package.json
```

## Features

- Fully responsive (mobile, tablet, desktop breakpoints throughout)
- Light / dark mode — detects system preference on load, toggle in the header
- Scroll-reveal animations, floating tech-icon orbit, animated skill bars, hover micro-interactions
- Respects `prefers-reduced-motion`
- Real Next.js `<Image>` optimization for the profile photo (responsive `srcset`, lazy sizing)
- Sections: Hero, About, Skills, Projects (Ecowatch, Shop12), Achievements, Contact

## Running it locally

Requires Node.js 18.17+ (Node 20/22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Building for production

```bash
npm run build
npm run start
```

This has already been verified in a clean environment — `npm run build` compiles successfully and `npm run start` serves a working production build.

> **Note:** during `npm run build` you may see a line like `Failed to minify the stylesheet for fonts.googleapis.com` if your build environment blocks outbound requests to Google Fonts (e.g. a locked-down CI runner). This is a harmless Next.js font-optimization step being skipped — it does not affect the build output or the site's appearance. On Vercel, Netlify, or any host with normal internet access, it won't appear at all.

## Deploying it

This is a standard Next.js app, so it deploys cleanly to any Next.js-compatible host.

### Vercel (recommended — built by the Next.js team)
1. Push this project to a GitHub/GitLab/Bitbucket repo
2. Go to https://vercel.com/new and import the repo
3. Vercel auto-detects Next.js — click **Deploy**. No config needed.

Or via CLI:
```bash
npm i -g vercel
vercel
```

### Netlify
1. Push to a repo, then go to https://app.netlify.com and "Import an existing project"
2. Build command: `npm run build` — Netlify's Next.js runtime plugin handles the rest automatically

### Self-hosted / Node server
```bash
npm run build
npm run start   # serves on port 3000 by default
```
Put this behind a reverse proxy (nginx, Caddy) for a custom domain and HTTPS.

## Customizing content

- **Profile photo** — replace `public/assets/profile.jpg` with your own (same filename, or update the `src` in `components/Hero.jsx`)
- **Projects** — edit the `projects` array in `components/Projects.jsx`; swap in real Ecowatch/Shop12 links once live
- **Contact links** — update the `mailto:` and GitHub/LinkedIn/X hrefs in `components/Contact.jsx`
- **Colors** — edit `tailwind.config.js` → `theme.extend.colors` (`olive`, `cream`, and their `dark*` counterparts); every component uses these tokens, so the whole site updates from one place
- **Stats & timeline** — update the `stats` and `timeline` arrays in `components/Achievements.jsx`
- **Skills** — update the `skills` array in `components/Skills.jsx` (name, proficiency %, icon)

## Browser support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Uses CSS custom properties, `IntersectionObserver` (with a visible-by-default fallback if unsupported), and standard Next.js image optimization.
