import SocialIcons from "@/components/social-icons";
import SkillIcons from "@/components/skills-icons";
import Title from "@/components/title";
import Image from "next/image";
import { portrait } from "@/assets/portrait/portrait";

export default function About() {
  return (
    <div className="flex flex-col items-center min-h-screen p-16">
      <div className="mb-12">
        <Title title="About me" />
      </div>
      <div className="content flex">
        <div className="card w-1/3 flex flex-col items-center gap-4">
          <div className="rounded-full w-48 h-48 bg-purple-700 overflow-hidden relative">
            <Image
              className="object-cover h-full w-full absolute inset-0"
              sizes="(min-width: 1280px) 50vw, 85vw"
              src={portrait}
              alt="my image"
              placeholder="blur"
            />
          </div>
          <div className="card-desc text-center">
            <h2 className="text-2xl font-medium mb-1">Vlad Sydorets</h2>
            <p className="text-base dark:text-slate-400 text-slate-700">
              Software Engineer
            </p>
          </div>
          <SocialIcons></SocialIcons>
        </div>
        <div className="desc-text dark:text-slate-400 text-slate-700 flex flex-col gap-4 w-2/3">
          <p>
            Hello, World! My name is
            <span className="text-[#A855F7] font-medium"> Vlad </span> and I am
            a Full-Stack{" "}
            <span className="text-[#A855F7] font-medium">
              Software Engineer
            </span>
            👩🏻‍💻 based in Poland, who enjoys creating new things for the web and
            mobile and has a passion for problem solving. With the successful
            completion of my Bachelor&lsquo;s Degree at the Technical University
            of Košice, my educational background equips me with a profound
            understanding of fundamental computer science principles.
          </p>
          <p>
            During my tenure as a frontend developer, I had the invaluable
            opportunity to refine my expertise in crafting visually captivating
            and user-centric interfaces. This chapter not only facilitated
            seamless collaboration with diverse, cross-functional teams but also
            granted me a profound insight into the intricate artistry of user
            experience.
          </p>
          <p>
            Feel free to reach out via the provided contact information. Thank
            you for visiting, and I look forward to the opportunity of working
            together to bring your technological visions to life.
          </p>
        </div>
      </div>
      <div className="mt-12 mb-2">
        <Title title="Skills" />
      </div>
      <div className="skills-block">
        <SkillIcons></SkillIcons>
      </div>
    </div>
  );
}
