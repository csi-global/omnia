import Image from "next/image";
import Link from "next/link";
import footerColor from "../../public/assets/img/footer-color.webp";
import footerColor2 from "../../public/assets/img/footer-color-2.webp";
import blackLogo from "../../public/assets/img/logo/black-logo.webp";

export default function Footer() {
  return (
    <footer className="footer-section section-bg">
      <div className="color-shape">
        <Image src={footerColor} alt="img" className="select-none" />
      </div>
      <div className="color-shape-2">
        <Image src={footerColor2} alt="img" className="select-none" />
      </div>
      <div className="container">
        <div className="footer-logo-area">
          <Link href="/" className="footer-logo">
            <Image src={blackLogo} alt="img" className="select-none" />
          </Link>
          <div className="social-icon d-flex align-items-center">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-widget-wrapper">
          <div className="row justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3> Professional Services</h3>
                </div>
                <ul className="list-items">
                  <li><Link href="/digital-process-automation">Digital Process Automation</Link></li>
                  <li><Link href="/cloud-migration">Cloud Migration</Link></li>
                  <li><Link href="/data-analytics">Data Analytics</Link></li>
                  <li><Link href="/digital-transformation">Digital Transformation</Link></li>
                  <li><Link href="/domain-consulting">Domain Consulting</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3> Managed Service</h3>
                </div>
                <ul className="list-items">
                  <li><Link href="/ormb">ORMB</Link></li>
                  <li><Link href="/vision-plus">Vision Plus</Link></li>
                  <li><Link href="/smart-investigate">Smart Investigate</Link></li>
                  <li><Link href="/msd365">MSD365</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="single-footer-widget">
                <div className="wid-title">
                  <h3>Contact</h3>
                </div>
                <div className="footer-content">
                  <ul className="footer-contact">
                    <li>
                      Email
                      <span>
                        <a href="mailto:info@omniaservices.co.uk">info@omniaservices.co.uk</a>
                      </span>
                    </li>
                    <li>
                      Phone
                      <span>
                        <a href="tel:+44-1133 662035">+44-1133 662035</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="color-2">© All Copyright 2025 by <Link href="/">Omnia</Link></p>
            <ul className="footer-menu">
              <li>
                <Link href="/terms">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


