---
name: AYO LLC
description: Creative solutions agency and book publishing studio combining refined editorial warmth with modern digital craft.
colors:
  royal-violet: "#5f3add"
  royal-violet-hover: "#7857f8"
  royal-violet-glow: "#7C5CFC"
  deep-indigo: "#000061"
  midnight-ink: "#040815"
  charcoal-ink: "#1a1c1c"
  slate-ink: "#596780"
  alabaster: "#f9f9f9"
  soft-stone: "#f3f3f4"
  pure-white: "#ffffff"
  hairline-border: "#E2E2E9"
  input-border: "#c9c4d8"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 700
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.05em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "12px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.royal-violet}"
    textColor: "{colors.pure-white}"
    rounded: "{rounded.xl}"
    padding: "16px 32px"
  button-primary-hover:
    backgroundColor: "{colors.royal-violet-hover}"
  button-disabled:
    backgroundColor: "#cbd5e1"
    textColor: "#475569"
    rounded: "{rounded.xl}"
    padding: "16px 32px"
  card-default:
    backgroundColor: "{colors.pure-white}"
    rounded: "{rounded.xl}"
    padding: "32px"
  input-default:
    backgroundColor: "{colors.alabaster}"
    textColor: "{colors.charcoal-ink}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: AYO LLC

## Overview

**Creative North Star: "The Creative Publishing Studio"**

AYO LLC's visual system balances refined editorial warmth with modern digital agency craft. Crisp alabaster and pure-white reading surfaces give published book covers, partner marks, and client stories room to breathe, while deep indigo and royal violet establish clear authority and interactive focus.

Surfaces stay calm and structured rather than ornamental. Generous section rhythm, balanced headings, and restrained borders keep visitors oriented whether they are browsing agency capabilities, exploring published works, or completing a registration flow.

**Key Characteristics:**
- Alabaster and pure-white alternating section bands paired with deep indigo headers
- Royal violet reserved strictly for primary actions, active states, and focus rings
- Plus Jakarta Sans geometric headings paired with Geist body copy for crisp legibility
- Flat-by-default cards framed by 1px hairline borders and soft ambient shadows on elevated containers

## Colors

The palette pairs high-authority deep indigo and royal violet accents against cool alabaster, soft stone, and slate ink neutrals.

### Primary
- **Royal Violet**: Primary call-to-action buttons, active icon badges, and keyboard focus rings across forms and landing pages.
- **Royal Violet Hover**: Hover state for primary violet buttons and interactive CTAs.
- **Royal Violet Glow**: Active navigation link highlights and dark-surface interactive accents.

### Secondary
- **Deep Indigo**: Top announcement bar, dark hero backdrops, and high-authority structural anchors.

### Neutral
- **Midnight Ink**: Primary display headings and high-emphasis section titles.
- **Charcoal Ink**: Body copy, form labels, and primary input text.
- **Slate Ink**: Supporting descriptions, metadata, and secondary captions.
- **Alabaster**: Page canvas and subtle input field fills.
- **Soft Stone**: Alternating section bands to separate distinct content groups without heavy dividers.
- **Pure White**: Elevated cards, modals, and form containers.
- **Hairline Border**: Subtle 1px structural borders around cards and callouts.
- **Input Border**: Default stroke for text inputs and phone fields.

### Named Rules
**The Accent Restraint Rule.** Royal violet is reserved for primary actions, active navigation, and focus indicators; never flood entire content sections with saturated violet.
**The Slate Ink Contrast Rule.** Supporting copy on light surfaces uses slate ink or darker neutrals so body text maintains at least 4.5:1 contrast.

## Typography

**Display Font:** Plus Jakarta Sans (with ui-sans-serif, system-ui, sans-serif fallback)
**Body Font:** Geist (with ui-sans-serif, system-ui, sans-serif fallback)

**Character:** Plus Jakarta Sans brings friendly geometric precision to headlines, while Geist keeps long-form descriptions, testimonials, and form controls clean and effortless to scan.

