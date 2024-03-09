import ColorGenerator from "../../assets/image/ColorGenerator.png";

import ProjectsLink from "./projectsLink";

type ProjectProps = {
  project: {
    projectTitle: string;
    projectDescription: string;
    siteImage: string;
    siteLink: string;
    githubLink: string;
  };
};

const Project = (props: ProjectProps) => {
  const { projectTitle, projectDescription, siteImage, siteLink, githubLink } =
    props.project;
  return (
    <div className=" grid w-full max-w-2xl grid-cols-1 gap-3 rounded-md border-2 border-tertiary bg-slate-50 px-3 py-4 ">
      {/* project img */}
      <div className=" h-full  w-full">
        <img
          src={siteImage ? siteImage : ColorGenerator}
          alt={projectTitle}
          className=" h-full w-full rounded-md object-cover"
        />
      </div>
      {/* project name */}
      <h2 className=" text-xl font-bold text-tertiary">{projectTitle}</h2>
      {/* project description */}
      <p className="  text-quaternary">{projectDescription}</p>

      <ProjectsLink links={{ siteLink, githubLink }} />
    </div>
  );
};

export default Project;
