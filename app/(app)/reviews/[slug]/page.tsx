import Image from "next/image";

export default function Review() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-16 pb-28 sm:px-6 sm:pt-20 lg:px-8">
      <div>
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
            What out clients say
          </p>
          <h2 className="mt-3 mb-3 text-3xl font-bold tracking-tight text-[#040815] md:text-4xl">
            Our Clients Kind Words
          </h2>
          <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
            Choose Ayo LLC - where innovative technology meets exceptional
          </p>
        </div>
        <div
          className="mt-16 rounded-xl border border-gray-200 bg-white p-6 sm:mt-20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex items-center gap-3">
            <div className="relative size-16 overflow-hidden rounded-full transition-transform duration-300">
              <Image
                src="/images/avatar.png"
                alt="Author"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-lg font-semibold text-[#040815]">
                Lorem Ipsum
              </p>
              <p className="text-sm text-[#596780]">Lorem ipsum dolor sit</p>
            </div>
          </div>

          <div className="my-6 h-px w-full bg-gray-200" />

          <div>
            <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
              Lorem ipsum dolor sit amet consectetur. Lectus facilisis pharetra
              amet quam a libero sit id. Justo ullamcorper tellus sed velit
              curabitur in. Amet etiam faucibus sollicitudin tellus.
            </p>
            <p className="text-primary my-6 text-base leading-relaxed font-normal sm:text-lg">
              Lorem ipsum dolor sit amet consectetur. Lectus facilisis pharetra
              amet quam a libero sit id. Justo ullamcorper tellus sed velit
              curabitur in. Amet etiam faucibus sollicitudin tellus.
            </p>
            <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
              Lorem ipsum dolor sit amet consectetur. Lectus facilisis pharetra
              amet quam a libero sit id. Justo ullamcorper tellus sed velit
              curabitur in. Amet etiam faucibus sollicitudin tellus.
            </p>
            <p className="text-primary my-6 text-base leading-relaxed font-normal sm:text-lg">
              Lorem ipsum dolor sit amet consectetur. Lectus facilisis pharetra
              amet quam a libero sit id. Justo ullamcorper tellus sed velit
              curabitur in. Amet etiam faucibus sollicitudin tellus.
            </p>
            <p className="text-primary text-base leading-relaxed font-normal sm:text-lg">
              Lorem ipsum dolor sit amet consectetur. Lectus facilisis pharetra
              amet quam a libero sit id. Justo ullamcorper tellus sed velit
              curabitur in. Amet etiam faucibus sollicitudin tellus.
            </p>
            <p className="text-primary my-6 text-base leading-relaxed font-normal sm:text-lg">
              Lorem ipsum dolor sit amet consectetur. Lectus facilisis pharetra
              amet quam a libero sit id. Justo ullamcorper tellus sed velit
              curabitur in. Amet etiam faucibus sollicitudin tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
