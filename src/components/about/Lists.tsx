import List from "./List";
import { aboutMeData } from "../../data/aboutMeData";

type AboutMeData = {
  title: string;
  content: string;
};

const Lists = () => {
  return (
    <div className="grid grid-cols-1 place-items-center gap-5  py-5 lg:grid-cols-2 lg:grid-rows-2 lg:gap-x-5 lg:gap-y-2 ">
      {/* grid container */}
      {/* aboutme content */}
      {aboutMeData.map((data: AboutMeData, index: number) => {
        return <List key={index} title={data.title} content={data.content} />;
      })}
    </div>
  );
};

export default Lists;
