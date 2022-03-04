import { useState } from "react";
import NextDaysItem from "components/common/Daily/NextDaysItem";
import HourlyItem from "components/common/Hourly/HourlyItem";
import Search from "components/common/Search";
import WelcomeModal from "components/layout/modal";
import { useSelector } from "react-redux";
import Header from "screens/home/header/index";
import SiteStats from "./stats";

const Home = () => {
  //Get store data
  const store = useSelector((store: any) => ({
    ...store.search,
    ...store.modal,
  }));
  const [showModal, setShowModal] = useState(
    localStorage.getItem("welcomeModal") ? false : true
  );

  //Modal
  const handleCloseModal = () => {
    // //Verifiying if the storage has data
    localStorage.setItem("welcomeModal", "zi :)");
    setShowModal(false);
  };

  return (
    <main className="main-container">
      {showModal && <WelcomeModal onClick={handleCloseModal} />}
      {store.placeTarget.id ? (
        <>
          <Header {...store.placeTarget} />
          <SiteStats {...store.placeTarget} />
          <div className="weather-by-hour">
            <h2 className="weather-by-hour__heading">Hourly</h2>
            <div className="weather-by-hour__container">
              {store.hourly.map((data: any, index: number) => (
                <HourlyItem key={index} {...data} />
              ))}
            </div>
          </div>
          <div className="next-5-days">
            <h2 className="next-5-days__heading">Next 5 days</h2>
            <div className="next-5-days__container">
              {store.daily.map((day: any, index: number) => (
                <NextDaysItem {...day} key={index} />
              ))}
            </div>
          </div>
        </>
      ) : (
        <section className="search-section">
          <div className="search-box">
            <Search />
          </div>
          <p className="search-section__subtitle">
            Ingresa el nombre de tu ciudad, provincia, estado, etc.
          </p>
        </section>
      )}
    </main>
  );
};

export default Home;
