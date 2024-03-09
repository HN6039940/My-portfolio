import { useQuery } from "@tanstack/react-query";
import Project from "./Project";
import { getSpaceEntries } from "../../functions/contenfulFn";

const Projects = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await getSpaceEntries("portFolio");
      return response;
    },
  });

  return (
    <section className="min-w-full" id="projects">
      <article className=" container mx-auto px-3">
        <div className="grid grid-cols-1 place-items-center gap-8 py-10">
          {/* project title */}
          <h2 className=" text-3xl font-bold capitalize text-primary sm:text-4xl">
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
