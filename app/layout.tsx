import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oto | Full-Stack Developer",
  description: "Oto Ramishvili is a self-taught full-stack developer specializing in Next.js, React, Node.js, and API development. Explore projects, skills, and more.",
  keywords: ["Oto Ramishvili", "Full-Stack Developer", "Next.js", "React", "Node.js", "JavaScript", "Web Development", "API Development", "Portfolio"],
  authors: [{ name: "Oto Ramishvili" }],
  creator: "Oto Ramishvili",
  openGraph: {
    title: "Oto Ramishvili | Full-Stack Developer",
    description: "Building scalable web apps with Next.js, React, and Node.js. Check out my portfolio and projects.",
    url: "https://otoramishvili.com",
    type: "website",
    images: [
      {
        url: "https://otoramishvili.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oto Ramishvili Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oto Ramishvili | Full-Stack Developer",
    description: "A passionate full-stack developer skilled in Next.js, React, and backend development.",
    images: ["https://otoramishvili.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
