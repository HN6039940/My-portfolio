import Project from "./Project";

const Projects = () => {
  return (
    <section className="min-w-full">
      <article className=" container mx-auto px-3">
        <div className="grid grid-cols-1 place-items-center gap-8 py-10">
          {/* project title */}
          <h2 className=" text-3xl font-bold text-primary sm:text-4xl">
            projects
          </h2>
          {/* projects grid container */}
          <div className="grid grid-cols-1 place-items-center gap-3 px-2 py-4 sm:grid-cols-2">
            {/* project container */}
            <Project />
            <Project />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
