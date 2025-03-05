"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeSwitcher from "./components/theme-switcher";
import Button from "../button";
import Navigation from "./components/navigation";
import { motion, AnimatePresence } from "motion/react";
import { FiDownload } from "react-icons/fi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import LanguageSwitcher from "../language-switcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="flex justify-between items-center w-full container py-6">
      <div className="flex gap-4">
        <Link
          href="/"
          aria-label="Vlad Sydorets"
          className="text-xl underline underline-offset-8 decoration-[#A855F7] hover:text-[#A855F7] transition-all duration-500 ease-in-out"
        >
          Vlad Sydorets
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-6 text-lg">
        <Navigation />
        <Button
          link="/assets/resume/cv.pdf"
          download="Vlad_Sydorets_CV.pdf"
          text="Download CV"
          icon={<FiDownload />}
        />
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden text-2xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <IoClose /> : <HiMenu />}
      </button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "string", damping: 25, stiffness: 300 }}
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-[#c2cbf4] dark:bg-[#0d213b] shadow-xl p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close menu"
                >
                  <IoClose className="text-2xl" />
                </button>
              </div>
              <div className="flex flex-col gap-8 items-center">
                <div className="w-full">
                  <Navigation />
                </div>
                <div className="w-full pt-4 text-sm lg:text-lg lg:gap-4 flex justify-center items-center border-t border-gray-200 dark:border-slate-800">
                  <Button
                    link="/assets/resume/cv.pdf"
                    download="Vlad_Sydorets_CV.pdf"
                    text="Download CV"
                    icon={<FiDownload />}
                  />
                </div>
                <div className="flex gap-6 items-center">
                  <ThemeSwitcher />
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
