type NavLinkProps = {
  title: string;
  path: string;
};

const NavLink = (props: NavLinkProps) => {
  const { title, path } = props;
  return (
    <>
      <li className=" cursor-pointer">
        <a href={path}> {title} </a>
      </li>
    </>
  );
};

export default NavLink;
