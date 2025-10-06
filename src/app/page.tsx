import AboutSection from "@/components/AboutSection";
import HeroSlider from "@/components/HeroSlider";
import ManagedServicesCarousel from "@/components/ManagedServicesCarousel";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ManagedServicesCarousel />
      <MarqueeSection />
      {/* Merged from About page: Core Values */}
      <section id="core-values" className="section-padding fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>Our Core Values</h2>
                <p>
                  We are committed to delivering exceptional value through our core principles that guide every project and client interaction.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 pt-4">
            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="icon">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="content">
                  <h4>Innovation</h4>
                  <p>
                    We continuously embrace cutting-edge technologies and innovative solutions to drive digital transformation and business growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <div className="content">
                  <h4>Trust & Reliability</h4>
                  <p>
                    Building long-lasting relationships through transparent communication, reliable delivery, and consistent results that exceed expectations.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="single-feature">
                <div className="icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="content">
                  <h4>Excellence</h4>
                  <p>
                    Delivering superior quality solutions with attention to detail, best practices, and continuous improvement in everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merged from About page: Why Choose Us */}
      <section id="why-choose-us" className="section-padding bg-light fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-title text-center">
                <h2>Why Choose Omnia Services?</h2>
                <p>
                  With over a decade of experience in cloud consulting and IT automation, we bring expertise, reliability, and innovation to every project.
                </p>
              </div>
            </div>
          </div>

          <div className="row g-4 pt-4">
            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <div className="icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <h4>Cloud Expertise</h4>
                <p>Deep knowledge of AWS, Azure, and Google Cloud platforms with proven migration and optimization strategies.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <div className="icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Security First</h4>
                <p>Comprehensive cyber security solutions and compliance frameworks to protect your business assets and data.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <div className="icon">
                  <i className="fas fa-rocket"></i>
                </div>
                <h4>Digital Transformation</h4>
                <p>End-to-end digital transformation services using low-code/no-code platforms and automation technologies.</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="choose-item text-center">
                <div className="icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h4>24/7 Support</h4>
                <p>Round-the-clock managed services and support to ensure your systems run smoothly and efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact-cta" className="cta-section section-padding bg-[var(--header)]">
        <div className="container">
          <div className="row align-items-center gap-8">
            <div className="col-lg-8">
              <div className="section-title text-white">
                <h2 className="!text-[var(--theme)]">Ready to accelerate your digital transformation?</h2>
                <p className="mt-3">
                  Speak with Omnia&apos;s experts about cloud migration, automation, cyber security, and
                  ongoing managed services tailored to your business.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex gap-3 justify-content-lg-end mt-4 mt-lg-0">
                <a href="/contact" className="main-button">
                  <span className="theme-btn">Contact Us</span>
                  <span className="arrow-btn"><i className="icon-arrow-right"></i></span>
                </a>
                <a href="/digital-transformation" className="main-button secondary">
                  <span className="theme-btn">Explore Services</span>
                  <span className="arrow-btn"><i className="icon-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
