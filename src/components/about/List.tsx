import { ComponentPropsWithoutRef } from "react";
import { aboutMeContainer } from "../../assets/style/AboutMe.style";

type AboutListProps = ComponentPropsWithoutRef<"div"> & {
  title: string;
  content: string;
};

const List = (props: AboutListProps) => {
  const { title, content } = props;
  return (
    <div
      css={aboutMeContainer}
      className="  group grid size-full max-w-lg grid-cols-1 gap-3 rounded-md border-2 border-tertiary  bg-slate-50 px-3 py-4  hover:border-white hover:bg-secondary sm:px-3 sm:py-8 lg:px-6 lg:py-8 xl:max-w-xl"
    >
      <h2 className="  text-xl font-bold text-tertiary group-hover:text-primary sm:text-3xl ">
        {title}
      </h2>
      <div>
        <p className="text-quaternary group-hover:text-white sm:text-xl ">
          {content}
        </p>
      </div>
    </div>
  );
};

export default List;
