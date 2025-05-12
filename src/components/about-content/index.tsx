"use client";

import { portrait } from "@/assets/portrait/portrait";
import React from "react";
import SocialIcons from "../social-icons";
import { Trans, useTranslation } from "react-i18next";
import Image from "next/image";
import Loading from "@/app/loading";

export default function AboutContent() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <Loading />;
  }
  return (
    <div className="content flex gap-4 items-center sm:items-start flex-col sm:flex-row">
      <div className="card w-full sm:w-1/3 flex flex-col items-center gap-4">
        <div className="rounded-full w-48 h-48 bg-[#60A5FA] overflow-hidden relative">
          <Image
            className="object-cover h-full w-full absolute inset-0"
            sizes="(min-width: 1280px) 50vw, 85vw"
            src={portrait}
            alt="my image"
            placeholder="blur"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-medium mb-1">Vlad Sydorets</h2>
          <p className="text-base dark:text-slate-400 text-slate-700">
            {t("software-engineer")}
          </p>
        </div>
        <SocialIcons></SocialIcons>
      </div>
      <div className="text-sm sm:text-base text-center sm:text-left dark:text-slate-400 text-slate-700 flex flex-col gap-4 w-full sm:w-2/3">
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
  );
}
