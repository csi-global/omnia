"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  // Hide after initial window load
  useEffect(() => {
    const onLoad = () => {
      timeoutRef.current = window.setTimeout(() => setVisible(false), 400);
    };
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    return () => {
      window.removeEventListener("load", onLoad);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  // Briefly show on route changes
  useEffect(() => {
    if (!pathname) return;
    setVisible(true);
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setVisible(false), 500);
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div id="preloader" className="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="O" className="letters-loading">O</span>
          <span data-text-preloader="M" className="letters-loading">M</span>
          <span data-text-preloader="N" className="letters-loading">N</span>
          <span data-text-preloader="I" className="letters-loading">I</span>
          <span data-text-preloader="A" className="letters-loading">A</span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


