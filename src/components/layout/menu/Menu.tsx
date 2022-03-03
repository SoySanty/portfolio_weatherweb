import { MenuIcon } from "components/common/icons";

type Props = {};

const Menu = (props: Props) => {
  return (
    <nav className="menu">
      <div className="menu-switch">
        <MenuIcon className="menu-icon" />
      </div>
    </nav>
  );
};

export default Menu;
