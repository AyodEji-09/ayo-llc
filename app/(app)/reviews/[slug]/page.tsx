import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/data";

export default async function Review({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const testimonial = testimonials.find(
    (t) =>
      encodeURIComponent(t.name.toLowerCase().replace(/\s+/g, "-")) === slug,
  );

  if (!testimonial) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pt-16 pb-28 sm:px-6 sm:pt-20 lg:px-8">
      <div>
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
            What our clients say
          </p>
          <h2 className="mt-3 mb-3 text-3xl font-bold tracking-tight text-[#040815] md:text-4xl">
            Our Clients Kind Words
          </h2>
          <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
            Choose Ayo LLC - where innovative technology meets exceptional
            results
          </p>
        </div>
        <div
          className="mx-auto mt-16 max-w-5xl rounded-xl border border-gray-200 bg-white p-6 sm:mt-20 sm:p-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border border-gray-100">
              {testimonial?.avatar && (
                <AvatarImage
                  src={testimonial?.avatar}
                  alt={testimonial.name}
                  className="object-cover"
                />
              )}
              <AvatarFallback className="bg-secondary/10 text-secondary text-xl font-bold">
                {testimonial.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div>
              <p className="text-lg font-semibold text-[#040815] sm:text-xl">
                {testimonial.name}
              </p>
              <p className="text-sm text-[#596780] sm:text-base">
                {testimonial.role}
              </p>
            </div>
          </div>

          <div className="my-8 h-px w-full bg-gray-200" />

          <div className="space-y-6">
            <p className="text-base leading-relaxed font-medium text-[#596780] italic sm:text-lg md:text-xl">
              "{testimonial.testimonial}"
            </p>

            {testimonial.qa && testimonial.qa.length > 0 && (
              <div className="mt-10 space-y-8">
                <h3 className="text-lg font-bold text-[#040815] sm:text-xl">
                  Q&A
                </h3>
                {testimonial.qa.map((qaItem, idx) => (
                  <div key={idx} className="space-y-2">
                    <p className="text-sm font-semibold text-[#4D525B] sm:text-base">
                      {qaItem.question}
                    </p>
                    <p className="text-sm leading-relaxed text-[#596780] sm:text-base">
                      {qaItem.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
