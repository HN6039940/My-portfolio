const NavBar = () => {
  return (
    <section className=" sticky top-0 flex min-w-full items-center justify-between   bg-quaternary px-3 py-4">
      <h1 className=" text-xl text-primary">NAV</h1>
      <nav className=" flex size-8 cursor-pointer flex-col items-center justify-center gap-1.5">
        <div className="h-1 w-full rounded-md bg-white"></div>
        <div className="h-1 w-full rounded-md bg-white"></div>
        <div className="h-1 w-full rounded-md bg-white"></div>
      </nav>
    </section>
  );
};

export default NavBar;
