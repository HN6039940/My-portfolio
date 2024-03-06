import Lists from "./about/Lists";

const AboutMe = () => {
  return (
    <section className="  min-w-full py-10">
      {/* aboutme container */}
      <article className=" container mx-auto grid grid-cols-1 place-items-center gap-8 px-3">
        {/* aboutme title */}
        <h2 className=" text-3xl font-bold capitalize text-primary sm:text-4xl">
          about me
        </h2>
        {/* aboutme content */}
        <Lists />
      </article>
    </section>
  );
};

export default AboutMe;
