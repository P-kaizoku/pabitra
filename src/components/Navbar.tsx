import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { Home } from "lucide-react";

const Navbar = () => {
  const linkLeft = [
    {
      name: "Projects",
      href: "/projects",
    },

    {
      name: "Blogs",
      href: "/blogs",
    },

    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Photos",
      href: "/photos",
    },
  ];
  return (
    <nav className="bg-transparent">
      <ul className="text-foreground mx-auto flex w-fit max-w-2xl items-center justify-center gap-1 rounded-full bg-neutral-200 px-6 py-4 dark:bg-neutral-800">
        <div className="flex items-center gap-2">
          <li className="transition-transform duration-200 ease-in-out hover:scale-120">
            <Link href="/">
              <Home />
            </Link>
          </li>
          {/* <li>
            <ThemeToggle />
          </li> */}
        </div>
        <li className="h-6 w-px bg-neutral-400 dark:bg-neutral-600"></li>
        {linkLeft.map((link) => (
          <li
            key={link.name}
            className="hover:bg-accent rounded-xl p-1 transition-colors duration-300 ease-in-out"
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
