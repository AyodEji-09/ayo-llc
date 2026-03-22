import { NAVIGATION_LINKS } from "@/data";
import { Brand } from "./brand";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="text-primary border-t border-[#0000614D] bg-white pt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-9">
          {/* Brand */}
          <div className="space-y-3.5 sm:col-span-2 lg:col-span-3">
            <div>
              <Brand />
            </div>
            <p className="max-w-lg text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Lectus facilisis pharetra
              amet quam a libero sit id. Justo ullamcorper tellus sed velit
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3.5 lg:col-span-2">
            <h1 className="text-lg font-medium text-[#1A202C]">Quick Links</h1>
            <ul className="space-y-3 text-sm">
              {NAVIGATION_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Times */}
          <div className="space-y-3.5 lg:col-span-2">
            <h1 className="text-lg font-medium text-[#1A202C]">Our Services</h1>
            <ul className="space-y-3 text-sm">
              {[
                "Social Media Management",
                "Website Design & Management",
                "Graphic Designing",
                "Book Publishing",
                "Illustration & Animation",
                "Video Works",
              ].map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3.5 lg:col-span-2">
            <h1 className="text-lg font-medium text-[#010000]">Follow Us</h1>
            <ul className="space-y-3 text-sm">
              {["X", "Facebook", "Instagram", "LinkedIn"].map((social, idx) => (
                <li key={idx}>{social}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#0000614D] py-6 text-center">
          <p className="text-center text-sm">
            © {new Date().getFullYear()} Copyright AYO LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
