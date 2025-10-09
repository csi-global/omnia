import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
  return /^(?:[a-zA-Z0-9_'^&+%`{}~!-]+(?:\.[a-zA-Z0-9_'^&+%`{}~!-]+)*|"[^"]+")@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(
    email
  );
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const service = String(form.get('service') || '').trim();
    const message = String(form.get('message') || '').trim();
    const company = String(form.get('company') || ''); // honeypot

    // Honeypot: treat as success but do nothing
    if (company) {
      return NextResponse.redirect(new URL('/contact?success=1', request.url), 303);
    }

    if (!name || !email || !message) {
      return NextResponse.redirect(new URL('/contact?error=missing', request.url), 303);
    }
    if (!isValidEmail(email)) {
      return NextResponse.redirect(new URL('/contact?error=email', request.url), 303);
    }
    if (message.length > 3000) {
      return NextResponse.redirect(new URL('/contact?error=toolong', request.url), 303);
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!to || !from || !process.env.RESEND_API_KEY) {
      return NextResponse.redirect(new URL('/contact?error=server', request.url), 303);
    }

    const safeService = service || 'Not specified';
    const html = `
      <div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${safeService}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    await resend.emails.send({
      from: `Omnia Services <${from}>`,
      to,
      subject: `New contact form: ${name}`,
      // @ts-expect-error: resend supports reply_to
      reply_to: email,
      html,
    });

    return NextResponse.redirect(new URL('/contact?success=1', request.url), 303);
  } catch {
    return NextResponse.redirect(new URL('/contact?error=server', request.url), 303);
  }
}
