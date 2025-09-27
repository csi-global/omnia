import Link from "next/link";

export const metadata = { title: "Digital Transformation | Omnia" };

export default function DigitalTransformationPage() {
  return (
    <div>
      <div className="relative bg-[url('/assets/img/breadcrumb.jpg')] bg-cover bg-center">
        <div className="bg-black/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white md:text-5xl">Digital Transformation</h1>
            <ul className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li>Digital Transformation</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img src="/assets/img/service/3.png" alt="Digital Transformation" className="rounded-xl border border-slate-200" />
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Modernize and Innovate</h2>
              <p className="mt-3 text-slate-700">
                Omnia is a digital technology firm providing digital transformation and product engineering services to ISVs,
                Consumer Internet, and large enterprises across the globe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


