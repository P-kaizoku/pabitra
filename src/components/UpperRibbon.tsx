import React from "react";
import Link from "next/link";
import Github from "@/assets/github.png";
import Twitter from "@/assets/twitter.png";
import Image from "next/image";
import Linkedin from "@/assets/linkedin.png";

const UpperRibbon = () => {
  return (
    <section className="sticky top-0 mx-auto flex max-w-2xl justify-between bg-neutral-100/80 px-2 py-1 transition-colors duration-300 ease-in-out dark:bg-neutral-800/80">
      <div className="flex items-center space-x-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        <span className="font-mono text-[12px]">- Delhi, India.</span>
      </div>

      <div className="flex items-center space-x-2">
        <div>
          <Link
            href="https://github.com/P-kaizoku"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Github}
              alt="GitHub"
              width={24}
              className="dark:invert"
            />
          </Link>
        </div>
        <div>
          <Link
            href="https://x.com/hecodes0_0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Twitter}
              alt="Twitter"
              width={20}
              className="ml-2 dark:invert"
            />
          </Link>
        </div>
        <div>
          <Link
            href="https://www.linkedin.com/in/pabitra-mondal-13ba85270/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Linkedin}
              alt="LinkedIn"
              width={20}
              className="ml-2 dark:invert"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpperRibbon;
