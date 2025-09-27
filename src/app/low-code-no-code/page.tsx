import Link from "next/link";

export const metadata = { title: "Low Code / No Code | Omnia" };

export default function LowCodeNoCodePage() {
  return (
    <div>
      <div className="relative bg-[url('/assets/img/breadcrumb.jpg')] bg-cover bg-center">
        <div className="bg-black/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white md:text-5xl">Low Code / No Code</h1>
            <ul className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li>Low Code / No Code</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-3xl">Design, build, and automate at enterprise scale</h2>
            <p className="mt-4 text-slate-700">
              Accelerate delivery with Low Code / No Code platforms while maintaining enterprise-grade governance and security.
              We help you modernize processes, digitize workflows, and connect systems across Pega, ServiceNow, and Microsoft Power Platform + Dynamics 365.
            </p>
          </div>

          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            <img src="/assets/img/service/3.png" alt="LCNC" className="rounded-xl border border-slate-200" />
            <ul className="space-y-3 text-slate-700">
              {["Digital Process Automation (DPA) and workflow orchestration", "Citizen development with guardrails and governance", "AI decisioning, RPA, process mining, and integration", "Cloud-native, secure, scalable, compliant"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-slate-900" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}


