import type { Button } from "@/types/button";

export default function Button(props: Button) {
  const btnStyles =
    "flex gap-2 items-center px-4 py-2 border-[1px] rounded-[4px] border-[#60A5FA] dark:text-white text-black bg-transparent transition-all duration-300 hover:shadow-[#60A5FA] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-4gr";
  if (props.link) {
    return (
      <a
        href={props.link}
        className={`${props.className ? props.className : ""} ${btnStyles} `}
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
        className={`${props.className ? props.className : ""} ${btnStyles} `}
      >
        {props.text} <span className="text-2xl">{props.icon}</span>
      </button>
    );
}
