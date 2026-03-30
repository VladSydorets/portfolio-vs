import { skills } from "@/data/skills";
import Link from "next/link";

export default function SkillIcons() {
  const groupedSkills = skills.reduce(
    (acc, skill) => {
      const category = skill.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>,
  );

  return (
    <div className="pt-6 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start w-full">
      {Object.entries(groupedSkills).map(([category, items]) => (
        <div
          key={category}
          className="flex flex-col gap-5 p-6 md:p-8 w-full border-[2px] border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/40 dark:bg-slate-900/30 rounded-3xl backdrop-blur-sm h-full shadow-sm"
        >
          <h3 className="text-xl md:text-2xl text-center font-bold dark:text-white text-slate-800 tracking-tight">
            {category}
          </h3>
          <ul className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
            {items.map(({ name, icon, link, color }) => (
              <li
                key={name}
                title={name}
                className="group relative flex flex-col items-center justify-center gap-3 py-4 w-[72px] sm:w-[84px] md:w-[96px] rounded-xl bg-white/60 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)] dark:shadow-none backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:bg-white/10 overflow-hidden shrink-0"
                style={
                  {
                    "--hover-color": color || "#60A5FA",
                  } as React.CSSProperties
                }
              >
                {/* Invisible link overlay covering the card */}
                <Link
                  href={link}
                  target="_blank"
                  className="absolute inset-0 z-10"
                  aria-label={name}
                />

                <div className="text-4xl md:text-5xl text-slate-500 dark:text-slate-400 transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--hover-color)]">
                  {icon}
                </div>

                <span className="text-[10px] sm:text-xs font-semibold text-slate-600 dark:text-slate-300 text-center leading-tight transition-colors duration-300 group-hover:text-[var(--hover-color)] px-1">
                  {name}
                </span>

                {/* Subtle bottom border glow effect on hover */}
                <div className="absolute bottom-0 left-0 h-1 w-full bg-[var(--hover-color)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
