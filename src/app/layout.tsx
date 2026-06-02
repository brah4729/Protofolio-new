import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex — Portfolio",
  description:
    "A Student specializing in Machine Learning and Web Development that focuses on user experience, comfort, performance and scalability.",
  openGraph: {
    title: "Alex — Portfolio",
    description:
      "A Student specializing in Machine Learning and Web Development that focuses on user experience, comfort, performance and scalability.",
    siteName: "Alex Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
