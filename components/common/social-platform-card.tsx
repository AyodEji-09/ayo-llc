import Image from "next/image";

interface SocialPlatformCardProps {
  icon: string;
  title: string;
  description: string;
}

export const SocialPlatformCard = ({
  icon,
  title,
  description,
}: SocialPlatformCardProps) => {
  return (
    <div className="group flex w-full max-w-lg cursor-pointer gap-3 sm:gap-6">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
        <Image
          src={icon}
          alt={title}
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-2 transition-transform duration-300 group-hover:translate-x-1">
        <h3 className="text-lg font-semibold tracking-tight text-[#040815]">
          {title}
        </h3>
        <p className="text-primary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
