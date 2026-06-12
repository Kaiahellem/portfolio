import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaia Hellem",
  description: "Porteføljen til Kaia Hellem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="no"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased font-sans`}
    >
      <body className="min-h-full flex flex-col">
        <div className="max-w-2xl mx-auto px-6 py-10 w-full">
        <nav className="flex gap-6 mb-12">
          <Link href="/">Hjem</Link>
          <Link href="/om">Om meg</Link>
          <Link href="/prosjekter">Prosjekter</Link>
        </nav>
        {children}
        </div>
      </body>
    </html>
  );
}
