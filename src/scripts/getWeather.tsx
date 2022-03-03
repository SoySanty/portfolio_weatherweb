import axios from "axios";
import timezone from "moment-timezone";
import moment from "moment-timezone";

//Return the search results
const getWeather = (props: {
  lon: number;
  lat: number;
  callbackWeather: any;
}) => {
  const { lon, lat, callbackWeather } = props;

  if (!!!props) {
    return;
  }
  const metadata = {
    lon,
    lat,
    appid: process.env.REACT_APP_WEATHER_TOKEN,
    exclude: "minutely",
    units: "metric",
  };
  axios
    .get(`https://api.openweathermap.org/data/2.5/onecall`, {
      params: metadata,
    })
    .then((res) => {
      const results = res.data;
      const data = {
        time: timezone.tz(results.timezone).format("LL"),
        temp: Math.round(results.current.temp),
        wind: results.current.wind_speed,
        rain: results.current.humidity,
        sunrise: moment(results.current.sunrise * 1000).format("hh:mm a"),
        sunset: moment(results.current.sunset * 1000).format("hh:mm a"),
        icon: results.current.weather[0].icon,
      };
      console.log(res.data);

      callbackWeather(data);
    });
};

export default getWeather;
