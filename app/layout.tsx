import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Galih Tri Risky Andiko — Software Engineer Portfolio",
  description:
    "Portfolio of Galih Tri Risky Andiko, a passionate Software Engineer based in Indonesia specializing in web design, mobile app development, and brand identity.",
  keywords: [
    "software engineer",
    "portfolio",
    "web developer",
    "mobile app",
    "indonesia",
    "galihtra",
  ],
  authors: [{ name: "Galih Tri Risky Andiko" }],
  openGraph: {
    title: "Galih Tri Risky Andiko — Software Engineer",
    description:
      "Passionate Software Engineer crafting digital experiences from Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
