import { skills } from "@/data/skills";
import Link from "next/link";

export default function SkillIcons() {
  return (
    <div className="py-10">
      <ul className="flex flex-wrap gap-5 gap-y-10 justify-center">
        {skills.map(({ name, icon, link }) => (
          <li
            key={name}
            title={name}
            className="flex flex-col items-center gap-3"
          >
            <Link
              href={link}
              target="_blank"
              className={`text-9xl transition-all duration-500 hover:scale-105 hover:text-slate-400 ${
                Math.random() >= 0.5 ? "hover:rotate-6" : "hover:-rotate-6"
              }`}
            >
              {icon}
            </Link>
            <span className="text-xl text-slate-400">{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
