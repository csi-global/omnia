import Link from "next/link";

export const metadata = { title: "Cloud Migration | Omnia" };

export default function CloudMigrationPage() {
  return (
    <div>
      <div className="relative bg-[url('/assets/img/breadcrumb.jpg')] bg-cover bg-center">
        <div className="bg-black/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white md:text-5xl">Cloud Migration</h1>
            <ul className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li>Cloud Migration</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-3xl">Cloud Migration</h2>
            <p className="mt-4 text-slate-700">
              Cloud Migration involves moving any workload from an on-premises environment, hosting facility, or other public
              cloud. This includes migration of applications, websites, databases, storage, physical or virtual servers, or
              entire data centers to the cloud.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            <img src="/assets/img/service/6.png" alt="Cloud Migration" className="rounded-xl border border-slate-200" />
            <div>
              <h3 className="text-xl font-semibold">WHY CLOUD MIGRATION?</h3>
              <p className="mt-3 text-slate-700">
                With a Cloud implementation, you can set up a virtual office to give you the flexibility of connecting to
                your business anywhere, any time. With the growing number of web-enabled devices used in today’s business
                environment, access to your data is even easier.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Assessment & Feasibility Study" },
              { title: "Cloud Platform Evaluation" },
              { title: "Readiness Assessment" },
              { title: "Cloud Transformation Roadmap" },
              { title: "Cloud Architecture" },
              { title: "Cloud Governance" },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{c.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


