import Projects from "@/components/projects";
import Title from "@/components/title";

export default function About() {
  return (
    <section className="container flex flex-col items-center min-h-screen p-16">
      <div className="mb-12">
        <Title title="My latest projects" />
      </div>
      <Projects />
    </section>
  );
}
