type NavLinkProps = {
  title: string;
  path: string;
  setIsOpen?: (isOpen: boolean) => void;
};

const NavLink = (props: NavLinkProps) => {
  const { title, path, setIsOpen } = props;
  return (
    <>
      <li
        className="cursor-pointer"
        onClick={() => (setIsOpen ? setIsOpen(false) : undefined)}
      >
        <a href={path} className="group relative">
          {title}
          <span className="absolute -bottom-0.5 left-0 h-1 w-full origin-center scale-0 rounded-sm bg-white transition-all  group-hover:scale-100"></span>
        </a>
      </li>
    </>
  );
};

export default NavLink;
