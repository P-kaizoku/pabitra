import Image from "next/image";
import React from "react";
import Avatar from "@/assets/managaAvatar.png";
import { Link as IconLink } from "lucide-react";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <section className="h-fit w-full rounded-2xl border-1 border-neutral-600 p-4 dark:border-neutral-400">
      <h2 className="text-2xl font-semibold">Project title</h2>
      <p className="text-muted-foreground mt-2 mb-4 text-sm">Description</p>
      <div className="w-full overflow-hidden rounded-xl">
        <Image src={Avatar} width={300} alt="Project image" />
      </div>
      <div className="mt-12">
        <Link href={"/"}>
          <IconLink />
        </Link>
      </div>
    </section>
  );
};

export default ProjectCard;
