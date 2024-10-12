import React from "react";
import weatherCodes from "../constants";

const HourlyWeatherItem = ({ hourWeather }) => {
  const weatherIcon = Object.keys(weatherCodes).find((icon) =>
    weatherCodes[icon].includes(hourWeather.condition.code)
  );
  const temperature = Math.floor(hourWeather.temp_c);
  const time = hourWeather.time.split(" ")[1].substring(0, 5);
  return (
    <li className="weather-item mt-10">
      <p className="time">{time}</p>
      {/* <img src="icons/clouds.svg" className="weather-icon" /> */}
      <img
        src={`icon/${weatherIcon}.svg`}
        className="weather-icon h-5 mx-auto text-teal-400"
        style={{
          filter:
            "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
      <p className="temperature">{temperature}°</p>
    </li>
  );
};

export default HourlyWeatherItem;
