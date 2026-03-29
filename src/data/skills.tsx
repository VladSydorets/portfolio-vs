import { FaHtml5, FaCss3Alt, FaSass, FaVuejs, FaNpm, FaLinux, FaNetworkWired, FaLink } from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoReact,
  BiLogoNodejs,
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
  TbSql,
  TbApi,
} from "react-icons/tb";
import { 
  SiPrisma, SiReactquery, SiRedux, SiDjango, SiFlask, SiFastapi, SiGraphql, SiTrpc, SiMysql, SiRedis, SiSupabase, SiFirebase, SiJenkins, SiJest, SiPytest, SiPuppeteer, SiGooglecloud, SiDigitalocean, SiGnubash 
} from "react-icons/si";
import { Skill } from "@/types/skills";

export const skills: Skill[] = [
  // --- Languages & Core ---
  { name: "HTML", icon: <FaHtml5 />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML/", category: "Languages & Core" },
  { name: "CSS", icon: <FaCss3Alt />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS/", category: "Languages & Core" },
  { name: "Sass/SCSS", icon: <FaSass />, link: "https://sass-lang.com/", category: "Languages & Core" },
  { name: "JavaScript", icon: <BiLogoJavascript />, link: "https://www.javascript.com/", category: "Languages & Core" },
  { name: "TypeScript", icon: <BiLogoTypescript />, link: "https://www.typescriptlang.org/", category: "Languages & Core" },
  { name: "Python", icon: <BiLogoPython />, link: "https://www.python.org/", category: "Languages & Core" },
  { name: "Go", icon: <BiLogoGoLang />, link: "https://go.dev/", category: "Languages & Core" },
  { name: "Bash", icon: <SiGnubash />, link: "https://www.gnu.org/software/bash/", category: "Languages & Core" },
  { name: "SQL", icon: <TbSql />, link: "https://en.wikipedia.org/wiki/SQL", category: "Languages & Core" },

  // --- Frontend & UI ---
  { name: "React", icon: <BiLogoReact />, link: "https://react.dev/", category: "Frontend & UI" },
  { name: "Next.js", icon: <TbBrandNextjs />, link: "https://nextjs.org/", category: "Frontend & UI" },
  { name: "Vue.js", icon: <FaVuejs />, link: "https://vuejs.org/", category: "Frontend & UI" },
  { name: "Three.js", icon: <TbBrandThreejs />, link: "https://threejs.org/", category: "Frontend & UI" },
  { name: "Tailwind CSS", icon: <BiLogoTailwindCss />, link: "https://tailwindcss.com/", category: "Frontend & UI" },
  { name: "Redux", icon: <SiRedux />, link: "https://redux.js.org/", category: "Frontend & UI" },
  { name: "TanStack Query", icon: <SiReactquery />, link: "https://tanstack.com/query/latest", category: "Frontend & UI" },

  // --- Backend & Frameworks ---
  { name: "Node.js", icon: <BiLogoNodejs />, link: "https://nodejs.org/en/", category: "Backend & Frameworks" },
  { name: "Django", icon: <SiDjango />, link: "https://www.djangoproject.com/", category: "Backend & Frameworks" },
  { name: "Flask", icon: <SiFlask />, link: "https://flask.palletsprojects.com/", category: "Backend & Frameworks" },
  { name: "FastAPI", icon: <SiFastapi />, link: "https://fastapi.tiangolo.com/", category: "Backend & Frameworks" },

  // --- APIs & Communication ---
  { name: "REST APIs", icon: <TbApi />, link: "https://restfulapi.net/", category: "APIs & Communication" },
  { name: "GraphQL", icon: <SiGraphql />, link: "https://graphql.org/", category: "APIs & Communication" },
  { name: "WebSockets", icon: <FaNetworkWired />, link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", category: "APIs & Communication" },
  { name: "tRPC", icon: <SiTrpc />, link: "https://trpc.io/", category: "APIs & Communication" },

  // --- Databases & BaaS ---
  { name: "PostgreSQL", icon: <BiLogoPostgresql />, link: "https://www.postgresql.org/", category: "Databases & BaaS" },
  { name: "MySQL", icon: <SiMysql />, link: "https://www.mysql.com/", category: "Databases & BaaS" },
  { name: "MongoDB", icon: <BiLogoMongodb />, link: "https://www.mongodb.com/", category: "Databases & BaaS" },
  { name: "Redis", icon: <SiRedis />, link: "https://redis.io/", category: "Databases & BaaS" },
  { name: "Prisma", icon: <SiPrisma />, link: "https://www.prisma.io/", category: "Databases & BaaS" },
  { name: "Supabase", icon: <SiSupabase />, link: "https://supabase.com/", category: "Databases & BaaS" },
  { name: "Firebase", icon: <SiFirebase />, link: "https://firebase.google.com/", category: "Databases & BaaS" },

  // --- DevOps & Cloud ---
  { name: "Linux", icon: <FaLinux />, link: "https://www.linux.org/", category: "DevOps & Cloud" },
  { name: "Docker", icon: <BiLogoDocker />, link: "https://www.docker.com/", category: "DevOps & Cloud" },
  { name: "Jenkins", icon: <SiJenkins />, link: "https://www.jenkins.io/", category: "DevOps & Cloud" },
  { name: "AWS", icon: <BiLogoAws />, link: "https://aws.amazon.com/", category: "DevOps & Cloud" },
  { name: "GCP", icon: <SiGooglecloud />, link: "https://cloud.google.com/", category: "DevOps & Cloud" },
  { name: "DigitalOcean", icon: <SiDigitalocean />, link: "https://www.digitalocean.com/", category: "DevOps & Cloud" },
  { name: "npm", icon: <FaNpm />, link: "https://www.npmjs.com/", category: "DevOps & Cloud" },

  // --- Testing, Scraping & AI ---
  { name: "Jest", icon: <SiJest />, link: "https://jestjs.io/", category: "Testing, Scraping & AI" },
  { name: "Pytest", icon: <SiPytest />, link: "https://docs.pytest.org/", category: "Testing, Scraping & AI" },
  { name: "Puppeteer", icon: <SiPuppeteer />, link: "https://pptr.dev/", category: "Testing, Scraping & AI" },
  { name: "LangChain", icon: <FaLink />, link: "https://www.langchain.com/", category: "Testing, Scraping & AI" },
];
