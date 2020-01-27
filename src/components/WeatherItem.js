import React from "react";

const WeatherItem = ({ city, onItemSelect }) => {
  return (
    <div onClick={() => onItemSelect(city)}>
      <p>
        {city.name}, {city.sys.country}
      </p>
      <p>
        Coordinates: {city.coord.lat}, {city.coord.lon}
      </p>
      <div>
        {city.main.temp}
        <span> &#8457;</span>
      </div>
    </div>
  );
};

export default WeatherItem;
