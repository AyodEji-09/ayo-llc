"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WEBINAR_CONFIG } from "@/config/webinar";
import { X, ArrowRight } from "lucide-react";

export const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("webinar_bar_dismissed");
    if (!dismissed && WEBINAR_CONFIG.isActive) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("webinar_bar_dismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible || !WEBINAR_CONFIG.isActive) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-[#000061] via-[#1e1b4b] to-[#7C5CFC] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center justify-center gap-2 text-xs font-medium sm:gap-3 sm:text-sm">
          <span className="hidden text-[11px] font-semibold tracking-wider text-white/90 uppercase sm:inline">
            Coming Up:
          </span>
          <span className="truncate">
            {WEBINAR_CONFIG.theme} — {WEBINAR_CONFIG.dates}
          </span>

          <Link
            href="/webinar"
            className="inline-flex items-center gap-1 font-semibold text-white underline underline-offset-4 transition-colors hover:text-white/80"
          >
            <span>Register Now</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </div>

        <button
          onClick={handleDismiss}
          className="ml-2 rounded-md p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
          aria-label="Close notification"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  );
};
