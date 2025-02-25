import { Button } from "@/types/button";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  style: "normal",
});

export default function Button(props: Button) {
  const btnStyles =
    "flex gap-2 items-center px-4 py-2 border-[1px] mr-6 rounded-[4px] border-[#A855F7] dark:text-white text-black bg-transparent transition-all duration-300 hover:shadow-[#A855F7] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-4gr";
  if (props.link) {
    return (
      <a
        href={props.link}
        className={`${props.className ? props.className : ""} ${btnStyles} ${
          poppins.className
        }`}
        download={props.download}
        target="_blank"
        rel="noreferrer"
      >
        {props.text} <span className="text-2xl">{props.icon}</span>
      </a>
    );
  } else
    return (
      <button
        className={`${props.className ? props.className : ""} ${btnStyles} ${
          poppins.className
        }`}
      >
        {props.text} <span className="text-2xl">{props.icon}</span>
      </button>
    );
}
