export interface WebinarUSP {
  title: string;
  description: string;
  badge: string;
}

export interface WebinarTestimonial {
  name: string;
  role: string;
  quote: string;
}

export interface WebinarConfig {
  isActive: boolean;
  headline: string;
  theme: string;
  subtitle: string;
  tagline: string;
  hook: string;
  dates: string;
  shortDates: string;
  targetDateIso: string; // November 13, 2026 8:00 PM WAT (UTC+1)
  times: string;
  priceNGN: string;
  priceUSD: string;
  priceAmountCents: number; // 2000 cents = $20.00
  currency: string;
  venue: string;
  heroImage: string;
  targetAudience: string[];
  usps: WebinarUSP[];
  testimonials: WebinarTestimonial[];
  leadMagnet: {
    title: string;
    description: string;
    coverImage: string;
    downloadUrl: string;
  };
}

export const WEBINAR_CONFIG: WebinarConfig = {
  isActive: true,
  headline: "Your Author Journey Simplified",
  theme: "THE AUTHOR'S BLUEPRINT",
  subtitle: "From Book Idea to a Published Work",
  tagline: "A 2-Day Virtual Experience for Aspiring Authors, New Writers & Manuscript Owners",
  hook: "Ready to Take Your Book Idea Seriously? You don't need to have everything figured out. You just need to take the next step. Your book idea could become the book you've always imagined. Don't let uncertainty keep your manuscript or your idea on the shelf.",
  dates: "Friday, November 13th & Saturday, November 14th, 2026",
  shortDates: "13th & 14th November 2026",
  targetDateIso: "2026-11-13T20:00:00+01:00", // 8PM WAT
  times: "2PM CST / 3PM EST / 8PM WAT / 12PM PST",
  priceNGN: "₦20,000",
  priceUSD: "$20",
  priceAmountCents: 2000,
  currency: "usd",
  venue: "Online Meeting Room (Link sent upon payment confirmation)",
  heroImage: "/images/webinar.jpeg",
  targetAudience: [
    "You have a book idea but don't know where to begin.",
    "You've started writing but don't know what comes next.",
    "You have a completed manuscript but haven't published it.",
    "You've been researching publishing but still feel overwhelmed.",
    "You want to understand the publishing process before investing in it.",
    "You've always wanted to become a published author but haven't taken the first step.",
  ],
  usps: [
    {
      badge: "Early Bird",
      title: "10% to 20% Off Publishing Costs",
      description: "The first 10 registrants will receive an exclusive 10% to 20% discount on comprehensive publishing packages with AYO LLC.",
    },
    {
      badge: "Lucky Draw",
      title: "Free Custom Book Cover Design",
      description: "5 registered attendees will be selected to receive a professionally crafted, bespoke book cover design for their upcoming title.",
    },
    {
      badge: "VIP Access",
      title: "Exclusive 1-on-1 Strategy Session",
      description: "2 attendees will win a private, deep-dive consultation session with our senior publishing directors.",
    },
    {
      badge: "Instant Perk",
      title: "Complimentary Author Resource Guide",
      description: "Every single registrant receives instant access to download our proprietary Author Resource Guide.",
    },
  ],
  testimonials: [
    {
      name: "Dare. O",
      role: "Aspiring Author",
      quote:
        "I had been thinking about writing a book for a long time, but I honestly didn't know where to start. What I appreciated most about the experience was how clearly the publishing journey was explained. It made the process feel much more achievable.",
    },
    {
      name: "Iyin",
      role: "Author",
      quote:
        "Before working with AYO LLC, I thought writing the manuscript was the hardest part. I later realized there was so much more to consider; editing, design, formatting, publishing and getting the book to readers. The guidance helped me understand what comes next.",
    },
    {
      name: "Esther",
      role: "Manuscript Owner",
      quote:
        "The experience gave me clarity about the different publishing options available to authors. I especially appreciated that everything was explained in a simple and practical way. I left with a much better understanding of the steps I need to take.",
    },
    {
      name: "Richard",
      role: "First-Time Author",
      quote:
        "One of the biggest things I learned is that you don't have to figure out the entire publishing process on your own. Having someone explain the different stages and what to consider at each point gave me the confidence to take my next step.",
    },
  ],
  leadMagnet: {
    title: "Free Author Resource Guide",
    description: "Get the exact step-by-step framework to navigate manuscript editing, cover design, formatting, Amazon KDP publishing, and distribution without the guesswork.",
    coverImage: "/images/webinar.jpeg",
    downloadUrl: "/downloads/free-author-resource.pdf",
  },
};
