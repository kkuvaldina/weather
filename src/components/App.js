import React from "react";
import SearchForm from "./SearchForm";
import WeatherList from "./WeatherList";

import axios from "axios";

class App extends React.Component {
  state = {
    cityList: [],
    selectedCity: null
  };

  onFormSubmit = city => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/find?q=${city}&units=imperial&appid=34aaa0e555c329549590da7f88d639b3`
      )
      .then(response => {
        this.setState({
          cityList: response.data.list
        });
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  inItemSelect = city => {
      this.setState({selectedCity: city});
  }

  render() {
    return (
      <div className="ui center aligned container">
        <SearchForm onFormSubmit={this.onFormSubmit} />
        <WeatherList
          cityList={this.state.cityList}
          onItemSelect={this.onItemSelect}
        ></WeatherList>
      </div>
    );
  }
}

export default App;
