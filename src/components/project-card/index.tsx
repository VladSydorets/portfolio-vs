import Image from "next/image";
import { Inconsolata } from "next/font/google";
import { Project } from "@/types/project";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
});

const ProjectCard: React.FC<Project> = (props) => {
  return (
    <div className="flex justify-between gap-5 w-full border rounded-[4px] border-[#A855F7] p-4 max-h-80">
      <Image
        src={props.thumbnail}
        className="rounded-xl border border-black"
        alt="project image"
        width={300}
        height={150}
      />
      <div
        className={`${inconsolata.className} flex flex-col gap-4 justify-between p-2 w-full`}
      >
        <div className="project-card-text flex flex-col gap-3">
          <h3 className={`font-bold text-4xl`}>{props.title}</h3>
          <p className="">{props.description}</p>
        </div>
        <a
          href={props.link}
          className="self-end px-4 py-2 border-[1px] mr-6 rounded-[4px] border-[#A855F7] bg-[#1f3d63] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[#A855F7] hover:shadow-4gr"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
