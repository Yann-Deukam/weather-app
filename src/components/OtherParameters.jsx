import React from "react";

const OtherParameters = () => {
  return (
    <div className="parameters flex justify-between">
      <div className="humidity parameter-item">
        <span className="material-symbols-rounded parameter-icon">
          humidity_low
        </span>
        <h4 className="temperature">g/m3</h4>
      </div>
      <div className="pressure parameter-item">
        <span className="material-symbols-rounded parameter-icon">tornado</span>
        <h4 className="temperature">mm/Hg</h4>
      </div>
    </div>
  );
};

export default OtherParameters;
