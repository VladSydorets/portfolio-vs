import ExperienceComponent from "@/components/experience";
import Title from "@/components/title";

export default function Experience() {
  return (
    <section className="flex flex-col items-center min-h-screen py-16 container m-auto">
      <div className="mb-12">
        <Title title="Professional Experience" />
      </div>
      <ExperienceComponent />
    </section>
  );
}
