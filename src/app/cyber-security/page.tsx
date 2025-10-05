import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cyber Security and Data Protection | Omnia Services",
  description: "Protect your business with comprehensive cyber security solutions. Omnia Services uses latest technologies to safeguard systems, networks, and data from cyber threats, ransomware, and data breaches.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/cyber-security"
  },
  openGraph: {
    title: "Cyber Security and Data Protection | Omnia Services",
    description: "Protect your business with comprehensive cyber security solutions. Omnia Services uses latest technologies to safeguard systems, networks, and data from cyber threats, ransomware, and data breaches.",
    type: "website",
    url: "https://omniaservices.co.uk/cyber-security",
    images: ["https://omniaservices.co.uk/assets/img/service/2.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Security and Data Protection | Omnia Services",
    description: "Protect your business with comprehensive cyber security solutions. Omnia Services uses latest technologies to safeguard systems, networks, and data from cyber threats, ransomware, and data breaches.",
    images: ["https://omniaservices.co.uk/assets/img/service/2.webp"]
  }
};

export default function CyberSecurityPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Cyber Security and Data Protection</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Cyber Security and Data Protection</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="Service-details-section section-padding fix">
        <div className="container">
          <div className="sertvice-details-wrapper">
            <div className="service-details-content">
              <h2>Top Cyber Security Threats</h2>
              <p>
                Omnia uses the latest Cyber Security technologies, processes and measures designed to protect your systems, networks and data from cyber crimes.
              </p>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="thumb">
                    <img src="/assets/img/service/2.webp" alt="Cyber Security Solutions" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Cyber Security and Data Protection</h3>
                    <p>
                      Omnia uses the latest Cyber Security technologies, processes and measures designed to protect your systems, networks and data from cyber crimes.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> SDK for iOS/ Android</li>
                      <li><i className="fa-solid fa-angles-right"></i> Integrations with ITS</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="row g-4 pt-4 pb-5 align-items-center">
                <div className="col-md-6">
                  <div className="list-wrapper">
                    <h3>Cyber Security</h3>
                    <p>
                      Using the latest cyber security technologies, processes and measures, Omnia proactively monitors and protects all of our clients systems, networks and data from cyber crimes and provides training to reduce the risk of phishing or exposure.
                    </p>
                    <ul className="list-items">
                      <li><i className="fa-solid fa-angles-right"></i> API Gateway</li>
                      <li><i className="fa-solid fa-angles-right"></i> User Authentication</li>
                      <li><i className="fa-solid fa-angles-right"></i> Logging and Metrics</li>
                      <li><i className="fa-solid fa-angles-right"></i> Mobile Analytics</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="thumb">
                    <img src="/assets/img/service/22.webp" alt="Cyber Security Protection" />
                  </div>
                </div>
              </div>

              {/* Key Threats Section */}
              <div className="row g-4 mb-5">
                <div className="col-md-12">
                  <h3>Understanding Cyber Security Threats</h3>
                  <p>
                    Every day thousands of computer systems all over the world are attacked. There are criminals who take advantage of the anonymity of the online world to deceive, hack and steal if the opportunity arises.
                  </p>
                  <ul className="list-items">
                    <li><i className="fa-solid fa-angles-right"></i> Every day thousands of computer systems all over the world are attacked. There are criminals who take advantage of the anonymity of the online world to deceive, hack and steal if the opportunity arises.</li>
                    <li><i className="fa-solid fa-angles-right"></i> The primary motive for cyber criminals to target small and medium enterprises is to make money. In the South West of England we continue in 2017 to see</li>
                    <li><i className="fa-solid fa-angles-right"></i> Ransomware, unlawful network intrusion, phishing, spear phishing and fraud through social engineering methods as a threat to the viability of small companies.</li>
                    <li><i className="fa-solid fa-angles-right"></i> If an attack is successful it could have a devastating effect on a business.</li>
                    <li><i className="fa-solid fa-angles-right"></i> Reputation damage and financial loss may mean the failure of a company. Theft or loss of data can have a considerable effect on a company&apos;s reputation, including a loss in customer confidence, and may lead to significant fines from the Information Commissioner&apos;s Office.</li>
                  </ul>
                </div>
              </div>

              {/* Process Work Section */}
              <div className="row g-4 mb-5">
                <div className="process-work-wrapper">
                  <div className="line-shape">
                    <img src="/assets/img/process/linepng.webp" alt="Process flow" />
                  </div>
                  <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="work-process-items text-center">
                        <h6 className="number">1</h6>
                        <div className="content">
                          <h4>Social Engineering</h4>
                          <p>98% of cyber attacks rely on social engineering</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="work-process-items text-center">
                        <div className="content style-2">
                          <h4>Malware</h4>
                          <p>Every 7 seconds a new malware is released.</p>
                        </div>
                        <h6 className="number">2</h6>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="work-process-items text-center">
                        <h6 className="number">3</h6>
                        <div className="content">
                          <h4>Phishing</h4>
                          <p>1 in every 99 emails is a phishing attack.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                      <div className="work-process-items text-center">
                        <div className="content style-2">
                          <h4>Ransomware</h4>
                          <p>An organization will fall victim every 14 seconds in 2019.</p>
                        </div>
                        <h6 className="number">4</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Solutions Section */}
              <section className="section-padding bg-light fix">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 mx-auto">
                      <div className="section-title text-center">
                        <h2>Our Cyber Security Solutions</h2>
                        <p>
                          Comprehensive protection against evolving cyber threats with proactive monitoring and response capabilities.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="row g-4 pt-4">
                    <div className="col-lg-4 col-md-6">
                      <div className="single-feature">
                        <div className="icon">
                          <i className="fas fa-shield-alt"></i>
                        </div>
                        <div className="content">
                          <h4>Threat Detection & Response</h4>
                          <p>
                            24/7 monitoring with advanced threat detection, incident response, and forensic analysis to identify and neutralize threats quickly.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-feature">
                        <div className="icon">
                          <i className="fas fa-lock"></i>
                        </div>
                        <div className="content">
                          <h4>Data Protection & Encryption</h4>
                          <p>
                            End-to-end encryption, secure data storage, backup solutions, and compliance with GDPR and other data protection regulations.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-feature">
                        <div className="icon">
                          <i className="fas fa-user-shield"></i>
                        </div>
                        <div className="content">
                          <h4>Identity & Access Management</h4>
                          <p>
                            Multi-factor authentication, privileged access management, and identity governance to ensure only authorized users access systems.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-feature">
                        <div className="icon">
                          <i className="fas fa-network-wired"></i>
                        </div>
                        <div className="content">
                          <h4>Network Security</h4>
                          <p>
                            Firewall management, intrusion prevention systems, network segmentation, and secure VPN solutions for remote access.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-feature">
                        <div className="icon">
                          <i className="fas fa-graduation-cap"></i>
                        </div>
                        <div className="content">
                          <h4>Security Awareness Training</h4>
                          <p>
                            Employee training programs, phishing simulations, and security best practices to create a human firewall against social engineering.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="single-feature">
                        <div className="icon">
                          <i className="fas fa-clipboard-check"></i>
                        </div>
                        <div className="content">
                          <h4>Compliance & Auditing</h4>
                          <p>
                            Regular security assessments, penetration testing, compliance audits, and documentation for regulatory requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <div className="row g-4 pt-4">
                <div className="col-12">
                  <div className="lcnc-banner">
                    <h5>Protect Your Business Today</h5>
                    <p className="ecosystems">
                      Don&apos;t wait for a cyber attack to happen. Contact Omnia Services for a comprehensive security assessment and customized protection strategy that fits your business needs.
                    </p>
                    <div className="main-button mt-3">
                      <Link href="/contact">
                        <span className="theme-btn">Get Security Assessment</span>
                        <span className="arrow-btn">
                          <i className="icon-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
