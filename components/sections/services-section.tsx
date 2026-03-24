import { Card } from "@/components/common/card";
import { GridWrapper } from "@/components/common/grid-wrapper";
import { services } from "@/data";

interface ServicesSectionProps {
  subtitle?: string;
  header?: string;
  description?: string;
}

export const ServicesSection = ({
  subtitle = "What We Offer",
  header = "Lorem, Ipsum, Remsum",
  description = "Empowering businesses with cutting-edge tech solutions to drive innovation an Empowering businesses with cutting-edge tech.",
}: ServicesSectionProps) => {
  return (
    <section>
      <GridWrapper
        subtitle={subtitle}
        header={header}
        description={description}
      />

      <div className="mt-16 grid justify-items-center gap-x-8 gap-y-14 sm:mt-20 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
        {services.map((benefit, idx) => (
          <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <Card {...benefit} />
          </div>
        ))}
      </div>
    </section>
  );
};
