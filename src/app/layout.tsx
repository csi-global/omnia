import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./css/all.min.css";
import "./css/animate.css";
import "./css/bootstrap.min.css";
import "./css/icomon.css";
import "./css/magnific-popup.css";
import "./css/main.css";
import "./css/meanmenu.css";
import "./css/nice-select.css";
import "./css/swiper-bundle.min.css";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
