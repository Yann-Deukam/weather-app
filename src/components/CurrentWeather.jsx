import React, { useEffect, useState } from "react";

const CurrentWeather = ({ currentWeather }) => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    if (currentWeather.time) {
      const [date, time] = currentWeather.time.split(" ");
      const [year, month, day] = date.split("-").map(Number);
      const [hour, minute] = time.split(":").map(Number);

      let locationTime = new Date(year, month - 1, day, hour, minute);

      // Function to update local time
      const updateLocalTime = () => {
        locationTime.setSeconds(locationTime.getSeconds() + 1);
        const formattedTime = locationTime.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        setLocalTime(formattedTime);
      };

      // Update local time immediately and set interval
      updateLocalTime();
      const interval = setInterval(updateLocalTime, 1000);

      return () => clearInterval(interval);
    }
  }, [currentWeather.time]);

  // Function to format time based on screen size
  const formatTimeForDisplay = () => {
    const [hour, minute] = localTime.split(":");
    return window.innerWidth < 768 // Assuming 768px as the breakpoint
      ? `${hour}:${minute}` // Remove seconds for small screens
      : localTime; // Show full time for larger screens
  };

  return (
    <div className="current-weather-time flex">
      <div className="current-weather">
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
          <img src="./icon/watch.svg" alt="watch" className="parameter-icon" />
          <h2 className="text-4xl font-square text-teal-200">
            {formatTimeForDisplay()}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
