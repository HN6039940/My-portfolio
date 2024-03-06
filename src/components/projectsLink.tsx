const ProjectsLink = () => {
  return (
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
  );
};

export default ProjectsLink;
