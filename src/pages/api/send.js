// src/pages/api/send.js
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const fromEmail = import.meta.env.FROM_EMAIL;
const personalEmail = import.meta.env.PERSONAL_EMAIL;

export async function POST({ request }) {
  const { email, subject, message } = await request.json();

  try {
    const emailContent = `
      <div>
        <p>Thank you for contacting me!</p>
        <p>New message submitted:</p>
        <p>${message}</p>
      </div>
    `;

    const data = await resend.emails.send({
      from: fromEmail,
      to: [personalEmail],
      subject: subject,
      html: emailContent,
    });

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
