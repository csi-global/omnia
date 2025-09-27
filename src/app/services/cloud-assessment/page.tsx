import Link from "next/link";

export const metadata = { title: "Cloud Assessment | Omnia" };

export default function CloudAssessmentPage() {
  return (
    <div>
      <div className="relative bg-[url('/assets/img/breadcrumb.jpg')] bg-cover bg-center">
        <div className="bg-black/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white md:text-5xl">Cloud Assessment</h1>
            <ul className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li>Cloud Assessment</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-3xl">Why Cloud Assessment?</h2>
            <p className="mt-4 text-slate-700">
              Though moving to Cloud would seem to be a lucrative option to a lot of organizations but the decision is never
              easy to make. Cloud Readiness Assessment can help in making a rational decision by providing detailed analytics
              along with the cost-benefit analysis. The assessment provides insights by looking into both business as well
              technical aspects of a business, thus enabling organizations to appropriately evaluate cloud for them.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            <div>
              <img src="/assets/img/service/1.png" alt="Cloud Assessment" className="rounded-xl border border-slate-200" />
            </div>
            <div>
              <ul className="space-y-3 text-slate-700">
                {["Empowers organizations to make informed cloud strategy decisions", "Provides empirical data to support cloud strategy investments", "Establishes migration roadmap for cloud deployments", "Mitigates risk by highlighting the controls and processes that support or impede cloud computing goals", "Validates business cases and provides ROI analysis"].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-slate-900" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Assessment & Feasibility Study", copy: "Omnia offers a Cloud Assessment and Feasibility Service" },
              { title: "Cloud Platform Evaluation", copy: "Analyze and evaluate the performance of your Cloud Platform." },
              { title: "Readiness Assessment", copy: "Gain clarity regarding your decision on Adopting Cloud." },
              { title: "Cloud Architecture", copy: "Assemble components to build a connected platform." },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


