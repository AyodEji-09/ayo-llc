import { Card } from "@/components/card";
import { GridWrapper } from "@/components/grid-wrapper";
import { services } from "@/data";

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl space-y-24 px-4 pt-8 pb-28 sm:space-y-28 sm:px-6 sm:pt-12 lg:space-y-32 lg:px-8">
      <section>
        <GridWrapper
          subtitle="What We Offer"
          header="Lorem, Ipsum, Remsum"
          description="
              Empowering businesses with cutting-edge tech solutions to drive
              innovation an Empowering businesses with cutting-edge tech."
        />

        <div className="mt-16 grid justify-items-center gap-x-8 gap-y-14 sm:mt-20 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          {services.map((benefit, idx) => (
            <Card key={idx} {...benefit} />
          ))}
        </div>
      </section>
    </div>
  );
}
