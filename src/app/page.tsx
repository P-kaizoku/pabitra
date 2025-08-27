import Image from "next/image";
import React from "react";
import pfp from "@/assets/pfp.jpg";
import { Montserrat } from "next/font/google";
import ProjectSkills from "@/components/ProjectSkills";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-montserrat",
});

const page = () => {
  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl py-12">
      <section className="flex flex-col items-center justify-around gap-4 border-b-2 border-neutral-300 pb-8 md:flex-row dark:border-neutral-700">
        <div className="w-fit overflow-hidden rounded-full border-2 border-neutral-800 dark:border-neutral-200">
          <Image src={pfp} alt="profile photo" height={150} />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-neutral-700 md:text-3xl dark:text-neutral-50">
            Hi, I am
          </h1>
          <p className="text-3xl tracking-tighter text-neutral-800 md:text-5xl dark:text-neutral-200">
            Pabitra Mondal
          </p>
          <p className="mt-2 text-sm text-neutral-600 md:text-lg dark:text-neutral-400">
            Engineering student, developer.
          </p>
        </div>
      </section>
      <ProjectSkills />
    </main>
  );
};

export default page;
