import React from "react";

const WeatherItem = ({ city, onItemSelect }) => {
  return (
    <div onClick={() => onItemSelect(city)} className="ui segment">
      <img
        src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`}
        alt={city.weather[0].description}
      />
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
