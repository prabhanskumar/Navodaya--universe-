# PRABHANS — Beyond the Universe

A completely original, production-ready, futuristic portfolio platform. Built with Next.js App Router, React Three Fiber, Framer Motion-style CSS animations, GSAP-ready structure, and Firebase Authentication + Firestore.

**Explore Beyond Imagination.**

## Tech Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS with a fully custom design-token system
- Three.js via React Three Fiber + Drei
- Lenis smooth scroll
- Firebase Authentication (Email/Password, Google, GitHub) + Firestore
- React Icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create your environment file:
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in your Firebase Web App credentials (Firebase Console → Project Settings → General → Your apps).

3. In Firebase Console → Authentication → Sign-in method, enable:
   - Email/Password
   - Google
   - GitHub

4. In Firebase Console → Firestore Database, create a database in production mode and set rules so authenticated users can read/write their own `users/{uid}` document.

5. Run the dev server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

6. Build for production:
   ```bash
   npm run build && npm run start
   ```

## Deploying to Vercel

```bash
npm install -g vercel
vercel
```

Add the same environment variables from `.env.local` into your Vercel project settings (Project → Settings → Environment Variables) before deploying. `vercel.json` is preconfigured with security headers and long-term caching for static assets.

## Project Structure

```
prabhans/
├── app/
│   ├── layout.tsx              → root layout, fonts, SEO metadata, viewport
│   ├── page.tsx                → landing page (all sections composed)
│   ├── globals.css             → design system tokens, glow/glass utilities, a11y rules
│   ├── loading.tsx             → global suspense fallback
│   ├── not-found.tsx           → custom 404
│   ├── global-error.tsx        → global error boundary
│   ├── robots.ts                → robots.txt generator
│   ├── sitemap.ts              → sitemap.xml generator
│   ├── manifest.ts             → PWA manifest
│   ├── login/page.tsx          → login & signup (Firebase Auth)
│   └── dashboard/
│       ├── page.tsx            → authenticated dashboard
│       └── universe/page.tsx   → Universe Explorer (interactive 3D Earth)
├── components/
│   ├── ui/                     → GlowButton, GlassCard, TypingText, MagneticCursor,
│   │                              CircularProgress, PasswordStrength, SectionHeading
│   ├── three/                  → Universe, AuthUniverse, DashboardUniverse, ExplorerEarth
│   ├── sections/                → Hero, About, Skills, Projects, Features, Statistics,
│   │                              Testimonials, FAQ, Contact, Footer
│   ├── dashboard/                → DashboardNav, DashboardCards, WelcomeHeader, ExplorerHUD
│   └── providers/               → SmoothScrollProvider (Lenis), PageTransition
├── lib/
│   ├── firebase.ts              → Firebase app/auth/firestore init
│   ├── AuthContext.tsx          → global auth state provider
│   ├── useRequireAuth.ts        → route guard hook
│   ├── useReveal.ts             → scroll-reveal intersection observer hook
│   ├── useCounter.ts            → animated counter hook
│   └── useParallax.ts           → mouse parallax hook
├── tailwind.config.ts            → color tokens, animations, glow shadows
├── next.config.ts
├── vercel.json                  → deployment headers & caching
├── .eslintrc.json
└── .env.local.example
```

## Features Implemented

- Cinematic animated 3D universe background (stars, nebula, Earth with day/night + clouds + atmosphere, orbiting Moon, Saturn with rings, black hole with accretion disk, asteroids, shooting meteors, space dust, drifting camera)
- Hero section with animated gradient logo, typewriter subtitle, glow/ripple CTA buttons, functional mobile drawer menu
- About (pillars + alternating scroll-reveal timeline), Skills (animated circular progress), Projects (3D-tilt cards), Features grid, animated Statistics counters, auto-sliding Testimonials, animated FAQ accordion, validated Contact form, shimmering gold/cyan Footer signature
- Full Firebase Authentication: email/password login & signup, Google + GitHub OAuth, password strength meter, Remember Me, inline validation, friendly error messages
- Authenticated Dashboard with live username/avatar, notifications dropdown, 9 glassmorphism feature cards, route guard redirecting unauthenticated visitors to `/login`
- Universe Explorer: drag-to-rotate / scroll-to-zoom interactive Earth with realistic shading, auto-rotation that pauses on interaction
- Global page-transition fade, Lenis smooth scroll, custom magnetic cursor (auto-disabled on touch devices and when `prefers-reduced-motion` is set)
- SEO: per-page metadata, Open Graph/Twitter cards, `robots.ts`, `sitemap.ts`, `manifest.ts`
- Accessibility: visible keyboard focus rings, reduced-motion support, semantic landmarks
- Error handling: custom 404, global error boundary, loading skeleton
- Lazy-loaded, SSR-disabled 3D canvases so they never block first paint

## Known Limitations / Honest Notes

- This was built and verified by tracing every import against the real file tree and balance-checking braces/parens across all 47 source files — there is no sandboxed network access available to run a live `npm install && npm run build`. Please run that yourself as a final check before deploying, and report back any compiler error so it can be fixed immediately.
- Jupiter, Mars, the space station, and small spacecraft from the original brief were not added to the 3D scene — Earth, Moon, Saturn, asteroids, satellites, and a black hole were prioritized to keep frame rate solid. These can be added as additional `mesh` groups in `components/three/Universe.tsx` following the same pattern as `Saturn()`.
- GSAP is listed as a dependency but the entrance/scroll animations currently rely on CSS transitions + IntersectionObserver for simplicity and performance; GSAP can be swapped in for more advanced choreography if desired.
- Firestore security rules are not included as a file — you must write rules in the Firebase Console restricting `users/{uid}` writes to the authenticated owner.
