import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, course, message } = body;

    if (!name || !phone || !course) {
      return NextResponse.json(
        { error: "Name, phone number, and course interest are required fields." },
        { status: 400 }
      );
    }

    const userEmail = process.env.GMAIL_USER || "kanhalawpointacademy@gmail.com";
    const appPassword = process.env.GMAIL_APP_PASSWORD;

    // Build Email Layout
    const mailOptions = {
      from: `"KLPA Website Enquiry" <${userEmail}>`,
      to: userEmail,
      replyTo: email || userEmail,
      subject: `New Admission Enquiry: ${name} (${course.toUpperCase()})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
          <div style="background-color: #0b132b; padding: 24px; text-align: center; color: #ffffff;">
            <h2 style="margin: 0; font-family: Georgia, serif; color: #d4af37;">Kanha Law Point Academy</h2>
            <p style="margin: 5px 0 0 0; font-size: 12px; letter-spacing: 1px; color: #cbd5e1; text-transform: uppercase;">New Student Enquiry Lead</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff; color: #1e293b;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 35%;">Candidate Name:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Phone Number:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="tel:${phone}" style="color: #0f172a; text-decoration: none; font-weight: bold;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Email Address:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${email || "Not Provided"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Course Interest:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #b45309;">${course.toUpperCase()}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message / Query:</td>
                <td style="padding: 10px 0; line-height: 1.5;">${message || "No additional message."}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
            Sent automatically from Kanha Law Point Academy Website Contact Form.
          </div>
        </div>
      `,
    };

    if (appPassword) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: userEmail,
          pass: appPassword,
        },
      });

      await transporter.sendMail(mailOptions);
    } else {
      console.warn("GMAIL_APP_PASSWORD is not set in environment variables. Email simulation logged.");
    }

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing enquiry email:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
