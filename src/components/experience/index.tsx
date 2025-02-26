import React from "react";
import ExperienceCard from "../experience-card";
import { experiences } from "@/data/experiences";

export default function Experience() {
  return (
    <div className="w-full flex flex-col gap-12">
      {experiences.map((experience) => (
        <ExperienceCard
          key={experience.title}
          companyName={experience.companyName}
          companyLink={experience.companyLink}
          location={experience.location}
          date={experience.date}
          position={experience.position}
          description={experience.description}
        />
      ))}
    </div>
  );
}
