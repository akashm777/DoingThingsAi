# DoingThingsAI — Design System
> Extracted from hadi-community.de screenshots + CSS source.
> Use this as the single source of truth for all visual decisions.

---

## 1. Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg-light` | `#F2F0ED` | Primary page background (off-white, warm) |
| `--bg-light-2` | `#D6CFC4` | Secondary light bg, borders |
| `--bg-dark` | `#0E1A2B` | Dark sections, nav CTA button fill |
| `--bg-dark-2` | `#2B2F36` | Slightly lighter dark (card overlays) |
| `--bg-footer` | `#E8E2D9 → #F2F0EC` | Footer gradient (warm beige) |
| `--accent` | `#F05A28` | Orange accent — inline text highlight, arrow buttons, CTAs |
| `--text-primary` | `#0E1A2B` | Main body/heading text on light bg |
| `--text-light` | `#F9F9F9` | Text on dark sections |
| `--text-muted` | `rgba(14,26,43,0.6)` | Subtext, captions on light bg |
| `--border` | `rgba(14,26,43,0.2)` | Subtle borders, pill outlines |
| `--brand-500` | `#1F3552` | Mid-navy (buttons, secondary dark) |

### Color Rules
- **Light sections**: `--bg-light` bg + `--text-primary` text + `--accent` orange for emphasis words only
- **Dark sections**: `--bg-dark` bg + `--text-light` text + `--accent` orange for emphasis words
- **Sections alternate**: Light → Dark → Light → Dark (deliberate rhythm)
- **Never use pure black or pure white** — always the warm off-white or deep navy

---

## 2. Typography

### Font Families
| Role | Font | Fallback |
|---|---|---|
| **Display / Headings** | `"Outfit"` (bold, geometric — mirrors "hadi glancyr neue") | `sans-serif` |
| **Body / UI** | `"DM Sans"` | `Arial, sans-serif` |

> Note: hadi uses a custom font "hadi glancyr neue" (geometric display) + DM Sans for body.
> We use Outfit (weight 700/800) for display headings and DM Sans for everything else.
> Both available on Google Fonts — no custom loading needed.

### Font Sizes (fluid clamp scale)
| Token | Value |
|---|---|
| `--text-xs` | `clamp(0.75rem, 1vw, 0.875rem)` |
| `--text-sm` | `clamp(0.875rem, 1.2vw, 1rem)` |
| `--text-base` | `clamp(1rem, 1.4vw, 1.125rem)` |
| `--text-lg` | `clamp(1.125rem, 1.6vw, 1.25rem)` |
| `--text-xl` | `clamp(1.375rem, 2vw, 1.75rem)` |
| `--text-2xl` | `clamp(1.75rem, 3vw, 2.5rem)` |
| `--text-3xl` | `clamp(2.25rem, 4vw, 3rem)` |
| `--text-4xl` | `clamp(2.5rem, 5vw, 4rem)` |
| `--text-display` | `clamp(3rem, 7vw, 5rem)` |

### Font Weights
- Display headings: `800` (extra-bold, heavy — this is the signature hadi look)
- Section headings: `700`
- Body text: `400` (regular)
- Captions / muted: `300` (light)

### Line Heights
- Display: `1.0` to `1.1` (very tight — hadi signature)
- Headings: `1.1` to `1.15`
- Body: `1.5` to `1.6`

### Letter Spacing
- Display/headings: `-0.02em` (slightly tight)
- Body: `-0.01em`
- Uppercase labels: `0.08em` (wide tracking)

---

## 3. Section Pill / Tag Badge

```
[ Our team ]    [ The solution for profitable social ads ]
```
- Shape: `border-radius: 100vw` (fully pill)
- Border: `1px solid rgba(14,26,43,0.35)` on light sections | `1px solid rgba(249,249,249,0.3)` on dark
- Background: transparent (no fill)
- Padding: `6px 14px`
- Font: DM Sans, `0.8rem`, `font-weight: 400`, letter-spacing `0.04em`
- Color: inherits section text color (navy on light, white on dark)
- Usage: Always appears ABOVE the section heading, as a category label

