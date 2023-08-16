"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  if (!mounted) return null;

  return (
    <div className="nav-theme-switch">
      <button
        onClick={handleToggle}
        className="flex items-center justify-center bg-transparent w-10 h-10 p-2 rounded-full dark:text-slate-200 text-black dark:border-gray-400 border-slate-300 border-[1px] cursor-pointer dark:hover:border-white hover:border-black transition-all duration-300"
      >
        <span>{theme === "dark" ? <FiSun /> : <FiMoon />}</span>
      </button>
    </div>
  );
}
