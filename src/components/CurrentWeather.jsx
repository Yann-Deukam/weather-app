import React from "react";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="current-weather-time flex">
      <div className="current-weather">
        {/* <img src="icons/clouds.svg" className="weather-icon" /> */}
        <img
          src={`icon/${currentWeather.weatherIcon}.svg`}
          className="weather-icon h-16 mx-auto text-teal-400"
          style={{
            filter:
              "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",
          }}
        />
        <h2 className="temperature text-3xl font-bold my-1">
          {currentWeather.temperature} <span>°C</span>
        </h2>
        <p className="description text-sm">{currentWeather.description}</p>
      </div>
      <div className="current-time">
        <div className="relative pt-12">
          <span className="material-symbols-rounded text-white/50">
            bedtime
          </span>
          <h2 className="text-4xl font-square text-teal-200">00:00</h2>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
