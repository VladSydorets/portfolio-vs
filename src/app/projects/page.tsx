import Projects from "@/components/projects";
import Title from "@/components/title";
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

export default function About() {
  return (
    <section className="flex flex-col items-center min-h-screen py-16 container m-auto">
      <div className="mb-12">
        <Title title="My latest projects" />
      </div>
      <Projects />
    </section>
  );
}
