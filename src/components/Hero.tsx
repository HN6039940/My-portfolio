import MyImage from "../assets/image/MyImage.PNG";
import SnsLists from "./hero/SnsLists";

const Hero = () => {
  return (
    <section className=" min-w-full overflow-hidden bg-hero-pattern bg-cover lg:bg-left">
      <div className=" mx-auto grid w-11/12 grid-cols-1 place-items-center gap-10 py-10 text-primary md:gap-14 lg:grid-cols-2 lg:gap-5 lg:px-10 lg:py-40 xl:px-32 ">
        {/* image wrapper */}
        <figure className=" size-40 sm:size-60 lg:order-2 lg:size-80 xl:size-96 ">
          {/* image */}
          <img
            src={MyImage}
            alt={"MyImage"}
            className=" h-full w-full rounded-[50%] object-cover  object-center"
          />
        </figure>
        <article>
          <div className=" grid grid-cols-1 place-items-center gap-3 md:gap-6 lg:place-items-start">
            {/* intro */}
            <h2 className=" text-3xl font-bold sm:text-4xl xl:text-5xl ">
              Hello. I’m H1Na
            </h2>
            <h2 className="  text-lg sm:text-2xl md:text-3xl xl:text-3xl">
              FrontEnd Junior developer
            </h2>
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
