import List from "./List";
import { aboutMeData } from "../../data/aboutMe";

type AboutMeData = {
  title: string;
  content: string;
};

const Lists = () => {
  return (
    <div className="py- grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-0 sm:gap-y-2 ">
      {/* grid container */}
      {/* aboutme content */}
      {aboutMeData.map((data: AboutMeData, index: number) => {
        return <List key={index} title={data.title} content={data.content} />;
      })}
    </div>
  );
};

export default Lists;
