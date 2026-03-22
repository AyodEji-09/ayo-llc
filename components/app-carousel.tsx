"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCallback } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

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
              <div key={idx} className="min-w-65">
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
            className="rounded-full border p-2 transition hover:bg-neutral-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>

          <button
            onClick={scrollNext}
            className="rounded-full border p-2 transition hover:bg-neutral-100"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
};

const BookCard = () => {
  return (
    <div className="w-full">
      <div className="relative h-60 w-full overflow-hidden rounded-xl">
        <Image
          src="/images/book-sample.png"
          alt={"Book"}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-3 py-4">
        <p className="text-sm leading-snug font-medium text-[#040815] sm:text-base">
          Writing and Self Publishing
        </p>
        <Button className="bg-secondary h-auto w-full rounded-md px-4 py-2.5 text-sm text-white">
          Preview
        </Button>
      </div>
    </div>
  );
};

const ReviewCard = () => {
  return (
    <div className="w-80 rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="line-clamp-1 text-base font-semibold tracking-tight text-[#040815]">
        Lorem ipsum dolor
      </h3>

      <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-[#596780]">
        Lorem ipsum dolor sit amet consectetur. Lectus facilisis pharetra amet
        quam a libero sit id. Justo ullamcorper tellus sed velit curabitur in.
        Amet etiam faucibus sollicitudin tekdso...
        <span className="text-secondary ml-1 cursor-pointer font-medium">
          Read more
        </span>
      </p>

      <div className="my-6 h-px w-full bg-gray-200" />

      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-lg">
          <Image
            src="/images/avatar.png"
            alt="Author"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-[#040815]">Lorem Ipsum</p>
          <p className="text-xs text-[#596780]">Lorem ipsum dolor sit</p>
        </div>
      </div>
    </div>
  );
};
