import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type Testimonial } from "@/data";

export const ReviewCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const truncatedTestimonial =
    testimonial.testimonial.length > 160
      ? testimonial.testimonial.substring(0, 160) + "..."
      : testimonial.testimonial;

  return (
    <div className="flex h-full w-80 flex-col rounded-xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2">
      <h3 className="line-clamp-1 text-base font-semibold tracking-tight text-[#040815]">
        {testimonial.service}
      </h3>

      <div className="mt-3 grow text-sm leading-relaxed text-[#596780]">
        {truncatedTestimonial}
        {testimonial.qa && testimonial.qa.length > 0 && (
          <Link
            href={`/reviews/${encodeURIComponent(testimonial.name.toLowerCase().replace(/\s+/g, "-"))}`}
            className="text-secondary ml-1 inline-block cursor-pointer font-medium hover:underline"
          >
            Read more
          </Link>
        )}
      </div>

      <div className="my-6 h-px w-full bg-gray-200" />

      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12 rounded-lg border border-gray-100">
          {testimonial.avatar && (
            <AvatarImage
              src={testimonial.avatar}
              alt={testimonial.name}
              className="object-cover"
            />
          )}
          <AvatarFallback className="bg-secondary/10 text-secondary rounded-lg text-xl font-bold">
            {testimonial.name.charAt(0)}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 overflow-hidden">
          <p
            className="truncate text-sm font-semibold text-[#040815]"
            title={testimonial.name}
          >
            {testimonial.name}
          </p>
          <p
            className="line-clamp-2 text-xs text-[#596780]"
            title={testimonial.role}
          >
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
};
