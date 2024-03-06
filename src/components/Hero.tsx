import MyImage from "../assets/image/MyImage.PNG";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className=" min-w-full overflow-hidden bg-hero-pattern bg-cover  lg:bg-left">
      <div className=" mx-auto grid w-11/12 grid-cols-1 place-items-center gap-10 py-10 text-primary ">
        {/* image wrapper */}
        <figure className=" size-40 sm:size-60">
          {/* image */}
          <img
            src={MyImage}
            alt={"MyImage"}
            className=" h-full w-full rounded-[50%] object-cover  object-center"
          />
        </figure>
        <article>
          <div className=" grid grid-cols-1 place-items-center gap-3">
            {/* intro */}
            <h2 className=" text-3xl font-bold sm:text-5xl ">
              Hello. I’m H1Na
            </h2>
            <h2 className="  text-lg sm:text-2xl">FrontEnd Junior developer</h2>
            <div className=" mb-5 grid grid-cols-1 place-content-center gap-3 px-2 text-sm sm:text-lg">
              <p>
                a passion for creating beautiful and functional user
                experiences.
              </p>
              <p>I am currently learning React and TypeScript.</p>
            </div>
          </div>

          {/* sns icon */}
          <div className="flex justify-center gap-3 ">
            <a href="#">
              <FaGithub className=" text-3xl text-primary"></FaGithub>
            </a>
            <a href="#" className=" hover:drop-shadow-2xl">
              <FaXTwitter className=" stroke-black text-3xl text-primary"></FaXTwitter>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
