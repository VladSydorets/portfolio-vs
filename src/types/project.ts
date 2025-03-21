import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  thumbnail: StaticImageData;
  demo: string;
  repo: string;
  tags: string[];
};
