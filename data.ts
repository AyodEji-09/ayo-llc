export const NAVIGATION_LINKS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Our Services",
    url: "/services",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const partners = [
  "/images/GFGH1.png",
  "/images/ARISEII.png",
  "/images/_PGC.png",
  "/images/WONDERKIDDIESHUBLogoII.png",
  "/images/ZIONCOVENANTMINISTRYLOGOicon.png",
  "/images/REVIVALCENTERLOGO1.png",
];

export const services = [
  {
    imageUrl: "/images/social-media.png",
    slug: "social-media-management",
    title: "Social Media Management",
    description:
      "End-to-end management of your social platforms, from content creation and scheduling to community engagement and performance analytics.",
  },
  {
    imageUrl: "/images/web-design.png",
    slug: "web-design-management",
    title: "Web Design & Management",
    description:
      "Beautiful, responsive, and high-converting websites that effectively represent your brand and deliver exceptional user experiences.",
  },
  {
    imageUrl: "/images/graphics.png",
    slug: "graphics-design",
    title: "Graphics Design",
    description:
      "Eye-catching logos, branding materials, marketing collateral, and visual assets that communicate your message powerfully.",
  },
  {
    imageUrl: "/images/book.png",
    slug: "book-publishing",
    title: "Book Publishing",
    description:
      "Professional support for authors, from manuscript editing and formatting to cover design, publishing, and distribution.",
  },
  {
    imageUrl: "/images/illustration.png",
    slug: "illustration-animation",
    title: "Illustration & Animation",
    description:
      "Custom illustrations and motion graphics that make your stories memorable and engaging.",
  },
  {
    imageUrl: "/images/video.png",
    slug: "video-works",
    title: "Video Works",
    description:
      "High-quality video content including promotional videos, brand stories, animations, and social media reels.",
  },
];

export const benefits = [
  {
    icon: "/icons/star.svg",
    title: "Proven Expertise",
    description:
      "With over five years of experience, we've built a reputation for delivering excellence across multiple creative domains.",
  },
  {
    icon: "/icons/star2.svg",
    title: "Creative Excellence",
    description:
      "Our team of talented professionals brings creativity, innovation, and precision to every project.",
  },
  {
    icon: "/icons/target.svg",
    title: "Tailored Solutions",
    description:
      "We take the time to understand your needs and craft bespoke solutions that align with your goals.",
  },
  {
    icon: "/icons/head-love.svg",
    title: "Client-Centric Approach",
    description:
      "Your satisfaction is our priority. We are committed to building lasting partnerships with our clients.",
  },
];

export const socials = [
  { name: "X", href: "#" },
  {
    name: "Facebook",
    href: "https://www.facebook.com/share/18TYHmLLEC/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/theayollc.company?igsh=aGxraDF5YTU5eXds",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/ayo-llc/",
  },
];

export interface Book {
  title: string;
  coverImage: string;
}

export const books: Book[] = [
  {
    title: "A Life Redeemed",
    coverImage: "/images/a-life-redeemed.jpg",
  },
  {
    title: "HUG",
    coverImage: "/images/hug.jpg",
  },
  {
    title: "Jesus Handmaiden Diary",
    coverImage: "/images/jesus-handmaiden-diary.jpg",
  },
  {
    title: "Unleashing Your Full Potentials",
    coverImage: "/images/unleashing-your-full-potentials.jpg",
  },
  {
    title: "Not Alone",
    coverImage: "/images/not-alone.jpg",
  },
  {
    title: "No Write Off",
    coverImage: "/images/no-write-off.jpg",
  },
  {
    title: "Tongues Of Fire",
    coverImage: "/images/tongues-of-fire.jpg",
  },
  {
    title: "From Pain to Promise",
    coverImage: "/images/from-pain-to-promise.jpg",
  },
];

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  category: string;
}

