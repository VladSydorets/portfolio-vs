import { forwardRef, InputHTMLAttributes } from "react";
import { InputProps } from "@/types/input";

const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> | InputProps
>((props, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className="px-4 py-2 mr-6 rounded-[4px] dark:bg-[#2d5485] bg-[#f4ebf5] outline-none"
    />
  );
});

Input.displayName = "Input";

export default Input;
