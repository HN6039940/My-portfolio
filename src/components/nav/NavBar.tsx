import { BiHomeSmile } from "react-icons/bi";
import Hamburger from "./Hamburger";
import PCNavbar from "./PCNavbar";

const NavBar = () => {
  return (
    <section className=" sticky top-0 z-20 min-w-full  bg-quaternary  ">
      <div className=" relative flex size-full items-center justify-between px-3 py-4 lg:px-8 lg:py-8 ">
        <BiHomeSmile className=" size-8 text-primary lg:size-12 "></BiHomeSmile>
        <Hamburger />
        <PCNavbar className="hidden sm:block" />
      </div>
    </section>
  );
};

export default NavBar;
