import Link from "next/link";
import ThemeSwitcher from "./components/theme-switcher";
import Button from "../button";
import Navigation from "./components/navigation";
import { FiDownload } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-8 py-6">
      <div className="languages flex gap-4">
        <Link
          href="/"
          aria-label="Vlad Sydorets"
          className="text-2xl underline underline-offset-8 decoration-[#A855F7] hover:text-[#A855F7] transition-all duration-500 ease-in-out"
        >
          Vlad Sydorets
        </Link>
        {/* <Link href="/" locale="de-DE">
          To DE
        </Link>
        <Link href="/" locale="pl-PL">
          To PL
        </Link> */}
      </div>
      <div className="flex items-center gap-4 text-lg">
        <Navigation />
        <Button
          link="/assets/resume/cv.pdf"
          download="Vlad_Sydorets_CV.pdf"
          text="Download CV"
          icon={<FiDownload />}
        />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
