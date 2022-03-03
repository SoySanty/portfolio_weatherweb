// import { useShowWeather } from "components/hooks/search/useShowWeather";
import { useDispatch, useSelector } from "react-redux";
import { setPlace } from "state/actions/search";
import getWeather from "scripts/getWeather";

type Props = { data: any[] };

const OptionList = (props: Props) => {
  //Redux
  const store = useSelector((store: any) => store.search.placeTarget);

  const dispatch = useDispatch();

  //Handle events
  const handleClick = (item: any) => {
    dispatch(setPlace(item));
    getWeather({
      ...item.position,
      callbackWeather: (data: any) => dispatch(setPlace(data)),
    });
  };

  return props.data.length > 0 ? (
    <div className="search-results">
      <ul className="search-results__list">
        {props.data.map((item: any) => (
          <li
            key={item.id}
            className="search-results__item"
            onClick={() => handleClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <></>
  );
};

export default OptionList;
