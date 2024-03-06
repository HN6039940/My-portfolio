import Hamburger from "./nav/Hamburger";
import PCNavbar from "./nav/PCNavbar";
const NavBar = () => {
  return (
    <section className=" sticky top-0 z-20 min-w-full  bg-quaternary  ">
      <div className=" relative flex size-full items-center justify-between px-3 py-4 ">
        <h1 className=" text-xl text-primary">NAV</h1>
        <Hamburger className="sm:hidden" />
        <PCNavbar className="hidden sm:block" />
      </div>
    </section>
  );
};

export default NavBar;
