import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WEBINARS, getWebinarBySlug } from "@/config/webinar";
import { WebinarDetailView } from "@/components/webinar/webinar-detail-view";

export function generateStaticParams() {
  return WEBINARS.map((webinar) => ({
    slug: webinar.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const webinar = getWebinarBySlug(slug);

  if (!webinar) {
    return { title: "Webinar Not Found" };
  }

  return {
    title: `${webinar.theme} — ${webinar.headline}`,
    description: `${webinar.subtitle}: ${webinar.tagline}`,
  };
}

export default async function WebinarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const webinar = getWebinarBySlug(slug);

  if (!webinar) {
    notFound();
  }

  return <WebinarDetailView webinar={webinar} />;
}
