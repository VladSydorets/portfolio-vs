import Link from "next/link";
import { Aleo } from "next/font/google";
import TypingText from "../typing-text";
import Button from "../button";
import { FiDownload, FiArrowRightCircle } from "react-icons/fi";
// import { BsFillArrowRightSquareFill } from "react-icons/bs";

const aleo = Aleo({ weight: ["700"], subsets: ["latin"], style: ["normal"] });

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 items-start px-16 pt-44">
      <TypingText />
      <div className="hero-title">
        <h1
          className={`text-8xl font-bold ${aleo.className} animated-text border-r-4 dark:border-white border-black`}
        >
          Hey!👋 My name is{" "}
          <span className="text-[#A855F7] font-bold title">Vlad</span>
        </h1>
      </div>
      <p className="text-2xl dark:text-[#C2CBF4] text-slate-600 w-2/3 leading-relaxed">
        I&lsquo;m a <span className="text-[#A855F7]">Software Engineer</span>,
        who gets the job done. Currently, I&lsquo;m focused on{" "}
        <span className="text-[#FFB86C]">Full-stack</span> Web and Mobile
        Development.
      </p>
      <div className="buttons-row flex">
        <Button
          text="Contact me"
          link="/contact"
          icon={<FiArrowRightCircle />}
        />
        <Button
          link="/assets/resume/cv.pdf"
          download="Vlad_Sydorets_CV.pdf"
          text="Download CV"
          icon={<FiDownload />}
        />
      </div>
    </section>
  );
}
