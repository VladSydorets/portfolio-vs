import { InputHTMLAttributes } from "react";
import { InputProps } from "@/types/input";

export default function Input(
  props: InputHTMLAttributes<HTMLInputElement> | InputProps
) {
  return (
    <input
      {...props}
      className="px-4 py-2 mr-6 rounded-[4px] dark:bg-[#2d5485] bg-[#f4ebf5] outline-none"
    />
  );
}
