import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type SocialMediaProject } from "@/data";
import Image from "next/image";
import Link from "next/link";

interface SocialMediaCardProps {
  project: SocialMediaProject;
}

export const SocialMediaCard = ({ project }: SocialMediaCardProps) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 ring-0">
      <div className="relative aspect-video w-full">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          priority
          className="z-20 w-full object-cover object-center"
        />
      </div>

      <CardHeader className="gap-2.5">
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {project.summary}
        </CardDescription>
      </CardHeader>

      <CardFooter className="mt-1 flex items-center justify-end gap-2">
        <Button
          asChild
          className="bg-secondary hover:bg-secondary/70 h-auto cursor-pointer rounded-sm px-4 py-2.5 text-sm text-white"
        >
          <Link href="/portfolio/social-media-management">
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
