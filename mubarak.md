---
name: design-system-mubarak-family-restaurant
description: >
  Apply the Mubarak Hotel & Family Restaurant design system when building or
  updating the mubarakhotels.com Next.js site. Use when creating or restyling
  components, choosing colours, typography or spacing, editing the menu or
  prices, or reviewing pages against the brand.
---

# Mubarak Hotel & Family Restaurant — Design System & Skill

Adapted from the Nique restaurant template system (`DESIGN.md`, `SKILL.md`)
and matched to Mubarak's printed menu: charcoal background, warm gold
lettering, ornamental restaurant feel.

## Overview

- **Product:** Mubarak Hotel & Family Restaurant — https://www.mubarakhotels.com
- **Location:** Marthandam, Kanyakumari District, Tamil Nadu
- **Surface type:** Single-page restaurant & hospitality site (Next.js 15, static export to GitHub Pages)
- **Audience:** Local families, travellers, event and room bookers
- **Brand character:** Warm, premium-but-approachable family dining. Charcoal and gold, like the printed menu. Multi-cuisine: South Indian, Kerala (Nadan), Chinese and Arabian, all halal.

### Design principles

- **Menu first.** Visitors come for dishes and prices. Prices must be accurate and easy to scan.
- **Trust signals.** Real address, phone, halal and veg badges, and real photos.
- **One primary action per view.** "Book a Table" is the primary action; "View Menu" is secondary.
- **Fast on mobile.** Most visitors are on phones. Keep pages light and test at 375px.

## Tokens

Defined as CSS custom properties in `src/app/globals.css` (`:root`). Reference the
token, never the raw value.

### Colours

| Token | Value | Role |
|-------|-------|------|
| `--mb-ink` | `#343339` | Text primary on light; dark surfaces |
| `--mb-ink-deep` | `#1E1D22` | Header, footer, dark sections |
| `--mb-gold` | `#FACE8D` | Accent on dark surfaces (headings, prices, active states) |
| `--mb-gold-deep` | `#8A5A12` | Accent on light surfaces (links, buttons, icons) |
| `--mb-cream` | `#F1F1F1` | Light section background |
| `--mb-white` | `#FFFFFF` | Cards; text on dark surfaces |
| `--mb-error` | `#DF1529` | Errors and destructive actions only |

The template's semantic variables map onto these:

| Template variable | Light sections | `.dark-background` sections |
|-------------------|----------------|-----------------------------|
| `--background-color` | `--mb-white` / `--mb-cream` (`.light-background`) | `--mb-ink-deep` |
| `--default-color` | `--mb-ink` | `--mb-white` |
| `--heading-color` | `--mb-ink` | `--mb-white` |
| `--accent-color` | `--mb-gold-deep` | `--mb-gold` |
| `--contrast-color` | `--mb-white` | `--mb-white` (text on gold buttons is set by `.btn-mb`) |
| `--surface-color` | `--mb-white` | `--mb-ink` |

Checked contrast (WCAG 2.2):

- gold on ink: 8.5:1
- gold on ink-deep: 11.4:1
- white on gold-deep: 5.9:1
- gold-deep on cream: 5.2:1
- ink on cream: 11.1:1

**Semantic exceptions.** Dietary badges keep their meaning colours (veg green,
halal, seafood blue, etc.). The green in the logo badge stays in the logo only;
it is not a UI colour.

### Typography

