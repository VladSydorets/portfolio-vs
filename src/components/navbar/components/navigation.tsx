"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { useTranslation } from "react-i18next";
import Loading from "@/app/loading";

export default function Navigation() {
  const { t, ready } = useTranslation();

  const pathname = usePathname();
  const linkStyles =
    "dark:text-slate-200 text-black px-3 py-1 duration-200 transition-all transition-translate duration-100 ease-in flex text-sm lg:text-base xl:text-lg";

  if (!ready) {
    return <Loading />;
  }
  return (
    <div
      className={`nav-list flex gap-6 lg:gap-4 flex-col lg:flex-row items-center`}
    >
      {navigation.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.title}
            className={`${
              isActive ? "active-link" : ""
            } ${linkStyles} w-fit h-fit`}
            href={link.href}
          >
            <span data-content={link.title}>{t(link.title)}</span>
          </Link>
        );
      })}
    </div>
  );
}
