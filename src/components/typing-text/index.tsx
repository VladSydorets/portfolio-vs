"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Software Engineer",
          1000,
          "Freelancer",
          2000,
          "Cat Lover",
          () => {},
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className="text-xl bg:text-[#E2E8F0] text-slate-500 font-medium"
      />
    </>
  );
}
