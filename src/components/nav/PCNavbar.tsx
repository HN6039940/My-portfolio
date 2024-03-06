import { ComponentPropsWithoutRef } from "react";

type PCNavbarProps = ComponentPropsWithoutRef<"nav">;
const PCNavbar = (props: PCNavbarProps) => {
  return (
    <nav {...props}>
      <ul className=" flex items-center justify-center gap-5 text-xl font-bold capitalize text-primary">
        <li className="cursor-pointer">
          <a href="#">top</a>
        </li>
        <li className=" cursor-pointer">
          <a href="#"> profile </a>
        </li>
        <li className=" cursor-pointer">
          <a href="#"> about me </a>
        </li>
        <li className=" cursor-pointer">
          <a href="#"> skills </a>
        </li>
        <li className=" cursor-pointer">
          <a href="#"> projects </a>
        </li>
      </ul>
    </nav>
  );
};

export default PCNavbar;
