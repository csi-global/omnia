import Link from "next/link";

type Service = {
  iconClass: string;
  title: string;
  href: string;
  description: string;
};

const services: Service[] = [
  {
    iconClass: "icon-01",
    title: "Cloud Assessment",
    href: "/cloud-assessment",
    description:
      "Omnia offers a Cloud Assessment and Feasibility Service wherein you can decide if moving to Cloud",
  },
  {
    iconClass: "icon-02",
    title: "Cyber Security",
    href: "/cyber-security",
    description:
      "Omina uses the latest Cyber Security technologies, processes and measures designed to protect your systems,",
  },
  {
    iconClass: "icon-03",
    title: "SharePoint Development",
    href: "/sharepoint-development",
    description:
      "Microsoft SharePoint is one of the most popular Web Application Platforms for organizations to share,",
  },
  {
    iconClass: "icon-04",
    title: "Digital Transformation",
    href: "/digital-transformation",
    description:
      "In Omina digital technology firm providing digital transformation and product engineering services",
  },
  {
    iconClass: "icon-05",
    title: "IT Consulting",
    href: "/it-consulting",
    description:
      "IT consulting services are advisory services that help clients assess different technology strategies",
  },
  {
    iconClass: "icon-05",
    title: "Cloud migration",
    href: "/cloud-migration",
    description:
      "Cloud Migration involves moving any workload from an on-premises environment,or other public cloud.",
  },
];

export default function ServicesSection() {
  return (
    <section className="service-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h2>Our Professional Services </h2>
          <p className="mt-3">
            Information Technology is a rapidly evolving field that encompasses the study and <br /> application of computing technology to solve complex problems
          </p>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div key={service.title} className={`col-xl-4 col-lg-6 col-md-6`}>
              <div className="service-box-items">
                <div className="icon">
                  <i className={service.iconClass}></i>
                </div>
                <div className="content">
                  <h3>
                    <Link href={service.href}>{service.title}</Link>
                  </h3>
                  <p>{service.description}</p>
                  <Link href={service.href} className="link-btn">
                    Read More <span><i className="icon-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


