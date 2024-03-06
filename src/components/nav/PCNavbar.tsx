import { ComponentPropsWithoutRef } from "react";
import NavLinks from "./NavLinks";

type PCNavbarProps = ComponentPropsWithoutRef<"nav">;
const PCNavbar = (props: PCNavbarProps) => {
  return (
    <nav className={props.className}>
      <NavLinks className=" flex items-center justify-center gap-5 text-lg font-bold capitalize text-primary lg:text-2xl xl:gap-10" />
    </nav>
  );
};

export default PCNavbar;
