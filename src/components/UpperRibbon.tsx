import React from "react";
import Link from "next/link";
import Github from "@/assets/github.png";
import Twitter from "@/assets/twitter.png";
import Image from "next/image";
import Linkedin from "@/assets/linkedin.png";

const UpperRibbon = () => {
  return (
    <section className="fixed top-0 mt-1 flex w-full justify-between px-2 transition-colors duration-300 ease-in-out">
      <div className="flex w-full items-center justify-center">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
        <span className="font-mono text-[12px]">-Delhi, India.</span>
      </div>
    </section>
  );
};

export default UpperRibbon;
