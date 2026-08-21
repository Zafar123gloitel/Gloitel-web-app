import FormData from 'form-data';
import Mailgun from 'mailgun.js';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, country, companyType, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !country || !companyType || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'All fields are required',
        }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // Validate env vars
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_DOMAIN || !process.env.EMAIL_FORWARD) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Email service is not configured',
        }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
    }

    // Initialize Mailgun
    const mailgun = new Mailgun(FormData);

    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    });

    await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Website Contact <sales@${process.env.MAILGUN_DOMAIN}>`,
      to: [process.env.EMAIL_FORWARD],

      subject: `New Contact Form Submission from ${firstName} ${lastName}`,

      text: `
New Website Enquiry.                           

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Country: ${country}
Company Type: ${companyType}

Message:
${message}
      `,

      'h:Reply-To': email,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Email sent successfully',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        message: (error as Error)?.message || 'Failed to send email',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }
}
