import { Project } from "@/types/project";
import { pokedex, graphs, toki } from "@/assets/projects/projects";

export const projects: Project[] = [
  {
    title: "Toki Issue Tracker",
    description:
      "A web application designed to help users track issues efficiently. It allows users to log issues, update their status, and store the necessary details.",
    thumbnail: toki,
    demo: "https://toki-one.vercel.app/",
    repo: "https://github.com/VladSydorets/toki",
    tags: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS"],
  },
  {
    title: "Pokédex",
    description:
      "A Pokédex web application built with Vue.js that allows users to browse, search, and view detailed information about various Pokémon, including their stats and abilities.",
    thumbnail: pokedex,
    demo: "https://pokedex-jade-three.vercel.app/",
    repo: "https://github.com/VladSydorets/pokedex",
    tags: ["Vue.js", "TypeScript"],
  },
  {
    title: "Graph Theory Visualization Tool",
    description:
      "Single page React application that allows users to create graph structures, export the canvas as a png image and check the correctness of coloring.",
    thumbnail: graphs,
    demo: "https://vladsydorets.github.io/graphs-app/",
    repo: "https://github.com/VladSydorets/graphs-app",
    tags: ["React", "Tailwind CSS", "i18next", "D3.js"],
  },
];
