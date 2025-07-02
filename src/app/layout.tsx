import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import UpperRibbon from "@/components/UpperRibbon";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Pabitra's Developer Portfolio",
  description:
    "Showcasing Pabitra's skills, projects, and expertise in web development, specializing in modern technologies like React, TypeScript, and Next.js.",
  keywords: [
    "Pabitra",
    "Developer Portfolio",
    "Web Development",
    "React",
    "TypeScript",
    "Next.js",
    "Frontend Developer",
    "Software Engineer",
    "Programming",
    "Projects",
  ],
  authors: [{ name: "Pabitra", url: "https://pabitra.dev" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className} bg-background text-foreground transition-colors duration-300 ease-in-out`}
      >
        <UpperRibbon />
        {children}
        <div className="fixed inset-x-0 bottom-4 z-50">
          <Navbar />
        </div>
        <Footer />
      </body>
    </html>
  );
}
