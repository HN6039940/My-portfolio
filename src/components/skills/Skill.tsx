import { ComponentPropsWithoutRef } from "react";
import { IconType } from "react-icons";

type SkillType = ComponentPropsWithoutRef<"div"> & {
  name: string;
  icon: IconType;
};

const Skill = (props: SkillType) => {
  const { icon: Icon } = props;
  return (
    <div className="flex flex-col items-center rounded-md bg-white p-5">
      <Icon className=" text-7xl text-primary md:text-8xl" />
    </div>
  );
};

export default Skill;
