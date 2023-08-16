"use client";

import { TypeAnimation } from "react-type-animation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["500"],
  subsets: ["latin"],
  style: "normal",
});

export default function TypingText() {
  return (
    <>
      <TypeAnimation
        sequence={[
          "Software Engineer", // Types 'Software Engineer'
          1000, // Waits 1s
          "Freelancer", // Deletes 'Software Engineer' and types 'Freelancer'
          2000, // Waits 2s
          "Cat Lover", // Types 'Cat Lover' without deleting 'Freelancer'
          () => {
            // console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        className={`text-xl bg:text-[#E2E8F0] text-slate-500 font-medium ${poppins.className}`}
      />
    </>
  );
}
