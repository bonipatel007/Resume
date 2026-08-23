# Brijesh Patel — Full Stack Developer Portfolio

A modern, premium, fully responsive portfolio built with React + Vite, Framer Motion and
Lucide icons. Dark navy theme with blue / violet / cyan gradient accents, subtle glassmorphism,
and a signature animated "build log" hero visual.

## Tech Stack

- React 18 + Vite
- Framer Motion (animations, scroll reveals)
- Lucide React (icons)
- Plain CSS with a design-token system (`src/index.css`) — no CSS framework required

## Project Structure

```
src/
  components/   Reusable UI: Navbar, Footer, Button, Cards, TimelineItem...
  sections/     Page sections: Hero, About, Services, Process, TechStack,
                Projects, Experience, WhyWorkWithMe, Resume, Contact
  data/         Content only (no JSX) — edit this to update site copy
  utils/        Small helpers (icon lookup)
  App.jsx       Composes all sections
  main.jsx      React entry point
  index.css     Design tokens + global styles
```

## Run Locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for Production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build locally with:

```bash
npm run preview
```

## Deploy to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite. Framework preset: **Vite**. Build command: `npm run build`.
   Output directory: `dist`.
4. Click **Deploy**.

Alternatively, using the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Where to Update Things

### 1. Resume PDF
Place your updated resume PDF at:

```
public/resume/Brijesh_Patel_Resume.pdf
```

The "Download Resume" button in the Resume section already points to
`/resume/Brijesh_Patel_Resume.pdf`, so no code changes are needed once the file is in place.
Delete `public/resume/PLACE_RESUME_HERE.txt` once the real PDF is added.

### 2. Email, Phone, Location
Edit `src/data/site.js` — the `profile` object. These values automatically flow into the
Navbar, Hero, Footer and Contact sections.

### 3. Contact Form Backend
The contact form (`src/sections/Contact.jsx`) is frontend-only by design — it opens the
visitor's email client with a pre-filled message via `mailto:`. No fake backend or API
call is included. To connect it to a real backend later:

- Replace the `handleSubmit` function with a `fetch()` call to a form service such as
  Formspree, Resend, or your own API endpoint, **or**
- Keep the `mailto:` approach if you prefer not to run a backend at all.

### 4. Projects — Real URLs & Screenshots
Project cards currently use designed mockup visuals (no invented screenshots or fake
live URLs). Once you have real deployed links or screenshots:

- Edit `src/data/projects.js` to add a `url` field per project.
- Replace the mockup markup in `src/components/ProjectCard.jsx` with an `<img>` when a
  screenshot is available.

### 5. General Content
All section copy (services, process steps, tech stack, experience, "why work with me")
lives in `src/data/*.js` — edit those files rather than the section components to update
text without touching layout code.

### 6. Colors & Typography
Design tokens (colors, fonts, spacing, radii) are defined once at the top of
`src/index.css` under `:root`. Change a value there and it updates across the whole site.

## Accessibility & Performance Notes

- Semantic HTML, labeled form fields, visible focus states, and `aria-label`s on icon-only
  controls.
- `prefers-reduced-motion` is respected globally and in the hero's build-log animation.
- Fully responsive from 320px up to large desktop screens, tested at common breakpoints
  (320 / 375 / 390 / 430 / 768 / 1024 / 1280 / 1440 / 1920).

## Content Accuracy

All experience, project and skill content is based on the resume-supported information
provided for this build. No fake clients, testimonials, statistics, or unsupported years
of experience have been added.
