import { NAVIGATION_LINKS, socials } from "@/data";
import Link from "next/link";
import { Brand } from "../common/brand";

export const Footer = () => {
  return (
    <footer className="text-primary border-t border-[#0000614D] bg-white pt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-10 lg:grid-cols-9">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-3">
            <div>
              <Brand logoBlue />
            </div>
            <p className="max-w-lg text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus facilisis pharetra
              amet quam a libero sit id. Justo ullamcorper tellus sed velit
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:col-span-2">
            <h1 className="text-lg font-medium tracking-tight text-[#1A202C]">
              Quick Links
            </h1>
            <ul className="space-y-2.5 text-sm leading-relaxed sm:space-y-3">
              {NAVIGATION_LINKS.map((link, idx) => (
                <li
                  key={idx}
                  className="transition-transform duration-200 hover:translate-x-1"
                >
                  <Link
                    href={link.url}
                    className="transition-colors duration-200 hover:text-[#7C5CFC]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 lg:col-span-2">
            <h1 className="text-lg font-medium tracking-tight text-[#1A202C]">
              Our Services
            </h1>
            <ul className="space-y-2.5 text-sm leading-relaxed sm:space-y-3">
              {[
                "Social Media Management",
                "Website Design & Management",
                "Graphic Designing",
                "Book Publishing",
                "Illustration & Animation",
                "Video Works",
              ].map((service, idx) => (
                <li
                  key={idx}
                  className="transition-transform duration-200 hover:translate-x-1"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4 lg:col-span-2">
            <h1 className="text-lg font-medium tracking-tight text-[#010000]">
              Follow Us
            </h1>
            <ul className="space-y-2.5 text-sm leading-relaxed sm:space-y-3">
              {socials.map((social, idx) => (
                <li
                  key={idx}
                  className="hover:text-secondary transition-transform duration-200 hover:translate-x-1"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-[#0000614D] py-7 text-center">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Copyright AYO LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
