import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { BiLogoUpwork } from "react-icons/bi";

export default function SocialIcons() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/VladSydorets",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/vlad-sydorets//",
    },
    {
      name: "Mail",
      icon: <FiMail />,
      link: "mailto: sidorecvv@gmail.com",
    },
    {
      name: "Upwork",
      icon: <BiLogoUpwork />,
      link: "https://www.upwork.com/freelancers/~0133e9f54be64fec83",
    },
  ];
  return (
    <div className="social-icons">
      <ul className="social-icons-list flex flex-row-reverse gap-3">
        {socialLinks.map(({ name, icon, link }) => (
          <li
            key={name}
            title={name}
            className="social-icons-list-item hover:text-purple-500 transition-all duration-700 ease-in text-xl hover:-translate-y-0.5 hover:rotate-[360deg]"
          >
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
