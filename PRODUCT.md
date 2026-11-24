# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Businesses, ministries, and creators** seeking a trusted, full-service creative and digital agency partner to build their brand, web presence, social media, graphics, illustration/animation, and video content.
- **Aspiring and first-time authors / manuscript owners** looking for guided, end-to-end book publishing support (editing, formatting, cover design, Amazon KDP publishing, and distribution) and educational training such as *The Author's Blueprint* webinar.

## Product Purpose

The AYO LLC web application serves as the agency's primary digital storefront, portfolio showcase, content hub, and event/service intake channel. It exists to demonstrate AYO LLC's creative range and track record, educate prospective clients and authors, and convert visitors into service inquiries or training registrants.

## Positioning

A one-stop creative and publishing powerhouse headquartered in Riverside, California with over five years of experience—combining full-spectrum digital agency execution (web design & management, social media, graphics, illustration/animation, video) with hands-on, end-to-end book publishing under one roof.

## Operating Context

- **Public marketing & showcase surfaces**: Home (`/`), About (`/about`), Services (`/services`), Portfolio (`/portfolio`), Reviews (`/reviews`), Blog (`/blog`), and Contact (`/contact`).
- **Editorial & portfolio management**: Sanity CMS (`/studio`) powers blog posts and portfolio items.
- **Webinar & author training flow**: `/webinar` and `/webinar/confirmation` backed by `config/webinar.ts`, Stripe Checkout (`/api/webinar/create-checkout-session`, `/api/webinar/webhook`), and SendPulse transactional emails (`lib/sendpulse.ts`) with multi-currency detection (`USD` / `NGN` in `lib/currency.ts`).

## Capabilities and Constraints

- **Framework & hosting**: Next.js App Router (`app/`), Tailwind CSS, Sanity CMS (`/studio`), Stripe Checkout, and SendPulse email integration, deployed on Vercel.
- **Webinar lifecycle**: Controlled centrally via `WEBINAR_CONFIG` in `config/webinar.ts` (`isActive`, `hasEnded`, dates, pricing, and lead magnet).
- **International audience support**: Phone input normalization and `USD` / `NGN` currency handling for US and international (including Nigerian) clients and attendees.

## Brand Commitments

- **Brand name & origin**: AYO LLC, a USA-based creative solutions agency headquartered in Riverside, California, with 5+ years of proven expertise.
- **Voice & posture**: Clear, encouraging, client-centric, and professional—"Where Innovation Meets Excellence" and "Your one-stop creative powerhouse."
- **Six core service pillars**: Social Media Management, Web Design & Management, Graphics Design, Book Publishing, Illustration & Animation, and Video Works.

## Evidence on Hand

- **Partner logos**: Real client/partner marks in `public/images/` and `data.ts` (`partners`).
- **Published books**: Real book cover assets and titles in `data.ts` (`books`) and `public/images/`.
- **Testimonials & reviews**: Client and writer testimonials in `data.ts` and `config/webinar.ts`.
- **Lead magnet**: Author publishing guide (`public/downloads/a-beginners-guide-to-publishing.pdf`) referenced in `config/webinar.ts`.
- **Absences**: Do not fabricate client logos, book titles, testimonials, pricing tiers, or metrics beyond what is confirmed in `data.ts`, `config/webinar.ts`, or Sanity CMS.

## Product Principles

1. **Breadth with clarity**: Present AYO LLC's six creative and publishing capabilities clearly so visitors immediately see how multiple needs are solved in one place.
2. **Proof over hype**: Ground claims in real published books, partner marks, portfolio work, and genuine client/author feedback.
3. **Guided next steps**: Make it effortless for businesses, ministries, and aspiring authors to move from exploring services or training to starting a conversation.
4. **Preserve brand continuity**: Maintain AYO LLC's Riverside, CA identity, 5+ years track record, and approachable, excellence-focused voice across every surface.
