import React from "react";

const SearchSeaction = () => {
  return (
    <div className="search-section mt-10 p-10 bg-black/20 backdrop-blur-md border border-white/10 rounded-md">
      <form action="" className="search-form">
        <input
          type="text"
          className="search-input w-44 -ml-2 py-2 bg-transparent focus:outline-none"
          placeholder="Enter a city name"
          required
        />
        <button>
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
