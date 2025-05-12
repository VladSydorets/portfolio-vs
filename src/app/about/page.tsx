"use client";

import SkillIcons from "@/components/skills-icons";
import Title from "@/components/title";
import AboutContent from "@/components/about-content";
import I18nProvider from "@/components/I18nProvider";
import { Trans, useTranslation } from "react-i18next";
import Loading from "../loading";

export default function About() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <Loading />;
  }
  return (
    <section className="flex flex-col items-center min-h-screen py-16 container m-auto">
      <I18nProvider>
        <div className="mb-12">
          <Title title={t("about-me.title")} />
        </div>
        <AboutContent></AboutContent>
        <div className="mt-12 mb-2">
          <Title title={t("skills")} />
        </div>
        <div className="skills-block">
          <SkillIcons></SkillIcons>
        </div>
      </I18nProvider>
    </section>
  );
}
