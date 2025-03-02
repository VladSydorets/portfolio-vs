"use server";

import { Resend } from "resend";
import { FormData } from "@/types/form";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: FormData) {
  try {
    await resend.emails.send({
      from: data.email,
      to: "sidorecvv@gmail.com",
      subject: data.subject,
      text: `${data.firstName} ${data.lastName || ""} \n\n${data.message}`,
    });
    return { success: true };
  } catch (error) {
    console.error("Error sending an email: ", error);
    return { success: false, error: "Failed to send an email." };
  }
}
