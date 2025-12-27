import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, interest, message } = await request.json()

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "webmastersmma@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service Interest:</strong> ${interest || "Not specified"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><em>Reply directly to ${email} or use the contact information in the message.</em></p>
      `,
      replyTo: email,
    })

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Received Your Message - Tinzwave",
      html: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and appreciate your interest in Tinzwave. Our team will review your inquiry and get back to you shortly.</p>
        <h3>Your Message Details:</h3>
        <p><strong>Service Interest:</strong> ${interest || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>If you need to reach us urgently, you can:</p>
        <ul>
          <li>Call us: +234 916 105 2706</li>
          <li>Email: info@tinzwave.com</li>
          <li>Visit our office in Surulere, Lagos</li>
        </ul>
        <p>Best regards,<br>The Tinzwave Team</p>
      `,
    })

    return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
