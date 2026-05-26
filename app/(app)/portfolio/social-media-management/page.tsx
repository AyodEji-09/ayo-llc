import Image from "next/image";
import Link from "next/link";
import { partners, socialMediaProjects } from "@/data";
import { SocialPlatformCard } from "@/components/common/social-platform-card";

const platforms = [
  {
    name: "Instagram",
    icon: "/icons/social/instagram.svg",
    description:
      "Visual storytelling, reels, and branded content that keeps the feed active and recognizable.",
  },
  {
    name: "Facebook",
    icon: "/icons/social/facebook.svg",
    description:
      "Community-focused posts, event promotion, and updates that help people stay connected.",
  },
  {
    name: "X",
    icon: "/icons/social/x.svg",
    description:
      "Quick updates and conversation-led content that keeps the brand part of the dialogue.",
  },
  {
    name: "YouTube",
    icon: "/icons/social/youtube.svg",
    description:
      "Long-form and short-form video that extends the story and builds trust over time.",
  },
  {
    name: "TikTok",
    icon: "/icons/social/tiktok.svg",
    description:
      "Fast, personality-led content created for discoverability and reach.",
  },
];

export default function SocialMediaManagementPage() {
  const project = socialMediaProjects[0];

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 pt-16 pb-28 sm:space-y-16 sm:px-6 sm:pt-20 lg:space-y-20 lg:px-8">
      <section className="mx-auto max-w-2xl text-center" data-aos="fade-up">
        <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
          SOCIAL MEDIA MANAGEMENT
        </p>
        <h1 className="my-3 text-3xl font-bold text-[#040815] md:text-4xl">
          {project.title}
        </h1>
        <p className="text-primary text-base font-normal sm:text-lg">
          We help brands build a consistent social presence that feels clear,
          current, and worth following.
        </p>
      </section>

      <section className="space-y-10" data-aos="fade-up">
        <div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#040815] sm:text-3xl">
            About Us
          </h2>
          <div className="mt-5 text-base leading-relaxed text-[#596780] sm:text-lg">
            {project.summary
              .trim()
              .split(/\n\s*\n/) // split on blank lines to preserve paragraphs
              .map((para, i) => (
                <p key={i} className="mt-4 first:mt-0">
                  {para}
                </p>
              ))}
          </div>
        </div>

        <div>
          <p className="text-secondary text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm">
            IN THE NUMBERS
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#040815] sm:text-3xl">
            Data speaks. Here are our top stats.
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="space-y-1 border-l-2 border-[#7C5CFC] pl-4"
              >
                <p className="text-sm text-[#596780]">{metric.label}</p>
                <p className="text-2xl font-bold text-[#040815]">
                  {metric.value}
                </p>
                {metric.delta && (
                  <p className="text-xs font-semibold text-[#0a7a38]">
                    {metric.delta}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-aos="fade-up">
        <h2 className="mb-6 text-2xl font-bold text-[#040815]">
          Accounts We Manage
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-between sm:gap-x-8 sm:gap-y-6">
          {partners.map((logo) => (
            <div key={logo} className="relative h-12 w-28 sm:h-14 sm:w-32">
              <Image
                src={logo}
                alt="Account logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      <section data-aos="fade-up">
        <h2 className="mb-6 text-2xl font-bold text-[#040815]">
          Where We Create Digital Experience
        </h2>
        <div className="mt-8 grid justify-items-center gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-14 lg:grid-cols-2">
          {platforms.map((platform, idx) => (
            <div
              key={platform.name}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <SocialPlatformCard
                icon={platform.icon}
                title={platform.name}
                description={platform.description}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="text-center" data-aos="fade-up">
        <Link
          href="/contact"
          className="bg-secondary hover:bg-secondary/80 inline-flex items-center rounded-sm px-6 py-3 text-sm font-semibold text-white transition-colors"
        >
          Let&apos;s Build Your Social Presence
        </Link>
      </section>
    </div>
  );
}
