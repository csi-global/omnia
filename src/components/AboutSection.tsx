import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="about-section section-padding pb-0 fix">
      <div className="container">
        <div className="about-wrapper-11">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="about-content">
                <div className="section-title">
                  <h2>
                    Welcome To Omnia
                  </h2>
                </div>
                <p className="mt-3 mt-md-0">
                  A cloud consulting company
                  Which focuses on IT automation and bringing about digital transformation for businesses. With over a decade&apos;s expertise, we believe in leveraging technology and innovation to build trust and foster long-lasting relationships with our customers.
                </p>
                <div className="about-icon-items">
                  <div className="icon-items">
                    <div className="bg-[var(--theme)] rounded-full flex items-center justify-center p-2 size-20">
                      <Image src="/assets/img/about/about-icon-2.webp" alt="icon-img" width={44} height={44} />
                    </div>
                    <div className="content">
                      <h4> Vision</h4>
                      <p>
                        IT automation and bringing about digital transformation for businesses.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items">
                    <div className="bg-[var(--theme)] rounded-full flex items-center justify-center p-2 size-20">
                      <Image src="/assets/img/about/about-icon-3.webp" alt="icon-img" width={44} height={44} />
                    </div>
                    <div className="content">
                      <h4>Mission </h4>
                      <p>
                        get set to strengthen your IT backbone and fuel business innovation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-author">
                  <div className="main-button">
                    <a href="/about"> <span className="theme-btn"> Read More </span><span className="arrow-btn"><i className="icon-arrow-right"></i></span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="about-image-1 bg-cover bg-[url('/assets/img/about/about-11.webp')]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


