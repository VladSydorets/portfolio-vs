"use client";

import { FormEvent, useState } from "react";
import Input from "./components/input";
import { FormData } from "@/types/form";
import { useForm } from "react-hook-form";
import ContactInformation from "./components/contact-information";
import { IoIosSend } from "react-icons/io";

// Use react-hook-form for validation and stuff

export default function ContactForm() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <section className="flex flex-col items-center gap-12">
      <h1 className="text-4xl font-semibold">Get in Touch</h1>
      <div className="flex justify-between items-start gap-12">
        <ContactInformation></ContactInformation>
        <div className="flex flex-col gap-6 rounded-[16px] dark:bg-[#1d3c66] bg-[#eecbf6] px-6 py-8 max-w-xl">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex">
              <div className="flex flex-col">
                <label htmlFor="first-name">First Name</label>
                <Input
                  type="text"
                  id="first-name"
                  required
                  value={formData.firstName}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="last-name">Last Name</label>
                <Input
                  type="text"
                  id="last-name"
                  required
                  value={formData.lastName}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <Input type="email" id="email" required value={formData.email} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject">Subject</label>
              <Input
                type="text"
                id="subject"
                required
                value={formData.subject}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                className="px-4 py-2 mr-6 rounded-[4px] dark:bg-[#2d5485] bg-[#f4ebf5] outline-none"
                required
                value={formData.message}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex gap-2 items-center justify-center w-full px-4 py-2 border-[1px] mr-6 rounded-[4px] border-[#A855F7] dark:bg-[#152b46] bg-transparent hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[#A855F7] hover:shadow-4gr"
              >
                <IoIosSend /> Send a Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
