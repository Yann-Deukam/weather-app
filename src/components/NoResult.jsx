import React from "react";

const NoResult = () => {
  return (
    <>
      <div className="no-result text-white flex text-center items-center flex-col min-h-[460px] px-20 py-10">
        <img
          src="icon/no-result.svg"
          alt="No result found"
          className="ico w-20"
          style={{
            filter:
              "invert(100%) sepia(50%) saturate(1000%) hue-rotate(0deg) brightness(100%) contrast(50%)",
          }}
        />
        <h3 className="title my-3 font-bold text-xl">Something went wrong</h3>
        <p className="message">
          We have issues retrieving the weather data. Make sure you entered a
          valid city name or try again later
        </p>
      </div>
    </>
  );
};

export default NoResult;