---

## 4. Buttons

### Primary CTA Button (navy pill)
```
[ Join the Build ]   🟠
```
- Two separate elements: a pill button + a standalone orange circle with arrow
- Pill: `background: #0E1A2B`, `color: #F9F9F9`, `border-radius: 100vw`, `padding: 12px 24px`
- Font: DM Sans, `0.95rem`, `font-weight: 500`
- **The orange circle arrow**: `width: 44px`, `height: 44px`, `background: #F05A28`, `border-radius: 50%`, contains `↗` arrow icon in white
- Hover: pill bg lightens or scales slightly; orange circle rotates arrow

### Secondary / Outlined Button
```
[ Start now ]
```
- `background: transparent`, `border: 1.5px solid #0E1A2B`, `border-radius: 100vw`, `padding: 10px 22px`
- On dark bg: border becomes `rgba(249,249,249,0.5)`, text white
- Hover: fills with text color

### Text Link
- No underline by default
- On hover: underline appears with `transition: 0.2s`

---

## 5. Cards

### Bento / Service Cards (dark photo bg)
- Background: dark photo image with `object-fit: cover` + dark overlay gradient
- `border-radius: 16px`
- `overflow: hidden`
- Padding: `24px`
- White text on top
- Category label (small, uppercase, light weight) at top
- Heading below: bold white
- Description: light white, smaller
- Hover: subtle `scale(1.02)` + overlay darkens slightly
- Grid: CSS grid bento — 2 cols, asymmetric heights (some cards taller)

### Team / People Cards (rotated fan layout)
- Dark photo card with heavy `border-radius: 20px`
- Cards are rotated: center card `rotate(0)`, adjacent `rotate(-6deg)` / `rotate(6deg)`, outer `rotate(-12deg)` / `rotate(12deg)`
- Each card has `box-shadow: 0 20px 60px rgba(0,0,0,0.2)`
- Hover: hovered card pops to `rotate(0)` and `scale(1.05)`
- Overflow hidden

### Event / Edition Cards
- Light bg card with `border: 1px solid rgba(14,26,43,0.15)`
- `border-radius: 12px`
- Padding: `20px 24px`
- Edition number tag (pill badge, orange accent)
- Date, venue, description text
- Hover: border color deepens, slight `translateY(-4px)` lift

### Collaborator / Venue Cards
- Minimal: styled bordered card
- Venue name (bold, navy), edition tag, location text
- No images/logos
- `border: 1px solid rgba(14,26,43,0.2)`, `border-radius: 10px`, padding `16px 20px`

---

## 6. Navigation

### Structure
```
[Logo]    [Products]  [Events]  [Builders]  [Mission]  [Contact]      [Join the Build] [↗]
```
- Background: `#F2F0ED` (warm off-white), no shadow initially
- On scroll: adds `backdrop-filter: blur(12px)` + subtle `border-bottom: 1px solid rgba(14,26,43,0.1)`
- Position: `fixed` top, full width, `z-index: 50`
- Height: `64px`
- Logo: left aligned — wordmark text in display font, bold navy
- Nav links: `DM Sans`, `0.9rem`, `font-weight: 400`, `color: #0E1A2B`
- Nav links hover: color becomes `--accent` orange, `transition: color 0.2s`
- CTA: navy pill button + orange circle arrow (same as primary CTA)

### Mobile Nav
- Hamburger icon (3 lines)
- Full-screen overlay or right drawer
- Links stack vertically, large font size

---

## 7. Section Layouts

### Split Layout (Text Left, Visual Right)
- Used for: dark creative section, process steps section, CTA inset section
- `display: grid; grid-template-columns: 1fr 1fr`
- Gap: `clamp(2rem, 5vw, 4rem)`
- On mobile: stacks to single column

### Full-Width Centered Section
- Used for: Hero, Metrics strip, Team fan, Logos marquee
- Content centered with `max-width: 1200px` and `margin: 0 auto`
- Horizontal padding: `clamp(1rem, 4vw, 3rem)`

