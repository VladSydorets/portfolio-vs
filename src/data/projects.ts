import { Project } from "@/types/project";
import { pokedex, graphs, toki } from "@/assets/projects/projects";

export const projects: Project[] = [
  {
    title: "Toki Issue Tracker",
    description: "projects.toki",
    thumbnail: toki,
    demo: "https://toki-one.vercel.app/",
    repo: "https://github.com/VladSydorets/toki",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
  },
  {
    title: "Pokédex",
    description: "projects.pokedex",
    thumbnail: pokedex,
    demo: "https://pokedex-jade-three.vercel.app/",
    repo: "https://github.com/VladSydorets/pokedex",
    tags: ["Vue.js", "TypeScript"],
  },
  {
    title: "Graph Theory Visualization Tool",
    description: "projects.graphs",
    thumbnail: graphs,
    demo: "https://vladsydorets.github.io/graphs-app/",
    repo: "https://github.com/VladSydorets/graphs-app",
    tags: ["React", "Tailwind CSS", "i18next", "D3.js"],
  },
];
