import Link from "next/link";

interface GridWrapperProps {
  header: string;
  subtitle: string;
  description: string;
  link?: {
    text: string;
    url: string;
  };
}

export const GridWrapper = ({
  header,
  subtitle,
  description,
  link,
}: GridWrapperProps) => {
  return (
    <div className="grid gap-x-8 gap-y-6 md:grid-cols-5 lg:gap-x-10">
      <div className="col-span-2 space-y-2 md:space-y-3" data-aos="fade-right">
        <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
          {subtitle}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#040815] md:text-4xl">
          {header}
        </h2>
      </div>
      <div
        className="col-span-3 space-y-5"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
          {description}
        </p>
        {link && (
          <div className="flex justify-end">
            <Link
              href={link.url}
              className="text-secondary font-semibold underline transition-colors hover:text-[#7C5CFC]"
            >
              {link.text}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
