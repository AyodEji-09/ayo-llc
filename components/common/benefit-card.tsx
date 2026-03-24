import Image from "next/image";

interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon, title, description }: BenefitCardProps) => {
  return (
    <div className="flex w-full max-w-lg gap-3 sm:gap-6">
      <div className="bg-secondary flex size-12 shrink-0 items-center justify-center rounded-lg">
        <Image
          src={icon}
          alt="Benefit Card"
          width={24}
          height={24}
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight text-[#040815]">
          {title}
        </h3>
        <p className="text-primary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
