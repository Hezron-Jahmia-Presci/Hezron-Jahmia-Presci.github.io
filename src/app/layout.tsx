import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { EB_Garamond } from "next/font/google";


import "./globals.css";
import "./../styles/homePage.scss";
import "./../styles/components.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const garamond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jahmia Hezron Presci | Software Engineer & IT Specialist",
  description:
    "Portfolio of Jahmia Hezron Presci — Software Engineer and IT Specialist based in Kampala, Uganda. Skilled in web, mobile, and backend systems with Go, React, Flutter, TypeScript, and Next.js.",
  keywords: [
    "Jahmia Hezron Presci",
    "Software Engineer Uganda",
    "Full Stack Developer",
    "React Next.js Developer",
    "GoLang Backend",
    "Flutter Mobile Developer",
    "IT Specialist Kampala",
  ],
  authors: [{ name: "Jahmia Hezron Presci" }],
  openGraph: {
    title: "Jahmia Hezron Presci | Software Engineer & IT Specialist",
    description:
      "Explore the portfolio of Jahmia Hezron Presci — Software Engineer & IT Specialist from Kampala, Uganda. Expertise in Go, React, Flutter, TypeScript, and Next.js.",
    url: "https://hezron-jahmia-presci.vercel.app/",
    siteName: "Jahmia Hezron Presci Portfolio",
    images: [
      {
        url: "https://hezron-jahmia-presci.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview - Jahmia Hezron Presci",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahmia Hezron Presci | Software Engineer & IT Specialist",
    description:
      "Portfolio showcasing work in web, mobile, and backend development with Go, React, Flutter, and Next.js.",
    images: ["https://hezron-jahmia-presci.vercel.app/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
