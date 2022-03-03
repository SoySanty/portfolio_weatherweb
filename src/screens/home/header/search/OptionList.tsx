// import { useShowWeather } from "components/hooks/search/useShowWeather";
import { useDispatch } from "react-redux";
import { setDaily, setHourly, setPlace } from "state/actions/search";
import getWeather from "scripts/getWeather";

type Props = { data: any[] };

const OptionList = (props: Props) => {
  const dispatch = useDispatch();

  //Handle events
  const handleClick = (data: any) => {
    dispatch(setPlace(data));
    //Recieving data from get weather
    getWeather({
      ...data.position,
      callbackWeather: (props: { current: any; hourly: any; daily: any }) => {
        const { current, hourly, daily } = props;
        console.log(daily);

        dispatch(setPlace(current));
        dispatch(setHourly(hourly));
        dispatch(setDaily(daily));
      },
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
