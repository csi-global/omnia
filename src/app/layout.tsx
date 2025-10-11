import BackToTopButton from "@/components/back-to-top";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import "@/css/all.min.css";
import "@/css/icomon.css";
import "@/css/main.css";
import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import { headers } from "next/headers";
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

const baseMetadata: Metadata = {
  title: "Omnia",
  description: "Omnia - Cloud consulting, digital transformation, and managed services",
  icons: {
    icon: "/assets/img/favicon.png",
    shortcut: "/assets/img/favicon.png",
    apple: "/assets/img/favicon.png",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const hdrs = await headers();
  const host = hdrs.get("x-forwarded-host") ?? hdrs.get("host") ?? "omniaservices.co.uk";
  const proto = hdrs.get("x-forwarded-proto") ?? "https";
  const base = new URL(`${proto}://${host}`);

  return {
    ...baseMetadata,
    metadataBase: base,
    alternates: { canonical: "/" },
  };
}

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
