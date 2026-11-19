import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { WEBINARS } from "@/config/webinar";

export const metadata: Metadata = {
  title: "Webinar",
  description: "Explore Past and Upcoming Webinars from AYOLLC.",
};

export default function WebinarIndexPage() {
  return (
    <div className="min-h-screen bg-white text-[#1a1c1c] antialiased">
      {/* Studio Header */}
      <section className="bg-white pt-14 pb-8 sm:pt-20 sm:pb-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl leading-[1.08] font-bold tracking-[-0.03em] text-balance text-[#040815] sm:text-4xl lg:text-5xl">
              Webinar
            </h1>
            <p className="mt-3.5 max-w-[50ch] text-base leading-[1.65] text-pretty text-[#596780]">
              Explore Past and Upcoming Webinars from AYOLLC
            </p>
          </div>
        </div>
      </section>

      {/* Webinars Grid */}
      <section className="bg-white pb-14 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {WEBINARS.map((webinar) => (
              <article
                key={webinar.slug}
                className="flex w-full max-w-sm flex-col overflow-hidden rounded-xl border border-[#E2E2E9] bg-[#f3f5f7]"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#120e29]">
                  <Image
                    src={webinar.heroImage}
                    alt={`${webinar.headline} - ${webinar.theme}`}
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-contain p-2"
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                        webinar.hasEnded
                          ? "bg-white/95 text-[#596780]"
                          : "bg-[#5f3add] text-white"
                      }`}
                    >
                      {webinar.hasEnded ? "Past Workshop" : "Upcoming"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h2 className="line-clamp-1 text-lg leading-snug font-semibold text-[#040815]">
                    {webinar.headline}
                  </h2>
                  <p className="line-clamp-3 text-sm leading-relaxed text-[#596780]">
                    {webinar.subtitle}: {webinar.tagline}
                  </p>
                </div>

                <div className="flex flex-col gap-3 px-5 pb-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#596780]">
                    <Calendar className="size-3.5 shrink-0" />
                    {webinar.shortDates || webinar.dates}
                  </span>
                  <Link
                    href={`/webinar/${webinar.slug}`}
                    className="flex w-full items-center justify-center rounded-md bg-[#000061] px-4 py-2.5 text-sm font-medium text-white transition-opacity duration-200 hover:opacity-88 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5f3add]"
                  >
                    View Details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
