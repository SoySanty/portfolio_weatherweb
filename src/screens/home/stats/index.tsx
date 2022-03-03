type Props = {
  temp?: number;
  tempString?: string;
  max?: number;
  min?: number;
  wind?: number;
  rain?: number;
  sunrise?: string;
  sunset?: string;
  icon?: string;
};

const SiteStats = (props: Props) => {
  const { temp, tempString, wind, rain, sunrise, sunset, icon } = props;
  return (
    <>
      <div className="current-temperature">
        <div className="current-temperature__icon-container">
          <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            className="current-temperature__icon"
            alt=""
          />
        </div>
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">{temp}&deg;</div>
          <div className="current-temperature__summary">
            {tempString &&
              tempString.slice(0, 1).toUpperCase() + tempString.slice(1)}
          </div>
        </div>
      </div>

      <div className="current-stats">
        {/* <div>
          <div className="current-stats__value">{max}&deg;</div>
          <div className="current-stats__label">Max</div>
          <div className="current-stats__value">{min}&deg;</div>
          <div className="current-stats__label">Min</div>
        </div> */}
        <div>
          <div className="current-stats__value">{wind}Km/h</div>
          <div className="current-stats__label">Wind</div>
          <div className="current-stats__value">{rain}%</div>
          <div className="current-stats__label">Humidity</div>
        </div>
        <div>
          <div className="current-stats__value">{sunrise}</div>
          <div className="current-stats__label">Sunrise</div>
          <div className="current-stats__value">{sunset}</div>
          <div className="current-stats__label">Sunset</div>
        </div>
      </div>
    </>
  );
};

export default SiteStats;
