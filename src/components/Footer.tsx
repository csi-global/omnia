import Image from "next/image";
import Link from "next/link";
import footerColor from "../../public/assets/img/footer-color.webp";
import footerColor2 from "../../public/assets/img/footer-color-2.webp";
import blackLogo from "../../public/assets/img/logo/black-logo.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section section-bg">
      <div className="color-shape">
        <Image src={footerColor} alt="" aria-hidden="true" className="select-none" />
      </div>
      <div className="color-shape-2">
        <Image src={footerColor2} alt="" aria-hidden="true" className="select-none" />
      </div>
      <div className="container">
        <div className="footer-logo-area">
          <Link href="/" className="footer-logo" aria-label="Omnia Services homepage">
            <Image src={blackLogo} alt="Omnia Services logo" className="select-none" />
          </Link>
          <div className="social-icon d-flex align-items-center">
            <a href="https://www.facebook.com/omniaservices" aria-label="Omnia Services on Facebook" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/omniaservices" aria-label="Omnia Services on X (Twitter)" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/omnia-services" aria-label="Omnia Services on LinkedIn" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-widget-wrapper">
          <div className="row justify-content-between">

            {/* Professional Services */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="wid-title"><h3>Professional Services</h3></div>
                <ul className="list-items">
                  <li><Link href="/digital-process-automation">Digital Process Automation</Link></li>
                  <li><Link href="/cloud-migration">Cloud Migration</Link></li>
                  <li><Link href="/data-analytics">Data Analytics</Link></li>
                  <li><Link href="/digital-transformation">Digital Transformation</Link></li>
                  <li><Link href="/domain-consulting">Domain Consulting</Link></li>
                </ul>
              </div>
            </div>

            {/* Managed Services */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="wid-title"><h3>Managed Services</h3></div>
                <ul className="list-items">
                  <li><Link href="/ormb">ORMB</Link></li>
                  <li><Link href="/vision-plus">VisionPLUS</Link></li>
                  <li><Link href="/smart-investigate">Smart Investigate</Link></li>
                  <li><Link href="/msd365">MSD365</Link></li>
                </ul>
              </div>
            </div>

            {/* Company */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="wid-title"><h3>Company</h3></div>
                <ul className="list-items">
                  <li><Link href="/ai-engineering">AI Engineering</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><Link href="/career">Careers</Link></li>
                  <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                  <li><Link href="/privacy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="col-xl-3 col-lg-3 col-md-6">
              <div className="single-footer-widget">
                <div className="wid-title"><h3>Get in Touch</h3></div>
                <div className="footer-content">
                  <ul className="footer-contact">
                    <li>
                      Email
                      <span><a href="mailto:info@omniaservices.co.uk">info@omniaservices.co.uk</a></span>
                    </li>
                    <li>
                      Phone
                      <span><a href="tel:+441133662035">+44 1133 662035</a></span>
                    </li>
                    <li>
                      Location
                      <span>Leeds, West Yorkshire, UK</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-wrapper d-flex align-items-center justify-content-between">
            <p className="color-2">
              &copy; {currentYear} <Link href="/">Omnia Services</Link>. All rights reserved.
            </p>
            <ul className="footer-menu">
              <li><Link href="/terms">Terms &amp; Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
