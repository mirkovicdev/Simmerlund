import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Define the expected structure for the request body
type EmailRequestBody = {
  name: string;
  email: string;
  phone: string;
  otherInfo: string;
  selectedItemsWithLabels?: Array<{ id: string; label: string }>; // Make it optional with '?'
  age: string;
  height: string;
  weight: string;
  sovn: string;
  metode: string;
  tidspunkt: string;
  sted: string;
};

// Create a nodemailer transporter with your SMTP configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_PORT === '465', // true for port 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: Request) {
  try {
    // Parse the request body and ensure it matches the expected type
    const { name, email, phone, otherInfo, selectedItemsWithLabels, age, height, weight, sovn, metode, tidspunkt, sted  }: EmailRequestBody = await req.json();

    // Ensure selectedItemsWithLabels is an array before attempting to map over it
    const selectedItemsText = Array.isArray(selectedItemsWithLabels)
      ? selectedItemsWithLabels.map(item => item.label).join(', ')
      : 'No items selected';

    // Set up the email options, including the selected items
    const mailOptions = {
      from: process.env.SMTP_USER, // Email address you are sending from
      to: process.env.RECIPIENT_EMAIL, // Recipient's email address
      subject: `${name} er interessert i coaching!`,
      text: `
        Navn: ${name}\n
        Email: ${email}\n
        Tlf: ${phone}\n
        Mål: ${selectedItemsText} ${otherInfo}\n
        Alder: ${age}\n
        Høyde: ${height}\n
        Vekt: ${weight}\n
        Søvn: ${sovn}\n
        Treningsmetode: ${metode}\n
        Treningstider: ${tidspunkt}\n
        Treningsted: ${sted}\n`,
        
      html: `
        <p><strong>Navn:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tlf:</strong> ${phone}</p>
        <p><strong>Mål:</strong> ${selectedItemsText} ${otherInfo}</p>
        <p><strong>Alder:</strong> ${age}</p>
        <p><strong>Høyde:</strong> ${height}</p>
        <p><strong>Vekt:</strong> ${weight}</p>
        <p><strong>Søvn:</strong> ${sovn}</p>
        <p><strong>Treningsmetode:</strong> ${metode}</p>
        <p><strong>Treningstider:</strong> ${tidspunkt}</p>
        <p><strong>Treningsted:</strong> ${sted}</p>
      `,
    };

    // Send the email using the configured transporter
    await transporter.sendMail(mailOptions);

    // Respond with a success message
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    // Log any errors to the console
    console.error('Error sending email:', error);

    // Respond with an error message and status code 500
    return NextResponse.json({ message: 'Error sending email', error: String(error) }, { status: 500 });
  }
}
