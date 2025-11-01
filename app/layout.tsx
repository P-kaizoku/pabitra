import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pabitra Mondal - Full-Stack Developer & ML Engineer",
  description:
    "Full-Stack Developer & Machine Learning Engineer. Building intelligent web applications and exploring deep learning. CS student at BVCOE Delhi specializing in React, Next.js, Python, and PyTorch.",
  keywords: [
    "Pabitra Mondal",
    "Full-Stack Developer",
    "Machine Learning Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "Python",
    "PyTorch",
    "BVCOE Delhi",
  ],
  authors: [{ name: "Pabitra Mondal" }],
  creator: "Pabitra Mondal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pabitramondal.dev",
    title: "Pabitra Mondal - Full-Stack Developer & ML Engineer",
    description:
      "Building intelligent web applications and exploring deep learning. CS student at BVCOE Delhi.",
    siteName: "Pabitra Mondal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pabitra Mondal - Full-Stack Developer & ML Engineer",
    description:
      "Building intelligent web applications and exploring deep learning.",
    creator: "@pabitramondal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
