import { skillData } from "../../data/skillData";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className=" min-w-full lg:mb-16" id="skills">
      {/* skills container */}
      <article className=" container mx-auto px-3">
        {/* icon container */}
        <div className="grid grid-cols-1 place-items-center gap-8 py-10">
          {/* skills title */}
          <h2 className="  text-3xl font-bold capitalize text-primary sm:mb-5 sm:text-4xl">
            skills
          </h2>
          {/* skills content */}
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {skillData.map((skill, index) => {
              return <Skill key={index} name={skill.name} icon={skill.icon} />;
            })}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;
