import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/JetJadeja",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/jetjadeja",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/jetjadeja",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/jet-jadeja-2a4023247/",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:jjadeja@usc.edu",
  },
];

const Socials: React.FC = () => {
  return (
    <div className="flex gap-6 items-center">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-3xl"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
