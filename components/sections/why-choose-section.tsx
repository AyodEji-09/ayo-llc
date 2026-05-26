import { BenefitCard } from "@/components/common/benefit-card";
import { benefits } from "@/data";

interface WhyChooseSectionProps {
  subtitle?: string;
  header?: string;
  description?: string | React.ReactNode;
}

export const WhyChooseSection = ({
  subtitle = "Why Choose Ayo LLC",
  header = "Easy, Simple, Affordable",
  description = (
    <>
      Choose Ayo LLC - where innovative technology meets exceptional solutions
      <br className="hidden md:block" /> {" "}
      for a smarter future.
    </>
  ),
}: WhyChooseSectionProps) => {
  return (
    <section>
      <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
        <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
          {subtitle}
        </p>
        <h2 className="mt-3 mb-3 text-3xl font-bold tracking-tight text-[#040815] md:text-4xl">
          {header}
        </h2>
        <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
          {description}
        </p>
      </div>

      <div className="mt-16 grid justify-items-center gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14">
        {benefits.map((benefits, idx) => (
          <div key={idx} data-aos="fade-up" data-aos-delay={idx * 120}>
            <BenefitCard {...benefits} />
          </div>
        ))}
      </div>
    </section>
  );
};
