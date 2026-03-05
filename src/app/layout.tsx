import BackToTopButton from "@/components/back-to-top";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import "@/css/all.min.css";
import "@/css/bootstrap.min.css";
import "@/css/icomon.css";
import "@/css/main.css";
import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import "swiper/css";
import "swiper/css/effect-fade";
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
  metadataBase: new URL("https://www.omniaservices.co.uk"),
  title: {
    default: "Omnia Services | Cloud Consulting, AI Engineering & Digital Transformation UK",
    template: "%s",
  },
  description: "Omnia Services delivers cloud migration, AI engineering, digital transformation, and managed services for UK enterprises.",
  robots: "index,follow",
  icons: {
    icon: "/assets/img/favicon.png",
    shortcut: "/assets/img/favicon.png",
    apple: "/assets/img/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Omnia Services",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
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
        className={`${poppins.className} ${manrope.className} subpixel-antialiased scroll-smooth`}
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
