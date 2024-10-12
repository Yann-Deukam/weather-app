import React, { useRef, useState } from "react";
import SearchSeaction from "./components/SearchSeaction";
import CurrentWeather from "./components/CurrentWeather";
import OtherParameters from "./components/OtherParameters";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import weatherCodes from "./constants";
import NoResult from "./components/NoResult";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hoursForecast, setHourForecast] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const searchInputRef = useRef(null);

  const filterHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000;

    const next24HoursData = hourlyData.filter(({ time }) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime >= currentHour && forecastTime <= next24Hours;

      //ended at 35:30
    });

    setHourForecast(next24HoursData);
  };
  const getWeatherDetails = async (API_URL) => {
    setNoResult(false);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error();
      const data = await response.json();
      const temperature = data.current.temp_c;
      const description = data.current.condition.text;
      const humidity = data.current.humidity;
      const pressure = data.current.pressure_mb;
      const time = data.location.localtime;

      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );

      setCurrentWeather({
        temperature,
        description,
        humidity,
        pressure,
        weatherIcon,
        time,
      });

      searchInputRef.current.value = data.location.name;
      const combineHourDate = [
        ...data.forecast.forecastday[0].hour,
        ...data.forecast.forecastday[1].hour,
      ];

      filterHourlyForecast(combineHourDate);
    } catch {
      setNoResult(true);
    }
  };
  return (
    <>
      <div className="container text-white p-3">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[-1]" />
        {/* search section */}
        <SearchSeaction
          getWeatherDetails={getWeatherDetails}
          searchInputRef={searchInputRef}
        />

        {/* weather section */}
        {noResult ? (
          <NoResult />
        ) : (
          <div className="weather-section">
            <CurrentWeather currentWeather={currentWeather} />

            <OtherParameters currentWeather={currentWeather} />
            <div className="hourly-forecast text-white">
              <ul className="weather-list flex">
                {hoursForecast.map((hourWeather) => (
                  <HourlyWeatherItem
                    key={hourWeather.time_epoch}
                    hourWeather={hourWeather}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
