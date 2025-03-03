import Link from "next/link";
import React from "react";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";

export default function ContactInformation() {
  return (
    <div className="flex flex-col justify-between items-center lg:items-start gap-5 rounded-[16px] dark:bg-[#1d3c66] bg-[#eecbf6] w-full lg:w-1/2 p-6 px-8">
      <h2 className="text-2xl font-semibold">Contact Information</h2>
      <div className="flex flex-col gap-2">
        <Link
          href="mailto: sidorecvv@gmail.com"
          className="flex gap-2 items-center"
        >
          <FiMail /> sidorecvv@gmail.com
        </Link>
        <Link href="tel: +48575696142" className="flex gap-2 items-center">
          <FaPhone /> (+48) 575 696 142
        </Link>
        <Link
          href="https://www.google.com/maps/place/Wroc%C5%82aw"
          className="flex gap-2 items-center"
        >
          <FaLocationDot /> Wrocław, Poland
        </Link>
      </div>
    </div>
  );
}
