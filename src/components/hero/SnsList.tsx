import { IconType } from "react-icons";
import { shakeIcon } from "../../assets/style/HeroStyle";

type SnsListProps = {
  icon: IconType;
  link: string;
};

const SnsList = (props: SnsListProps) => {
  const { icon: Icon, link } = props;
  return (
    <a href={link} css={shakeIcon}>
      <Icon className=" text-3xl text-primary md:text-4xl"></Icon>
    </a>
  );
};

export default SnsList;
