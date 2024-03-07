import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";
import { skillContainer } from "../../assets/style/Skills.style";

type SkillType = ComponentPropsWithoutRef<"div"> & {
  name: string;
  icon: IconType;
};

const Skill = (props: SkillType) => {
  const { icon: Icon } = props;
  return (
    <div
      css={skillContainer}
      className=" group relative flex flex-col items-center overflow-hidden rounded-md bg-white p-5"
    >
      <Icon className=" z-10 text-7xl text-primary group-hover:text-white md:text-8xl" />
    </div>
  );
};

export default Skill;
