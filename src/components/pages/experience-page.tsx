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

      <ExperienceComponent />
    </section>
  );
}
