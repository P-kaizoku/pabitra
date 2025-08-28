"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const Navbar2 = () => {
  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-[86px]">
      <ul className="mx-auto flex max-w-2xl items-center justify-between">
        <li key="/">
          <TransitionLinks href="/">
            <div className="rounded-full p-2 hover:shadow-lg hover:shadow-neutral-500">
              <Home />
            </div>
          </TransitionLinks>
        </li>
        {navLinks.map((link) => (
          <li key={link.href}>
            <TransitionLinks href={link.href}>{link.label}</TransitionLinks>
          </li>
        ))}
      </ul>
    </div>
  );
};

type TransitionLinksProps = {
  children: React.ReactNode;
  href: string;
};

const TransitionLinks = ({ children, href }: TransitionLinksProps) => {
  const router = useRouter();

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");
    body?.classList.add("transition-page");
    await sleep(300);

    router.push(href);
    await sleep(300);
    body?.classList.remove("transition-page");
  };

  return (
    <Link onClick={handleTransition} href={href}>
      {children}
    </Link>
  );
};

export default Navbar2;