export const webProjects: Project[] = [
  {
    title: "City of David Calgary",
    description:
      "A highly responsive digital platform for RCCG City of David Calgary, hosting sermon media and community resources.",
    imageUrl: "/images/cityofdavid.png",
    link: "https://rccgcityofdavidcalgary.com",
    category: "Church / Ministry",
  },
  {
    title: "Wonder Kiddies Hub",
    description:
      "An engaging website featuring children’s books and faith-based learning resources that inspire creativity and confidence.",
    imageUrl: "/images/wonderkiddiehub.png",
    link: "https://wonderkiddiehub.com",
    category: "Children's Education",
  },
  {
    title: "Dola Nancy Bankole",
    description:
      "A compassionate digital portal showcasing Counseling services, Parenting guides, and book publications.",
    imageUrl: "/images/dolanancybankole.png",
    link: "https://dolanancybankole.com",
    category: "Portfolio",
  },
  {
    title: "Iyin Ojekunle",
    description:
      "The official blog and personal hub for public health advocate and speaker Iyin Ojekunle, showcasing her missions and advocacy work.",
    imageUrl: "/images/iyinojekunle.png",
    link: "https://iyinojekunle.com",
    category: "Portfolio",
  },
  {
    title: "Arise Church Riverside",
    description:
      "A modern, engaging website built for Arise Church Riverside to connect their congregation and stream services.",
    imageUrl: "/images/arisechurch.png",
    link: "https://arisechurchriverside.org",
    category: "Church / Ministry",
  },
  {
    title: "RCCG Restoration Arena",
    description:
      "An intuitive digital hub for RCCG Restoration Arena featuring sermon streams and interactive ministry calendars.",
    imageUrl: "/images/restorationarena.png",
    link: "https://rccgrestorationarena.org",
    category: "Church / Ministry",
  },
];

export interface SocialMetric {
  label: string;
  value: string;
  delta?: string;
}

export interface SocialMediaProject {
  slug: string;
  title: string;
  summary: string;
  thumbnail: string;
  platforms: string[];
  metrics: SocialMetric[];
}

