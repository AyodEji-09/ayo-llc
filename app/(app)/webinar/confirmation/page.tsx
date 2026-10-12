"use client";

import Link from "next/link";
import Image from "next/image";
import { WEBINAR_CONFIG } from "@/config/webinar";
import {
  Check,
  Calendar,
  Clock,
  Video,
  Download,
  CalendarPlus,
  ArrowLeft,
  Mail,
} from "lucide-react";

export default function WebinarConfirmationPage() {
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    `${WEBINAR_CONFIG.theme}: ${WEBINAR_CONFIG.subtitle}`,
  )}&dates=20261113T190000Z/20261114T210000Z&details=${encodeURIComponent(
    `${WEBINAR_CONFIG.tagline}\n\nVenue: ${WEBINAR_CONFIG.venue}\nYour private meeting link has been sent to your email.`,
  )}&location=${encodeURIComponent(WEBINAR_CONFIG.venue)}`;

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-[#fafafc] px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg rounded-2xl border border-[#E2E2E9] bg-white p-6 shadow-xs sm:p-8">
        {/* Success Header */}
        <div className="text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
            <Check className="size-6 stroke-[2.5]" />
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-[#1a1c1c] sm:text-3xl">
            You&apos;re all set!
          </h1>
          <p className="mt-2 text-sm text-[#6E6E80] sm:text-base">
            Thank you for registering. We&apos;ve sent your confirmation and
            access link to your email.
          </p>
        </div>

        {/* Event Summary Ticket */}
        <div className="mt-6 rounded-xl border border-[#E2E2E9] bg-[#f9fafb] p-5">
          <div className="border-b border-[#E2E2E9]/80 pb-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7857f8]">
              Virtual Masterclass
            </span>
            <h2 className="mt-1 text-base font-bold text-[#1a1c1c]">
              {WEBINAR_CONFIG.theme}
            </h2>
            <p className="text-xs text-[#6E6E80]">{WEBINAR_CONFIG.subtitle}</p>
          </div>

          <div className="mt-4 space-y-2.5 text-xs text-[#1a1c1c] sm:text-sm">
            <div className="flex items-start gap-2.5">
              <Calendar className="mt-0.5 size-4 shrink-0 text-[#7857f8]" />
              <div>
                <span className="font-medium text-[#1a1c1c]">Dates: </span>
                <span className="text-[#6E6E80]">{WEBINAR_CONFIG.dates}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="mt-0.5 size-4 shrink-0 text-[#7857f8]" />
              <div>
                <span className="font-medium text-[#1a1c1c]">Time: </span>
                <span className="text-[#6E6E80]">{WEBINAR_CONFIG.times}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Video className="mt-0.5 size-4 shrink-0 text-[#7857f8]" />
              <div>
                <span className="font-medium text-[#1a1c1c]">Location: </span>
                <span className="text-[#6E6E80]">{WEBINAR_CONFIG.venue}</span>
              </div>
            </div>
          </div>

          {/* Add to Calendar button */}
          <div className="mt-4 border-t border-[#E2E2E9]/80 pt-3">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#E2E2E9] bg-white py-2 text-xs font-medium text-[#1a1c1c] transition-colors hover:bg-neutral-50 sm:text-sm"
            >
              <CalendarPlus className="size-4 text-[#7857f8]" />
              <span>Add to Google Calendar</span>
            </a>
          </div>
        </div>

        {/* Complimentary Guide Download Block */}
        <div className="mt-5 rounded-xl border border-[#E2E2E9] bg-white p-4">
          <div className="flex items-center gap-3.5">
            <div className="relative aspect-[3/4] w-12 shrink-0 overflow-hidden rounded-md border border-[#E2E2E9] bg-[#120e29] shadow-xs">
              <Image
                src={WEBINAR_CONFIG.leadMagnet.coverImage}
                alt={WEBINAR_CONFIG.leadMagnet.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="min-w-0 flex-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7857f8]">
                Complimentary Guide
              </span>
              <h3 className="truncate text-sm font-semibold text-[#1a1c1c]">
                {WEBINAR_CONFIG.leadMagnet.title}
              </h3>
              <p className="truncate text-xs text-[#6E6E80]">
                Included free with your registration
              </p>
            </div>
          </div>

          <a
            href={WEBINAR_CONFIG.leadMagnet.downloadUrl}
            download="A-Beginners-Guide-To-Publishing.pdf"
            className="mt-3.5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#5f3add] py-2.5 text-xs font-medium text-white shadow-xs transition-colors hover:bg-[#7857f8] sm:text-sm"
          >
            <Download className="size-4" />
            <span>Download Guide (PDF)</span>
          </a>
        </div>

        {/* Footer Info & Back Link */}
        <div className="mt-6 text-center">
          <p className="flex items-center justify-center gap-1.5 text-xs text-[#6E6E80]">
            <Mail className="size-3.5" />
            <span>
              Can&apos;t find our email? Check your promotions or spam folder.
            </span>
          </p>

          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-medium text-[#6E6E80]">
            <Link
              href="/"
              className="flex items-center gap-1 transition-colors hover:text-[#1a1c1c]"
            >
              <ArrowLeft className="size-3.5" />
              <span>Back to Home</span>
            </Link>
            <span>•</span>
            <Link
              href="/webinar"
              className="transition-colors hover:text-[#1a1c1c]"
            >
              Masterclass Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
