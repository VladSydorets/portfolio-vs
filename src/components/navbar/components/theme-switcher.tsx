"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : "light";

  return (
    <div className="nav-theme-switch">
      <button
        onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        className="flex items-center justify-center bg-transparent w-10 h-10 p-2 rounded-full dark:text-slate-200 text-black dark:border-[#A855F7] border-[#A855F7] border-[1px] cursor-pointer dark:hover:border-white hover:border-black transition-all duration-300"
      >
        <span>{currentTheme === "dark" ? <FiSun /> : <FiMoon />}</span>
      </button>
    </div>
  );
}
