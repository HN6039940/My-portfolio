import { useQuery } from "@tanstack/react-query";
import Project from "./Project";
import { getSpaceEntries } from "../../functions/contenfulFn";

type SiteImageType = {
  fields: {
    description: string;
    file: {
      contentType: string;
      details: {
        image: {
          height: number;
          width: number;
        };
        size: number;
      };
      fileName: string;
      url: string;
    };
    title: string;
  };
  sys: {
    id: string;
    linkType: string;
    type: string;
  };
  metadata: {
    tags: [];
  };
};

const isSiteImage = (siteImage: unknown): siteImage is SiteImageType => {
  return (
    (siteImage as SiteImageType).fields !== undefined &&
    typeof (siteImage as SiteImageType).fields.file.url === "string"
  );
};

const Projects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await getSpaceEntries("portFolio");
      const portFolioFields = response?.map((item) => {
        const field = item.fields;
        return {
          projectTitle: (field.projectTitle as string) || "Project Title",
          projectDescription:
            (field.projectDescription as string) || "Project Description",
          siteImage: isSiteImage(field.siteImage)
            ? (field.siteImage.fields.file.url as string)
            : "",
          siteLink: (field.siteUrl as string) || "#",
          githubLink: (field.githubUrl as string) || "#",
        };
      });
      return portFolioFields;
    },
  });

  if (isLoading) return <div>Loading...</div>;

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
            {isLoading ? (
              <div className="flex h-96 w-full items-center justify-center">
                <div className="h-10 w-10 animate-spin rounded-full border-2 border-t-2 border-primary"></div>
              </div>
            ) : (
              data?.map((project, index) => {
                return <Project key={index} project={project} />;
              })
            )}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Projects;
