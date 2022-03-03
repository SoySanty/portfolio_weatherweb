import NextDaysItem from "components/common/Daily/NextDaysItem";
import HourlyItem from "components/common/Hourly/HourlyItem";
import { useSelector } from "react-redux";
import Header from "screens/home/header/index";
import SiteStats from "./stats";

const temperatures = [
  {
    hour: "3am",
    img: "icons/mostly-sunny.svg",
    temperature: 14,
  },
  {
    hour: "6am",
    img: "icons/mostly-sunny.svg",
    temperature: 16,
  },
  {
    hour: "9am",
    img: "icons/mostly-sunny.svg",
    temperature: 18,
  },
  {
    hour: "12am",
    img: "icons/sunny.svg",
    temperature: 20,
  },
  {
    hour: "3am",
    img: "icons/sunny.svg",
    temperature: 25,
  },
  {
    hour: "6am",
    img: "icons/sunny.svg",
    temperature: 20,
  },
  {
    hour: "9am",
    img: "icons/mostly-sunny.svg",
    temperature: 23,
  },
];

const next = [
  {
    day: "Tue",
    date: "30/07",
    max: 21,
    min: 10,
    rain: 0,
    wind: 12,
    icon: "icons/sunny.svg",
  },
  {
    day: "Wed",
    date: "31/07",
    max: 11,
    min: 15,
    rain: 7,
    wind: 7,
    icon: "icons/sunny.svg",
  },
  {
    day: "Thur",
    date: "32/07",
    max: 21,
    min: 17,
    rain: 20,
    wind: 12,
    icon: "icons/sunny.svg",
  },
  {
    day: "Fri",
    date: "33/07",
    max: 25,
    min: 13,
    rain: 50,
    wind: 10,
    icon: "icons/mostly-sunny.svg",
  },
  {
    day: "Sat",
    date: "34/07",
    max: 22,
    min: 17,
    rain: 8,
    wind: 11,
    icon: "icons/mostly-sunny.svg",
  },
];

const Home = () => {
  //Get store data
  const store = useSelector((store: any) => store.search.placeTarget);

  return (
    <main className="main-container">
      <Header {...store} />

      <SiteStats {...store} />

      <div className="weather-by-hour">
        <h2 className="weather-by-hour__heading">Today's weather</h2>
        <div className="weather-by-hour__container">
          {temperatures.map((temperature, index) => (
            <HourlyItem key={index} {...temperature} />
          ))}
        </div>
      </div>

      <div className="next-5-days">
        <h2 className="next-5-days__heading">Next 5 days</h2>
        <div className="next-5-days__container">
          {next.map((day, index) => (
            <NextDaysItem {...day} key={index} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
