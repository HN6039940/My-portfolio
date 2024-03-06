import { IconType } from "react-icons";

type SnsListProps = {
  icon: IconType;
  link: string;
};

const SnsList = (props: SnsListProps) => {
  const { icon: Icon, link } = props;
  return (
    <a href={link}>
      <Icon className=" text-3xl text-primary md:text-4xl"></Icon>
    </a>
  );
};

export default SnsList;
