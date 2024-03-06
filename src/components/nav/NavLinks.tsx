import { ComponentPropsWithoutRef } from "react";
import NavLink from "./NavLink";
import { NavLinkData } from "../../data/NavLinkData";

type NavLinksProps = ComponentPropsWithoutRef<"ul">;

const NavLinks = (props: NavLinksProps) => {
  return (
    <ul className={`${props.className} `}>
      {NavLinkData.map((link, index) => {
        return <NavLink key={index} title={link.title} path={link.path} />;
      })}
    </ul>
  );
};

export default NavLinks;