export const socialMediaProjects: SocialMediaProject[] = [
  {
    slug: "social-media-management",
    title: "Social Media Management",
    summary: `
    We are a creative and strategy-driven social media management department focused on helping brands
    grow through impactful storytelling, engaging content, and intentional digital presence. 

    With experience managing 20+ social media platforms across industries including faith, education, lifestyle,
    skincare, family, and children-focused brands, we create content that builds visibility, connection, and
    community.

    From content strategy and page management to reels production, branding, and audience engagement, we
    help brands communicate their message clearly and consistently in the digital space. 

    Our goal is not just to manage pages, but to build meaningful online experiences that inspire growth,
    influence, and lasting impact.`,
    thumbnail: "/images/smm.png",
    platforms: ["Instagram", "Facebook", "X", "YouTube", "TikTok"],
    metrics: [
      { label: "Reach", value: "17K", delta: "+9%" },
      { label: "Engagement Rate", value: "100%" },
      { label: "Profile Activity", value: "636%" },
    ],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  service: string;
  avatar?: string;
  testimonial: string;
  qa?: {
    question: string;
    answer: string;
  }[];
}

export const testimonials: Testimonial[] = [
  {
    name: "Olalekan Ayeni",
    role: "Author of 'A Journey of Faith and Mission'",
    service: "Book Publishing",
    testimonial:
      "Working with this agency was a turning point in writing my book. Their strategic approach, professionalism, and clear communication helped transform the story and journey of my experience in the mission field into reality to many people on the mission. I highly recommend them to any author serious about building impact and achieving measurable results.",
    qa: [
      {
        question: "Name of book(s) we helped you publish:",
        answer: "A Journey of Faith and Mission",
      },
      {
        question:
          "What were your primary goals when you first approached us, and what challenges were you facing in achieving them?",
        answer:
          "When I was linked up with you, I was struggling with creating or writing the book although I believed in the value of my work, I lacked the expertise and systems needed to reach the right readers effectively and consistently. but I was told of your many projects and book write ups which gave me confidence and knowing your background as a pastor, I sincerely felt that I was in safe hands.",
      },
      {
        question:
          "What had you tried before working with us, and why wasn’t it working?",
        answer:
          "It is my first book write up and I was linked up by my manager Mrs Dolapo who assured me based on her working with you that I will be in good and safe hands.",
      },
      {
        question:
          "What stood out to you most about working with our agency compared to other experiences you’ve had?",
        answer:
          "What stood out most was your strategic approach and professionalism. Rather than offering generic solutions, you took time to understand my goals, audience, and brand. The clarity of your plan and the structured execution gave me confidence that I was finally working with a team that understood both publishing and marketing dynamics.",
      },
      {
        question:
          "How would you describe our communication style and responsiveness throughout the project?",
        answer:
          "Your communication was clear, proactive, and transparent. I appreciated the regular updates and the willingness to explain strategy and results in a way that was easy to understand. Any questions or concerns I had been addressed promptly, which made the collaboration smooth and reassuring.",
      },
      {
        question:
          "What specific services or aspects of our work were most valuable to you?",
        answer:
          "The most valuable aspects were audience targeting, campaign optimization, and branding guidance. Your ability to refine messaging and position the book effectively made a significant difference. The structured marketing framework you implemented also provided clarity and measurable direction.",
      },
      {
        question:
          "What concrete results did you achieve through our partnership? If possible, how would you quantify the return on investment from our services?",
        answer:
          "Through our partnership, I experienced visibility through our meetings, personal engagement. Our combination of strategy, execution, and consistent communication sets you apart. Overall, my experience was very positive.",
      },
      {
        question:
          "Would you recommend our agency to other authors? If yes, why?",
        answer:
          "YA very big YES! I would absolutely recommend your agency to many people.",
      },
      {
        question:
          "Is there anything you feel we could have done better or differently?",
        answer:
          "It’s my first and will not be able to advise but can encourage better than what you have been doing and still doing.",
      },
    ],
  },
  {
    name: "HUG",
    role: "Author",
    service: "Book Publishing",
    testimonial:
      "Working with your agency to publish HUG was truly uplifting. Your professionalism and dedication helped transform my manuscript into a polished, impactful book. I appreciated your attention to detail and the way you honored my vision throughout the process. I wholeheartedly recommend your services to any author seeking excellence and a trustworthy partnership.",
    qa: [
      {
        question: "Name of book(s) we helped you publish:",
        answer:
          "H U G (Healing • Understanding • Gratitude): A Simple Gesture, A Profound Impact",
      },
      {
        question:
          "What were your primary goals when you first approached us, and what challenges were you facing in achieving them?",
        answer:
          "My goal was to ensure that the idea conceived in my heart became tangible, something people could hold and feel. I had no challenges with the production process while working with Ayo LLC.",
      },
      {
        question:
          "What had you tried before working with us, and why wasn’t it working?",
        answer:
          "I explored self‑publishing options, but the process felt overwhelming and time-consuming. I needed expert guidance to ensure the book was polished, credible, and ready for public release.",
      },
      {
        question:
          "What stood out to you most about working with our agency compared to other experiences you’ve had?",
        answer:
          "Your professionalism, attention to detail, and genuine commitment to my vision stood out. You didn’t just process a project, you partnered with me to refine and elevate it.",
      },
      {
        question:
          "How would you describe our communication style and responsiveness throughout the project?",
        answer:
          "Clear, supportive, and consistent. I received updates at every stage.",
      },
      {
        question:
          "What specific services or aspects of our work were most valuable to you?",
        answer:
          "The overall publishing experience was valuable. You helped shape the book into cohesive and impactful work.",
      },
      {
        question:
          "What concrete results did you achieve through our partnership?",
        answer:
          "I successfully published HUG with confidence and excellence. The book now reflects the quality and message I envisioned, and the process saved me significant time and stress.",
      },
      {
        question:
          "Would you recommend our agency to other authors? If yes, why?",
        answer:
          "Absolutely. Your agency’s professionalism is genuine, making the publishing journey smooth, efficient, and rewarding.",
      },
      {
        question:
          "Is there anything you feel we could have done better or differently?",
        answer:
          "For me, the experience was excellent. I felt supported throughout the entire process.",
      },
    ],
  },
];
