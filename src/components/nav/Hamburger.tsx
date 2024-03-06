import { css, keyframes } from "@emotion/react";
import { useState } from "react";
import NavLinks from "./NavLinks";

import {
  closeBar,
  desappearBar,
  openBar,
  appearBar,
} from "../../assets/style/hamburger.style";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const HamburgerClipPath = css`
    transition: clip-path 0.6s ease-in-out;
    ${isOpen
      ? "clip-path: circle(100%);"
      : "clip-path: circle(10% at 96% 2.5%)"};
  `;

  return (
    <nav
      css={HamburgerClipPath}
      className={` absolute right-0 top-0 grid  min-h-dvh min-w-full  grid-cols-3  grid-rows-2 gap-2 rounded-md bg-secondary p-2 sm:hidden  `}
    >
      <div className="  col-end-4 flex cursor-pointer flex-col items-center justify-start justify-self-end pt-2.5">
        <div onClick={() => setIsOpen(!isOpen)} className=" space-y-1.5">
          <div
            css={css`
              ${isOpen ? closeBar(15, 45) : openBar}
            `}
            className="h-1 w-8 rounded-md bg-white"
          ></div>
          <div
            css={css`
              ${isOpen ? desappearBar : appearBar}
            `}
            className="h-1 w-8 rounded-md bg-white"
          ></div>
          <div
            css={css`
              ${isOpen ? closeBar(-5, 135) : openBar}
            `}
            className="h-1 w-8 rounded-md bg-white"
          ></div>
        </div>
      </div>
      <div className=" col-span-2 col-start-1 row-span-2 row-start-1 flex flex-col items-end justify-center">
        <NavLinks className=" space-y-5 text-2xl font-bold capitalize text-primary" />
      </div>
    </nav>
  );
};

export default Hamburger;
