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
  tagline:
    "A 2-Day Virtual Training for Aspiring Authors, New Writers, and Manuscript Owners. ",
  hook: "Are you stuck in your author journey? Whether you're still figuring out where to start or wondering how to publish your completed manuscript, this training will help you understand the next steps. ",
  dates: "Friday, November 13th & Saturday, November 14th, 2026",
  shortDates: "13th & 14th November 2026",
  targetDateIso: "2026-11-13T20:00:00+01:00", // 8PM WAT
  times: "8:00 PM WAT / 11AM PST / 2PM EST / 1PM CST",
  priceNGN: "₦20,000",
  priceUSD: "$20",
  priceAmountCents: 2000,
  currency: "usd",
  venue: "Online Meeting Room (Link sent upon payment confirmation)",
  heroImage: "/images/webinar.jpeg",
  targetAudience: [
    "You've always wanted to become a published author but aren't sure where to start. ",
    "You have a book idea and need guidance on turning it into a manuscript.",
    "You've started writing but aren't sure how to move forward.",
    "You've completed your manuscript but haven't published it.",
    "You're overwhelmed by the different publishing options available.",
    "You want to understand the publishing process before investing your money.",
  ],
  usps: [
    {
      badge: "Early Bird",
      title: "First 10 registrants get 10- 20% off publishing costs",
      description: "",
    },
    {
      badge: "Lucky Draw",
      title:
        "5 attendees will be selected to get a free cover design for their book",
      description: "",
    },
    {
      badge: "VIP Access",
      title: "2 attendees will be selected to get a one on one session with us",
      description: "",
    },
    {
      badge: "Instant Perk",
      title: "All attendees get a free author resource",
      description: "",
    },
  ],
  testimonials: [
    {
      name: "Dare. O",
      role: "Aspiring Author",
      quote:
        "I had been thinking about writing a book for a long time, but I honestly didn’t know where to start. What I appreciated most about the experience was how clearly the publishing journey was explained. It made the process feel much more achievable and motivated me to start.",
    },
    {
      name: "Iyin",
      role: "Author",
      quote:
        "Before working with AYO LLC, I thought writing the manuscript was the hardest part. I later realized there was so much more to consider; editing, design, formatting, publishing and getting the book to readers. The guidance helped me understand what comes next and helped me prepare adequately.",
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
        "One of the biggest things I learned is that you don’t have to figure out the entire publishing process on your own. Having someone explain the different stages and what to consider at each point gave me the confidence to take my next step.",
    },
  ],
  leadMagnet: {
    title: "A Beginner's Guide to Publishing",
    description:
      "Get the exact step-by-step framework to navigate manuscript editing, cover design, formatting, Amazon KDP publishing, and distribution without the guesswork.",
    coverImage: "/images/webinar.jpeg",
    downloadUrl: "/downloads/a-beginners-guide-to-publishing.pdf",
  },
};
