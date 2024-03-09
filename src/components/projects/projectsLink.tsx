type ProjectsLinkProps = {
  links: {
    siteLink: string;
    githubLink: string;
  };
};

const ProjectsLink = (props: ProjectsLinkProps) => {
  const { siteLink, githubLink } = props.links;
  return (
    <div className="flex items-center justify-center gap-3 transition-all">
      {/* project site link */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={siteLink}
        className="  inline-block cursor-pointer rounded-sm  bg-primary px-6 py-2 uppercase tracking-widest text-slate-50 no-underline transition-all hover:bg-secondary hover:shadow-2xl"
      >
        site
      </a>
      {/* project github link */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={githubLink}
        className="  inline-block cursor-pointer rounded-sm border-2 border-secondary bg-slate-50 px-6 py-2 uppercase tracking-widest text-primary no-underline transition-all hover:border-primary hover:bg-secondary hover:shadow-2xl"
      >
        Github
      </a>
    </div>
  );
};

export default ProjectsLink;
