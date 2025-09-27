import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-200 bg-slate-50">
      <div className="absolute inset-0 pointer-events-none select-none">
        <img src="/assets/img/footer-color.png" alt="" className="absolute left-0 top-0 h-24 w-auto opacity-30" />
        <img src="/assets/img/footer-color-2.png" alt="" className="absolute right-0 bottom-0 h-24 w-auto opacity-30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="inline-flex">
            <img src="/assets/img/logo/black-logo.png" alt="Omnia" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" aria-label="Facebook" className="hover:text-slate-900"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-slate-900"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-slate-900"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram" className="hover:text-slate-900"><FaInstagram /></a>
          </div>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">Professional Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li><Link href="/services/cloud-assessment" className="hover:text-slate-900">Cloud Assessment</Link></li>
              <li><Link href="/services/cyber-security" className="hover:text-slate-900">Cyber Security</Link></li>
              <li><Link href="/services/sharepoint-development" className="hover:text-slate-900">SharePoint Development</Link></li>
              <li><Link href="/services/digital-transformation" className="hover:text-slate-900">Digital Transformation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Managed Service</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li><Link href="/managed/cloud-desk" className="hover:text-slate-900">Managed Cloud Desk</Link></li>
              <li><Link href="/managed/microsoft-365" className="hover:text-slate-900">Managed Microsoft 365</Link></li>
              <li><Link href="/managed/microsoft-azure" className="hover:text-slate-900">Managed Microsoft Azure</Link></li>
              <li><Link href="/managed/surface-as-a-service" className="hover:text-slate-900">Surface –As-A-Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>
                Email
                <div>
                  <a className="text-slate-900 hover:underline" href="mailto:info@omniaservices.co.uk">info@omniaservices.co.uk</a>
                </div>
              </li>
              <li>
                Phone
                <div>
                  <a className="text-slate-900 hover:underline" href="tel:+44-1133 662035">+44-1133 662035</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 md:flex-row">
          <p>© All Copyright 2025 by <Link href="/" className="hover:underline">Omnia</Link></p>
          <ul className="flex items-center gap-4">
            <li><Link href="/terms" className="hover:text-slate-900">Terms &amp; Condition</Link></li>
            <li><Link href="/privacy" className="hover:text-slate-900">Privacy Policy</Link></li>
            <li><Link href="/contact" className="hover:text-slate-900">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}


