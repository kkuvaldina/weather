import React from "react";
import SearchForm from "./SearchForm";
import WeatherList from "./WeatherList";
import WeatherItemClicked from "./WeatherItemClicked";
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

  onItemSelect = city => {
    this.setState({ selectedCity: city });
  };

  render() {
    return (
      <div className="ui center aligned container">
        <SearchForm onFormSubmit={this.onFormSubmit} />
        <div className="ui compact segments">
          <WeatherList
            cityList={this.state.cityList}
            onItemSelect={this.onItemSelect}
          />
        </div>
        <div>
          <WeatherItemClicked selectedCity={this.state.selectedCity} />
        </div>
      </div>
    );
  }
}

export default App;
