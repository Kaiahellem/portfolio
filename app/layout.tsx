import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import NavLink from "./components/NavLink";

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
        <div className="px-6 py-10 w-full">
          <nav className="flex justify-between items-center max-w-5xl mx-auto mb-20">
          <NavLink href="/">Kaia Hellem</NavLink>
        <div className="flex gap-6">
         <NavLink href="/about">Om meg</NavLink>
    <NavLink href="/projects">Prosjekter</NavLink>
    <NavLink href="/contact">Kontakt</NavLink>
  </div>
</nav>
        {children}
        </div>
      </body>
    </html>
  );
}
