import ColorGenerator from "../assets/image/ColorGenerator.png";

import ProjectsLink from "./projectsLink";

const Project = () => {
  return (
    <div className=" grid w-full max-w-2xl grid-cols-1 gap-3 rounded-md border-2 border-tertiary bg-slate-50 px-3 py-4 ">
      {/* project img */}
      <div className="h-full w-full">
        <img
          src={ColorGenerator}
          alt="project"
          className=" h-full w-full rounded-md object-cover"
        />
      </div>
      {/* project name */}
      <h2 className=" text-xl font-bold text-tertiary">Color Generator</h2>
      {/* project description */}
      <p className="  text-quaternary">
        A simple color generator that generates random colors.
      </p>

      <ProjectsLink />
    </div>
  );
};

export default Project;
