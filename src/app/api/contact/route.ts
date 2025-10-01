// Contact Form API Route
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message, preferredDate } = await request.json();

    // Validation
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email to Hash Haven team
    const teamEmailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: process.env.CONTACT_EMAIL || 'info@hashhavenltd.com' }],
          subject: `New ${service} Booking Request from ${name}`,
        }],
        from: { email: process.env.FROM_EMAIL || 'noreply@hashhavenltd.com' },
        content: [{
          type: 'text/html',
          value: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #ec4899;">New Service Request - Hash Haven</h2>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              </div>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #374151; margin-top: 0;">Service Request</h3>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Preferred Date:</strong> ${preferredDate || 'Flexible'}</p>
                <p><strong>Message:</strong></p>
                <p style="background: white; padding: 15px; border-radius: 4px;">${message}</p>
              </div>
              <p style="color: #6b7280; font-size: 14px;">
                This message was sent through the Hash Haven contact form.
              </p>
            </div>
          `,
        }],
      }),
    });

    if (!teamEmailResponse.ok) {
      throw new Error('Failed to send team notification');
    }

    // Send confirmation email to customer
    const customerEmailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: email }],
          subject: 'Thank you for contacting Hash Haven',
        }],
        from: { email: process.env.FROM_EMAIL || 'noreply@hashhavenltd.com' },
        content: [{
          type: 'text/html',
          value: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #ec4899;">Thank You, ${name}!</h2>
              <p>We've received your request for <strong>${service}</strong> and will get back to you within 24 hours.</p>
              <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h3 style="color: #374151; margin-top: 0;">Your Request Summary</h3>
                <p><strong>Service:</strong> ${service}</p>
                <p><strong>Preferred Date:</strong> ${preferredDate || 'Flexible'}</p>
                <p><strong>Message:</strong> ${message}</p>
              </div>
              <p>Best regards,<br>The Hash Haven Team</p>
            </div>
          `,
        }],
      }),
    });

    if (!customerEmailResponse.ok) {
      console.warn('Failed to send customer confirmation');
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully! We\'ll get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}