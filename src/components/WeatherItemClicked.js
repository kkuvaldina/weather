import React from "react";

const WeatherItemClicked = ({ selectedCity }) => {
  if (!selectedCity) {
    return <div></div>;
  }
  return (
    <div className="ui segment weather-item-clicked">
      <img
        src={`http://openweathermap.org/img/w/${selectedCity.weather[0].icon}.png`}
        alt={selectedCity.weather[0].description}
      />
      <p>
        {selectedCity.name}, {selectedCity.sys.country}
      </p>
      <p>
        Coordinates: {selectedCity.coord.lat}, {selectedCity.coord.lon}
      </p>
      <div>
        {selectedCity.main.temp}
        <span> &#8457;</span>
      </div>
      <div>{selectedCity.weather[0].description}</div>
      <div>Feels like: {selectedCity.main.feels_like}<span> &#8457;</span></div>
      <div>Humidity: {selectedCity.main.humidity}</div>
    </div>
  );
};

export default WeatherItemClicked;
