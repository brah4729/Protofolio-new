import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio showcasing my skills, projects, and capabilities.",
  openGraph: {
    title: "My Portfolio",
    description: "Portfolio showcasing my skills, projects, and capabilities.",
    url: "https://protofolio-new-sage.vercel.app/", // TODO: Replace with your actual deployed URL
    siteName: "My Portfolio",
    images: [
      {
        url: "https://protofolio-new-sage.vercel.app/og-image.jpg", // TODO: Replace with your actual preview image URL
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Portfolio",
    description: "Portfolio showcasing my skills, projects, and capabilities.",
    images: ["https://protofolio-new-sage.vercel.app/og-image.jpg"], // TODO: Replace with your actual preview image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
