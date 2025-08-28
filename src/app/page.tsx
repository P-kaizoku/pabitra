import React from "react";
import pfp from "@/assets/pfp.jpg";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import Github from "@/assets/github.png";
import Twitter from "@/assets/twitter.png";
import Linkedin from "@/assets/linkedin.png";

const page = () => {
  return (
    <div className={`flex min-h-screen flex-col items-center pt-[190px]`}>
      <ProfileCard
        name="Pabitra Mondal"
        profileImg={pfp}
        catchphrase="Engineer student, developer."
      />
      <SocialLinks />
    </div>
  );
};

const ProfileCard = ({
  name,
  profileImg,
  catchphrase,
}: {
  name: string;
  profileImg: any;
  catchphrase: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-[17px]">
      <ThemeToggle />
      <div className="w-[213px] overflow-hidden rounded-full shadow-[0px_0px_55px_0px_#718096]">
        <Image src={profileImg} alt={`${name}'s profile`} />
      </div>
      <h2 className="bg-gradient-to-r from-neutral-600 to-neutral-500 bg-clip-text text-[48px] leading-[32px] tracking-tighter text-transparent dark:from-[#ffffff] dark:to-[#999999]">
        {name}
      </h2>
      <p>{catchphrase}</p>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <section className="mt-2">
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

export default page;
