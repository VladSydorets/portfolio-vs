"use client";

import React, { useState } from "react";
import ExperienceCard from "../experience-card";
import { experiences } from "@/data/experiences";
import I18nProvider from "../I18nProvider";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full flex flex-col gap-6">
      <I18nProvider>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.companyName}
            {...experience}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </I18nProvider>
    </div>
  );
}
