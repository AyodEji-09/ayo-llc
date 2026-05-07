import CustomForm from "@/components/common/custom-form";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with AYO LLC. Contact us to discuss your project, request a quote, or learn more about our creative services. We're here to help bring your vision to life.",
};

export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-16 pb-28 sm:px-6 sm:pt-20 lg:px-8">
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-2 lg:gap-x-10">
        <div data-aos="fade-right">
          <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
            LET’S BRING YOUR IDEA TO LIFE
          </p>
          <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-[#040815] md:text-4xl">
            Contact Us
          </h2>
          <p className="text-primary max-w-md text-base leading-relaxed font-normal sm:text-lg">
            We’re excited to hear about your project. Reach out to us and let’s
            discuss how we can help bring your vision to reality with creative
            excellence.
          </p>

          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-x-4 transition-transform duration-200 hover:translate-x-1">
              <Image src="/icons/mail.svg" alt="mail" width={24} height={24} />
              <p className="text-base sm:text-lg">info@ayo-llc.com</p>
            </div>
            <div className="flex items-center gap-x-4 transition-transform duration-200 hover:translate-x-1">
              <Image
                src="/icons/phone.svg"
                alt="phone"
                width={24}
                height={24}
              />
              <p className="text-base sm:text-lg">+18586211597</p>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="200">
          <CustomForm />
        </div>
      </div>
    </div>
  );
}
