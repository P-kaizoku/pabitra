"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    const newTheme = isDark ? "dark" : "light";
    localStorage.theme = newTheme;
    setTheme(newTheme);
  };

  return (
    <button
      className="flex items-center justify-center rounded-full p-1 transition-transform duration-200 ease-in-out hover:scale-120"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
