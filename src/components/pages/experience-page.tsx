"use client";

import ExperienceComponent from "@/components/experience";
import Title from "@/components/title";
import { Trans, useTranslation } from "react-i18next";
import Loading from "@/app/loading";

export default function ExperiencePage() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <Loading />;
  }
  return (
    <section className="flex flex-col items-center min-h-screen py-16 container m-auto">
      <div className="mb-12">
        <Title title={t("experience.title")} />
      </div>
      <div className="text-sm sm:text-base text-center sm:text-left dark:text-slate-400 text-slate-700 flex flex-col gap-4 w-full mb-6">
        <p>{t("experience.summary.experience_summary")}</p>
        <p>{t("experience.summary.education")}</p>
        <p>{t("experience.summary.promiseo")}</p>
        <p>{t("experience.summary.boataround")}</p>
      </div>
      <ExperienceComponent />
    </section>
  );
}
