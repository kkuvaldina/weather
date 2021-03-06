import React from "react";

const WeatherItemClicked = ({ selectedCity }) => {
  
  if (!selectedCity) {
    return <div></div>;
  }
  return (
    <div className="ui segment weather-item-clicked equal width grid">
      <div className="four wide column">
        
          <img
            src={`http://openweathermap.org/img/w/${selectedCity.weather[0].icon}.png`}
            alt={selectedCity.weather[0].description}
            className="weather-image"
          />
        
      </div>
      <div className="twelve wide column">
       
          <p className="weather-city-name">
            {selectedCity.name}, {selectedCity.sys.country}
          </p>
          
          <div className="weather-temp">
            {Math.round(selectedCity.main.temp)}
            <span> &#8457;</span>
          </div>
          <div className="weather-temp small">
            {Math.round((selectedCity.main.temp - 32)*5/9)}
            <span> &#8451;</span>
          </div>

          <div>{selectedCity.weather[0].description}</div>
          <div>
            Feels like: {selectedCity.main.feels_like}
            <span> &#8457;</span>
          </div>
          <div>Humidity: {selectedCity.main.humidity}</div>
          <p>
            Coordinates: {selectedCity.coord.lat}, {selectedCity.coord.lon}
          </p>
      </div>
    </div>
  );
};



export default WeatherItemClicked;
