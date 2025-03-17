import ExperienceComponent from "@/components/experience";
import Title from "@/components/title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "A brief description of my software engineering experience, developing in React, Python and TypeScript.",
  openGraph: {
    title: "Experience of Vladyslav Sydorets",
    description: "Discover my latest professional experience.",
  },
};

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
