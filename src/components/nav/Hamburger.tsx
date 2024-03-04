import { ComponentPropsWithoutRef } from "react";
type HamburgerProps = ComponentPropsWithoutRef<"nav">;

const Hamburger = (props: HamburgerProps) => {
  return (
    <nav
      className={`${props.className}  absolute right-0  top-0 grid  min-h-dvh min-w-full cursor-pointer grid-cols-3 grid-rows-2 gap-2 rounded-md bg-secondary p-2 `}
    >
      <div className="  col-end-4 flex flex-col items-center justify-start gap-1.5 justify-self-end pt-2.5 ">
        <div className="h-1 w-8 rounded-md bg-white"></div>
        <div className="h-1 w-8 rounded-md bg-white"></div>
        <div className="h-1 w-8 rounded-md bg-white"></div>
      </div>
      <div className=" col-start-2 row-span-2 row-start-1 flex flex-col items-center justify-center">
        <ul className=" space-y-5 text-2xl text-primary">
          <li>home</li>
          <li>projec</li>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </div>
    </nav>
  );
};

export default Hamburger;
