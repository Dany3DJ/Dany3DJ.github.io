---
name: Daniel Wissa — Portfolio
description: Creative engineer portfolio built to convert visitors into clients.
colors:
  near-black: "#050505"
  surface: "#111111"
  electric-blue: "#0070f3"
  blue-glow: "#0070f366"
  white: "#ffffff"
  ghost-border: "#ffffff1a"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(3rem, 10vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-2px"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.2
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 800
    lineHeight: 1.3
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.1rem"
    fontWeight: 300
    lineHeight: 1.6
  label:
    fontFamily: "Outfit, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 500
    letterSpacing: "1px"
rounded:
  pill: "100px"
  card-xl: "40px"
  card-lg: "24px"
  card-md: "20px"
  card-sm: "16px"
  chip: "6px"
spacing:
  section: "100px 0"
  container: "0 2rem"
  card: "2rem 2.5rem"
  card-sm: "1.5rem"
components:
  button-primary:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "1rem 2.5rem"
  button-primary-hover:
    backgroundColor: "{colors.electric-blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "1rem 2.5rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "1rem 2.5rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.white}"
    rounded: "{rounded.card-md}"
    padding: "2rem 2.5rem"
  card-contact:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.white}"
    rounded: "{rounded.card-lg}"
    padding: "3rem"
---

# Design System: Daniel Wissa — Portfolio

## 1. Overview

**Creative North Star: "The Blueprint at Night"**

Daniel Wissa's portfolio is a precision instrument in darkness. The page does not try to impress — it persuades. Every section answers the client's question before they ask it: *can this person solve my problem and deliver?* The layout is structured, the information hierarchical, the accent color deployed with intent. When blue appears, it means something.

The visual language is that of an engineer who thinks in systems. Dark surfaces, tight typography, confident spacing. Ambient orbs and noise texture give the darkness texture without adding noise. Nothing decorates; everything functions. The quality of the page itself is proof of capability — a poorly built portfolio undermines every claim inside it.

This system explicitly rejects the generic dark-sidebar portfolio template, the cheap-freelancer-site aesthetic (cluttered, low-signal, no authority), and the corporate HR page (stiff, interchangeable). If it could have been generated from a theme template, something has gone wrong.

**Key Characteristics:**
- Near-black field with a single trusted blue voice
- Outfit at extreme weights (800 display, 300 body) — the contrast IS the hierarchy
- Cards are surfaces that hold information, not frames around it
- Hover states have authority: translate, glow, border shift — things respond with weight
- Blue fires sparingly: CTAs, active states, accent spans, borders on hover only

## 2. Colors: The Blueprint Palette

One dark field, one trusted blue. The palette is a decision, not a default.

### Primary
- **Electric Blue** (`#0070f3`): The single accent. Used for CTAs, active nav states, card hover borders, accent `<span>` elements in headings, timeline dots, bullet markers, and company names in experience cards. When blue appears, the client's eye goes there. Its rarity is the point.
- **Blue Glow** (`#0070f366`): The soft halo around blue elements at rest and on hover. Used in `box-shadow` values and the ambient orb background. Not a color — an atmosphere.

### Neutral
- **Near-Black** (`#050505`): The base layer. The stage everything sits on. Not pure black — a faint presence gives depth without harshness.
- **Surface** (`#111111`): Card backgrounds and secondary containers. One step above the base. The distinction is subtle but structural.
- **White** (`#ffffff`): Primary text only. Full opacity at headings; 70% at body; 60% at supporting text; 40% at muted/footer copy.
- **Ghost Border** (`#ffffff1a`): Structural but nearly invisible. Defines card edges without drawing attention.

### Named Rules
**The One Voice Rule.** Electric Blue (`#0070f3`) occupies at most 15% of any given screen. Its rarity is the point. A second accent, blue used as a background fill, or blue applied to body text destroys its signal value.

**The Opacity Stack Rule.** White text is always `#ffffff` — opacity varies by hierarchy (100% headings, 70% body, 60% supporting, 40% muted). Never substitute a gray hex for text; adjust opacity only.

## 3. Typography: The Outfit System

**Display / Body Font:** Outfit (Google Fonts, weights 300 / 400 / 600 / 800)

