export type CurrencyType = "NGN" | "USD";

export interface CurrencyConfig {
  code: CurrencyType;
  symbol: string;
  amount: number;
  formatted: string;
  centsOrKobo: number;
}

export const CURRENCIES: Record<CurrencyType, CurrencyConfig> = {
  NGN: {
    code: "NGN",
    symbol: "₦",
    amount: 20000,
    formatted: "₦20,000",
    centsOrKobo: 2000000, // ₦20,000 in kobo
  },
  USD: {
    code: "USD",
    symbol: "$",
    amount: 20,
    formatted: "$20",
    centsOrKobo: 2000, // $20.00 in cents
  },
};

/**
 * Detects the user's country using:
 * 1. The edge-detected cookie ("country") set by Next.js middleware (reads Vercel/Cloudflare IP headers).
 * 2. Fallback: Browser timezone (e.g. "Africa/Lagos").
 * 3. Fallback: Browser locale (e.g. "en-NG").
 * 4. Default: "US".
 */
export function detectUserCountry(): string {
  if (typeof window === "undefined") return "US";

  try {
    // 1. Read edge IP country cookie set by middleware
    const match = document.cookie.match(/(?:^|;\s*)country=([^;]+)/);
    if (match && match[1]) {
      const edgeCountry = decodeURIComponent(match[1]).trim().toUpperCase();
      if (edgeCountry) {
        return edgeCountry;
      }
    }

    // 2. Fallback to browser timezone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    if (
      timeZone.includes("Lagos") ||
      timeZone.includes("Nigeria") ||
      timeZone === "Africa/Lagos"
    ) {
      return "NG";
    }

    // 3. Fallback to browser language / locale
    const locale = navigator.language || "";
    if (locale.endsWith("-NG") || locale.toLowerCase().includes("en-ng")) {
      return "NG";
    }
  } catch {
    // fallback
  }

  return "US";
}

/**
 * Automatically detects whether the user is located in Nigeria.
 * If in Nigeria -> returns "NGN".
 * Otherwise falls back to "USD".
 */
export function detectUserCurrency(): CurrencyType {
  const country = detectUserCountry();
  return country === "NG" ? "NGN" : "USD";
}
