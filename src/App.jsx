import React, { useState } from "react";
import SearchSeaction from "./components/SearchSeaction";
import CurrentWeather from "./components/CurrentWeather";
import OtherParameters from "./components/OtherParameters";
import HourlyWeatherItem from "./components/HourlyWeatherItem";
import weatherCodes from "./constants";

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  const filterHourlyForecast = (hourlyData) => {
    const currentHour = new Date().setMinutes(0, 0, 0);
    const next24Hours = currentHour + 24 * 60 * 60 * 1000;

    const next24HoursData = hourlyData.filter(({ time }) => {
      const forecastTime = new Date(time).getTime();
      return forecastTime >= currentHour && forecastTime <= next24Hours;
    });
  };
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const temperature = data.current.temp_c;
      const description = data.current.condition.text;
      const humidity = data.current.humidity;
      const pressure = data.current.pressure_mb;

      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );

      setCurrentWeather({
        temperature,
        description,
        humidity,
        pressure,
        weatherIcon,
      });

      const combineHourDate = [
        ...data.forecast.forecastday[0].hour,
        ...data.forecast.forecastday[1].hour,
      ];

      filterHourlyForecast(combineHourDate);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container text-white">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/10 z-[-1]" />
        {/* search section */}
        <SearchSeaction getWeatherDetails={getWeatherDetails} />

        {/* weather section */}
        <div className="weather-section">
          <CurrentWeather currentWeather={currentWeather} />

          <OtherParameters currentWeather={currentWeather} />
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
