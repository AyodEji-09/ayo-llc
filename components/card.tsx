import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const Card = ({ imageUrl, title, description }: CardProps) => {
  return (
    <div className="max-w-sm">
      <div>
        <Image
          src={imageUrl}
          alt="Card Image"
          width={382}
          height={382}
          className="rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-[#040815]">{title}</h2>
        <p className="text-primary mt-2">{description}</p>
      </div>
    </div>
  );
};
