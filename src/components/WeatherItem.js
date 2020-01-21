import React from "react";

const WeatherItem = ({city, onItemSelect}) => {
    return ( 
        <div onClick={() => onItemSelect(city)} className="item">
            <p>{city.name}, {city.sys.country}</p>
            <p>Coordinates: {city.coord.lat}, {city.coord.lon}</p>
        </div>
    );
};
 
export default WeatherItem;