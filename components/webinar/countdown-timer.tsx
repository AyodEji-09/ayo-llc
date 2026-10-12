"use client";

import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

interface CountdownTimerProps {
  targetDateIso: string;
  className?: string;
  label?: string;
  dateLabel?: string;
  showTitle?: boolean;
}

function calculateTimeLeft(targetIso: string): TimeLeft {
  const difference = new Date(targetIso).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isExpired: false,
  };
}

export function CountdownTimer({
  targetDateIso,
  className = "",
  label,
  dateLabel,
  showTitle = false,
}: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const initTimer = setTimeout(() => {
      setMounted(true);
      setTimeLeft(calculateTimeLeft(targetDateIso));
    }, 0);

    const intervalTimer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateIso));
    }, 1000);

    return () => {
      clearTimeout(initTimer);
      clearInterval(intervalTimer);
    };
  }, [targetDateIso]);

  if (mounted && timeLeft.isExpired) {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-emerald-800 ${className}`}
      >
        <span className="size-2 rounded-full bg-emerald-600" />
        <span className="text-xs font-semibold sm:text-sm">
          Webinar Is Currently Live. Check your email for room access.
        </span>
      </div>
    );
  }

  const units = [
    { label: "DAYS", value: mounted ? timeLeft.days : 0 },
    { label: "HOURS", value: mounted ? timeLeft.hours : 0 },
    { label: "MINS", value: mounted ? timeLeft.minutes : 0 },
    { label: "SECS", value: mounted ? timeLeft.seconds : 0 },
  ];

  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-2.5 shadow-xs sm:p-3 ${className}`}
    >
      {showTitle && label && (
        <div className="mb-2.5 flex items-center justify-between gap-2 border-b border-slate-100 pb-2">
          <span className="text-xs font-bold tracking-wider text-[#000061] uppercase">
            {label}
          </span>
          {dateLabel && (
            <span className="text-[11px] font-medium text-slate-500">
              {dateLabel}
            </span>
          )}
        </div>
      )}

      <div className="grid grid-cols-4 gap-1.5 text-center sm:gap-2">
        {units.map((unit, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-lg border border-slate-200/80 bg-slate-50 px-1 py-1.5 sm:py-2"
          >
            <span className="text-base font-bold tracking-tight text-[#040815] sm:text-lg md:text-xl">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-0.5 text-[9px] font-semibold tracking-wider text-slate-500 sm:text-[10px]">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
