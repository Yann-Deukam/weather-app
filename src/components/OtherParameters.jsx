import React from "react";

const OtherParameters = ({ currentWeather }) => {
  return (
    <div className="parameters flex justify-center">
      <div className="humidity parameter-item">
        <span className="material-symbols-rounded parameter-icon">
          humidity_low
        </span>
        <h4 className="temperature">
          {currentWeather.humidity}
          <span>g/m3</span>
        </h4>
      </div>
      <div className="pressure parameter-item ml-3">
        <span className="material-symbols-rounded parameter-icon">tornado</span>
        <h4 className="temperature">
          {currentWeather.pressure}
          <span>mm/Hg</span>
        </h4>
      </div>
    </div>
  );
};

export default OtherParameters;
