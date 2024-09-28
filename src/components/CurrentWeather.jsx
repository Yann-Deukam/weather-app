import React from "react";

const CurrentWeather = () => {
  return (
    <div className="current-weather-time flex">
      <div className="current-weather">
        {/* <img src="icons/clouds.svg" className="weather-icon" /> */}
        <span className="material-symbols-rounded text-4xl">clear_day</span>
        <h2 className="temperature text-3xl font-bold my-1">
          20 <span>°C</span>
        </h2>
        <p className="description text-sm">cloudy</p>
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
