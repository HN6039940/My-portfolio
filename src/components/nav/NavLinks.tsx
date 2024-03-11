import { ComponentPropsWithoutRef } from "react";
import NavLink from "./NavLink";
import { NavLinkData } from "../../data/NavLinkData";

type NavLinksProps = {
  setIsOpen?: (isOpen: boolean) => void;
} & ComponentPropsWithoutRef<"ul">;

const NavLinks = (props: NavLinksProps) => {
  return (
    <ul className={`${props.className} `}>
      {NavLinkData.map((link, index) => {
        if ("setIsOpen" in props)
          return (
            <NavLink
              key={index}
              title={link.title}
              path={link.path}
              setIsOpen={props.setIsOpen}
            />
          );
        return <NavLink key={index} title={link.title} path={link.path} />;
      })}
    </ul>
  );
};

export default NavLinks;
