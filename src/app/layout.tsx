import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import "./globals.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/magnific-popup.css";
import "./css/meanmenu.css";
import "./css/swiper-bundle.min.css";
import "./css/nice-select.css";
import "./css/icomon.css";
import "./css/all.min.css";
import "./css/main.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Omnia",
  description: "Omnia - Cloud consulting, digital transformation, and managed services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} subpixel-antialiased`}
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
