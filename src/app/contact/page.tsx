"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  service: z.string().optional(),
  date: z.string().optional(),
  time: z.string().optional(),
  message: z.string().min(5, "Message is required"),
});

type FormValues = z.infer<typeof schema>;

export const metadata = {
  title: "Contact | Omnia",
};

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) reset();
  };

  return (
    <div>
      <div className="relative bg-[url('/assets/img/breadcrumb.jpg')] bg-cover bg-center">
        <div className="bg-black/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold text-white md:text-5xl">Contact</h1>
            <ul className="mt-4 flex items-center gap-2 text-sm text-white/90">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <div className="mt-6 space-y-6 text-slate-700">
                  <div>
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 10.5V6a4 4 0 0 0-8 0v4.5" /><rect width="20" height="12" x="2" y="10.5" rx="2" /><path d="M6 19h0" /></svg>
                      <h5 className="font-semibold">Address</h5>
                    </div>
                    <p className="mt-2 text-sm">2 Wellington Place , Leeds , West Yorkshire, LS1 4AP , United Kingdom</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.12.81.3 1.6.54 2.36a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 5 5l1.72-1.09a2 2 0 0 1 2.11-.45c.76.24 1.55.42 2.36.54A2 2 0 0 1 22 16.92z" /></svg>
                      <h5 className="font-semibold">Number</h5>
                    </div>
                    <p className="mt-2 text-sm"><a className="text-slate-900 hover:underline" href="tel:+44-1133 662035">+44-1133 662035</a></p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z" /><path d="m22 6-10 7L2 6" /></svg>
                      <h5 className="font-semibold">E-mail</h5>
                    </div>
                    <p className="mt-2 text-sm"><a className="text-slate-900 hover:underline" href="mailto:info@omniaservices.co.uk">info@omniaservices.co.uk</a></p>
                  </div>
                </div>
                <div className="mt-6 overflow-hidden rounded-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.6521402945023!2d-1.561486923383253!3d53.795678572423064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795ea3c379aaab%3A0x1cc60b78e62d14d4!2sRegus%20House%2C%202%20Wellington%20Pl%2C%20Leeds%20LS1%204AP%2C%20UK!5e0!3m2!1sen!2sin!4v1749285652748!5m2!1sen!2sin"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <h2 className="text-2xl font-semibold">Get In Touch</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
                  <div>
                    <input {...register("name")} placeholder="Your Name" className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300" />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register("email")} placeholder="Email" className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300" />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                  <div>
                    <select {...register("service")} className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300">
                      <option value="">Select Service</option>
                      <option>Cloud Assessment</option>
                      <option>Cyber Security</option>
                      <option>SharePoint Development</option>
                      <option>Digital Transformation</option>
                    </select>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input {...register("date")} placeholder="mm/dd/yyyy" className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300" />
                    <input {...register("time")} placeholder="Time" className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300" />
                  </div>
                  <div>
                    <textarea {...register("message")} placeholder="Type Here" rows={5} className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:ring-2 focus:ring-slate-300" />
                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting} className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 font-medium text-white hover:bg-slate-800 disabled:opacity-50">
                    <span>{isSubmitting ? "Sending..." : "Send Now"}</span>
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2L11 13" />
                      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                  </button>
                  {isSubmitSuccessful && (
                    <p className="text-sm text-green-600">Thanks! Your message has been sent.</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


