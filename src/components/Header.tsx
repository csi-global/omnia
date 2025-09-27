"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronDown, FaLink, FaRegEnvelope } from "react-icons/fa6";

type NavItem = {
  label: string;
  href?: string;
  children?: Array<{ label: string; href: string }>;
};

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About-Us", href: "/about" },
  {
    label: "Professional Services",
    children: [
      { label: "Cloud Assessment", href: "/services/cloud-assessment" },
      { label: "Cyber Security", href: "/services/cyber-security" },
      { label: "SharePoint Development", href: "/services/sharepoint-development" },
      { label: "Digital Transformation", href: "/services/digital-transformation" },
      { label: "IT Consulting", href: "/services/it-consulting" },
      { label: "Cloud Migration", href: "/services/cloud-migration" },
    ],
  },
  {
    label: "Managed Service",
    children: [
      { label: "Managed Cloud Desk", href: "/managed/cloud-desk" },
      { label: "Managed Microsoft 365", href: "/managed/microsoft-365" },
      { label: "Managed Microsoft Azure", href: "/managed/microsoft-azure" },
      { label: "Surface –As-A-Service", href: "/managed/surface-as-a-service" },
    ],
  },
  { label: "Career", href: "/career" },
];

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu on route change
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="z-50 w-full">
      {/* Top bar (matches legacy header-top) */}
      <div className="bg-topbar text-white font-bold">
        <div className="mx-auto max-w-7xl px-1.5 py-2 flex items-center justify-between text-lg">
          <a href="mailto:info@omniaservices.co.uk" className="inline-flex items-center gap-2 opacity-90 hover:opacity-100">
            <FaRegEnvelope className="size-4 text-brand" />
            info@omniaservices.co.uk
          </a>
          <div className="inline-flex items-center gap-3 opacity-90">
            <FaLink className="size-6 text-brand" />
            <a href="https://omniaservices.co.uk/" className="hover:underline">UK</a>
            <span className="opacity-70">|</span>
            <a href="https://omniaservices.in" className="hover:underline">INDIA</a>
          </div>
        </div>
      </div>

      {/* Sticky main header */}
      <div className={`sticky top-0 w-full border-b border-transparent ${isSticky ? "bg-header/95 backdrop-blur" : "bg-header"}`}>
        <div className="mx-auto max-w-7xl">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <img src="/assets/img/logo/white-logo.png" alt="Omnia" className="h-8 w-auto" />
              </Link>
            </div>

            <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-10">
              {nav.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <div className="group">
                      <button className="inline-flex items-center gap-2 text-[17px] font-semibold tracking-wide text-white/90 hover:text-white">
                        {item.label}
                        <FaChevronDown className="ml-1 h-3 w-3" />
                      </button>
                      <div className="absolute left-0 mt-3 hidden min-w-[260px] rounded-xl border border-slate-200 bg-white p-2 shadow-lg group-hover:block">
                        {item.children.map((c) => (
                          <Link key={c.href} href={c.href} className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      className={`text-[17px] font-semibold tracking-wide hover:text-white ${pathname === item.href ? "text-white" : "text-white/90"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/contact" className="hidden sm:inline-flex items-center group">
                <span className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(229,26,26,0.35)] transition-all duration-200 group-hover:shadow-[0_12px_28px_rgba(229,26,26,0.5)]">Contact Us</span>
                <span className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_24px_rgba(229,26,26,0.35)] transition-transform duration-200 group-hover:translate-x-0.5">
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>

              <button
                className="inline-flex items-center justify-center rounded-md p-2 lg:hidden hover:bg-slate-100"
                aria-label="Open menu"
                onClick={() => setMobileOpen((v) => !v)}
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-slate-800 bg-header text-white"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-2">
                {nav.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          className="flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-white hover:bg-white/10"
                          onClick={() => setOpenDropdown((v) => (v === item.label ? null : item.label))}
                        >
                          <span>{item.label}</span>
                          <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.127l3.71-3.896a.75.75 0 111.08 1.04l-4.24 4.46a.75.75 0 01-1.08 0L5.25 8.27a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                              <div className="mt-1 flex flex-col gap-1 rounded-md border border-white/10 p-2">
                                {item.children.map((c) => (
                                  <Link key={c.href} href={c.href} className="rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10">
                                    {c.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href ?? "#"}
                        className={`block rounded-md px-3 py-2 text-sm hover:bg-white/10 ${pathname === item.href ? "text-white" : "text-white/90"
                          }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


