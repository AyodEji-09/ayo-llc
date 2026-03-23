import { AppCarousel } from "@/components/app-carousel";
import { BenefitCard } from "@/components/benefit-card";
import { GridWrapper } from "@/components/grid-wrapper";
import { benefits } from "@/data";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-24 px-4 pt-8 pb-28 sm:space-y-28 sm:px-6 sm:pt-12 lg:space-y-32 lg:px-8">
      {/* about  */}
      <div>
        <GridWrapper
          header="About AYO LLC"
          subtitle="LOREM IPSUM DOLOR"
          description="Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed placerat eget lacus."
        />

        <p className="text-primary mt-6 text-base leading-relaxed font-normal sm:text-lg">
          Lorem ipsum dolor sit amet consectetur. Viverra orci auctor vulputate
          duis enim imperdiet viverra amet. Sem facilisis mattis mattis vitae
          sed id tortor vel. Eget vulputate nibh sagittis nisl condimentum sed
          placerat eget lacus. Aenean neque sagittis aliquam tellus neque
          est.Lorem ipsum dolor sit amet consectetur. Viverra orci auctor
          vulputate duis enim imperdiet viverra amet. Sem facilisis mattis
          mattis vitae sed id tortor vel. Eget vulputate nibh sagittis nisl
          condimentum sed placerat eget lacus. Aenean neque sagittis aliquam
          tellus neque est.Lorem ipsum dolor sit amet consectetur. Viverra orci
          auctor vulputate duis enim imperdiet viverra amet. Sem facilisis
          mattis mattis vitae sed id tortor vel
        </p>
      </div>

      {/* why choose ayo llc */}
      <section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
            Why Choose Ayo LLC
          </p>
          <h2 className="mt-3 mb-3 text-3xl font-bold tracking-tight text-[#040815] md:text-4xl">
            Easy, Simple, Affordable
          </h2>
          <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
            Choose Ayo LLC - where innovative technology meets exceptional
            solutions <br />
            for a smarter future.
          </p>
        </div>

        <div className="mt-16 grid justify-items-center gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14">
          {benefits.map((benefits, idx) => (
            <BenefitCard key={idx} {...benefits} />
          ))}
        </div>
      </section>

      {/* reviews */}
      <section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
            WHAT OUR CLIENTS SAYS
          </p>
          <h2 className="mt-3 mb-3 text-3xl font-bold tracking-tight text-[#040815] md:text-4xl">
            Our Clients Kind Words
          </h2>
          <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
            Choose Ayo LLC - where innovative technology meets <br />
            exceptional
          </p>
        </div>

        <div className="mt-16 sm:mt-20">
          <AppCarousel type="review" />
        </div>
      </section>
    </div>
  );
}
