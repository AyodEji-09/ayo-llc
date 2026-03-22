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
    <div className="grid gap-x-6 gap-y-4 md:grid-cols-5">
      <div className="col-span-2 space-y-2">
        <p className="text-secondary font-semibold uppercase">{subtitle}</p>
        <h2 className="text-3xl font-bold text-[#040815] md:text-4xl">
          {header}
        </h2>
      </div>
      <div className="col-span-3 space-y-4">
        <p className="text-primary text-base leading-loose font-normal tracking-tight sm:text-lg">
          {description}
        </p>
        {link && (
          <div className="flex justify-end">
            <Link
              href={link.url}
              className="text-secondary font-semibold underline"
            >
              {link.text}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
