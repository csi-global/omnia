import Link from "next/link";

export const metadata = { title: "SharePoint Development | Omnia" };

export default function SharePointDevelopmentPage() {
  return (
    <div>
      <div className="relative bg-[url('/assets/img/breadcrumb.jpg')] bg-cover bg-center">
        <div className="bg-black/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white md:text-5xl">SharePoint Development</h1>
            <ul className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li>SharePoint Development</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img src="/assets/img/service/3.png" alt="SharePoint" className="rounded-xl border border-slate-200" />
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">SharePoint Development</h2>
              <p className="mt-3 text-slate-700">
                Microsoft SharePoint is one of the most popular Web Application Platforms for organizations to share, cooperate
                and recover information in an influential way. Built on robust Microsoft technologies, it is a perfect solution
                for companies that have a noteworthy investment in Microsoft technologies, allowing business apps to be reinforced
                by a common technical organization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


