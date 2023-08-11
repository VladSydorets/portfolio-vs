import Link from "next/link";

export default function Navbar() {
  const navLinks = [
    {
      href: "/about",
      title: "0. About",
    },
    {
      href: "/projects",
      title: "1. Projects",
    },
    {
      href: "/contact",
      title: "2. Contact me",
    },
  ];
  return (
    <nav className="flex justify-between items-center w-full px-8 py-6">
      <div className="logo">
        <Link
          href="/"
          aria-label="Vlad Sydorets"
          className="text-2xl underline underline-offset-8 decoration-[#A855F7] hover:text-[#A855F7] transition-all duration-500 ease-in-out"
        >
          Vlad Sydorets
        </Link>
      </div>
      <div className="flex items-center gap-4 text-lg">
        <div className="nav-list flex gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-slate-200 px-3 py-1 rounded-lg duration-500 ease-in hover:bg-slate-200 hover:bg-opacity-20 hover:text-[#A855F7]"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="px-4 py-2 border-[1px] rounded-[4px] border-[#A855F7] cursor-pointer text-[#A855F7] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[#A855F7] hover:shadow-4gr">
          <a href={"/resume"} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
        <div className="nav-theme-switch">
          <button className="flex items-center justify-center bg-[#0e2440] w-10 h-10 p-2 rounded-md text-slate-200 border-slate-200 border-[1px] cursor-pointer hover:border-[#A855F7] hover:text-[#A855F7] transition-all duration-500 hover:shadow-4all">
            X
          </button>
        </div>
      </div>
    </nav>
  );
}
