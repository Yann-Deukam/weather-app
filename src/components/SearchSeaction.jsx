import React from "react";

const SearchSeaction = ({ getWeatherDetails }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}&days=2`;
    getWeatherDetails(API_URL);
  };
  return (
    <div className="search-section mt-10 p-10 bg-black/20 backdrop-blur-md border border-white/10 rounded-md">
      <form action="" className="search-form" onSubmit={handleCitySearch}>
        <input
          type="text"
          className="search-input w-44 -ml-2 py-2 bg-transparent focus:outline-none"
          placeholder="Enter a city name"
          required
        />
        <button type="submit">
          <span className="material-symbols-rounded mx-4 cursor-pointer weather-button">
            search
          </span>
        </button>
        <button className="location-button ml-[70px]">
          <span className="material-symbols-rounded weather-button">
            my_location
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchSeaction;
