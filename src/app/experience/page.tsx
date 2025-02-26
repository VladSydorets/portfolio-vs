import ExperienceComponent from "@/components/experience";
import Title from "@/components/title";

export default function Experience() {
  return (
    <section className="flex flex-col items-center min-h-screen p-16">
      <div className="mb-12">
        <Title title="Professional Experience" />
      </div>
      <ExperienceComponent />
    </section>
  );
}
