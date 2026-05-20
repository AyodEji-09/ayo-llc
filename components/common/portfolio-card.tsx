import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/data";

interface PortfolioCardProps {
  project: Project;
}

const PortfolioCard = ({ project }: PortfolioCardProps) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 ring-0">
      <div className="relative aspect-video w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          priority
          className="z-20 w-full object-cover object-top"
        />
      </div>
      <CardHeader className="gap-2.5">
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-2 flex items-center justify-between gap-2">
        <div className="text-primary flex items-center gap-2 text-sm">
          <span>
            <Tag size={16} />
          </span>
          <p>{project.category}</p>
        </div>
        <Button
          asChild
          className="bg-secondary hover:bg-secondary/70 h-auto cursor-pointer rounded-sm px-4 py-2.5 text-sm text-white"
        >
          <Link href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;

