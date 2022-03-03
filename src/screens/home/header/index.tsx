// import Menu from "components/layout/menu/Menu";
import Search from "components/common/Search/";

type Props = {
  name: string;
  time: string;
};

const Header = (props: Props) => {
  const { name, time } = props;

  return (
    <header className="location-and-date">
      <div className="top-bar">
        <Search />
        {/* <Menu /> */}
      </div>
      <div className="">
        <h1 className="location-and-date__location">{name}</h1>
        <div>{time}</div>
      </div>
    </header>
  );
};
export default Header;
