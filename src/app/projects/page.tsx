import Projects from "@/components/projects";
import Title from "@/components/title";

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
