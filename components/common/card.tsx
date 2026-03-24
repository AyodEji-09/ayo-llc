import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const Card = ({ imageUrl, title, description }: CardProps) => {
  return (
    <div className="group w-full max-w-sm cursor-pointer">
      <div className="overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105">
        <Image
          src={imageUrl}
          alt="Card Image"
          width={382}
          height={382}
          className="rounded-lg"
        />
      </div>
      <div className="mt-5 space-y-2 transition-transform duration-500 group-hover:-translate-y-1">
        <h2 className="text-xl font-semibold tracking-tight text-[#040815]">
          {title}
        </h2>
        <p className="text-primary leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
