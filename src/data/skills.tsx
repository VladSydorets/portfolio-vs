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
  { name: "HTML", color: "#E34F26", icon: <FaHtml5 />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML/", category: "Languages & Core" },
  { name: "CSS", color: "#1572B6", icon: <FaCss3Alt />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS/", category: "Languages & Core" },
  { name: "Sass/SCSS", color: "#CC6699", icon: <FaSass />, link: "https://sass-lang.com/", category: "Languages & Core" },
  { name: "JavaScript", color: "#F7DF1E", icon: <BiLogoJavascript />, link: "https://www.javascript.com/", category: "Languages & Core" },
  { name: "TypeScript", color: "#3178C6", icon: <BiLogoTypescript />, link: "https://www.typescriptlang.org/", category: "Languages & Core" },
  { name: "Python", color: "#3776AB", icon: <BiLogoPython />, link: "https://www.python.org/", category: "Languages & Core" },
  { name: "Go", color: "#00ADD8", icon: <BiLogoGoLang />, link: "https://go.dev/", category: "Languages & Core" },
  { name: "Bash", color: "#4EAA25", icon: <SiGnubash />, link: "https://www.gnu.org/software/bash/", category: "Languages & Core" },
  { name: "SQL", color: "#4479A1", icon: <TbSql />, link: "https://en.wikipedia.org/wiki/SQL", category: "Languages & Core" },

  // --- Frontend & UI ---
  { name: "React", color: "#61DAFB", icon: <BiLogoReact />, link: "https://react.dev/", category: "Frontend & UI" },
  { name: "Next.js", color: "#000000", icon: <TbBrandNextjs />, link: "https://nextjs.org/", category: "Frontend & UI" },
  { name: "Vue.js", color: "#4FC08D", icon: <FaVuejs />, link: "https://vuejs.org/", category: "Frontend & UI" },
  { name: "Three.js", color: "#000000", icon: <TbBrandThreejs />, link: "https://threejs.org/", category: "Frontend & UI" },
  { name: "Tailwind CSS", color: "#06B6D4", icon: <BiLogoTailwindCss />, link: "https://tailwindcss.com/", category: "Frontend & UI" },
  { name: "Redux", color: "#764ABC", icon: <SiRedux />, link: "https://redux.js.org/", category: "Frontend & UI" },
  { name: "TanStack Query", color: "#FF4154", icon: <SiReactquery />, link: "https://tanstack.com/query/latest", category: "Frontend & UI" },

  // --- Backend & Frameworks ---
  { name: "Node.js", color: "#339933", icon: <BiLogoNodejs />, link: "https://nodejs.org/en/", category: "Backend & Frameworks" },
  { name: "Django", color: "#092E20", icon: <SiDjango />, link: "https://www.djangoproject.com/", category: "Backend & Frameworks" },
  { name: "Flask", color: "#000000", icon: <SiFlask />, link: "https://flask.palletsprojects.com/", category: "Backend & Frameworks" },
  { name: "FastAPI", color: "#009688", icon: <SiFastapi />, link: "https://fastapi.tiangolo.com/", category: "Backend & Frameworks" },

  // --- APIs & Communication ---
  { name: "REST APIs", color: "#005571", icon: <TbApi />, link: "https://restfulapi.net/", category: "APIs & Communication" },
  { name: "GraphQL", color: "#E10098", icon: <SiGraphql />, link: "https://graphql.org/", category: "APIs & Communication" },
  { name: "WebSockets", color: "#010101", icon: <FaNetworkWired />, link: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API", category: "APIs & Communication" },
  { name: "tRPC", color: "#2596be", icon: <SiTrpc />, link: "https://trpc.io/", category: "APIs & Communication" },

  // --- Databases & BaaS ---
  { name: "PostgreSQL", color: "#4169E1", icon: <BiLogoPostgresql />, link: "https://www.postgresql.org/", category: "Databases & BaaS" },
  { name: "MySQL", color: "#4479A1", icon: <SiMysql />, link: "https://www.mysql.com/", category: "Databases & BaaS" },
  { name: "MongoDB", color: "#47A248", icon: <BiLogoMongodb />, link: "https://www.mongodb.com/", category: "Databases & BaaS" },
  { name: "Redis", color: "#DC382D", icon: <SiRedis />, link: "https://redis.io/", category: "Databases & BaaS" },
  { name: "Prisma", color: "#2D3748", icon: <SiPrisma />, link: "https://www.prisma.io/", category: "Databases & BaaS" },
  { name: "Supabase", color: "#3ECF8E", icon: <SiSupabase />, link: "https://supabase.com/", category: "Databases & BaaS" },
  { name: "Firebase", color: "#FFCA28", icon: <SiFirebase />, link: "https://firebase.google.com/", category: "Databases & BaaS" },

  // --- DevOps & Cloud ---
  { name: "Linux", color: "#FCC624", icon: <FaLinux />, link: "https://www.linux.org/", category: "DevOps & Cloud" },
  { name: "Docker", color: "#2496ED", icon: <BiLogoDocker />, link: "https://www.docker.com/", category: "DevOps & Cloud" },
  { name: "Jenkins", color: "#D24939", icon: <SiJenkins />, link: "https://www.jenkins.io/", category: "DevOps & Cloud" },
  { name: "AWS", color: "#FF9900", icon: <BiLogoAws />, link: "https://aws.amazon.com/", category: "DevOps & Cloud" },
  { name: "GCP", color: "#4285F4", icon: <SiGooglecloud />, link: "https://cloud.google.com/", category: "DevOps & Cloud" },
  { name: "DigitalOcean", color: "#0080FF", icon: <SiDigitalocean />, link: "https://www.digitalocean.com/", category: "DevOps & Cloud" },
  { name: "npm", color: "#CB3837", icon: <FaNpm />, link: "https://www.npmjs.com/", category: "DevOps & Cloud" },

  // --- Testing, Scraping & AI ---
  { name: "Jest", color: "#C21325", icon: <SiJest />, link: "https://jestjs.io/", category: "Testing, Scraping & AI" },
  { name: "Pytest", color: "#0A9EDC", icon: <SiPytest />, link: "https://docs.pytest.org/", category: "Testing, Scraping & AI" },
  { name: "Puppeteer", color: "#40B5A4", icon: <SiPuppeteer />, link: "https://pptr.dev/", category: "Testing, Scraping & AI" },
  { name: "LangChain", color: "#000000", icon: <FaLink />, link: "https://www.langchain.com/", category: "Testing, Scraping & AI" },
];
