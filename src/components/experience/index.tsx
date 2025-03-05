import React from "react";
import ExperienceCard from "../experience-card";
import { experiences } from "@/data/experiences";
import I18nProvider from "../I18nProvider";

export default function Experience() {
  return (
    <div className="w-full flex flex-col gap-12">
      <I18nProvider>
        {experiences.map((experience) => (
          <ExperienceCard
            key={experience.companyName}
            companyName={experience.companyName}
            companyLink={experience.companyLink}
            location={experience.location}
            date={experience.date}
            position={experience.position}
            description={experience.description}
            skills={experience.skills}
          />
        ))}
      </I18nProvider>
    </div>
  );
}
