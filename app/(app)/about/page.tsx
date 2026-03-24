import { GridWrapper } from "@/components/common/grid-wrapper";
import { WhyChooseSection } from "@/components/sections/why-choose-section";
import { ReviewsSection } from "@/components/sections/reviews-section";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl space-y-24 px-4 pt-16 pb-28 sm:space-y-28 sm:px-6 sm:pt-20 lg:space-y-32 lg:px-8">
      {/* about  */}
      <section>
        <GridWrapper
          header="About AYO LLC"
          subtitle="LOREM IPSUM DOLOR"
          description="Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus."
        />

        <div data-aos="fade-up" data-aos-delay="300">
          <p className="text-primary mt-6 text-base leading-relaxed font-normal sm:text-lg">
            Lorem ipsum dolor sit amet consectetur. Viverra orci auctor
            vulputate duis enim imperdiet viverra amet. Sem facilisis mattis
            mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl
            condimentum sed placerat eget lacus. Aenean neque sagittis aliquam
            tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra
            orci auctor vulputate duis enim imperdiet viverra amet. Sem
            facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh
            sagittis nisl condimentum sed placerat eget lacus. Aenean neque
            sagittis aliquam tellus neque est.Lorem ipsum dolor sit amet
            consectetur. Viverra orci auctor vulputate duis enim imperdiet
            viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel
          </p>
        </div>
      </section>

      {/* why choose ayo llc */}
      <WhyChooseSection />

      {/* reviews */}
      <ReviewsSection />
    </div>
  );
}
