import { snsData } from "../../data/snsData";
import SnsList from "./SnsList";
const SnsLists = () => {
  return (
    <div className="flex items-center justify-center gap-3 lg:justify-start ">
      {snsData.map((sns, index) => {
        return <SnsList key={index} link={sns.link} icon={sns.icon} />;
      })}
    </div>
  );
};

export default SnsLists;
