import { Aleo } from "next/font/google";
import TypingText from "../typing-text";
import Button from "../button";
import { FiDownload, FiArrowRightCircle } from "react-icons/fi";

const aleo = Aleo({ weight: ["700"], subsets: ["latin"], style: ["normal"] });

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 items-start container pt-24 lg:pt-28 xl:pt-32">
      <TypingText />
      <div className="hero-title">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ${aleo.className}`}
        >
          Hey!👋 My name is{" "}
          <span className="text-[#A855F7] font-bold title animated-text border-r-4 dark:border-white border-black">
            Vlad
          </span>
        </h1>
      </div>
      <p className="text-base md:text-lg lg:text-xl xl:text-2xl dark:text-[#C2CBF4] text-slate-600 w-full md:w-2/3 leading-relaxed">
        I&lsquo;m a <span className="text-[#A855F7]">Software Engineer</span>,
        who gets the job done. Currently, I&lsquo;m focused on{" "}
        <span className="text-[#FFB86C]">Full-stack</span> Web and Mobile
        Development.
      </p>
      <div className="buttons-row flex gap-4 text-sm sm:text-base md:text-lg">
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
