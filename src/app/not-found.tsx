import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden section-padding fix">
      {/* Background pattern and glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(closest-side, rgba(225, 29, 46, 0.12), rgba(225, 29, 46, 0) 80%), radial-gradient(closest-side, rgba(56, 189, 248, 0.12), rgba(56, 189, 248, 0) 80%)",
          backgroundSize: "1200px 1200px, 900px 900px",
          backgroundPosition: "-20% -20%, 120% 20%",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.55]"
        style={{
          backgroundImage:
            "radial-gradient(#e5e7eb 1px, transparent 1px), radial-gradient(#f3f4f6 1px, transparent 1px)",
          backgroundSize: "28px 28px, 56px 56px",
          backgroundPosition: "0 0, 14px 14px",
        }}
      />

      <div className="container">
        <div className="min-h-[70vh] md:min-h-[78vh] grid place-items-center py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="relative inline-block">
              <span className="absolute -inset-2 -z-10 blur-2xl opacity-60"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, rgba(225,29,46,0.25), rgba(168,85,247,0.25), rgba(14,165,233,0.25), rgba(225,29,46,0.25))",
                }}
              />
              <h1 className="text-[84px] md:text-[140px] leading-none font-extrabold tracking-tight bg-gradient-to-r from-[var(--theme)] via-fuchsia-500 to-sky-500 bg-clip-text text-transparent select-none">
                404
              </h1>
            </div>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">Lost in the cloud</h2>
            <p className="mt-3 text-base md:text-lg text-[color:var(--muted-foreground)]">
              The page you’re looking for drifted into the stratosphere. Let&apos;s guide you back to something amazing.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href="/" className="main-button">
                <span className="theme-btn">Take me home</span>
                <span className="arrow-btn"><i className="icon-arrow-right" /></span>
              </Link>
              <Link href="/digital-transformation" className="main-button secondary">
                <span className="theme-btn">Explore services</span>
                <span className="arrow-btn"><i className="icon-arrow-right" /></span>
              </Link>
              <Link href="/contact" className="main-button secondary">
                <span className="theme-btn">Contact support</span>
                <span className="arrow-btn"><i className="icon-arrow-right" /></span>
              </Link>
            </div>

            <div className="mt-10">
              <div className="text-xs uppercase tracking-wider text-[color:var(--muted-foreground)] mb-3">Popular destinations</div>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  ["/cloud-migration", "Cloud Migration"],
                  ["/msd365", "MSD365"],
                  ["/vision-plus", "Vision Plus"],
                  ["/smart-investigate", "Smart Investigate"],
                  ["/career", "Careers"],
                ].map(([href, label]) => (
                  <Link
                    key={href}
                    href={href}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-3 py-1 text-sm hover:border-[var(--theme)] hover:text-[var(--theme)] transition-colors"
                  >
                    <i className="fas fa-compass" /> {label}
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-sm">
                Still stuck? <a className="underline hover:no-underline" href="mailto:info@omniaservices.co.uk">Report a broken link</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating decor */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/globe.svg"
          alt=""
          className="hidden md:block absolute top-[12%] left-[6%] w-16 opacity-60 animate-bounce"
          style={{ animationDuration: "3.5s" }}
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          src="/product.svg"
          alt=""
          className="hidden md:block absolute bottom-[14%] right-[8%] w-16 opacity-60 animate-pulse"
          style={{ animationDuration: "2.8s" }}
          width={0}
          height={0}
          sizes="100vw"
        />
        <Image
          src="/window.svg"
          alt=""
          className="hidden md:block absolute top-[26%] right-[20%] w-14 opacity-60 animate-bounce"
          style={{ animationDuration: "4.2s" }}
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
    </section>
  );
}


