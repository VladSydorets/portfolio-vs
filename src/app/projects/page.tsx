import Projects from "@/components/projects";

export default function About() {
  return (
    <section className="container flex flex-col items-center min-h-screen p-16">
      <div className="mb-12">
        <h1 className="text-5xl text-[#A855F7] font-medium">
          My works and Projects
        </h1>
      </div>
      <Projects />
    </section>
  );
}
