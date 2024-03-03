import MyImage from "../assets/image/MyImage.PNG";

const Hero = () => {
  return (
    <section className=" bg-hero-pattern min-w-full overflow-hidden bg-cover">
      <div className=" mx-auto grid w-11/12 grid-cols-1 place-items-center gap-10 py-10 text-primary ">
        {/* image wrapper */}
        <article className=" h-40 w-40">
          <img
            src={MyImage}
            alt={"MyImage"}
            className=" h-full w-full rounded-[50%] object-cover  object-center"
          />
          {/* image */}
        </article>
        <article>
          <div className=" grid grid-cols-1 place-items-center gap-3">
            {/* intro */}
            <h2 className=" text-3xl font-bold ">Hello. I’m H1Na</h2>
            <h2 className="  text-lg">FrontEnd Junior developer</h2>
            <div className=" mb-5 grid grid-cols-1 place-content-center gap-3 px-2 text-sm">
              <p>
                a passion for creating beautiful and functional user
                experiences.
              </p>
              <p>I am currently learning React and TypeScript.</p>
            </div>
          </div>

          {/* sns icon */}
          <div className="flex justify-center gap-3">
            <p>X</p>
            <p>GIT HUB</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hero;
