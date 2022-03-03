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
      const current = {
        time: timezone.tz(results.timezone).format("LL"),
        temp: Math.round(results.current.temp),
        wind: results.current.wind_speed,
        rain: results.current.humidity,
        sunrise: moment.unix(results.current.sunrise).format("hh:mm a"),
        sunset: moment.unix(results.current.sunset).format("hh:mm a"),
        icon: results.current.weather[0].icon,
      };
      const hourly = results.hourly
        .filter((hour: any, index: number) => index < 7)
        .map((hour: any) => ({
          time: moment.unix(hour.dt).format("hh:mm a"),
          temp: Math.round(hour.temp),
          icon: hour.weather[0].icon,
        }));
      const daily = results.daily
        .filter((day: any, index: number) => index < 5)
        .map((day: any) => ({
          date: moment.unix(day.dt).format("DD/MM"),
          icon: day.weather[0].icon,
          temp: Math.round(day.temp.day),
          max: Math.round(day.temp.max),
          min: Math.round(day.temp.min),
          rain: day.rain,
          wind: day.wind_speed,
        }));

      callbackWeather({ current, hourly, daily });
    });
};

export default getWeather;
