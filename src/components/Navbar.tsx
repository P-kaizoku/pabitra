import React from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  const linkLeft = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];
  const linkRight = [
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
      <ul className="bg-background text-foreground mx-auto flex w-fit max-w-2xl items-center justify-center gap-1 rounded-full px-6 py-4">
        {linkLeft.map((link) => (
          <li
            key={link.name}
            className="hover:bg-accent rounded-xl p-1 transition-colors duration-300 ease-in-out"
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
        {linkRight.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
