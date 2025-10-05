import Link from "next/link";

export default function Header() {
  return (
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
                  <img src="/assets/img/logo/white-logo.webp" alt="logo-img" />
                </Link>
                <Link href="/" className="header-logo-2">
                  <img src="/assets/img/logo/black-logo.webp" alt="logo-img" />
                </Link>
              </div>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="active">
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/about">About-Us</Link>
                      </li>
                      <li>
                        <a href="#">Professional Services <i className="fa-solid fa-chevron-down"></i></a>
                        <ul className="submenu">
                          <li><Link href="/digital-process-automation">Digital Process Automation</Link></li>
                          <li><Link href="/cloud-migration">Cloud Migration</Link></li>
                          <li><Link href="/data-analytics">Data Analytics</Link></li>
                          <li><Link href="/digital-transformation">Digital Transformation</Link></li>
                          <li><Link href="/domain-consulting">Domain Consulting</Link></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Managed Service <i className="fa-solid fa-chevron-down"></i></a>
                        <ul className="submenu">
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
                  <Link href="/contact"> <span className="theme-btn">Contact Us </span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


