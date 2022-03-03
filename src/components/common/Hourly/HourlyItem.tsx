type Props = {
  hour: string;
  icon?: string;
  img?: string;
  temperature: number;
};

const HourlyItem = (props: Props) => {
  const { hour = "6am", icon = "sunny", temperature } = props;
  return (
    <div className="weather-by-hour__item">
      <div className="weather-by-hour__hour">{hour}</div>
      <img src={props.img ?? "icons/mostly-sunny.svg"} alt={icon ?? ""} />
      <div>{temperature}&deg;</div>
    </div>
  );
};

export default HourlyItem;
