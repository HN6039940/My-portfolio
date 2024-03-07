import { ComponentPropsWithoutRef } from "react";
import NavLink from "./NavLink";
import { NavLinkData } from "../../data/NavLinkData";

type NavLinksProps = {
  setIsOpen: (isOpen: boolean) => void;
} & ComponentPropsWithoutRef<"ul">;

const NavLinks = (props: NavLinksProps) => {
  return (
    <ul className={`${props.className} `}>
      {NavLinkData.map((link, index) => {
        return (
          <NavLink
            key={index}
            title={link.title}
            path={link.path}
            setIsOpen={props.setIsOpen}
          />
        );
      })}
    </ul>
  );
};

export default NavLinks;
