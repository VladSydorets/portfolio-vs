import ExperiencePage from "@/components/pages/experience-page";
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
export default function ExperienceRoute() {
  return <ExperiencePage />;
}
