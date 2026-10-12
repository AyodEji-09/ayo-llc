"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { BookCard } from "./book-card";
import { ReviewCard } from "./review-card";
import { testimonials, books } from "@/data";

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
      <div className="overflow-hidden py-4" ref={emblaRef}>
        <div className="flex items-stretch gap-6 md:gap-8">
          {type === "book"
            ? books.map((book, idx) => (
                <div key={idx} className="w-[220px] shrink-0 sm:w-[260px]">
                  <BookCard book={book} />
                </div>
              ))
            : testimonials.map((testimonial, idx) => (
                <div key={idx} className="flex h-auto shrink-0">
                  <ReviewCard testimonial={testimonial} />
                </div>
              ))}
        </div>
      </div>

      {type === "book" ? (
        <>
          <button
            onClick={scrollPrev}
            aria-label="Previous book"
            className="absolute top-1/2 -left-3 hidden -translate-y-1/2 cursor-pointer rounded-full bg-neutral-100 p-2 shadow-sm transition hover:bg-neutral-200 sm:block md:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            aria-label="Next book"
            className="absolute top-1/2 -right-3 hidden -translate-y-1/2 cursor-pointer rounded-full bg-neutral-100 p-2 shadow-sm transition hover:bg-neutral-200 sm:block md:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Mobile navigation controls below the carousel */}
          <div className="mt-6 flex justify-center gap-4 sm:hidden">
            <button
              onClick={scrollPrev}
              aria-label="Previous book"
              className="cursor-pointer rounded-full border border-[#00006180] p-2 text-[#00006180] transition hover:bg-neutral-100"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next book"
              className="bg-secondary hover:bg-secondary/80 cursor-pointer rounded-full border p-2 text-white transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </>
      ) : (
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={scrollPrev}
            className="cursor-pointer rounded-full border border-[#00006180] p-2 text-[#00006180] transition hover:bg-neutral-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="bg-secondary hover:bg-secondary/80 cursor-pointer rounded-full border p-2 text-white transition"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};
