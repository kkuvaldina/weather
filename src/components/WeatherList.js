import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherList = ({ cityList, onItemSelect }) => {
  const renderedList = cityList.map(city => {
    return (
      <div>
        <WeatherItem key={city.id} onItemSelect={onItemSelect} city={city} />
      </div>
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default WeatherList;
