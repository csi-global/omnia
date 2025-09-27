import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], display: "swap" });

export const metadata: Metadata = {
  title: "Omnia",
  description: "Omnia - Cloud, Security, and Digital Transformation Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${poppins.variable} text-slate-800 antialiased`}>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
