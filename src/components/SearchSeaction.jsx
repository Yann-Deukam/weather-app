import React from "react";

const SearchSeaction = ({ getWeatherDetails, searchInputRef }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
    getWeatherDetails(API_URL);
  };

  const handleLocationSearch = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}&days=2`;
        getWeatherDetails(API_URL);
        console.log(position);
      },
      () => {
        alert(
          "Location access denied, please enable permissions to use this feature"
        );
      }
    );
  };
  return (
    <div className="search-section mt-10 p-10 bg-black/20 backdrop-blur-md border border-white/10 rounded-md">
      <form action="" className="search-form" onSubmit={handleCitySearch}>
        <input
          type="text"
          className="search-input w-44 -ml-2 py-2 bg-transparent focus:outline-none"
          placeholder="Enter a city name"
          ref={searchInputRef}
        />
        <button type="submit">
          <span className="material-symbols-rounded mx-4 cursor-pointer weather-button">
            search
          </span>
        </button>
      </form>
      <button
        className="location-button ml-[70px]"
        onClick={handleLocationSearch}
      >
        <span className="material-symbols-rounded weather-button">
          my_location
        </span>
      </button>
    </div>
  );
};

export default SearchSeaction;
