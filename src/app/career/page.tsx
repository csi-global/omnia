import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers | Omnia Services",
  description: "Join Omnia Services and be part of a dynamic team driving digital transformation. Explore exciting career opportunities in cloud consulting, IT automation, and technology innovation.",
  robots: "index,follow",
  alternates: {
    canonical: "https://omniaservices.co.uk/career"
  },
  openGraph: {
    title: "Careers | Omnia Services",
    description: "Join Omnia Services and be part of a dynamic team driving digital transformation. Explore exciting career opportunities in cloud consulting, IT automation, and technology innovation.",
    type: "website",
    url: "https://omniaservices.co.uk/career",
    images: ["https://omniaservices.co.uk/assets/img/about/about-11.webp"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Omnia Services",
    description: "Join Omnia Services and be part of a dynamic team driving digital transformation. Explore exciting career opportunities in cloud consulting, IT automation, and technology innovation.",
    images: ["https://omniaservices.co.uk/assets/img/about/about-11.webp"]
  }
};

export default function CareerPage() {
  return (
    <div>
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: "url('/assets/img/breadcrumb.webp')" }}
      >
        <div className="container">
          <div className="page-heading">
            <h1>Careers</h1>
            <ul className="breadcrumb-items">
              <li><Link href="/">Home</Link></li>
              <li><i className="fas fa-chevron-right"></i></li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Career Section */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>Join Our Team</h2>
                <p>
                  Be part of a dynamic team that&apos;s shaping the future of digital transformation. At Omnia Services, we offer exciting career opportunities for passionate professionals who want to make a real impact in the technology industry.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 pt-4">
            <div className="col-lg-4 col-md-6">
              <div className="career-benefit-item text-center">
                <div className="icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Growth Opportunities</h4>
                <p>
                  Continuous learning and professional development opportunities with access to cutting-edge technologies and industry certifications.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="career-benefit-item text-center">
                <div className="icon">
                  <i className="fas fa-users"></i>
                </div>
                <h4>Collaborative Culture</h4>
                <p>
                  Work in a supportive environment where collaboration, innovation, and teamwork are valued and encouraged at every level.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="career-benefit-item text-center">
                <div className="icon">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h4>Work-Life Balance</h4>
                <p>
                  Flexible working arrangements, remote work options, and comprehensive benefits package to support your personal and professional life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>Current Openings</h2>
                <p>
                  Explore our current job opportunities and find the perfect role to advance your career in technology and digital transformation.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 pt-4">
            <div className="col-lg-6">
              <div className="job-posting-item">
                <div className="job-header">
                  <h4>Senior Cloud Solutions Architect</h4>
                  <div className="job-meta">
                    <span className="location"><i className="fas fa-map-marker-alt"></i> Leeds, UK</span>
                    <span className="type"><i className="fas fa-clock"></i> Full-time</span>
                  </div>
                </div>
                <div className="job-content">
                  <p>
                    Lead the design and implementation of cloud solutions for enterprise clients. Work with AWS, Azure, and Google Cloud platforms to deliver scalable, secure, and cost-effective solutions.
                  </p>
                  <div className="job-requirements">
                    <h5>Requirements:</h5>
                    <ul>
                      <li>5+ years cloud architecture experience</li>
                      <li>Certified in AWS/Azure/GCP</li>
                      <li>Strong communication skills</li>
                      <li>Experience with DevOps practices</li>
                    </ul>
                  </div>
                </div>
                <div className="job-footer">
                  <Link href="/contact" className="apply-btn">Apply Now</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="job-posting-item">
                <div className="job-header">
                  <h4>Microsoft 365 Administrator</h4>
                  <div className="job-meta">
                    <span className="location"><i className="fas fa-map-marker-alt"></i> Remote</span>
                    <span className="type"><i className="fas fa-clock"></i> Full-time</span>
                  </div>
                </div>
                <div className="job-content">
                  <p>
                    Manage and optimize Microsoft 365 environments for our clients. Provide technical support, security configuration, and user training to maximize productivity and collaboration.
                  </p>
                  <div className="job-requirements">
                    <h5>Requirements:</h5>
                    <ul>
                      <li>3+ years M365 administration</li>
                      <li>Microsoft 365 certifications</li>
                      <li>Exchange Online experience</li>
                      <li>PowerShell scripting skills</li>
                    </ul>
                  </div>
                </div>
                <div className="job-footer">
                  <Link href="/contact" className="apply-btn">Apply Now</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="job-posting-item">
                <div className="job-header">
                  <h4>Cyber Security Consultant</h4>
                  <div className="job-meta">
                    <span className="location"><i className="fas fa-map-marker-alt"></i> Leeds, UK</span>
                    <span className="type"><i className="fas fa-clock"></i> Full-time</span>
                  </div>
                </div>
                <div className="job-content">
                  <p>
                    Help organizations strengthen their security posture through comprehensive assessments, security strategy development, and implementation of best practices.
                  </p>
                  <div className="job-requirements">
                    <h5>Requirements:</h5>
                    <ul>
                      <li>4+ years security experience</li>
                      <li>CISSP or similar certification</li>
                      <li>Risk assessment experience</li>
                      <li>Compliance knowledge (GDPR, ISO 27001)</li>
                    </ul>
                  </div>
                </div>
                <div className="job-footer">
                  <Link href="/contact" className="apply-btn">Apply Now</Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="job-posting-item">
                <div className="job-header">
                  <h4>SharePoint Developer</h4>
                  <div className="job-meta">
                    <span className="location"><i className="fas fa-map-marker-alt"></i> Remote</span>
                    <span className="type"><i className="fas fa-clock"></i> Contract</span>
                  </div>
                </div>
                <div className="job-content">
                  <p>
                    Develop custom SharePoint solutions using SPFx, Power Platform, and modern web technologies. Create workflows, custom web parts, and integrations.
                  </p>
                  <div className="job-requirements">
                    <h5>Requirements:</h5>
                    <ul>
                      <li>3+ years SharePoint development</li>
                      <li>SPFx and React experience</li>
                      <li>Power Platform knowledge</li>
                      <li>TypeScript/JavaScript skills</li>
                    </ul>
                  </div>
                </div>
                <div className="job-footer">
                  <Link href="/contact" className="apply-btn">Apply Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>Why Work With Us</h2>
                <p>
                  Discover the benefits and perks that make Omnia Services a great place to build your career in technology.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 pt-4">
            <div className="col-lg-3 col-md-6">
              <div className="benefit-item text-center">
                <div className="icon">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h4>Learning & Development</h4>
                <p>
                  Access to training programs, certifications, conferences, and continuous learning opportunities to advance your skills.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="benefit-item text-center">
                <div className="icon">
                  <i className="fas fa-home"></i>
                </div>
                <h4>Flexible Working</h4>
                <p>
                  Remote work options, flexible hours, and hybrid working arrangements to support your work-life balance.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="benefit-item text-center">
                <div className="icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h4>Health & Wellness</h4>
                <p>
                  Comprehensive health insurance, wellness programs, and employee assistance programs to support your wellbeing.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="benefit-item text-center">
                <div className="icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Career Growth</h4>
                <p>
                  Clear career progression paths, mentorship programs, and opportunities to work on cutting-edge projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>Application Process</h2>
                <p>
                  Our streamlined application process makes it easy to join our team and start your journey with Omnia Services.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 pt-4">
            <div className="col-lg-3 col-md-6">
              <div className="process-step text-center">
                <div className="step-number">1</div>
                <h4>Submit Application</h4>
                <p>
                  Send us your CV and cover letter through our contact form or email address.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-step text-center">
                <div className="step-number">2</div>
                <h4>Initial Review</h4>
                <p>
                  Our HR team reviews your application and qualifications within 48 hours.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-step text-center">
                <div className="step-number">3</div>
                <h4>Interview Process</h4>
                <p>
                  Participate in technical and cultural fit interviews with our team members.
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="process-step text-center">
                <div className="step-number">4</div>
                <h4>Welcome Aboard</h4>
                <p>
                  Join our team and begin your exciting career journey with Omnia Services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="row g-4 pt-4">
        <div className="col-12">
          <div className="lcnc-banner">
            <h5>Ready to Join Our Team?</h5>
            <p className="ecosystems">
              Don&apos;t see a position that matches your skills? We&apos;re always looking for talented individuals. Send us your CV and let us know how you can contribute to our team&apos;s success.
            </p>
            <div className="main-button mt-3">
              <Link href="/contact">
                <span className="theme-btn">Send Your CV</span>
                <span className="arrow-btn">
                  <i className="icon-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
