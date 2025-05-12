"use client";

import { projects } from "@/data/projects";
import ProjectCard from "../project-card";
import I18nProvider from "../I18nProvider";
import { useTranslation } from "react-i18next";
import Loading from "@/app/loading";

export default function Projects() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <Loading />;
  }
  return (
    <div className="projects-container flex flex-col gap-10">
      <I18nProvider>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tags={project.tags}
            description={t(project.description)}
            thumbnail={project.thumbnail}
            demo={project.demo}
            repo={project.repo}
          />
        ))}
      </I18nProvider>
    </div>
  );
}
