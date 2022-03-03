import { FiSearch } from "react-icons/fi";
import { RiMenu4Line } from "react-icons/ri";

type Props = {
  className?: string;
};

const SearchIcon = (props: Props) => (
  <FiSearch className={props.className ?? ""} />
);
const MenuIcon = (props: Props) => (
  <RiMenu4Line className={props.className ?? ""} />
);

export { SearchIcon, MenuIcon };
