# RexWithYou Landing

Astro 5 + Tailwind v4 static site for [rexwithyou.com](https://rexwithyou.com).

## Quick start

```bash
cd landing
npm install
npm run dev          # http://localhost:4321
```

## Build

```bash
npm run build        # → dist/
npm run preview      # serve dist/ locally
```

## Deploy

Static output in `dist/`. Drop on any static host:

- **Cloudflare Pages** (recommended): connect this repo, set build command `cd landing && npm install && npm run build`, output directory `landing/dist`. Free TLS, custom domain, cookieless analytics.
- **GitHub Pages**: works, slower CDN.
- **Vercel / Netlify**: works, free tier sufficient.

## Placeholders to replace before launch

Search the codebase for these tokens:

| Token | Where | Replace with |
|---|---|---|
| `[YOUR_LEGAL_NAME]` | `index.astro` footer | Your legal entity name |
| `[YOUR_PRIVACY_EMAIL]` | `index.astro`, `privacy.astro`, `terms.astro` | Working privacy email |
| App Store / Play Store `href="#"` | `index.astro` hero + final CTA | Real store URLs once submitted |
| `og-1200x630.png` | `Base.astro` head | Generated OG preview image |
| `apple-itunes-app` meta (commented out) | `Base.astro` head | Enable with real Apple ID for Smart App Banner |

## Assets

`public/` already contains:

| File | Source | Purpose |
|---|---|---|
| `app-icon.png` | `ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png` | Favicon, footer mark |
| `hero-rex.mp4` | `assets/onboarding_videos/Rex_thinking.mp4` | Hero phone video |
| `meet-rex.mp4` | `assets/verdict/verdict_loop.mp4` | Meet Rex section video |
| `rex-character.png` | `assets/images/img_rex.png` | (reserved — currently unused) |
| `shot-home.png` | `test/screenshots/01_home.png` | Inside-the-app card 1 |
| `shot-meals.png` | `test/screenshots/02_today_meals_calories.png` | Inside-the-app card 2 |
| `shot-meal.png` | `test/screenshots/04_meal_detail.png` | Inside-the-app card 3 |

Re-export from app when screens change — paths are stable.

## Design tokens

CSS-first config in `src/styles/global.css` mirrors `DESIGN.md`:

- Background: `#000` OLED, surfaces `#111` / `#181818`
- Brand: `#FF5E62 → #FF9966` (orange-red gradient), Inter font

Add new tokens to the `@theme {}` block — Tailwind v4 picks them up as `bg-rex-*`, `text-rex-*`, etc.

## What's stubbed

- `/privacy` and `/terms` are placeholder cards. Privacy text exists in `docs/privacy/policy-en.md` — needs to be inlined or rendered from markdown when domain + legal entity are finalised.
- App Store / Google Play links are `#`. Apple/Google badge artwork should be replaced with official assets from [marketing.apple.com](https://developer.apple.com/app-store/marketing/guidelines/) and [play.google.com/intl/en_us/badges/](https://play.google.com/intl/en_us/badges/).
- No analytics yet. Cloudflare Web Analytics or Plausible recommended (cookieless → no banner needed).
- No `og-1200x630.png` yet — generate from hero or commission.

## TODO before public launch

- [ ] Replace 5 placeholders above
- [ ] Inline privacy + terms text or render from markdown
- [ ] Swap stub App Store/Play SVGs for official badges
- [ ] Generate OG preview image (1200×630)
- [ ] Hook up Smart App Banner (`apple-itunes-app` meta)
- [ ] Add analytics (Plausible / Cloudflare Web Analytics)
- [ ] Test responsive at 360px, 768px, 1280px
- [ ] Lighthouse + PageSpeed pass
- [ ] Submit to Apple App Store Connect / Google Play Console with this URL
