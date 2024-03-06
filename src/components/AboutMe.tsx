import Lists from "./about/Lists";

const AboutMe = () => {
  return (
    <section className="  min-w-full py-10" id="aboutMe">
      {/* aboutme container */}
      <article className=" container mx-auto grid grid-cols-1 place-items-center gap-8 px-3 md:mb-16 ">
        {/* aboutme title */}
        <h2 className=" text-3xl font-bold capitalize text-primary sm:text-4xl md:mb-5">
          about me
        </h2>
        {/* aboutme content */}
        <Lists />
      </article>
    </section>
  );
};

export default AboutMe;
