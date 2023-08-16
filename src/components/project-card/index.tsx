import Image from "next/image";
import { Poppins } from "next/font/google";
import { Project } from "@/types/project";
import Button from "../button";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

export default function ProjectCard(props: Project) {
  return (
    <div className="flex flex-col justify-between gap-5 rounded-[16px] dark:bg-[#1d3c66] bg-[#eecbf6] w-1/2 m-auto transition-all duration-500 hover:scale-[102%]">
      <div className="h-[3in] rounded-xl overflow-hidden relative">
        <Image
          fill
          className="object-cover h-full w-full absolute inset-0"
          sizes="(min-width: 1280px) 50vw, 85vw"
          src={props.thumbnail}
          placeholder="blur"
          alt="project image"
        />
      </div>
      <div
        className={`${poppins.className} flex flex-col gap-4 justify-between pt-4 p-8`}
      >
        <ul className="flex flex-wrap gap-3 text-xs">
          {props.tags?.map((tag) => (
            <li
              key={tag}
              className="bg-purple-400 px-2 py-1 rounded-3xl cursor-default"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-card-text flex flex-col gap-3">
          <h3 className={`font-bold text-4xl`}>{props.title}</h3>
          <p className="">{props.description}</p>
        </div>
        <Button text="See more" link={props.link} className="self-end" />
      </div>
    </div>
  );
}
