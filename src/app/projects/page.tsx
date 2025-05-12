"use client";

import Projects from "@/components/projects";
import Title from "@/components/title";
import { Metadata } from "next";
import { Trans, useTranslation } from "react-i18next";
import Loading from "../loading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of my software engineering projects, including React and TypeScript applications.",
  openGraph: {
    title: "Projects by Vladyslav Sydorets",
    description: "Discover my latest work in web development.",
  },
};

export default function ProjectsPage() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <Loading />;
  }

  return (
    <section className="flex flex-col items-center min-h-screen py-16 container m-auto">
      <div className="mb-12">
        <Title title={t("projects.title")} />
        <p className="text-sm sm:text-base text-center sm:text-left dark:text-slate-400 text-slate-700 flex flex-col gap-4 w-full mt-2">
          {t("projects.summary")}
        </p>
      </div>
      <Projects />
    </section>
  );
}
