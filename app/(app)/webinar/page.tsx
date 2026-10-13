"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CURRENCIES, CurrencyType, detectUserCurrency } from "@/lib/currency";
import { WEBINAR_CONFIG } from "@/config/webinar";
import { CountdownTimer } from "@/components/webinar/countdown-timer";
import { ExitIntentModal } from "@/components/webinar/exit-intent-modal";
import {
  Calendar,
  Clock,
  Video,
  ArrowRight,
  Check,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { InternationalPhoneInput } from "@/components/common/phone-input";
import { AppCarousel } from "@/components/common/app-carousel";

const attendeePerks = [
  "First 10 registrants get 10- 20% off publishing costs",
  "5 attendees will be selected to get a free cover design for their book",
  "2 attendees will be selected to get a one on one session with us",
  "All attendees get a free author resource",
];

export default function WebinarPage() {
  const [currency, setCurrency] = useState<CurrencyType>("USD");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const detected = detectUserCurrency();
    setCurrency((prev) => (prev !== detected ? detected : prev));
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
    } catch (err: unknown) {
      console.error("Payment initialization error:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.";
      toast.error(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] antialiased">
      <main>
        {/* Hero Section */}
        <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-12 md:px-8 md:py-20 lg:gap-12">
          <div className="space-y-6 md:col-span-7">
            <h1 className="text-3xl leading-[1.15] font-bold tracking-tight text-[#040815] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {WEBINAR_CONFIG.headline}
            </h1>

            <p className="text-base leading-snug font-medium text-[#5d5d6f] sm:text-lg md:text-xl">
              {WEBINAR_CONFIG.subtitle}, {WEBINAR_CONFIG.tagline}
            </p>

            <p className="text-sm leading-relaxed font-normal text-[#6E6E80] sm:text-base">
              {WEBINAR_CONFIG.hook}
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

          {/* Hero Visual */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
              <div className="relative h-[420px] w-full overflow-hidden rounded-lg sm:h-[480px]">
                <Image
                  src={WEBINAR_CONFIG.heroImage}
                  alt="Your Author Journey Simplified - The Author's Blueprint"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  priority
                  className="rounded-lg bg-[#120e29] object-contain"
                />

                {/* Clickable callout box on top of the image */}
                <a
                  href="#register"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("register")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group absolute inset-x-3 top-3 z-10 flex items-center justify-between gap-3 rounded-xl border border-[#E2E2E9] bg-white p-3 text-xs font-bold text-[#040815] shadow-md transition-all duration-200 hover:border-slate-300 hover:shadow-lg sm:inset-x-4 sm:top-4 sm:p-3.5 sm:text-sm"
                >
                  <span className="leading-snug">
                    Register now to get access to your free author resource
                  </span>
                  <div className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-[#040815] transition-colors group-hover:bg-[#040815] group-hover:text-white">
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </a>
              </div>

              {/* Countdown Overlay */}
              <div className="absolute right-3 bottom-3 left-3 sm:right-6 sm:bottom-6 sm:left-6">
                <CountdownTimer
                  targetDateIso={WEBINAR_CONFIG.targetDateIso}
                  className="border-[#E2E2E9] shadow-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section
          className="border-b border-[#E2E2E9] bg-[#f3f3f4] py-14 sm:py-20"
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
                  {WEBINAR_CONFIG.dates}
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-8 shadow-xs">
                <div className="flex size-12 items-center justify-center rounded-xl bg-[#e6deff] text-[#5f3add]">
                  <Clock className="size-6 text-[#5f3add]" />
                </div>
                <h3 className="text-base font-semibold text-[#1a1c1c]">Time</h3>
                <p className="text-sm text-[#6E6E80] sm:text-base">
                  {WEBINAR_CONFIG.times}
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
                  {WEBINAR_CONFIG.venue}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Receive as Attendee Section */}
        <section className="bg-white py-16 sm:py-24" id="perks">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="mt-3 mb-3 text-2xl font-bold tracking-tight text-[#040815] sm:text-3xl md:text-4xl">
                What You Receive as an Attendee
              </h2>
              {/* <p className="text-base leading-relaxed font-normal text-[#6E6E80] sm:text-lg"> */}
              {/*   Every registration includes tangible resources and opportunities */}
              {/*   designed to move your manuscript forward. */}
              {/* </p> */}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {attendeePerks.map((perk, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-6 shadow-xs"
                >
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#7857f8] text-[#fffbff]">
                    <Check className="size-4" />
                  </div>
                  <p className="text-sm leading-relaxed font-medium text-[#1a1c1c] sm:text-base">
                    {perk}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Books We Have Published Section: REUSING BookPublishingSection component from landing page */}
        <section className="bg-white py-16 sm:py-24" id="published-books">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="mt-3 mb-3 text-2xl font-bold tracking-tight text-[#040815] sm:text-3xl md:text-4xl">
                Books We Have Published
              </h2>
            </div>
            <div>
              <AppCarousel type="book" />
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
            {WEBINAR_CONFIG.targetAudience.map((audience, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-xl border border-[#E2E2E9] bg-[#ffffff] p-6 shadow-xs"
              >
                <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#7857f8] text-[#fffbff]">
                  <Check className="size-4" />
                </div>
                <p className="text-sm leading-relaxed text-[#1a1c1c] sm:text-base">
                  {audience}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-16 sm:py-24" id="testimonials">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#040815] sm:text-3xl md:text-4xl">
                What Authors Are Saying
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              {WEBINAR_CONFIG.testimonials.map((review, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-xl border border-[#E2E2E9] bg-white p-6 shadow-xs sm:p-8"
                >
                  <p className="text-sm leading-relaxed text-[#596780] italic sm:text-base">
                    &ldquo;{review.quote}&rdquo;
                  </p>

                  <div className="mt-6 border-t border-[#E2E2E9] pt-4">
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#5f3add]/10 text-sm font-bold text-[#5f3add]">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#040815] sm:text-base">
                          {review.name}
                        </p>
                        <p className="text-xs text-[#596780]">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section className="bg-[#f3f3f4] py-16 sm:py-24" id="register">
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
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#5f3add] px-6 py-4 text-base font-semibold text-[#ffffff] shadow-md transition-all duration-200 hover:bg-[#7857f8] disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="size-5 animate-spin" />
                        <span>Redirecting to Stripe...</span>
                      </>
                    ) : (
                      <>
                        <span>
                          Proceed to Checkout ({activeCurrency.formatted})
                        </span>
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

      {/* Exit Intent Modal */}
      <ExitIntentModal />
    </div>
  );
}
