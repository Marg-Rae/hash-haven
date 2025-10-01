// Contact Form API Integration Example - Using SendGrid

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message, service } = await request.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using SendGrid
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: process.env.SENDGRID_TO_EMAIL }],
          subject: `New Contact Form Submission from ${name}`,
        }],
        from: { email: process.env.SENDGRID_FROM_EMAIL },
        content: [{
          type: 'text/html',
          value: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service:</strong> ${service || 'General Inquiry'}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        }],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    );
  }
}