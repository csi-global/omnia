import Link from "next/link";

export const metadata = { title: "IT Consulting | Omnia" };

export default function ITConsultingPage() {
  return (
    <div>
      <div className="relative bg-[url('/assets/img/breadcrumb.jpg')] bg-cover bg-center">
        <div className="bg-black/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white md:text-5xl">IT Consulting</h1>
            <ul className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li>IT Consulting</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img src="/assets/img/service/5.png" alt="IT Consulting" className="rounded-xl border border-slate-200" />
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Advisory & Strategy</h2>
              <p className="mt-3 text-slate-700">
                IT consulting services help clients assess technology strategies and align solutions that drive business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


