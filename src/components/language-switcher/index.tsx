"use client";

import { useTranslation } from "react-i18next";
import { US, DE, PL } from "country-flag-icons/react/3x2";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

const languages = [
  {
    code: "en",
    name: "English",
    flag: <US title="United States" aria-label="English" className="w-6 h-6" />,
  },
  {
    code: "de",
    name: "German",
    flag: <DE title="Germany" aria-label="German" className="w-6 h-6" />,
  },
  {
    code: "pl",
    name: "Polish",
    flag: <PL title="Poland" aria-label="Polish" className="w-6 h-6" />,
  },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<string | null>(null);

  useEffect(() => {
    const storedLang = localStorage.getItem("i18nextLng") || "en";
    i18n.changeLanguage(storedLang).then(() => {
      setCurrentLang(storedLang);
    });
  }, [i18n]);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      localStorage.setItem("i18nextLng", lang);
      setCurrentLang(lang);
    });
  };

  if (!currentLang) {
    return <Loading />;
  }

  return (
    <div className="flex gap-4">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`flex items-center gap-1 bg-transparent w-10 h-10 p-2 rounded-full transition-all cursor-pointer duration-300 ${
            currentLang === lang.code
              ? "border border-[#60A5FA]"
              : "border border-transparent dark:hover:border-white hover:border-black"
          }`}
          title={lang.name}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
}
