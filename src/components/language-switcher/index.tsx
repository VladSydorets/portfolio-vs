"use client";

import { useTranslation } from "react-i18next";
import { US, DE, PL } from "country-flag-icons/react/3x2";

const languages = [
  {
    code: "en",
    name: "English",
    flag: <US title="United States" aria-label="English" className="w-6 h-6" />,
  },
  {
    code: "de",
    name: "German",
    flag: <DE title="Germany" aria-label="Polski" className="w-6 h-6" />,
  },
  {
    code: "pl",
    name: "Polish",
    flag: <PL title="Poland" aria-label="Deustch" className="w-6 h-6" />,
  },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-4">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => switchLanguage(lang.code)}
          className={`flex items-center gap-1 w-10 h-10 p-2 rounded-full transition-all cursor-pointer duration-300 ${
            i18n.language === lang.code
              ? "border border-[#A855F7]"
              : "bg-transparent border border-transparent dark:hover:border-white hover:border-black"
          }`}
          title={lang.name}
        >
          {lang.flag}
        </button>
      ))}
    </div>
  );
}
