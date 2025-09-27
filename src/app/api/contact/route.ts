import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // In a real app, forward to your email service or CRM here.
    // e.g., sendgrid/mail, nodemailer, hubspot, etc.
    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
  }
}
