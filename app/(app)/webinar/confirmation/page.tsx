"use client";

import Link from "next/link";
import Image from "next/image";
import { WEBINAR_CONFIG } from "@/config/webinar";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Video,
  Mail,
  ArrowRight,
  Download,
  Gift,
  CheckCircle2,
} from "lucide-react";

export default function WebinarConfirmationPage() {
  return (
    <div className="mx-auto flex min-h-[75vh] max-w-3xl flex-col justify-center space-y-8 px-4 py-16 text-center sm:px-6 lg:px-8">
      <div className="space-y-3">
        <div className="mx-auto flex items-center justify-center gap-2 text-sm font-semibold text-emerald-800">
          <CheckCircle2 className="size-4 text-emerald-600" />
          <span>Registration Confirmed</span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-[#040815] sm:text-4xl">
          You&apos;re Officially Registered
        </h1>
        <p className="text-primary mx-auto max-w-xl text-base sm:text-lg">
          Thank you for reserving your seat for{" "}
          <strong className="text-[#040815]">{WEBINAR_CONFIG.theme}</strong>. We
          have sent a confirmation email with your private access link.
        </p>
      </div>

      {/* Free Lead Magnet Download Bonus Card - Flattened without nested card boxes */}
      <div className="mx-auto w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 text-left shadow-xs">
        <div className="flex items-start gap-4">
          <div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-md border border-slate-300">
            <Image
              src={WEBINAR_CONFIG.leadMagnet.coverImage}
              alt={WEBINAR_CONFIG.leadMagnet.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-[#000061] flex items-center gap-1">
              <Gift className="size-3.5" />
              <span>Complimentary Resource</span>
            </p>
            <h3 className="text-base font-bold text-[#040815] leading-snug">
              {WEBINAR_CONFIG.leadMagnet.title}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your author blueprint roadmap is ready to download now.
            </p>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100">
          <a
            href={WEBINAR_CONFIG.leadMagnet.downloadUrl}
            download="Free-Author-Resource-AYO-LLC.pdf"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#000061] px-4 py-3 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[#000045]"
          >
            <Download className="size-4" />
            <span>Download Free Author Resource (PDF)</span>
          </a>
        </div>
      </div>

      {/* Details List */}
      <div className="mx-auto w-full max-w-md space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-6 text-left text-sm">
        <div className="flex items-center gap-3 text-[#040815]">
          <Calendar className="size-4 shrink-0 text-[#000061]" />
          <span>
            <strong>Dates:</strong> {WEBINAR_CONFIG.dates}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#040815]">
          <Clock className="size-4 shrink-0 text-[#000061]" />
          <span>
            <strong>Time:</strong> {WEBINAR_CONFIG.times}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#040815]">
          <Video className="size-4 shrink-0 text-[#000061]" />
          <span>
            <strong>Venue:</strong> {WEBINAR_CONFIG.venue}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#040815]">
          <Mail className="size-4 shrink-0 text-[#000061]" />
          <span>
            <strong>Private Access Link:</strong> Sent directly to your email inbox
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row">
        <Link href="/">
          <Button
            variant="outline"
            className="w-full border-slate-300 text-[#040815] hover:bg-slate-100 sm:w-auto"
          >
            Return to Home
          </Button>
        </Link>
        <Link href="/webinar">
          <Button className="w-full bg-[#000061] font-semibold text-white hover:bg-[#000045] sm:w-auto">
            <span>View Event Details</span>
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
