import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, contact, service, details } = await request.json();

        // Validate required fields
        if (!name || !contact || !service) {
            return NextResponse.json(
                { error: 'Name, contact, and service are required.' },
                { status: 400 }
            );
        }

        // Create transporter with Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_EMAIL,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: `"Portfolio Contact Form" <${process.env.SMTP_EMAIL}>`,
            to: process.env.SMTP_EMAIL,
            replyTo: contact.includes('@') ? contact : undefined,
            subject: `New Project Inquiry - ${service} - ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #c1121f; border-bottom: 2px solid #c1121f; padding-bottom: 10px;">
            New Project Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #666; border-bottom: 1px solid #eee; width: 140px;">Name</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #666; border-bottom: 1px solid #eee;">Email / WhatsApp</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${contact}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #666; border-bottom: 1px solid #eee;">Service</td>
              <td style="padding: 12px; border-bottom: 1px solid #eee;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; color: #666; vertical-align: top;">Details</td>
              <td style="padding: 12px;">${details || 'No details provided.'}</td>
            </tr>
          </table>
          <p style="margin-top: 30px; font-size: 12px; color: #999; text-align: center;">
            Sent from Praveen Thangavel Portfolio
          </p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again later.' },
            { status: 500 }
        );
    }
}
