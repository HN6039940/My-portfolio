import Hamburger from "./nav/Hamburger";
const NavBar = () => {
  return (
    <section className=" sticky top-0 z-20 min-w-full  bg-quaternary opacity-5 ">
      <div className=" relative flex size-full items-center justify-between px-3 py-4 ">
        <h1 className=" text-xl text-primary">NAV</h1>
        <Hamburger className="sm:hidden" />
      </div>
    </section>
  );
};

export default NavBar;
