type Props = {
  time: string;
  icon?: string;
  img?: string;
  temp: number;
};

const HourlyItem = (props: Props) => {
  const { time = "6am", icon = "sunny", temp } = props;
  return (
    <div className="weather-by-hour__item">
      <div className="weather-by-hour__hour">{time}</div>
      <div className="weather-by-hour__icon_container">
        <img
          src={props.img ?? `https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt="weather - icon"
          className="weather-by-hour__icon"
        />
      </div>
      <div>{temp}&deg;</div>
    </div>
  );
};

export default HourlyItem;
