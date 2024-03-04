import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";

const Skills = () => {
  return (
    <section className=" min-w-full">
      {/* skills container */}
      <article className=" container mx-auto px-3">
        {/* icon container */}
        <div className="grid grid-cols-1 place-items-center gap-8 py-10">
          {/* skills title */}
          <h2 className=" text-3xl font-bold text-primary">skills</h2>
          {/* skills content */}
          <div className="grid grid-cols-2 gap-5">
            {/* skill */}
            <div className="flex flex-col items-center rounded-md bg-white p-5">
              <FaHtml5 className=" text-7xl text-primary" />
            </div>
            {/* skill */}
            <div className="relative flex flex-col items-center rounded-md bg-white p-5">
              <FaCss3Alt className=" text-7xl text-primary" />
              {/* <span className=" absolute inset-0 size-full rotate-45 bg-black"></span> */}
            </div>
            {/* skill */}
            <div className="flex flex-col items-center rounded-md bg-white p-5">
              <IoLogoJavascript className=" text-7xl text-primary" />
            </div>
            {/* skill */}
            <div className="flex flex-col items-center rounded-md bg-white p-5">
              <SiTypescript className=" text-7xl text-primary" />
            </div>
            {/* skill */}
            <div className="flex flex-col items-center rounded-md bg-white p-5">
              <FaReact className=" text-7xl text-primary" />
            </div>
            {/* skill */}
            <div className="flex flex-col items-center rounded-md bg-white p-5">
              <FaNodeJs className=" text-7xl text-primary" />
            </div>
            {/* skill */}
            <div className="flex flex-col items-center rounded-md bg-white p-5">
              <SiTailwindcss className=" text-7xl text-primary" />
            </div>
            {/* skill */}
            <div className="flex flex-col items-center rounded-md bg-white p-5">
              <FaGitAlt className=" text-7xl text-primary" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;
