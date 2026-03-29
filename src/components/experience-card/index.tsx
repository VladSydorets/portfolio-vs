"use client";

import Loading from "@/app/loading";
import { Experience } from "@/types/experience";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaRegCalendar, FaGlobe } from "react-icons/fa";
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
          <p className="flex items-center gap-2 dark:text-gray-300 text-slate-700 mb-2">
            <FaRegCalendar />
            {t(props.date)}
          </p>
          <ul className="flex flex-wrap gap-2 text-xs mb-2">
            {props.skills?.map((skill) => (
              <li
                key={skill}
                className="dark:text-slate-700 font-medium bg-blue-200 px-2 py-1 rounded-3xl cursor-default"
              >
                {skill}
              </li>
            ))}
          </ul>
          <ul className="text-sm md:text-base flex flex-col gap-2">
            {t(props.description)
              .split("\n")
              .map((bulletpoint, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: bulletpoint }} />
              ))}
          </ul>
          <>
            {props.companyLink ? (
              <Link
                href={props.companyLink}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <FaGlobe /> {t("view-site")}
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
