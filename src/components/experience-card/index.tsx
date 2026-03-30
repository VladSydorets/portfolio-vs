"use client";

import Loading from "@/app/loading";
import { Experience } from "@/types/experience";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FaGlobe, FaChevronDown, FaChevronUp } from "react-icons/fa";

export interface ExperienceCardProps extends Experience {
  isOpen: boolean;
  onToggle: () => void;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  const { t, ready } = useTranslation();
  const { isOpen, onToggle } = props;

  if (!ready) {
    return <Loading />;
  }

  // Determine if it's a "Current" role based on typical date strings
  const isCurrent =
    props.date.includes("Present") ||
    props.date.includes("Heute") ||
    props.date.includes("Obecnie");

  return (
    <div className="w-full mb-4">
      <div
        className={`relative flex flex-col w-full rounded-2xl transition-all duration-300 dark:bg-[#162d4c]/80 bg-[#e8f0f5]/80 hover:bg-[#e8f0f5] dark:hover:bg-[#1c385c] border-l-4 ${
          isOpen ? "border-blue-500 shadow-md" : "border-transparent"
        }`}
      >
        {/* Accordion Header / Button */}
        <button
          onClick={onToggle}
          className="flex lg:items-center justify-between w-full p-6 text-left focus:outline-none"
        >
          <div className="flex items-start lg:items-center gap-4 w-full">
            {/* Dot Indicator */}
            <div className="flex-shrink-0 mt-2 lg:mt-0">
              <div
                className={`w-3 h-3 rounded-full transition-colors ${
                  isOpen || isCurrent
                    ? "bg-blue-500 dark:bg-blue-400"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
              />
            </div>

            {/* Title Block */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between w-full gap-2 lg:gap-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3">
                <h3 className="font-bold text-lg md:text-xl dark:text-gray-100 text-slate-800 tracking-tight">
                  {t(props.position)}
                </h3>
                <span className="text-blue-500 dark:text-blue-400 font-semibold md:text-lg">
                  {props.companyName}
                </span>
                {isCurrent && (
                  <span className="inline-flex mt-1 lg:mt-0 px-2 py-0.5 text-[10px] md:text-xs tracking-wider uppercase font-bold rounded-full border border-green-500 text-green-600 dark:text-green-400 dark:border-green-400 bg-green-50 dark:bg-green-900/20 w-fit">
                    Active
                  </span>
                )}
              </div>

              {/* Date & Location */}
              <div className="text-sm md:text-base dark:text-gray-400 text-slate-500 pr-4">
                {t(props.date)} • {t(props.location)}
              </div>
            </div>
          </div>

          {/* Expanded Caret Icon */}
          <div className="flex-shrink-0 ml-2 mt-1 lg:mt-0 text-gray-500 dark:text-gray-400">
            {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
          </div>
        </button>

        {/* Accordion Content Body */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[2000px] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 lg:pl-[3.25rem] pt-2">
            <ul className="flex flex-wrap gap-2 text-xs mb-5">
              {props.skills?.map((skill) => (
                <li
                  key={skill}
                  className="dark:text-slate-800 font-medium bg-blue-200 dark:bg-blue-300 px-3 py-1.5 rounded-full cursor-default"
                >
                  {skill}
                </li>
              ))}
            </ul>
            <ul className="text-sm md:text-base flex flex-col gap-3 dark:text-gray-200 text-slate-700 leading-relaxed">
              {t(props.description)
                .split("\n")
                .map((bulletpoint, index) => (
                  <li
                    key={index}
                    dangerouslySetInnerHTML={{ __html: bulletpoint }}
                  />
                ))}
            </ul>
            {props.companyLink && (
              <div className="mt-6 flex">
                <Link
                  href={props.companyLink}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 transition-colors font-medium border border-blue-200 dark:border-blue-800"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGlobe /> {t("view-site")}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
