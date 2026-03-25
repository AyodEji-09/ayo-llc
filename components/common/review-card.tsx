import Image from "next/image";
import Link from "next/link";

export const ReviewCard = () => {
  return (
    <div className="w-80 cursor-pointer rounded-xl border border-gray-200 bg-white p-6 transition-all duration-500 hover:-translate-y-2">
      <h3 className="line-clamp-1 text-base font-semibold tracking-tight text-[#040815]">
        Lorem ipsum dolor
      </h3>

      <p className="mt-3 line-clamp-5 text-sm leading-relaxed text-[#596780]">
        Lorem ipsum dolor sit amet consectetur. Lectus facilisis pharetra amet
        quam a libero sit id. Justo ullamcorper tellus sed velit curabitur in.
        Amet etiam faucibus sollicitudin tekdso...
        <Link
          href="/reviews/lorem"
          className="text-secondary ml-1 cursor-pointer font-medium"
        >
          Read more
        </Link>
      </p>

      <div className="my-6 h-px w-full bg-gray-200" />

      <div className="flex items-center gap-3">
        <div className="relative h-12 w-12 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-110">
          <Image
            src="/images/avatar.png"
            alt="Author"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold text-[#040815]">Lorem Ipsum</p>
          <p className="text-xs text-[#596780]">Lorem ipsum dolor sit</p>
        </div>
      </div>
    </div>
  );
};
