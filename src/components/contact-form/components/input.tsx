import { InputHTMLAttributes } from "react";
import { InputProps } from "@/types/input";

export default function Input(
  props: InputHTMLAttributes<HTMLInputElement> | InputProps
) {
  return (
    <input
      {...props}
      className="px-4 py-2 border-[1px] mr-6 rounded-[4px] border-[#A855F7] bg-[#152b46] outline-none"
    />
  );
}
