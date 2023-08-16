"use client";

import { FormEvent, useState } from "react";
import Input from "./components/input";
import { FormData } from "@/types/form";
import { useForm } from "react-hook-form";
// Use react-hook-form for validation and stuff

export default function ContactForm() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  return (
    <section className="flex justify-center">
      <div className="flex flex-col gap-6 border-[1px] border-[#A855F7] rounded-[4px] px-6 py-8 max-w-xl">
        <h3 className="text-2xl font-semibold">Contact me!</h3>
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
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              className="px-4 py-2 border-[1px] mr-6 rounded-[4px] border-[#A855F7] bg-[#152b46] outline-none"
              required
              value={formData.message}
            />
          </div>
          <div className="flex">
            <button
              type="submit"
              className="px-4 py-2 border-[1px] mr-6 rounded-[4px] border-[#A855F7] bg-[#152b46] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[#A855F7] hover:shadow-4gr"
            >
              Send a Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
