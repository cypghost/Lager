import { Resend } from "resend";
import { NextResponse } from "next/server";
import ContactEmail from "@/email/Contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_SENDER as string,
      to: process.env.EMAIL_ADDR as string,
      subject: "New Contact Request",
      react: ContactEmail({ name, email, message }),
    });

    console.log("Data:", data);
    console.log("Error:", error);

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "An error occurred while sending the email" },
      { status: 500 }
    );
  }
}
