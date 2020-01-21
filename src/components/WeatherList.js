import React from "react";
import WeatherItem from "./WeatherItem";

const WeatherList = ({ cityList, onItemSelect }) => {
  const renderedList = cityList.map(city => {
    return (
      <WeatherItem
        key={city.id}
        onItemSelect={onItemSelect}
        city={city}
      ></WeatherItem>
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default WeatherList;
