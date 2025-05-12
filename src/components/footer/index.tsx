"use client";

import Link from "next/link";
import SocialIcon from "@/components/social-icons";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <div className="container flex items-center text-center justify-between flex-col gap-2 pb-4 text-sm sm:text-base md:text-lg">
      <div className="flex items-center">
        <SocialIcon />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-brand-primary">
          {t("made-with")}{" "}
          <Link href="https://nextjs.org/" target="_blank">
            <span aria-label="love" role="img">
              💖
            </span>{" "}
          </Link>
          {t("for")}{" "}
          <Link
            href="https://media.tenor.com/D6ewisp89HIAAAAd/this-cat-i-have-hired-this-cat-to-stare-at-you.gif"
            target="_blank"
          >
            <span aria-label="cat" role="img">
              😺
            </span>
          </Link>
        </div>
        <div className="text-brand-primary min-[2170px]:dark:text-white">
          <Link
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="text-brand-primary hover:text-[#60A5FA] transition-all duration-200 ease-in"
          >
            Vlad Sydorets
          </Link>{" "}
          <span>•</span> © {new Date().getFullYear()}{" "}
        </div>
      </div>
    </div>
  );
}
