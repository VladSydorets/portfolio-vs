import { skills } from "@/data/skills";
import Link from "next/link";

export default function SkillIcons() {
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="pt-10 pb-16 flex flex-col gap-16 items-center">
      {Object.entries(groupedSkills).map(([category, items]) => (
        <div key={category} className="flex flex-col gap-8 items-center w-full">
          <h3 className="text-2xl md:text-3xl font-bold dark:text-slate-300 text-slate-700 tracking-tight">
            {category}
          </h3>
          <ul className="flex flex-wrap gap-6 md:gap-8 justify-center max-w-5xl">
            {items.map(({ name, icon, link }) => (
              <li
                key={name}
                title={name}
                className="flex flex-col items-center gap-3 w-[80px] md:w-[100px]"
              >
                <Link
                  href={link}
                  target="_blank"
                  className={`text-5xl md:text-6xl lg:text-7xl transition-all duration-500 hover:scale-110 dark:text-gray-300 dark:hover:text-blue-400 text-slate-600 hover:text-blue-500 ${
                    Math.random() >= 0.5 ? "hover:rotate-6" : "hover:-rotate-6"
                  }`}
                >
                  {icon}
                </Link>
                <span className="text-xs md:text-sm lg:text-base dark:text-slate-400 text-slate-700 font-medium text-center leading-tight">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
