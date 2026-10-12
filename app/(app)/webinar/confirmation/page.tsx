import Link from "next/link";
import Image from "next/image";
import { WEBINAR_CONFIG } from "@/config/webinar";
import { Check, CalendarPlus, Download, ArrowLeft } from "lucide-react";

/**
 * Confirmation page, designed with SKILL.md (apple-design):
 *  - Simplicity: one headline, one primary action, details shown as plain rows.
 *  - Typography: tight tracking/leading on the headline, looser body copy.
 *  - Response: every control gives instant pressed feedback (active:scale).
 *  - Accessibility: motion is removed under prefers-reduced-motion.
 *  - Wayfinding: tells the user what happened, what to do next, how to leave.
 */
export default function WebinarConfirmationPage() {
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `${WEBINAR_CONFIG.theme}: ${WEBINAR_CONFIG.subtitle}`,
  )}&dates=20261113T190000Z/20261114T210000Z&details=${encodeURIComponent(
    `${WEBINAR_CONFIG.tagline}\n\nVenue: ${WEBINAR_CONFIG.venue}\nYour private meeting link has been sent to your email.`,
  )}&location=${encodeURIComponent(WEBINAR_CONFIG.venue)}`;

  const details = [
    { label: "Dates", value: WEBINAR_CONFIG.dates },
    { label: "Time", value: WEBINAR_CONFIG.times },
    { label: "Where", value: "Online meeting room. The link is in your email." },
  ];

  return (
    <main className="min-h-[80vh] bg-white px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto w-full max-w-xl">
        <p className="flex items-center gap-2 text-sm font-semibold text-[#000061]">
          <Check className="size-4 stroke-[2.5]" aria-hidden="true" />
          Payment confirmed
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-[#0F172A] sm:text-5xl">
          You&apos;re registered.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
          Your seat for {WEBINAR_CONFIG.theme} is reserved. We sent your access
          link to your email.
        </p>

        <dl className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {details.map((item) => (
            <div
              key={item.label}
              className="grid grid-cols-[5.5rem_1fr] gap-4 py-4 sm:grid-cols-[7rem_1fr]"
            >
              <dt className="pt-0.5 text-xs font-semibold uppercase tracking-[0.04em] text-slate-500">
                {item.label}
              </dt>
              <dd className="text-base font-medium leading-snug text-[#0F172A]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#000061] px-6 py-4 text-base font-semibold text-white transition-[background-color,transform] duration-100 ease-out hover:bg-[#000045] active:scale-[0.97] motion-reduce:transition-colors motion-reduce:active:scale-100"
        >
          <CalendarPlus className="size-5" aria-hidden="true" />
          Add to Google Calendar
        </a>

        <div className="mt-12 flex items-center gap-4">
          <div className="relative aspect-3/4 w-14 shrink-0 overflow-hidden rounded-md border border-slate-200 bg-slate-100">
            <Image
              src={WEBINAR_CONFIG.leadMagnet.coverImage}
              alt={WEBINAR_CONFIG.leadMagnet.title}
              fill
              sizes="56px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold leading-snug text-[#0F172A]">
              {WEBINAR_CONFIG.leadMagnet.title}
            </h2>
            <p className="mt-0.5 text-sm text-slate-600">
              Your free author resource, included with registration.
            </p>
            <a
              href={WEBINAR_CONFIG.leadMagnet.downloadUrl}
              download="A-Beginners-Guide-To-Publishing.pdf"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-[#000061] underline-offset-4 transition-opacity duration-100 hover:underline active:opacity-60"
            >
              <Download className="size-4" aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </div>

        <p className="mt-12 text-sm leading-relaxed text-slate-500">
          Can&apos;t find the email? Check your promotions or spam folder, or
          reply to any message from us and we&apos;ll help.
        </p>

        <nav
          aria-label="Continue"
          className="mt-6 flex items-center gap-6 text-sm font-medium text-slate-600"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#000061]"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href="/webinar"
            className="transition-colors hover:text-[#000061]"
          >
            Webinar details
          </Link>
        </nav>
      </div>
    </main>
  );
}