| Role | Typeface | Source |
|------|----------|--------|
| Display / headings / nav (`--heading-font`, `--nav-font`) | **Chillax** | Fontshare (`api.fontshare.com`) |
| Body (`--default-font`) | **Roboto** | `next/font/google` |
| Script accent (`--script-font`) | **Great Vibes** (stand-in for Nique's *Bitter Rose*, which is a paid font) | `next/font/google` |

| Level | Size | Usage |
|-------|------|-------|
| text-xs | 14px | Captions, metadata, badges |
| text-sm | 16px | Labels, menu item names, body |
| text-base | 20px | Lead paragraphs |
| text-lg | 24px | Card titles, menu category titles |
| text-xl | 40–64px (clamp) | Section headings |
| text-2xl | 56–80px (clamp) | Hero heading |

- **Weights:** 400 (body), 500 (headings, nav, prices), 600 (buttons)
- **Script font:** used only for the decorative section eyebrow (`.description-title`), never for content people need to read.

### Spacing

**Base unit:** 8px. Scale: `8 · 12 · 16 · 20 · 24 · 40 · 48 · 64 · 128`.
Sections use 64px vertical padding on desktop and 48px on mobile.

### Shapes

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 5px | Badges, inputs |
| `--radius-md` | 10px | Small cards, images inside cards |
| `--radius-lg` | 16px | Cards, menu category cards, panels |
| `--radius-pill` | 500px | Buttons, filter pills |

### Elevation

Flat by default. Cards use a single soft shadow, `0 6px 24px rgb(0 0 0 / 6%)`.
Never stack shadows.

### Motion

- Colour, background and border transitions: `0.2s–0.3s ease`.
- AOS fade-up on section entry: once only, 600ms.
- No looping animation apart from the hero video.

## Site architecture

| Concern | Location |
|---------|----------|
| Page sections (order) | `src/app/page.js` — Hero → About → Menu → Testimonials → BookATable → Location → Events → Contact |
| Header / nav | `src/components/header/Header.jsx` |
| Footer | `src/components/footer/Footer.jsx` |
| Menu UI (Nique-style split layout) | `src/components/menu/Menu.jsx` |
| Floating "Book a Table" bar | `src/components/floatingBar/FloatingBar.jsx` (mounted in `layout.js`) |
| Menu photos (web-sized) | `public/assets/img/menu/web/` — `menu-panel.jpg` (1600px), `*-thumb.jpg` (320px) |
| **Menu data (single source of truth)** | `src/data/menuData.js` |
| Downloadable menu PDF | `public/assets/menu/mubarak-menu.pdf` |
| Global styles & tokens | `src/app/globals.css` |
| Fonts | `src/app/layout.js` (`next/font`) and the Fontshare `<link>` for Chillax |
| Client scripts (AOS, Swiper, scroll-spy, anchor scrolling) | `src/components/utils/TemplateScripts.jsx` |

### Routing rules

- It is a single page. Navigation uses in-page anchors only: `#hero`, `#about`, `#menu`, `#book-a-table`, `#events`, `#contact`.
- Logos and "Home" links go to `#hero`. **Never link to `index.html` or `/`**, because that triggers the Next.js 404 page.
- Every section sets `scroll-margin-top: 90px` so the fixed header (85px) never covers a heading.
- The active nav item comes from the scroll-spy in `TemplateScripts.jsx`. Do not hard-code `active` on more than one link.
- Asset paths are relative (`assets/img/...`) because the site is a static export with `trailingSlash: true`.

## Menu data rules

- Every price lives in `src/data/menuData.js`. Never write prices into JSX, except the featured and Chef's Pick cards, which must match the data file.
- Each category has an `id`, a `group`, a `title`, an `icon` (Bootstrap Icons) and `items`.
- Set `portions: true` when the category has Half / Full columns.
- Items take one of these shapes:
  - `{ name, price }` for a single price
  - `{ name, half, full }` for two portions
  - `{ name, price: "As per size" }` when the price varies
  - `{ name }` with no price, which renders as "—"
- **Row thumbnails:** every row shows a 44px tile. Set `image` on an item to show its photo (use a 320px file in `assets/img/menu/web/`). With no photo the tile shows `item.icon`, or else the category `icon`. Icons must be real Bootstrap Icons names (there is no `bi-bowl`).
- **Specials** (`menuSpecials`) render as gold-outlined cards at the top of their group, with a label such as "Chef's Pick". Their price must match the item row.
- Groups (the sticky tabs) are listed in `menuGroups`. Add a category to an existing group before creating a new one.
- Prices are whole rupees, written as `₹180`. Half / full prices are written `₹250 / ₹500`.
- When the printed menu changes, update `menuData.js` and replace `mubarak-menu.pdf` in the same change.

## Menu layout (Nique pattern)

- **Left:** sticky full-height photo panel with the script "Check Out", "Our Menu" in display type, and the PDF download button. On screens of 991px and below it becomes a 380px banner (320px on phones).
- **Right:** a sticky tab bar (one tab per group, scrolls sideways on mobile, highlighted from scroll position) and a dark list. Group titles use the script font in gold. Rows show the thumbnail, name, dotted leader and gold prices, with Half / Full columns where `portions: true`.
- **Floating bar:** a white pill fixed to the bottom with call and location icons, Menu and Events links, and a dark "Book a Table" button. It appears after the hero and hides while `#book-a-table` is on screen. On phones it sits on the left and shows only the icons and the button, so it never covers the scroll-to-top button.

## Buttons, headings and forms

- **Buttons:** use `.btn-mb` for the primary action and `.btn-mb btn-mb-outline` for the secondary one. Wrap groups in `.btn-group-mb`. On light sections the primary button is charcoal with gold text; inside `.dark-background` it is gold with charcoal text. All buttons are pills, labelled in sentence case ("Book a table", not "BOOK A TABLE"). Anything that looks like a button must be a real link or button.
- **Section headings:** every section starts with `.section-title`: a short script eyebrow (`.description-title`, e.g. "Visit us"), a sentence-case `h2`, and one line of intro. The eyebrow must not repeat the heading.
- **Forms:** the site has no server, so never point a form at a `.php` file or leave it without a handler. Use `emailFormHandler(subject, fields)` from `src/components/utils/emailForm.js`. It opens the visitor's email app addressed to `RESTAURANT_EMAIL`, then shows the form's `.sent-message`. Give every input an `aria-label` or a visually hidden `<label>`.
- **Map:** the Google map appears once, in `#location`. Use `DIRECTIONS_URL` (exported from `Location.jsx`) for any "Get directions" link.

## Phone numbers

- **Mobile (main):** +91 73737 50999, `tel:+917373750999`. Use it for every single "Call" button or link (header, floating bar, phone menu, hero, Events, Location's "Call us").
- **Landline:** 04651 272545, `tel:+914651272545`. Show it under the mobile wherever contact details are listed (Location, Contact, footer, booking tips).
- Update the Google structured data in `layout.js` (`telephone`, `contactPoint`) when either changes.

## Navigation and active states

- **Desktop header (1200px and up):** links are white at 60%, white on hover. The active link (set by scroll-spy) is gold with a 2px gold underline. The phone number ("Call to reserve, +91 73737 50999") sits at the far right as a tap-to-call link.
- **Phone and tablet menu (below 1200px):** the ☰ button opens a full-screen charcoal panel with large links. The active link is gold on a tinted row with a gold bar on the left. A "Call us" button sits at the bottom. The header also shows a round gold call button beside ☰. The button works with Enter, Space and Escape.
- **Menu section tabs:** text tabs, with the active one gold and a 2px gold underline (Nique style), following scroll position.
- **Mobile menu rows (576px and below):** 56px thumbnail, dish name in Chillax, no dotted leaders or dividers, and Half / Full prices stacked on the right with small labels.

## One of each (no duplicates)

- **One booking form:** the `#book-a-table` section. The hero has no form.
- **"Book a table" appears in:** the nav link, the hero button, the floating bar and the footer link list. Events uses "Book now" for event bookings. Don't add more booking buttons. Location's actions are "Get directions" and "Call us".
- **Contact details** (address, hours, phone, email) live in Location, Contact and the footer. Don't repeat them as cards in other sections.

## Pages and SEO

- **Pages:** `/` (all sections), plus `/menu/`, `/about/`, `/book-a-table/`, `/events/` and `/contact/` (folders in `src/app/`). Inner pages wrap sections in `<main className="main inner-page">` and pass `asPage`, so the section heading becomes the page's only `<h1>`.
- **Links:** the footer "Explore" list uses real page URLs so Google can find them. The nav and buttons use `#section` links; on an inner page, a section that isn't there opens `/#section`.
- **Asset paths must start with `/`** (`/assets/img/...`). Relative `assets/...` paths break on inner pages.
- **Metadata:** site-wide title, description, keywords and structured data are in `src/app/layout.js`. Per-page titles use `pageMetadata()` from `src/app/seo.js` (title template "%s | Mubarak Hotel Marthandam").
- **Google structured data:** WebSite ("Mubarak Hotel"), Hotel (rooms, restaurant, party/banquet hall, conference/meeting hall) and Restaurant, with the same address, phones, hours and map location. Only list facilities that really exist.
- **Name:** use "Mubarak Hotel & Family Restaurant" (as on the printed menu), with "Hotel Mubarak" and "Mubarak Family Restaurant" as alternate names.
- **New page?** Add it to `src/app/sitemap.js`, then resubmit the sitemap in Search Console (property `mubarakhotels.com`, verified by the GoDaddy `@` TXT record).

## Deployment

- **Hosting:** Vercel, project `dotseek/mubarakhotels`, connected to the GitHub repo `dotSeek-IT/mubarakhotels` (branch `main`).
- **To deploy:** commit and `git push`. Vercel builds and publishes automatically within a minute or two. There is no deploy script.
- **Domain:** `www.mubarakhotels.com` (production). `mubarakhotels.com` redirects to `www` (308). DNS is managed at GoDaddy; the `www` CNAME and `@` A record point to Vercel. Don't change them.
- **Check before pushing:** `npm run build` must pass. Stop the dev server first: building while `npm run dev` is running corrupts `.next`. If localhost breaks, delete `.next` and restart.
- **Next.js version:** keep it on the latest 15.5.x patch. Vercel blocks deploys of Next.js versions with known security advisories.

## Constraints

### Always

- Use the tokens above. Do not introduce new hex values.
- Give every interactive element hover and focus-visible states. Focus rings use `--accent-color` at 2px.
- Follow the 8px spacing grid.
- Meet WCAG 2.2 AA contrast. On dark surfaces use `--mb-gold` for accents; on light surfaces use `--mb-gold-deep`.
- Test at 375px and at 1440px or wider.
- Keep the halal and veg badges on dishes where they apply.

### Never

- Use pale gold (`--mb-gold`) for text on white or cream; it fails contrast.
- Mix border radii outside 5 / 10 / 16 / 500px.
- Stack two primary buttons in one view.
- Use red for anything other than errors.
- Use stock photos of dishes that are not on the menu, or label a photo with a dish it doesn't show.
- Link to `index.html`.

## Writing tone

Warm, welcoming, family-oriented and confident. Use active voice and short
sentences. Name dishes the way the restaurant does (*Nadan Kozhi*, *Kaada*,
*Kanava*, *Parotta*, *Biriyani*). Write headings in sentence case. Uppercase is
allowed only for the small decorative eyebrow and badge labels.

## Authoring workflow

When adding or changing a component:

1. **State the intent** in one sentence.
2. **Map tokens.** List every colour, font, spacing and radius token used.
3. **Define anatomy.** Name the parts (container, title, price, badge, etc.).
4. **Specify states:** default, hover, focus-visible, active, disabled, empty.
5. **Check both surfaces.** Does it work inside `.light-background` and `.dark-background`?
6. **Check responsiveness** at 375px and desktop.
7. **Verify in the browser.** Run the `dev` launch config (`npm run dev`, port 3000) and check the section and its nav link.

## Definition of done

- `npx next lint --dir src` passes.
- The section renders on `http://localhost:3000` with no console errors.
- Every nav link and logo scrolls to its section; none leads to a 404.
- Prices match `menuData.js` and the printed menu.
- Only tokens are used, with no new hard-coded colours.
- Contrast passes AA on both light and dark surfaces.
- Checked at 375px and at desktop width.
