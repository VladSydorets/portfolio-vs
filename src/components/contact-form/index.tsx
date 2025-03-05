"use client";

import Input from "./components/input";
import { FormData } from "@/types/form";
import { SubmitHandler, useForm } from "react-hook-form";
import ContactInformation from "./components/contact-information";
import Error from "./components/error";
import Title from "@/components/title";
import { IoIosSend } from "react-icons/io";
import { sendEmail } from "@/actions/sendEmail";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Loading from "@/app/loading";

export default function ContactForm() {
  const { t, ready } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  if (!ready) {
    return <Loading />;
  }
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setStatus("idle");
    const response = await sendEmail(data);

    if (response.success) {
      setStatus("success");
      reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="flex flex-col items-center min-h-screen py-16 container m-auto">
      <Title title={t("get-in-touch")} />
      <div className="flex flex-col-reverse items-center lg:flex-row justify-between lg:items-start gap-12 mt-10">
        <ContactInformation></ContactInformation>
        <div className="flex flex-col gap-6 rounded-[16px] dark:bg-[#1d3c66] bg-[#eecbf6] px-6 py-8 max-w-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
            noValidate
          >
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col">
                <label htmlFor="first-name">{t("first-name")}</label>
                <Input
                  type="text"
                  id="first-name"
                  {...register("firstName", {
                    required: `${t("first-name-required")}`,
                  })}
                />
                <Error errorName={errors.firstName} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="last-name">{t("last-name")}</label>
                <Input type="text" id="last-name" {...register("lastName")} />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">{t("email")}</label>
              <Input
                type="email"
                id="email"
                {...register("email", { required: `${t("email-required")}` })}
              />
              <Error errorName={errors.email} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject">{t("subject")}</label>
              <Input
                type="text"
                id="subject"
                {...register("subject", {
                  required: `${t("subject-required")}`,
                })}
              />
              <Error errorName={errors.subject} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">{t("your-message")}</label>
              <textarea
                id="message"
                className="px-4 py-2 mr-6 rounded-[4px] dark:bg-[#2d5485] bg-[#f4ebf5] outline-none"
                {...register("message", {
                  required: `${t("message-required")}`,
                })}
              />
              <Error errorName={errors.message} />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="flex gap-2 items-center justify-center w-full px-4 py-2 border-[1px] mr-6 rounded-[4px] border-[#A855F7] dark:bg-[#152b46] bg-transparent hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[#A855F7] hover:shadow-4gr"
              >
                <IoIosSend /> {t("send-message")}
              </button>
            </div>
            {status === "success" && (
              <p className="text-green-500">{t("message-sent-success")}</p>
            )}
            {status === "error" && (
              <p className="text-red-500">{t("message-sent-failure")}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
