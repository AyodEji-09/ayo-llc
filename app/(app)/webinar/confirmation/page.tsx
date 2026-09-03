"use client";

import Link from "next/link";
import { WEBINAR_CONFIG } from "@/config/webinar";
import { Button } from "@/components/ui/button";
import {
  // CheckCircle,
  Calendar,
  Clock,
  Video,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function WebinarConfirmationPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center space-y-8 px-4 py-16 text-center sm:px-6 lg:px-8">
      {/* <div className="mx-auto size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center"> */}
      {/*   <CheckCircle className="size-8" /> */}
      {/* </div> */}

      <div className="space-y-3">
        <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
          REGISTRATION CONFIRMED
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-[#040815] sm:text-4xl">
          You&apos;re Officially Registered!
        </h1>
        <p className="text-primary mx-auto max-w-xl text-base sm:text-lg">
          Thank you for registering for{" "}
          <strong className="text-[#040815]">{WEBINAR_CONFIG.theme}</strong>. We
          have sent a confirmation email with your private access link.
        </p>
      </div>

      {/* Details List */}
      <div className="mx-auto w-full max-w-md space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-6 text-left text-sm">
        <div className="flex items-center gap-3 text-[#040815]">
          <Calendar className="size-4 text-[#000061]" />
          <span>
            <strong>Dates:</strong> {WEBINAR_CONFIG.dates}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#040815]">
          <Clock className="size-4 text-[#000061]" />
          <span>
            <strong>Time:</strong> {WEBINAR_CONFIG.times}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#040815]">
          <Video className="size-4 text-[#000061]" />
          <span>
            <strong>Venue:</strong> {WEBINAR_CONFIG.venue}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[#040815]">
          <Mail className="size-4 text-[#000061]" />
          <span>
            <strong>Private Access Link:</strong> Sent to your email inbox
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