### Bento Grid
- `display: grid; grid-template-columns: repeat(2, 1fr)`
- Some items span 2 columns: `grid-column: span 2`
- `gap: 16px`
- Responsive: 1 col on mobile

---

## 8. Visual Effects & Animations

### Card Fan (Signature Hero Visual)
- Parent: `display: flex; align-items: flex-end; justify-content: center`
- Cards positioned with `transform: rotate(Xdeg)`
- Fan spread (5 cards): `-14deg → -7deg → 0deg → 7deg → 14deg`
- On hover: hovered card lifts to `rotate(0deg) scale(1.08) translateY(-16px)`
- `transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)`
- Cards have `box-shadow: 0 20px 60px rgba(0,0,0,0.2)`

### Scroll Reveal (Fade Up)
- Elements fade in: `opacity: 0 → 1` + `translateY(24px → 0)`
- Duration: `0.6s`
- Easing: `cubic-bezier(0.19, 1, 0.22, 1)`
- Stagger: `0.1s` between children
- Use `IntersectionObserver` — no external library needed

### Logo / Text Marquee (Horizontal Auto-scroll)
- `display: flex` with `animation: marquee linear infinite`
- Duplicate content for seamless loop
- Speed: `30s` cycle
- Pause on hover: `animation-play-state: paused`

### Button Hover — Elastic Bounce
- From hadi CSS: `transform: scale(0.92) rotate(-3deg)` on button hover
- Use `transition: transform 0.65s linear(0, 0.1529 2%, ...)` (elastic easing)
- Text moves up to reveal shadow duplicate (text-shadow trick)
- Apply to CTA buttons only

### Orange Arrow Circle Rotation
- On parent button hover: arrow rotates from `rotate(-45deg)` to `rotate(0deg)`
- `transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)`

### Section Color Transitions
- Abrupt color cuts (no gradient fades between sections) — this is intentional
- The contrast between cream and dark navy IS the visual interest

---

## 9. FAQ Section

### Layout
- Two columns: Left (title block 40%) + Right (accordion 60%)
- Background: `#F2F0ED`
- `gap: clamp(2rem, 5vw, 4rem)`

### Left Column
- Section pill tag at top
- Large bold heading (`--text-3xl` to `--text-4xl`), dark navy
- Short descriptor text below, muted

### Right Column (Accordion)
- Each item: question text left + chevron `∨` icon right
- Separator: `border-bottom: 1px solid rgba(14,26,43,0.15)` only
- No card background or border-radius
- On expand: answer text fades in with `max-height` animation
- Chevron rotates `180deg` when open
- Item padding: `20px 0`
- `transition: all 0.3s ease`

---

## 10. Footer

### Structure
- Background: `linear-gradient(to bottom, #E8E2D9, #F2F0EC)`
- Padding: `clamp(4rem, 8vw, 6rem)` top, `3rem` bottom
- 3-column grid: Logo+Social | Location/Info | Navigation

### Column 1 — Logo & Social
- Community logo/wordmark
- "Follow us" label (lowercase, small, muted)
- Social icon row: Instagram, LinkedIn, Twitter/X, WhatsApp
- Icons: `22px`, navy, hover → orange, `transition: color 0.2s`

### Column 2 — Info
- Label: `"Chennai, India"` (small, muted, lowercase)
- Contact / WhatsApp info

### Column 3 — Navigation
- Label: `"navigation"` (lowercase, small, muted)
- Scroll-anchor links: Products · Events · Builders · Mission · Contact
- `font-weight: 300`, hover → underline

### Bottom Bar
- `border-top: 1px solid rgba(14,26,43,0.1)`, `padding-top: 1.5rem`
- Left: tagline or build credit
- Right: `© 2026 DoingThingsAI. All rights reserved.`

---

## 11. Spacing Scale

| Token | Value |
|---|---|
| `--space-1` | `0.375rem` |
| `--space-2` | `0.625rem` |
| `--space-3` | `0.875rem` |
| `--space-4` | `1.25rem` |
| `--space-5` | `1.75rem` |
| `--space-6` | `2rem` |
| `--space-7` | `2.25rem` |
| `--space-8` | `2.5rem` |
| `--section-sm` | `clamp(2.5rem, 5vw, 4rem)` |
| `--section-md` | `clamp(4rem, 7vw, 6rem)` |
| `--section-lg` | `clamp(5rem, 9vw, 8rem)` |

