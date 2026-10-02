# Heavenly Noor 🌸

**Flowers that carry light** — A luxury floral boutique in Boca Raton, serving Palm Beach & Broward.

## Live Demo
- **GitHub Pages:** https://sakibintesar.github.io/Heavenly-Noor/
- **Local dev:** `python -m http.server 8377` → http://localhost:8377

## Features
- **Neobrutalism × Wabi-sabi** design system — hard ink borders, offset shadows, "Noor means light" palette
- **Social-media optimized:** Open Graph (FB/Truth Social), Twitter/X cards (TikTok), JSON-LD `Florist` schema, PWA manifest
- **WhatsApp-first ordering:** floating CTA + per-product "Order this piece" buttons
- **Smooth mobile WebView experience:** momentum scrolling, `svh` units, backdrop-filter, rAF parallax
- **Instagram-driven content:** products & tags sourced from @heavenly.noor highlights (Behind Scenes 💗, Valentines 💌, Details 🌷)
- **Zero build step** — pure HTML/CSS/JS, works from `file://` or any static host

## Pages
| Page | Description |
|------|-------------|
| `index.html` | Hero, marquee, scroll-snap collections rail, shop preview, story teaser, IG feed |
| `shop.html` | Full catalog with tag filters (Wedding, Dried, Valentines 💌, Events, Fresh, Pink, White) |
| `about.html` | Brand story, 4-step process timeline, promise quote |
| `contact.html` | Order form → prefilled WhatsApp, quick WhatsApp/IG cards, delivery area |

## Tech Stack
- **Fonts:** Space Grotesk (display), DM Sans (body), Caveat (accent)
- **CSS:** Custom properties, IntersectionObserver reveals, scroll-snap rails, Ken Burns hero
- **JS:** Vanilla ES5 — parallax, scroll reveal, mobile drawer, tag filtering, form → WhatsApp
- **Icons:** Custom neobrutalist flower logo (8 petals, "HN" center)

## Project Structure
```
├── index.html          # Home
├── shop.html           # Shop with filters
├── about.html          # Story
├── contact.html        # Contact / order form
├── manifest.json       # PWA manifest
├── css/
│   └── styles.css      # Full design system
├── js/
│   └── main.js         # Interactions
├── data/
│   └── products.js     # Brand config + product catalog
└── assets/icons/
    ├── logo.svg
    ├── instagram.svg
    ├── tiktok.svg
    └── whatsapp.svg
```

## Quick Start
```bash
git clone https://github.com/sakibintesar/Heavenly-Noor.git
cd Heavenly-Noor
python -m http.server 8377
# open http://localhost:8377
```

## Configuration (before deploying)
1. **WhatsApp number** — replace `1XXXXXXXXXX` in:
   - `data/products.js` (`HEAVENLY_NOOR.whatsapp`)
   - `index.html`, `shop.html`, `about.html`, `contact.html` (floating CTA + order links)
2. **Product images** — swap Unsplash placeholders in `data/products.js` with real @heavenly.noor photos
3. **Domain** — update `og:url`, `canonical`, `manifest.json` `start_url` if using a custom domain

## Deploy
**GitHub Pages** (enabled from `main` branch root):
1. Settings → Pages → Source: "Deploy from a branch" → `main` / `/(root)`
2. Site appears at `https://sakibintesar.github.io/Heavenly-Noor/`

**Netlify / Vercel / Cloudflare Pages:**
- Connect the repo → framework: "None" / static site
- Build command: (none) · Output directory: `.` (root)
- Add custom domain `heavenlynoor.com`

## License
MIT — © 2026 Heavenly Noor · By Pihu Azad
