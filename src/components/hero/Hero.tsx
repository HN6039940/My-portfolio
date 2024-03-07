import { useEffect, useRef } from "react";
import Typed from "typed.js";

import MyImage from "../../assets/image/MyImage.PNG";
import SnsLists from "./SnsLists";

import { heroBgImage, pulse } from "../../assets/style/HeroStyle";

const Hero = () => {
  const typedText = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const options = {
      strings: ["I'm FrontEnd junior Developer", "I'm React junior Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };
    const typed = new Typed(typedText.current, options);
    return () => typed.destroy();
  });

  return (
    <section
      css={heroBgImage}
      className=" min-w-full  bg-hero-pattern bg-cover lg:bg-left"
    >
      <div className=" mx-auto grid w-11/12 grid-cols-1 place-items-center gap-10 py-10 text-primary md:gap-14 lg:grid-cols-2 lg:gap-5 lg:px-10 lg:py-40 xl:px-32 ">
        {/* image wrapper */}
        <figure className=" relative z-0 size-40 sm:size-60 lg:order-2 lg:size-80 xl:size-96 ">
          {/* image */}
          <span
            css={pulse(0)}
            className="absolute inset-0 z-10 h-[100%] w-[100%] rounded-[50%] border-2 border-secondary "
          ></span>
          <span
            css={pulse(2.5)}
            className="absolute inset-0 z-10 h-[100%] w-[100%] rounded-[50%] border-2 border-secondary "
          ></span>
          <img
            src={MyImage}
            alt={"MyImage"}
            className=" relative z-20 h-full w-full rounded-[50%] object-cover object-center"
          />
        </figure>
        <article>
          <div className=" grid grid-cols-1 place-items-center gap-3 md:gap-6 lg:place-items-start">
            {/* intro */}
            <h2 className=" text-3xl font-bold sm:text-4xl xl:text-5xl ">
              Hello. I’m H1Na
            </h2>
            <h2
              ref={typedText}
              className=" min-h-7 text-lg font-bold sm:text-2xl md:min-h-9 md:text-3xl xl:text-3xl"
            ></h2>
            <div className=" mb-5 grid grid-cols-1 place-content-center gap-3 px-2 text-sm sm:text-lg md:text-xl xl:text-2xl">
              <p className="text-center sm:text-start">
                a passion for creating beautiful and functional user
                experiences.
              </p>
              <p className="text-center sm:text-start">
                I am currently learning React and TypeScript.
              </p>
            </div>
          </div>

          {/* sns icon */}
          <SnsLists />
        </article>
      </div>
    </section>
  );
};

export default Hero;
