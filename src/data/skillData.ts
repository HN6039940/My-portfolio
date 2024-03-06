import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { IconType } from "react-icons";

type SkillType = {
  name: string;
  icon: IconType;
};

export const skillData: SkillType[] = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
];
