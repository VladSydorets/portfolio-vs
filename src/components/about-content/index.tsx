"use client";

import { portrait } from "@/assets/portrait/portrait";
import React from "react";
import SocialIcons from "../social-icons";
import { Trans, useTranslation } from "react-i18next";
import Image from "next/image";
import Loading from "@/app/loading";
import SectionTitle from "../section-title";

export default function AboutContent() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <Loading />;
  }
  return (
    <div className="content flex flex-col w-full gap-4 md:gap-8">
      {/* Top Header Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-8">
        {/* Left Side: Details */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold dark:text-white text-black mb-2">
            Vlad Sydorets
          </h1>
          <p className="text-lg sm:text-xl font-medium dark:text-gray-300 text-gray-700">
            <Trans
              i18nKey="about-me.role"
              components={[<span key="0" className="font-normal" />]}
            />
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xl">📍</span>
            <span className="text-base sm:text-lg dark:text-gray-400 text-gray-600 font-medium">
              {t("about-me.location")}
            </span>
          </div>
        </div>

        {/* Right Side: Picture & Socials */}
        <div className="flex flex-col items-center gap-4">
          <div className="rounded-full w-40 h-40 sm:w-48 sm:h-48 border-[6px] border-white shadow-xl dark:border-white/90 overflow-hidden relative">
            <Image
              className="object-cover h-full w-full absolute inset-0"
              sizes="(min-width: 1280px) 50vw, 85vw"
              src={portrait}
              alt="Vlad Sydorets"
              placeholder="blur"
            />
          </div>
          <div className="scale-110 mt-2">
            <SocialIcons />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col w-full gap-4 mt-4">
        <SectionTitle title={t("about-me.title")} />
        <div className="text-sm sm:text-base md:text-lg sm:text-left dark:text-slate-400 text-slate-700 flex flex-col gap-4 w-full">
          <p>
            <Trans
              i18nKey={"about-me.intro-paragraph-1"}
              components={{
                bold: <span className="text-[#60A5FA] font-medium" />,
              }}
            />
          </p>
          <p>{t("about-me.intro-paragraph-2")}</p>
          <p>{t("about-me.intro-paragraph-3")}</p>
        </div>
      </div>
    </div>
  );
}