### Site Container
- `max-width: 1200px`
- `margin: 0 auto`
- `padding: 0 clamp(1rem, 4vw, 3rem)`

---

## 12. Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `0.5rem` (8px) | Small elements, tags |
| `--radius-md` | `1rem` (16px) | Cards, panels |
| `--radius-lg` | `1.25rem` (20px) | Large cards, team photos |
| `--radius-inset` | `1.5rem` (24px) | Dark inset CTA section |
| `--radius-pill` | `100vw` | Buttons, badges, pills |

---

## 13. Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 2px 8px rgba(14,26,43,0.08)` | Subtle card lift |
| `--shadow-md` | `0 8px 32px rgba(14,26,43,0.12)` | Floating cards |
| `--shadow-lg` | `0 20px 60px rgba(14,26,43,0.2)` | Team fan cards |
| `--shadow-orange` | `0 8px 24px rgba(240,90,40,0.3)` | Orange CTA hover glow |

---

## 14. Hadi Signature Patterns (Must Replicate)

1. **Mixed-color inline heading** — key phrase in `--accent` orange, rest in navy:
   ```
   The community for people who actually <orange>build with AI.</orange>
   ```

2. **Section pill always floats above heading** — never inline, own line, `margin-bottom: 1rem`

3. **Two-element CTA pair** — pill button + orange circle arrow are siblings, NOT nested inside each other

4. **Dark inset section** — some dark blocks have `border-radius: 24px` and `margin: 0 clamp(1rem, 3vw, 2rem)` creating an inset look (screenshot 5 — CTA block)

5. **Photo cards always dark** — even in light sections, photo cards have dark overlays + white text

6. **Numbers as hero copy** — stats at display size, small label below, NO box/card around them

7. **Lowercase footer labels** — "navigation", "follow us" — intentional, not small-caps

8. **No decorative dividers** — section color contrast does the separation work

9. **Circled step numbers** — outline circle (`border: 1.5px solid currentColor`, `border-radius: 50%`, `width: 40px`, `height: 40px`) — NOT filled

10. **Letter-spacing on pill badges** — `0.04em` makes them feel premium, not generic

---

## 15. Tech Stack & Implementation Notes

### Stack
- **Framework**: React + Vite + TypeScript
- **Styling**: TailwindCSS v3
- **Components**: shadcn/ui (Accordion for FAQ, Sheet for mobile nav)
- **Fonts**: Google Fonts (Outfit + DM Sans)
- **Animations**: CSS + IntersectionObserver (no framer-motion needed)
- **Deployment**: Vercel

### Tailwind Config Additions
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      'bg-light': '#F2F0ED',
      'bg-dark': '#0E1A2B',
      'bg-dark-2': '#2B2F36',
      'accent': '#F05A28',
      'navy': '#0E1A2B',
      'navy-mid': '#1F3552',
      'text-muted-light': 'rgba(14,26,43,0.6)',
    },
    fontFamily: {
      display: ['Outfit', 'sans-serif'],
      body: ['DM Sans', 'Arial', 'sans-serif'],
    },
    borderRadius: {
      'pill': '100vw',
      'inset': '1.5rem',
    },
    boxShadow: {
      'card': '0 8px 32px rgba(14,26,43,0.12)',
      'fan': '0 20px 60px rgba(14,26,43,0.2)',
      'orange': '0 8px 24px rgba(240,90,40,0.3)',
    }
  }
}
```

### shadcn Components to Use
- `Accordion` → FAQ section (already has animation)
- `Sheet` → Mobile nav drawer
- Everything else is custom — avoid using shadcn defaults as-is, always restyle to match design system

### Google Fonts Link Tag
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800&family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
```

---

*Last updated: 2026-10-11 | Source: hadi-community.de screenshots + CSS source analysis*
