export interface WebinarConfig {
  isActive: boolean;
  theme: string;
  subtitle: string;
  tagline: string;
  hook: string;
  dates: string;
  targetDateIso: string; // October 9, 2026 8:00 PM WAT (UTC+1)
  times: string;
  priceNGN: string;
  priceUSD: string;
  priceAmountCents: number; // 2000 cents = $20.00
  currency: string;
  venue: string;
  targetAudience: string[];
}

export const WEBINAR_CONFIG: WebinarConfig = {
  isActive: true,
  theme: "THE AUTHOR'S BLUEPRINT",
  subtitle: "From Book Idea to a Published Work",
  tagline: "A 2-Day Virtual Experience for Aspiring Authors, New Writers & Manuscript Owners",
  hook: "Ready to Take Your Book Idea Seriously? You don't need to have everything figured out. You just need to take the next step. Your book idea could become the book you've always imagined. Don't let uncertainty keep your manuscript or your idea on the shelf.",
  dates: "9th & 10th October 2026",
  targetDateIso: "2026-10-09T20:00:00+01:00", // 8PM WAT
  times: "2PM CST / 3PM EST / 8PM WAT / 12PM PST",
  priceNGN: "₦20,000",
  priceUSD: "$20",
  priceAmountCents: 2000,
  currency: "usd",
  venue: "Online Meeting Room (Link sent upon payment confirmation)",
  targetAudience: [
    "You have a book idea but don't know where to begin.",
    "You've started writing but don't know what comes next.",
    "You have a completed manuscript but haven't published it.",
    "You've been researching publishing but still feel overwhelmed.",
    "You want to understand the publishing process before investing in it.",
    "You've always wanted to become a published author but haven't taken the first step.",
  ],
};
