import { FaHtml5, FaCss3Alt, FaVuejs, FaNpm } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoJava,
  BiLogoPython,
  BiLogoGoLang,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoTailwindCss,
  BiLogoAws,
  BiLogoDocker,
} from "react-icons/bi";
import {
  TbBrandNextjs,
  TbBrandThreejs,
  TbBrandReactNative,
} from "react-icons/tb";
import { SiPrisma } from "react-icons/si";
import { Skill } from "@/types/skills";

export const skills: Skill[] = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS/",
  },
  {
    name: "TailwindCSS",
    icon: <BiLogoTailwindCss />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "JavaScript",
    icon: <BiLogoJavascript />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: <BiLogoReact />,
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs />,
    link: "https://nextjs.org/",
  },
  {
    name: "Vue.js",
    icon: <FaVuejs />,
    link: "https://vuejs.org/",
  },
  {
    name: "Three.js",
    icon: <TbBrandThreejs />,
    link: "https://threejs.org/",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative />,
    link: "https://reactnative.dev/",
  },
  {
    name: "Node.js",
    icon: <BiLogoNodejs />,
    link: "https://nodejs.org/en/",
  },
  {
    name: "Java",
    icon: <BiLogoJava />,
    link: "https://www.java.com/en/",
  },
  {
    name: "Python",
    icon: <BiLogoPython />,
    link: "https://www.python.org/",
  },
  {
    name: "Go",
    icon: <BiLogoGoLang />,
    link: "https://go.dev/",
  },
  {
    name: "MongoDB",
    icon: <BiLogoMongodb />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    link: "https://www.prisma.io/",
  },
  {
    name: "PosgtreSQL",
    icon: <BiLogoPostgresql />,
    link: "https://www.postgresql.org/",
  },

  {
    name: "AWS",
    icon: <BiLogoAws />,
    link: "https://aws.amazon.com/",
  },
  {
    name: "Docker",
    icon: <BiLogoDocker />,
    link: "https://www.docker.com/",
  },
  {
    name: "npm",
    icon: <FaNpm />,
    link: "https://www.npmjs.com/",
  },
];
