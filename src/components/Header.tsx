"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import OmniaButton from "./ui/omnia-button";

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isProfessionalOpen, setIsProfessionalOpen] = useState(false);
  const [isManagedOpen, setIsManagedOpen] = useState(false);
  const professionalListRef = useRef<HTMLUListElement | null>(null);
  const managedListRef = useRef<HTMLUListElement | null>(null);
  const [professionalMaxHeight, setProfessionalMaxHeight] = useState<number>(0);
  const [managedMaxHeight, setManagedMaxHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const stickyEl = document.getElementById("header-sticky");
      if (!stickyEl) return;
      if (window.scrollY > 50) {
        stickyEl.classList.add("sticky");
      } else {
        stickyEl.classList.remove("sticky");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOffcanvasOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (professionalListRef.current) {
      setProfessionalMaxHeight(professionalListRef.current.scrollHeight);
    }
  }, [isProfessionalOpen]);

  useEffect(() => {
    if (managedListRef.current) {
      setManagedMaxHeight(managedListRef.current.scrollHeight);
    }
  }, [isManagedOpen]);

  return (
    <>
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="header-top-wrapper">
              <ul>
                <li>
                  <i className="far fa-envelope"></i>
                  <a href="mailto:info@omniaservices.co.uk" className="link">info@omniaservices.co.uk</a>
                </li>
                <li>
                  <i className="fal fa-link"></i> <a href="https://omniaservices.co.uk/"> UK</a>  &nbsp; | &nbsp;  <a href="https://omniaservices.in"> INDIA</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <Image src="/assets/img/logo/white-logo.webp" alt="logo-img" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "40px" }} />
                  </Link>
                  <Link href="/" className="header-logo-2">
                    <Image src="/assets/img/logo/black-logo.webp" alt="logo-img" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "40px" }} />
                  </Link>
                </div>
                <div className="mean__menu-wrapper d-none d-xl-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="active">
                          <Link href="/">Home</Link>
                        </li>

                        <li>
                          <span className="menu-label cursor-pointer font-medium">Professional Services <i className="fa-solid fa-chevron-down"></i></span>
                          <ul className="submenu submenu-om">
                            <li><Link href="/digital-process-automation" >Digital Process Automation</Link></li>
                            <li><Link href="/cloud-migration">Cloud Migration</Link></li>
                            <li><Link href="/data-analytics">Data Analytics</Link></li>
                            <li><Link href="/digital-transformation">Digital Transformation</Link></li>
                            <li><Link href="/domain-consulting">Domain Consulting</Link></li>
                          </ul>
                        </li>
                        <li>
                          <span className="menu-label cursor-pointer font-medium">Managed Service <i className="fa-solid fa-chevron-down"></i></span>
                          <ul className="submenu submenu-om">
                            <li><Link href="/ormb">ORMB</Link></li>
                            <li><Link href="/vision-plus">Vision Plus</Link></li>
                            <li><Link href="/smart-investigate">Smart Investigate</Link></li>
                            <li><Link href="/msd365">MSD365</Link></li>
                          </ul>
                        </li>
                        <li><Link href="/career">Career</Link></li>
                        <li className="display-mobile-only"><Link href="/contact">Contact Us</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="main-button">
                    <Link href="/contact"> <OmniaButton text="Contact Us" /> </Link>
                  </div>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle" onClick={() => setIsOffcanvasOpen(true)} aria-label="Open menu" role="button">
                      <i className="fas fa-bars"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Area */}
      <div className="fix-area">
        <div className={`offcanvas__info${isOffcanvasOpen ? " info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image src="/assets/img/logo/black-logo.webp" alt="logo-img" width={0} height={0} sizes="100vw" style={{ width: "auto", height: "32px" }} />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setIsOffcanvasOpen(false)} aria-label="Close menu">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <nav
                aria-label="Mobile Menu"
                className="offcanvas-mobile-nav"
                onClick={(e) => {
                  const target = e.target as HTMLElement;
                  const anchor = target.closest('a');
                  if (anchor && anchor instanceof HTMLAnchorElement) {
                    const href = anchor.getAttribute('href');
                    if (href && href !== '#') {
                      setIsOffcanvasOpen(false);
                      setIsProfessionalOpen(false);
                      setIsManagedOpen(false);
                    }
                  }
                }}
              >
                <ul className="divide-y divide-[var(--border)]">
                  <li className="active">
                    <Link href="/" className="block py-1.5">Home</Link>
                  </li>

                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setIsProfessionalOpen((v) => !v); }} aria-expanded={isProfessionalOpen} className="flex justify-between items-center py-1.5">Professional Services <i className={`fa-solid ${isProfessionalOpen ? "fa-minus" : "fa-plus"}`}></i></a>
                    <ul
                      ref={professionalListRef}
                      className="submenu slide-toggle overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out divide-y divide-[var(--border)] pl-4"
                      style={{
                        maxHeight: isProfessionalOpen ? professionalMaxHeight : 0,
                        opacity: isProfessionalOpen ? 1 : 0,
                      }}
                    >
                      {["Digital Process Automation", "Cloud Migration", "Data Analytics", "Digital Transformation", "Domain Consulting"].map((item, index) => (
                        <li className="pl-4 text-nowrap text-sm" key={index}><Link href={`/${item.toLowerCase().replace(/ /g, "-")}`} className="block py-1">{item}</Link></li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <a href="#" onClick={(e) => { e.preventDefault(); setIsManagedOpen((v) => !v); }} aria-expanded={isManagedOpen} className="flex justify-between items-center py-1.5">Managed Service <i className={`fa-solid ${isManagedOpen ? "fa-minus" : "fa-plus"}`}></i></a>
                    <ul
                      ref={managedListRef}
                      className="submenu slide-toggle overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out divide-y divide-[var(--border)] pl-4"
                      style={{
                        maxHeight: isManagedOpen ? managedMaxHeight : 0,
                        opacity: isManagedOpen ? 1 : 0,
                      }}
                    >
                      {[
                        { label: "ORMB", href: "/ormb" },
                        { label: "Vision Plus", href: "/vision-plus" },
                        { label: "Smart Investigate", href: "/smart-investigate" },
                        { label: "MSD365", href: "/msd365" },
                      ].map((item, index) => (
                        <li className="pl-4 text-nowrap text-sm" key={index}>
                          <Link href={item.href} className="block py-1">{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li><Link href="/career" className="block py-1.5">Career</Link></li>
                  <li><Link href="/contact" className="block py-1.5">Contact Us</Link></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay${isOffcanvasOpen ? " overlay-open" : ""}`} onClick={() => setIsOffcanvasOpen(false)}></div>


    </>
  );
}


