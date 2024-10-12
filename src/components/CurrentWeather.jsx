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
    <div className="current-weather-time flex justify-center">
      <div className="current-weather w-[200px]">
        {currentWeather.weatherIcon ? (
          <>
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
          </>
        ) : (
          <p className="text-center font-semibold text-white/40">
            No current weather data available.
          </p>
        )}
      </div>
      <div className="w-[142px] current-time flex flex-col items-center pt-12">
        <img
          src="./icon/watch.svg"
          alt="watch"
          className="h-10"
          style={{
            filter:
              "invert(0%) sepia(100%) saturate(100%) hue-rotate(180deg) brightness(100%) contrast(100%)",
          }}
        />
        {localTime ? ( // Check if localTime has a value before rendering
          <h2 className="text-4xl font-square text-teal-200">
            {formatTimeForDisplay()}
          </h2>
        ) : (
          <h2 className="text-4xl font-square text-teal-200">
            {/* Render nothing or a placeholder if localTime is undefined */}
            {/* You can leave this empty or add a message if you prefer */}
          </h2>
        )}
      </div>
    </div>
  );
};

export default CurrentWeather;
