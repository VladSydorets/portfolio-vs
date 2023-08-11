import Link from "next/link";
import SocialIcon from "@/components/social-icons";

export default function Footer() {
  <div className="container flex items-center text-center justify-between flex-col gap-2 pb-4">
    <div className="flex items-center">
      <SocialIcon />
    </div>

    <div className="flex flex-col gap-1">
      <div className="text-brand-primary">
        Made with{" "}
        <Link href="https://nextjs.org/" target="_blank">
          <span aria-label="love" role="img">
            💖
          </span>{" "}
        </Link>
      </div>
      <div className="text-brand-primary min-[2170px]:dark:text-white">
        <Link
          href="/"
          rel="noopener noreferrer"
          target="_blank"
          className="text-brand-primary hover:text-purple-500 transition-all duration-200 ease-in"
        >
          Vlad Sydorets
        </Link>{" "}
        <span>•</span> © {new Date().getFullYear()}{" "}
      </div>
    </div>
  </div>;
}
