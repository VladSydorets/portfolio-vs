import Link from "next/link";
import { Aleo } from "next/font/google";

const aleo = Aleo({ weight: ["700"], subsets: ["latin"], style: ["normal"] });

export default function Hero() {
  return (
    <section className="flex flex-col gap-10 items-start px-16 pt-44">
      <div className="hero-title">
        <h1 className={`text-6xl font-bold ${aleo.className}`}>
          Hey!👋 My name is{" "}
          <span className="text-[#A855F7] font-bold title">Vlad</span>
        </h1>
      </div>
      <p className="text-xl text-[#C2CBF4] w-2/3 leading-relaxed">
        I&lsquo;m a <span className="text-[#A855F7]">Software Engineer</span>,
        who gets the job done. Currently, I&lsquo;m focused on{" "}
        <span className="text-[#FFB86C]">Full-stack</span> Web and Mobile
        Development.
      </p>

      <div className="px-6 py-4 border-[1px] rounded-[4px] border-[#A855F7] cursor-pointer text-[#A855F7] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[#A855F7] hover:shadow-4gr">
        <a href={"#"} target="_blank" rel="noreferrer">
          Explore more
        </a>
      </div>
    </section>
  );
}
