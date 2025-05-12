import ProjectsPage from "@/components/pages/projects-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of my software engineering projects, including React and TypeScript applications.",
  openGraph: {
    title: "Projects by Vladyslav Sydorets",
    description: "Discover my latest work in web development.",
  },
};
export default function ProjectsRoute() {
  return <ProjectsPage />;
}
