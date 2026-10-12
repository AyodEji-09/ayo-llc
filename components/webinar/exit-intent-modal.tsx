"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { WEBINAR_CONFIG } from "@/config/webinar";

interface ExitIntentModalProps {
  onClaim?: () => void;
}

export function ExitIntentModal({ onClaim }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Exit-intent modal is strictly for desktop exit intent, disabled on mobile
    if (typeof window === "undefined" || window.innerWidth < 768) return;

    const isDismissed = sessionStorage.getItem("webinar_exit_intent_dismissed");
    if (isDismissed) return;

    const triggerModal = () => {
      const alreadyTriggered = sessionStorage.getItem(
        "webinar_exit_intent_dismissed",
      );
      if (!alreadyTriggered) {
        setIsOpen(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerModal();
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("webinar_exit_intent_dismissed", "true");
    setIsOpen(false);
  };

  const handleAction = () => {
    handleClose();
    if (onClaim) {
      onClaim();
    } else {
      const registerSection = document.getElementById("register");
      if (registerSection) {
        registerSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
      className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 duration-200 backdrop-blur-xs"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[#E2E2E9] bg-white p-6 shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 rounded-full p-2 text-[#6E6E80] transition-colors hover:bg-neutral-100 hover:text-[#1a1c1c]"
          aria-label="Close modal"
        >
          <X className="size-5" />
        </button>

        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-8">
          {/* Left Column: Book Image Mockup */}
          <div className="flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-xl border border-[#E2E2E9] bg-[#120e29] shadow-lg">
              <Image
                src={WEBINAR_CONFIG.heroImage}
                alt={WEBINAR_CONFIG.theme}
                fill
                sizes="(max-width: 768px) 220px, 240px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Copy & CTA */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
            <h3
              id="exit-modal-title"
              className="text-2xl font-bold tracking-tight text-[#1a1c1c] sm:text-3xl"
            >
              Leaving so soon?
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#6E6E80] sm:text-base">
              Register now to get access to the live masterclass and your exclusive book publishing blueprint.
            </p>

            <button
              onClick={handleAction}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#5f3add] px-6 py-3.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-[#7857f8] sm:w-auto sm:text-base"
            >
              <span>Register now</span>
              <ArrowRight className="size-4" />
            </button>

            <button
              onClick={handleClose}
              className="mt-3 text-xs text-[#6E6E80] transition-colors hover:text-[#1a1c1c]"
            >
              No thanks, continue browsing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
