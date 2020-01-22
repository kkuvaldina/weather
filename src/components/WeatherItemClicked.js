import React from "react";

const WeatherItemClicked = ({ city }) => {
  return (
    <div>
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
      <div>{city.weather[0].description}</div>
    </div>
  );
};

export default WeatherItemClicked;
