"use client";

import Image from "next/image";
import { Project } from "@/types/project";
import Button from "../button";
import { FaGithub } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import Loading from "@/app/loading";

export default function ProjectCard(props: Project) {
  const { t, ready } = useTranslation();

  if (!ready) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col justify-between gap-5 rounded-[16px] dark:bg-[#162d4c] bg-[#e8f0f5] w-full lg:w-1/2 m-auto transition-all duration-500 hover:scale-[102%]">
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
      <div className="flex flex-col gap-4 justify-between pt-4 p-8">
        <ul className="flex flex-wrap gap-3 text-xs">
          {props.tags?.map((tag) => (
            <li
              key={tag}
              className="dark:text-slate-700 bg-blue-200 px-2 py-1 rounded-3xl cursor-default"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-card-text flex flex-col gap-3">
          <h3
            className={`font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl`}
          >
            {props.title}
          </h3>
          <p className="text-sm md:text-base">{props.description}</p>
        </div>
        <div className="flex justify-start gap-2">
          <Button
            text={t("go-to-repo")}
            link={props.repo}
            icon={<FaGithub />}
          />
          <Button text={t("view-site")} link={props.demo} icon={<FaRegEye />} />
        </div>
      </div>
    </div>
  );
}
