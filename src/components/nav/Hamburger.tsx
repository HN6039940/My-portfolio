import { ComponentPropsWithoutRef } from "react";
type HamburgerProps = ComponentPropsWithoutRef<"nav">;

const Hamburger = (props: HamburgerProps) => {
  return (
    <nav
      className={`${props.className}  absolute right-0 top-0  grid min-h-dvh  min-w-full  grid-cols-3 grid-rows-2 gap-2 rounded-md bg-secondary p-2 opacity-50 `}
    >
      <div className="  col-end-4 flex cursor-pointer flex-col items-center justify-start justify-self-end pt-2.5">
        <div className=" space-y-1.5">
          <div className="h-1 w-8 rounded-md bg-white"></div>
          <div className="h-1 w-8 rounded-md bg-white"></div>
          <div className="h-1 w-8 rounded-md bg-white"></div>
        </div>
      </div>
      <div className=" col-span-2 col-start-1 row-span-2 row-start-1 flex flex-col items-end justify-center">
        <ul className=" space-y-5 text-2xl font-bold capitalize text-primary">
          <li className=" cursor-pointer">
            <a href="#"> top </a>
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
      </div>
    </nav>
  );
};

export default Hamburger;
