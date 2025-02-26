import { Experience } from "@/types/experience";
import Link from "next/link";
import { FaRegCalendar } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { PiSuitcaseSimple } from "react-icons/pi";

export default function ExperienceCard(props: Experience) {
  return (
    <div className="flex flex-col justify-between gap-5 w-full">
      <div
        className={`flex flex-col gap-4 justify-between py-7 p-8 dark:bg-[#1d3c66] bg-[#eecbf6] transition-all duration-500 hover:scale-[102%] rounded-[16px]`}
      >
        <div className="project-card-text flex flex-col gap-3">
          <h2 className={`font-bold text-3xl`}>
            <Link
              href={props.companyLink ?? ""}
              className="flex items-center gap-2"
            >
              <CiGlobe />
              {props.companyName}
            </Link>
          </h2>
          <p className="flex items-center gap-2">
            <IoLocationOutline />
            {props.location}
          </p>
          <p className="flex items-center gap-2">
            <FaRegCalendar />
            {props.date}
          </p>
          <p className="flex items-center gap-2 text-xl font-bold">
            <PiSuitcaseSimple />
            {props.position}
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
