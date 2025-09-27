import Link from "next/link";

export const metadata = { title: "Cyber Security and Data protection | Omnia" };

export default function CyberSecurityPage() {
  return (
    <div>
      <div className="relative bg-[url('/assets/img/breadcrumb.jpg')] bg-cover bg-center">
        <div className="bg-black/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white md:text-5xl">Cyber Security and Data protection</h1>
            <ul className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li>Cyber Security</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img src="/assets/img/service/2.png" alt="Cyber Security" className="rounded-xl border border-slate-200" />
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Top Cyber Security Threats</h2>
              <p className="mt-3 text-slate-700">
                Omnia uses the latest Cyber Security technologies, processes and measures designed to protect your systems, networks and data from cyber crimes.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                {["Social Engineering", "Malware", "Phishing", "Ransomware"].map((x) => (
                  <li key={x} className="flex items-center gap-3">
                    <span className="inline-block h-2 w-2 rounded-full bg-slate-900" />
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


