import React from "react";
import ColorGenerator from "../assets/image/ColorGenerator.png";

const Projects = () => {
  return (
    <section className="min-w-full">
      <article className=" container mx-auto px-3">
        <div className="grid grid-cols-1 place-items-center gap-8 py-10">
          {/* project title */}
          <h2 className=" text-3xl font-bold text-primary">projects</h2>
          {/* projects grid container */}
          <div className="grid grid-cols-1 place-items-center gap-3 px-2 py-4">
            {/* project container */}
            <div className="grid w-full grid-cols-1 gap-3 rounded-md border-2 border-tertiary bg-slate-50 px-3 py-4">
              {/* project img */}
              <div className="h-full w-full">
                <img
                  src={ColorGenerator}
                  alt="project"
                  className=" h-full w-full rounded-md object-cover"
                />
              </div>
              {/* project name */}
              <h2 className=" text-xl font-bold text-tertiary">
                Color Generator
              </h2>
              {/* project description */}
              <p className="  text-quaternary">
                A simple color generator that generates random colors.
              </p>
              <div className="flex items-center justify-center gap-3">
                {/* project site link */}
                <a
                  href="#"
                  className=" inline-block  cursor-pointer rounded-sm bg-primary px-6 py-2 uppercase tracking-widest text-slate-50 no-underline"
                >
                  site
                </a>
                {/* project github link */}
                <a
                  href="#"
                  className=" inline-block cursor-pointer rounded-sm border-2 border-secondary bg-slate-50 px-6 py-2 uppercase tracking-widest text-primary no-underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
