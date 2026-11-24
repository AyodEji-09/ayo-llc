import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { WEBINARS } from "@/config/webinar";

export const metadata: Metadata = {
  title: "Webinars",
  description:
    "Explore past and upcoming virtual trainings from AYO LLC, featuring practical sessions to help you grow your brand, skills, and creative projects.",
};

export default function WebinarIndexPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 pt-16 pb-28 sm:px-6 sm:pt-20 lg:px-8">
      {/* Header */}
      <section>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="my-3 text-3xl font-bold text-[#040815] md:text-4xl">
            Webinars
          </h1>
          <p className="text-primary text-base font-normal sm:text-lg">
            Explore past and upcoming virtual trainings from AYO LLC, featuring
            practical sessions to help you grow your brand, skills, and creative
            projects.
          </p>
        </div>
      </section>

      {/* Webinars Grid */}
      <section>
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
                    {webinar.theme}
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
      </section>
    </div>
  );
}
