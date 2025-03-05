import { projects } from "@/data/projects";
import ProjectCard from "../project-card";
import I18nProvider from "../I18nProvider";

export default function Projects() {
  return (
    <div className="projects-container flex flex-col gap-10">
      <I18nProvider>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tags={project.tags}
            description={project.description}
            thumbnail={project.thumbnail}
            demo={project.demo}
            repo={project.repo}
          />
        ))}
      </I18nProvider>
    </div>
  );
}
