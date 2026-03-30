"use client";

import SkillIcons from "@/components/skills-icons";
import SectionTitle from "@/components/section-title";
import AboutContent from "@/components/about-content";
import I18nProvider from "@/components/I18nProvider";
import { Trans, useTranslation } from "react-i18next";
import Loading from "../loading";
import Experience from "@/components/experience";

export default function About() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <Loading />;
  }
  return (
    <section className="flex flex-col items-center min-h-screen max-w-6xl py-16 container m-auto">
      <I18nProvider>
        <AboutContent></AboutContent>
        <div className="flex flex-col w-full gap-4 mt-8 md:mt-12">
          <SectionTitle title={t("experience.title")} />
          <Experience />
        </div>
        <div className="flex flex-col w-full gap-4 mt-8 md:mt-12">
          <SectionTitle title={t("skills")} />
          <SkillIcons></SkillIcons>
        </div>
      </I18nProvider>
    </section>
  );
}
