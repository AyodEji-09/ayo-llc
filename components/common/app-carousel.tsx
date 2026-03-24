"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BookCard } from "./book-card";
import { ReviewCard } from "./review-card";

export const AppCarousel = ({ type = "book" }: { type: "book" | "review" }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 md:gap-8">
          {[...Array(6)].map((_, idx) =>
            type === "book" ? (
              <div key={idx} className="max-w-65 min-w-65">
                <BookCard />
              </div>
            ) : (
              <div key={idx}>
                <ReviewCard />
              </div>
            ),
          )}
        </div>
      </div>

      {type === "book" ? (
        <>
          <button
            onClick={scrollPrev}
            className="absolute top-30 -left-5 -translate-y-1/2 rounded-full bg-neutral-100 p-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute top-30 -right-5 -translate-y-1/2 rounded-full bg-neutral-100 p-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      ) : (
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={scrollPrev}
            className="rounded-full border border-[#00006180] p-2 text-[#00006180] transition hover:bg-neutral-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="bg-secondary hover:bg-secondary/80 rounded-full border p-2 text-white transition"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};
