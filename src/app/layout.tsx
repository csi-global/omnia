import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import "@/css/all.min.css";
import "@/css/bootstrap.min.css";
import "@/css/icomon.css";
import "@/css/main.css";
import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "swiper/css";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: "Omnia",
  description: "Omnia - Cloud consulting, digital transformation, and managed services",
  icons: {
    icon: "/assets/img/favicon.png",
    shortcut: "/assets/img/favicon.png",
    apple: "/assets/img/favicon.png",
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
        className={`${poppins.className} ${manrope.className} subpixel-antialiased`}
      >
        <Preloader />
        <BackToTopButton />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
