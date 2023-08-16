import Link from "next/link";
import ThemeSwitcher from "./components/theme-switcher";
import Button from "../button";
import Navigation from "./components/navigation";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-full px-8 py-6">
      <div className="languages flex gap-4">
        {/* <Link
          href="/"
          aria-label="Vlad Sydorets"
          className="text-2xl underline underline-offset-8 decoration-[#A855F7] hover:text-[#A855F7] transition-all duration-500 ease-in-out"
        >
          Vlad Sydorets
        </Link> */}
        <Link href="/" locale="de-DE">
          To DE
        </Link>
        <Link href="/" locale="pl-PL">
          To PL
        </Link>
      </div>
      <div className="flex items-center gap-4 text-lg">
        <Navigation />
        {/* <div className="px-4 py-2 border-[1px] rounded-[4px] border-[#A855F7] cursor-pointer text-[#A855F7] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[#A855F7] hover:shadow-4gr">
        </div> */}
        <Button link="/resume" text="Resume" />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
