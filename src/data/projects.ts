import { Project } from "@/types/project";
import { pokedex, graphs } from "@/assets/projects/projects";

export const projects: Project[] = [
  {
    title: "Pokédex",
    description: "Pokédex web application built with Vue.js",
    thumbnail: pokedex,
    link: "https://pokedex-jade-three.vercel.app/",
  },
  {
    title: "Graphs Coloring App",
    description:
      "Single page React application that allows users to create graph structures, export the canvas as a png image and check the correctness of coloring",
    thumbnail: graphs,
    link: "https://vladsydorets.github.io/graphs-app/",
  },
];
