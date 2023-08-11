import { projects } from "@/data/projects";
import ProjectCard from "../project-card";

export default function Projects() {
  return (
    <div className="projects-container flex flex-col gap-10">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          thumbnail={project.thumbnail}
          link={project.link}
        />
      ))}
    </div>
  );
}
