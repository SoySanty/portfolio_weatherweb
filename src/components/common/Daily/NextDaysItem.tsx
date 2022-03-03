type Props = {
  day: string;
  date: string;
  icon: string;
  max: number;
  min: number;
  rain: number;
  wind: number;
};

const NextDaysItem = (props: Props) => {
  const { day, date, icon, max, min, rain, wind } = props;
  return (
    <div className="next-5-days__row">
      <div className="next-5-days__date">
        {day}
        <div className="next-5-days__label">{date}</div>
      </div>

      <div className="next-5-days__low">
        {min}&deg;
        <div className="next-5-days__label">Min</div>
      </div>

      <div className="next-5-days__high">
        {max}&deg;
        <div className="next-5-days__label">Max</div>
      </div>

      <div className="next-5-days__icon">
        <img src={icon} alt="Sunny" />
      </div>

      <div className="next-5-days__rain">
        {rain}%<div className="next-5-days__label">Rain</div>
      </div>

      <div className="next-5-days__wind">
        {wind}mph
        <div className="next-5-days__label">Wind</div>
      </div>
    </div>
  );
};

export default NextDaysItem;