### Hierarchy
- **Display** (700, 3rem–3.75rem, 1.06–1.15 line-height): Hero titles only, with balanced wrapping (`text-balance`).
- **Headline** (700, 1.5rem–2.25rem, 1.15–1.25 line-height): Major section headings, centered or grid-aligned.
- **Title** (600, 1rem–1.125rem, 1.35 line-height): Card titles, detail labels, and feature headings.
- **Body** (400, 0.875rem–1rem, 1.625 line-height): Narrative paragraphs, testimonials, and descriptions, constrained to comfortable reading measures.
- **Label** (600, 0.75rem, 1.3 line-height, 0.05em tracking): Small uppercase eyebrows, countdown unit labels, and metadata tags.

### Named Rules
**The Balanced Heading Rule.** Display and section headings use balanced line wrapping (`text-balance`) to prevent single-word orphans across mobile and desktop breakpoints.

## Layout

Pages alternate between alabaster, soft stone, and pure white full-bleed bands, with inner content centered in `1152px` (`max-w-6xl`) or `1200px` containers and `16px`–`32px` horizontal gutters. Multi-column sections collapse cleanly from `2`–`3` columns on desktop to a single column on mobile, with `56px`–`96px` vertical section padding.

## Elevation & Depth

Surfaces are flat by default and rely on alternating background bands plus 1px hairline borders for separation. Shadows are ambient and soft, reserved for primary CTAs, floating overlays, and the main registration form card.

### Shadow Vocabulary
- **Subtle Card (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`)**: Rest state for bordered cards.
- **Primary CTA (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`)**: Primary action buttons and floating image callouts.
- **Form Container (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`)**: Highlighted conversion cards such as the registration form.

### Named Rules
**The Flat-By-Default Rule.** Content cards stay flat with 1px hairline borders; reserve larger ambient shadows for primary conversion containers and floating overlays.

## Shapes

Containers use generous, consistent rounding: `8px` for form inputs, `10px`–`12px` for cards, buttons, and media frames, and `9999px` (pill) for icon badges and avatars. Borders are crisp `1px` solid strokes rather than heavy outlines.

## Components

Components feel tactile, clear, and approachable, with obvious hover, focus-visible, and disabled states.

### Buttons
- **Shape:** Gently rounded rectangle (`12px` radius for page CTAs, `8px` for compact UI buttons).
- **Primary:** Royal violet fill with pure white label (`16px 32px` padding on hero/section CTAs).
- **Hover / Focus:** Transitions smoothly to royal violet hover (`200ms`), with a `2px` offset royal violet `focus-visible` outline.
- **Disabled:** Muted slate fill with dark slate text and `not-allowed` cursor; shadow removed.

### Cards / Containers
- **Corner Style:** `12px` radius.
- **Background:** Pure white on soft stone or alabaster bands.
- **Shadow Strategy:** Subtle card shadow (`xs`) on informational cards; larger ambient shadow (`lg`) on primary form containers.
- **Border:** `1px` solid hairline border (`#E2E2E9`).
- **Internal Padding:** `24px`–`32px` (`48px` on desktop form containers).

### Inputs / Fields
- **Style:** `1px` solid input border (`#c9c4d8`), alabaster fill, `8px` radius, `12px 16px` padding.
- **Focus:** `2px` royal violet ring with outline suppressed.
- **Disabled:** Reduced opacity (`0.6`) with `not-allowed` cursor.

### Navigation
- **Style:** `80px` tall header with subtle bottom hairline (`white/20`) over dark/hero backgrounds; active links display royal violet glow text with underline offset; collapses into a slide-over sheet menu on mobile.

## Do's and Don'ts

### Do:
- **Do** alternate full-bleed section backgrounds (alabaster, soft stone, pure white) so sections read as distinct chapters without heavy dividers.
- **Do** pair every form input with an explicit `<label htmlFor>` and clear `focus-visible` ring.
- **Do** use real published book covers, partner marks, and confirmed testimonials from `data.ts` and `config/webinar.ts`.

### Don't:
- **Don't** constrain full-bleed background sections with `max-w-*` without centering, which leaves uneven background strips on wide viewports.
- **Don't** nest interactive or landmark elements (such as `<main>` inside `<main>` or `<p>` inside `<h2>`).
- **Don't** invent new brand hues or swap out Plus Jakarta Sans / Geist for unrelated display fonts.
