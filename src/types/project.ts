import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  thumbnail: StaticImageData;
  link: string;
  tags: string[];
};
