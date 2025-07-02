import Image from "next/image";
import React from "react";
import MangaAvatar from "@/assets/mangaAvatarNoBg.png";
import ProjectCard from "@/components/ProjectCard";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-montserrat",
});

const page = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-8 py-12">
      <section className="mb-10 flex">
        <div className="cursor-default bg-gradient-to-br from-neutral-700 to-neutral-500 bg-clip-text text-transparent dark:from-neutral-300 dark:to-neutral-500">
          <p className="text-sm">Hi there, I am</p>
          <h1 className="text-6xl leading-13">Pabitra Mondal</h1>
          <p className="text-md text-muted-foreground pt-1 leading-5 tracking-tight">
            I am a fullstack developer, specializing in building modern
            websites.
          </p>
          <div className="text-md text-muted-foreground mt-2 tracking-tight">
            Wanna hire me? <br />
            <p className="mt-2 w-fit rounded-xl bg-neutral-800/80 px-4 py-2 text-neutral-200 dark:bg-neutral-300 dark:text-neutral-600">
              <Link href="/contact">Let's talk</Link>
            </p>
          </div>
        </div>
        <div className="ring-foreground overflow-hidden rounded-full ring-1 transition-colors duration-300 hover:bg-red-700">
          <Image src={MangaAvatar} alt="profile photo" height={400} />
        </div>
      </section>
      <section></section>
      <section className="mt-30 flex flex-col">
        <div className="mx-auto w-fit rounded-xl px-2 py-1 text-2xl tracking-tight">
          <h2 className="font-[montserrat]">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 font-[montserrat] sm:grid-cols-2">
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </main>
  );
};

export default page;
