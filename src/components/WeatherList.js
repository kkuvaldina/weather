import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherList = ({ cityList, onItemSelect }) => {
  const renderedList = cityList.map(city => {
    return (
      <div className="ui segment weather-item">
        <WeatherItem key={city.id} onItemSelect={onItemSelect} city={city} />
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default WeatherList;
