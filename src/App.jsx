import React from "react";
import SearchSeaction from "./components/SearchSeaction";
import CurrentWeather from "./components/CurrentWeather";
import OtherParameters from "./components/OtherParameters";
import HourlyWeatherItem from "./components/HourlyWeatherItem";

const App = () => {
  return (
    <>
      <div className="container text-white">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[-1]" />
        {/* search section */}
        <SearchSeaction />

        {/* weather section */}
        <div className="weather-section">
          <CurrentWeather />

          <OtherParameters />
          <div className="hourly-forecast text-white">
            <ul className="weather-list flex">
              <HourlyWeatherItem />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
