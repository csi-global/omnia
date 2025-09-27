import Link from "next/link";

export const metadata = {
  title: "About Us | Omnia",
};

export default function AboutPage() {
  return (
    <div>
      <div className="relative bg-[url('/assets/img/breadcrumb.jpg')] bg-cover bg-center">
        <div className="bg-black/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white md:text-5xl">About Us</h1>
            <ul className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold md:text-4xl">Welcome To Omnia</h2>
              <p className="mt-4 text-slate-600">
                A cloud consulting company which focuses on IT automation and bringing about digital transformation for
                businesses. With over a decade’s expertise, we believe in leveraging technology and innovation to build
                trust and foster long-lasting relationships with our customers.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <div className="flex items-start gap-3">
                    <img src="/assets/img/about/about-icon-2.png" alt="Vision" className="h-10 w-10" />
                    <div>
                      <h4 className="font-semibold">Vision</h4>
                      <p className="text-slate-600">IT automation and bringing about digital transformation for businesses.</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start gap-3">
                    <img src="/assets/img/about/about-icon-3.png" alt="Mission" className="h-10 w-10" />
                    <div>
                      <h4 className="font-semibold">Mission</h4>
                      <p className="text-slate-600">Get set to strengthen your IT backbone and fuel business innovation.</p>
                    </div>
                  </div>
                </div>
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
    </div>
  );
}