**Character:** A geometric sans with warmth in the curves. The weight span — ultralight 300 to heavy 800 — creates hierarchy without a second typeface. At 800 it commands attention; at 300 it reads long-form with ease. One tool, used well.

### Hierarchy
- **Display** (800, `clamp(3rem, 10vw, 6rem)`, lh 1.1, ls -2px): Hero heading only. One instance per page.
- **Headline** (800, `3.5rem`, lh 1.2): Section titles. Anchors each section, always paired with a short subtitle.
- **Title** (800, `1.3–1.4rem`, lh 1.3): Card titles and experience role names. Authority at a smaller scale.
- **Body** (300, `1.1rem`, lh 1.6): Paragraph text. Deliberately light to contrast against 800-weight headings. Max line length 65–75ch.
- **Label** (400–600, `0.75–0.9rem`, ls 1–2px): Nav links, date badges, status tags. Uppercase when used for navigation or metadata.

### Named Rules
**The Contrast Rule.** Hierarchy is achieved through weight, not size alone. 800 vs 300 is the primary instrument. Never place two weights close together (400 and 500) when 800 and 300 are available.

**The Single Family Rule.** Outfit only. No second typeface, no monospace exception. If something does not work in Outfit, reconsider the element — do not import another font.

## 4. Elevation

This system is flat by default and lifts on interaction. There are no ambient shadows at rest — surfaces are defined by background color and ghost border alone. Depth is tonal (near-black to surface to slightly lighter on hover), not shadow-based.

Shadows appear only as state responses: hover lifts a card, active elements glow, focused CTAs cast a colored halo. The principle: things you can act on earn the right to rise.

### Shadow Vocabulary
- **Hover lift** (`0 12px 40px rgba(0,0,0,0.5), 0 0 30px rgba(0,112,243,0.08)`): Standard cards on hover. The dark layer grounds the element; the faint blue secondary connects it to the accent system.
- **Contact card lift** (`0 20px 40px rgba(0,0,0,0.4)`): Larger cards with more vertical lift (-10px Y translate).
- **CTA glow** (`0 0 20px rgba(0,112,243,0.3)` at rest, `0 10px 30px rgba(0,112,243,0.5)` on hover): Primary buttons only. The glow is the accent color's atmosphere.
- **Dot pulse** (`0 0 12px rgba(0,112,243,0.4)` at rest, `0 0 20px rgba(0,112,243,0.4)` on hover): Timeline dots. Small-scale glow for small-scale accent elements.

### Named Rules
**The Flat-By-Default Rule.** Every surface is flat at rest. Shadows appear only as a response to user interaction — hover, focus, active state. A shadow on an un-hovered element is forbidden.

## 5. Components

### Buttons
Pill-shaped, confident, with authority in their hover response.
- **Shape:** Full pill (`border-radius: 100px`). The system's motion identity. Non-negotiable.
- **Primary:** Electric Blue background (`#0070f3`), white text, `1rem 2.5rem` padding, at-rest CTA glow. On hover: -5px Y translate, intensified glow shadow.
- **Secondary:** Transparent background, ghost border (`rgba(255,255,255,0.1)`), white text. No glow at rest. On hover: faint white fill (`rgba(255,255,255,0.05)`), border shifts to `rgba(255,255,255,0.3)`.
- **Hover / Focus:** `cubic-bezier(0.16,1,0.3,1)` on all transitions. Ease-out-expo only — no bounce, no elastic.

### Cards / Containers
Cards hold information. They do not frame it.
- **Corner Style:** `20px` (standard cards), `24px` (contact cards — more breathing room at larger padding), `40px` (visual box — architectural scale).
- **Background:** `#111111` at rest; slightly lightened on hover via `rgba` or `color-mix`.
- **Shadow Strategy:** Flat at rest. Hover lift shadow + faint blue secondary (see Elevation).
- **Border:** `1px solid rgba(255,255,255,0.1)` at rest, `1px solid #0070f3` on hover. Border shift is the primary hover signal.
- **Internal Padding:** `2rem 2.5rem` standard, `3rem` contact cards, `1.5rem` mobile.

