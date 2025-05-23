"use client";

import Loading from "@/app/loading";
import { Experience } from "@/types/experience";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaRegCalendar } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiSuitcaseSimple } from "react-icons/pi";

export default function ExperienceCard(props: Experience) {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col justify-between gap-5 w-full">
      <div
        className={`flex flex-col gap-4 justify-between py-7 p-8 dark:bg-[#162d4c] bg-[#e8f0f5] transition-all duration-500 hover:scale-[102%] rounded-[16px]`}
      >
        <div className="project-card-text flex flex-col gap-3">
          <h3
            className={`font-bold text-xl md:text-2xl flex items-center gap-2 tracking-tight`}
          >
            <PiSuitcaseSimple />
            {t(props.position)}
          </h3>
          <p className="flex items-center gap-2 dark:text-gray-300 text-slate-700">
            {props.companyName} • {t(props.location)}
          </p>
          <p className="flex items-center gap-2 dark:text-gray-300 text-slate-700">
            <FaRegCalendar />
            {t(props.date)}
          </p>
          <ul className="list-disc text-sm md:text-base pl-5">
            {t(props.description)
              .split(". ")
              .map((bulletpoint, index) => (
                <li key={index}>{bulletpoint}</li>
              ))}
          </ul>
          <div>
            <h4 className="dark:text-gray-300 font-medium text-slate-700 mb-2">
              {t("skills")}
            </h4>
            <ul className="flex flex-wrap gap-3 text-xs">
              {props.skills?.map((skill) => (
                <li
                  key={skill}
                  className="dark:text-slate-700 bg-blue-200 px-2 py-1 rounded-3xl cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <>
            {props.companyLink ? (
              <Link
                href={props.companyLink}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                {t("view-site")} <FaExternalLinkAlt />
              </Link>
            ) : (
              ""
            )}
          </>
        </div>
      </div>
    </div>
  );
}
