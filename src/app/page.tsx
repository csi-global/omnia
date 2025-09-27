import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeroSlider />

      {/* About section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold md:text-4xl">Welcome To Omnia</h2>
              <p className="mt-4 text-slate-600">
                A cloud consulting company which focuses on IT automation and bringing about digital
                transformation for businesses. With over a decade’s expertise, we believe in leveraging
                technology and innovation to build trust and foster long-lasting relationships with our customers.
              </p>
              <div className="mt-6">
                <Link href="/about" className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2 font-medium hover:bg-slate-50">
                  Read More
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                <img src="/assets/img/about/about-11.png" alt="About Omnia" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold md:text-4xl">Our Professional Services</h2>
            <p className="mt-3 text-slate-600">
              Information Technology is a rapidly evolving field that encompasses the study and application of
              computing technology to solve complex problems
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Cloud Assessment", href: "/services/cloud-assessment", img: "/assets/img/icon/01.png" },
              { label: "Cyber Security", href: "/services/cyber-security", img: "/assets/img/icon/02.svg" },
              { label: "SharePoint Development", href: "/services/sharepoint-development", img: "/assets/img/icon/03.png" },
              { label: "Digital Transformation", href: "/services/digital-transformation", img: "/assets/img/icon/04.svg" },
              { label: "IT Consulting", href: "/services/it-consulting", img: "/assets/img/icon/05.svg" },
              { label: "Cloud Migration", href: "/services/cloud-migration", img: "/assets/img/icon/06.svg" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex items-center gap-4">
                  <img src={s.img} alt="" className="h-10 w-10 opacity-80" />
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-700">{s.label}</h3>
                </div>
                <div className="mt-3 text-sm text-slate-600">Read More →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