### Tags / Chips
Used in the About section visual box and experience date badges.
- **Skill tags:** `rgba(255,255,255,0.05)` fill, `1px solid rgba(255,255,255,0.1)` border, `100px` radius, Electric Blue text, 600 weight. Float-animated. On hover: `rgba(0,112,243,0.15)` fill, blue border, animation pauses.
- **Date badges:** `rgba(0,112,243,0.15)` fill, `1px solid rgba(0,112,243,0.25)` border, `100px` radius. Blue-tinted to signal temporal metadata distinct from skill tags.

### Navigation
Dual mode: desktop pill-row, mobile sidebar.
- **Desktop:** Fixed top bar, `backdrop-filter: blur(10px)`, `rgba(5,5,5,0.5)` background. Links uppercase, 0.9rem, weight 400, 70% opacity at rest, 100% active. Active state: animated blue fill (scroll-position signal), sliding 2px blue underline with glow. Scrolled state: padding tightens, background darkens to `rgba(5,5,5,0.8)`.
- **Mobile:** Single active-section link visible in navbar (adjacent links hide). Hamburger opens full-height right sidebar, 60% viewport width, blurred overlay. Sidebar links at 1.8rem / 700 weight. Active link in Electric Blue with underline.

### Timeline (signature component)
Vertical spine with left-rail dates and right-side cards.
- **Spine:** 2px wide, gradient transparent-to-blue-to-transparent. Sits 60px from container left edge.
- **Dot:** 16px circle, Near-Black fill, `3px solid #0070f3` border, pulse glow. Scales to 1.2x on hover.
- **Entry reveal:** Fade-up on scroll via IntersectionObserver. Bullet items stagger with 80ms delay each.
- **Card hover:** Slides +6px on X axis (rightward), border shifts to Electric Blue.

### Tools Marquee (signature component)
Four rows of infinite-scroll horizontal tracks, alternating direction, edges masked.
- **Cards:** `16px` radius, `1.5rem 2rem` padding, icon-left plus label-right layout.
- **Icon treatment:** `brightness(0) invert(1)` — all icons render white, glow Electric Blue on hover.
- **Mask:** `linear-gradient(to right, transparent, black 10%, black 90%, transparent)` applied to each row, creating a soft edge fade.
- **Animation:** 60s linear infinite per row. Alternate rows run in reverse. Offset rows have a 5rem leading indent.

## 6. Do's and Don'ts

### Do:
- **Do** use `#0070f3` sparingly — CTAs, active nav, hover borders, accent `<span>` in headings. When blue appears, it earns attention by being rare.
- **Do** use Outfit weight 800 vs 300 as the primary hierarchy tool. The contrast between them IS the visual system.
- **Do** use `cubic-bezier(0.16,1,0.3,1)` for all UI transitions. This easing signature is the system's motion identity.
- **Do** keep body text at weight 300, max 65–75ch line length.
- **Do** shift card borders to `#0070f3` on hover as the primary hover signal.
- **Do** suppress ambient orbs and float animations under `prefers-reduced-motion`.
- **Do** treat the quality of the page itself as evidence of capability — every section should feel as considered as the work it describes.

### Don't:
- **Don't** build a generic dark-sidebar portfolio layout. If it could have come from a GitHub Pages template, it has failed.
- **Don't** create a cheap-freelancer aesthetic: cluttered sections, mismatched spacing, low-signal copy, visible theme seams.
- **Don't** use a corporate HR-page structure: rigid symmetrical columns, interchangeable section headers, no personality in the layout.
- **Don't** use animations as the main event. Every motion element must serve information or provide feedback — not exist to impress.
- **Don't** add a second accent color. One blue, one dark, one white. Any additional hue breaks the One Voice Rule.
- **Don't** use gradient text (`background-clip: text` with a gradient) decoratively. The nav fill animation is a functional exception communicating scroll position — it is not a pattern to extend.
- **Don't** apply ambient shadows at rest. Surfaces are flat until hovered.
- **Don't** use `text-align: justify` on body text. Uneven word spacing contradicts the system's precision.
- **Don't** use side-stripe borders (`border-left` greater than 1px as a colored accent). Full borders or none.
- **Don't** apply `backdrop-filter` to cards or page-level content elements. The navbar blur is purposeful (fixed layer over scrolling content) — do not spread it decoratively.
