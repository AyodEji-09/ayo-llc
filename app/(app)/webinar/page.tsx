"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CURRENCIES, CurrencyType, detectUserCurrency } from "@/lib/currency";
import {
  Calendar,
  Clock,
  Video,
  ArrowRight,
  Check,
  Lock,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { InternationalPhoneInput } from "@/components/common/phone-input";

export default function WebinarPage() {
  const [currency, setCurrency] = useState<CurrencyType>("USD");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrency(detectUserCurrency());
  }, []);

  const activeCurrency = CURRENCIES[currency] || CURRENCIES.USD;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      toast.error("Please provide your name and email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/webinar/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          currency,
          stage: "General Attendee",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to initialize payment session.");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned from server.");
      }
    } catch (err: any) {
      console.error("Payment initialization error:", err);
      toast.error(err.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] antialiased">
      <main>
        {/* Hero Section */}
        <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:px-8 md:py-20 lg:gap-12">
          <div className="space-y-6 md:col-span-7">
            <h1 className="text-2xl leading-tight font-semibold tracking-tight text-[#1a1c1c] sm:text-3xl md:text-4xl">
              THE AUTHOR&apos;S BLUEPRINT: From Book Idea to a Published Work
            </h1>

            <p className="text-base leading-snug font-medium text-[#5d5d6f] sm:text-lg md:text-xl">
              A 2-Day Virtual Experience for Aspiring Authors, New Writers &amp;
              Manuscript Owners
            </p>

            <p className="text-sm leading-relaxed font-normal text-[#6E6E80] sm:text-base">
              Ready to Take Your Book Idea Seriously? You don&apos;t need to
              have everything figured out. You just need to take the next step.
              Your book idea could become the book you&apos;ve always imagined.
              Don&apos;t let uncertainty keep your manuscript or your idea on
              the shelf.
            </p>

            <div className="pt-2">
              <a
                href="#register"
                className="inline-flex items-center gap-2 rounded-xl bg-[#5f3add] px-8 py-4 text-sm font-medium text-[#ffffff] shadow-md transition-all duration-200 hover:bg-[#7857f8] sm:text-base"
              >
                <span>Secure Your Spot</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-xl border border-[#E2E2E9] bg-[#f3f3f4] p-2 shadow-lg">
              <div className="relative h-[360px] w-full overflow-hidden rounded-lg sm:h-[400px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASGdfVLqMu4UXGvWV8YDLye1NGZ83FURo-wq_mB-YRmelrFSErvSj1aw26ra46glgPtwoed25nHWXj0xY71HrLXVDNlNcxKpsV8_-l9D-ZymCACL58i7ywLwEeH2-pGBBmZzSrMGDf3RQ91NAmiwpi9NCLDiQTApPq6N6rstgot0JKBBCcQFIJF6epS9z-0g8LDPfYwJctyMt4dgApIhuLebRd7jee-Q_QumBVCuxLHknLA2np6vHeyA"
                  alt="The Author's Blueprint Masterclass"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="absolute right-6 bottom-6 left-6 rounded-xl border border-[#E2E2E9] bg-[#ffffff]/90 p-4 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#5f3add]/10 text-[#5f3add]">
                    <Calendar className="size-5 text-[#5f3add]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1c1c]">
                      9th &amp; 10th October 2026
                    </p>
                    <p className="text-xs font-normal text-[#6E6E80]">
                      Live Virtual Masterclass
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section
          className="border-y border-[#E2E2E9] bg-[#f3f3f4] py-14 sm:py-20"
          id="details"
        >
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="mb-3 text-2xl font-semibold text-[#1a1c1c] sm:text-3xl md:text-4xl">
                Event Details
              </h2>
              <p className="text-sm text-[#6E6E80] sm:text-base">
                Everything you need to know about joining this transformative
                2-day virtual experience.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-start space-y-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-8 shadow-xs">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#e6deff] text-[#5f3add]">
                  <Calendar className="size-6 text-[#5f3add]" />
                </div>
                <h3 className="text-base font-semibold text-[#1a1c1c]">Date</h3>
                <p className="text-sm text-[#6E6E80] sm:text-base">
                  9th &amp; 10th October 2026
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-8 shadow-xs">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#e6deff] text-[#5f3add]">
                  <Clock className="size-6 text-[#5f3add]" />
                </div>
                <h3 className="text-base font-semibold text-[#1a1c1c]">Time</h3>
                <p className="text-sm text-[#6E6E80] sm:text-base">
                  2PM CST / 3PM EST / 8PM WAT / 12PM PST
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-8 shadow-xs">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#e6deff] text-[#5f3add]">
                  <Video className="size-6 text-[#5f3add]" />
                </div>
                <h3 className="text-base font-semibold text-[#1a1c1c]">
                  Venue
                </h3>
                <p className="text-sm text-[#6E6E80] sm:text-base">
                  Online Meeting Room (Link sent upon payment confirmation)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 'THIS EXPERIENCE IS FOR YOU IF...' Section */}
        <section
          className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-24 md:px-8"
          id="audience"
        >
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="mb-3 text-2xl font-semibold tracking-tight text-[#1a1c1c] uppercase sm:text-3xl md:text-4xl">
              THIS EXPERIENCE IS FOR YOU IF...
            </h2>
            <p className="text-sm text-[#6E6E80] sm:text-base">
              Identify your current stage and discover how this masterclass
              provides the exact framework you need.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-6 shadow-xs">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#7857f8] text-[#fffbff]">
                <Check className="size-4" />
              </div>
              <p className="text-sm leading-relaxed text-[#1a1c1c] sm:text-base">
                You have a book idea but don&apos;t know where to begin.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-6 shadow-xs">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#7857f8] text-[#fffbff]">
                <Check className="size-4" />
              </div>
              <p className="text-sm leading-relaxed text-[#1a1c1c] sm:text-base">
                You&apos;ve started writing but don&apos;t know what comes next.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-6 shadow-xs">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#7857f8] text-[#fffbff]">
                <Check className="size-4" />
              </div>
              <p className="text-sm leading-relaxed text-[#1a1c1c] sm:text-base">
                You have a completed manuscript but haven&apos;t published it.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-6 shadow-xs">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#7857f8] text-[#fffbff]">
                <Check className="size-4" />
              </div>
              <p className="text-sm leading-relaxed text-[#1a1c1c] sm:text-base">
                You&apos;ve been researching publishing but still feel
                overwhelmed.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-6 shadow-xs">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#7857f8] text-[#fffbff]">
                <Check className="size-4" />
              </div>
              <p className="text-sm leading-relaxed text-[#1a1c1c] sm:text-base">
                You want to understand the publishing process before investing
                in it.
              </p>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-6 shadow-xs">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#7857f8] text-[#fffbff]">
                <Check className="size-4" />
              </div>
              <p className="text-sm leading-relaxed text-[#1a1c1c] sm:text-base">
                You&apos;ve always wanted to become a published author but
                haven&apos;t taken the first step.
              </p>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section
          className="border-t border-[#E2E2E9] bg-[#f3f3f4] py-16 sm:py-24"
          id="register"
        >
          <div className="mx-auto max-w-2xl px-4 sm:px-6 md:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-3 text-2xl font-semibold text-[#1a1c1c] sm:text-3xl md:text-4xl">
                Secure Your Registration
              </h2>
              <p className="text-sm text-[#6E6E80] sm:text-base">
                Complete the form below to reserve your seat for this exclusive
                2-day virtual event.
              </p>
            </div>

            <div className="rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-8 shadow-lg md:p-12">
              <form onSubmit={handleRegisterSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#1a1c1c]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-[#c9c4d8] bg-[#f9f9f9] px-4 py-3 text-sm text-[#1a1c1c] focus:ring-2 focus:ring-[#5f3add] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#1a1c1c]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full rounded-lg border border-[#c9c4d8] bg-[#f9f9f9] px-4 py-3 text-sm text-[#1a1c1c] focus:ring-2 focus:ring-[#5f3add] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-[#1a1c1c]">
                    Phone / WhatsApp
                  </label>
                  <InternationalPhoneInput
                    value={formData.phone}
                    onChange={(phone) =>
                      setFormData((prev) => ({ ...prev, phone }))
                    }
                    defaultCountry={currency === "NGN" ? "ng" : "us"}
                    placeholder="801 234 5678"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#5f3add] px-6 py-4 text-base font-semibold text-[#ffffff] shadow-md transition-all duration-200 hover:bg-[#7857f8] disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="size-5 animate-spin" />
                        <span>Redirecting to Stripe...</span>
                      </>
                    ) : (
                      <>
                        <span>
                          Proceed to Stripe Checkout ({activeCurrency.formatted}
                          )
                        </span>
                        <Lock className="size-4" />
                      </>
                    )}
                  </button>
                </div>

                <p className="mt-4 text-center text-xs text-[#6E6E80]">
                  Payment confirmation and meeting link will be sent instantly
                  to your email.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
